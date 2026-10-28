// A browser check of the travel page (site/travel.js; claude/winter-forest-step3-plan.md) through the real tile loader:
// the page bundled as Astro would (way-main.js with @dasl/tile-loader from the site), under its security policy, on
// 127.0.0.1; a replica of the tile loading server (loader-replica.mjs) with the loader's own files; and stand-ins for
// plc.directory and thunderbird.cafe's server (test/fake-pds.mjs) holding the maze and Winter Forest as publish.mjs
// writes them (the real tile files, places and signposts). Then the trip, played as a traveller would:
//   the page with an empty obelisk ("This doesn't lead anywhere yet."); with a test signpost (?sign=, W41): "Step
//   through" (W40), the forest at the lamp post, the bar, the title; down the slide to the maze at its obelisk, the
//   address following (W39); the bar's Back, the browser's Back and Forward; the obelisk back to the forest; a reload
//   replaying the last leg; a blocked way; "Pick a door" and "Stay here"; the phone's tucked bar; no errors.
// Run in the build chat:
//   node test/browser/check_travel.mjs <the site's node_modules> <the loader's public folder> [folder for screenshots]
// e.g. node test/browser/check_travel.mjs ..\pyxorium.github.io\node_modules ..\tiles-loading-server\public
// WebGL runs in software here (SwiftShader), a few frames a second, so it waits generously.
import { createRequire } from 'node:module';
import http from 'node:http';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createFakePds } from '../fake-pds.mjs';
import { runPublish, ACCOUNT, SIGNPOST } from '../../scripts/publish.mjs';
import { TILES, FOREST_TILES } from '../../scripts/tiles.mjs';
import { wayPages, generatedPages } from '../../scripts/copy-to-site.mjs';
import { pageCsp } from '../../site/page-csp.js';
import { startLoaderReplica } from './loader-replica.mjs';
import * as L from '../../forest/src/layout.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const require = createRequire(import.meta.url);
const load = (name) => { for (const p of [name, path.join(ROOT, '..', 'web-tile-foundry', 'node_modules', name), `/opt/npm-tools/node_modules/${name}`]) { try { return require(p); } catch {} } throw new Error(`${name} not found`); };
const playwright = load('playwright');
const esbuild = load('esbuild');
const [SITE_MODULES = path.join(ROOT, '..', 'pyxorium.github.io', 'node_modules'), LOADER_PUBLIC = process.env.LOADER_PUBLIC || path.join(ROOT, '..', 'tiles-loading-server', 'public'), OUT = null] = process.argv.slice(2);
if (OUT) mkdirSync(OUT, { recursive: true });

let failures = 0;
const ok = (cond, msg) => { console.log(`${cond ? 'ok  ' : 'FAIL'} ${msg}`); if (!cond) failures++; };

// ---- the world: thunderbird.cafe's server with the maze and the forest published, as publish.mjs does ----------------
const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
let published = {};
const quiet = { fetchImpl: pds.fetchImpl, log: () => {}, ask: async () => 'y', askHidden: async () => 'right-password', checkBundle: async () => true,
  readPublished: () => published, writePublished: (o) => { published = o; } };
await runPublish({ ...quiet });
await runPublish({ ...quiet, tiles: FOREST_TILES });
ok(pds.records.get(`${SIGNPOST}/maze.obelisk`).value.to.length === 0 && pds.records.get(`${SIGNPOST}/winter-forest.slide`).value.to.length === 1,
  'the stand-in server: the maze and the forest published, the obelisk empty (as live), the slide leading to the maze');

