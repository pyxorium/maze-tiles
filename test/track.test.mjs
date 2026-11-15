// The track renderer, "Tracks" (track\tile\, claude/mixtape-3c-track-renderer-notes.md, R3c-1 to R3c-9): what it shows
// for what its host sends (view.js: both song kinds, the title card's lines, the credits, links, notes and tags, the
// size line), the answers to its audio and picture requests, the first look, its colours kept in step with the travel
// pages, its page (the data protocol from the host; only audio and picture requests sent), and publishing it with --track.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  readTrack, readAudioAnswer, readPicture, sizeLine, firstLook, longDate, formatTime, formatSize, showOnly, safeLink,
  TRACK, PLYR, LOOKS, AUDIO_ERRORS, BIG_SONG,
} from '../track/tile/view.js';
import { runPublish, ACCOUNT, RESERVED_KEYS } from '../scripts/publish.mjs';
import { TRACK_TILES, ROOT } from '../scripts/tiles.mjs';
import { createFakePds } from './fake-pds.mjs';

const P = 'did:plc:rqbqpaaluty5v47jwciowpik';
const SONG = 'bafkreisongaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const COVER = 'bafkreicoveraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const blob = (cid, size, mimeType = 'audio/mpeg') => ({ $type: 'blob', ref: { $link: cid }, mimeType, size });
const LINEAGE = 'SBD > DAT > ? > CDR > GRIP(wav 16/44.1) > FLAC(16/44.1/Level 8)';
const ours = (value = {}, over = {}) => ({
  uri: `at://${P}/${TRACK}/3n2caaaaaaaag`, cid: 'bafyreirecord', did: P, handle: 'pyxorium.com', collection: TRACK, rkey: '3n2caaaaaaaag',
  value: { $type: TRACK, title: 'Lord Only Knows (Pt. 1)', artist: 'Yonder Mountain String Band', album: 'Yonder Mountain String Band · The Fillmore Auditorium · 2002-04-20',
    trackNumber: 7, duration: 437, fileType: 'webm', audioBlob: blob(SONG, 5_400_000, 'video/webm'),
    recording: { date: '2002-04-20', venue: 'The Fillmore Auditorium', place: 'Denver, CO', set: 'Set 1', taper: 'Jim Smith', source: LINEAGE,
      archiveUrl: 'https://archive.org/details/ymsb2002-04-20.flac16.sbd', policyUrl: 'https://archive.org/details/YonderMountainStringBand' },
    createdAt: '2026-11-15T03:10:00.000Z', ...value }, ...over,
});
const plyr = (value = {}, over = {}) => ({
  uri: `at://${P}/${PLYR}/3kaaaaaaaaab`, cid: 'bafyreiplyr', did: P, handle: 'pyxorium.com', collection: PLYR, rkey: '3kaaaaaaaaab',
  value: { title: 'Jackson Station', artist: 'Band of Heathens', album: 'Band of Heathens · Grey Eagle · 2011-02-17', duration: 237, audioBlob: blob(SONG, 2_900_000), createdAt: '2026-10-01T00:00:00Z', ...value }, ...over,
});

test('an Archive song: the title card\'s lines and every credit (R3c-3)', () => {
  const v = readTrack(ours());
  assert.equal(v.kind, 'track');
  assert.equal(v.source, 'archive');
  assert.equal(v.title, 'Lord Only Knows (Pt. 1)');
  assert.equal(v.artist, 'Yonder Mountain String Band');
  assert.equal(v.where, 'The Fillmore Auditorium, Denver, CO · April 20, 2002');
  assert.equal(v.which, 'Set 1 · track 7 · 7:17');
  assert.deepEqual(v.credits, [['Band', 'Yonder Mountain String Band'], ['Where', 'The Fillmore Auditorium, Denver, CO'], ['When', 'April 20, 2002'], ['Set', 'Set 1'], ['Taper', 'Jim Smith'], ['Source', LINEAGE]]);
  assert.deepEqual(v.links.map((l) => l.text), ['This show on the Live Music Archive ↗', "The band's sharing policy ↗"]);
  assert.equal(v.by, '@pyxorium.com');
  assert.deepEqual(v.audio, { cid: SONG, size: 5_400_000, mime: 'video/webm' });
  assert.equal(v.linkOnly, false);
  assert.equal(v.plyrLink, null);
});

