// Publishing the maze (scripts/publish.mjs) to a stand-in server (test/fake-pds.mjs, from rooms-lab): the dry
// run, a Foundry-shaped record read back, the policy that keeps the tile off the network, --again, refusals, the
// check that tile/maze.js is built from the current src/, and the isometric snapshot's own settings (--iso).
import test from 'node:test';
import assert from 'node:assert/strict';
import { runPublish, ACCOUNT, PYXORIUM_DID, PLACE, SIGNPOST, accountOf } from '../scripts/publish.mjs';
import { publishFiles, TILES, FOREST_TILES } from '../scripts/tiles.mjs';
import { ISO_TILES } from '../iso/tiles.mjs';
import { readFileSync, readdirSync } from 'node:fs';
import { createFakePds } from './fake-pds.mjs';
import { dagCborCid } from '../scripts/lib/dagcbor.js';
import { rawCid } from '../scripts/lib/cid.js';

const quiet = () => {};
// Since 0.4.0 the maze is pyxorium.com's (M30) and Winter Forest thunderbird.cafe's.
const MAZE = PYXORIUM_DID;
const mazePds = () => createFakePds({ did: MAZE, handle: 'pyxorium.com' });
const cafePds = () => createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
function run(pds, opts = {}) {
  let published = opts.published || {};
  return runPublish({
    fetchImpl: pds.fetchImpl, log: quiet, ask: async () => opts.answer ?? 'y', askHidden: async () => opts.password ?? 'right-password',
    readPublished: () => published, writePublished: (o) => { published = o; }, checkBundle: async () => true,
    now: () => '2026-10-25T12:00:00.000Z', ...opts,
  }).then((r) => ({ ...r, published }));
}

test('a dry run writes nothing and asks nothing', async () => {
  const pds = mazePds();
  const r = await run(pds, { dryRun: true, askHidden: async () => { throw new Error('asked'); } });
  assert.equal(r.changed, false);
  assert.deepEqual(r.plan.map((t) => t.id), ['maze']);
  assert.ok(!pds.calls.some((c) => /uploadBlob|createRecord|putRecord|createSession/.test(c)), 'nothing written (it only looks the signpost up)');
});

test('publishing the maze: a Foundry-shaped record, every file read back', async () => {
  const pds = mazePds();
  const r = await run(pds);
  assert.equal(r.changed, true);
  const p = r.published.maze;
  assert.match(p.uri, new RegExp(`^at://${MAZE}/ing.dasl.masl/`), 'from pyxorium.com');
  const value = pds.records.get(`ing.dasl.masl/${p.uri.split('/').pop()}`).value;
  assert.equal(value.$type, 'ing.dasl.masl');
  assert.equal(value.cid, await dagCborCid(value.tile));
  assert.equal(value.tile.name, 'Escher maze');
  assert.equal(value.tile.generator, 'Escher maze');
  assert.deepEqual(value.tile.sizing, { width: 640, height: 480 });
  assert.deepEqual(Object.keys(value.tile.resources).sort(), ['/', '/banner.png', '/icon.png', '/maze.css', '/maze.js', '/ways.json']);
  const csp = value.tile.resources['/']['content-security-policy'];
  assert.match(csp, /connect-src 'self'/, 'the maze can\'t reach the network');
  assert.match(csp, /script-src 'self'/);
  for (const [path, entry] of Object.entries(value.tile.resources)) {
    const b = pds.blobs.get(entry.src.ref.$link);
    assert.ok(b, `${path} uploaded`);
    assert.equal(await rawCid(b.bytes), entry.src.ref.$link);
  }
});

test('published once: nothing to do; --again: a new record', async () => {
  const pds = mazePds();
  const first = await run(pds);
  const second = await run(pds, { published: first.published });
  assert.equal(second.changed, false);
  const again = await run(pds, { published: first.published, again: true });
  assert.equal(again.changed, true);
  assert.notEqual(again.published.maze.uri, first.published.maze.uri);
});

