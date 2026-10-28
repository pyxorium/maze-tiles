// A browser check of the way page (site/, the fallback for an exit: https://thunderbird.cafe/way/maze/obelisk)
// with Playwright: the page of cards alone (way-page.js's start(), no tile loader; the travel page is
// check_travel.mjs's) bundled into one script as Astro does, the page's
// security policy as a <meta> tag, and stand-ins for plc.directory and the account's server (test/fake-pds.mjs)
// answering at their addresses. Run in the build chat: node test/browser/check_way_page.mjs [folder for screenshots]
// Needs esbuild (the Foundry's, or NODE_PATH) and Playwright.
import { createRequire } from 'node:module';
import { mkdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createFakePds } from '../fake-pds.mjs';
import { pageCsp } from '../../site/page-csp.js';
import { ACCOUNT } from '../../scripts/publish.mjs';
import { WAYS } from '../../src/ways.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const require = createRequire(import.meta.url);
const load = (name) => { for (const p of [name, path.join(ROOT, '..', 'web-tile-foundry', 'node_modules', name), `/opt/npm-tools/node_modules/${name}`]) { try { return require(p); } catch {} } throw new Error(`${name} not found`); };
const playwright = load('playwright');
const esbuild = load('esbuild');
const OUT = process.argv[2] || null;
if (OUT) mkdirSync(OUT, { recursive: true });

let failures = 0;
const ok = (cond, msg) => { console.log(`${cond ? 'ok  ' : 'FAIL'} ${msg}`); if (!cond) failures++; };
// The page of cards alone (way-page.js's start(), no tile loader): the travel page itself is check_travel.mjs's.
const js = (await esbuild.build({ stdin: { contents: "import { start } from './way-page.js'; start();", resolveDir: path.join(ROOT, 'site') }, bundle: true, format: 'esm', minify: true, write: false })).outputFiles[0].text;
const css = readFileSync(path.join(ROOT, 'site', 'way.css'), 'utf8');
const exit = WAYS.exits[0];
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="${pageCsp('load.tiles.lexicographer.space')}">
<meta name="robots" content="noindex, nofollow"><title>Where the Escher maze's obelisk leads</title><link rel="stylesheet" href="/_astro/way.css"></head>
<body><main id="way" data-signpost="${exit.signpost}" data-from="the Escher maze's obelisk"></main><script type="module" src="/_astro/way.js"></script></body></html>`;

const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
const put = (c, k, value, cid = `bafy-${k}`) => pds.records.set(`${c}/${k}`, { value, cid });
const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGNgaPhfDwAEhgGAqxPaWQAAAABJRU5ErkJggg==', 'base64');
pds.blobs.set('bafkreiicon', { bytes: new Uint8Array(PNG), mimeType: 'image/png' });
put('ing.dasl.masl', 'hubtile', { tile: { name: 'Little hub', description: 'A small room with six stones, each a way somewhere.', icons: [{ src: '/icon.png' }], resources: { '/icon.png': { src: { $type: 'blob', ref: { $link: 'bafkreiicon' } } } } } }, 'bafy-hub');
put('ing.dasl.masl', 'lantern', { tile: { name: 'Glass lantern', description: 'Roll a stained-glass lantern.' } }, 'bafy-lantern');
put('cafe.thunderbird.way.place', 'hub', { tile: `at://${ACCOUNT}/ing.dasl.masl/hubtile`, cid: 'bafy-hub', name: 'Hub' });

