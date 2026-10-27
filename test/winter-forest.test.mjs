// Winter Forest, step 1 (claude/winter-forest-plan.md, W8 to W28): its ways.json, the messages with its host, its
// settings, and its layout (every entrance a place you can stand, every path walkable from the lamp post to its
// portal, the portals' touch spots). Runs in Node: forest/src/layout.js and ways.js have no three.js.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import * as L from '../forest/src/layout.js';
import { joinWays, WAYS, UP, DOWN, facingOfYaw } from '../forest/src/ways.js';
import { LOOK } from '../forest/src/look.js';

const DID = 'did:plc:6vxjigxrqizmbo56gojxico3';

test('ways.json: the forest, ways-only, four exits with signposts and fallbacks, four entrances (W25)', () => {
  const file = JSON.parse(readFileSync(new URL('../forest/tile/ways.json', import.meta.url), 'utf8'));
  assert.deepEqual(file, WAYS);
  assert.equal(WAYS.v, 1);
  assert.equal(WAYS.tile, 'winter-forest');
  assert.equal(WAYS.entry, 'ways-only');
  assert.equal(WAYS.place, `at://${DID}/cafe.thunderbird.way.place/winter-forest`);
  assert.deepEqual(WAYS.exits.map((e) => e.id), ['wardrobe', 'tree-door', 'arch', 'slide']);
  for (const e of WAYS.exits) {
    assert.equal(e.signpost, `at://${DID}/cafe.thunderbird.way.signpost/winter-forest.${e.id}`);
    assert.equal(e.fallback, `https://thunderbird.cafe/way/winter-forest/${e.id}`);
  }
  assert.deepEqual(WAYS.entrances.map((e) => e.id), ['lamppost', 'wardrobe', 'tree-door', 'arch'], 'lamppost first (the default); the slide is an exit only (W19)');
  // The maze's frozen ways.json has no entry field: an open place.
  const maze = JSON.parse(readFileSync(new URL('../tile/ways.json', import.meta.url), 'utf8'));
  assert.equal(maze.entry, undefined);
});

test('settings: the look test\'s starting settings except snow on branches 0.75 and bumps 0.5 (W6)', () => {
  const lab = readFileSync(new URL('../lab/forest/main.js', import.meta.url), 'utf8');
  const defaults = /const DEFAULTS = \{([\s\S]*?)\.\.\.SOUND_DEFAULTS/.exec(lab)[1];
  const pairs = [...defaults.matchAll(/(\w+): ('[^']*'|[\d.]+|true|false)/g)].map((m) => [m[1], JSON.parse(m[2].replace(/'/g, '"'))]);
  assert.ok(pairs.length > 30);
  for (const [k, v] of pairs) {
    const want = k === 'treeSnow' ? 0.75 : k === 'bumps' ? 0.5 : v;
    assert.equal(LOOK[k], want, k);
  }
});

// A stand-in window and parent, to try the messages.
function fakeFrame() {
  const listeners = [];
  const sent = [];
  const parent = { postMessage: (m) => sent.push(m) };
  const win = { parent, addEventListener: (t, f) => { if (t === 'message') listeners.push(f); } };
  const timers = [];
  return {
    win, sent, parent,
    timers: { setTimeout: (f, ms) => timers.push({ f, ms }) },
    runTimers: (upTo) => { const due = timers.filter((t) => t.ms <= upTo); for (const t of due) { timers.splice(timers.indexOf(t), 1); t.f(); } },
    down: (payload, source = parent) => listeners.forEach((f) => f({ source, data: { action: DOWN, payload: { v: 1, ...payload } } })),
  };
}

test('messages: hello names the forest; status sets each exit; anything but "open" is dormant', () => {
  const t = fakeFrame();
  let statuses = 0;
  const w = joinWays({ win: t.win, timers: t.timers, onStatus: () => statuses++ });
  assert.deepEqual(t.sent[0], { action: UP, payload: { v: 1, kind: 'hello', tile: 'winter-forest', ways: '/ways.json' } });
  assert.equal(w.state('wardrobe'), 'waiting');
  t.down({ kind: 'status', exits: { wardrobe: 'open', arch: 'yes', slide: 'open' } });
  assert.equal(statuses, 1);
  assert.equal(w.state('wardrobe'), 'open');
  assert.equal(w.state('arch'), 'dormant');
  assert.equal(w.state('tree-door'), 'dormant');
  assert.equal(w.state('slide'), 'open');
  t.runTimers(2000);
  assert.equal(w.mode, 'host', 'a host that answered is never taken for a plain viewer');
  assert.equal(t.sent.length, 1, 'no second hello once answered');
});

test('messages: only arrivals at the four entrances count; never from anyone but the parent', () => {
  const t = fakeFrame();
  const arrived = [];
  joinWays({ win: t.win, timers: t.timers, onArrive: (id) => arrived.push(id) });
  t.down({ kind: 'arrive', entrance: 'slide' });          // an exit only
  t.down({ kind: 'arrive', entrance: 'obelisk' });        // the maze's
  t.down({ kind: 'arrive', entrance: 'arch' }, {});       // someone else
  t.down({ kind: 'arrive', entrance: 'arch' });
  t.down({ kind: 'arrive', entrance: 'lamppost' });       // again: a host may bring you back
  assert.deepEqual(arrived, ['arch', 'lamppost']);
});

