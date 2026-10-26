// The way page (site/way-page.js, M19, M25): reading a signpost and its destinations from a stand-in server
// (test/fake-pds.mjs), and scripts/copy-to-site.mjs writing the pages into a stand-in site.
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createFakePds } from './fake-pds.mjs';
import { lookUpWay, parseAtUri, SIGNPOST, PLACE } from '../site/way-page.js';
import { copyToSite, wayPages, SITE_FILES, PAGE } from '../scripts/copy-to-site.mjs';
import { pageCsp } from '../site/page-csp.js';
import { ACCOUNT } from '../scripts/publish.mjs';

const SIGN = `at://${ACCOUNT}/${SIGNPOST}/maze.obelisk`;
const ICON = 'bafkreiicon';
function world() {
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
  const put = (collection, rkey, value, cid = `bafy-${rkey}`) => pds.records.set(`${collection}/${rkey}`, { value, cid });
  put('ing.dasl.masl', 'hubtile', { $type: 'ing.dasl.masl', tile: { name: 'Little hub', description: 'Six stones.', icons: [{ src: '/icon.png' }], resources: { '/icon.png': { src: { $type: 'blob', ref: { $link: ICON } } } } } }, 'bafy-hub-v1');
  put('ing.dasl.masl', 'lantern', { $type: 'ing.dasl.masl', tile: { name: 'Glass lantern' } }, 'bafy-lantern');
  put(PLACE, 'hub', { $type: PLACE, tile: `at://${ACCOUNT}/ing.dasl.masl/hubtile`, cid: 'bafy-hub-v1', name: 'Hub', updatedAt: 'x' });
  return { pds, put, fetchImpl: pds.fetchImpl };
}

test('no signpost yet, or an empty one: "This doesn\'t lead anywhere yet."', async () => {
  const w = world();
  assert.deepEqual(await lookUpWay({ signpost: SIGN, fetchImpl: w.fetchImpl }), { state: 'dormant', note: '', doors: [] });
  w.put(SIGNPOST, 'maze.obelisk', { to: [], note: 'Under construction', updatedAt: 'x' });
  assert.deepEqual(await lookUpWay({ signpost: SIGN, fetchImpl: w.fetchImpl }), { state: 'dormant', note: 'Under construction', doors: [] });
});

test('one place: its tile as a card, with Raku and lexicographer.space links and the icon from its server', async () => {
  const w = world();
  w.put(SIGNPOST, 'maze.obelisk', { to: [{ place: `at://${ACCOUNT}/${PLACE}/hub`, entrance: 'south-stone' }], updatedAt: 'x' });
  const v = await lookUpWay({ signpost: SIGN, fetchImpl: w.fetchImpl });
  assert.equal(v.state, 'open');
  assert.equal(v.doors.length, 1);
  const d = v.doors[0];
  assert.equal(d.name, 'Little hub'); assert.equal(d.description, 'Six stones.'); assert.equal(d.by, 'thunderbird.cafe');
  assert.equal(d.raku, `https://raku.lexicographer.space/#t=${encodeURIComponent(`at://${ACCOUNT}/ing.dasl.masl/hubtile`)}&a=0`);
  assert.equal(d.viewer, 'https://lexicographer.space/@thunderbird.cafe/hubtile');
  assert.equal(d.icon, `https://pds.test/xrpc/com.atproto.sync.getBlob?did=${encodeURIComponent(ACCOUNT)}&cid=${ICON}`);
  assert.equal(d.changed, false);
  w.put('ing.dasl.masl', 'hubtile', { tile: { name: 'Little hub, edited' } }, 'bafy-hub-v2');
  assert.equal((await lookUpWay({ signpost: SIGN, fetchImpl: w.fetchImpl })).doors[0].changed, true, 'says so if the tile moved on from the place\'s version');
});

test('several: pick a door (a place, a tile directly, and broken ones explained), at most 12', async () => {
  const w = world();
  w.put(SIGNPOST, 'maze.obelisk', { to: [
    { place: `at://${ACCOUNT}/${PLACE}/hub`, label: 'North' },
    { tile: `at://${ACCOUNT}/ing.dasl.masl/lantern`, label: 'East' },
    { place: `at://${ACCOUNT}/app.bsky.feed.post/abc`, label: 'Odd' },
    { place: `at://${ACCOUNT}/${PLACE}/missing`, label: 'Gone' },
    'nonsense',
  ], updatedAt: 'x' });
  const v = await lookUpWay({ signpost: SIGN, fetchImpl: w.fetchImpl });
  assert.equal(v.doors.length, 5);
  assert.deepEqual(v.doors.map((d) => d.label), ['North', 'East', 'Odd', 'Gone', '']);
  assert.equal(v.doors[1].name, 'Glass lantern');
  assert.match(v.doors[2].broken, /isn't a place/);
  assert.match(v.doors[3].broken, /couldn't be looked up/);
  assert.ok(v.doors[4].broken);
  w.put(SIGNPOST, 'maze.obelisk', { to: Array.from({ length: 20 }, () => ({ place: `at://${ACCOUNT}/${PLACE}/hub` })), updatedAt: 'x' });
  assert.equal((await lookUpWay({ signpost: SIGN, fetchImpl: w.fetchImpl })).doors.length, 12);
});

test('a server that can\'t be reached, or no signpost named: said plainly', async () => {
  const down = async () => new Response('{}', { status: 502 });
  assert.equal((await lookUpWay({ signpost: SIGN, fetchImpl: down })).state, 'error');
  assert.equal((await lookUpWay({ signpost: 'nonsense', fetchImpl: down })).state, 'error');
  assert.equal((await lookUpWay({ signpost: `at://${ACCOUNT}/${PLACE}/maze`, fetchImpl: down })).state, 'error', 'a place is not a signpost');
  assert.equal(parseAtUri(`at://${ACCOUNT}/x.y/a b`), null);
});

test('the page\'s policy: only https lookups and pictures, no frames, no inline scripts', () => {
  const csp = pageCsp();
  assert.match(csp, /script-src 'self'(;|$)/);
  assert.match(csp, /connect-src 'self' https:/);
  assert.match(csp, /frame-src 'none'/);
});

test('copy-to-site: one page per exit, the files copied, and /way/ checked as hidden', () => {
  assert.deepEqual(wayPages().map((p) => p.path), ['/way/maze/obelisk']);
  const site = mkdtempSync(path.join(tmpdir(), 'site-'));
  writeFileSync(path.join(site, 'astro.config.mjs'), "const HIDDEN_PAGES = ['/webtiles/rooms-lab/'];\n");
  const notes = [];
  let r = copyToSite(site, { log: (s) => notes.push(s) });
  assert.equal(r.hidden, false);
  assert.ok(notes.some((n) => /HIDDEN_PAGES/.test(n)));
  for (const f of SITE_FILES) assert.deepEqual(readFileSync(path.join(site, 'src', 'way', f)), readFileSync(new URL(`../site/${f}`, import.meta.url)));
  assert.ok(existsSync(path.join(site, PAGE)));
  const gen = readFileSync(path.join(site, 'src', 'way', 'pages.generated.js'), 'utf8');
  assert.match(gen, /"signpost": "at:\/\/did:plc:6vxjigxrqizmbo56gojxico3\/cafe\.thunderbird\.way\.signpost\/maze\.obelisk"/);
  writeFileSync(path.join(site, 'astro.config.mjs'), "const HIDDEN_PAGES = ['/webtiles/rooms-lab/', '/way/'];\n");
  r = copyToSite(site, { log: () => {} });
  assert.equal(r.hidden, true);
});
