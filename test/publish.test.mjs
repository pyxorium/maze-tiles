// Publishing the maze (scripts/publish.mjs) to a stand-in server (test/fake-pds.mjs, from rooms-lab): the dry
// run, a Foundry-shaped record read back, the policy that keeps the tile off the network, --again, refusals.
import test from 'node:test';
import assert from 'node:assert/strict';
import { runPublish, ACCOUNT } from '../scripts/publish.mjs';
import { publishFiles, TILES } from '../scripts/tiles.mjs';
import { createFakePds } from './fake-pds.mjs';
import { dagCborCid } from '../scripts/lib/dagcbor.js';
import { rawCid } from '../scripts/lib/cid.js';

const quiet = () => {};
function run(pds, opts = {}) {
  let published = opts.published || {};
  return runPublish({
    fetchImpl: pds.fetchImpl, log: quiet, ask: async () => opts.answer ?? 'y', askHidden: async () => opts.password ?? 'right-password',
    readPublished: () => published, writePublished: (o) => { published = o; },
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
  assert.deepEqual(Object.keys(value.tile.resources).sort(),
    ['/', '/banner.png', '/graph.js', '/icon.png', '/main.js', '/map.js', '/mapcard.js', '/maze.css', '/render.js']);
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

test('the tile stays small and its page has no inline script or style', () => {
  const files = publishFiles('maze');
  const code = files.filter((f) => !f.path.endsWith('.png')).reduce((n, f) => n + f.bytes.length, 0);
  assert.ok(code < 100 * 1024, `the maze's code is ${(code / 1024).toFixed(1)} KB (target under 100 KB)`);
  const page = new TextDecoder().decode(files.find((f) => f.path === '/').bytes);
  assert.ok(!/<script(?![^>]*\bsrc=)[^>]*>/i.test(page), 'no inline script');
  assert.ok(!/\sstyle=|\son[a-z]+=/i.test(page), 'no style or event attributes');
  for (const f of TILES.maze.files.filter((x) => x.endsWith('.js'))) {
    const text = new TextDecoder().decode(files.find((x) => x.path === `/${f}`).bytes);
    assert.ok(!/\bfetch\(|XMLHttpRequest|WebSocket|eval\(|new Function/.test(text), `${f} reaches for nothing outside the tile`);
  }
});
