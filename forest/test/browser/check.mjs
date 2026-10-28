// A browser check of Winter Forest, steps 1 and 2 (Playwright with Chromium; run in the build chat's sandbox, or anywhere
// Playwright is installed): node forest/test/browser/check.mjs [folder for screenshots]
// It serves the tile as forest/dev/serve.mjs does (with the tile's security policy) and tries it:
//   - on its own (no host): the postcard and its line, nothing else (W16, W23)
//   - with the stand-in host (forest/dev/host.html): hello naming the forest's ways, the status, arriving at each of
//     the four entrances (W19) and standing where they say (the tree-door's inside the tunnel, facing the mouth: W31)
//   - walking (holding ↑, as a player) up the wardrobe's lane into the doors: dormant, the note; open, the doors swing,
//     white, way.leave with exit "wardrobe" and a facing; the arch the same (the ripple, pale blue)
//   - in through the great tree's mouth to its door (dormant: the note; open: it opens onto amber, way.leave
//     "tree-door"), and out again; in by the library's door, onto the bench, into the little door (dormant: the note;
//     open: the shrink, the ride's wood, ice and blue, way.leave "slide"; nobody takes you on: the lamp post)
//   - a way that's blocked (no host takes you on): back at the portal, "The way is blocked."
//   - coming back through the same portal (the host's round trip), "reduce motion", a phone-sized window
// WebGL runs in software here (SwiftShader), a few frames a second, so it waits generously.
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { startDev } from '../../dev/serve.mjs';
import * as L from '../../src/layout.js';
import * as I from '../../src/inside.js';

const require = createRequire(import.meta.url);
let playwright;
try { playwright = require('playwright'); } catch { playwright = require('/opt/npm-tools/node_modules/playwright'); }
const OUT = process.argv[2] || null;
if (OUT) mkdirSync(OUT, { recursive: true });

const PORT = 5218;
const server = await startDev({ port: PORT, quiet: true });
const browser = await playwright.chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
let failures = 0;
const ok = (cond, msg) => { console.log(`${cond ? 'ok  ' : 'FAIL'} ${msg}`); if (!cond) failures++; };
const pages = [];

async function newPage(opts = {}) {
  const page = await browser.newPage({ viewport: { width: 980, height: 900 }, ...opts });
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' || /Content.Security.Policy|Refused/.test(m.text())) page.errors.push(m.text()); });
  pages.push(page);
  return page;
}
// The stand-in host with the forest in its frame. query: e.g. 'open=wardrobe&roundtrip=0'
async function hosted(query = '', opts) {
  const page = await newPage(opts);
  await page.goto(`http://127.0.0.1:${PORT}/dev/host.html?${query}`);
  await page.waitForFunction(() => window.__host, null, { timeout: 30000 });
  page.forest = () => page.frame({ url: new RegExp(`${PORT}/$`) });
  await page.forest().waitForFunction(() => window.__forest, null, { timeout: 60000 });
  return page;
}
const st = (page) => page.forest().evaluate(() => window.__forest.state());
const hostLog = (page) => page.evaluate(() => window.__host.log);
const shot = async (page, name) => { if (!OUT) return; const clip = await page.locator('#forest').boundingBox(); await page.screenshot({ path: path.join(OUT, `${name}.png`), clip, timeout: 60000 }); };
const noteText = (page) => page.forest().evaluate(() => { const n = document.getElementById('note'); return n.classList.contains('show') ? n.textContent : ''; });
const until = async (page, fn, arg, ms = 30000) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { if (await fn(page, arg)) return true; await page.waitForTimeout(150); } return false; };
const near = (s, e, d = 0.15) => Math.hypot(s.x - e.x, s.z - e.z) < d;
const arrive = (page, id) => page.evaluate((id) => window.__host.arrive(id), id);
// Put the figure somewhere (the hook), then walk forwards by holding ↑ until fn says stop.
const jump = (page, x, z, yaw, where = 'forest', level) => page.forest().evaluate(([x, z, yaw, w, l]) => window.__forest.jump(x, z, yaw, w, l ?? undefined), [x, z, yaw, where, level ?? null]);
async function holdUp(page, stop, ms = 15000) {
  await page.locator('#forest').click({ position: { x: 600, y: 240 } });
  await page.forest().evaluate(() => { window.__forest.held.forward = true; });
  const done = await until(page, stop, null, ms);
  await page.forest().evaluate(() => { window.__forest.held.forward = false; });
  return done;
}
const towards = (id, u, v = 0) => { const f = L.FRAMES[id]; const [x, z] = L.world(f, u, v); return { x, z, yaw: L.yawFacing(f.d[0], f.d[1]) }; };

