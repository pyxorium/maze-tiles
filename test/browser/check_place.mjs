// A browser check of the place renderer (place\tile\, claude/raku-renderer-tiles-plan.md, RT6 and RT7) through its
// stand-in host (place\dev\serve.mjs: the tile in a frame, answering "ready" with a sample record over the tiles spec's
// data protocol, as Raku does): each state, "Step into" asking to open the tile, phone width, opened alone, no errors;
// and the tile's card (claude/raku-places-card-plan.md, PC1 to PC6): the host answering { get } with the tile record and
// { picture } with the real banner or icon, and each other answer (changed, not found, hidden, refused, none).
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
  check('the tile\'s card: drawn from the host\'s answer to get', await until(async () => (await tile.locator('.card').getAttribute('data-card')) === 'card'));
  check('...the tile\'s name and who made it', (await text('.card h2')) === 'Winter Forest' && (await text('.card .tby')) === 'A tile by @thunderbird.cafe. Published Oct 28, 2026.', await text('.card .tby'));
  check('...its description', (await text('.card .desc')).startsWith('A snowy night forest.'));
  check('...short enough: no "More"', !(await tile.locator('.card .more').isVisible()));
  check('...its banner, shown from the bytes the host sent (a blob: picture that drew)', await until(async () => tile.locator('img.pic').evaluate((i) => i.src.startsWith('blob:') && i.complete && i.naturalWidth === 1280)));
  check('...across the card, 16:9', await tile.locator('img.pic').evaluate((i) => { const r = i.getBoundingClientRect(), c = i.parentElement.getBoundingClientRect(); return Math.abs(r.width / r.height - 16 / 9) < 0.02 && r.width > c.width - 40; }));
  check('...no "changed" line', (await tile.locator('.card .changed').count()) === 0);
  check('...then the place named in the line above the address', (await text('.card .why')) === 'A place keeps the same address even when its tile is replaced. Right now, Winter Forest is this tile:');
  const asked0 = await page.locator('#log').innerText();
  check('...asked once for the tile record and once for its banner, nothing else', (asked0.match(/tile asks: \{"get":"at:\/\/did:plc:6vxjigxrqizmbo56gojxico3\/ing\.dasl\.masl\/3myxm45elkp22"\}/g) || []).length === 1
    && (asked0.match(/tile asks: \{"picture":"bafkreiforestbannerstandinaaaaaaaaaaa","from":"at:\/\/did:plc:6vxjigxrqizmbo56gojxico3\/ing\.dasl\.masl\/3myxm45elkp22"\}/g) || []).length === 1
    && (asked0.match(/tile asks:/g) || []).length === 2, asked0);
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
  const asks = ((await page.locator('#log').innerText()).match(/tile asks: \{"open"/g) || []).length;
  check('...one request per press', asks === 1, String(asks));
  await page.screenshot({ path: path.join(SHOTS, 'place-after-step.png') });

  // the maze, on pyxorium.com
  await page.click('[data-s=maze]');
  check('the maze\'s place: its own name and account', await until(async () => (await state()) === 'place' && (await text('h1')) === 'Escher maze' && (await text('.by')) === 'A place by @pyxorium.com. Updated Oct 29, 2026.'));
  check('...its tile\'s banner (a PNG)', await until(async () => tile.locator('img.pic').evaluate((i) => i.src.startsWith('blob:') && i.naturalWidth === 1280)));
  const clipped = () => tile.locator('.card .desc').evaluate((d) => ({ h: d.clientHeight, sh: d.scrollHeight, lh: parseFloat(getComputedStyle(d).lineHeight) }));
  const c0 = await clipped();
  check('...a long description: three lines, then "More"', await tile.locator('.card .more').isVisible() && (await text('.card .more')) === 'More' && Math.round(c0.h / c0.lh) === 3 && c0.sh > c0.h + 2, JSON.stringify(c0));
  await tile.locator('.card .more').click();
  const c1 = await clipped();
  check('..."More" opens the rest in place, and becomes "Less"', (await text('.card .more')) === 'Less' && c1.h >= c1.sh - 1 && c1.h > c0.h, JSON.stringify(c1));
  await page.screenshot({ path: path.join(SHOTS, 'place-maze-more.png') });
  await tile.locator('.card .more').click();
  check('..."Less" folds it again', (await text('.card .more')) === 'More' && Math.round((await clipped()).h / c0.lh) === 3);

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
  check('no banner: the icon beside the tile\'s name (PC2)', await until(async () => tile.locator('.card .head img.ico').evaluate((i) => i.src.startsWith('blob:') && i.naturalWidth === 256))
    && (await tile.locator('img.pic').count()) === 0);
  check('...asking for the icon', (await page.locator('#log').innerText()).includes('tile asks: {"picture":"bafkreimazeiconstandinaaaaaaaaaaaaaaa"'));
  check('...the tile\'s author without a handle: the DID', (await text('.card .tby')) === 'A tile by did:plc:aaaaaaaaaaaaaaaaaaaaaaaa. Published Nov 4, 2026.', await text('.card .tby'));
  const fits2 = await tile.locator('body').evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth);
  check('phone width, with the card: nothing runs off the side', fits2);
  await page.screenshot({ path: path.join(SHOTS, 'place-phone-long.png') });
  await page.click('#w');

  // the other answers to get and picture (the host's switches reload the tile)
  await page.click('[data-s=forest]');
  const mode = async (attr, v) => { await page.evaluate(() => { document.getElementById('log').textContent = ''; }); await page.click(`[${attr}="${v}"]`); };
  const cardIs = (k) => until(async () => (await state()) === 'place' && (await tile.locator('.card').getAttribute('data-card')) === k);
  await mode('data-g', 'changed');
  check('a changed tile: the card, and the line saying portals won\'t lead to it (PC4)', await cardIs('card')
    && (await text('.card .changed')) === "This tile has been changed since the Winter Forest place was pointed at it (Oct 28, 2026), so portals in other tiles won't lead to it until the place is updated. Step into from this place opens the changed tile anyway.");
  check('...Step into still there', (await tile.locator('button.go').count()) === 1);
  await page.screenshot({ path: path.join(SHOTS, 'place-changed.png') });
  await mode('data-g', 'not-found');
  check('not found: "Raku couldn\'t find this tile…", the address, Step into kept (PC5)', await cardIs('error')
    && (await text('.card .cant')) === "Raku couldn't find this tile. It may have been deleted, or its author's server may not be answering right now."
    && (await text('.card code')) === 'at://did:plc:6vxjigxrqizmbo56gojxico3/ing.dasl.masl/3myxm45elkp22' && (await tile.locator('button.go').count()) === 1);
  check('...and no picture asked for', !(await page.locator('#log').innerText()).includes('"picture"'));
  await mode('data-g', 'hidden');
  check('hidden: "Raku doesn\'t show this tile.", the address, no Step into (PC5)', await cardIs('error')
    && (await text('.card .cant')) === "Raku doesn't show this tile." && (await tile.locator('button.go').count()) === 0 && (await tile.locator('.card code').count()) === 1);
  await page.screenshot({ path: path.join(SHOTS, 'place-hidden.png') });
  await mode('data-g', 'not-allowed');
  check('another refusal: today\'s card (the address only), Step into kept', await cardIs('none')
    && (await text('.card p:not(.label)')) === 'A place keeps the same address even when its tile is replaced. Right now, Winter Forest is this tile:' && (await tile.locator('button.go').count()) === 1);
  await mode('data-g', 'silent');
  await until(async () => (await page.locator('#log').innerText()).includes('not answering get'));
  await sleep(600);
  check('a host that doesn\'t answer get: today\'s card, exactly', (await tile.locator('.card').getAttribute('data-card')) === 'address'
    && (await tile.locator('.card p').count()) === 2 && (await text('.card code')) === 'at://did:plc:6vxjigxrqizmbo56gojxico3/ing.dasl.masl/3myxm45elkp22');
  await mode('data-g', 'card');
  await cardIs('card');
  await mode('data-p', 'slow');
  check('a picture on its way: the cream shimmer holds its place', await until(async () => tile.locator('img.pic.coming').count().then((n) => n === 1), 1500));
  check('...then the banner', await until(async () => tile.locator('img.pic').evaluate((i) => !i.classList.contains('coming') && i.naturalWidth === 1280), 5000));
  for (const [v, why] of [['too-big', 'refused'], ['junk', 'bytes that aren\'t a picture']]) {
    await mode('data-p', v);
    check(`a picture ${why}: the card without one, no message`, await cardIs('card') && await until(async () => (await page.locator('#log').innerText()).includes('host: picture'))
      && await until(async () => (await tile.locator('img').count()) === 0, 1500) && (await text('.card h2')) === 'Winter Forest' && (await tile.locator('.card p').count()) === 4);   // the label, who made it, the description, the line above the address
  }
  await mode('data-p', 'silent');
  check('a picture that never comes: the shimmer, then after 10 s the card without one', await cardIs('card') && await until(async () => (await tile.locator('img.coming').count()) === 1, 1500)
    && await until(async () => (await tile.locator('img').count()) === 0, 12000));
  await mode('data-p', 'send');
  await cardIs('card');

  // points at no tile
  await page.click('[data-s=notile]');
  check('a place that points at no tile: no button, and says so', await until(async () => (await state()) === 'place' && (await tile.locator('button.go').count()) === 0
    && (await text('.card p:not(.label)')) === "This place doesn't point at a tile right now."));
  await sleep(400);
  check('...and asks for nothing', !(await page.locator('#log').innerText()).split('host: sent notile')[0].includes('tile asks'));

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
