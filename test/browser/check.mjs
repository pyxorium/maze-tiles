// A browser check of the 3D maze (Playwright with Chromium; run in the build chat's sandbox, or anywhere Playwright
// is installed): node test/browser/check.mjs [folder for screenshots]
// It serves the tile as dev/serve.mjs does (with the tile's security policy) and walks it. Free walking (as a
// player would: turn by dragging, hold ↑): up the Courtyard's stairs into Landing I with no cut, round the Penrose
// loop, up to the Lookout, the Lantern room's closed door, down the ramp, the obelisk (no host: its fallback), the Great Hall's
// small door into the Closet, the Gallery, home; the Well room's hole and the fall into the Cellar, and out again.
// Then the map card, the gear menu (back to the start, the map kept), step and turn (routes planned with the
// maze's own rules: the loop, the stairs down, the fall), the keyboard, "reduce motion", and a phone: the thumb
// joystick, dragging to turn, the arrow buttons. Then ways with a stand-in host (dev/host.html): hello, the obelisk
// open, dormant or no host, arriving at the obelisk, way.leave; the Lantern room's door as the second door (0.4.0, M28 to
// M33: ajar and glowing when open, swinging open as you leave by it, arriving through it, dormant and plain); the
// shorter obelisk (M29); the Sound button (M34). Then M27: up each flight of the Penrose loop pressed into
// the right wall, the view follows you over the top. WebGL runs in software here (SwiftShader), about 8 frames a second.
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { startDev } from '../../dev/serve.mjs';
import { MAP } from '../../src/map.js';
import { step, gatesOf, heightsOf, dropsOf, LEFT_OF, RIGHT_OF } from '../../src/walk.js';

const require = createRequire(import.meta.url);
let playwright;
try { playwright = require('playwright'); } catch { playwright = require('/opt/npm-tools/node_modules/playwright'); }
const OUT = process.argv[2] || null;
if (OUT) mkdirSync(OUT, { recursive: true });

const PORT = 5208;
const server = await startDev({ port: PORT, quiet: true });
const browser = await playwright.chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
let failures = 0;
const ok = (cond, msg) => { console.log(`${cond ? 'ok  ' : 'FAIL'} ${msg}`); if (!cond) failures++; };
const shot = async (page, name) => { if (OUT) await page.screenshot({ path: path.join(OUT, `${name}.png`) }); };
const pages = [];

async function open(opts = {}) {
  const page = await browser.newPage({ viewport: { width: 640, height: 480 }, ...opts });
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' || /Content.Security.Policy|Refused/.test(m.text())) page.errors.push(m.text()); });
  const res = await page.goto(`http://127.0.0.1:${PORT}/`);
  page.csp = res.headers()['content-security-policy'] || '';
  await page.waitForFunction(() => window.__maze, null, { timeout: 30000 });
  await page.waitForTimeout(600);
  pages.push(page);
  return page;
}
const st = (page) => page.evaluate(() => window.__maze.state());
const idle = (page) => page.waitForFunction(() => { const s = window.__maze.state(); return !s.busy && !s.fading && !s.falling; }, null, { timeout: 30000 });
const jump = (page, room, at, facing) => page.evaluate(([r, a, f]) => window.__maze.jump(r, a, f), [room, at, facing]);
const offerOf = (page) => page.evaluate(() => { const o = document.getElementById('offer'), a = document.getElementById('offerlink'); return o.hidden ? null : { text: document.getElementById('offertext').textContent, link: a.textContent, href: a.href, target: a.target }; });
const noteText = (page) => page.evaluate(() => { const n = document.getElementById('note'); return n.classList.contains('show') ? n.textContent : ''; });
// Watch the state every frame from now on (to see what happened during a move).
const watch = (page) => page.evaluate(() => { window.__seen = []; const f = () => { window.__seen.push(window.__maze.state()); if (window.__seen.length < 3000) requestAnimationFrame(f); }; requestAnimationFrame(f); });
const seen = (page) => page.evaluate(() => window.__seen);
// Wait (up to ms) until fn() is true; software graphics with several pages open can be very slow.
const until = async (fn, ms = 20000) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { if (await fn()) return true; await new Promise((r) => setTimeout(r, 150)); } return false; };

