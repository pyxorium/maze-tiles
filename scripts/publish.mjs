// Publishes the Escher maze tile (modelled on rooms-lab's and daisy-tiles' scripts/publish.mjs), from its own account:
// since 0.4.0 the maze is pyxorium.com's and Winter Forest thunderbird.cafe's (M30; `account` in scripts/tiles.mjs). Run from C:\thunderbird-cafe\maze-tiles (Node 22, no packages needed):
//
//   node scripts/publish.mjs              publish the maze if it isn't published yet
//   node scripts/publish.mjs --dry-run    show what would be published; ask nothing, write nothing
//   node scripts/publish.mjs --again      publish it again, as a new record (a new address), after a change
//   add --iso to any of these for the isometric step 1 (the frozen snapshot) instead: never needed unless you
//   choose to publish it too
//   add --forest to any of these for Winter Forest instead (claude/winter-forest-step3-plan.md, W44): its tile, its
//   place and its four signposts; the maze, its place and its signpost are never touched (M26)
//
// Before publishing the 3D maze it checks that tile\maze.js is built from the current src\ (it rebuilds in
// memory with the Foundry's esbuild and compares); if not, it stops and says to run `npm run build`.
// It shows what will be published, asks for the account's app password (hidden as you type) and once more
// before writing. The tile is always created as a new record (never overwriting); the record and every file are
// read back and checked. What was published is written to published.json (commit it).
//
// Ways (claude/escher-maze-ways-plan.md): the maze's /ways.json names its place and its signposts. Alongside the
// tile this also publishes
//   - the two lexicons in lexicons\ (cafe.thunderbird.way.place, .signpost), each only when new or changed, and only
//     from thunderbird.cafe (they are thunderbird.cafe's names; the Wix TXT record _lexicon.way, value
//     did=<thunderbird.cafe>, covers them both); publishing from another account never writes them;
//   - the place record (cafe.thunderbird.way.place/maze): the tile's address and exact version (CID), written
//     again after every publish, so whatever points at the place keeps working;
//   - the signposts (cafe.thunderbird.way.signpost/maze.obelisk and maze.second-door), each only if it doesn't
//     exist yet: the obelisk leading to Winter Forest's lamp post, the second door EMPTY (dormant). Once one exists,
//     publishing never touches it.
// A tile whose record in published.json is on another account (the maze's 0.3.0, on thunderbird.cafe) counts as not
// published yet, so moving it needs no --again; the old records are left for you to delete in PDSls.
// Winter Forest (--forest) the same way: the place winter-forest and the signposts winter-forest.wardrobe, .tree-door,
// .arch (empty) and .slide (already leading to the maze's place, entrance obelisk: W20), each only if it doesn't exist
// yet. Before publishing it checks forest\tile\forest.js is built from forest\src\ (npm run build-forest).
import readline from 'node:readline';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROOT, TILES, FOREST_TILES, THUNDERBIRD_DID, publishFiles, cspOf } from './tiles.mjs';
import { ISO_TILES } from '../iso/tiles.mjs';
import { rawCid } from './lib/cid.js';
import { publishTile, publishLexicon } from './lib/tile-record.js';

export const ACCOUNT = THUNDERBIRD_DID;     // thunderbird.cafe: the lexicons' home, and any tile without `account`
export { PYXORIUM_DID } from './tiles.mjs';
// The account a set of tiles is published from (they must share one).
export function accountOf(tiles) {
  const set = new Set(Object.values(tiles).map((t) => t.account || ACCOUNT));
  if (set.size !== 1) throw new Error('These tiles belong to different accounts: publish them separately.');
  return [...set][0];
}
const didOfUri = (uri) => (/^at:\/\/([^/]+)\//.exec(uri || '') || [])[1] || null;
export const PUBLISHED_FILE = join(ROOT, 'published.json');
const GENERATOR = 'Escher maze';
export const PLACE = 'cafe.thunderbird.way.place';
export const SIGNPOST = 'cafe.thunderbird.way.signpost';
export const LEXICON_IDS = [PLACE, SIGNPOST];
const readLexicons = () => LEXICON_IDS.map((id) => JSON.parse(readFileSync(join(ROOT, 'lexicons', `${id}.json`), 'utf8')));

// A tile's /ways.json, checked: its place and signposts must be its account's records of the right kinds.
export function waysOf(id, tiles = TILES) {
  const t = tiles[id];
  if (!t.ways) return null;
  const did = t.account || ACCOUNT;
  const ways = JSON.parse(readFileSync(join(ROOT, t.folder, 'ways.json'), 'utf8'));
  const parse = (uri, collection) => {
    const m = /^at:\/\/([^/]+)\/([^/]+)\/([^/]+)$/.exec(uri || '');
    if (!m || m[1] !== did || m[2] !== collection) throw new Error(`ways.json: ${uri} should be a ${collection} record of ${did}.`);
    return { uri, rkey: m[3] };
  };
  return {
    place: parse(ways.place, PLACE),
    signposts: ways.exits.map((e) => ({ exit: e.id, ...parse(e.signpost, SIGNPOST) })),
  };
}

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
  return { id, name: t.name, description: t.description, sizing: t.sizing, generator: t.generator || GENERATOR, csp: cspOf(page), files,
    ...(t.icon ? { icon: t.icon } : {}), ...(t.screenshot ? { screenshot: t.screenshot } : {}) };
}