test('a wrong password or "no" publishes nothing', async () => {
  const pds = mazePds();
  await assert.rejects(run(pds, { password: 'wrong' }), /Invalid identifier or password/);
  const no = await run(pds, { answer: 'n' });
  assert.equal(no.changed, false);
  assert.ok(!pds.calls.some((c) => c.includes('uploadBlob')));
});

test('an out-of-date tile/maze.js stops publishing', async () => {
  const pds = mazePds();
  await assert.rejects(run(pds, { checkBundle: async () => false }), /npm run build/);
  assert.ok(!pds.calls.some((c) => c.includes('uploadBlob')));
});

test('the tile stays about the planned size and its page has no inline script or style', () => {
  const files = publishFiles('maze');
  const code = files.filter((f) => !f.path.endsWith('.png')).reduce((n, f) => n + f.bytes.length, 0);
  assert.ok(code < 750 * 1024, `the maze's code is ${(code / 1024).toFixed(1)} KB (planned about 650 KB, three.js included)`);
  const page = new TextDecoder().decode(files.find((f) => f.path === '/').bytes);
  assert.ok(!/<script(?![^>]*\bsrc=)[^>]*>/i.test(page), 'no inline script');
  assert.ok(!/\sstyle=|\son[a-z]+=/i.test(page), 'no style or event attributes');
  // The maze's own code (src/) reaches for nothing outside the tile (three.js is in the bundle too; the tile's
  // policy, connect-src 'self', keeps everything off the network anyway).
  for (const f of readdirSync(new URL('../src/', import.meta.url))) {
    const text = readFileSync(new URL(`../src/${f}`, import.meta.url), 'utf8');
    assert.ok(!/\bfetch\(|XMLHttpRequest|WebSocket|eval\(|new Function|localStorage|sessionStorage/.test(text), `src/${f} reaches for nothing outside the tile, and saves nothing`);
  }
});

test('the debugging switches of the look test are not in the real tile', () => {
  for (const f of readdirSync(new URL('../src/', import.meta.url))) {
    const text = readFileSync(new URL(`../src/${f}`, import.meta.url), 'utf8');
    assert.ok(!/__look|noStencil|noClip|flags\./.test(text), `src/${f}`);
  }
});

test('--iso: the isometric snapshot publishes on its own, under its own name, only when asked', async () => {
  const dry = await run(mazePds(), { dryRun: true });
  assert.deepEqual(dry.plan.map((t) => t.id), ['maze'], 'by default only the 3D maze');
  const pds = cafePds();
  const r = await run(pds, { tiles: ISO_TILES });
  const p = r.published.mazeIso;
  const value = pds.records.get(`ing.dasl.masl/${p.uri.split('/').pop()}`).value;
  assert.equal(value.tile.name, 'Escher maze (isometric)');
  assert.deepEqual(Object.keys(value.tile.resources).sort(),
    ['/', '/banner.png', '/graph.js', '/icon.png', '/main.js', '/map.js', '/mapcard.js', '/maze.css', '/render.js']);
  assert.equal(r.published.maze, undefined);
  assert.ok(!pds.calls.some((c) => c.includes('lexicon')) && !r.published.places, 'the snapshot has no ways');
  assert.ok(![...pds.records.keys()].some((k) => k.startsWith('cafe.thunderbird.way.')));
});

// ---- ways (claude/escher-maze-ways-plan.md, M21, M24) -----------------------------------------------------------
const FOREST_PLACE = `at://${ACCOUNT}/${PLACE}/winter-forest`;
test('ways: the place (with the tile\'s exact version) and two signposts alongside the tile, and no lexicons from pyxorium.com', async () => {
  const pds = mazePds();
  const dry = await run(pds, { dryRun: true });
  assert.deepEqual(dry.lexiconsDue, [], 'the lexicons are thunderbird.cafe\'s: never written from pyxorium.com (M30)');
  assert.deepEqual(dry.placesDue, [`at://${MAZE}/${PLACE}/maze`]);
  assert.deepEqual(dry.signpostsDue, [`at://${MAZE}/${SIGNPOST}/maze.obelisk`, `at://${MAZE}/${SIGNPOST}/maze.second-door`]);
  const r = await run(pds);
  assert.ok(![...pds.records.keys()].some((k) => k.startsWith('com.atproto.lexicon.schema/')), 'no lexicons');
  assert.equal(r.published.lexicons, undefined);
  const place = pds.records.get(`${PLACE}/maze`).value;
  assert.deepEqual(place, { $type: PLACE, tile: r.published.maze.uri, cid: r.published.maze.cid, name: 'Escher maze', updatedAt: '2026-10-25T12:00:00.000Z' });
  assert.equal(place.cid, pds.records.get(`ing.dasl.masl/${r.published.maze.uri.split('/').pop()}`).cid, 'the CID is the tile record\'s');
  assert.deepEqual(pds.records.get(`${SIGNPOST}/maze.obelisk`).value, { $type: SIGNPOST, to: [{ place: FOREST_PLACE, entrance: 'lamppost' }], updatedAt: '2026-10-25T12:00:00.000Z' },
    'the obelisk leads to Winter Forest\'s lamp post at once (M33)');
  assert.deepEqual(pds.records.get(`${SIGNPOST}/maze.second-door`).value, { $type: SIGNPOST, to: [], updatedAt: '2026-10-25T12:00:00.000Z' }, 'the second door: empty, dormant');
  assert.equal(r.published.places.maze.tile, r.published.maze.uri);
  assert.deepEqual(r.published.accounts, { 'pyxorium.com': MAZE });
});

test('ways: from thunderbird.cafe the lexicons go up with the forest, each only when new or changed', async () => {
  const pds = cafePds();
  const dry = await run(pds, { tiles: FOREST_TILES, dryRun: true });
  assert.deepEqual(dry.lexiconsDue, [PLACE, SIGNPOST]);
  const r = await run(pds, { tiles: FOREST_TILES });
  for (const id of [PLACE, SIGNPOST]) {
    const l = pds.records.get(`com.atproto.lexicon.schema/${id}`);
    assert.ok(l, `the lexicon ${id}`);
    assert.equal(l.value.$type, 'com.atproto.lexicon.schema');
  }
  assert.ok(r.published.lexicons[PLACE].text);
  const stale = { ...r.published, lexicons: { ...r.published.lexicons, [SIGNPOST]: { ...r.published.lexicons[SIGNPOST], text: '{}' } } };
  assert.deepEqual((await run(pds, { tiles: FOREST_TILES, published: stale, dryRun: true })).lexiconsDue, [SIGNPOST]);
});

test('moving the maze: published.json\'s thunderbird.cafe maze counts as not published here, and is kept under earlier', async () => {
  // published.json as it was before 0.4.0 (the maze, its place and its signpost on thunderbird.cafe; the forest too).
  const cafe = cafePds();
  const old = await run(cafe, { tiles: { maze: { ...TILES.maze, account: undefined, signposts: undefined } } }).catch((e) => e);
  assert.ok(old instanceof Error && /should be a cafe\.thunderbird\.way\.place record of did:plc:6vxjigxrqizmbo56gojxico3/.test(old.message),
    'the maze\'s ways.json names pyxorium.com\'s records now, so it can\'t be published from thunderbird.cafe');
  const before = {
    account: ACCOUNT, handle: 'thunderbird.cafe',
    lexicons: { [PLACE]: { uri: 'x', text: 'y' } },
    maze: { uri: `at://${ACCOUNT}/ing.dasl.masl/3mys6stpsyc2b`, cid: 'bafy-old' },
    'winter-forest': { uri: `at://${ACCOUNT}/ing.dasl.masl/3myxm45elkp22`, cid: 'bafy-forest' },
    places: { maze: { uri: `at://${ACCOUNT}/${PLACE}/maze`, tile: `at://${ACCOUNT}/ing.dasl.masl/3mys6stpsyc2b` }, 'winter-forest': { uri: FOREST_PLACE, tile: 'f' } },
    signposts: { 'maze.obelisk': { uri: `at://${ACCOUNT}/${SIGNPOST}/maze.obelisk` }, 'winter-forest.slide': { uri: `at://${ACCOUNT}/${SIGNPOST}/winter-forest.slide` } },
  };
  const pds = mazePds();
  const dry = await run(pds, { published: before, dryRun: true });
  assert.deepEqual(dry.plan.map((t) => t.id), ['maze'], 'no --again needed');
  const r = await run(pds, { published: before });
  const p = r.published;
  assert.match(p.maze.uri, new RegExp(`^at://${MAZE}/`));
  assert.equal(p.places.maze.uri, `at://${MAZE}/${PLACE}/maze`);
  assert.equal(p.signposts['maze.obelisk'].uri, `at://${MAZE}/${SIGNPOST}/maze.obelisk`);
  assert.equal(p.signposts['maze.second-door'].uri, `at://${MAZE}/${SIGNPOST}/maze.second-door`);
  assert.deepEqual(p.earlier['thunderbird.cafe'], { maze: before.maze, places: { maze: before.places.maze }, signposts: { 'maze.obelisk': before.signposts['maze.obelisk'] } });
  assert.deepEqual(p['winter-forest'], before['winter-forest'], 'the forest untouched');
  assert.deepEqual(p.places['winter-forest'], before.places['winter-forest']);
  assert.deepEqual(p.signposts['winter-forest.slide'], before.signposts['winter-forest.slide']);
  assert.deepEqual(p.lexicons, before.lexicons);
  assert.deepEqual(p.accounts, { 'thunderbird.cafe': ACCOUNT, 'pyxorium.com': MAZE });
  assert.equal(p.account, undefined, 'the one top-level account is gone: each tile has its own');
  // Then the forest from thunderbird.cafe: the maze's entries stay as they are.
  const f = await run(cafe, { tiles: FOREST_TILES, published: p, again: true });
  assert.equal(f.published.maze.uri, p.maze.uri);
  assert.deepEqual(f.published.earlier, p.earlier);
  assert.equal(f.published.signposts['maze.obelisk'].uri, p.signposts['maze.obelisk'].uri);
});

test('a set of tiles from two accounts is refused', () => {
  assert.throws(() => accountOf({ ...TILES, ...FOREST_TILES }), /different accounts/);
  assert.equal(accountOf(TILES), MAZE);
  assert.equal(accountOf(FOREST_TILES), ACCOUNT);
  assert.equal(accountOf(ISO_TILES), ACCOUNT);
});

test('ways: --again moves the place to the new tile and never touches a signpost you\'ve pointed somewhere', async () => {
  const pds = mazePds();
  const first = await run(pds);
  // The owner points the obelisk somewhere (by hand, in PDSls).
  const pointed = { $type: SIGNPOST, to: [{ place: `at://${ACCOUNT}/${PLACE}/hub`, entrance: 'south-stone' }], updatedAt: '2026-11-01T00:00:00.000Z' };
  pds.records.set(`${SIGNPOST}/maze.obelisk`, { value: pointed, cid: 'bafy-owner' });
  const puts = () => pds.calls.filter((c) => c.includes('putRecord')).length;
  const before = puts();
  const again = await run(pds, { published: first.published, again: true });
  assert.notEqual(again.published.maze.uri, first.published.maze.uri);
  const place = pds.records.get(`${PLACE}/maze`).value;
  assert.equal(place.tile, again.published.maze.uri);
  assert.equal(place.cid, again.published.maze.cid);
  assert.deepEqual(pds.records.get(`${SIGNPOST}/maze.obelisk`).value, pointed, 'the signpost is yours');
  assert.equal(puts() - before, 1, 'only the place was written again');
});

test('ways: a missing place or signpost is put right without republishing the tile', async () => {
  const pds = mazePds();
  const first = await run(pds);
  pds.records.delete(`${SIGNPOST}/maze.second-door`);
  const { places, ...noPlace } = first.published;
  const fix = await run(pds, { published: noPlace });
  assert.equal(fix.changed, true);
  assert.equal(fix.published.maze.uri, first.published.maze.uri, 'the same tile');
  assert.equal(pds.records.get(`${PLACE}/maze`).value.tile, first.published.maze.uri);
  assert.deepEqual(pds.records.get(`${SIGNPOST}/maze.second-door`).value.to, []);
  const calm = await run(pds, { published: fix.published });
  assert.equal(calm.changed, false, 'then nothing to do');
});

test('ways: a signpost that appears meanwhile is never overwritten', async () => {
  const pds = mazePds();
  await run(pds);
  // createRecord refuses a key that's taken: the stand-in does as a real server.
  const res = await pds.fetchImpl('https://pds.test/xrpc/com.atproto.repo.createRecord', { method: 'POST', headers: { Authorization: 'Bearer fake-jwt' }, body: JSON.stringify({ repo: MAZE, collection: SIGNPOST, rkey: 'maze.obelisk', record: { to: [] } }) });
  assert.equal(res.status, 400);
});

// ---- Winter Forest (--forest; claude/winter-forest-step3-plan.md, W42 to W45) ---------------------------------------
const MAZE_PLACE = `at://${MAZE}/${PLACE}/maze`;
test('--forest: the forest\'s tile, its place and four signposts (the slide already leading to the maze\'s obelisk)', async () => {
  const mp = mazePds(), pds = cafePds();
  const maze = await run(mp);                                               // the maze, published before (pyxorium.com)
  const mazeKeys = [...mp.records.keys()];
  const mazeBefore = Object.fromEntries(mazeKeys.map((k) => [k, JSON.stringify(mp.records.get(k))]));
  const dry = await run(pds, { tiles: FOREST_TILES, published: maze.published, dryRun: true });
  assert.deepEqual(dry.plan.map((t) => t.id), ['winter-forest']);
  assert.deepEqual(dry.lexiconsDue, [PLACE, SIGNPOST], 'thunderbird.cafe holds the lexicons');
  assert.deepEqual(dry.placesDue, [`at://${ACCOUNT}/${PLACE}/winter-forest`]);
  assert.deepEqual(dry.signpostsDue, ['wardrobe', 'tree-door', 'arch', 'slide'].map((x) => `at://${ACCOUNT}/${SIGNPOST}/winter-forest.${x}`));
  const r = await run(pds, { tiles: FOREST_TILES, published: maze.published });
  const p = r.published['winter-forest'];
  const value = pds.records.get(`ing.dasl.masl/${p.uri.split('/').pop()}`).value;
  assert.equal(value.tile.name, 'Winter Forest');
  assert.equal(value.tile.description, 'A snowy night forest. A lamp post glows in a clearing, and four winding paths lead to a wardrobe, a great old tree, a stone arch and a small library. This place is reached through other places.');
  assert.equal(value.tile.generator, 'Winter Forest');
  assert.deepEqual(value.tile.icons, [{ src: '/icon.png' }]);
  assert.deepEqual(value.tile.screenshots, [{ src: '/banner.jpg' }], 'the card picture is the JPEG (W45)');
  assert.deepEqual(Object.keys(value.tile.resources).sort(), ['/', '/banner.jpg', '/forest.css', '/forest.js', '/icon.png', '/ways.json']);
  assert.equal(value.tile.resources['/banner.jpg']['content-type'], 'image/jpeg');
  assert.match(value.tile.resources['/']['content-security-policy'], /connect-src 'self'/);
  const place = pds.records.get(`${PLACE}/winter-forest`).value;
  assert.deepEqual(place, { $type: PLACE, tile: p.uri, cid: p.cid, name: 'Winter Forest', updatedAt: '2026-10-25T12:00:00.000Z' });
  for (const x of ['wardrobe', 'tree-door', 'arch']) assert.deepEqual(pds.records.get(`${SIGNPOST}/winter-forest.${x}`).value.to, [], `${x}: empty`);
  assert.deepEqual(pds.records.get(`${SIGNPOST}/winter-forest.slide`).value, { $type: SIGNPOST, to: [{ place: MAZE_PLACE, entrance: 'obelisk' }], updatedAt: '2026-10-25T12:00:00.000Z' }, 'the slide: pyxorium.com\'s maze, its obelisk (W20, M30)');
  for (const k of mazeKeys) assert.equal(JSON.stringify(mp.records.get(k)), mazeBefore[k], `${k} untouched`);
  assert.equal(r.published.maze.uri, maze.published.maze.uri, 'the maze stays as published');
  assert.equal(r.published.places.maze.uri, maze.published.places.maze.uri);
});

test('--forest --again: a new forest record and its place moved to it; the maze and every signpost untouched', async () => {
  const pds = cafePds();
  const maze = await run(mazePds());
  const first = await run(pds, { tiles: FOREST_TILES, published: maze.published });
  pds.records.set(`${SIGNPOST}/winter-forest.arch`, { value: { $type: SIGNPOST, to: [{ place: `at://${ACCOUNT}/${PLACE}/second-forest`, entrance: 'arch' }], updatedAt: 'x' }, cid: 'bafy-owner' });
  const slideBefore = JSON.stringify(pds.records.get(`${SIGNPOST}/winter-forest.slide`));
  const calm = await run(pds, { tiles: FOREST_TILES, published: first.published });
  assert.equal(calm.changed, false, 'published once: nothing to do');
  const again = await run(pds, { tiles: FOREST_TILES, published: first.published, again: true });
  assert.notEqual(again.published['winter-forest'].uri, first.published['winter-forest'].uri);
  const place = pds.records.get(`${PLACE}/winter-forest`).value;
  assert.equal(place.tile, again.published['winter-forest'].uri);
  assert.equal(place.cid, again.published['winter-forest'].cid);
  assert.equal(pds.records.get(`${SIGNPOST}/winter-forest.arch`).value.to[0].place, `at://${ACCOUNT}/${PLACE}/second-forest`, 'your arch is yours');
  assert.equal(JSON.stringify(pds.records.get(`${SIGNPOST}/winter-forest.slide`)), slideBefore);
  assert.equal(again.published.maze.uri, maze.published.maze.uri);
});

test('--forest: an out-of-date forest.js stops publishing, and says which build to run', async () => {
  const pds = cafePds();
  let asked = null;
  await assert.rejects(run(pds, { tiles: FOREST_TILES, checkBundle: async (id) => { asked = id; return false; } }), /forest\\tile\\forest\.js is older than forest\\src\\: run `npm run build-forest`/);
  assert.equal(asked, 'winter-forest');
  assert.ok(!pds.calls.some((c) => c.includes('uploadBlob')));
});

test('the forest stays about its planned size, its page has no inline script, and its code reaches for nothing outside', () => {
  const files = publishFiles('winter-forest', FOREST_TILES);
  const banner = files.find((f) => f.path === '/banner.jpg');
  assert.ok(banner.bytes.length >= 100 * 1024 && banner.bytes.length <= 160 * 1024, `the banner is ${(banner.bytes.length / 1024).toFixed(0)} KB (W45: about 120 to 150)`);
  assert.deepEqual([...banner.bytes.slice(0, 3)], [0xff, 0xd8, 0xff], 'a JPEG');
  const all = files.reduce((n, f) => n + f.bytes.length, 0);
  assert.ok(all < 1024 * 1024, `the whole forest is ${(all / 1024).toFixed(0)} KB`);
  const page = new TextDecoder().decode(files.find((f) => f.path === '/').bytes);
  assert.ok(!/<script(?![^>]*\bsrc=)[^>]*>/i.test(page), 'no inline script');
  assert.ok(/<img src="\.\/banner\.jpg"/.test(page), 'the postcard is the JPEG');
  for (const f of readdirSync(new URL('../forest/src/', import.meta.url))) {
    const text = readFileSync(new URL(`../forest/src/${f}`, import.meta.url), 'utf8');
    assert.ok(!/\bfetch\(|XMLHttpRequest|WebSocket|eval\(|new Function/.test(text), `forest/src/${f} reaches for nothing outside the tile`);
  }
});