// ---- 1. On its own: the postcard ------------------------------------------------------------------------------------------
{
  const page = await newPage({ viewport: { width: 640, height: 480 } });
  const res = await page.goto(`http://127.0.0.1:${PORT}/`);
  ok(/script-src 'self'/.test(res.headers()['content-security-policy'] || ''), 'the tile is served with its own security policy');
  await page.waitForFunction(() => window.__forest, null, { timeout: 60000 });
  await page.waitForTimeout(2200);
  const s = await page.evaluate(() => ({ card: !document.getElementById('postcard').hidden, line: document.getElementById('pcline').classList.contains('show'), lineText: document.getElementById('pcline').textContent, stage: document.getElementById('stage').hidden, img: document.querySelector('#postcard img').naturalWidth, bar: getComputedStyle(document.getElementById('bar')).display, ways: window.__forest.state().ways, entered: window.__forest.state().entered }));
  ok(s.card && s.stage && !s.entered, 'opened on its own: the postcard, and the forest not entered');
  ok(s.img === 1280, 'the postcard is the card picture (banner.jpg, 1280 wide)');
  ok(s.line && s.lineText === 'This place is reached through other places.', 'the quiet line shows (W23)');
  ok(s.bar === 'none', 'no buttons on the postcard');
  ok(s.ways === 'plain', 'no host: plain');
  if (OUT) await page.screenshot({ path: path.join(OUT, '01-postcard.png') });
  ok(page.errors.length === 0, `no errors on the postcard ${page.errors.join(' | ')}`);
  await page.close();          // software WebGL: one page at a time, or the next one stalls
}

// ---- 2. A host that never sends anyone in: still the postcard -------------------------------------------------------------
{
  const page = await hosted('');
  await page.waitForTimeout(2500);
  const s = await st(page);
  const log = await hostLog(page);
  ok(log.length >= 1 && log[0].kind === 'hello' && log[0].tile === 'winter-forest' && log[0].ways === '/ways.json', 'hello names the forest and its ways.json');
  ok(s.ways === 'host' && s.exits.wardrobe === 'open' && s.exits.slide === 'open', 'the host\'s status is taken (all open)');
  ok(!s.entered && await page.forest().evaluate(() => !document.getElementById('postcard').hidden), 'a host that only says hello still shows the postcard (only an arrival lets you in)');
  // ---- 3. Arriving at each entrance (W19) -----------------------------------------------------------------------------------
  for (const id of ['lamppost', 'wardrobe', 'tree-door', 'arch']) {
    await arrive(page, id);
    const arrived = await until(page, async (p) => (await st(p)).phase === 'walking', null, 20000);
    const s2 = await st(page);
    const spot = id === 'tree-door' ? I.TUNNEL_ARRIVE : L.ENTRANCES[id], where = id === 'tree-door' ? 'tunnel' : 'forest';
    ok(arrived && s2.place === where && near(s2, spot) && Math.abs(s2.yaw - spot.yaw) < 0.01, `arrive at "${id}": standing at its spot, facing ${id === 'tree-door' ? 'the mouth' : 'the clearing'} (${s2.area})`);
    await page.waitForTimeout(800);
    if (id === 'wardrobe') {
      const c = (await st(page)).cam, u = L.local(L.FRAMES.wardrobe, c[0], c[1])[0];
      ok(u < -0.3, `arrive at "wardrobe": the camera stays on the lane's side of the doors (u ${u.toFixed(2)})`);
    }
    await shot(page, `02-arrive-${id}`);
  }
  ok(await page.forest().evaluate(() => document.getElementById('postcard').hidden && !document.getElementById('stage').hidden), 'once in, the postcard is gone and the forest is drawn');
  ok(page.errors.length === 0, `no errors arriving ${page.errors.join(' | ')}`);
  await page.close();          // software WebGL: one page at a time, or the next one stalls
}

