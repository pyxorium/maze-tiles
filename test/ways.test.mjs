// Ways (claude/escher-maze-ways-plan.md, M17 to M25): tile/ways.json, the map's waystone and entrance, the
// lexicons, and src/ways.js talking to a stand-in host (a fake window: the tile in a frame, its parent the page).
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { MAP } from '../src/map.js';
import { heightsOf, DIRS } from '../src/walk.js';
import { WAYS, joinWays, UP, DOWN, PLAIN_AFTER_MS } from '../src/ways.js';
import { ACCOUNT, PLACE, SIGNPOST } from '../scripts/publish.mjs';

const RKEY = /^[A-Za-z0-9._:~-]{1,512}$/;          // atproto record keys
const ID = /^[a-z0-9]+(-[a-z0-9]+)*$/;             // our tile and exit ids (M19)

test('ways.json: the maze, its place, one exit with its signpost and fallback, one entrance (M17 to M21)', () => {
  assert.equal(WAYS.v, 1);
  assert.equal(WAYS.tile, 'maze');
  assert.equal(WAYS.place, `at://${ACCOUNT}/${PLACE}/maze`);
  assert.equal(WAYS.exits.length, 1, 'the obelisk is the only way out (M17)');
  const [ex] = WAYS.exits;
  assert.equal(ex.id, 'obelisk');
  assert.equal(ex.signpost, `at://${ACCOUNT}/${SIGNPOST}/maze.obelisk`, 'names match (M20)');
  assert.equal(ex.fallback, 'https://thunderbird.cafe/way/maze/obelisk');
  assert.deepEqual(WAYS.entrances, [{ id: 'obelisk' }], 'travellers arrive at the obelisk (M18)');
  // The shapes, for every exit: /way/<tile id>/<exit id>, the signpost named <tile id>.<exit id>.
  for (const e of WAYS.exits) {
    assert.match(WAYS.tile, ID); assert.match(e.id, ID);
    assert.equal(e.fallback, `https://thunderbird.cafe/way/${WAYS.tile}/${e.id}`);
    assert.match(e.signpost.split('/').pop(), RKEY);
    assert.equal(e.signpost.split('/').pop(), `${WAYS.tile}.${e.id}`);
  }
  assert.match(WAYS.place.split('/').pop(), RKEY);
});

test('ways.json and the map agree: every exit is a waystone, every entrance a spot in a room', () => {
  const stones = Object.values(MAP.rooms).flatMap((r) => (r.marks || []).filter((m) => m.waystone).map((m) => m.waystone.exit));
  assert.deepEqual(stones.sort(), WAYS.exits.map((e) => e.id).sort());
  const entrances = Object.values(MAP.rooms).flatMap((r) => (r.entrances || []).map((e) => e.id));
  assert.deepEqual(entrances.sort(), WAYS.entrances.map((e) => e.id).sort());
});

test('the obelisk\'s entrance: on the floor beside it, facing a long clear stretch of the Great Hall (M18)', () => {
  const hall = MAP.rooms.hall;
  const e = hall.entrances[0];
  const ob = hall.marks.find((m) => m.kind === 'obelisk');
  assert.equal(Math.abs(e.at[0] - ob.at[0]) + Math.abs(e.at[1] - ob.at[1]), 1, 'beside the obelisk');
  const h = heightsOf(hall);
  assert.equal(h.get(`${e.at[0]},${e.at[1]}`), 0, 'on the floor');
  let [x, y] = e.at, n = 0;
  for (;;) { x += DIRS[e.facing][0]; y += DIRS[e.facing][1]; if (!h.has(`${x},${y}`) || h.get(`${x},${y}`) !== 0) break; n++; }
  assert.ok(n >= 4, `${n} clear blocks ahead`);
  const w = hall.ways.find((x) => x.side === e.facing && x.at === e.at[1]);
  assert.ok(w, 'looking down the hall at a way on (the Cellar\'s stairs)');
});

test('the lexicons: the place and the signpost, as M24 says', () => {
  const place = JSON.parse(readFileSync(new URL('../lexicons/cafe.thunderbird.way.place.json', import.meta.url), 'utf8'));
  const sign = JSON.parse(readFileSync(new URL('../lexicons/cafe.thunderbird.way.signpost.json', import.meta.url), 'utf8'));
  assert.equal(place.id, PLACE); assert.equal(sign.id, SIGNPOST);
  for (const l of [place, sign]) { assert.equal(l.lexicon, 1); assert.equal(l.defs.main.type, 'record'); assert.equal(l.defs.main.key, 'any'); }
  const pp = place.defs.main.record;
  assert.deepEqual(pp.required, ['tile', 'cid', 'updatedAt']);
  assert.equal(pp.properties.tile.format, 'at-uri'); assert.equal(pp.properties.cid.format, 'cid');
  const sp = sign.defs.main.record;
  assert.deepEqual(sp.required, ['to', 'updatedAt']);
  assert.equal(sp.properties.to.type, 'array'); assert.equal(sp.properties.to.maxLength, 12);
  assert.deepEqual(Object.keys(sign.defs.destination.properties).sort(), ['entrance', 'label', 'place', 'tile']);
});

