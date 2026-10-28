// Winter Forest, step 2 (claude/winter-forest-plan.md, W11, W13, W14, W29 to W33): the library's inside (the floor,
// the stairs, the mezzanine and its reading nook, the bench and the little door, the doors in and out), the tunnel in
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

// Walk through (u, v) waypoints in the library, as a player steering towards each; returns where it ended.
function libRoute(from, route) {
  let p = from;
  for (const [u, v] of route) {
    const [tx, tz] = lib(u, v);
    for (let i = 0; i < 400; i++) {
      const dx = tx - p[0], dz = tz - p[1], d = Math.hypot(dx, dz);
      if (d < 0.05) break;
      const s = Math.min(0.08, d), n = I.libWalk(p, [dx / d * s, dz / d * s]);
      if (n === p) return { stuck: true, at: uv(p), h: I.libHeightAt(...p), p };
      p = n;
    }
  }
  return { stuck: false, at: uv(p), h: I.libHeightAt(...p), p };
}

test('library: up the stairs from the back, along the mezzanine to the reading nook (W29)', () => {
  const r = libRoute([I.LIB_IN.x, I.LIB_IN.z], [[3, -1], [12, -1.8], [13.6, -3.0], [13.6, -4.1], [11, -4.1], [9.3, -4.0], [6, -3.6], [3, -3.5], [2.6, -2.8]]);
  assert.ok(!r.stuck, `stuck at ${r.at.map((n) => n.toFixed(2))}`);
  assert.equal(r.h, I.LIB.mezz.h);
  assert.equal(I.libArea(...r.p), 'the reading nook');
});

test('library: the mezzanine\'s edge and the shelves under it are walls; the floor never meets the mezzanine', () => {
  const up = libRoute([I.LIB_IN.x, I.LIB_IN.z], [[3, -1], [12, -1.8], [13.6, -3.0], [13.6, -4.1], [9.3, -4.0], [6, -3.6], [6, -1.0]]);
  assert.ok(up.h === I.LIB.mezz.h && up.at[1] < I.LIB.mezz.v1, `kept up by the railing (${up.at.map((n) => n.toFixed(2))})`);
  const under = libRoute([I.LIB_IN.x, I.LIB_IN.z], [[4, -1.5], [4, -3.5]]);
  assert.ok(under.h === 0 && under.at[1] > I.LIB.mezz.v1, `kept out by the shelves under it, on the floor (${under.at.map((n) => n.toFixed(2))})`);
  // Every step of the way up changes height by less than a step.
  for (let u = I.LIB.stairs.u0; u <= I.LIB.stairs.u1; u += 0.05) assert.ok(Math.abs(I.libHeight(u, -4.1) - I.libHeight(u + 0.05, -4.1)) < 0.1);
});

test('library: one hop up onto the bench, and the little door is only reached from it (W14)', () => {
  const r = libRoute([I.LIB_IN.x, I.LIB_IN.z], [[2.2, 2.5], [1.9, 3.6], [1.9, 4.4]]);
  assert.ok(!r.stuck && r.h === I.LIB.bench.h, 'up on the bench');
  const want = lib(1.9, 4.75);
  assert.deepEqual(I.libTouching(r.p[0], r.p[1], want[0], want[1]), { id: 'slide', kind: 'little-door' });
  const floor = lib(1.9, 3.9), wantF = lib(1.9, 4.2);
  assert.equal(I.libTouching(floor[0], floor[1], wantF[0], wantF[1]), null, 'not from the floor');
});

test('library: in by the front door facing in, out by it facing the path; both spots free (W33)', () => {
  assert.ok(I.libFree(...uv([I.LIB_IN.x, I.LIB_IN.z])), 'inside spot free');
  const [u, v] = uv([I.LIB_IN.x, I.LIB_IN.z]);
  assert.ok(u > I.LIB.u0 && Math.abs(v) < 0.1);
  const at = lib(I.LIB.u0 + 0.35, 0), want = lib(I.LIB.u0 + 0.2, 0);
  assert.deepEqual(I.libTouching(at[0], at[1], want[0], want[1]), { id: 'out', kind: 'door-out' });
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