// ---- free walking, as a player: turn by dragging across the view, then hold ↑ to each point --------------------
async function face(page, [x, y]) {
  const s = await st(page);
  let err = Math.atan2(x - s.local[0], -(y - s.local[1])) - s.yaw;
  err = Math.atan2(Math.sin(err), Math.cos(err));
  if (Math.abs(err) < 0.02) return;
  const box = await page.locator('#stage canvas').boundingBox();
  const cx = box.x + box.width * 0.75, cy = box.y + box.height / 2;
  await page.mouse.move(cx, cy); await page.mouse.down();
  await page.mouse.move(cx + err / 0.006, cy); await page.mouse.up();
  await page.waitForTimeout(250);
}
async function walk(page, room, pts) {
  for (const [x, y] of pts) {
    for (let tries = 0; tries < 6; tries++) {
      let s = await st(page);
      if (s.room !== room || s.falling) return s;
      if (Math.hypot(x - s.local[0], y - s.local[1]) < 0.25) break;
      await face(page, [x, y]);
      s = await st(page);
      const d0 = Math.hypot(x - s.local[0], y - s.local[1]);
      await page.keyboard.down('ArrowUp');
      const t0 = Date.now();
      while (Date.now() - t0 < 8000) {
        s = await st(page);
        const d = Math.hypot(x - s.local[0], y - s.local[1]);
        if (s.room !== room || s.falling || d < 0.3 || (Date.now() - t0 > 400 && d > d0 + 0.3)) break;
        await page.waitForTimeout(30);
      }
      await page.keyboard.up('ArrowUp');
      await page.waitForTimeout(120);
      s = await st(page);
      if (s.room !== room || s.falling) return s;
    }
  }
  await idle(page);
  return st(page);
}