// ---- 4. The wardrobe and the arch, dormant: walking into them says so -----------------------------------------------------
{
  const page = await hosted('open=none&roundtrip=0');
  await arrive(page, 'lamppost');
  await until(page, async (p) => (await st(p)).phase === 'walking');
  for (const id of ['wardrobe', 'arch']) {
    const a = towards(id, -2.2);
    await jump(page, a.x, a.z, a.yaw);
    await page.waitForTimeout(400);
    let said = '';
    await holdUp(page, async (p) => (said = await noteText(p)) !== '', 15000);
    const s = await st(page);
    ok(said === "This doesn't lead anywhere yet." && s.phase === 'walking', `${id}, dormant: "This doesn't lead anywhere yet.", and you stay (${said})`);
    ok(L.local(L.FRAMES[id], s.x, s.z)[0] < -0.25, `${id}, dormant: it stops you`);
    await shot(page, `03-dormant-${id}`);
  }
  const s = await st(page);
  ok(s.wardrobeGlow === 0 && s.archOpen === 0, 'dormant looks: no light between the doors, the arch only shimmers');
  // The great tree: in through its mouth (a fade), along the tunnel to the barred door (W11, W18, W33).
  const m = towards('tree-door', L.TRUNK.at - L.TRUNK.radius - 2.4);
  await jump(page, m.x, m.z, m.yaw);
  await page.waitForTimeout(400);
  await holdUp(page, async (p) => (await st(p)).place === 'tunnel' && (await st(p)).phase === 'walking', 15000);
  ok((await st(page)).place === 'tunnel' && (await st(page)).area === 'inside the great tree', 'walking into the great tree\'s mouth: inside the tunnel');
  await shot(page, '03-tunnel-in');
  let said = '';
  await holdUp(page, async (p) => (said = await noteText(p)) !== '', 20000);
  ok(said === "This doesn't lead anywhere yet." && (await st(page)).phase === 'walking', `tree-door, dormant (barred): "${said}"`);
  await shot(page, '03-dormant-tree-door');
  // Out again: turn round and walk to the mouth.
  { const s = await st(page); await jump(page, s.x, s.z, s.yaw + Math.PI, 'tunnel'); }
  await holdUp(page, async (p) => (await st(p)).place === 'forest' && (await st(p)).phase === 'walking', 20000);
  ok((await st(page)).place === 'forest' && near(await st(page), I.TUNNEL_OUT, 0.3), 'out of the mouth again, in front of the great tree');
  await page.waitForTimeout(1500);
  { const c = (await st(page)).cam; ok(Math.hypot(c[0] - L.TRUNK_CENTRE[0], c[1] - L.TRUNK_CENTRE[1]) > L.TRUNK.radius + 0.6, 'stepping out of the great tree, the camera is outside its trunk (step 2b)'); }
  // The library: in by its door, onto the bench, into the little door (W14, W33).
  const d = towards('slide', -2.0);
  await jump(page, d.x, d.z, d.yaw);
  await page.waitForTimeout(400);
  await holdUp(page, async (p) => (await st(p)).place === 'library' && (await st(p)).phase === 'walking', 15000);
  ok((await st(page)).place === 'library', 'walking into the library\'s door: inside');
  await shot(page, '03-library-in');
  const b = L.world(L.FRAMES.slide, 1.9, 3.4), bt = L.world(L.FRAMES.slide, 1.9, 6);
  await jump(page, b[0], b[1], Math.atan2(-(bt[0] - b[0]), -(bt[1] - b[1])), 'library');
  said = '';
  await holdUp(page, async (p) => (said = await noteText(p)) !== '', 15000);
  ok(said === "This doesn't lead anywhere yet." && (await st(page)).y > 0.4, `slide, dormant: up on the bench, "${said}" at the little door`);
  await shot(page, '03-dormant-little-door');
  ok(Math.abs((await st(page)).level - (I.LIB.walk.h1 + I.LIB.bench.h)) < 0.01, 'the bench and the little door are up at the walkway\'s end (step 2b)');
  // The crow on the walkway's railing watches you as you come along (W37).
  {
    const a = L.world(L.FRAMES.slide, 1.6, 0.6), t = L.world(L.FRAMES.slide, 1.6, 4.0);
    await jump(page, a[0], a[1], Math.atan2(-(t[0] - a[0]), -(t[1] - a[1])), 'library', I.walkFloor(0.6));
    await page.waitForTimeout(2500);
    const l1 = (await st(page)).crowLook;
    const c = L.world(L.FRAMES.slide, 1.6, 3.6);
    await jump(page, c[0], c[1], 0, 'library', I.LIB.walk.h1);
    await page.waitForTimeout(2500);
    const l2 = (await st(page)).crowLook;
    ok(l1 < -0.3 && l2 > 0.3, `the crow turns its head to follow you along the walkway (${l1.toFixed(2)} then ${l2.toFixed(2)})`);
    await shot(page, '03-crow');
  }
  // Out of the library by its door, from under the walkway: the camera outside the cottage (step 2b fix).
  {
    const a = L.world(L.FRAMES.slide, 2.4, 0), t = L.world(L.FRAMES.slide, 0, 0);
    await jump(page, a[0], a[1], Math.atan2(-(t[0] - a[0]), -(t[1] - a[1])), 'library', 0);
    await holdUp(page, async (p) => (await st(p)).place === 'forest' && (await st(p)).phase === 'walking', 15000);
    await page.waitForTimeout(1500);
    const c = (await st(page)).cam, [cu, cv] = L.local(L.FRAMES.slide, c[0], c[1]);
    ok((await st(page)).place === 'forest' && !(cu > L.LIBRARY.front - 0.35 && cu < L.LIBRARY.front + L.LIBRARY.depth && Math.abs(cv) < L.LIBRARY.width / 2), `stepping out of the library, the camera is outside the cottage (u ${cu.toFixed(2)})`);
    await shot(page, '03-library-out');
  }
  ok((await hostLog(page)).every((m) => m.kind !== 'leave'), 'nothing dormant sends way.leave');
  ok(page.errors.length === 0, `no errors ${page.errors.join(' | ')}`);
  await page.close();          // software WebGL: one page at a time, or the next one stalls
}

