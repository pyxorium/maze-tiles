// The place renderer (place\tile\, claude/raku-renderer-tiles-plan.md, RT1 to RT9): what it shows for what its host
// sends (view.js), its colours kept in step with the travel pages (site\way.css, RT7), its page (the data protocol
// loaded from the host, never bundled; nothing reaches the network), and publishing it with --place.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { readPlace, byLine, formatDate, PLACE, readTileCard, readPicture, tileByLine, changedLine, CANT_READ, PICTURE_MAX } from '../place/tile/view.js';
import { runPublish, ACCOUNT, PLACE as PLACE_NSID, RESERVED_KEYS } from '../scripts/publish.mjs';
import { TILES, FOREST_TILES, PLACE_TILES, SIGNPOST_TILES, ROOT } from '../scripts/tiles.mjs';
import { ISO_TILES } from '../iso/tiles.mjs';
import { createFakePds } from './fake-pds.mjs';

const FOREST = 'at://did:plc:6vxjigxrqizmbo56gojxico3/ing.dasl.masl/3myxm45elkp22';
const payload = (over = {}, value = {}) => ({
  uri: 'at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.place/winter-forest', cid: 'bafyreiplace',
  did: 'did:plc:6vxjigxrqizmbo56gojxico3', handle: 'thunderbird.cafe', collection: PLACE, rkey: 'winter-forest',
  value: { $type: PLACE, tile: FOREST, cid: 'bafyreitile', name: 'Winter Forest', updatedAt: '2026-10-28T20:36:27.450Z', ...value }, ...over,
});

test('a place: its name, who made it, when, and the tile behind it', () => {
  const v = readPlace(payload());
  assert.deepEqual(v, { kind: 'place', name: 'Winter Forest', by: '@thunderbird.cafe', updated: 'Oct 28, 2026', tile: FOREST, pinned: null });
  assert.equal(readPlace(payload({}, { cid: 'bafyreifahwnqqfnfxeqgkvq7sbnbxspne2nw5hrccoskrfuadn2rsudura' })).pinned, 'bafyreifahwnqqfnfxeqgkvq7sbnbxspne2nw5hrccoskrfuadn2rsudura', 'the version the place was pointed at');
  assert.equal(byLine(v), 'A place by @thunderbird.cafe. Updated Oct 28, 2026.');
  assert.equal(PLACE, PLACE_NSID, 'the same name as the ways lexicon');
});

test('no checked handle: the DID; no readable date: no "Updated"; no name: the record key', () => {
  const v = readPlace(payload({ handle: null }, { updatedAt: 'not a date', name: undefined }));
  assert.equal(v.by, 'did:plc:6vxjigxrqizmbo56gojxico3');
  assert.equal(v.updated, null);
  assert.equal(v.name, 'winter-forest');
  assert.equal(byLine(v), 'A place by did:plc:6vxjigxrqizmbo56gojxico3.');
  assert.equal(byLine({ by: null, updated: null }), 'A place.');
});

test('a long or odd name is tidied and cut; a handle or DID that isn\'t one is left out', () => {
  const v = readPlace(payload({ handle: 'not a handle', did: 'nope' }, { name: `  The  ${'very '.repeat(40)}long   place ` }));
  assert.equal(v.name.length, 100);
  assert.ok(v.name.endsWith('…') && v.name.startsWith('The very'));
  assert.equal(v.by, null);
});

test('a place whose tile isn\'t a tile address: no tile to step into', () => {
  for (const tile of ['https://example.com/', 'at://did:plc:6vxjigxrqizmbo56gojxico3/app.bsky.feed.post/3abc', '', 42, undefined]) {
    assert.equal(readPlace(payload({}, { tile })).tile, null, String(tile));
  }
  assert.equal(readPlace(payload({}, { tile: 'at://did:web:example.com/ing.dasl.masl/3abc' })).tile, 'at://did:web:example.com/ing.dasl.masl/3abc');
});