// ---- the page, built as Astro would ---------------------------------------------------------------------------------
const loader = await startLoaderReplica({ publicDir: LOADER_PUBLIC, port: 5231 });
const stub = path.join(mkdtempSync(path.join(tmpdir(), 'way-')), 'tile-load-domain.js');      // the site's src/lib file, for this replica
writeFileSync(stub, `export const TILE_LOAD_DOMAIN = ${JSON.stringify(loader.loadDomain)};\n`);
const js = (await esbuild.build({
  entryPoints: [path.join(ROOT, 'site', 'way-main.js')], bundle: true, format: 'esm', minify: true, write: false,
  alias: { '@dasl/tile-loader': path.join(SITE_MODULES, '@dasl', 'tile-loader', 'dist', 'index.js'), },
  plugins: [{ name: 'site', setup(b) {
    b.onResolve({ filter: /tile-load-domain\.js$/ }, () => ({ path: stub }));
    // pages.generated.js, as copy-to-site.mjs writes it into the site
    b.onResolve({ filter: /pages\.generated\.js$/ }, () => ({ path: 'pages.generated.js', namespace: 'gen' }));
    b.onLoad({ filter: /.*/, namespace: 'gen' }, () => ({ contents: generatedPages(wayPages()), loader: 'js' }));
  } }],
})).outputFiles[0].text;
const css = readFileSync(path.join(ROOT, 'site', 'way.css'), 'utf8');
const csp = pageCsp(loader.loadDomain, { scheme: 'http' });
const PAGES = wayPages();
const htmlFor = (p) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="${csp}">
<meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>${p.title} · thunderbird.cafe</title>
<link rel="stylesheet" href="/_astro/way.css"></head><body><main id="way" data-signpost="${p.signpost}" data-from="${p.from}"></main>
<script type="module" src="/_astro/way.js"></script></body></html>`;
const PORT = 5232;
const site = http.createServer((req, res) => {
  const u = new URL(req.url, 'http://127.0.0.1');
  if (u.pathname === '/_astro/way.js') { res.writeHead(200, { 'content-type': 'text/javascript' }); res.end(js); return; }
  if (u.pathname === '/_astro/way.css') { res.writeHead(200, { 'content-type': 'text/css' }); res.end(css); return; }
  const p = PAGES.find((x) => u.pathname === `${x.path}/` || u.pathname === x.path);
  if (p) { res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); res.end(htmlFor(p)); return; }
  res.writeHead(404); res.end('Not found');
});
await new Promise((r) => site.listen(PORT, '127.0.0.1', r));
const LOADER_Q = `loader=${encodeURIComponent(loader.loadSource)}`;
const at = (p, signs = []) => `http://127.0.0.1:${PORT}${p}?${[LOADER_Q, ...signs.map((s) => `sign=${encodeURIComponent(s)}`)].join('&')}`;

