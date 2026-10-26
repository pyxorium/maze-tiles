// Publishes the Escher maze tile from the thunderbird.cafe account (modelled on rooms-lab's scripts/publish.mjs,
// without lexicons: the maze has none). Run from C:\thunderbird-cafe\maze-tiles (Node 22, no packages needed):
//
//   node scripts/publish.mjs              publish the maze if it isn't published yet
//   node scripts/publish.mjs --dry-run    show what would be published; ask nothing, write nothing
//   node scripts/publish.mjs --again      publish it again, as a new record (a new address), after a change
//   add --iso to any of these for the isometric step 1 (the frozen snapshot) instead: never needed unless you
//   choose to publish it too
//
// Before publishing the 3D maze it checks that tile\maze.js is built from the current src\ (it rebuilds in
// memory with the Foundry's esbuild and compares); if not, it stops and says to run `npm run build`.
// It shows what will be published, asks for the account's app password (hidden as you type) and once more
// before writing. The tile is always created as a new record (never overwriting); the record and every file are
// read back and checked. What was published is written to published.json (commit it).
import readline from 'node:readline';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROOT, TILES, publishFiles, cspOf } from './tiles.mjs';
import { ISO_TILES } from '../iso/tiles.mjs';
import { rawCid } from './lib/cid.js';
import { publishTile } from './lib/tile-record.js';

export const ACCOUNT = 'did:plc:6vxjigxrqizmbo56gojxico3';     // thunderbird.cafe
export const PUBLISHED_FILE = join(ROOT, 'published.json');
const GENERATOR = 'Escher maze';

async function getJson(fetchImpl, url, init) {
  const res = await fetchImpl(url, init);
  const text = await res.text();
  let body = null;
  try { body = text ? JSON.parse(text) : null; } catch { body = null; }
  if (!res.ok) {
    const err = new Error((body && (body.message || body.error)) || `Request failed (${res.status})`);
    err.status = res.status; err.error = body && body.error;
    throw err;
  }
  return body;
}

export async function tileToPublish(id, tiles = TILES) {
  const files = publishFiles(id, tiles);
  for (const f of files) f.cid = await rawCid(f.bytes);
  const page = new TextDecoder().decode(files.find((f) => f.path === '/').bytes);
  const t = tiles[id];
  return { id, name: t.name, description: t.description, sizing: t.sizing, generator: GENERATOR, csp: cspOf(page), files };
}

// Is tile/maze.js what src/ builds to now? true, false, or null when the build can't run here.
export async function bundleCurrent() {
  try {
    const { build, OUT } = await import('./build.mjs');
    const { js } = await build({ write: false });
    return readFileSync(OUT, 'utf8').replace(/\r\n/g, '\n') === js.replace(/\r\n/g, '\n');
  } catch { return null; }
}