const browser = await playwright.chromium.launch();
async function open() {
  const page = await browser.newPage({ viewport: { width: 900, height: 700 } });
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push(e.message));
  // A record that isn't there is a 400 from the server (RecordNotFound), which the browser logs: expected here.
  page.on('console', (m) => { if ((m.type() === 'error' && !/status of 400/.test(m.text())) || /Content.Security.Policy|Refused/.test(m.text())) page.errors.push(m.text()); });
  await page.route('**/*', async (route) => {
    const url = new URL(route.request().url());
    if (url.origin === 'https://thunderbird.cafe') {
      if (url.pathname === '/_astro/way.js') return route.fulfill({ body: js, contentType: 'text/javascript' });
      if (url.pathname === '/_astro/way.css') return route.fulfill({ body: css, contentType: 'text/css' });
      return route.fulfill({ body: html, contentType: 'text/html' });
    }
    if (url.origin === 'https://plc.directory' || url.origin === 'https://pds.test') {
      const res = await pds.fetchImpl(url.toString());
      return route.fulfill({ status: res.status, body: Buffer.from(await res.arrayBuffer()), headers: { 'content-type': res.headers.get('content-type') || 'application/json', 'access-control-allow-origin': '*' } });
    }
    return route.fulfill({ status: 404, body: '' });
  });
  await page.goto('https://thunderbird.cafe/way/maze/obelisk/');
  await page.waitForFunction(() => !document.querySelector('#way .wait') && document.querySelector('#way h1'), null, { timeout: 15000 });
  return page;
}
const shot = async (page, name) => { if (OUT) await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: true }); };
const text = (page) => page.evaluate(() => document.getElementById('way').innerText);

try {
  let page = await open();
  let t = await text(page);
  ok(/You came through the Escher maze's obelisk/.test(t) && /This doesn't lead anywhere yet\./.test(t), 'no signpost yet: "This doesn\'t lead anywhere yet."');
  await shot(page, 'way-1-dormant');
  ok(page.errors.length === 0, `no errors under the page's policy${page.errors.length ? `: ${page.errors.join(' | ')}` : ''}`);
  await page.close();

  put('cafe.thunderbird.way.signpost', 'maze.obelisk', { to: [], note: 'Under construction' });
  page = await open();
  t = await text(page);
  ok(/doesn't lead anywhere yet/.test(t) && /Under construction/.test(t), 'an empty signpost with a note: the note shows');
  await page.close();

  put('cafe.thunderbird.way.signpost', 'maze.obelisk', { to: [{ place: `at://${ACCOUNT}/cafe.thunderbird.way.place/hub`, entrance: 'south-stone' }] });
  page = await open();
  t = await text(page);
  ok(/This way leads to/.test(t) && /Little hub/.test(t) && /by @thunderbird\.cafe/.test(t) && /six stones/.test(t), 'one place: its tile\'s card (name, author, description)');
  const links = await page.evaluate(() => [...document.querySelectorAll('#way .links a')].map((a) => a.href));
  ok(links[0] === `https://raku.lexicographer.space/#t=${encodeURIComponent(`at://${ACCOUNT}/ing.dasl.masl/hubtile`)}&a=0` && links[1] === 'https://lexicographer.space/@thunderbird.cafe/hubtile', 'links to open it in Raku and on lexicographer.space');
  ok(await page.evaluate(() => { const i = document.querySelector('#way img'); return !!i && i.complete && i.naturalWidth > 0; }), 'its icon, straight from the account\'s server');
  await shot(page, 'way-2-one');
  ok(page.errors.length === 0, `no errors${page.errors.length ? `: ${page.errors.join(' | ')}` : ''}`);
  await page.close();

  put('cafe.thunderbird.way.signpost', 'maze.obelisk', { to: [{ place: `at://${ACCOUNT}/cafe.thunderbird.way.place/hub`, label: 'North stone' }, { tile: `at://${ACCOUNT}/ing.dasl.masl/lantern`, label: 'East stone' }, { place: `at://${ACCOUNT}/cafe.thunderbird.way.place/gone`, label: 'West stone' }] });
  page = await open();
  t = await text(page);
  ok(/Pick a door/.test(t) && (await page.locator('#way .door').count()) === 3 && /NORTH STONE|North stone/i.test(t) && /Glass lantern/.test(t) && /couldn't be looked up/.test(t), 'several: pick a door, side by side, a broken one explained');
  await shot(page, 'way-3-several');
  await page.setViewportSize({ width: 360, height: 700 });
  ok(await page.evaluate(() => document.documentElement.scrollWidth <= 360), 'a phone: nothing wider than the screen');
  await shot(page, 'way-4-phone');
  ok(page.errors.length === 0, `no errors${page.errors.length ? `: ${page.errors.join(' | ')}` : ''}`);
  await page.close();
} catch (err) {
  console.log(`FAIL the check stopped: ${err.message}`);
  failures++;
} finally {
  await browser.close();
}
console.log(failures ? `\n${failures} check(s) failed` : '\nAll checks passed');
process.exitCode = failures ? 1 : 0;