test('a plyr.fm song: no concert credits, "Uploaded through plyr.fm" and its link; the band not twice (R3c-6)', () => {
  const v = readTrack(plyr());
  assert.equal(v.source, 'plyr');
  assert.equal(v.where, 'Grey Eagle · 2011-02-17', 'the show without the band in front');
  assert.equal(v.which, '3:57');
  assert.deepEqual(v.credits, [['Band', 'Band of Heathens'], ['Show', 'Grey Eagle · 2011-02-17'], ['From', 'Uploaded through plyr.fm']]);
  assert.equal(v.plyrLink, `https://plyr.fm/at/${P}/fm.plyr.track/3kaaaaaaaaab`);
  assert.deepEqual(v.links, [{ text: 'Listen on plyr.fm ↗', href: v.plyrLink }]);
  assert.equal(v.linkOnly, false);
});

test('an old plyr.fm song with its audio only on plyr.fm\'s storage: the link only, nothing to fetch', () => {
  const v = readTrack(plyr({ audioBlob: undefined, audioUrl: 'https://x.r2.dev/a.mp3' }));
  assert.equal(v.linkOnly, true);
  assert.equal(v.audio, null);
  assert.equal(v.plyrLink, `https://plyr.fm/at/${P}/fm.plyr.track/3kaaaaaaaaab`);
  assert.deepEqual(v.links, [], 'no "Listen on plyr.fm" in the credits: the player box has it');
});

test('a song that isn\'t from a concert: just its title, artist and the player; recording fields on a plyr.fm record are ignored', () => {
  const v = readTrack(ours({ album: undefined, trackNumber: undefined, recording: undefined, title: 'Rain on the porch roof', artist: 'pyxorium', duration: 182, tags: ['field recording'] }));
  assert.equal(v.where, '');
  assert.equal(v.which, '3:02');
  assert.deepEqual(v.credits, [['Band', 'pyxorium']]);
  assert.deepEqual(v.links, []);
  assert.deepEqual(v.tags, ['field recording']);
  const p = readTrack(plyr({ recording: { taper: 'x', archiveUrl: 'https://archive.org/details/y' } }));
  assert.ok(!p.credits.some(([k]) => k === 'Taper') && !p.links.some((l) => /Archive/.test(l.text)));
});

test('notes keep their line breaks; tags are cut to 20; odd links, handles and values are left out', () => {
  const v = readTrack(ours({ description: 'Set 1:\r\n\r\n\r\nPeace of Mind\nRag Doll  ', tags: Array.from({ length: 25 }, (_, i) => `t${i}`),
    recording: { archiveUrl: 'javascript:alert(1)', policyUrl: 'http://archive.org/x', date: '2002-13-40' } }, { handle: 'not a handle' }));
  assert.equal(v.notes, 'Set 1:\n\nPeace of Mind\nRag Doll');
  assert.equal(v.tags.length, 20);
  assert.deepEqual(v.links, []);
  assert.equal(v.by, P, 'the DID when the handle isn\'t one');
  assert.equal(longDate('2002-13-40'), '2002');
  const odd = readTrack(ours({ title: '', duration: -3, trackNumber: 1.5, audioBlob: { ref: { $link: 'not-a-cid' } } }));
  assert.equal(odd.title, '3n2caaaaaaaag', 'no title: the record key');
  assert.equal(odd.which, 'Set 1');
  assert.equal(odd.audio, null);
  assert.equal(odd.linkOnly, true);
  assert.equal(readTrack(ours({ imageBlob: blob(COVER, 1000, 'image/png') })).cover.cid, COVER);
});

test('not a song: says which kind it is, if that can be read', () => {
  assert.deepEqual(readTrack({ collection: 'app.bsky.feed.like', value: {} }), { kind: 'nottrack', collection: 'app.bsky.feed.like' });
  assert.deepEqual(readTrack({ collection: '<b>', value: {} }), { kind: 'nottrack', collection: null });
  assert.deepEqual(readTrack(null), { kind: 'nottrack', collection: null });
});

test('dates, lengths, sizes, the show without its band, and links', () => {
  assert.equal(longDate('2002-04-20'), 'April 20, 2002');
  assert.equal(longDate('2002-04'), 'April 2002');
  assert.equal(longDate('2002'), '2002');
  assert.equal(longDate('April'), '');
  assert.equal(formatTime(437), '7:17');
  assert.equal(formatTime(3852), '1:04:12');
  assert.equal(formatTime(NaN), '');
  assert.equal(formatSize(5_242_880), '5.0 MB');
  assert.equal(formatSize(47_300_000), '45 MB', 'as the Foundry counts (1 MB = 1,048,576 bytes)');
  assert.equal(showOnly('Galactic', 'Galactic · Moguls · 1997-08-15'), 'Moguls · 1997-08-15');
  assert.equal(showOnly('Galactic', 'Moguls 1997'), 'Moguls 1997');
  assert.equal(safeLink('https://archive.org/details/x'), 'https://archive.org/details/x');
  assert.equal(safeLink('http://archive.org/details/x'), null);
  assert.equal(safeLink('https://localhost/x'), null);
});