const browser = await playwright.chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=document-user-activation-required'] });
async function newPage(opts = {}) {
  const page = await browser.newPage({ viewport: { width: 1000, height: 720 }, ...opts });
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push(e.message));
  // A record that isn't there is a 400 (RecordNotFound), which browsers log; the loader's "form-src" is its own (known).
  page.on('console', (m) => { const t = m.text(); if ((m.type() === 'error' && !/status of 400|form-src/.test(t)) || (/Content.Security.Policy|Refused/.test(t) && !/form-src/.test(t))) page.errors.push(t); });
  await page.route(/^https:\/\/(plc\.directory|pds\.test)\//, async (route) => {
    const req = route.request();
    const res = await pds.fetchImpl(req.url(), { method: req.method() });
    route.fulfill({ status: res.status, body: Buffer.from(await res.arrayBuffer()), headers: { 'content-type': res.headers.get('content-type') || 'application/json', 'access-control-allow-origin': '*' } });
  });
  return page;
}
const info = (page) => page.evaluate(() => window.__way && window.__way.info());
const until = async (fn, ms = 60000) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { try { if (await fn()) return true; } catch { /* a frame going away */ } await new Promise((r) => setTimeout(r, 200)); } return false; };
// The tile's own frame (the loader's inner frame) running the forest or the maze.
async function tileFrame(page, name) {
  for (const f of page.frames()) {
    if (!/tiles\.localhost:\d+\/$/.test(f.url())) continue;
    try { if (await f.evaluate((n) => !!window[n], name)) return f; } catch { /* gone */ }
  }
  return null;
}
const forestState = async (page) => (await tileFrame(page, '__forest'))?.evaluate(() => window.__forest.state());
const mazeState = async (page) => (await tileFrame(page, '__maze'))?.evaluate(() => window.__maze.state());
// The maze plays its own short arrival (a fade) after the page's screen goes: wait for it to land at the obelisk.
const atObelisk = (s) => s && s.room === 'hall' && s.cell.join() === '3,5' && !s.fading;
const mazeLanded = async (page) => { await until(async () => atObelisk(await mazeState(page)), 30000); return mazeState(page); };
const near = (s, e, d = 0.2) => s && Math.hypot(s.x - e.x, s.z - e.z) < d;
const shot = async (page, name) => { if (OUT) await page.screenshot({ path: path.join(OUT, `${name}.png`), timeout: 60000 }); };
const forestJump = async (page, x, z, yaw, where = 'forest') => (await tileFrame(page, '__forest')).evaluate(([x, z, yaw, w]) => window.__forest.jump(x, z, yaw, w), [x, z, yaw, where]);
const forestHold = async (page, on) => (await tileFrame(page, '__forest'))?.evaluate((v) => { window.__forest.held.forward = v; }, on);
async function slideFromBench(page) {
  await until(async () => (await forestState(page))?.phase === 'walking', 30000);
  await (await tileFrame(page, '__forest')).evaluate(() => { window.__forest.timeScale = 4; });     // the ride, quicker (software graphics)
  const b = L.world(L.FRAMES.slide, 1.9, 4.38), bt = L.world(L.FRAMES.slide, 1.9, 6);
  await forestJump(page, b[0], b[1], Math.atan2(-(bt[0] - b[0]), -(bt[1] - b[1])), 'library');
  await page.waitForTimeout(500);
  await forestHold(page, true);
  await until(async () => (await forestState(page))?.phase !== 'walking', 20000);
  await forestHold(page, false);
}
const towards = (id, u, v = 0) => { const f = L.FRAMES[id]; const [x, z] = L.world(f, u, v); return { x, z, yaw: L.yawFacing(f.d[0], f.d[1]) }; };
async function walkInto(page, id, u, v) {
  await until(async () => (await forestState(page))?.phase === 'walking', 30000);
  const w = towards(id, u, v);
  await forestJump(page, w.x, w.z, w.yaw);
  await page.waitForTimeout(400);
  await forestHold(page, true);
  await until(async () => (await forestState(page))?.phase !== 'walking', 20000);
  await forestHold(page, false);
}
async function intoObelisk(page) {
  const f = await tileFrame(page, '__maze');
  await f.evaluate(() => window.__maze.jump('hall', [3.5, 5.6], 'ne'));
  await page.waitForTimeout(500);
  await page.keyboard.down('ArrowUp'); await page.waitForTimeout(1200); await page.keyboard.up('ArrowUp');
}
const run = (n) => !process.env.ONLY || process.env.ONLY.split(',').includes(String(n));     // ONLY=2,3: some sections
const settled = (page) => until(async () => { const i = await info(page); return i && !i.busy && !i.screen; }, 90000);