test('not a place: says which kind it is, if that can be read', () => {
  assert.deepEqual(readPlace(payload({ collection: 'app.bsky.feed.like' })), { kind: 'notplace', collection: 'app.bsky.feed.like' });
  assert.deepEqual(readPlace(payload({ collection: '<script>' })), { kind: 'notplace', collection: null });
  assert.deepEqual(readPlace(null), { kind: 'notplace', collection: null });
  assert.deepEqual(readPlace(payload({ value: 'text' })), { kind: 'notplace', collection: PLACE });
});

test('dates read the same everywhere (UTC)', () => {
  assert.equal(formatDate('2026-10-29T05:29:18.784Z'), 'Oct 29, 2026');
  assert.equal(formatDate('2026-10-28T23:59:00-08:00'), 'Oct 29, 2026');
  assert.equal(formatDate(''), null);
});

test('its colours are the travel pages\' (site\\way.css): the :root line is the same', () => {
  const rootLine = (css) => (/^:root\s*\{[^}]*\}/m.exec(css) || [''])[0];
  const way = rootLine(readFileSync(join(ROOT, 'site', 'way.css'), 'utf8'));
  const place = rootLine(readFileSync(join(ROOT, 'place', 'tile', 'place.css'), 'utf8'));
  assert.ok(way.includes('--accent'), 'way.css has its tokens');
  assert.equal(place, way, 'change site\\way.css and place\\tile\\place.css together');
});

