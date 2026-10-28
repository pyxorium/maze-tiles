// Winter Forest, steps 2 and 2b (claude/winter-forest-plan.md, W11, W13, W14, W29 to W38): the library's inside (the
// floor, the stairs, the mezzanine and its reading nook, the walkway over the entrance, the bench and the little door
// at its end, the doors in and out), the tunnel in
// the great tree (bigger on the inside: in at the mouth, to the door, out again), and the ice run's way through the
// forest. Runs in Node: forest/src/inside.js and layout.js have no three.js.
import test from 'node:test';
import assert from 'node:assert/strict';
import * as L from '../forest/src/layout.js';
import * as I from '../forest/src/inside.js';
import { LOOK } from '../forest/src/look.js';

const lib = (u, v) => L.world(L.FRAMES.slide, u, v);
const uv = (p) => L.local(L.FRAMES.slide, p[0], p[1]);
const forest = () => {
  const trees = L.plantTrees({ seed: LOOK.seed, count: LOOK.treeCount, spacing: LOOK.treeSpacing, size: LOOK.treeSize, pathWidth: LOOK.pathWidth });
  const paths = L.PATHS.map((p) => ({ id: p.id, pts: L.pathPoints(p, { to: L.PATH_END + 1 }) }));
  return { trees, paths, pathWidth: LOOK.pathWidth };
};

// Walk through (u, v) waypoints in the library, as a player steering towards each, keeping track of the floor you're
// on (under the walkway there are two); returns where it ended and on which floor.
function libRoute(from, route, h = 0) {
  let p = from;
  for (const [u, v] of route) {
    const [tx, tz] = lib(u, v);
    for (let i = 0; i < 400; i++) {
      const dx = tx - p[0], dz = tz - p[1], d = Math.hypot(dx, dz);
      if (d < 0.05) break;
      const s = Math.min(0.08, d), r = I.libStep(p, [dx / d * s, dz / d * s], h);
      if (!r) return { stuck: true, at: uv(p), h, p };
      p = [r[0], r[1]]; h = r[2];
    }
  }
  return { stuck: false, at: uv(p), h, p };
}
const UP_ROUTE = [[3, -1], [12, -1.8], [13.6, -3.0], [13.6, -4.1], [11, -4.1], [9.3, -4.0], [6, -3.6], [3, -3.5], [2.6, -2.8]];

test('library: up the stairs from the back, along the mezzanine to the reading nook (W29)', () => {
  const r = libRoute([I.LIB_IN.x, I.LIB_IN.z], UP_ROUTE);
  assert.ok(!r.stuck, `stuck at ${r.at.map((n) => n.toFixed(2))}`);
  assert.equal(r.h, I.LIB.mezz.h);
  assert.equal(I.libArea(...r.p, r.h), 'the reading nook');
});

test('library: the mezzanine\'s edge and the shelves under it are walls; the floor never meets the mezzanine', () => {
  const up = libRoute([I.LIB_IN.x, I.LIB_IN.z], [[3, -1], [12, -1.8], [13.6, -3.0], [13.6, -4.1], [9.3, -4.0], [6, -3.6], [6, -1.0]]);   // (off the mezzanine's edge, away from the walkway)
  assert.ok(up.h === I.LIB.mezz.h && up.at[1] < I.LIB.mezz.v1, `kept up by the railing (${up.at.map((n) => n.toFixed(2))})`);
  const under = libRoute([I.LIB_IN.x, I.LIB_IN.z], [[4, -1.5], [4, -3.5]]);
  assert.ok(under.h === 0 && under.at[1] > I.LIB.mezz.v1, `kept out by the shelves under it, on the floor (${under.at.map((n) => n.toFixed(2))})`);
  // Every step of the way up changes height by less than a step.
  for (let u = I.LIB.stairs.u0; u <= I.LIB.stairs.u1; u += 0.05) assert.ok(Math.abs(I.libFloors(u, -4.1)[0] - I.libFloors(u + 0.05, -4.1)[0]) < 0.1);
});