// ---- src/ways.js with a stand-in host ------------------------------------------------------------------------
function frame({ inFrame = true } = {}) {
  const sent = [], handlers = [], timers = [];
  const parent = { postMessage: (m) => sent.push(m) };
  const win = { addEventListener: (t, f) => { if (t === 'message') handlers.push(f); } };
  win.parent = inFrame ? parent : win;
  const deliver = (data, source = parent) => handlers.forEach((f) => f({ data, source }));
  const down = (payload, source) => deliver({ action: DOWN, payload: { v: 1, ...payload } }, source);
  const fakeTimers = { setTimeout: (f, ms) => timers.push({ f, ms }) };
  const runTimers = (upTo) => { for (const t of timers.splice(0).sort((a, b) => a.ms - b.ms)) if (t.ms <= upTo) t.f(); else timers.push(t); };
  return { win, sent, down, deliver, timers: fakeTimers, runTimers, parent };
}

test('ways.js: says hello (and once more after half a second), naming the tile and its ways file', () => {
  const f = frame();
  joinWays({ win: f.win, timers: f.timers });
  assert.deepEqual(f.sent, [{ action: UP, payload: { v: 1, kind: 'hello', tile: 'maze', ways: '/ways.json' } }]);
  f.runTimers(500);
  assert.equal(f.sent.length, 2);
});

test('ways.js: a host\'s status sets each exit open or dormant (anything else is dormant)', () => {
  const f = frame(); let n = 0;
  const w = joinWays({ win: f.win, timers: f.timers, onStatus: () => n++ });
  assert.equal(w.state('obelisk'), 'waiting');
  f.down({ kind: 'status', exits: { obelisk: 'open' } });
  assert.equal(w.state('obelisk'), 'open'); assert.equal(w.mode, 'host'); assert.equal(n, 1);
  f.down({ kind: 'status', exits: { obelisk: 'dormant' } });
  assert.equal(w.state('obelisk'), 'dormant');
  f.down({ kind: 'status', exits: { obelisk: 'wide open' } });
  assert.equal(w.state('obelisk'), 'dormant');
  f.down({ kind: 'status', exits: {} });
  assert.equal(w.state('obelisk'), 'dormant');
  f.runTimers(PLAIN_AFTER_MS);
  assert.equal(w.mode, 'host', 'a host that answered stays the host');
});

test('ways.js: no answer within about a second is a plain viewer; opened on its own, at once', () => {
  const f = frame(); let n = 0;
  const w = joinWays({ win: f.win, timers: f.timers, onStatus: () => n++ });
  f.runTimers(PLAIN_AFTER_MS - 1);
  assert.equal(w.state('obelisk'), 'waiting');
  f.runTimers(PLAIN_AFTER_MS);
  assert.equal(w.state('obelisk'), 'plain'); assert.equal(n, 1);
  assert.equal(w.leave('obelisk', 'ne'), false, 'no host: nothing to tell');
  const top = frame({ inFrame: false });
  const w2 = joinWays({ win: top.win, timers: top.timers });
  assert.equal(w2.state('obelisk'), 'plain');
  assert.equal(top.sent.length, 0, 'nobody to say hello to');
});

test('ways.js: only its own page, its own protocol and version count', () => {
  const f = frame();
  const w = joinWays({ win: f.win, timers: f.timers });
  f.down({ kind: 'status', exits: { obelisk: 'open' } }, { postMessage() {} });           // another window
  f.deliver({ action: 'tiles-protocol-down-live-payload', payload: { v: 1, kind: 'status', exits: { obelisk: 'open' } } });
  f.deliver({ action: DOWN, payload: { v: 2, kind: 'status', exits: { obelisk: 'open' } } });
  f.deliver({ action: DOWN, payload: { v: 1, kind: 'status', exits: 'open' } });
  f.deliver(null); f.deliver('hello');
  assert.equal(w.state('obelisk'), 'waiting');
});

test('ways.js: arriving at a known entrance only; leaving tells the host the exit and facing, never who', () => {
  const f = frame(); const arrived = [];
  const w = joinWays({ win: f.win, timers: f.timers, onArrive: (id) => arrived.push(id) });
  f.down({ kind: 'arrive', entrance: 'the-cellar' });
  f.down({ kind: 'arrive', entrance: 42 });
  assert.deepEqual(arrived, []);
  f.down({ kind: 'arrive', entrance: 'obelisk' });
  assert.deepEqual(arrived, ['obelisk']);
  f.down({ kind: 'status', exits: { obelisk: 'open' } });
  f.sent.length = 0;
  assert.equal(w.leave('obelisk', 'se'), true);
  assert.equal(w.leave('nowhere', 'se'), false);
  w.leave('obelisk', 'up');
  assert.deepEqual(f.sent.map((m) => m.payload), [{ v: 1, kind: 'leave', exit: 'obelisk', facing: 'se' }, { v: 1, kind: 'leave', exit: 'obelisk', facing: 'ne' }]);
  for (const m of f.sent) assert.equal(m.action, UP);
});
