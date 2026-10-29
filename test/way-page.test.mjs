// The way page (site/way-page.js, M19, M25): reading a signpost and its destinations from a stand-in server
// (test/fake-pds.mjs), and scripts/copy-to-site.mjs writing the pages into a stand-in site.
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createFakePds } from './fake-pds.mjs';
import { lookUpWay, parseAtUri, signpostState, testSignposts, SIGNPOST, PLACE } from '../site/way-page.js';
import { readWays, entranceFor, pathFor, COLOURS } from '../site/travel.js';
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

test('the page\'s policy: https lookups and pictures, frames only from the tile loading server, no inline scripts', () => {
  const csp = pageCsp('load.tiles.lexicographer.space');
  assert.match(csp, /script-src 'self'(;|$)/);
  assert.match(csp, /connect-src 'self' https:/);
  assert.match(csp, /frame-src https:\/\/load\.tiles\.lexicographer\.space https:\/\/\*\.tiles\.lexicographer\.space(;|$)/);
  assert.match(csp, /object-src 'none'/);
});

// ---- the travel page (site/travel.js; claude/winter-forest-step3-plan.md) ------------------------------------------
test('test signposts (W41): on this computer only, from the address', () => {
  const here = { hostname: '127.0.0.1', search: '?sign=maze.obelisk:winter-forest/lamppost&sign=winter-forest.arch:hub/south,maze/obelisk&sign=winter-forest.slide:&sign=bad' };
  const o = testSignposts(here);
  assert.deepEqual(o.get('maze.obelisk'), [{ placeName: 'winter-forest', entrance: 'lamppost' }]);
  assert.deepEqual(o.get('winter-forest.arch'), [{ placeName: 'hub', entrance: 'south' }, { placeName: 'maze', entrance: 'obelisk' }]);
  assert.deepEqual(o.get('winter-forest.slide'), [], 'nothing after the colon: empty');
  assert.equal(o.size, 3);
  assert.equal(testSignposts({ hostname: 'localhost', search: here.search }).size, 3);
  assert.equal(testSignposts({ hostname: 'thunderbird.cafe', search: here.search }).size, 0, 'the live site ignores it');
});

test('test signposts naming a place on another account (0.4.0): @handle or @did', async () => {
  const PYX = 'did:plc:rqbqpaaluty5v47jwciowpik';
  const o = testSignposts({ hostname: '127.0.0.1', search: `?sign=${encodeURIComponent(`winter-forest.slide:maze@pyxorium.com/obelisk`)}&sign=${encodeURIComponent(`maze.second-door:winter-forest@${ACCOUNT}/arch,x@nobody.example/y`)}` });
  assert.deepEqual(o.get('winter-forest.slide'), [{ placeName: 'maze', did: PYX, entrance: 'obelisk' }]);
  assert.deepEqual(o.get('maze.second-door'), [{ placeName: 'winter-forest', did: ACCOUNT, entrance: 'arch' }], 'an account it doesn\'t know by handle is dropped');
  const w = world();
  w.put(PLACE, 'maze', { $type: PLACE, tile: `at://${PYX}/ing.dasl.masl/hubtile`, cid: 'bafy-hub-v1', name: 'Escher maze', updatedAt: 'x' });   // (the stand-in serves every account)
  const v = await lookUpWay({ signpost: `at://${ACCOUNT}/${SIGNPOST}/winter-forest.slide`, fetchImpl: w.fetchImpl, overrides: o });
  assert.equal(v.doors[0].place, `at://${PYX}/${PLACE}/maze`, 'the destination on pyxorium.com');
});

test('test signposts stand in for the real one; everything else stays real', async () => {
  const w = world();
  w.put(PLACE, 'winter-forest', { $type: PLACE, tile: `at://${ACCOUNT}/ing.dasl.masl/hubtile`, cid: 'bafy-hub-v1', name: 'Winter Forest', updatedAt: 'x' });
  const overrides = testSignposts({ hostname: '127.0.0.1', search: '?sign=maze.obelisk:winter-forest/lamppost' });
  assert.equal((await lookUpWay({ signpost: SIGN, fetchImpl: w.fetchImpl })).state, 'dormant', 'the real signpost: empty');
  const v = await lookUpWay({ signpost: SIGN, fetchImpl: w.fetchImpl, overrides });
  assert.equal(v.state, 'open');
  assert.equal(v.doors[0].place, `at://${ACCOUNT}/${PLACE}/winter-forest`);
  assert.equal(v.doors[0].entrance, 'lamppost');
  assert.equal(v.doors[0].tile, `at://${ACCOUNT}/ing.dasl.masl/hubtile`);
  assert.equal(v.doors[0].pinned, 'bafy-hub-v1');
  assert.equal(await signpostState({ signpost: SIGN, fetchImpl: w.fetchImpl, overrides }), 'open');
  assert.equal(await signpostState({ signpost: SIGN, fetchImpl: w.fetchImpl }), 'dormant');
  w.put(SIGNPOST, 'maze.obelisk', { to: [{ place: `at://${ACCOUNT}/${PLACE}/hub` }], updatedAt: 'x' });
  assert.equal(await signpostState({ signpost: SIGN, fetchImpl: w.fetchImpl }), 'open');
  const down = async () => new Response('{}', { status: 502 });
  assert.equal(await signpostState({ signpost: SIGN, fetchImpl: down }), 'dormant', 'unreadable: dormant (the tile says so if walked into)');
});

