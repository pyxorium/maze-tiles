// Publishing the maze (scripts/publish.mjs) to a stand-in server (test/fake-pds.mjs, from rooms-lab): the dry
// run, a Foundry-shaped record read back, the policy that keeps the tile off the network, --again, refusals, the
// check that tile/maze.js is built from the current src/, and the isometric snapshot's own settings (--iso).
import test from 'node:test';
import assert from 'node:assert/strict';
import { runPublish, ACCOUNT, PLACE, SIGNPOST } from '../scripts/publish.mjs';
import { publishFiles, TILES } from '../scripts/tiles.mjs';
import { ISO_TILES } from '../iso/tiles.mjs';
import { readFileSync, readdirSync } from 'node:fs';
import { createFakePds } from './fake-pds.mjs';
import { dagCborCid } from '../scripts/lib/dagcbor.js';
import { rawCid } from '../scripts/lib/cid.js';

const quiet = () => {};
function run(pds, opts = {}) {
  let published = opts.published || {};
  return runPublish({
    fetchImpl: pds.fetchImpl, log: quiet, ask: async () => opts.answer ?? 'y', askHidden: async () => opts.password ?? 'right-password',
    readPublished: () => published, writePublished: (o) => { published = o; }, checkBundle: async () => true,
    now: () => '2026-10-25T12:00:00.000Z', ...opts,
  }).then((r) => ({ ...r, published }));
}

test('a dry run writes nothing and asks nothing', async () => {
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
  const r = await run(pds, { dryRun: true, askHidden: async () => { throw new Error('asked'); } });
  assert.equal(r.changed, false);
  assert.deepEqual(r.plan.map((t) => t.id), ['maze']);
  assert.ok(!pds.calls.some((c) => /uploadBlob|createRecord|putRecord|createSession/.test(c)), 'nothing written (it only looks the signpost up)');
});

test('publishing the maze: a Foundry-shaped record, every file read back', async () => {
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
  const r = await run(pds);
  assert.equal(r.changed, true);
  const p = r.published.maze;
  assert.match(p.uri, new RegExp(`^at://${ACCOUNT}/ing.dasl.masl/`));
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
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
  const first = await run(pds);
  const second = await run(pds, { published: first.published });
  assert.equal(second.changed, false);
  const again = await run(pds, { published: first.published, again: true });
  assert.equal(again.changed, true);
  assert.notEqual(again.published.maze.uri, first.published.maze.uri);
});

test('a wrong password or "no" publishes nothing', async () => {
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
  await assert.rejects(run(pds, { password: 'wrong' }), /Invalid identifier or password/);
  const no = await run(pds, { answer: 'n' });
  assert.equal(no.changed, false);
  assert.ok(!pds.calls.some((c) => c.includes('uploadBlob')));
});

test('an out-of-date tile/maze.js stops publishing', async () => {
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
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
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
  const dry = await run(pds, { dryRun: true });
  assert.deepEqual(dry.plan.map((t) => t.id), ['maze'], 'by default only the 3D maze');
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
test('ways: the lexicons, the place (with the tile\'s exact version) and an empty signpost, alongside the tile', async () => {
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
  const dry = await run(pds, { dryRun: true });
  assert.deepEqual(dry.lexiconsDue, [PLACE, SIGNPOST]);
  assert.deepEqual(dry.placesDue, [`at://${ACCOUNT}/${PLACE}/maze`]);
  assert.deepEqual(dry.signpostsDue, [`at://${ACCOUNT}/${SIGNPOST}/maze.obelisk`]);
  const r = await run(pds);
  for (const id of [PLACE, SIGNPOST]) {
    const l = pds.records.get(`com.atproto.lexicon.schema/${id}`);
    assert.ok(l, `the lexicon ${id}`);
    assert.equal(l.value.$type, 'com.atproto.lexicon.schema');
  }
  const place = pds.records.get(`${PLACE}/maze`).value;
  assert.deepEqual(place, { $type: PLACE, tile: r.published.maze.uri, cid: r.published.maze.cid, name: 'Escher maze', updatedAt: '2026-10-25T12:00:00.000Z' });
  assert.equal(place.cid, pds.records.get(`ing.dasl.masl/${r.published.maze.uri.split('/').pop()}`).cid, 'the CID is the tile record\'s');
  const sign = pds.records.get(`${SIGNPOST}/maze.obelisk`).value;
  assert.deepEqual(sign, { $type: SIGNPOST, to: [], updatedAt: '2026-10-25T12:00:00.000Z' }, 'empty: dormant');
  assert.equal(r.published.places.maze.tile, r.published.maze.uri);
  assert.ok(r.published.lexicons[PLACE].text);
});

test('ways: --again moves the place to the new tile and never touches a signpost you\'ve pointed somewhere', async () => {
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
  const first = await run(pds);
  // The owner points the obelisk somewhere (by hand, in PDSls).
  const pointed = { $type: SIGNPOST, to: [{ place: `at://${ACCOUNT}/${PLACE}/hub`, entrance: 'south-stone' }], updatedAt: '2026-11-01T00:00:00.000Z' };
  pds.records.set(`${SIGNPOST}/maze.obelisk`, { value: pointed, cid: 'bafy-owner' });
  const lexCalls = () => pds.calls.filter((c) => c.includes('putRecord')).length;
  const before = lexCalls();
  const again = await run(pds, { published: first.published, again: true });
  assert.notEqual(again.published.maze.uri, first.published.maze.uri);
  const place = pds.records.get(`${PLACE}/maze`).value;
  assert.equal(place.tile, again.published.maze.uri);
  assert.equal(place.cid, again.published.maze.cid);
  assert.deepEqual(pds.records.get(`${SIGNPOST}/maze.obelisk`).value, pointed, 'the signpost is yours');
  assert.equal(lexCalls() - before, 1, 'only the place was written again (the lexicons are unchanged)');
});

test('ways: a missing place or signpost is put right without republishing the tile', async () => {
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
  const first = await run(pds);
  pds.records.delete(`${SIGNPOST}/maze.obelisk`);
  const { places, ...noPlace } = first.published;
  const fix = await run(pds, { published: noPlace });
  assert.equal(fix.changed, true);
  assert.equal(fix.published.maze.uri, first.published.maze.uri, 'the same tile');
  assert.equal(pds.records.get(`${PLACE}/maze`).value.tile, first.published.maze.uri);
  assert.deepEqual(pds.records.get(`${SIGNPOST}/maze.obelisk`).value.to, []);
  const calm = await run(pds, { published: fix.published });
  assert.equal(calm.changed, false, 'then nothing to do');
});

test('ways: a changed lexicon is published again; a signpost that appears meanwhile is never overwritten', async () => {
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
  const first = await run(pds);
  const stale = { ...first.published, lexicons: { ...first.published.lexicons, [SIGNPOST]: { ...first.published.lexicons[SIGNPOST], text: '{}' } } };
  const r = await run(pds, { published: stale, dryRun: true });
  assert.deepEqual(r.lexiconsDue, [SIGNPOST]);
  // createRecord refuses a key that's taken: the stand-in does as a real server.
  const res = await pds.fetchImpl('https://pds.test/xrpc/com.atproto.repo.createRecord', { method: 'POST', headers: { Authorization: 'Bearer fake-jwt' }, body: JSON.stringify({ repo: ACCOUNT, collection: SIGNPOST, rkey: 'maze.obelisk', record: { to: [] } }) });
  assert.equal(res.status, 400);
});
