// A browser check of the place renderer (place\tile\, claude/raku-renderer-tiles-plan.md, RT6 and RT7) through its
// stand-in host (place\dev\serve.mjs: the tile in a frame, answering "ready" with a sample record over the tiles spec's
// data protocol, as Raku does): each state, "Step into" asking to open the tile, phone width, opened alone, no errors.
// Raku's own check (C:\thunderbird-cafe\raku\test\browser\check_renderer.py) runs it through the real loader.
// Run in the build chat: node test/browser/check_place.mjs [folder for screenshots]   (needs Playwright)
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
const PORT = 5299;
const HOST = `http://127.0.0.1:${PORT}/`;

const server = spawn(process.execPath, [path.join(ROOT, 'place', 'dev', 'serve.mjs')], { env: { ...process.env, PORT: String(PORT) }, stdio: ['ignore', 'pipe', 'inherit'] });
await new Promise((ok) => server.stdout.on('data', (d) => { if (String(d).includes('stand-in host')) ok(); }));

let pass = 0, fail = 0;
const check = (name, cond, detail = '') => { if (cond) { pass++; console.log(`PASS ${name}`); } else { fail++; console.log(`FAIL ${name}${detail ? `  [${detail}]` : ''}`); } };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function until(fn, ms = 5000) { const end = Date.now() + ms; while (Date.now() < end) { try { const v = await fn(); if (v) return v; } catch {} await sleep(80); } return null; }

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto(HOST);
  const tile = page.frameLocator('#f');
  const state = () => tile.locator('#place').getAttribute('data-state');
  const text = (sel) => tile.locator(sel).first().innerText();

  // Winter Forest
  check('the place: drawn once the host answers "ready"', await until(async () => (await state()) === 'place'));
  check('...its name, large', (await text('h1')) === 'Winter Forest');
  check('...who made it and when', (await text('.by')) === 'A place by @thunderbird.cafe. Updated Oct 28, 2026.', await text('.by'));
  check('..."Step into Winter Forest"', (await text('button.go')) === 'Step into Winter Forest');
  check('...the card: "The tile behind it" (shown uppercase)', (await text('.card .label')).toLowerCase() === 'the tile behind it');
  check('...the place named in the card\'s line', (await text('.card p:not(.label)')) === 'A place keeps the same address even when its tile is replaced. Right now, Winter Forest is this tile:');
  check('...the tile\'s address as text', (await text('.card code')) === 'at://did:plc:6vxjigxrqizmbo56gojxico3/ing.dasl.masl/3myxm45elkp22');
  check('...the "If nothing opens" line hidden until pressed', !(await tile.locator('.after').isVisible()));
  const colours = await tile.locator('body').evaluate(() => {
    const cs = (sel) => getComputedStyle(document.querySelector(sel));
    return [cs('body').backgroundColor, cs('button.go').backgroundColor, cs('.card').backgroundColor];
  });
  check('...the travel pages\' colours (cream page, blue button, card)', JSON.stringify(colours) === JSON.stringify(['rgb(238, 231, 215)', 'rgb(66, 96, 176)', 'rgb(251, 248, 241)']), JSON.stringify(colours));
  await page.screenshot({ path: path.join(SHOTS, 'place-forest.png') });
  await tile.locator('button.go').click();
  check('"Step into" asks the host to open the tile, and nothing else', await until(async () => (await page.locator('#log').innerText()).includes('tile asks: {"open":"at://did:plc:6vxjigxrqizmbo56gojxico3/ing.dasl.masl/3myxm45elkp22"}')));
  check('...then the quiet "If nothing opens" line', await tile.locator('.after').isVisible() && (await text('.after')) === 'If nothing opens, copy the address below into Raku.');
  const asks = ((await page.locator('#log').innerText()).match(/tile asks:/g) || []).length;
  check('...one request per press', asks === 1, String(asks));
  await page.screenshot({ path: path.join(SHOTS, 'place-after-step.png') });

  // the maze, on pyxorium.com
  await page.click('[data-s=maze]');
  check('the maze\'s place: its own name and account', await until(async () => (await state()) === 'place' && (await text('h1')) === 'Escher maze' && (await text('.by')) === 'A place by @pyxorium.com. Updated Oct 29, 2026.'));

  // a long name, no handle; at phone width
  await page.click('#w');
  await page.click('[data-s=long]');
  await until(async () => (await text('h1')).startsWith('The Lantern'));
  check('no checked handle: the DID', (await text('.by')) === 'A place by did:plc:aaaaaaaaaaaaaaaaaaaaaaaa. Updated Nov 5, 2026.', await text('.by'));
  const fits = await tile.locator('body').evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth);
  check('phone width: nothing runs off the side (long name and address wrap)', fits);
  const full = await tile.locator('button.go').evaluate((b) => { const p = b.parentElement, cs = getComputedStyle(p); const inner = p.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight); return Math.abs(b.getBoundingClientRect().width - inner) < 2; });
  check('phone width: the button spans the width', full);
  const h1 = await tile.locator('h1').evaluate((e) => getComputedStyle(e).fontSize);
  check('phone width: the 25 px heading', h1 === '25px', h1);
  await page.screenshot({ path: path.join(SHOTS, 'place-phone-long.png') });
  await page.click('#w');

  // points at no tile
  await page.click('[data-s=notile]');
  check('a place that points at no tile: no button, and says so', await until(async () => (await state()) === 'place' && (await tile.locator('button.go').count()) === 0
    && (await text('.card p:not(.label)')) === "This place doesn't point at a tile right now."));

  // not a place
  await page.click('[data-s=like]');
  check('not a place: says so, naming the kind', await until(async () => (await state()) === 'notplace' && (await text('h1')) === "This isn't a place."
    && (await text('p')).includes('It was given a record of another kind (app.bsky.feed.like).')));
  await page.screenshot({ path: path.join(SHOTS, 'place-notplace.png') });

  // a host that sends nothing
  await page.click('[data-s=none]');
  check('waiting first', await until(async () => (await state()) === 'waiting' && (await text('.wait')) === 'Waiting for a place…', 1500));
  check('a host that sends nothing: "This tile shows places." after 3 s', await until(async () => (await state()) === 'nohost', 5000));
  check('...naming no place, saying what a place is', (await text('h1')) === 'This tile shows places.' && (await tile.locator('.small').innerText()).startsWith('A place is a cafe.thunderbird.way.place record'));
  await page.screenshot({ path: path.join(SHOTS, 'place-nohost.png') });

  // opened on its own (no host at all)
  const alone = await browser.newPage({ viewport: { width: 900, height: 600 } });
  const aloneErrors = [];
  alone.on('pageerror', (e) => aloneErrors.push(String(e)));
  await alone.goto(`${HOST}tile/index.html`);
  check('opened on its own: "This tile shows places."', await until(async () => (await alone.locator('#place').getAttribute('data-state')) === 'nohost', 5000));
  check('...without errors', !aloneErrors.length, aloneErrors.join(' | '));

  check('no errors on the page or in the tile (its policy allows everything it does)', !errors.length, errors.join(' | '));
} finally {
  await browser.close();
  server.kill();
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exitCode = fail ? 1 : 0;