// ---- 5. Open: going through the wardrobe and the arch; way.leave; a blocked way; coming back ------------------------------
{
  const page = await hosted('roundtrip=0');
  await arrive(page, 'lamppost');
  await until(page, async (p) => (await st(p)).phase === 'walking');
  ok((await st(page)).wardrobeGlow === 1 && (await st(page)).archOpen === 1, 'open looks: the line of light, the arch\'s view');
  // The wardrobe: up the lane, into the doors.
  const w = towards('wardrobe', -3.0);
  await jump(page, w.x, w.z, w.yaw);
  await page.waitForTimeout(600);
  await shot(page, '04-wardrobe-open');
  await holdUp(page, async (p) => (await st(p)).phase !== 'walking', 15000);
  ok((await st(page)).anim === 'through-wardrobe', 'wardrobe, open: walking into the doors starts going through');
  await page.waitForTimeout(900);
  await shot(page, '05-wardrobe-through');
  await until(page, async (p) => (await hostLog(p)).some((m) => m.kind === 'leave'), null, 20000);
  const leave = (await hostLog(page)).find((m) => m.kind === 'leave');
  ok(leave && leave.exit === 'wardrobe' && ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'].includes(leave.facing) && Object.keys(leave).sort().join() === 'exit,facing,kind,v', `way.leave says the exit and a facing, nothing else (${JSON.stringify(leave)})`);
  ok((await st(page)).phase === 'leaving' && await page.forest().evaluate(() => document.getElementById('fadetext').textContent === 'On your way…'), 'then "On your way…" while the host takes you on');
  // Nobody takes us on: after a while, back at the wardrobe, "The way is blocked."
  const back = await until(page, async (p) => (await st(p)).phase !== 'leaving', null, 20000);
  await page.waitForTimeout(400);
  const s = await st(page);
  ok(back && near(s, L.ENTRANCES.wardrobe) && (await noteText(page)) === 'The way is blocked.', 'a blocked way: back inside the wardrobe\'s doors, "The way is blocked." (W26)');
  // The arch: from its glade, walk under it.
  const a = towards('arch', -2.6, 0.2);
  await jump(page, a.x, a.z, a.yaw);
  await page.waitForTimeout(600);
  await shot(page, '06-arch-open');
  await holdUp(page, async (p) => (await st(p)).phase !== 'walking', 15000);
  ok((await st(page)).anim === 'through-arch', 'arch, open: walking under it starts going through');
  await page.waitForTimeout(1000);
  await shot(page, '07-arch-through');
  await until(page, async (p) => (await hostLog(p)).filter((m) => m.kind === 'leave').length === 2, null, 20000);
  ok((await hostLog(page)).filter((m) => m.kind === 'leave')[1]?.exit === 'arch', 'way.leave with exit "arch"');
  // The host brings you back through the arch.
  await arrive(page, 'arch');
  await until(page, async (p) => (await st(p)).phase === 'walking', null, 20000);
  ok(near(await st(page), L.ENTRANCES.arch), 'coming back through the arch: out from under it, in its glade');
  // The tree-door: in the tunnel, walk into it; it opens onto amber; way.leave "tree-door" (W18, W31).
  await jump(page, I.TUNNEL_IN.x, I.TUNNEL_IN.z, I.TUNNEL_IN.yaw, 'tunnel');
  await holdUp(page, async (p) => (await st(p)).phase !== 'walking', 20000);
  ok((await st(page)).anim === 'through-tree-door', 'tree-door, open: walking into it starts going through');
  await page.waitForTimeout(700);
  await shot(page, '07-tree-door-through');
  await until(page, async (p) => (await hostLog(p)).some((m) => m.kind === 'leave' && m.exit === 'tree-door'), null, 20000);
  ok((await hostLog(page)).some((m) => m.kind === 'leave' && m.exit === 'tree-door'), 'way.leave with exit "tree-door"');
  // Coming back through the tree-door: in the tunnel, the door closing behind you (W31).
  await arrive(page, 'tree-door');
  await until(page, async (p) => (await st(p)).phase === 'walking', null, 20000);
  ok((await st(page)).place === 'tunnel' && near(await st(page), I.TUNNEL_ARRIVE), 'coming back through the tree-door: in the tunnel, facing the mouth');
  await shot(page, '07-tree-door-back');
  // The slide: on the bench, into the little door; the shrink; the ride (wood, ice, blue); way.leave "slide" (W14, W15).
  const b = L.world(L.FRAMES.slide, 1.9, 4.38), bt = L.world(L.FRAMES.slide, 1.9, 6);
  await jump(page, b[0], b[1], Math.atan2(-(bt[0] - b[0]), -(bt[1] - b[1])), 'library');
  await page.waitForTimeout(600);
  await holdUp(page, async (p) => (await st(p)).phase !== 'walking', 15000);
  ok((await st(page)).anim === 'shrink', 'slide, open: walking into the little door from the bench starts the shrink');
  await until(page, async (p) => (await st(p)).size < 0.3, null, 20000);
  ok((await st(page)).size < 0.3, 'you shrink to the little door\'s size');
  const parts = new Set();
  await until(page, async (p) => { const s = await st(p); if (s.part) parts.add(s.part); if (s.part === 'ice' && !parts.shot) { parts.shot = true; await shot(p, '08-ride-ice'); } return (await hostLog(p)).some((m) => m.kind === 'leave' && m.exit === 'slide'); }, null, 40000);
  ok(['wood', 'ice', 'blue'].every((x) => parts.has(x)), `the ride: wood, ice, blue (${[...parts].join(', ')})`);
  ok((await hostLog(page)).some((m) => m.kind === 'leave' && m.exit === 'slide'), 'way.leave with exit "slide"');
  const home = await until(page, async (p) => { const s = await st(p); return s.phase === 'walking' && near(s, L.ENTRANCES.lamppost) && s.size === 1; }, null, 20000);
  ok(home, 'nobody takes you on after the slide: back at the lamp post, full size (W19)');
  ok(page.errors.length === 0, `no errors ${page.errors.join(' | ')}`);
  await page.close();          // software WebGL: one page at a time, or the next one stalls
}

// ---- 6. The host's round trip, and reduce motion ----------------------------------------------------------------------------
{
  const page = await hosted('open=wardrobe');
  await arrive(page, 'lamppost');
  await until(page, async (p) => (await st(p)).phase === 'walking');
  await page.forest().evaluate(() => { document.getElementById('gearbtn').click(); document.getElementById('reduce').click(); document.getElementById('menuclose').click(); });
  ok((await st(page)).reduceMotion === true, 'reduce motion can be turned on in the menu');
  const w = towards('wardrobe', -1.5);
  await jump(page, w.x, w.z, w.yaw);
  await page.waitForTimeout(400);
  await holdUp(page, async (p) => (await st(p)).phase !== 'walking', 15000);
  ok((await st(page)).anim === 'fade-out', 'with reduce motion, going through is a plain fade');
  await until(page, async (p) => (await hostLog(p)).some((m) => m.kind === 'leave'), null, 15000);
  const came = await until(page, async (p) => { const s = await st(p); return s.phase === 'walking' && near(s, L.ENTRANCES.wardrobe); }, null, 20000);
  ok(came, 'the host\'s round trip: back through the wardrobe\'s doors');
  // With reduce motion, the shrink and the ride are a plain fade too (W33).
  {
    const b = L.world(L.FRAMES.slide, 1.9, 4.38), bt = L.world(L.FRAMES.slide, 1.9, 6);
    await page.evaluate(() => { for (const s of document.querySelectorAll('select[data-exit]')) s.value = 'open'; window.__host.sendStatus(); });
    await page.waitForTimeout(500);
    await jump(page, b[0], b[1], Math.atan2(-(bt[0] - b[0]), -(bt[1] - b[1])), 'library');
    await page.waitForTimeout(400);
    await holdUp(page, async (p) => (await st(p)).phase !== 'walking', 15000);
    ok((await st(page)).anim === 'fade-out', 'with reduce motion, the slide is a plain fade');
    await until(page, async (p) => (await hostLog(p)).some((m) => m.kind === 'leave' && m.exit === 'slide'), null, 15000);
    ok((await hostLog(page)).some((m) => m.kind === 'leave' && m.exit === 'slide'), '... and way.leave "slide"');
    await until(page, async (p) => (await st(p)).phase === 'walking', null, 20000);
  }
  await page.forest().evaluate(() => { document.getElementById('gearbtn').click(); document.getElementById('tolamp').click(); });
  await page.waitForTimeout(800);
  ok(near(await st(page), L.ENTRANCES.lamppost), '"Back to the lamp post" in the menu');
  ok(page.errors.length === 0, `no errors ${page.errors.join(' | ')}`);
  await page.close();          // software WebGL: one page at a time, or the next one stalls
}

// ---- 7. A phone: the joystick walks you ------------------------------------------------------------------------------------
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  page.errors = []; page.on('pageerror', (e) => page.errors.push(e.message)); pages.push(page);
  await page.goto(`http://127.0.0.1:${PORT}/dev/host.html`);
  await page.evaluate(() => { const f = document.getElementById('forest'); f.width = 360; f.height = 640; });
  page.forest = () => page.frame({ url: new RegExp(`${PORT}/$`) });
  await page.forest().waitForFunction(() => window.__forest, null, { timeout: 60000 });
  await arrive(page, 'lamppost');
  await until(page, async (p) => (await st(p)).phase === 'walking');
  const s0 = await st(page);
  const box = await page.locator('#forest').boundingBox();
  const cdp = await page.context().newCDPSession(page);
  const x0 = box.x + 70, y0 = box.y + 520;
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: x0, y: y0, id: 1 }] });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x0, y: y0 - 50, id: 1 }] });
  await page.waitForTimeout(2500);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  const s1 = await st(page);
  ok(Math.hypot(s1.x - s0.x, s1.z - s0.z) > 0.3, `phone: the thumb joystick walks you (${Math.hypot(s1.x - s0.x, s1.z - s0.z).toFixed(2)} blocks)`);
  if (OUT) await page.locator('#forest').screenshot({ path: path.join(OUT, '08-phone.png') });
  ok(page.errors.length === 0, `no errors on a phone ${page.errors.join(' | ')}`);
  await page.close();          // software WebGL: one page at a time, or the next one stalls
}

await browser.close();
server.close();
console.log(failures ? `\n${failures} failed` : '\nall passed');
process.exitCode = failures ? 1 : 0;
