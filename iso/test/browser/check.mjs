// A browser check of the maze (Playwright with Chromium; run in the chat's sandbox, or anywhere Playwright is
// installed): node iso/test/browser/check.mjs [folder for screenshots]
// It serves the tile as iso/dev/serve.mjs does (with the tile's security policy), then clicks its way round:
// up the Penrose loop and back to Landing I, back along the trail, through the drop (back goes grey), home
// through the Great Hall, the closed door, the map card, the keyboard, reduce motion, and a phone-sized window.
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { startDev } from '../../dev/serve.mjs';

const require = createRequire(import.meta.url);
let playwright;
try { playwright = require('playwright'); } catch { playwright = require('/opt/npm-tools/node_modules/playwright'); }
const OUT = process.argv[2] || null;
if (OUT) mkdirSync(OUT, { recursive: true });

const PORT = 5207;
const server = await startDev({ port: PORT, quiet: true });
const browser = await playwright.chromium.launch();
let failures = 0;
const ok = (cond, msg) => { console.log(`${cond ? 'ok  ' : 'FAIL'} ${msg}`); if (!cond) failures++; };
const shot = async (page, name) => { if (OUT) await page.screenshot({ path: path.join(OUT, `${name}.png`) }); };

async function open(opts = {}) {
  const page = await browser.newPage({ viewport: { width: 640, height: 480 }, ...opts });
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' || /Content.Security.Policy|Refused/.test(m.text())) page.errors.push(m.text()); });
  await page.goto(`http://127.0.0.1:${PORT}/`);
  await page.waitForFunction(() => window.__maze && document.querySelector('.way'));
  return page;
}
const state = (page) => page.evaluate(() => window.__maze.state());
const idle = (page) => page.waitForFunction(() => !window.__maze.state().busy, null, { timeout: 15000 });
async function go(page, way) {
  await page.click(`.way[data-way="${way}"]`);
  await page.waitForFunction(() => window.__maze.state().busy, null, { timeout: 2000 }).catch(() => {});
  await idle(page);
  return (await state(page)).room;
}

