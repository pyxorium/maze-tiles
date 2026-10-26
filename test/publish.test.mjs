// Publishing the maze (scripts/publish.mjs) to a stand-in server (test/fake-pds.mjs, from rooms-lab): the dry
// run, a Foundry-shaped record read back, the policy that keeps the tile off the network, --again, refusals, the
// check that tile/maze.js is built from the current src/, and the isometric snapshot's own settings (--iso).
import test from 'node:test';
import assert from 'node:assert/strict';
import { runPublish, ACCOUNT } from '../scripts/publish.mjs';
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
  assert.ok(!pds.calls.some((c) => c.includes('uploadBlob') || c.includes('Record')));
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
  assert.deepEqual(Object.keys(value.tile.resources).sort(), ['/', '/banner.png', '/icon.png', '/maze.css', '/maze.js']);
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
});
