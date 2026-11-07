// view.js: what the place renderer shows for what its host sent (claude/raku-renderer-tiles-plan.md, RT4 and RT6).
// No DOM here, so it runs in Node for the tests (test/place.test.mjs); place.js draws it.
//
// The host (Raku, or any page that speaks the tiles spec's data protocol, tp-data) sends one payload:
//   { uri, cid, did, handle, collection, rkey, value }
// value is the record exactly as stored. For a place (cafe.thunderbird.way.place, claude/escher-maze-ways-plan.md,
// M24) that is { tile, cid, name, updatedAt }.
//
// Then the tile's card (claude/raku-places-card-plan.md, PC1 to PC6): the tile asks its host for the tile record behind
// the place, { get: <tile> }, and for one picture named in it, { picture: <blob cid>, from: <record uri> }. The answers:
//   { got, record: { uri, cid, did, handle, collection, rkey, value } }  or  { got, error }
//   { gotPicture, from, type, bytes }                                     or  { gotPicture, from, error }
// A host that doesn't answer leaves the card as it was before (the tile's address only).

export const PLACE = 'cafe.thunderbird.way.place';
const TILE_URI = /^at:\/\/(did:(?:plc:[a-z2-7]{24}|web:[a-zA-Z0-9.:%-]{1,200}))\/ing\.dasl\.masl\/([A-Za-z0-9._:~-]{1,512})$/;
const DID = /^did:(?:plc:[a-z2-7]{24}|web:[a-zA-Z0-9.:%-]{1,200})$/;
const HANDLE = /^(?=.{3,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z][a-z0-9-]{0,61}[a-z0-9]$/i;
const NSID = /^[a-zA-Z][a-zA-Z0-9-]{0,62}(?:\.[a-zA-Z0-9-]{1,63}){2,}$/;
const RKEY = /^[A-Za-z0-9._:~-]{1,512}$/;
const CID = /^b[a-z2-7]{20,120}$/;
export const TILE_NSID = 'ing.dasl.masl';
export const PICTURE_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'];
export const PICTURE_MAX = 1024 * 1024;

const who = (handle, did) => (typeof handle === 'string' && HANDLE.test(handle) ? `@${handle}`
  : typeof did === 'string' && DID.test(did) ? did : null);
const clip = (s, n) => {
  if (typeof s !== 'string') return '';
  const t = s.replace(/\s+/g, ' ').trim();
  return t.length > n ? `${t.slice(0, n - 1)}…` : t;
};

/** "Oct 28, 2026", or null for a date that can't be read. */
export function formatDate(iso, locale = 'en-US') {
  if (typeof iso !== 'string' || !iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  try { return d.toLocaleDateString(locale, { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }); }
  catch { return d.toISOString().slice(0, 10); }
}

/**
 * What to show for a payload:
 *   { kind: 'place', name, by, updated, tile, pinned }   tile: the tile's at:// address, or null when the place
 *                                                 points at nothing a host could open; pinned: the tile record's
 *                                                 version the place was pointed at (its cid), or null
 *   { kind: 'notplace', collection }              collection: the record's kind, or null when it can't be read
 */
export function readPlace(payload) {
  const p = payload && typeof payload === 'object' ? payload : {};
  if (p.collection !== PLACE || !p.value || typeof p.value !== 'object') {
    return { kind: 'notplace', collection: typeof p.collection === 'string' && NSID.test(p.collection) ? p.collection : null };
  }
  const v = p.value;
  const rkey = typeof p.rkey === 'string' && RKEY.test(p.rkey) ? p.rkey : '';
  const name = clip(v.name, 100) || rkey || 'This place';
  const by = who(p.handle, p.did);
  const tile = typeof v.tile === 'string' && TILE_URI.test(v.tile) ? v.tile : null;
  const pinned = typeof v.cid === 'string' && CID.test(v.cid) ? v.cid : null;
  return { kind: 'place', name, by, updated: formatDate(v.updatedAt), tile, pinned };
}

/** The line under the name: "A place by @thunderbird.cafe. Updated Oct 28, 2026." */
export function byLine(view) {
  const who = view.by ? `A place by ${view.by}.` : 'A place.';
  return view.updated ? `${who} Updated ${view.updated}.` : who;
}

// ---------- the tile's card (PC1 to PC6) ----------

/** The blob cid of the first picture a tile record lists in `list` (screenshots or icons) that has a file. */
function pictureOf(tile, list) {
  const items = Array.isArray(tile[list]) ? tile[list] : [];
  const res = tile.resources && typeof tile.resources === 'object' ? tile.resources : {};
  for (const it of items.slice(0, 8)) {
    const src = it && typeof it.src === 'string' ? res[it.src]?.src : null;
    const cid = src && (src.$link || src.ref?.$link);
    if (typeof cid === 'string' && CID.test(cid)) return cid;
  }
  return null;
}

/**
 * The host's answer to the tile's { get } for the place's tile (`view` from readPlace), or null when the payload
 * isn't that answer:
 *   { kind: 'card', name, by, published, description, picture: { cid, from, use: 'banner' | 'icon' } | null, changed }
 *   { kind: 'error', error: 'not-found' | 'hidden' }     PC5's two messages
 *   { kind: 'none' }                                     any other refusal, or an answer that isn't a tile: today's card
 */
export function readTileCard(payload, view) {
  if (!payload || typeof payload !== 'object' || typeof payload.got !== 'string' || !view || !view.tile || payload.got !== view.tile) return null;
  if (typeof payload.error === 'string') return payload.error === 'not-found' || payload.error === 'hidden' ? { kind: 'error', error: payload.error } : { kind: 'none' };
  const r = payload.record;
  const t = r && typeof r === 'object' && r.collection === TILE_NSID && r.value && typeof r.value === 'object' ? r.value.tile : null;
  if (!t || typeof t !== 'object' || !t.resources || typeof t.resources !== 'object') return { kind: 'none' };
  const rkey = typeof r.rkey === 'string' && RKEY.test(r.rkey) ? r.rkey : '';
  const uri = typeof r.uri === 'string' && TILE_URI.test(r.uri) ? r.uri : null;
  const banner = pictureOf(t, 'screenshots');
  const icon = banner ? null : pictureOf(t, 'icons');
  const cid = typeof r.cid === 'string' && CID.test(r.cid) ? r.cid : null;
  return {
    kind: 'card',
    name: clip(t.name, 100) || rkey || 'This tile',
    by: who(r.handle, r.did),
    published: formatDate(r.value.createdAt),
    description: clip(t.description, 2000),
    picture: uri && (banner || icon) ? { cid: banner || icon, from: uri, use: banner ? 'banner' : 'icon' } : null,
    changed: !!(cid && view.pinned && cid !== view.pinned),
  };
}

/**
 * The host's answer to the tile's { picture } (`asked`: { cid, from }), or null when the payload isn't that answer:
 *   { ok: true, type, bytes }   bytes: an ArrayBuffer of at most PICTURE_MAX, type one of PICTURE_TYPES
 *   { ok: false }               refused, or not a picture the tile will show (the card goes on without one)
 */
export function readPicture(payload, asked) {
  if (!payload || typeof payload !== 'object' || !asked || payload.gotPicture !== asked.cid || payload.from !== asked.from) return null;
  if (typeof payload.error === 'string') return { ok: false };
  const b = payload.bytes;
  const bytes = b instanceof ArrayBuffer ? b : ArrayBuffer.isView(b) ? b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) : null;
  if (!bytes || !bytes.byteLength || bytes.byteLength > PICTURE_MAX || !PICTURE_TYPES.includes(payload.type)) return { ok: false };
  return { ok: true, type: payload.type, bytes };
}

/** The line under the tile's name: "A tile by @thunderbird.cafe. Published Oct 28, 2026." */
export function tileByLine(card) {
  const w = card.by ? `A tile by ${card.by}.` : 'A tile.';
  return card.published ? `${w} Published ${card.published}.` : w;
}

/** PC4: the tile record isn't the version the place was pointed at (the travel pages refuse it). */
export function changedLine(view) {
  const when = view.updated ? ` (${view.updated})` : '';
  return `This tile has been changed since the ${view.name} place was pointed at it${when}, so portals in other tiles won't lead to it until the place is updated. Step into from this place opens the changed tile anyway.`;
}

/** PC5: when the host can't read the tile. */
export const CANT_READ = {
  'not-found': "Raku couldn't find this tile. It may have been deleted, or its author's server may not be answering right now.",
  hidden: "Raku doesn't show this tile.",
};

/** The line above the tile's address (as before). */
export const keepsLine = (view) => `A place keeps the same address even when its tile is replaced. Right now, ${view.name} is this tile:`;
