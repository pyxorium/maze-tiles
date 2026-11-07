// view.js: what the signpost renderer shows (claude/raku-renderer-tiles-plan.md, "The signpost renderer", SR1 to SR6).
// No DOM here, so it runs in Node for the tests (test/signpost.test.mjs); signpost.js draws it.
//
// The host (Raku, or any page that speaks the tiles spec's data protocol, tp-data) sends the signpost:
//   { uri, cid, did, handle, collection, rkey, value }
// value is the record as stored (cafe.thunderbird.way.signpost, claude/escher-maze-ways-plan.md, M24, plus SR5's name):
//   { name?, to: [{ place? | tile?, entrance?, label? }], note?, updatedAt }
// The record holds addresses, not names. For the real names (SR1, SR2) the tile asks its host for the records it needs
// with { get: "at://…" }; a host that answers (Raku: only addresses in the signpost, or in its own account, SR6) sends
// { got: "at://…", record: { …the same shape… } } or { got, error }. With no answer, the record's own data still shows.

export const SIGNPOST = 'cafe.thunderbird.way.signpost';
export const PLACE = 'cafe.thunderbird.way.place';
export const TILE = 'ing.dasl.masl';
const DID = /^did:(?:plc:[a-z2-7]{24}|web:[a-zA-Z0-9.:%-]{1,200})$/;
const HANDLE = /^(?=.{3,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z][a-z0-9-]{0,61}[a-z0-9]$/i;
const NSID = /^[a-zA-Z][a-zA-Z0-9-]{0,62}(?:\.[a-zA-Z0-9-]{1,63}){2,}$/;
const RKEY = /^[A-Za-z0-9._:~-]{1,512}$/;
const ID = /^[A-Za-z0-9_-]{1,64}$/;      // an exit's, a tile's or an entrance's id, as /ways.json names them
const MAX_TO = 12;                        // the lexicon's maxLength

const clip = (s, n) => {
  if (typeof s !== 'string') return '';
  const t = s.replace(/\s+/g, ' ').trim();
  return t.length > n ? `${t.slice(0, n - 1)}…` : t;
};

/** "Oct 29, 2026", or null for a date that can't be read. */
export function formatDate(iso, locale = 'en-US') {
  if (typeof iso !== 'string' || !iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  try { return d.toLocaleDateString(locale, { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }); }
  catch { return d.toISOString().slice(0, 10); }
}

/** An at:// record address's parts, or null: { actor, collection, rkey } (actor a DID or a handle). */
export function parseRecordUri(uri) {
  if (typeof uri !== 'string' || uri.length > 600) return null;
  const m = /^at:\/\/([^/\s]+)\/([^/\s]+)\/([^/\s]+)$/.exec(uri);
  if (!m || !(DID.test(m[1]) || HANDLE.test(m[1])) || !NSID.test(m[2]) || !RKEY.test(m[3])) return null;
  return { actor: m[1], collection: m[2], rkey: m[3] };
}

/** A name built from an id when the signpost has none (SR5): "slide" → "Slide", "tree-door" → "Tree door". */
export function nameFromId(id) {
  const words = String(id || '').replace(/[-_]+/g, ' ').trim();
  return words ? words[0].toUpperCase() + words.slice(1) : '';
}

/**
 * The signpost, read (no names yet):
 *   { kind: 'signpost', uri, did, by, tileId, exit, exitName, ownPlace, updated, note, to: [destination] }
 *     tileId, exit: from the record key ("winter-forest.slide"; a key with no dot: no tileId, the key is the exit)
 *     ownPlace: the tile's place in the same account (at://did/cafe.thunderbird.way.place/winter-forest), or null
 *     destination: { kind: 'place' | 'tile', uri, actor, rkey, entrance, label }
 *   { kind: 'notsignpost', collection }
 */
export function readSignpost(payload) {
  const p = payload && typeof payload === 'object' ? payload : {};
  if (p.collection !== SIGNPOST || !p.value || typeof p.value !== 'object') {
    return { kind: 'notsignpost', collection: typeof p.collection === 'string' && NSID.test(p.collection) ? p.collection : null };
  }
  const v = p.value;
  const rkey = typeof p.rkey === 'string' && RKEY.test(p.rkey) ? p.rkey : '';
  const dot = rkey.indexOf('.');
  const tileId = dot > 0 && ID.test(rkey.slice(0, dot)) ? rkey.slice(0, dot) : null;
  const exit = tileId ? rkey.slice(dot + 1) : rkey;
  const did = typeof p.did === 'string' && DID.test(p.did) ? p.did : null;
  const handle = typeof p.handle === 'string' && HANDLE.test(p.handle) ? p.handle : null;
  const to = [];
  for (const d of Array.isArray(v.to) ? v.to.slice(0, MAX_TO) : []) {
    if (!d || typeof d !== 'object') continue;
    const kind = typeof d.place === 'string' ? 'place' : typeof d.tile === 'string' ? 'tile' : null;
    const r = kind && parseRecordUri(d[kind]);
    if (!r || r.collection !== (kind === 'place' ? PLACE : TILE)) continue;   // exactly one of place or tile, of its kind
    to.push({ kind, uri: d[kind], actor: r.actor, rkey: r.rkey,
      entrance: typeof d.entrance === 'string' && ID.test(d.entrance) ? d.entrance : null, label: clip(d.label, 100) || null });
  }
  return {
    kind: 'signpost', uri: typeof p.uri === 'string' ? p.uri : null, did, handle,
    tileId, exit, exitName: clip(v.name, 100) || nameFromId(exit) || 'This way',
    ownPlace: tileId && did ? `at://${did}/${PLACE}/${tileId}` : null,
    updated: formatDate(v.updatedAt), note: clip(v.note, 100) || null, to,
  };
}

/** The addresses to ask the host for (SR2): the tile's own place (for the heading), then each destination; no repeats. */
export function wanted(view) {
  if (view.kind !== 'signpost') return [];
  return [...new Set([view.ownPlace, ...view.to.map((d) => d.uri)].filter(Boolean))];
}

/**
 * A host's answer to { get }: [address, { name, did, handle }] for a record it found, or null.
 * A place's name is its own `name`; a tile's is its card's (`tile.name`).
 */
export function readGot(payload) {
  const p = payload && typeof payload === 'object' ? payload : null;
  if (!p || typeof p.got !== 'string' || !p.record || typeof p.record !== 'object') return null;
  const r = p.record, v = r.value && typeof r.value === 'object' ? r.value : {};
  const name = clip(r.collection === TILE ? v.tile && v.tile.name : v.name, 100) || null;
  return [p.got, { name, did: typeof r.did === 'string' && DID.test(r.did) ? r.did : null,
    handle: typeof r.handle === 'string' && HANDLE.test(r.handle) ? r.handle : null }];
}

/**
 * The postcard's lines, from the signpost and the names found so far (names: Map address → { name, did, handle }).
 * Each line is a list of parts: a string, or { tag, value } for record data shown in brackets ([place: maze]).
 */
export function lines(view, names = new Map()) {
  const own = view.ownPlace && names.get(view.ownPlace);
  const heading = view.tileId ? `${view.exitName}, in ${(own && own.name) || view.tileId}` : view.exitName;
  const out = view.tileId ? ['A way out of ', { tag: 'place', value: view.tileId }, ' ', { tag: 'leave/exit', value: view.exit }]
    : ['A way out ', { tag: 'leave/exit', value: view.exit }];
  const by = account(view.handle, view.did);
  const dests = view.to.map((d) => {
    const found = names.get(d.uri) || {};
    const did = found.did || (DID.test(d.actor) ? d.actor : null);
    const handle = found.handle || (HANDLE.test(d.actor) ? d.actor : null);
    const way = ['A way in to ', { tag: d.kind, value: d.rkey }];
    if (d.entrance) way.push(' ', { tag: 'arrive/entrance', value: d.entrance });
    return { label: d.label, way, by: account(handle, did), name: found.name || d.label || d.rkey, uri: d.uri };
  });
  return { heading, out, by, updated: view.updated ? `Updated ${view.updated}.` : null, note: view.note, dests,
    button: dests.length === 1 ? `Go to ${dests[0].name}` : null };
}

// "by @pyxorium.com [did:plc:…]": the handle, then the DID in brackets with no kind word (SR1; a DID starts with did:).
function account(handle, did) {
  if (handle && did) return ['by ', `@${handle}`, ' ', { tag: null, value: did }];
  if (did) return ['by ', { tag: null, value: did }];
  if (handle) return ['by ', `@${handle}`];
  return null;
}

/** Plain text of a line (for tests, and the page's title): [place: maze] for bracketed parts. */
export function textOf(parts) {
  return (parts || []).map((x) => (typeof x === 'string' ? x : x.tag ? `[${x.tag}: ${x.value}]` : `[${x.value}]`)).join('');
}