test('library (step 2b): the L-shaped climb, past the armchair, over the entrance to the bench and the little door', () => {
  const W = I.LIB.walk;
  const r = libRoute([I.LIB_IN.x, I.LIB_IN.z], [...UP_ROUTE, [1.5, -2.6], [1.6, -1.0], [1.65, 1.0], [1.7, 3.5], [1.7, 4.42]]);
  assert.ok(!r.stuck, `stuck at ${r.at.map((n) => n.toFixed(2))} (height ${r.h})`);
  assert.equal(r.h, W.h1 + I.LIB.bench.h, 'one hop up onto the bench at the walkway\'s end');
  assert.equal(I.libArea(...r.p, r.h), 'on the bench');
  const want = lib(1.7, 4.75);
  assert.deepEqual(I.libTouching(r.p[0], r.p[1], want[0], want[1], r.h), { id: 'slide', kind: 'little-door' });
  // Not from the walkway beside the bench, nor from the floor below.
  const w1 = lib(2.0, 3.6), w1w = lib(2.0, 4.2);
  assert.equal(I.libTouching(w1[0], w1[1], w1w[0], w1w[1], W.h1), null);
  const f = lib(2.0, 3.6), fw = lib(2.0, 4.6);
  assert.equal(I.libTouching(f[0], f[1], fw[0], fw[1], 0), null, 'not from the floor');
  // The walkway climbs from the mezzanine's height and clears the front door (2.4 tall) above it (W34, step 2b).
  assert.equal(I.walkFloor(W.v0), I.LIB.mezz.h);
  for (let v = -I.LIB.door; v <= I.LIB.door; v += 0.05) assert.ok(I.walkFloor(v) - 0.16 > 2.4, `the slab over the door at ${v.toFixed(2)}`);
  // The ceiling: 5.4 over the room, rising over the walkway to about 7 at the little door.
  assert.equal(I.LIB.ceiling, 5.4);
  assert.ok(I.libCeiling(1.5, 4.6) > 6.8 && I.libCeiling(1.5, -2.6) === 5.4 && I.libCeiling(6, 4.6) === 5.4);
  assert.ok(I.libCeiling(1.5, -2.6) - I.LIB.mezz.h >= 1.9 * 1.5, 'at least 50% more headroom over the mezzanine (W34)');
});

test('library (step 2b): under the walkway on the floor, from the door to the coat stand; you stay downstairs', () => {
  const r = libRoute([I.LIB_IN.x, I.LIB_IN.z], [[1.6, 0], [1.9, 2.8], [2.0, 3.6]]);
  assert.ok(!r.stuck && r.h === 0, `on the floor under the walkway (${r.at.map((n) => n.toFixed(2))}, ${r.h})`);
  const c = lib(1.25, 4.35), cw = lib(1.25, 4.4);
  assert.ok(!I.libFree(...uv(c), 0), 'the coat stand is in the way downstairs');
  assert.ok(I.libFree(1.7, 4.35, I.LIB.walk.h1 + I.LIB.bench.h), '... but not up on the bench above it');
  // Out of the front door from under the walkway.
  const at = lib(I.LIB.u0 + 0.35, 0), want = lib(I.LIB.u0 + 0.2, 0);
  assert.deepEqual(I.libTouching(at[0], at[1], want[0], want[1], 0), { id: 'out', kind: 'door-out' });
  assert.equal(I.libTouching(at[0], at[1], want[0], want[1], 2.9), null, 'not from up on the walkway');
  // The camera, with you under it, keeps below the walkway.
  const cam = I.libCamera({ x: lib(1.3, 0.5)[0], y: 2.9, z: lib(1.3, 0.5)[1] }, { x: lib(3.6, 0.5)[0], z: lib(3.6, 0.5)[1] }, 0);
  const [cu, cv] = uv([cam.x, cam.z]);
  assert.ok(cu > I.LIB.walk.u1 || cam.y < I.walkFloor(cv) - 0.16, 'not inside the walkway');
});

test('library: in by the front door facing in, out by it facing the path; both spots free (W33)', () => {
  assert.ok(I.libFree(...uv([I.LIB_IN.x, I.LIB_IN.z]), 0), 'inside spot free');
  const [u, v] = uv([I.LIB_IN.x, I.LIB_IN.z]);
  assert.ok(u > I.LIB.u0 && Math.abs(v) < 0.1);
  const at = lib(I.LIB.u0 + 0.35, 0), want = lib(I.LIB.u0 + 0.2, 0);
  assert.deepEqual(I.libTouching(at[0], at[1], want[0], want[1], 0), { id: 'out', kind: 'door-out' });
  assert.ok(L.canStand(I.LIB_OUT.x, I.LIB_OUT.z, forest()), 'outside spot is on the path');
  // From outside, walking into the library's door is what brings you in.
  const f = L.world(L.FRAMES.slide, L.LIBRARY.front - 0.35, 0);
  assert.deepEqual(L.touching(f[0], f[1]), { id: 'slide', kind: 'door' });
});