test('the page: its policy keeps it off the network; the data protocol comes from the host, not the tile', () => {
  const html = readFileSync(join(ROOT, 'place', 'tile', 'index.html'), 'utf8');
  assert.match(html, /http-equiv="Content-Security-Policy" content="[^"]*connect-src 'self'/);
  assert.match(html, /script-src 'self'/);
  const js = readFileSync(join(ROOT, 'place', 'tile', 'place.js'), 'utf8');
  assert.match(js, /import\('\/\.well-known\/web-tiles\/data\.js'\)/, 'loaded from the host\'s well-known path (tiles-protocols)');
  assert.ok(js.indexOf('addDataHandler(onPayload)') < js.indexOf('api.listen()'), 'the handler is added before listen() (data.js buffers nothing)');
  assert.match(js, /ask\(\{ open: view\.tile \}\)/, 'Step into: open the tile (RT5)');
  assert.match(js, /ask\(\{ get: view\.tile \}\)/, 'the tile record behind the place (PC1)');
  assert.match(js, /ask\(\{ picture: c\.picture\.cid, from: c\.picture\.from \}\)/, 'one picture named in it (PC6)');
  assert.equal((js.match(/ask\(\{/g) || []).length, 3, 'nothing else is ever sent');
  assert.match(js, /URL\.createObjectURL\(new Blob/, 'the picture shown as a blob: address (its policy allows img-src blob:)');
  assert.ok(!/innerHTML/.test(js), 'drawn with DOM calls only');
  for (const f of PLACE_TILES['place-renderer'].files) assert.ok(readFileSync(join(ROOT, 'place', 'tile', f)).length > 0, f);
});

test('--place: one tile from thunderbird.cafe, with its card pictures; no place, signposts or lexicons', async () => {
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
  // the file as it was before the first publish: the place records' bookkeeping under "places" must survive
  const placesBefore = {
    'winter-forest': { uri: `at://${ACCOUNT}/${PLACE_NSID}/winter-forest`, cid: 'bafy-p1', tile: `at://${ACCOUNT}/ing.dasl.masl/3myxm45elkp22`, tileCid: 'bafy-f', updatedAt: '2026-10-28T20:36:27.450Z' },
    maze: { uri: `at://did:plc:rqbqpaaluty5v47jwciowpik/${PLACE_NSID}/maze`, cid: 'bafy-p2', tile: 'at://did:plc:rqbqpaaluty5v47jwciowpik/ing.dasl.masl/3myyjuyr2ja2s', tileCid: 'bafy-m', updatedAt: '2026-10-29T05:29:18.784Z' },
  };
  let published = { maze: { uri: 'at://did:plc:rqbqpaaluty5v47jwciowpik/ing.dasl.masl/3myyjuyr2ja2s', cid: 'bafy-maze' }, places: structuredClone(placesBefore), signposts: { 'winter-forest.slide': { uri: 'x' } } };
  const logs = [];
  const opts = {
    fetchImpl: pds.fetchImpl, log: (s) => logs.push(s), ask: async () => 'y', askHidden: async () => 'right-password',
    readPublished: () => published, writePublished: (o) => { published = o; }, checkBundle: async () => { throw new Error('no bundle to check'); },
    now: () => '2026-11-05T12:00:00.000Z', tiles: PLACE_TILES,
  };
  const dry = await runPublish({ ...opts, dryRun: true });
  assert.deepEqual(dry.plan.map((t) => t.id), ['place-renderer']);
  assert.deepEqual([dry.lexiconsDue, dry.placesDue, dry.signpostsDue], [[], [], []]);
  const r = await runPublish(opts);
  assert.equal(r.changed, true);
  const p = published['place-renderer'];
  assert.match(p.uri, new RegExp(`^at://${ACCOUNT}/ing.dasl.masl/`));
  assert.ok(p.cid, 'its record CID, for Raku\'s pin');
  const value = pds.records.get(`ing.dasl.masl/${p.uri.split('/').pop()}`).value;
  assert.equal(value.tile.name, 'Places');
  assert.equal(value.tile.generator, 'Places');
  assert.deepEqual(Object.keys(value.tile.resources).sort(), ['/', '/banner.png', '/icon.png', '/place.css', '/place.js', '/view.js']);
  assert.deepEqual(value.tile.icons, [{ src: '/icon.png' }]);
  assert.deepEqual(value.tile.screenshots, [{ src: '/banner.png' }]);
  assert.equal(published.maze.uri, 'at://did:plc:rqbqpaaluty5v47jwciowpik/ing.dasl.masl/3myyjuyr2ja2s', 'the maze\'s entry untouched');
  assert.deepEqual(published.places, placesBefore, 'the place records\' bookkeeping untouched');
  assert.deepEqual(published.signposts, { 'winter-forest.slide': { uri: 'x' } }, 'the signposts\' too');
  assert.ok(!logs.some((l) => /earlier record/.test(l)), 'a first publish has no earlier record');
  assert.ok(!pds.calls.some((c) => /putRecord/.test(c)), 'no place written');
  assert.ok(logs.some((l) => l.includes(`RENDERERS ('cafe.thunderbird.way.place'): uri '${p.uri}', cid '${p.cid}'`)), 'it prints the pin for Raku');
  assert.ok(!logs.some((l) => /signpost|lexicon/i.test(l)), 'nothing about ways');
});

test('no tile may be called after one of published.json\'s own headings; publishing one is refused', async () => {
  for (const list of [TILES, FOREST_TILES, PLACE_TILES, SIGNPOST_TILES, ISO_TILES]) {
    for (const id of Object.keys(list)) assert.ok(!RESERVED_KEYS.includes(id), `tile id "${id}"`);
  }
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
  const bad = { places: { ...PLACE_TILES['place-renderer'] } };
  await assert.rejects(runPublish({ fetchImpl: pds.fetchImpl, log: () => {}, ask: async () => 'y', askHidden: async () => 'right-password',
    readPublished: () => ({}), writePublished: () => { throw new Error('must not write'); }, checkBundle: async () => {}, tiles: bad, dryRun: true }),
  /can't be called "places"/);
});

test('the published.json in this folder: the place records and the renderer each under their own heading', () => {
  const pj = JSON.parse(readFileSync(join(ROOT, 'published.json'), 'utf8'));
  assert.ok(pj.places && pj.places['winter-forest'] && pj.places.maze, 'the place records\' bookkeeping');
  if (pj['place-renderer']) assert.match(pj['place-renderer'].uri, new RegExp(`^at://${ACCOUNT}/ing\\.dasl\\.masl/`));
});

// ---------- the tile's card (claude/raku-places-card-plan.md, PC1 to PC6) ----------

const PINNED = 'bafyreifahwnqqfnfxeqgkvq7sbnbxspne2nw5hrccoskrfuadn2rsudura';
const BANNER = 'bafkreiforestbannerstandinaaaaaaaaaaa';
const ICON = 'bafkreiforesticonstandinaaaaaaaaaaaa';
const blobRef = (cid, mimeType = 'image/png') => ({ src: { $type: 'blob', ref: { $link: cid }, mimeType, size: 10 } });
const place = () => readPlace(payload({}, { cid: PINNED }));
const got = (over = {}, tile = {}, value = {}) => ({
  got: FOREST,
  record: { uri: FOREST, cid: PINNED, did: 'did:plc:6vxjigxrqizmbo56gojxico3', handle: 'thunderbird.cafe', collection: 'ing.dasl.masl', rkey: '3myxm45elkp22',
    value: { $type: 'ing.dasl.masl', createdAt: '2026-10-28T20:30:00.000Z', ...value, tile: { name: 'Winter Forest', description: 'A snowy night forest.',
      icons: [{ src: '/icon.png' }], screenshots: [{ src: '/banner.jpg' }],
      resources: { '/': blobRef('bafkreiindexaaaaaaaaaaaaaaaaaaaaa', 'text/html'), '/banner.jpg': blobRef(BANNER, 'image/jpeg'), '/icon.png': blobRef(ICON) }, ...tile } }, ...over },
});

test('the tile\'s card: its name, who made it, when, its description, and its banner', () => {
  const c = readTileCard(got(), place());
  assert.deepEqual(c, { kind: 'card', name: 'Winter Forest', by: '@thunderbird.cafe', published: 'Oct 28, 2026', description: 'A snowy night forest.',
    picture: { cid: BANNER, from: FOREST, use: 'banner' }, changed: false });
  assert.equal(tileByLine(c), 'A tile by @thunderbird.cafe. Published Oct 28, 2026.');
  assert.equal(tileByLine({ by: null, published: null }), 'A tile.');
});

test('no banner: the icon beside the name (PC2); neither: no picture; a picture without a file is skipped', () => {
  assert.deepEqual(readTileCard(got({}, { screenshots: [] }), place()).picture, { cid: ICON, from: FOREST, use: 'icon' });
  assert.equal(readTileCard(got({}, { screenshots: [], icons: [] }), place()).picture, null);
  assert.deepEqual(readTileCard(got({}, { screenshots: [{ src: '/missing.png' }, { src: '/banner.jpg' }] }), place()).picture.cid, BANNER);
  assert.equal(readTileCard(got({}, { screenshots: [], icons: [{ src: '/icon.png' }], resources: { '/icon.png': { src: { ref: { $link: 'not a cid' } } } } }), place()).picture, null);
  assert.equal(readTileCard(got({ uri: 'https://example.com/' }), place()).picture, null, 'no record address to name in the request');
});

test('a changed tile: its version differs from the one the place records (PC4)', () => {
  assert.equal(readTileCard(got({ cid: 'bafyreichangedsincetheplacewaspointedataaaaaaaaaaaaaaaaaa' }), place()).changed, true);
  assert.equal(readTileCard(got({ cid: 'bafyreichangedsincetheplacewaspointedataaaaaaaaaaaaaaaaaa' }), readPlace(payload())).changed, false, 'no pinned version: nothing to compare');
  assert.equal(changedLine(place()), "This tile has been changed since the Winter Forest place was pointed at it (Oct 28, 2026), so portals in other tiles won't lead to it until the place is updated. Step into from this place opens the changed tile anyway.");
  assert.ok(!changedLine({ name: 'X', updated: null }).includes('('), 'no date: no brackets');
});

test('can\'t be read: two messages for not-found and hidden (PC5); other refusals keep today\'s card', () => {
  assert.deepEqual(readTileCard({ got: FOREST, error: 'not-found' }, place()), { kind: 'error', error: 'not-found' });
  assert.deepEqual(readTileCard({ got: FOREST, error: 'hidden' }, place()), { kind: 'error', error: 'hidden' });
  for (const error of ['not-allowed', 'too-many', 'whatever']) assert.deepEqual(readTileCard({ got: FOREST, error }, place()), { kind: 'none' });
  assert.equal(CANT_READ['not-found'], "Raku couldn't find this tile. It may have been deleted, or its author's server may not be answering right now.");
  assert.equal(CANT_READ.hidden, "Raku doesn't show this tile.");
});

test('answers that aren\'t the card: another address, not a tile, nothing to answer for', () => {
  assert.equal(readTileCard({ ...got(), got: 'at://did:plc:6vxjigxrqizmbo56gojxico3/ing.dasl.masl/3other' }, place()), null);
  assert.equal(readTileCard(got(), readPlace(payload({}, { tile: 'https://example.com/' }))), null, 'a place with no tile asks for nothing');
  assert.equal(readTileCard(null, place()), null);
  assert.equal(readTileCard(payload(), place()), null, 'a record is not an answer');
  assert.deepEqual(readTileCard(got({ collection: 'app.bsky.feed.post' }), place()), { kind: 'none' });
  assert.deepEqual(readTileCard(got({ value: { text: 'hi' } }), place()), { kind: 'none' });
});

test('the card\'s text is tidied and cut; a handle that isn\'t one gives the DID; no name: the record key', () => {
  const c = readTileCard(got({ handle: 'not a handle' }, { name: undefined, description: `  ${'word '.repeat(600)} ` }), place());
  assert.equal(c.name, '3myxm45elkp22');
  assert.equal(c.by, 'did:plc:6vxjigxrqizmbo56gojxico3');
  assert.equal(c.description.length, 2000);
  assert.ok(c.description.endsWith('…'));
  assert.equal(readTileCard(got({}, { description: undefined }), place()).description, '');
  assert.equal(readTileCard(got({}, {}, { createdAt: 'nope' }), place()).published, null);
});

test('the picture: only the answer to what was asked, of the four kinds, at most 1 MB', () => {
  const asked = { cid: BANNER, from: FOREST };
  const bytes = new Uint8Array([0xff, 0xd8, 0xff, 1]).buffer;
  assert.deepEqual(readPicture({ gotPicture: BANNER, from: FOREST, type: 'image/jpeg', bytes }, asked), { ok: true, type: 'image/jpeg', bytes });
  assert.equal(readPicture({ gotPicture: BANNER, from: FOREST, type: 'image/jpeg', bytes: new Uint8Array(bytes) }, asked).bytes.byteLength, 4, 'a typed array is fine too');
  assert.equal(readPicture({ gotPicture: ICON, from: FOREST, type: 'image/png', bytes }, asked), null, 'another picture');
  assert.equal(readPicture({ gotPicture: BANNER, from: 'at://other', type: 'image/png', bytes }, asked), null, 'from another record');
  assert.equal(readPicture({ gotPicture: BANNER, from: FOREST, type: 'image/png', bytes }, null), null, 'nothing asked');
  assert.deepEqual(readPicture({ gotPicture: BANNER, from: FOREST, error: 'too-big' }, asked), { ok: false });
  assert.deepEqual(readPicture({ gotPicture: BANNER, from: FOREST, type: 'image/svg+xml', bytes }, asked), { ok: false }, 'no SVG');
  assert.deepEqual(readPicture({ gotPicture: BANNER, from: FOREST, type: 'text/html', bytes }, asked), { ok: false });
  assert.deepEqual(readPicture({ gotPicture: BANNER, from: FOREST, type: 'image/png', bytes: new ArrayBuffer(PICTURE_MAX + 1) }, asked), { ok: false });
  assert.deepEqual(readPicture({ gotPicture: BANNER, from: FOREST, type: 'image/png', bytes: 'text' }, asked), { ok: false });
  assert.deepEqual(readPicture({ gotPicture: BANNER, from: FOREST, type: 'image/png', bytes: new ArrayBuffer(0) }, asked), { ok: false });
});