test('a destination\'s ways.json, checked; entrances; the address for each exit', () => {
  const forest = JSON.parse(readFileSync(new URL('../forest/tile/ways.json', import.meta.url), 'utf8'));
  const maze = JSON.parse(readFileSync(new URL('../tile/ways.json', import.meta.url), 'utf8'));
  const f = readWays(forest), m = readWays(maze);
  assert.equal(f.entry, 'ways-only');
  assert.equal(m.entry, 'open', 'no "entry": an open place');
  assert.deepEqual(f.exits.map((x) => x.id), ['wardrobe', 'tree-door', 'arch', 'slide']);
  assert.deepEqual(f.entrances, ['lamppost', 'wardrobe', 'tree-door', 'arch']);
  assert.equal(entranceFor(f, 'arch'), 'arch');
  assert.equal(entranceFor(f, 'slide'), 'lamppost', 'an exit only: the first entrance');
  assert.equal(entranceFor(m, 'obelisk'), 'obelisk');
  assert.equal(entranceFor(m, null), 'obelisk');
  assert.equal(readWays({ ...forest, v: 2 }), null);
  assert.equal(readWays({ ...forest, exits: [{ id: 'x', signpost: 'at://did:plc:abc/app.bsky.feed.post/1' }] }).exits.length, 0, 'an exit naming something other than a signpost is dropped');
  const pages = wayPages();
  assert.equal(pathFor(pages, f, 'slide'), '/way/winter-forest/slide/');
  assert.equal(pathFor(pages, m, 'obelisk'), '/way/maze/obelisk/');
  assert.equal(pathFor(pages, { ...f, place: 'at://did:plc:someoneelse/cafe.thunderbird.way.place/winter-forest' }, 'slide'), null, 'someone else\'s tile with the same name: no page of ours');
  for (const p of pages) assert.ok(COLOURS[`${p.tile}/${p.exit}`], `a fade colour for ${p.path}`);
});

test('copy-to-site: one page per exit, the files copied, and /way/ checked as hidden', () => {
  assert.deepEqual(wayPages().map((p) => p.path), ['/way/maze/obelisk', '/way/maze/second-door', '/way/winter-forest/wardrobe', '/way/winter-forest/tree-door', '/way/winter-forest/arch', '/way/winter-forest/slide']);
  const site = mkdtempSync(path.join(tmpdir(), 'site-'));
  writeFileSync(path.join(site, 'astro.config.mjs'), "const HIDDEN_PAGES = ['/webtiles/rooms-lab/'];\n");
  const notes = [];
  let r = copyToSite(site, { log: (s) => notes.push(s) });
  assert.equal(r.hidden, false);
  assert.ok(notes.some((n) => /HIDDEN_PAGES/.test(n)));
  for (const f of SITE_FILES) assert.deepEqual(readFileSync(path.join(site, 'src', 'way', f)), readFileSync(new URL(`../site/${f}`, import.meta.url)));
  assert.ok(existsSync(path.join(site, PAGE)));
  const gen = readFileSync(path.join(site, 'src', 'way', 'pages.generated.js'), 'utf8');
  assert.match(gen, /"signpost": "at:\/\/did:plc:rqbqpaaluty5v47jwciowpik\/cafe\.thunderbird\.way\.signpost\/maze\.obelisk"/, 'the maze\'s signposts are pyxorium.com\'s');
  assert.match(gen, /"signpost": "at:\/\/did:plc:rqbqpaaluty5v47jwciowpik\/cafe\.thunderbird\.way\.signpost\/maze\.second-door"/);
  assert.match(gen, /"place": "at:\/\/did:plc:rqbqpaaluty5v47jwciowpik\/cafe\.thunderbird\.way\.place\/maze"/);
  assert.match(gen, /"title": "Where the Escher maze's second door leads"/, 'the page says "second door"');
  assert.match(gen, /"signpost": "at:\/\/did:plc:6vxjigxrqizmbo56gojxico3\/cafe\.thunderbird\.way\.signpost\/winter-forest\.slide"/);
  assert.match(gen, /"place": "at:\/\/did:plc:6vxjigxrqizmbo56gojxico3\/cafe\.thunderbird\.way\.place\/winter-forest"/);
  writeFileSync(path.join(site, 'astro.config.mjs'), "const HIDDEN_PAGES = ['/webtiles/rooms-lab/', '/way/'];\n");
  r = copyToSite(site, { log: () => {} });
  assert.equal(r.hidden, true);
});
