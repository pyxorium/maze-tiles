// The signpost renderer (signpost\tile\, claude/raku-renderer-tiles-plan.md, "The signpost renderer", SR1 to SR7): what
// it shows for what its host sends (view.js), the records it asks for, its colours kept in step with Places and the
// travel pages, its page (the data protocol from the host; only { get } and { open } ever sent), the lexicon's new
// optional name (SR5), and publishing it with --signpost.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { readSignpost, readGot, wanted, lines, textOf, nameFromId, parseRecordUri, SIGNPOST } from '../signpost/tile/view.js';
import { runPublish, ACCOUNT, SIGNPOST as SIGNPOST_NSID, PLACE as PLACE_NSID, RESERVED_KEYS } from '../scripts/publish.mjs';
import { SIGNPOST_TILES, ROOT } from '../scripts/tiles.mjs';
import { createFakePds } from './fake-pds.mjs';

const TC = 'did:plc:6vxjigxrqizmbo56gojxico3', PX = 'did:plc:rqbqpaaluty5v47jwciowpik';
const MAZE = `at://${PX}/cafe.thunderbird.way.place/maze`, FOREST = `at://${TC}/cafe.thunderbird.way.place/winter-forest`;
const slide = (value = {}, over = {}) => ({
  uri: `at://${TC}/${SIGNPOST}/winter-forest.slide`, cid: 'bafyreisign', did: TC, handle: 'thunderbird.cafe', collection: SIGNPOST, rkey: 'winter-forest.slide',
  value: { $type: SIGNPOST, to: [{ place: MAZE, entrance: 'obelisk' }], updatedAt: '2026-10-29T05:40:00.000Z', ...value }, ...over,
});
const got = (uri, did, handle, collection, value) => ({ got: uri, record: { uri, cid: 'bafy', did, handle, collection, rkey: uri.split('/').pop(), value } });

test('the slide, before any names: SR1\'s lines from the record alone', () => {
  const v = readSignpost(slide());
  assert.equal(v.kind, 'signpost');
  assert.deepEqual([v.tileId, v.exit, v.exitName, v.ownPlace], ['winter-forest', 'slide', 'Slide', FOREST]);
  const L = lines(v);
  assert.equal(L.heading, 'Slide, in winter-forest');
  assert.equal(textOf(L.out), 'A way out of [place: winter-forest] [leave/exit: slide]');
  assert.equal(textOf(L.by), `by @thunderbird.cafe [${TC}]`);
  assert.equal(L.updated, 'Updated Oct 29, 2026.');
  assert.equal(L.dests.length, 1);
  assert.equal(textOf(L.dests[0].way), 'A way in to [place: maze] [arrive/entrance: obelisk]');
  assert.equal(textOf(L.dests[0].by), `by [${PX}]`, 'no handle until the host answers: the DID from the address');
  assert.equal(L.button, 'Go to maze');
});

test('with the names the host sent back: the real names in the heading and the button, the handle beside the DID', () => {
  const v = readSignpost(slide({ name: 'The slide' }));
  const names = new Map([readGot(got(FOREST, TC, 'thunderbird.cafe', PLACE_NSID, { name: 'Winter Forest' })), readGot(got(MAZE, PX, 'pyxorium.com', PLACE_NSID, { name: 'Escher maze' }))]);
  const L = lines(v, names);
  assert.equal(L.heading, 'The slide, in Winter Forest', 'SR5: the signpost\'s own name');
  assert.equal(L.button, 'Go to Escher maze');
  assert.equal(textOf(L.dests[0].way), 'A way in to [place: maze] [arrive/entrance: obelisk]', 'no real name in front of "A way in to" (SR1)');
  assert.equal(textOf(L.dests[0].by), `by @pyxorium.com [${PX}]`);
});

test('what it asks for (SR2): its own place first, then each destination, once each', () => {
  const v = readSignpost(slide({ to: [{ place: MAZE, entrance: 'obelisk' }, { place: FOREST, entrance: 'lamppost', label: 'Back' }, { place: MAZE }] }));
  assert.deepEqual(wanted(v), [FOREST, MAZE]);
  assert.deepEqual(wanted(readSignpost({ collection: 'app.bsky.feed.like' })), []);
});

test('empty, several, labels and a note', () => {
  assert.equal(lines(readSignpost(slide({ to: [] }))).dests.length, 0);
  assert.equal(lines(readSignpost(slide({ to: [] }))).button, null);
  const v = readSignpost(slide({ note: '  Under   construction ', to: [{ place: FOREST, entrance: 'lamppost', label: 'Back to the lamp post' }, { place: MAZE, entrance: 'obelisk' }] }));
  const L = lines(v);
  assert.equal(L.note, 'Under construction');
  assert.equal(L.button, null, 'several: a "Go there" per row instead');
  assert.equal(L.dests[0].label, 'Back to the lamp post');
  assert.equal(textOf(L.dests[0].way), 'A way in to [place: winter-forest] [arrive/entrance: lamppost]');
  assert.equal(L.dests[1].label, null);
});

