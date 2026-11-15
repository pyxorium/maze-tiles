// view.js: what the track renderer ("Tracks") shows for what its host sent (claude/mixtape-3c-track-renderer-notes.md,
// R3c-1 to R3c-9). No DOM here, so it runs in Node for the tests (test/track.test.mjs); track.js draws it.
//
// The host (Raku, or any page that speaks the tiles spec's data protocol, tp-data) sends one payload:
//   { uri, cid, did, handle, collection, rkey, value }
// value is the record exactly as stored: a song of ours (cafe.thunderbird.audio.track: title, artist, album,
// trackNumber, duration, audioBlob, fileType, description, tags, imageBlob, recording { date, venue, place, set, taper,
// source, archiveUrl, policyUrl }) or a plyr.fm song (fm.plyr.track: the same basic field names, R3-A1; its audio
// either in the account's own storage, audioBlob, or only on plyr.fm's, audioUrl).
//
// Then the song itself, asked for when the listener presses Play (R3c-4):
//   tile → host   { audio: "<blob cid>", from: "<record uri>" }
//   host → tile   { audioProgress: "<cid>", from, received, total }      (any number, while it downloads)
//                 { gotAudio: "<cid>", from, type, bytes }  or  { gotAudio, from, error }
// and the cover, when the record has one, through the host's picture request (as Places does):
//   tile → host   { picture: "<blob cid>", from }   host → tile  { gotPicture, from, type, bytes }  or  { gotPicture, from, error }

export const TRACK = 'cafe.thunderbird.audio.track';
export const PLYR = 'fm.plyr.track';
export const KINDS = [TRACK, PLYR];
export const LOOKS = Object.freeze([
  { id: 'jukebox', name: 'Jukebox' },
  { id: 'reel', name: 'Reel-to-reel' },
  { id: 'scope', name: 'Oscilloscope' },
  { id: 'plain', name: 'Plain' },
]);
export const SCOPE_COLOURS = Object.freeze([{ id: 'green', name: 'Green' }, { id: 'rainbow', name: 'Rainbow' }]);
export const BIG_SONG = 30 * 1024 * 1024;         // above this, the Play line says "best on Wi-Fi" (R3c-7)
export const AUDIO_TYPES = ['audio/mpeg', 'audio/webm', 'audio/ogg', 'audio/flac', 'audio/wav', 'audio/mp4'];
export const PICTURE_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'];

const DID = /^did:(?:plc:[a-z2-7]{24}|web:[a-zA-Z0-9.:%-]{1,200})$/;
const HANDLE = /^(?=.{3,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z][a-z0-9-]{0,61}[a-z0-9]$/i;
const NSID = /^[a-zA-Z][a-zA-Z0-9-]{0,62}(?:\.[a-zA-Z0-9-]{1,63}){2,}$/;
const RKEY = /^[A-Za-z0-9._:~-]{1,512}$/;
const CID = /^b[a-z2-7]{20,120}$/;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const str = (s, n) => {
  if (typeof s !== 'string') return '';
  const t = s.replace(/\s+/g, ' ').trim();
  return t.length > n ? `${t.slice(0, n - 1)}…` : t;
};
// Text whose line breaks matter (liner notes): tidied, not flattened.
const text = (s, n) => {
  if (typeof s !== 'string') return '';
  const t = s.replace(/\r\n?/g, '\n').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  return t.length > n ? `${t.slice(0, n - 1)}…` : t;
};

/** An https address to link to, or null (never javascript:, data: or http:). */
export function safeLink(u) {
  if (typeof u !== 'string' || u.length > 2000) return null;
  try { const x = new URL(u.trim()); return x.protocol === 'https:' && x.hostname.includes('.') ? x.href : null; } catch { return null; }
}

/** A recording date written out: "2002-04-20" → "April 20, 2002"; "2002-04" → "April 2002"; "2002" → "2002". */
export function longDate(d) {
  const m = /^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/.exec(typeof d === 'string' ? d.trim() : '');
  if (!m) return '';
  const month = m[2] ? MONTHS[Number(m[2]) - 1] : null;
  if (m[2] && !month) return m[1];
  if (m[3]) return `${month} ${Number(m[3])}, ${m[1]}`;
  if (m[2]) return `${month} ${m[1]}`;
  return m[1];
}

/** A length: 437 → "7:17"; 3852 → "1:04:12"; nothing for a length that isn't one. */
export function formatTime(s) {
  if (!Number.isFinite(s) || s < 0) return '';
  const t = Math.round(s), h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), x = t % 60;
  return h ? `${h}:${String(m).padStart(2, '0')}:${String(x).padStart(2, '0')}` : `${m}:${String(x).padStart(2, '0')}`;
}

