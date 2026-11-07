// A browser check of the signpost renderer (signpost\tile\, claude/raku-renderer-tiles-plan.md, SR1 to SR6) through its
// stand-in host (signpost\dev\serve.mjs: the tile in a frame, answering "ready" with a sample signpost and its { get }
// requests by Raku's rule): the lines with and without names, "Go to" asking to open the place, several destinations,
// empty, not a signpost, no host, phone width, no errors. Raku's own check (C:\thunderbird-cafe\raku\test\browser\
// check_renderer.py) runs it through the real loader and Raku's real answers.
// Run in the build chat: node test/browser/check_signpost.mjs [folder for screenshots]   (needs Playwright)
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const require = createRequire(import.meta.url);
const load = (name) => { for (const p of [name, path.join(ROOT, '..', 'web-tile-foundry', 'node_modules', name), `/opt/npm-tools/node_modules/${name}`]) { try { return require(p); } catch {} } throw new Error(`${name} not found`); };
const { chromium } = load('playwright');
const SHOTS = process.argv[2] || path.join(ROOT, 'shots');
mkdirSync(SHOTS, { recursive: true });
const PORT = 5298;
const HOST = `http://127.0.0.1:${PORT}/`;
const TC = 'did:plc:6vxjigxrqizmbo56gojxico3', PX = 'did:plc:rqbqpaaluty5v47jwciowpik';
const MAZE = `at://${PX}/cafe.thunderbird.way.place/maze`;

const server = spawn(process.execPath, [path.join(ROOT, 'signpost', 'dev', 'serve.mjs')], { env: { ...process.env, PORT: String(PORT) }, stdio: ['ignore', 'pipe', 'inherit'] });
await new Promise((ok) => server.stdout.on('data', (d) => { if (String(d).includes('stand-in host')) ok(); }));