test('a destination must be exactly a place or a tile of the right kind; at most 12', () => {
  const bad = [{}, { place: 'https://example.com/' }, { place: `at://${PX}/app.bsky.feed.post/3abc` }, { tile: MAZE }, { place: 42 }, 'x', null];
  assert.equal(readSignpost(slide({ to: bad })).to.length, 0);
  const t = readSignpost(slide({ to: [{ tile: `at://${PX}/ing.dasl.masl/3myyjuyr2ja2s`, entrance: 'bad id!' }] })).to[0];
  assert.deepEqual([t.kind, t.rkey, t.entrance], ['tile', '3myyjuyr2ja2s', null]);
  assert.equal(textOf(lines(readSignpost(slide({ to: [{ tile: `at://${PX}/ing.dasl.masl/3myyjuyr2ja2s` }] }))).dests[0].way), 'A way in to [tile: 3myyjuyr2ja2s]');
  assert.equal(readSignpost(slide({ to: Array.from({ length: 20 }, () => ({ place: MAZE })) })).to.length, 12);
});

test('someone else\'s naming: a key with no dot, no handle, a tile\'s card name', () => {
  const v = readSignpost(slide({ to: [{ tile: `at://${PX}/ing.dasl.masl/3mzdesert` }] }, { rkey: 'well', handle: null }));
  assert.deepEqual([v.tileId, v.exit, v.ownPlace], [null, 'well', null]);
  const L = lines(v, new Map([readGot(got(`at://${PX}/ing.dasl.masl/3mzdesert`, PX, null, 'ing.dasl.masl', { tile: { name: 'The Desert' } }))]));
  assert.equal(L.heading, 'Well');
  assert.equal(textOf(L.out), 'A way out [leave/exit: well]');
  assert.equal(textOf(L.by), `by [${TC}]`);
  assert.equal(L.button, 'Go to The Desert');
});

test('not a signpost, a host\'s refusal, and odd values', () => {
  assert.deepEqual(readSignpost({ collection: PLACE_NSID, value: {} }), { kind: 'notsignpost', collection: PLACE_NSID });
  assert.deepEqual(readSignpost(null), { kind: 'notsignpost', collection: null });
  assert.equal(readGot({ got: MAZE, error: 'not-allowed' }), null);
  assert.equal(readGot(slide()), null, 'the signpost itself is not an answer');
  const v = readSignpost(slide({ name: `  ${'very '.repeat(40)}long `, updatedAt: 'nope' }, { handle: 'not a handle' }));
  assert.equal(v.exitName.length, 100);
  assert.equal(lines(v).updated, null);
  assert.equal(textOf(lines(v).by), `by [${TC}]`);
});

test('names from ids, and addresses', () => {
  assert.deepEqual(['slide', 'tree-door', 'second-door', 'lamp_post', ''].map(nameFromId), ['Slide', 'Tree door', 'Second door', 'Lamp post', '']);
  assert.deepEqual(parseRecordUri(MAZE), { actor: PX, collection: PLACE_NSID, rkey: 'maze' });
  assert.deepEqual(parseRecordUri('at://pyxorium.com/cafe.thunderbird.way.place/maze').actor, 'pyxorium.com');
  for (const bad of ['https://x.y/z', 'at://did:plc:x/a.b.c/1', `${MAZE}/extra`, 'at://x/y']) assert.equal(parseRecordUri(bad), null, bad);
});

test('its colours are the travel pages\' and Places\': the :root line is the same in all three', () => {
  const rootLine = (f) => (/^:root\s*\{[^}]*\}/m.exec(readFileSync(join(ROOT, ...f), 'utf8')) || [''])[0];
  const way = rootLine(['site', 'way.css']);
  assert.ok(way.includes('--accent'));
  assert.equal(rootLine(['signpost', 'tile', 'signpost.css']), way);
  assert.equal(rootLine(['place', 'tile', 'place.css']), way);
});