/** A size as the Foundry writes it (1 MB = 1,048,576 bytes): "5.0 MB", "45 MB". */
export function formatSize(n) {
  if (!Number.isFinite(n) || n <= 0) return '';
  const mb = n / 1048576;
  return mb >= 10 ? `${Math.round(mb)} MB` : `${mb.toFixed(1)} MB`;
}

/** The show without its band in front ("Yonder Mountain String Band · The Fillmore · 2002-04-20" → "The Fillmore · 2002-04-20"). */
export function showOnly(artist, album) {
  const a = (artist || '').trim(), b = (album || '').trim();
  return a && b.toLowerCase().startsWith(`${a.toLowerCase()} · `) ? b.slice(a.length + 3) : b;
}

const blobOf = (b) => {
  const cid = b && typeof b === 'object' && b.ref && typeof b.ref.$link === 'string' ? b.ref.$link : null;
  if (!cid || !CID.test(cid)) return null;
  const size = Number(b.size);
  return { cid, size: Number.isFinite(size) && size > 0 ? size : 0, mime: typeof b.mimeType === 'string' ? b.mimeType.slice(0, 80) : '' };
};

/**
 * What to show for a payload:
 *   { kind: 'track', source: 'archive' | 'plyr', uri, did, rkey, by, title, artist, album, where, which, duration,
 *     credits: [[label, value]…], links: [{ text, href }…], notes, tags, audio: { cid, size, mime } | null,
 *     cover: { cid } | null, plyrLink: string | null, linkOnly }
 *   { kind: 'nottrack', collection }   collection: the record's kind, or null when it can't be read
 */
export function readTrack(payload) {
  const p = payload && typeof payload === 'object' ? payload : {};
  if (!KINDS.includes(p.collection) || !p.value || typeof p.value !== 'object') {
    return { kind: 'nottrack', collection: typeof p.collection === 'string' && NSID.test(p.collection) ? p.collection : null };
  }
  const v = p.value;
  const source = p.collection === PLYR ? 'plyr' : 'archive';
  const did = typeof p.did === 'string' && DID.test(p.did) ? p.did : null;
  const rkey = typeof p.rkey === 'string' && RKEY.test(p.rkey) ? p.rkey : '';
  const by = typeof p.handle === 'string' && HANDLE.test(p.handle) ? `@${p.handle}` : did;
  const title = str(v.title, 300) || rkey || 'Untitled';
  const artist = str(v.artist, 200);
  const album = str(v.album, 300);
  const rec = source === 'archive' && v.recording && typeof v.recording === 'object' ? v.recording : {};
  const venue = str(rec.venue, 200), place = str(rec.place, 200), when = longDate(rec.date), set = str(rec.set, 60);
  const duration = Number.isFinite(Number(v.duration)) && Number(v.duration) > 0 ? Number(v.duration) : 0;
  const trackNumber = Number.isInteger(v.trackNumber) && v.trackNumber > 0 && v.trackNumber < 10000 ? v.trackNumber : 0;
  const where = venue || place || when ? [[venue, place].filter(Boolean).join(', '), when].filter(Boolean).join(' · ') : showOnly(artist, album);
  const which = [set, trackNumber ? `track ${trackNumber}` : '', duration ? formatTime(duration) : ''].filter(Boolean).join(' · ');

  const credits = [];
  const row = (k, x) => { if (x) credits.push([k, x]); };
  row('Band', artist);
  if (venue || place || when) { row('Where', [venue, place].filter(Boolean).join(', ')); row('When', when); }
  else row('Show', showOnly(artist, album));
  row('Set', set);
  row('Taper', str(rec.taper, 200));
  row('Source', str(rec.source, 500));
  if (source === 'plyr') row('From', 'Uploaded through plyr.fm');

  const audio = blobOf(v.audioBlob);
  const plyrLink = source === 'plyr' && did && rkey ? `https://plyr.fm/at/${did}/${PLYR}/${rkey}` : null;
  const links = [];
  const archive = safeLink(rec.archiveUrl), policy = safeLink(rec.policyUrl);
  if (archive) links.push({ text: 'This show on the Live Music Archive ↗', href: archive });
  if (policy) links.push({ text: "The band's sharing policy ↗", href: policy });
  if (plyrLink && audio) links.push({ text: 'Listen on plyr.fm ↗', href: plyrLink });

  const tags = Array.isArray(v.tags) ? v.tags.map((t) => str(t, 50)).filter(Boolean).slice(0, 20) : [];
  const coverBlob = blobOf(v.imageBlob);
  return {
    kind: 'track', source, uri: typeof p.uri === 'string' ? p.uri : '', did, rkey, by, title, artist, album, where, which, duration,
    credits, links, notes: text(v.description, 5000), tags, audio,
    cover: coverBlob ? { cid: coverBlob.cid } : null,
    plyrLink, linkOnly: !audio,
  };
}