let pass = 0, fail = 0;
const check = (name, cond, detail = '') => { if (cond) { pass++; console.log(`PASS ${name}`); } else { fail++; console.log(`FAIL ${name}${detail ? `  [${detail}]` : ''}`); } };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function until(fn, ms = 5000) { const end = Date.now() + ms; while (Date.now() < end) { try { const v = await fn(); if (v) return v; } catch {} await sleep(80); } return null; }

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1300, height: 820 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto(HOST);
  const tile = page.frameLocator('#f');
  const state = () => tile.locator('#signpost').getAttribute('data-state');
  const text = (sel, i = 0) => tile.locator(sel).nth(i).innerText();
  const logText = () => page.locator('#log').innerText();

  // the slide, with the host answering get
  check('the slide: drawn, then the names filled in from the host\'s answers', await until(async () => (await state()) === 'signpost' && (await text('h1')) === 'Slide, in Winter Forest'));
  check('...the line under it: [place: winter-forest] [leave/exit: slide]', (await text('.out')) === 'A way out of [place: winter-forest] [leave/exit: slide]', await text('.out'));
  check('...who: the handle, then the DID in brackets', (await text('.by', 0)) === `by @thunderbird.cafe [${TC}]`, await text('.by', 0));
  check('...the date on its own line', (await text('.by', 1)) === 'Updated Oct 29, 2026.');
  check('..."Go to Escher maze" (the name from the maze\'s place)', (await text('button.go')) === 'Go to Escher maze');
  check('...where it leads: [place: maze] [arrive/entrance: obelisk]', (await text('.dest .name')) === 'A way in to [place: maze] [arrive/entrance: obelisk]', await text('.dest .name'));
  check('...and whose: @pyxorium.com [DID]', (await text('.dest .sub')) === `by @pyxorium.com [${PX}]`, await text('.dest .sub'));
  const asked = (await logText()).match(/tile asks: \{"get":"[^"]+"\}/g) || [];
  check('it asked for two records: its own place and the maze\'s', asked.length === 2 && asked.some((a) => a.includes('/cafe.thunderbird.way.place/winter-forest')) && asked.some((a) => a.includes(MAZE)), asked.join(' '));
  const colours = await tile.locator('body').evaluate(() => { const cs = (s) => getComputedStyle(document.querySelector(s)); return [cs('body').backgroundColor, cs('button.go').backgroundColor, cs('.card').backgroundColor]; });
  check('the travel pages\' colours (cream page, blue button, card)', JSON.stringify(colours) === JSON.stringify(['rgb(238, 231, 215)', 'rgb(66, 96, 176)', 'rgb(251, 248, 241)']), JSON.stringify(colours));
  await page.screenshot({ path: path.join(SHOTS, 'signpost-slide.png') });
  await tile.locator('button.go').click();
  check('"Go to" asks the host to open the maze\'s place', await until(async () => (await logText()).includes(`tile asks: {"open":"${MAZE}"}`)));
  check('...then the "If nothing opens" line', await tile.locator('.after').isVisible());
  check('...one request per press', ((await logText()).match(/"open":/g) || []).length === 1);

  // a host that doesn't answer get: the record's own data, nothing waiting
  await page.click('#g');
  check('no answers: the heading from the record alone', await until(async () => (await state()) === 'signpost' && (await text('h1')) === 'Slide, in winter-forest'));
  await sleep(400);
  check('...the button names the record key', (await text('button.go')) === 'Go to maze');
  check('...the destination\'s account as its DID', (await text('.dest .sub')) === `by [${PX}]`, await text('.dest .sub'));
  await page.click('#g');

  // the obelisk, named in its record (SR5)
  await page.click('[data-s=obelisk]');
  check('a signpost with its own name: "The obelisk, in Escher maze"', await until(async () => (await text('h1')) === 'The obelisk, in Escher maze'));

  // several, with a label and a note; at phone width
  await page.click('[data-s=several]');
  check('several: a note, a choice, a "Go there" per row', await until(async () => (await tile.locator('button.go.mini').count()) === 2 && (await text('.note')).startsWith('Under construction')));
  check('...a label on top of its row', (await text('.dest .name', 0)) === 'Back to the lamp post' && (await text('.dest .sub', 0)) === 'A way in to [place: winter-forest] [arrive/entrance: lamppost]');
  check('...the card says pick one', (await text('.card .label')).toLowerCase() === 'where it leads (pick one)');
  await tile.locator('button.go.mini').nth(1).click();
  check('...each row opens its own destination', await until(async () => (await logText()).includes(`tile asks: {"open":"${MAZE}"}`)));
  await page.click('#w');
  await sleep(300);
  const fits = await tile.locator('body').evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth);
  check('phone width: nothing runs off the side (DIDs wrap)', fits);
  await page.screenshot({ path: path.join(SHOTS, 'signpost-several-phone.png') });
  await page.click('#w');

  // someone else's: no dot in the key, no handle, a tile destination
  await page.click('[data-s=odd]');
  check('a key with no dot, a tile destination: "Well", "Go to The Desert"', await until(async () => (await text('h1')) === 'Well' && (await text('button.go')) === 'Go to The Desert'));
  check('...[leave/exit: well] only, and [tile: …]', (await text('.out')) === 'A way out [leave/exit: well]' && (await text('.dest .name')) === 'A way in to [tile: 3mzdesert]');

  // empty; not a signpost; no host
  await page.click('[data-s=wardrobe]');
  check('empty: "This doesn\'t lead anywhere yet.", no button', await until(async () => (await state()) === 'signpost' && (await text('.card p:not(.label)')) === "This doesn't lead anywhere yet." && (await tile.locator('button.go').count()) === 0));
  await page.click('[data-s=like]');
  check('not a signpost: says so, naming the kind', await until(async () => (await state()) === 'notsignpost' && (await text('p')).includes('(app.bsky.feed.like)')));
  await page.click('[data-s=none]');
  check('a host that sends nothing: "This tile shows signposts." after 3 s', await until(async () => (await state()) === 'nohost' && (await text('h1')) === 'This tile shows signposts.', 5000));
  const alone = await browser.newPage();
  const aloneErrors = [];
  alone.on('pageerror', (e) => aloneErrors.push(String(e)));
  await alone.goto(`${HOST}tile/index.html`);
  check('opened on its own: the same, without errors', await until(async () => (await alone.locator('#signpost').getAttribute('data-state')) === 'nohost', 5000) && !aloneErrors.length, aloneErrors.join(' | '));

  check('no errors on the page or in the tile', !errors.length, errors.join(' | '));
} finally {
  await browser.close();
  server.kill();
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exitCode = fail ? 1 : 0;
