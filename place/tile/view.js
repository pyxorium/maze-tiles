// view.js: what the place renderer shows for what its host sent (claude/raku-renderer-tiles-plan.md, RT4 and RT6).
// No DOM here, so it runs in Node for the tests (test/place.test.mjs); place.js draws it.
//
// The host (Raku, or any page that speaks the tiles spec's data protocol, tp-data) sends one payload:
//   { uri, cid, did, handle, collection, rkey, value }
// value is the record exactly as stored. For a place (cafe.thunderbird.way.place, claude/escher-maze-ways-plan.md,
// M24) that is { tile, cid, name, updatedAt }.

export const PLACE = 'cafe.thunderbird.way.place';
const TILE_URI = /^at:\/\/(did:(?:plc:[a-z2-7]{24}|web:[a-zA-Z0-9.:%-]{1,200}))\/ing\.dasl\.masl\/([A-Za-z0-9._:~-]{1,512})$/;
const DID = /^did:(?:plc:[a-z2-7]{24}|web:[a-zA-Z0-9.:%-]{1,200})$/;
const HANDLE = /^(?=.{3,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z][a-z0-9-]{0,61}[a-z0-9]$/i;
const NSID = /^[a-zA-Z][a-zA-Z0-9-]{0,62}(?:\.[a-zA-Z0-9-]{1,63}){2,}$/;
const RKEY = /^[A-Za-z0-9._:~-]{1,512}$/;

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
 *   { kind: 'place', name, by, updated, tile }   tile: the tile's at:// address, or null when the place points at
 *                                                 nothing a host could open
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
  const by = typeof p.handle === 'string' && HANDLE.test(p.handle) ? `@${p.handle}`
    : typeof p.did === 'string' && DID.test(p.did) ? p.did : null;
  const tile = typeof v.tile === 'string' && TILE_URI.test(v.tile) ? v.tile : null;
  return { kind: 'place', name, by, updated: formatDate(v.updatedAt), tile };
}

/** The line under the name: "A place by @thunderbird.cafe. Updated Oct 28, 2026." */
export function byLine(view) {
  const who = view.by ? `A place by ${view.by}.` : 'A place.';
  return view.updated ? `${who} Updated ${view.updated}.` : who;
}