test('the Play line before fetching: its size, and "best on Wi-Fi" over 30 MB (R3c-7)', () => {
  assert.equal(sizeLine({ size: 5_242_880 }), '5.0 MB · fetched when you press play');
  assert.equal(sizeLine({ size: BIG_SONG + 1 }), '30 MB · best on Wi-Fi');
  assert.equal(sizeLine({ size: 0 }), '');
});

test('the host\'s answers to the audio request: progress, the bytes, refusals; others\' answers ignored (R3c-4)', () => {
  const asked = { cid: SONG, from: `at://${P}/${TRACK}/3n2caaaaaaaag`, size: 1000 };
  assert.deepEqual(readAudioAnswer({ audioProgress: SONG, from: asked.from, received: 420, total: 1000 }, asked), { kind: 'progress', pct: 42, received: 420 });
  assert.equal(readAudioAnswer({ audioProgress: SONG, from: asked.from, received: 1000, total: 1000 }, asked).pct, 99, 'never 100 before the bytes come');
  assert.equal(readAudioAnswer({ audioProgress: SONG, from: asked.from, received: 500 }, asked).pct, 50, 'no total: the record\'s size');
  const bytes = new ArrayBuffer(8);
  assert.deepEqual(readAudioAnswer({ gotAudio: SONG, from: asked.from, type: 'audio/webm', bytes }, asked), { kind: 'audio', type: 'audio/webm', bytes });
  assert.deepEqual(readAudioAnswer({ gotAudio: SONG, from: asked.from, type: 'image/png', bytes }, asked), { kind: 'error', error: 'not-audio' });
  assert.deepEqual(readAudioAnswer({ gotAudio: SONG, from: asked.from, error: 'too-big' }, asked), { kind: 'error', error: 'too-big' });
  assert.deepEqual(readAudioAnswer({ gotAudio: SONG, from: asked.from, error: 'something new' }, asked), { kind: 'error', error: 'not-found' });
  assert.equal(readAudioAnswer({ gotAudio: 'bafkreiother', from: asked.from, type: 'audio/mpeg', bytes }, asked), null);
  assert.equal(readAudioAnswer({ gotAudio: SONG, from: 'at://someone/else/x', type: 'audio/mpeg', bytes }, asked), null);
  assert.equal(readAudioAnswer({ gotAudio: SONG, from: asked.from, type: 'audio/mpeg', bytes }, null), null, 'nothing asked');
  for (const e of ['not-allowed', 'too-many', 'too-big', 'not-audio', 'changed', 'not-found', 'no-answer', 'cant-play']) assert.ok(AUDIO_ERRORS[e], e);
});

test('the cover\'s picture answer', () => {
  const asked = { cid: COVER, from: 'at://x/y/z' };
  assert.deepEqual(readPicture({ gotPicture: COVER, from: 'at://x/y/z', type: 'image/png', bytes: new ArrayBuffer(4) }, asked).ok, true);
  assert.deepEqual(readPicture({ gotPicture: COVER, from: 'at://x/y/z', error: 'too-big' }, asked), { ok: false });
  assert.equal(readPicture({ gotPicture: 'bafkreiother', from: 'at://x/y/z', type: 'image/png', bytes: 1 }, asked), null);
});

test('the first look: the one chosen before, else Plain when the device asks for less motion, else the Jukebox (R3c-1, R3c-7)', () => {
  assert.deepEqual(LOOKS.map((l) => l.id), ['jukebox', 'reel', 'scope', 'plain']);
  assert.equal(firstLook(null, false), 'jukebox');
  assert.equal(firstLook(null, true), 'plain');
  assert.equal(firstLook('scope', true), 'scope', 'a look chosen before wins');
  assert.equal(firstLook('disco', false), 'jukebox');
});

test('its colours are the travel pages\' and the other renderers\': the :root line is the same', () => {
  const rootOf = (f) => (readFileSync(join(ROOT, f), 'utf8').match(/:root \{[^}]*--accent[^}]*\}/) || [''])[0];
  assert.ok(rootOf('site/way.css'));
  assert.equal(rootOf('track/tile/track.css'), rootOf('site/way.css'));
});