export async function runPublish({ fetchImpl = fetch, ask, askHidden, log = console.log, dryRun = false, again = false, tiles = TILES,
  checkBundle = bundleCurrent,
  readPublished = () => (existsSync(PUBLISHED_FILE) ? JSON.parse(readFileSync(PUBLISHED_FILE, 'utf8')) : {}),
  writePublished = (o) => writeFileSync(PUBLISHED_FILE, JSON.stringify(o, null, 2) + '\n'),
  now = () => new Date().toISOString() }) {
  const doc = await getJson(fetchImpl, `https://plc.directory/${ACCOUNT}`);
  const svc = (doc.service || []).find((s) => s.type === 'AtprotoPersonalDataServer' || String(s.id).endsWith('#atproto_pds'));
  if (!svc) throw new Error('Could not find the account\'s server.');
  const pds = String(svc.serviceEndpoint).replace(/\/+$/, '');
  const aka = (doc.alsoKnownAs || []).find((a) => a.startsWith('at://'));
  const handle = aka ? aka.slice(5) : ACCOUNT;

  const published = readPublished() || {};
  const todo = [];
  for (const id of Object.keys(tiles)) if (again || !published[id]) todo.push(await tileToPublish(id, tiles));
  if (todo.some((t) => t.id === 'maze')) {
    const current = await checkBundle();
    if (current === false) throw new Error('tile\\maze.js is older than src\\: run `npm run build` first (then commit tile\\maze.js). Nothing was published.');
    if (current === null) log('(Could not rebuild tile\\maze.js here to check it is up to date: make sure you ran `npm run build` after changing src\\.)');
  }

  log(`\nAccount: @${handle} (${ACCOUNT}), server ${pds}`);
  if (!todo.length) { log('\nAlready published (see published.json). Use --again to publish it as a new record after a change.'); return { changed: false, published }; }
  log('\nThis will publish:');
  for (const t of todo) {
    const kb = t.files.reduce((n, f) => n + f.bytes.length, 0) / 1024;
    log(`  - a new tile "${t.name}": ${t.files.length} files, ${kb.toFixed(1)} KB (${t.files.map((f) => f.path).join(' ')})`);
  }
  log('It is public. Nothing else in the account is touched.');
  if (dryRun) { log('\nDry run: nothing was written.'); return { changed: false, plan: todo }; }

  const password = await askHidden(`\nApp password for @${handle} (hidden): `);
  if (!password) throw new Error('No app password given; nothing was published.');
  const session = await getJson(fetchImpl, `${pds}/xrpc/com.atproto.server.createSession`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ identifier: ACCOUNT, password }),
  });
  if (session.did !== ACCOUNT) throw new Error('That app password belongs to a different account; nothing was published.');
  const auth = { Authorization: `Bearer ${session.accessJwt}` };
  const ok = (await ask('Publish now? [y/N] ')).trim().toLowerCase();
  if (ok !== 'y' && ok !== 'yes') { log('Stopped; nothing was published.'); return { changed: false }; }

  const xrpc = async (nsid, { method, params, body, contentType }) => {
    const url = new URL(`${pds}/xrpc/${nsid}`);
    for (const [k, v] of Object.entries(params || {})) url.searchParams.set(k, v);
    const bytes = body instanceof Uint8Array;
    return getJson(fetchImpl, url.toString(), {
      method, headers: { ...auth, ...(body !== undefined ? { 'Content-Type': bytes ? contentType : 'application/json' } : {}) },
      body: body === undefined ? undefined : bytes ? body : JSON.stringify(body),
    });
  };
  const fetchBlob = async (cid) => {
    const res = await fetchImpl(`${pds}/xrpc/com.atproto.sync.getBlob?did=${encodeURIComponent(ACCOUNT)}&cid=${encodeURIComponent(cid)}`);
    if (!res.ok) throw new Error(`Reading back ${cid} failed (${res.status}).`);
    return new Uint8Array(await res.arrayBuffer());
  };

  const out = { ...published, account: ACCOUNT, handle };
  for (const t of todo) {
    log(`\nPublishing "${t.name}"…`);
    const r = await publishTile({ xrpc, fetchBlob, did: ACCOUNT, tile: t, now, log });
    out[t.id] = { uri: r.uri, cid: r.cid, manifestCid: r.manifestCid, publishedAt: r.record.createdAt };
    writePublished(out);
    log(`  done: ${r.uri}`);
    log(`  open it: https://raku.lexicographer.space/#t=${encodeURIComponent(r.uri)}&a=0`);
    log(`       or: https://lexicographer.space/@${handle}/${r.rkey}`);
  }
  log('\nPublished, and read back to check.');
  for (const t of todo) if (published[t.id] && again) log(`The earlier record (${published[t.id].uri}) is still there: delete it in PDSls once you're happy with the new one.`);
  log('Delete this app password (Bluesky: Settings > Privacy and security > App passwords).');
  return { changed: true, published: out };
}

function makeAsk() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
  let muted = false;
  const write = rl._writeToOutput.bind(rl);
  rl._writeToOutput = (s) => { if (!muted || s.includes('\n')) write(muted ? '\n' : s); };
  const ask = (q) => new Promise((r) => rl.question(q, r));
  const askHidden = (q) => new Promise((r) => { process.stdout.write(q); muted = true; rl.question('', (a) => { muted = false; r(a.trim()); }); });
  return { ask, askHidden, close: () => rl.close() };
}

if (process.argv[1] && resolve(process.argv[1]).toLowerCase() === fileURLToPath(import.meta.url).toLowerCase()) {
  const args = process.argv.slice(2);
  const io = makeAsk();
  runPublish({ ask: io.ask, askHidden: io.askHidden, dryRun: args.includes('--dry-run'), again: args.includes('--again'), ...(args.includes('--iso') ? { tiles: ISO_TILES } : {}) })
    .catch((err) => { console.error(`\n${err.message}`); process.exitCode = 1; })
    .finally(() => io.close());
}