// ---- 1. The obelisk's signpost empty (as live today): the page says so ---------------------------------------------
if (run(1)) {
  const page = await newPage();
  await page.goto(at('/way/maze/obelisk/'));
  await page.waitForSelector('#way h1', { timeout: 30000 });
  ok(/doesn't lead anywhere yet/.test(await page.textContent('#way h1')), 'the obelisk\'s signpost empty: "This doesn\'t lead anywhere yet."');
  ok((await page.locator('iframe').count()) === 0, 'and no tile is loaded');
  ok(page.errors.length === 0, `no errors ${page.errors.join(' | ')}`);
  await page.close();
}

// ---- 2. The loop, with a test signpost for the obelisk (W41) --------------------------------------------------------
const OBELISK = 'maze.obelisk:winter-forest/lamppost';
if (run(2)) {
  const page = await newPage();
  await page.goto(at('/way/maze/obelisk/', [OBELISK]));
  await page.waitForSelector('.tripscreen .step', { timeout: 30000 });
  let i = await info(page);
  ok(/Winter Forest/.test(i.screenText) && /by @thunderbird\.cafe/.test(i.screenText) && /Step through/.test(i.screenText), `first opening: the screen with the place's name, whose it is, and "Step through" (W40) (${JSON.stringify(i.screenText)})`);
  ok(await page.evaluate(() => getComputedStyle(document.querySelector('.tripscreen')).backgroundColor) === 'rgb(66, 96, 176)', 'in the obelisk\'s colour (the Great Hall\'s blue)');
  ok(i.test, 'the bar says test signposts are in use');
  await page.waitForTimeout(2500);
  ok((await forestState(page))?.entered === false, 'the forest waits behind the screen (the postcard, not yet arrived)');
  // (Whether sound starts on "Step through" can't be checked here: headless Chromium doesn't keep sound off before a
  // click. The loader's frame is given allow="autoplay", so a real browser may let it start: the owner's test.)
  await shot(page, '01-step-through');
  await page.click('.tripscreen .step');
  await settled(page);
  i = await info(page);
  let fs = await forestState(page);
  ok(fs && fs.entered && near(fs, L.ENTRANCES.lamppost), 'stepping through: in the forest at the lamp post');
  ok(JSON.stringify(i.statuses) === JSON.stringify({ wardrobe: 'dormant', 'tree-door': 'dormant', arch: 'dormant', slide: 'open' }) && fs.exits.slide === 'open' && fs.exits.arch === 'dormant',
    `the forest is told which ways lead somewhere (only the slide) (${JSON.stringify(fs.exits)})`);
  ok(i.title === 'Winter Forest · thunderbird.cafe', `the tab's title follows (${i.title})`);
  ok(!i.back && !i.raku, 'the bar: no Back on the first leg, no "Open in Raku" for a ways-only place');
  ok(/Winter Forest/.test(await page.textContent('.tripbar .where')) && /by @thunderbird\.cafe/.test(await page.textContent('.tripbar .where')), 'the bar: the place\'s name and whose it is');
  ok(i.path === '/way/maze/obelisk/' && i.leg === 0, 'the address: the page you opened');
  const tf = await tileFrame(page, '__forest');
  const focused = await tf.evaluate(() => document.hasFocus());
  ok(focused, 'the forest has the keys after stepping through (no click needed)');
  await until(async () => (await forestState(page)).phase === 'walking', 30000);
  const before = await forestState(page);
  await page.keyboard.down('ArrowUp'); await page.waitForTimeout(1500); await page.keyboard.up('ArrowUp');
  const afterKeys = await forestState(page);
  ok(Math.hypot(afterKeys.x - before.x, afterKeys.z - before.z) > 0.2, `the arrow keys walk you in the forest straight away (moved ${Math.hypot(afterKeys.x - before.x, afterKeys.z - before.z).toFixed(2)})`);
  await shot(page, '02-forest');

  // Down the slide: the maze at its obelisk; the address follows (W39).
  await slideFromBench(page);
  await until(async () => (await info(page)).screen, 120000);
  await page.waitForTimeout(300);
  i = await info(page);
  ok(i.screen && (await page.evaluate(() => getComputedStyle(document.querySelector('.tripscreen')).backgroundColor)) === 'rgb(66, 96, 176)', 'after the slide: the screen in the slide\'s blue');
  await shot(page, '03-between');
  await settled(page);
  i = await info(page);
  let ms = await mazeLanded(page);
  ok(ms && ms.room === 'hall' && ms.cell.join() === '3,5' && ms.facing === 'se', `then the maze, beside the obelisk facing down the hall (${ms && ms.room} ${ms && ms.cell})`);
  ok(ms.ways === 'host' && ms.obelisk === 'open', 'the maze is told its obelisk leads somewhere (the test signpost)');
  ok(i.path === '/way/winter-forest/slide/' && i.leg === 1 && (await page.evaluate(() => location.search)).includes('sign='), `the address follows the slide, keeping the test signposts (${i.path})`);
  ok(i.title === 'Escher maze · thunderbird.cafe' && i.back && i.raku, 'the title follows; the bar has Back and "Open in Raku" (an open place)');
  ok(i.frames === 1, 'one tile running (the forest is gone)');
  ok(await (await tileFrame(page, '__maze')).evaluate(() => document.hasFocus()), 'the maze has the keys');
  await shot(page, '04-maze');

  // The bar's Back: the forest again, at the lamp post (the slide is an exit only).
  await page.click('.tripbar .back');
  await until(async () => (await info(page)).leg === 0 && !(await info(page)).busy && !(await info(page)).screen, 90000);
  fs = await forestState(page);
  i = await info(page);
  ok(fs && near(fs, L.ENTRANCES.lamppost) && i.path === '/way/maze/obelisk/' && i.title === 'Winter Forest · thunderbird.cafe', 'the bar\'s Back: the forest at the lamp post (the slide is an exit only), the address and title back');
  // The browser's Forward: the maze as you arrived.
  await page.goForward();
  await until(async () => (await info(page)).leg === 1 && !(await info(page)).busy && !(await info(page)).screen, 90000);
  ms = await mazeLanded(page);
  ok(ms && ms.room === 'hall' && ms.cell.join() === '3,5', 'the browser\'s Forward: the maze at the obelisk again');

  // The obelisk: back to the forest (leg 2), then the browser's Back: the maze, at the obelisk you left by.
  await intoObelisk(page);
  await until(async () => (await info(page)).leg === 2 && !(await info(page)).busy && !(await info(page)).screen, 90000);
  fs = await forestState(page); i = await info(page);
  ok(fs && near(fs, L.ENTRANCES.lamppost) && i.path === '/way/maze/obelisk/', `the obelisk: the forest at the lamp post, the address /way/maze/obelisk/ (${i.path})`);
  await page.goBack();
  await until(async () => (await info(page)).leg === 1 && !(await info(page)).busy && !(await info(page)).screen, 90000);
  ms = await mazeLanded(page); i = await info(page);
  ok(ms && ms.room === 'hall' && ms.cell.join() === '3,5' && i.path === '/way/winter-forest/slide/', 'the browser\'s Back: the maze, at the obelisk you left by');

  // A reload replays the last leg: Step through, then the maze at its obelisk.
  await page.reload();
  await page.waitForSelector('.tripscreen .step', { timeout: 30000 });
  i = await info(page);
  ok(/Escher maze/.test(i.screenText), 'a reload: "Step through" into the Escher maze');
  await page.click('.tripscreen .step');
  await settled(page);
  ms = await mazeLanded(page);
  ok(ms && ms.room === 'hall' && ms.cell.join() === '3,5', 'and you\'re at the obelisk (the slide\'s leg, replayed)');
  ok(page.errors.length === 0, `no errors ${page.errors.join(' | ')}`);
  await page.close();
}

// ---- 3. A blocked way, and "Pick a door" -------------------------------------------------------------------------
if (run(3)) {
  const page = await newPage();
  // Arrive under the arch; the arch leads to a place that doesn't exist; the wardrobe to two doors.
  await page.goto(at('/way/maze/obelisk/', ['maze.obelisk:winter-forest/arch', 'winter-forest.arch:nowhere/arch', 'winter-forest.wardrobe:maze/obelisk,winter-forest/lamppost']));
  await page.waitForSelector('.tripscreen .step', { timeout: 30000 });
  await page.click('.tripscreen .step');
  await settled(page);
  let fs = await forestState(page);
  ok(fs && near(fs, L.ENTRANCES.arch), 'a signpost naming an entrance: you arrive there (out from under the arch)');
  ok(fs.exits.arch === 'open' && fs.exits.wardrobe === 'open', 'the arch and the wardrobe lead somewhere (test signposts)');
  await walkInto(page, 'arch', -2.6, 0.2);
  await until(async () => /blocked/.test((await info(page)).note), 60000);
  fs = await forestState(page);
  const i = await info(page);
  ok(i.note === 'The way is blocked.' && !i.screen && i.leg === 0, '"The way is blocked." (the place doesn\'t exist)');
  await until(async () => { const s = await forestState(page); return s.phase === 'walking' && near(s, L.ENTRANCES.arch); }, 20000);
  ok(near(await forestState(page), L.ENTRANCES.arch), 'and you\'re back where you left: at the arch');
  await shot(page, '05-blocked');
  // The wardrobe: two doors. Stay here first, then the maze.
  await walkInto(page, 'wardrobe', -3.0);
  await page.waitForSelector('.doorsbox .door', { timeout: 60000 });
  ok((await page.locator('.doorsbox .door').count()) === 2 && /Pick a door/.test(await page.textContent('.doorsbox h1')), 'several destinations: "Pick a door" with both');
  await shot(page, '06-pick');
  await page.click('.doorsbox button.stay');
  await until(async () => { const s = await forestState(page); return !(await info(page)).screen && s.phase === 'walking' && near(s, L.ENTRANCES.wardrobe); }, 30000);
  ok(near(await forestState(page), L.ENTRANCES.wardrobe), '"Stay here": back inside the wardrobe\'s doors');
  await walkInto(page, 'wardrobe', -3.0);
  await page.waitForSelector('.doorsbox .door', { timeout: 60000 });
  await page.locator('.doorsbox .door').filter({ hasText: 'Escher maze' }).locator('button.go').click();
  await settled(page);
  const ms = await mazeLanded(page);
  ok(ms && ms.room === 'hall' && (await info(page)).path === '/way/winter-forest/wardrobe/', 'choosing the maze: there, the address /way/winter-forest/wardrobe/');
  ok(page.errors.length === 0, `no errors ${page.errors.join(' | ')}`);
  await page.close();
}

// ---- 4. Several doors at first opening; a phone's tucked bar ----------------------------------------------------
if (run(4)) {
  const page = await newPage({ viewport: { width: 390, height: 760 }, hasTouch: true, isMobile: true });
  await page.goto(at('/way/maze/obelisk/', ['maze.obelisk:winter-forest/lamppost,maze/obelisk']));
  await page.waitForSelector('#way .door button.go', { timeout: 30000 });
  ok((await page.locator('#way .door').count()) === 2, 'several at first opening: "Pick a door" on the page');
  const width = await page.evaluate(() => document.documentElement.scrollWidth);
  ok(width <= 390, `no sideways scrolling at phone width (${width})`);
  await shot(page, '07-phone-pick');
  await page.locator('#way .door').filter({ hasText: 'Winter Forest' }).locator('button.go').click();
  await settled(page);
  const fs = await forestState(page);
  ok(fs && fs.entered && near(fs, L.ENTRANCES.lamppost), 'choosing counts as stepping through: straight into the forest');
  const barTop = await page.evaluate(() => document.querySelector('.tripbar').getBoundingClientRect().bottom);
  ok(barTop <= 1 && await page.isVisible('.triptab'), 'on a phone the bar is tucked away, a thin tab above the tile');
  await page.tap('.triptab');
  await until(async () => (await page.evaluate(() => document.querySelector('.tripbar').getBoundingClientRect().top)) >= -1, 5000);
  ok(await page.evaluate(() => document.querySelector('.tripbar').getBoundingClientRect().top) >= -1, 'tapping the tab brings the bar down');
  await shot(page, '08-phone-bar');
  ok(page.errors.length === 0, `no errors ${page.errors.join(' | ')}`);
  await page.close();
}

await browser.close();
site.close(); loader.server.close();
console.log(failures ? `\n${failures} FAILED` : '\nAll passed.');
process.exitCode = failures ? 1 : 0;