test('the page: off the network; the data protocol from the host; it only ever asks for audio and pictures', () => {
  const html = readFileSync(join(ROOT, 'track', 'tile', 'index.html'), 'utf8');
  assert.match(html, /http-equiv="Content-Security-Policy" content="[^"]*connect-src 'self'/);
  assert.match(html, /media-src 'self' blob:/);
  assert.match(html, /script-src 'self'/);
  const js = readFileSync(join(ROOT, 'track', 'tile', 'track.js'), 'utf8');
  assert.match(js, /import\('\/\.well-known\/web-tiles\/data\.js'\)/);
  assert.ok(js.indexOf('addDataHandler(onPayload)') < js.indexOf('api.listen()'), 'the handler is added before listen() (data.js buffers nothing)');
  assert.deepEqual([...js.matchAll(/ask\(\{ (\w+):/g)].map((m) => m[1]).sort(), ['audio', 'picture']);
  assert.ok(!/fetch\(|XMLHttpRequest|WebSocket/.test(js), 'no network of its own');
  for (const f of ['track.js', 'view.js', 'looks.js']) assert.ok(!/innerHTML/.test(readFileSync(join(ROOT, 'track', 'tile', f), 'utf8')), `${f}: drawn with DOM calls only`);
  for (const f of [...TRACK_TILES['track-renderer'].files, ...TRACK_TILES['track-renderer'].cards]) assert.ok(readFileSync(join(ROOT, 'track', 'tile', f)).length > 0, f);
});

test('--track: one tile from thunderbird.cafe, with its card pictures; nothing else; it prints the pin for both song kinds', async () => {
  assert.ok(!RESERVED_KEYS.includes('track-renderer'));
  const pds = createFakePds({ did: ACCOUNT, handle: 'thunderbird.cafe' });
  const placesBefore = { maze: { uri: `at://${P}/cafe.thunderbird.way.place/maze`, cid: 'bafy-p2', tile: `at://${P}/ing.dasl.masl/3myyjuyr2ja2s`, tileCid: 'bafy-m', updatedAt: '2026-10-29T05:29:18.784Z' } };
  let published = { 'place-renderer': { uri: `at://${ACCOUNT}/ing.dasl.masl/3mzp2cmnlwa26`, cid: 'bafy-pl' }, places: structuredClone(placesBefore) };
  const logs = [];
  const opts = {
    fetchImpl: pds.fetchImpl, log: (s) => logs.push(s), ask: async () => 'y', askHidden: async () => 'right-password',
    readPublished: () => published, writePublished: (o) => { published = o; }, checkBundle: async () => { throw new Error('no bundle to check'); },
    now: () => '2026-11-15T12:00:00.000Z', tiles: TRACK_TILES,
  };
  const dry = await runPublish({ ...opts, dryRun: true });
  assert.deepEqual(dry.plan.map((t) => t.id), ['track-renderer']);
  assert.deepEqual([dry.lexiconsDue, dry.placesDue, dry.signpostsDue], [[], [], []]);
  const r = await runPublish(opts);
  assert.equal(r.changed, true);
  const t = published['track-renderer'];
  assert.match(t.uri, new RegExp(`^at://${ACCOUNT}/ing.dasl.masl/`));
  const value = pds.records.get(`ing.dasl.masl/${t.uri.split('/').pop()}`).value;
  assert.equal(value.tile.name, 'Tracks');
  assert.deepEqual(Object.keys(value.tile.resources).sort(), ['/', '/banner.png', '/icon.png', '/looks.js', '/track.css', '/track.js', '/view.js']);
  assert.deepEqual(value.tile.icons, [{ src: '/icon.png' }]);
  assert.deepEqual(value.tile.screenshots, [{ src: '/banner.png' }]);
  assert.deepEqual(published.places, placesBefore, 'the place records\' bookkeeping untouched');
  assert.equal(published['place-renderer'].uri, `at://${ACCOUNT}/ing.dasl.masl/3mzp2cmnlwa26`, 'Places\' entry untouched');
  assert.ok(!pds.calls.some((c) => /putRecord/.test(c)), 'no place written');
  assert.ok(logs.some((l) => l.includes(`RENDERERS ('${TRACK}', '${PLYR}'): uri '${t.uri}', cid '${t.cid}'`)), 'it prints the pin for Raku, naming both kinds');
  assert.ok(!logs.some((l) => /signpost|lexicon/i.test(l)), 'nothing about ways');
});