test('messages: no answer within a second is a plain viewer; leave only goes to a host, with exit and facing', () => {
  const t = fakeFrame();
  const w = joinWays({ win: t.win, timers: t.timers });
  t.runTimers(500);
  assert.equal(t.sent.length, 2, 'hello again after half a second');
  t.runTimers(1000);
  assert.equal(w.mode, 'plain');
  assert.equal(w.leave('wardrobe', 0), false);
  const h = fakeFrame();
  const w2 = joinWays({ win: h.win, timers: h.timers });
  h.down({ kind: 'status', exits: { wardrobe: 'open' } });
  assert.equal(w2.leave('nowhere', 0), false);
  assert.equal(w2.leave('wardrobe', Math.PI / 2), true);
  assert.deepEqual(h.sent.at(-1).payload, { v: 1, kind: 'leave', exit: 'wardrobe', facing: 'w' });
  assert.equal(facingOfYaw(0), 'n');
  assert.equal(facingOfYaw(-Math.PI / 2), 'e');
  assert.equal(facingOfYaw(Math.PI), 's');
});

const world = () => {
  const trees = L.plantTrees({ seed: LOOK.seed, count: LOOK.treeCount, spacing: LOOK.treeSpacing, size: LOOK.treeSize, pathWidth: LOOK.pathWidth });
  const paths = L.PATHS.map((p) => ({ id: p.id, pts: L.pathPoints(p, { to: L.PATH_END + 1 }) }));
  return { trees, paths, pathWidth: LOOK.pathWidth };
};

test('entrances: each is a place you can stand, facing back towards the clearing, not already in a portal (W19)', () => {
  const w = world();
  for (const [id, e] of Object.entries(L.ENTRANCES)) {
    assert.ok(L.canStand(e.x, e.z, w), `${id}: can stand there`);
    assert.equal(L.touching(e.x, e.z), null, `${id}: not touching a portal on arrival`);
    const f = [-Math.sin(e.yaw), -Math.cos(e.yaw)];
    const toCentre = [-e.x, -e.z], len = Math.hypot(...toCentre);
    if (id !== 'lamppost') assert.ok((f[0] * toCentre[0] + f[1] * toCentre[1]) / len > 0.5, `${id}: faces the clearing`);
  }
  assert.ok(L.ENTRANCES.lamppost.z > 0 && L.ENTRANCES.lamppost.yaw === 0, 'lamppost: just south of the lamp post, facing it');
});

test('paths: each winds about 30 blocks, and you can walk it from the lamp post to its portal (W9)', () => {
  const w = world();
  const want = { wardrobe: 'portal', arch: 'portal', 'tree-door': 'mouth', slide: 'door' };
  for (const p of L.PATHS) {
    const len = L.arcLengths(L.pathPoints(p, { from: 0 })).at(-1);      // from the lamp post
    assert.ok(len > 29 && len < 36, `${p.id}: ${len.toFixed(1)} blocks from the lamp post`);
    let pos = [L.ENTRANCES.lamppost.x, L.ENTRANCES.lamppost.z];
    let reached = null;
    const pts = L.pathPoints(p, { from: 0.8, to: L.PATH_END, step: 0.5 });
    for (const [tx, tz] of [...pts, ...Array(12).fill(pts.at(-1)).map(() => { const f = L.FRAMES[p.id]; return L.world(f, 3, 0); })]) {
      for (let i = 0; i < 40 && !reached; i++) {
        const dx = tx - pos[0], dz = tz - pos[1], d = Math.hypot(dx, dz);
        if (d < 0.05) break;
        const s = Math.min(0.1, d);
        const want2 = [pos[0] + dx / d * s, pos[1] + dz / d * s];
        reached = L.touching(want2[0], want2[1]);
        const next = L.walk(pos, [want2[0] - pos[0], want2[1] - pos[1]], w);
        if (next === pos && !reached) break;
        pos = next;
      }
      if (reached) break;
    }
    assert.ok(reached && reached.id === p.id && reached.kind === want[p.id], `${p.id}: walked to its ${want[p.id]} (got ${JSON.stringify(reached)}, stopped at ${pos.map((n) => n.toFixed(1))})`);
  }
});

test('the coats lane: boughs first, coats nearer the doors, on both sides (W10)', () => {
  const spots = L.laneSpots();
  assert.ok(spots.length > 20);
  assert.ok(spots.some((s) => s.side < 0) && spots.some((s) => s.side > 0));
  assert.ok(Math.min(...spots.map((s) => s.t)) < 0.05 && Math.max(...spots.map((s) => s.t)) > 0.9);
  const f = L.FRAMES.wardrobe;
  for (const s of spots) assert.ok(L.local(f, s.x, s.z)[0] > -L.LANE - 0.5, 'within the lane\'s last 8 blocks');
});