/** The Play line before anything is fetched: "5.0 MB · fetched when you press play", or "45 MB · best on Wi-Fi". */
export function sizeLine(audio) {
  if (!audio || !audio.size) return '';
  return audio.size > BIG_SONG ? `${formatSize(audio.size)} · best on Wi-Fi` : `${formatSize(audio.size)} · fetched when you press play`;
}

/** Why a song can't play here, from the host's error word (R3c-4). */
export const AUDIO_ERRORS = Object.freeze({
  'not-allowed': "Raku won't fetch this song for this tile.",
  'too-many': 'This tab has fetched as many songs as it may. Reload it to listen again.',
  'too-big': "This song's file is larger than Raku fetches (100 MB).",
  'not-audio': "The song's file isn't one this tile can play.",
  changed: "The file on the server doesn't match the song's record.",
  'not-found': "Raku couldn't fetch the song from its account's server.",
  'no-answer': 'No answer from the page showing this tile.',
  'cant-play': "This browser can't play this song's file.",
});

/**
 * An answer to the audio request, matched to what was asked ({ cid, from }):
 *   { kind: 'progress', pct }   { kind: 'audio', type, bytes }   { kind: 'error', error }   or null when it isn't ours.
 */
export function readAudioAnswer(payload, asked) {
  if (!payload || typeof payload !== 'object' || !asked) return null;
  if (typeof payload.audioProgress === 'string') {
    if (payload.audioProgress !== asked.cid || payload.from !== asked.from) return null;
    const total = Number(payload.total) > 0 ? Number(payload.total) : asked.size || 0;
    const got = Number(payload.received) || 0;
    return { kind: 'progress', pct: total ? Math.max(0, Math.min(99, Math.floor((got / total) * 100))) : null, received: got };
  }
  if (typeof payload.gotAudio !== 'string' || payload.gotAudio !== asked.cid || payload.from !== asked.from) return null;
  if (typeof payload.error === 'string') return { kind: 'error', error: AUDIO_ERRORS[payload.error] ? payload.error : 'not-found' };
  const bytes = payload.bytes;
  const ok = bytes && (bytes instanceof ArrayBuffer || (typeof bytes === 'object' && typeof bytes.byteLength === 'number'));
  if (!ok || !AUDIO_TYPES.includes(payload.type)) return { kind: 'error', error: 'not-audio' };
  return { kind: 'audio', type: payload.type, bytes };
}

/** An answer to the cover's picture request: { ok, type, bytes } or { ok: false }, or null when it isn't ours. */
export function readPicture(payload, asked) {
  if (!payload || typeof payload !== 'object' || !asked || payload.gotPicture !== asked.cid || payload.from !== asked.from) return null;
  if (typeof payload.error === 'string' || !PICTURE_TYPES.includes(payload.type) || !payload.bytes) return { ok: false };
  return { ok: true, type: payload.type, bytes: payload.bytes };
}

/** The first look (R3c-1, R3c-7): the one chosen before, else Plain when the device asks for less motion, else Jukebox. */
export function firstLook(remembered, lessMotion) {
  if (LOOKS.some((l) => l.id === remembered)) return remembered;
  return lessMotion ? 'plain' : 'jukebox';
}