// Is the tile's script what its source builds to now (tile/maze.js from src/, or forest/tile/forest.js from
// forest/src/)? true, false, or null when the build can't run here.
export async function bundleCurrent(id = 'maze', tiles = TILES) {
  try {
    const { build, OUT } = await import(tiles[id] && tiles[id].bundle === 'forest' ? '../forest/scripts/build.mjs' : './build.mjs');
    const { js } = await build({ write: false });
    return readFileSync(OUT, 'utf8').replace(/\r\n/g, '\n') === js.replace(/\r\n/g, '\n');
  } catch { return null; }
}
const bundleName = (t) => (t.bundle === 'forest' ? { file: 'forest\\tile\\forest.js', src: 'forest\\src\\', cmd: 'npm run build-forest' } : { file: 'tile\\maze.js', src: 'src\\', cmd: 'npm run build' });

export async function runPublish({ fetchImpl = fetch, ask, askHidden, log = console.log, dryRun = false, again = false, tiles = TILES,
  checkBundle = bundleCurrent,
  readPublished = () => (existsSync(PUBLISHED_FILE) ? JSON.parse(readFileSync(PUBLISHED_FILE, 'utf8')) : {}),
  writePublished = (o) => writeFileSync(PUBLISHED_FILE, JSON.stringify(o, null, 2) + '\n'),
  now = () => new Date().toISOString() }) {
  const did = accountOf(tiles);
  const doc = await getJson(fetchImpl, `https://plc.directory/${did}`);
  const svc = (doc.service || []).find((s) => s.type === 'AtprotoPersonalDataServer' || String(s.id).endsWith('#atproto_pds'));
  if (!svc) throw new Error('Could not find the account\'s server.');
  const pds = String(svc.serviceEndpoint).replace(/\/+$/, '');
  const aka = (doc.alsoKnownAs || []).find((a) => a.startsWith('at://'));
  const handle = aka ? aka.slice(5) : did;

  const published = readPublished() || {};
  const todo = [];
  const here = (id) => published[id] && didOfUri(published[id].uri) === did;      // published, and from this account
  for (const id of Object.keys(tiles)) if (again || !here(id)) todo.push(await tileToPublish(id, tiles));
  for (const t of todo) {
    if (t.id !== 'maze' && !tiles[t.id].bundle) continue;
    const b = bundleName(tiles[t.id]);
    const current = await checkBundle(t.id, tiles);
    if (current === false) throw new Error(`${b.file} is older than ${b.src}: run \`${b.cmd}\` first (then commit ${b.file}). Nothing was published.`);
    if (current === null) log(`(Could not rebuild ${b.file} here to check it is up to date: make sure you ran \`${b.cmd}\` after changing ${b.src}.)`);
  }

  // Ways: the lexicons (new or changed), the place (after a publish, or if it's missing or behind), and any
  // signpost that doesn't exist yet (read from the account, so one you've edited is never overwritten).
  const withWays = Object.keys(tiles).filter((id) => tiles[id].ways);
  const had = published.lexicons || {};
  const lexiconsDue = withWays.length && did === ACCOUNT ? readLexicons().filter((l) => !had[l.id] || had[l.id].text !== JSON.stringify(l)) : [];
  const placesDue = [], signpostsDue = [];
  for (const id of withWays) {
    const w = waysOf(id, tiles);
    const p = (published.places || {})[id];
    if (todo.some((t) => t.id === id) || !p || !published[id] || p.tile !== published[id].uri || p.uri !== w.place.uri) placesDue.push({ id, ...w.place });
    for (const sp of w.signposts) if (!(await recordExists(fetchImpl, pds, did, SIGNPOST, sp.rkey))) signpostsDue.push({ id, ...sp });
  }

  log(`\nAccount: @${handle} (${did}), server ${pds}`);
  if (!todo.length && !lexiconsDue.length && !placesDue.length && !signpostsDue.length) { log('\nAlready published (see published.json). Use --again to publish it as a new record after a change.'); return { changed: false, published }; }
  log('\nThis will publish:');
  for (const t of todo) {
    const kb = t.files.reduce((n, f) => n + f.bytes.length, 0) / 1024;
    log(`  - a new tile "${t.name}": ${t.files.length} files, ${kb.toFixed(1)} KB (${t.files.map((f) => f.path).join(' ')})`);
  }
  for (const l of lexiconsDue) log(`  - the lexicon ${l.id}, as com.atproto.lexicon.schema/${l.id}${had[l.id] ? ' (changed)' : ''}`);
  for (const p of placesDue) log(`  - the place ${p.uri}: pointing at the ${todo.some((t) => t.id === p.id) ? 'new tile' : `tile in published.json`}, with its exact version`);
  for (const sp of signpostsDue) {
    const to = firstTo(tiles, sp);
    log(to.length ? `  - the signpost ${sp.uri}, leading to ${to.map((d) => `${d.place || d.tile}${d.entrance ? ` (entrance ${d.entrance})` : ''}`).join(', ')}` : `  - the signpost ${sp.uri}, empty (the ${sp.exit} leads nowhere yet)`);
  }
  log('It is public. Nothing else in the account is touched.');
  if (dryRun) { log('\nDry run: nothing was written.'); return { changed: false, plan: todo, lexiconsDue: lexiconsDue.map((l) => l.id), placesDue: placesDue.map((p) => p.uri), signpostsDue: signpostsDue.map((s) => s.uri) }; }

  const password = await askHidden(`\nApp password for @${handle} (hidden): `);
  if (!password) throw new Error('No app password given; nothing was published.');
  const session = await getJson(fetchImpl, `${pds}/xrpc/com.atproto.server.createSession`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ identifier: did, password }),
  });
  if (session.did !== did) throw new Error('That app password belongs to a different account; nothing was published.');
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
    const res = await fetchImpl(`${pds}/xrpc/com.atproto.sync.getBlob?did=${encodeURIComponent(did)}&cid=${encodeURIComponent(cid)}`);
    if (!res.ok) throw new Error(`Reading back ${cid} failed (${res.status}).`);
    return new Uint8Array(await res.arrayBuffer());
  };

  // Which account published what: `accounts` (handle → did); each tile, place and signpost's own uri says too.
  const { account: _a, handle: _h, ...rest } = published;
  const accounts = { ...(published.accounts || (published.account ? { [published.handle]: published.account } : {})), [handle]: did };
  const out = { ...rest, accounts };
  // A tile moving to this account (the maze, 0.4.0): what published.json said about it on the other account goes
  // under `earlier`, by that account's handle, so it still says where the old records are until you delete them.
  for (const t of todo) {
    const old = published[t.id], from = old && didOfUri(old.uri);
    if (!from || from === did) continue;
    const h = Object.keys(accounts).find((k) => accounts[k] === from) || from;
    const was = { ...((out.earlier || {})[h] || {}) };
    was[t.id] = old;
    if ((out.places || {})[t.id] && didOfUri(out.places[t.id].uri) === from) { was.places = { ...(was.places || {}), [t.id]: out.places[t.id] }; const { [t.id]: _p, ...places } = out.places; out.places = places; }
    for (const [k, v] of Object.entries(out.signposts || {})) {
      if (!k.startsWith(`${t.id}.`) || didOfUri(v.uri) !== from) continue;
      was.signposts = { ...(was.signposts || {}), [k]: v };
      const { [k]: _s, ...signs } = out.signposts; out.signposts = signs;
    }
    out.earlier = { ...(out.earlier || {}), [h]: was };
  }
  for (const l of lexiconsDue) {
    log(`\nPublishing the lexicon ${l.id}…`);
    const r = await publishLexicon({ xrpc, did, lexicon: l });
    out.lexicons = { ...(out.lexicons || {}), [l.id]: { uri: r.uri, cid: r.cid, text: JSON.stringify(l), publishedAt: now() } };
    writePublished(out);
  }
  for (const t of todo) {
    log(`\nPublishing "${t.name}"…`);
    const r = await publishTile({ xrpc, fetchBlob, did, tile: t, now, log });
    out[t.id] = { uri: r.uri, cid: r.cid, manifestCid: r.manifestCid, publishedAt: r.record.createdAt };
    writePublished(out);
    log(`  done: ${r.uri}`);
    log(`  open it: https://raku.lexicographer.space/#t=${encodeURIComponent(r.uri)}&a=0`);
    log(`       or: https://lexicographer.space/@${handle}/${r.rkey}`);
  }
  for (const p of placesDue) {
    const tile = out[p.id];
    log(`\nPointing the place ${p.rkey} at ${tile.uri}…`);
    const record = { $type: PLACE, tile: tile.uri, cid: tile.cid, name: tiles[p.id].name, updatedAt: now() };
    const put = await xrpc('com.atproto.repo.putRecord', { method: 'POST', body: { repo: did, collection: PLACE, rkey: p.rkey, record } });
    const back = await getJson(fetchImpl, `${pds}/xrpc/com.atproto.repo.getRecord?repo=${encodeURIComponent(did)}&collection=${PLACE}&rkey=${encodeURIComponent(p.rkey)}`);
    if (!back.value || back.value.tile !== tile.uri || back.value.cid !== tile.cid) throw new Error(`The place ${p.rkey} didn't read back as written.`);
    out.places = { ...(out.places || {}), [p.id]: { uri: put.uri, cid: put.cid, tile: tile.uri, tileCid: tile.cid, updatedAt: record.updatedAt } };
    writePublished(out);
  }
  for (const sp of signpostsDue) {
    const to = firstTo(tiles, sp);
    log(`\nSetting up the signpost ${sp.rkey} (${to.length ? 'leading somewhere already' : 'empty: dormant'})…`);
    const record = { $type: SIGNPOST, to, updatedAt: now() };
    // createRecord, not putRecord: it refuses if the signpost appeared meanwhile, so yours is never overwritten.
    const put = await xrpc('com.atproto.repo.createRecord', { method: 'POST', body: { repo: did, collection: SIGNPOST, rkey: sp.rkey, record } });
    if (!(await recordExists(fetchImpl, pds, did, SIGNPOST, sp.rkey))) throw new Error(`The signpost ${sp.rkey} didn't read back.`);
    out.signposts = { ...(out.signposts || {}), [sp.rkey]: { uri: put.uri, createdAt: record.updatedAt } };
    writePublished(out);
  }
  log('\nPublished, and read back to check.');
  if (lexiconsDue.length) log(`The Wix TXT record _lexicon.way (value did=${ACCOUNT}) must be in place for the lexicons: add it if you haven't.`);
  for (const t of todo) if (published[t.id] && (again || !here(t.id))) log(`The earlier record (${published[t.id].uri}) is still there: delete it in PDSls once you're happy with the new one.`);
  log('Delete this app password (Bluesky: Settings > Privacy and security > App passwords).');
  return { changed: true, published: out };
}

// Where a new signpost leads at first: the tile's `signposts` (Winter Forest's slide: W20), else nowhere.
function firstTo(tiles, sp) {
  const to = tiles[sp.id] && tiles[sp.id].signposts && tiles[sp.id].signposts[sp.exit];
  return Array.isArray(to) ? to.map((d) => ({ ...d })) : [];
}

// Does the account hold this record? (Public: no password needed.)
async function recordExists(fetchImpl, pds, did, collection, rkey) {
  try {
    await getJson(fetchImpl, `${pds}/xrpc/com.atproto.repo.getRecord?repo=${encodeURIComponent(did)}&collection=${collection}&rkey=${encodeURIComponent(rkey)}`);
    return true;
  } catch (err) {
    if (err.error === 'RecordNotFound' || err.status === 404) return false;
    throw err;
  }
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
  runPublish({ ask: io.ask, askHidden: io.askHidden, dryRun: args.includes('--dry-run'), again: args.includes('--again'),
    ...(args.includes('--iso') ? { tiles: ISO_TILES } : args.includes('--forest') ? { tiles: FOREST_TILES } : {}) })
    .catch((err) => { console.error(`\n${err.message}`); process.exitCode = 1; })
    .finally(() => io.close());
}