test('library: the camera stays inside the walls, below the ceiling, out of the tall shelves', () => {
  const fig = { x: lib(13.0, 3.0)[0], z: lib(13.0, 3.0)[1] };
  const c = I.libCamera({ x: lib(14.3, 3.2)[0], y: 2.1, z: lib(14.3, 3.2)[1] }, fig);
  const [u, v] = uv([c.x, c.z]);
  assert.ok(u < I.LIB.u1 && Math.abs(v) < I.LIB.v && c.y < I.LIB.ceiling);
  assert.ok(!(u > 13.85 - 0.18 && v > 1.5 - 0.18), `not in the tall shelf (${u.toFixed(2)}, ${v.toFixed(2)})`);
});

// Walk the tunnel holding forwards from a spot (sliding along its curve, as a player does).
function tunnelHold(spot) {
  let p = [spot.x, spot.z];
  const f = [-Math.sin(spot.yaw), -Math.cos(spot.yaw)];
  for (let i = 0; i < 400; i++) {
    const m = [f[0] * 0.05, f[1] * 0.05], want = [p[0] + m[0], p[1] + m[1]];
    const t = I.tunnelTouching(p[0], p[1], want[0], want[1]);
    if (t) return t;
    const n = I.tunnelWalk(p, m);
    if (n === p) return null;
    p = n;
  }
  return null;
}

test('tunnel: bigger on the inside, about 12 blocks curving gently, the door halfway (W11)', () => {
  assert.ok(I.TUNNEL.length >= 11 && I.TUNNEL.door > 5.5 && I.TUNNEL.door < 7.5);
  const end = I.tunnelAt(I.TUNNEL.length);
  assert.ok(Math.hypot(end.x - I.MOUTH[0], end.z - I.MOUTH[1]) > 2 * L.TRUNK.radius + 4, 'far longer than the trunk is wide');
  const a = I.tunnelAt(0), b = I.tunnelAt(I.TUNNEL.door);
  assert.ok(a.dx * b.dx + a.dz * b.dz > 0.8 && a.dx * b.dx + a.dz * b.dz < 0.999, 'a gentle curve');
});

test('tunnel: in at the mouth, walking on reaches the door; turning round reaches the mouth (W11, W33)', () => {
  assert.ok(I.tunnelFree(I.TUNNEL_IN.x, I.TUNNEL_IN.z) && I.tunnelFree(I.TUNNEL_ARRIVE.x, I.TUNNEL_ARRIVE.z));
  assert.deepEqual(tunnelHold(I.TUNNEL_IN), { id: 'tree-door', kind: 'portal' });
  assert.deepEqual(tunnelHold(I.TUNNEL_ARRIVE), { id: 'out', kind: 'mouth-out' }, 'arriving through the door you face the mouth (W31)');
  assert.ok(L.canStand(I.TUNNEL_OUT.x, I.TUNNEL_OUT.z, forest()), 'out in front of the great tree');
  const m = L.world(L.FRAMES['tree-door'], L.TRUNK.at - L.TRUNK.radius - 0.4, 0);
  assert.deepEqual(L.touching(m[0], m[1]), { id: 'tree-door', kind: 'mouth' }, 'walking into the mouth from outside goes in');
});

test('the ice run: no spruce across it, well away from every path, ending in its hollow (W15)', () => {
  const { trees } = forest();
  const run = L.iceRunPoints(0.5);
  for (const [x, z] of run) {
    for (const t of trees) assert.ok(Math.hypot(t.x - x, t.z - z) > 1.0, 'a spruce on the ice run');
    assert.ok(L.nearestPath(x, z, L.PATHS.map((p) => ({ id: p.id, pts: L.pathPoints(p) }))).d > 3, 'too near a path');
  }
  const len = L.arcLengths(run).at(-1);
  assert.ok(len > 22 && len < 40, `about 30 blocks (${len.toFixed(1)})`);
  assert.ok(L.groundHeight(...L.ICE_RUN_END, 0.5) < -0.8, 'the hollow dips into the snow');
});