try {
  const page = await open();
  ok((await state(page)).room === 'courtyard', 'starts in the Courtyard');
  ok(await page.isDisabled('#back'), 'back is grey at the start');
  await shot(page, '01-courtyard');

  // Up the stairs: catch the slide halfway (the old room sinking, the next coming down from above).
  await page.click('.way[data-way="climb"]');
  await page.waitForFunction(() => window.__maze.state().room === 'landing1', null, { timeout: 8000 });
  await page.waitForTimeout(250);
  await shot(page, '02-sliding-up');
  await idle(page);
  ok((await state(page)).room === 'landing1', 'the Courtyard\'s stairs lead up to Landing I');
  ok(!(await page.isDisabled('#back')), 'back works after a move');

  const loop = [];
  for (let i = 0; i < 4; i++) loop.push(await go(page, 'climb'));
  ok(loop.join(' ') === 'landing2 landing3 landing4 landing1', `four climbs: ${loop.join(' → ')}`);
  await shot(page, '03-back-at-landing-I');

  await page.click('#back');
  await page.waitForFunction(() => window.__maze.state().busy).catch(() => {});
  await idle(page);
  ok((await state(page)).room === 'landing4', 'back goes down the flight you came up');
  await page.keyboard.press('b');
  await page.waitForFunction(() => window.__maze.state().busy).catch(() => {});
  await idle(page);
  ok((await state(page)).room === 'landing3', 'B on the keyboard goes back too');

  // Up to the Lookout and round through the Lantern room and the Great Hall.
  ok(await go(page, 'lookout') === 'lookout', 'Landing III\'s second flight climbs to the Lookout');
  await shot(page, '04-lookout');
  ok(await go(page, 'lantern') === 'lantern', 'the Lookout leads to the Lantern room');
  await go(page, 'door');
  ok((await state(page)).room === 'lantern', 'the closed door stays closed');
  ok((await page.textContent('#note')).includes('closed'), 'and says so');
  await shot(page, '05-closed-door');
  ok(await go(page, 'hall') === 'hall', 'the ramp leads down to the Great Hall');
  await shot(page, '06-great-hall');
  ok(await go(page, 'closet') === 'closet', 'the small door in the Great Hall opens into the 2x2 Closet');
  ok(await go(page, 'gallery') === 'gallery', 'the Closet leads to the Gallery');
  ok(await go(page, 'court') === 'courtyard', 'and the Gallery back to the Courtyard');

  // The drop.
  ok(await go(page, 'well') === 'well', 'the Courtyard\'s door leads to the Well room');
  await shot(page, '07-well-room');
  await page.click('.way[data-way="hole"]');
  await page.waitForFunction(() => window.__maze.state().room === 'cellar', null, { timeout: 8000 });
  await page.waitForTimeout(380);
  await shot(page, '08-landing-in-the-cellar');
  await idle(page);
  const s = await state(page);
  ok(s.room === 'cellar' && s.fell, 'the hole drops you into the Cellar');
  ok(await page.isDisabled('#back'), 'back is grey after the drop');
  ok((await page.getAttribute('#back', 'title')) === 'No way back up', 'its tip says there\'s no way back up');
  ok((await page.textContent('#note')).includes('No way back up'), 'and a note says so');
  ok(await go(page, 'up') === 'hall', 'the Cellar\'s stairs climb into the Great Hall');
  await page.click('#back');
  await page.waitForFunction(() => window.__maze.state().busy).catch(() => {});
  await idle(page);
  ok((await state(page)).room === 'cellar', 'back works again from the Cellar on (down to it, not up the hole)');

  // The map card.
  await page.keyboard.press('m');
  ok(await page.isVisible('#mapcard .card'), 'M opens the map card');
  ok((await page.getAttribute('#mapbtn', 'aria-expanded')) === 'true', 'the Map button says it is open');
  await shot(page, '09-map');
  await page.keyboard.press('Escape');
  ok(!(await page.isVisible('#mapcard .card')), 'Escape closes it');
  await page.click('#mapbtn');
  ok(await page.isVisible('#mapcard .card'), 'the Map button opens it');
  await page.mouse.click(10, 470);
  ok(!(await page.isVisible('#mapcard .card')), 'a tap outside closes it');

  // The keyboard: Tab to a way on, Enter to take it.
  await page.focus('#mapbtn');
  await page.keyboard.press('Tab');
  const focused = await page.evaluate(() => document.activeElement && document.activeElement.className);
  ok(focused === 'way', 'Tab reaches the ways on');
  await shot(page, '10-keyboard-focus');
  await page.keyboard.press('Enter');
  await page.waitForFunction(() => window.__maze.state().busy).catch(() => {});
  await idle(page);
  ok((await state(page)).room === 'hall', 'Enter takes it (Cellar → Great Hall)');
  ok(await page.evaluate(() => document.activeElement && document.activeElement.className === 'way'), 'focus lands on a way on in the new room');
  ok(page.errors.length === 0, `no errors or blocked files (${page.errors.join(' | ') || 'none'})`);
  await page.close();

  // Reduce motion: every transition a quick fade.
  const calm = await open({ reducedMotion: 'reduce' });
  await calm.evaluate(() => window.__maze.jump('landing1', [5, 4]));
  await go(calm, 'climb');
  const cs = await state(calm);
  ok(cs.room === 'landing2', 'reduce motion: still moves');
  ok(cs.lastSlide && cs.lastSlide.kind === 'fade' && cs.lastSlide.ms < 450, `and the move is a quick fade, not a slide (${JSON.stringify(cs.lastSlide)})`);
  await calm.close();

  // A phone-sized window.
  const phone = await open({ viewport: { width: 360, height: 640 }, deviceScaleFactor: 2, hasTouch: true });
  await shot(phone, '11-phone');
  await phone.evaluate(() => window.__maze.jump('hall'));
  await shot(phone, '12-phone-great-hall');
  const box = await phone.evaluate(() => [...document.querySelectorAll('.way')].map((b) => b.getBoundingClientRect()).map((r) => [r.left, r.top, r.right, r.bottom]));
  ok(box.every(([l, t, r, b]) => l >= -8 && t >= 40 && r <= 368 && b <= 648), 'on a phone every way on is on screen and below the bar');
  await phone.tap('.way[data-way="closet"]');
  await phone.waitForFunction(() => window.__maze.state().busy).catch(() => {});
  await idle(phone);
  ok((await state(phone)).room === 'closet', 'a tap works on a phone');
  ok(phone.errors.length === 0, 'no errors on the phone');
  await phone.close();
} catch (err) {
  console.error(err);
  failures++;
} finally {
  await browser.close();
  server.close();
}
console.log(failures ? `\n${failures} check(s) failed` : '\nAll checks passed');
process.exitCode = failures ? 1 : 0;