// ---- step and turn: routes planned with the maze's own rules (src/walk.js) -------------------------------------
function plan(roomId, cell, facing, wayId) {
  const room = MAP.rooms[roomId];
  const h = heightsOf(room), gates = gatesOf(room), drops = dropsOf(room);
  const key = (c, f) => `${c[0]},${c[1]},${f}`;
  const prev = new Map([[key(cell, facing), null]]);
  const queue = [[cell, facing]];
  while (queue.length) {
    const [c, f] = queue.shift();
    for (const cmd of ['forward', 'left', 'right', 'back']) {
      let next = null, done = false;
      if (cmd === 'left' || cmd === 'right') next = [c, cmd === 'left' ? LEFT_OF[f] : RIGHT_OF[f]];
      else {
        const r = step(room, c, f, cmd === 'back' ? -1 : 1, h, gates, drops);
        if (r.kind === 'move') next = [r.to, f];
        else if ((r.kind === 'gate' && r.gate.way.id === wayId) || (r.kind === 'fall' && r.drop.way.id === wayId)) done = true;
      }
      if (done) {
        const cmds = [cmd];
        for (let k = key(c, f); prev.get(k); k = prev.get(k).from) cmds.unshift(prev.get(k).cmd);
        return cmds;
      }
      if (next && !prev.has(key(...next))) { prev.set(key(...next), { from: key(c, f), cmd }); queue.push(next); }
    }
  }
  return null;
}
const KEY = { forward: 'ArrowUp', back: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' };
async function stepTo(page, wayId) {
  const s = await st(page);
  const cmds = plan(s.room, s.cell, s.facing, wayId);
  if (!cmds) return { room: s.room, planned: false };
  for (const c of cmds) { await page.keyboard.press(KEY[c]); await page.waitForTimeout(60); await idle(page); }
  await page.waitForTimeout(200);
  await idle(page);
  return st(page);
}

try {
  // ---- desktop, free walking (the default) ----------------------------------------------------------------------
  const page = await open();
  let s = await st(page);
  ok(s.room === 'courtyard' && s.facing === 'ne' && s.movement === 'free', 'starts in the Courtyard facing the orb, free walking');
  ok(/connect-src 'self'/.test(page.csp) && /script-src 'self'/.test(page.csp), 'served with the tile\'s security policy');
  ok(s.drawn >= 5, `openings show their rooms two deep (${s.drawn} rooms drawn at the start)`);
  ok(await page.isVisible('#hint'), 'a first hint about the keys');
  ok((await page.textContent('#soundbtn')) === 'Sound on' && (await page.getAttribute('#soundbtn', 'aria-pressed')) === 'true', 'the bar has a Sound button, on (M34)');
  ok(s.sound && s.sound.on && !s.sound.started, 'no sound until you do something (browsers ask for that)');
  await shot(page, '01-start');

  // Up the Courtyard's stairs into Landing I: no cut (no fade), the camera follows through.
  await jump(page, 'courtyard', [4.5, 5.2], 'ne');
  await page.waitForTimeout(500);
  await watch(page);
  s = await walk(page, 'courtyard', [[4.5, -0.8]]);
  await page.waitForTimeout(1200);
  let log = await seen(page);
  s = await st(page);
  ok(s.room === 'landing1' && s.view === 'landing1', 'up the stairs into Landing I');
  { const snd = (await st(page)).sound; ok(snd.started && snd.bed === 'slate', `sound started with the first key, in the landings' set of notes (${snd.bed}; running ${snd.running})`);
    ok(snd.taps === 0, `no Shepard taps on the Courtyard's stairs (M37: the landings' flights only) (${snd.taps})`); }
  ok(!log.some((x) => x.fading) && log.some((x) => x.chain === 1 && x.room === 'landing1' && x.view === 'courtyard'), 'seamless: the figure goes through first, the camera follows, no fade');
  ok(log.some((x) => x.h >= 1.5 && x.room === 'courtyard'), 'climbing the steps on the way');
  ok(!(await page.isVisible('#hint')) || (await page.$eval('#hint', (e) => e.classList.contains('gone'))), 'the hint goes once you move');

  // The Penrose loop: four climbs, all up, back to Landing I.
  const loop = [];
  for (let i = 0; i < 4; i++) {
    const r = (await st(page)).room;
    s = await walk(page, r, [[5.5, 5.5], [5.5, -0.8]]);
    loop.push(s.room);
    await page.waitForTimeout(400);
    s = await walk(page, s.room, [[1.5, 5.5]]);
  }
  ok(loop.join(' ') === 'landing2 landing3 landing4 landing1', `the Penrose loop: ${loop.join(' > ')}`);
  { const snd = (await st(page)).sound; ok(snd.taps >= 4, `a soft Shepard tap for steps up the landings' flights (${snd.taps} taps, now at step ${snd.step} of 12)`); }
  await shot(page, '02-loop-back-at-landing-I');

  // Landing III → the Lookout → the Lantern room (the closed door) → down the ramp into the Great Hall.
  await jump(page, 'landing3', [1.5, 5.5], 'ne');
  await page.waitForTimeout(400);
  s = await walk(page, 'landing3', [[4.5, 5.5], [4.5, 4.5], [-0.8, 4.5]]);
  ok(s.room === 'lookout', 'Landing III\'s other flight climbs to the Lookout');
  s = await walk(page, 'lookout', [[3.5, 3.5], [3.5, 1.5], [5.5, 1.5], [6.8, 1.5]]);
  ok(s.room === 'lantern', 'the Lookout\'s walkway into the Lantern room');
  s = await walk(page, 'lantern', [[2.5, 2.5], [2.5, 0.6]]);
  await face(page, [2.5, -1]);
  await page.keyboard.down('ArrowUp'); await page.waitForTimeout(800); await page.keyboard.up('ArrowUp');
  s = await st(page);
  { const od = await offerOf(page);
    ok(s.room === 'lantern' && od && /can't take you anywhere from here/.test(od.text) && od.href === 'https://thunderbird.cafe/way/maze/second-door',
      'the Lantern room\'s door, opened on its own (no host): it stays shut and offers the second door\'s fallback (M28)'); }
  ok(s.doorAngle === 0 && !s.doorGlow, 'no host: the door shut, no glow behind it');
  await shot(page, '03-closed-door');
  await page.keyboard.press('Escape');
  s = await walk(page, 'lantern', [[2.5, 3.5], [2.5, 5.8]]);
  ok(s.room === 'hall', 'down the ramp into the Great Hall');
  await page.waitForTimeout(600);
  s = await st(page);
  ok(s.local[2] > 1.4 && s.local[2] < 2.1, `arriving on the ramp's slope (height ${s.local[2].toFixed(2)})`);

  // The waystone (M9, M22). The tile opened on its own is a plain viewer: no host, so it offers its fallback.
  s = await walk(page, 'hall', [[3.5, 2.5], [3.5, 3.2]]);
  await face(page, [3.5, 4.5]);
  await page.keyboard.down('ArrowUp'); await until(async () => !!(await offerOf(page)), 8000); await page.keyboard.up('ArrowUp');
  let o = await offerOf(page);
  ok(o && /can't take you anywhere from here/.test(o.text) && o.link === 'Open where this leads' && o.href === 'https://thunderbird.cafe/way/maze/obelisk' && o.target === '_blank',
    'the obelisk with no host: "I can\'t take you anywhere from here." and its fallback address in a new tab');
  await shot(page, '04-obelisk');
  await page.keyboard.press('Escape');
  ok(!(await offerOf(page)), 'Escape closes the offer');

  // Bigger on the inside, backwards: the Great Hall's small door → the Closet → the Gallery → the Courtyard.
  s = await walk(page, 'hall', [[0.5, 2.5], [-0.8, 2.5]]);
  ok(s.room === 'closet', 'the Great Hall\'s small door into the Closet');
  await page.waitForTimeout(700);
  await shot(page, '05-closet');
  s = await walk(page, 'closet', [[0.5, 0.5], [0.5, 1.5], [0.5, 2.8]]);
  ok(s.room === 'gallery', 'the Closet into the Gallery');
  await page.waitForTimeout(700);
  s = await st(page);
  ok(s.facing === 'se' && s.cell[0] <= 1, `arriving at the Gallery's far end, looking down its length (facing ${s.facing})`);
  s = await walk(page, 'gallery', [[7.5, 1.5], [8.8, 1.5]]);
  ok(s.room === 'courtyard', 'the Gallery back into the Courtyard');

  // The hole: through the Courtyard's door into the Well room, round the hole's edge, then in.
  s = await walk(page, 'courtyard', [[1.5, 3.5], [0.5, 3.5], [-0.8, 3.5]]);
  ok(s.room === 'well', 'the Courtyard\'s door into the Well room');
  s = await walk(page, 'well', [[3.5, 1.5], [1.5, 1.7]]);
  ok(s.room === 'well' && !s.falling, 'walking past the hole\'s edge: no fall');
  await page.waitForTimeout(500);
  await shot(page, '06-the-hole');
  await watch(page);
  s = await walk(page, 'well', [[2.5, 1.5], [2.5, 2.7]]);
  await page.waitForTimeout(400);
  await shot(page, '07-falling');
  await idle(page);
  await page.waitForTimeout(800);
  log = await seen(page);
  s = await st(page);
  ok(log.some((x) => x.falling === 'fall') && !log.some((x) => x.fading), 'a real fall (no fade)');
  ok(log.some((x) => x.falling === 'fall' && x.room === 'cellar' && x.view === 'well'), 'the camera follows down through the hole');
  ok(s.room === 'cellar' && s.fell && s.facing === 'ne' && s.cell.join() === '2,3', 'landing in the Cellar, facing its stairs up');
  ok(/No way back up/.test(await noteText(page)), '"No way back up."');
  await shot(page, '08-landed');
  s = await walk(page, 'cellar', [[4.5, 3.5], [4.5, 1.5], [-0.8, 1.5]]);
  ok(s.room === 'hall', 'the Cellar\'s stairs up into the Great Hall');

  // Bigger on the inside, the right way round: the Gallery's end door → the 2 x 2 Closet → the Great Hall.
  await jump(page, 'gallery', [6.5, 1.5], 'nw');
  await page.waitForTimeout(500);
  s = await walk(page, 'gallery', [[0.5, 1.5], [-0.8, 1.5]]);
  ok(s.room === 'closet', 'down the Gallery and through its end door into the Closet');
  s = await walk(page, 'closet', [[0.5, 0.5], [1.4, 0.5]]);
  await page.waitForTimeout(900);
  s = await st(page);
  ok(s.camera[2] - s.local[2] > 2.6, `in the Closet the camera rises over your head (${(s.camera[2] - s.local[2]).toFixed(2)} above the floor; 2.1 elsewhere)`);
  await shot(page, '08b-closet-to-hall');
  await watch(page);
  s = await walk(page, 'closet', [[2.8, 0.5]]);
  await page.waitForTimeout(2000);
  log = await seen(page);
  s = await st(page);
  ok(s.room === 'hall' && s.view === 'hall' && !log.some((x) => x.fading), 'out of the Closet into the Great Hall, no cut');
  await shot(page, '08c-great-hall');

  // The map card.
  await page.keyboard.press('KeyM');
  ok(await page.isVisible('#mapcard'), 'M opens the map card');
  s = await st(page);
  ok(s.visited.length === 12, `every room found by now (${s.visited.length})`);
  await shot(page, '09-map');
  await page.keyboard.press('Escape');
  ok(!(await page.isVisible('#mapcard')), 'Escape closes it');
  await page.click('#mapbtn');
  ok(await page.isVisible('#mapcard'), 'the Map button opens it');
  await page.mouse.click(20, 460);
  ok(!(await page.isVisible('#mapcard')), 'a tap outside closes it');

  // The gear menu: back to the start keeps the map.
  await page.click('#gearbtn');
  ok(await page.isVisible('#menu'), 'the gear opens the settings');
  await shot(page, '10-menu');
  await page.click('#restart');
  s = await st(page);
  ok(s.room === 'courtyard' && s.view === 'courtyard' && s.visited.length === 12 && !(await page.isVisible('#menu')), 'back to the start: the Courtyard, the map kept');

  // Step and turn, chosen in the menu.
  await page.click('#gearbtn');
  await page.check('input[name="move"][value="step"]');
  await page.click('#menuclose');
  s = await st(page);
  ok(s.movement === 'step' && await page.isVisible('#pad'), 'step and turn chosen; the arrow buttons show');
  ok(Math.abs(s.local[0] - s.cell[0] - 0.5) < 1e-6 && Math.abs(s.local[1] - s.cell[1] - 0.5) < 1e-6, 'on the middle of a cell');
  await page.keyboard.press('ArrowLeft'); await idle(page);
  s = await st(page);
  ok(s.facing === 'nw', 'a quarter turn left');
  s = await stepTo(page, 'climb');
  ok(s.room === 'landing1', 'step by step up the stairs into Landing I');
  const sloop = [];
  for (let i = 0; i < 4; i++) { s = await stepTo(page, 'climb'); sloop.push(s.room); }
  ok(sloop.join(' ') === 'landing2 landing3 landing4 landing1', `the loop, step by step: ${sloop.join(' > ')}`);
  s = await stepTo(page, 'down');
  ok(s.room === 'courtyard', 'Landing I\'s stairs down to the Courtyard');
  s = await stepTo(page, 'well');
  ok(s.room === 'well', 'into the Well room');
  await watch(page);
  s = await stepTo(page, 'hole');
  await idle(page);
  s = await st(page);
  log = await seen(page);
  ok(s.room === 'cellar' && log.some((x) => x.falling === 'fall'), 'a step into the hole is the fall');
  await page.keyboard.press('ArrowRight'); await idle(page);
  s = await st(page);
  ok(s.facing === 'se', 'and turning still works after');
  await jump(page, 'hall', [3.5, 2.5], 'sw');
  await page.waitForTimeout(300);
  await page.keyboard.press('ArrowUp'); await idle(page);
  await page.keyboard.press('ArrowUp'); await idle(page);
  s = await st(page);
  o = await offerOf(page);
  ok(s.cell.join() === '3,3' && o && /can't take you anywhere/.test(o.text), 'step and turn: a step into the obelisk offers the fallback (no host)');
  await page.click('#offerclose');
  ok(!(await offerOf(page)), 'the offer\'s × closes it');

  // The keyboard reaches the buttons; the menu works from the keyboard.
  // (Click the view first: Tab then starts from the top of the page, as it does on arrival.)
  const vb = await page.locator('#stage canvas').boundingBox();
  await page.mouse.click(vb.x + vb.width / 2, vb.y + vb.height / 2);
  await page.keyboard.press('Tab');
  const order = [await page.evaluate(() => document.activeElement.id)];
  await page.keyboard.press('Tab');
  order.push(await page.evaluate(() => document.activeElement.id));
  await page.keyboard.press('Tab');
  order.push(await page.evaluate(() => document.activeElement.id));
  ok(order.join() === 'soundbtn,mapbtn,gearbtn', `Tab reaches the Sound, Map and gear buttons (${order.join(', ')})`);
  await page.keyboard.press('Enter');
  ok(await page.isVisible('#menu') && await page.evaluate(() => document.activeElement.name === 'move'), 'Enter opens the settings, focus on the movement choice');
  await page.keyboard.press('Escape');
  ok(!(await page.isVisible('#menu')) && await page.evaluate(() => document.activeElement.id === 'gearbtn'), 'Escape closes them, focus back on the gear');
  ok(page.errors.length === 0, `no errors or blocked files${page.errors.length ? `: ${page.errors.join(' | ')}` : ''}`);

  // ---- reduce motion -------------------------------------------------------------------------------------------
  const calm = await open({ reducedMotion: 'reduce' });
  s = await st(calm);
  ok(s.reduceMotion === true, '"reduce motion" from the device is respected');
  await watch(calm);
  s = await walk(calm, 'courtyard', [[1.5, 1.5], [1.5, -0.8]]);
  await idle(calm);
  log = await seen(calm);
  s = await st(calm);
  ok(s.room === 'gallery' && log.some((x) => x.fading) && !log.some((x) => x.chain > 0), 'with reduce motion a doorway is a quick fade, no swoop');
  await jump(calm, 'well', [2.5, 1.5], 'sw');
  await watch(calm);
  await calm.keyboard.down('ArrowUp'); await calm.waitForTimeout(900); await calm.keyboard.up('ArrowUp');
  await idle(calm);
  log = await seen(calm);
  s = await st(calm);
  ok(s.room === 'cellar' && log.some((x) => x.fading) && !log.some((x) => x.falling === 'fall'), 'and the drop is a fade, not a fall');
  ok(calm.errors.length === 0, 'no errors with reduce motion');

  // ---- a phone ---------------------------------------------------------------------------------------------------
  const phone = await open({ viewport: { width: 360, height: 640 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 });
  ok(await phone.evaluate(() => document.body.classList.contains('touch')), 'a phone gets the touch controls');
  const cdp = await phone.context().newCDPSession(phone);
  const touch = (type, pts) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: pts.map(([x, y], i) => ({ x, y, id: i + 1 })) });
  await jump(phone, 'hall', [1.5, 6.5], 'ne');
  await phone.waitForTimeout(500);
  let a = await st(phone);
  await touch('touchStart', [[70, 520]]);
  await phone.waitForTimeout(100);
  await touch('touchMove', [[70, 470]]);
  await phone.waitForTimeout(150);
  const stickShown = await phone.isVisible('#stick');
  await phone.waitForTimeout(1300);
  await shot(phone, '11-phone-joystick');
  await touch('touchEnd', []);
  await phone.waitForTimeout(300);
  let b = await st(phone);
  ok(stickShown && !(await phone.isVisible('#stick')), 'the thumb joystick appears where the thumb lands, and goes when it lifts');
  ok(b.local[1] < a.local[1] - 1, `up on the joystick walks forward (${a.local[1].toFixed(2)} → ${b.local[1].toFixed(2)})`);
  a = b;
  await touch('touchStart', [[70, 520]]); await phone.waitForTimeout(100);
  await touch('touchMove', [[120, 520]]); await phone.waitForTimeout(900);
  await touch('touchEnd', []); await phone.waitForTimeout(200);
  b = await st(phone);
  ok(b.yaw > a.yaw + 0.3 && Math.hypot(b.local[0] - a.local[0], b.local[1] - a.local[1]) < 0.3, 'sideways on the joystick turns on the spot');
  a = b;
  await touch('touchStart', [[280, 300]]); await phone.waitForTimeout(80);
  for (let x = 280; x >= 200; x -= 20) { await touch('touchMove', [[x, 300]]); await phone.waitForTimeout(80); }
  await touch('touchEnd', []); await phone.waitForTimeout(300);
  b = await st(phone);
  ok(b.yaw < a.yaw - 0.2, 'dragging on the right side turns');
  const bar = await phone.evaluate(() => ['mapbtn', 'gearbtn'].map((id) => { const r = document.getElementById(id).getBoundingClientRect(); return r.top >= 0 && r.bottom < 70 && r.right <= 360; }));
  ok(bar.every(Boolean), 'Map and gear at the top, on screen');
  await phone.tap('#gearbtn');
  await phone.tap('input[name="move"][value="step"]');
  await phone.tap('#menuclose');
  ok(await phone.isVisible('#pad'), 'step and turn on a phone: the four arrow buttons');
  await jump(phone, 'hall', [3.5, 6.5], 'ne');
  await phone.waitForTimeout(300);
  a = await st(phone);
  await phone.tap('#pad .up'); await phone.waitForTimeout(100); await idle(phone);
  await phone.tap('#pad .right'); await phone.waitForTimeout(100); await idle(phone);
  b = await st(phone);
  ok(b.cell.join() !== a.cell.join() && b.facing === RIGHT_OF[a.facing], `a tap, a step; a tap, a turn (${a.cell} ${a.facing} → ${b.cell} ${b.facing})`);
  await shot(phone, '12-phone-step');
  ok(phone.errors.length === 0, `no errors on the phone${phone.errors.length ? `: ${phone.errors.join(' | ')}` : ''}`);

  // ---- ways with a stand-in host (dev/host.html, claude/escher-maze-ways-plan.md M18, M22, M23) ---------------
  for (const p of pages) await p.close();         // software WebGL: a few pages at a time
  const tipOf = (f) => f.evaluate(() => window.__maze.state().tip[0]);
  const hosts = {};
  for (const mode of ['open', 'dormant', 'plain']) {
    const hp = await browser.newPage({ viewport: { width: 900, height: 760 } });
    hp.errors = [];
    hp.on('pageerror', (e) => hp.errors.push(e.message));
    hp.on('console', (m) => { if (m.type() === 'error') hp.errors.push(m.text()); });
    await hp.goto(`http://127.0.0.1:${PORT}/dev/host.html?mode=${mode}`, { timeout: 60000 });
    const f = hp.frame({ url: new RegExp(`${PORT}/$`) });
    await f.waitForFunction(() => window.__maze, null, { timeout: 30000 });
    await hp.waitForTimeout(1500);
    hosts[mode] = { hp, f };
  }
  {
    const { hp, f } = hosts.open;
    const log = await hp.evaluate(() => window.__host.log);
    ok(log[0] && log[0].kind === 'hello' && log[0].tile === 'maze' && log[0].ways === '/ways.json', 'in a frame the maze says hello to its page, naming its ways');
    ok((await f.evaluate(() => window.__maze.state().obelisk)) === 'open', 'a host says the obelisk leads somewhere');
    await hp.evaluate(() => window.__host.arrive());
    await hp.waitForTimeout(2200);
    let s = await f.evaluate(() => window.__maze.state());
    ok(s.room === 'hall' && s.cell.join() === '3,5' && s.facing === 'se' && s.visited.includes('hall'), 'way.arrive: you arrive beside the obelisk, facing down the hall (M18)');
    await shot(hp, '13-host-arrive');
    await f.evaluate(() => window.__maze.jump('hall', [3.5, 5.6], 'ne'));
    await hp.waitForTimeout(500);
    await f.locator('#stage canvas').click({ position: { x: 5, y: 300 } });
    await hp.keyboard.down('ArrowUp'); await hp.waitForTimeout(900); await hp.keyboard.up('ArrowUp');
    await hp.waitForTimeout(300);
    const left = (await hp.evaluate(() => window.__host.log)).filter((p) => p.kind === 'leave');
    ok(left.length === 1 && left[0].exit === 'obelisk' && left[0].facing === 'ne' && Object.keys(left[0]).sort().join() === 'exit,facing,kind,v',
      'stepping into an open obelisk: way.leave, the exit and facing only (never who)');
    ok(/On your way/.test(await noteText(f)), '"On your way…"');

    // The second door (M28, M31 to M33): ajar with a glow behind it while it leads somewhere.
    await f.evaluate(() => window.__maze.jump('lantern', [2.5, 2.9], 'ne'));
    await hp.waitForTimeout(2500);
    s = await f.evaluate(() => window.__maze.state());
    ok(s.door === 'open' && Math.abs(s.doorAngle - 0.22) < 0.02 && s.doorGlow, `an open second door stands ajar, glowing behind (${s.doorAngle.toFixed(2)} rad)`);
    await shot(hp, '16-door-ajar');
    await f.evaluate(() => window.__maze.jump('lantern', [2.5, 0.9], 'ne'));
    await hp.waitForTimeout(400);
    await f.locator('#stage canvas').click({ position: { x: 5, y: 300 } });
    await hp.keyboard.down('ArrowUp');
    await until(async () => (await f.evaluate(() => window.__maze.state())).doorAngle > 1);
    await hp.keyboard.up('ArrowUp');
    await until(async () => (await hp.evaluate(() => window.__host.log)).some((p) => p.kind === 'leave' && p.exit === 'second-door'), 5000);
    s = await f.evaluate(() => window.__maze.state());
    const leftDoor = (await hp.evaluate(() => window.__host.log)).filter((p) => p.kind === 'leave' && p.exit === 'second-door');
    ok(leftDoor.length === 1 && leftDoor[0].facing === 'ne' && Object.keys(leftDoor[0]).sort().join() === 'exit,facing,kind,v', 'pushing the open door: it swings open and way.leave says "second-door" (and the facing only)');
    ok(s.doorAngle > 1 && s.room === 'lantern', `the door wide open as you go (${s.doorAngle.toFixed(2)} rad)`);
    ok(s.sound.chimes >= 2, `one soft bright note coming near the open obelisk, one near the open door (${s.sound.chimes})`);
    await shot(hp, '17-door-leaving');
    await hp.evaluate(() => window.__host.arriveDoor());
    await until(async () => { const x = await f.evaluate(() => window.__maze.state()); return x.cell.join() === '2,1' && !x.fading; });
    s = await f.evaluate(() => window.__maze.state());
    ok(s.room === 'lantern' && s.cell.join() === '2,1' && s.facing === 'sw' && s.visited.includes('lantern'), 'arriving through the door: a block in front of it, facing into the Lantern room (M32)');
    ok(/come in through the door/.test(await noteText(f)), '"You come in through the door."');
    await shot(hp, '18-door-arrive');
    await until(async () => Math.abs((await f.evaluate(() => window.__maze.state())).doorAngle - 0.22) < 0.03);
    s = await f.evaluate(() => window.__maze.state());
    ok(Math.abs(s.doorAngle - 0.22) < 0.03, `then it swings back to ajar behind you (${s.doorAngle.toFixed(2)} rad)`);
  }
  {
    const { hp, f } = hosts.dormant;
    ok((await f.evaluate(() => window.__maze.state().obelisk)) === 'dormant', 'a host with an empty signpost: dormant');
    await f.evaluate(() => window.__maze.jump('hall', [3.5, 5.6], 'ne'));
    await hp.waitForTimeout(500);
    await f.locator('#stage canvas').click({ position: { x: 5, y: 300 } });
    await hp.keyboard.down('ArrowUp'); await hp.waitForTimeout(900); await hp.keyboard.up('ArrowUp');
    await hp.waitForTimeout(300);
    ok(/doesn't lead anywhere yet/.test(await noteText(f)) && !(await offerOf(f)), 'a dormant obelisk: "This doesn\'t lead anywhere yet." (no offer)');
    ok(!(await hp.evaluate(() => window.__host.log)).some((p) => p.kind === 'leave'), 'and nothing is sent');
    await f.evaluate(() => window.__maze.jump('lantern', [2.5, 0.9], 'ne'));
    await hp.waitForTimeout(600);
    await f.locator('#stage canvas').click({ position: { x: 5, y: 300 } });
    await hp.keyboard.down('ArrowUp');
    await until(async () => /closed, for now/.test(await noteText(f)));
    await hp.keyboard.up('ArrowUp');
    const s = await f.evaluate(() => window.__maze.state());
    ok(s.door === 'dormant' && /closed, for now/.test(await noteText(f)) && !(await offerOf(f)) && s.doorAngle === 0 && !s.doorGlow,
      'a dormant second door: shut, no glow, "This door is closed, for now."');
    ok(!(await hp.evaluate(() => window.__host.log)).some((p) => p.kind === 'leave'), 'and nothing is sent for the door either');
  }
  {
    const { hp, f } = hosts.plain;
    const s = await f.evaluate(() => window.__maze.state());
    ok(s.ways === 'plain' && s.obelisk === 'plain', 'no answer within a second: a plain viewer');
    ok((await hp.evaluate(() => window.__host.log)).filter((p) => p.kind === 'hello').length === 2, 'it said hello twice, half a second apart');
    await f.evaluate(() => window.__maze.jump('hall', [7.2, 7.2], 'nw'));      // so its obelisk is built
    await hp.waitForTimeout(1200);
  }
  const tips = { open: await tipOf(hosts.open.f), dormant: await tipOf(hosts.dormant.f), plain: await tipOf(hosts.plain.f) };
  ok(tips.open !== tips.dormant && tips.dormant === tips.plain, `the tip glows only when open (${tips.open} / ${tips.dormant} / ${tips.plain})`);
  await hosts.open.f.evaluate(() => window.__maze.jump('hall', [7.2, 7.2], Math.atan2(3.5 - 7.2, -(4.5 - 7.2))));
  await hosts.open.hp.waitForTimeout(2000);
  await shot(hosts.open.hp, '14-host-open-glow');
  for (const m of Object.keys(hosts)) ok(hosts[m].hp.errors.length === 0, `no errors with a host (${m})${hosts[m].hp.errors.length ? `: ${hosts[m].hp.errors.join(' | ')}` : ''}`);

  // ---- M27 (claude/escher-maze-view-bug.md): up each flight of the Penrose loop pressed into the right wall, facing
  // almost along it; at the top the camera used to pass the opening's plane beside the opening and the view never
  // switched (the new room's name, the figure on blank background or in a wall). Now the view follows the figure,
  // by the camera itself (the safety net isn't needed). Started at the top step: in software graphics the frames
  // are long and a figure stops short of walls lower down.
  {
    const page = await open({ viewport: { width: 800, height: 600 } });
    for (const room of ['landing1', 'landing2', 'landing3', 'landing4']) {
      for (const deg of [80, 85]) {
        await jump(page, room, [5.77, 0.35], deg * Math.PI / 180);
        await page.waitForTimeout(1500);
        await page.locator('#stage canvas').click({ position: { x: 5, y: 300 } });
        await page.keyboard.down('ArrowUp');
        let s = null, left = false;
        for (let i = 0; i < 30; i++) { s = await st(page); if (s.room !== room) left = true; if (left && s.view === s.room && s.chain === 0) break; await page.waitForTimeout(150); }
        await page.keyboard.up('ArrowUp');
        ok(left && s.view === s.room && s.chain === 0, `${MAP.rooms[room].name}, up the flight at ${deg}° against the right wall: the view follows you into ${MAP.rooms[s.room].name} (${s.view})`);
      }
    }
    await shot(page, '15-m27-after-the-top');
    ok((await st(page)).recovered === 0, 'the camera got there itself: the safety net was never needed');
    ok(page.errors.length === 0, `no errors (M27)${page.errors.length ? `: ${page.errors.join(' | ')}` : ''}`);
  }
} catch (err) {
  console.log(`FAIL the check stopped: ${err.message}`);
  failures++;
} finally {
  await browser.close();
  server.close();
}
console.log(failures ? `\n${failures} check(s) failed` : '\nAll checks passed');
process.exitCode = failures ? 1 : 0;