test('the page: off the network; the data protocol from the host; it only ever sends get and open', () => {
  const html = readFileSync(join(ROOT, 'signpost', 'tile', 'index.html'), 'utf8');
  assert.match(html, /http-equiv="Content-Security-Policy" content="[^"]*connect-src 'self'/);
  assert.match(html, /script-src 'self'/);
  const js = readFileSync(join(ROOT, 'signpost', 'tile', 'signpost.js'), 'utf8');
  assert.match(js, /import\('\/\.well-known\/web-tiles\/data\.js'\)/);
  assert.ok(js.indexOf('addDataHandler(onPayload)') < js.indexOf('api.listen()'), 'the handler is added before listen()');
  assert.deepEqual([...js.matchAll(/sendData\(\{ (\w+):/g)].map((m) => m[1]).sort(), ['get', 'open']);
  assert.ok(!/innerHTML/.test(js), 'drawn with DOM calls only');
  for (const f of SIGNPOST_TILES['signpost-renderer'].files) assert.ok(readFileSync(join(ROOT, 'signpost', 'tile', f)).length > 0, f);
});

test('the signpost lexicon (SR5): an optional name, nothing else changed', () => {
  const l = JSON.parse(readFileSync(join(ROOT, 'lexicons', `${SIGNPOST}.json`), 'utf8'));
  const rec = l.defs.main.record;
  assert.deepEqual(rec.required, ['to', 'updatedAt']);
  assert.deepEqual(Object.keys(rec.properties), ['name', 'to', 'note', 'updatedAt']);
  assert.equal(rec.properties.name.type, 'string');
  assert.equal(rec.properties.name.maxGraphemes, 100);
});

test('--signpost: one tile from thunderbird.cafe, the changed lexicons, no place or signposts; it prints the pin', async () => {
  assert.ok(!RESERVED_KEYS.includes('signpost-renderer'));
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
  const placesBefore = { 'winter-forest': { uri: `at://${ACCOUNT}/${PLACE_NSID}/winter-forest`, cid: 'bafy-p1' } };
  const lexText = (id) => JSON.stringify(JSON.parse(readFileSync(join(ROOT, 'lexicons', `${id}.json`), 'utf8')));
  let published = {
    places: structuredClone(placesBefore), signposts: { 'winter-forest.slide': { uri: 'x' } },
    // the place lexicon unchanged, the signpost lexicon as it was before SR5
    lexicons: { [PLACE_NSID]: { uri: 'u1', text: lexText(PLACE_NSID) }, [SIGNPOST_NSID]: { uri: 'u2', text: '{"old":true}' } },
    'place-renderer': { uri: `at://${ACCOUNT}/ing.dasl.masl/3mznn4ogtza2s`, cid: 'bafy-places' },
  };
  const logs = [];
  const opts = {
    fetchImpl: pds.fetchImpl, log: (s) => logs.push(s), ask: async () => 'y', askHidden: async () => 'right-password',
    readPublished: () => published, writePublished: (o) => { published = o; }, checkBundle: async () => { throw new Error('no bundle to check'); },
    now: () => '2026-11-06T12:00:00.000Z', tiles: SIGNPOST_TILES,
  };
  const dry = await runPublish({ ...opts, dryRun: true });
  assert.deepEqual(dry.plan.map((t) => t.id), ['signpost-renderer']);
  assert.deepEqual([dry.lexiconsDue, dry.placesDue, dry.signpostsDue], [[SIGNPOST_NSID], [], []]);
  const r = await runPublish(opts);
  assert.equal(r.changed, true);
  const p = published['signpost-renderer'];
  assert.match(p.uri, new RegExp(`^at://${ACCOUNT}/ing.dasl.masl/`));
  const value = pds.records.get(`ing.dasl.masl/${p.uri.split('/').pop()}`).value;
  assert.equal(value.tile.name, 'Signposts');
  assert.deepEqual(Object.keys(value.tile.resources).sort(), ['/', '/banner.png', '/icon.png', '/signpost.css', '/signpost.js', '/view.js']);
  const lex = pds.records.get(`com.atproto.lexicon.schema/${SIGNPOST_NSID}`);
  assert.ok(lex && lex.value.defs.main.record.properties.name, 'the signpost lexicon, with name');
  assert.ok(!pds.records.has(`com.atproto.lexicon.schema/${PLACE_NSID}`), 'the unchanged place lexicon is left alone');
  assert.equal(published.lexicons[SIGNPOST_NSID].text, lexText(SIGNPOST_NSID));
  assert.deepEqual(published.places, placesBefore, 'the place records\' bookkeeping untouched');
  assert.deepEqual(published.signposts, { 'winter-forest.slide': { uri: 'x' } });
  assert.equal(published['place-renderer'].uri, `at://${ACCOUNT}/ing.dasl.masl/3mznn4ogtza2s`, 'Places\' entry untouched');
  assert.ok(![...pds.records.keys()].some((k) => k.startsWith(`${PLACE_NSID}/`) || k.startsWith(`${SIGNPOST_NSID}/`)), 'no place or signpost written');
  assert.ok(logs.some((l) => l.includes(`RENDERERS ('${SIGNPOST_NSID}'): uri '${p.uri}', cid '${p.cid}'`)), 'it prints the pin for Raku');
});
