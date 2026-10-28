// inside.js: where things are inside the library and the great tree's tunnel (step 2 of W28), with no three.js so
// the tests run it in Node. Plan: claude/winter-forest-plan.md (W11, W13, W14, W29 to W31, W33).
//
// The library is built inside its own cottage, in the slide portal's frame: u runs from the door towards the back
// wall, v to the right, heights from the floor. Since step 2b it's bigger inside than out (W34): a 5.4 ceiling, and an
// L-shaped climb: the floor (0), the stairs (rising along the left wall from the back), the mezzanine (2.3, along the
// left wall from the front, over bays of shelves), then the walkway turning along the front wall over the entrance
// (climbing to 3.0) to the right wall, where the bench (one hop up) stands under the little door (W14). A step up or
// down of more than half a block stops you, so edges are walls. Under the walkway there are two floors, so the
// walking rules keep track of which one you're on (the height you're at).
//
// The tunnel is bigger on the inside (W11): it starts at the great tree's mouth and curves gently on for about 12
// blocks, the door halfway; it's drawn as a place of its own (in forest coordinates, so the mouth looks out on the
// real forest), never alongside the trunk.
import { FRAMES, LIBRARY, TRUNK, local, world, yawFacing, FIGURE_RADIUS, groundHeight } from './layout.js';

const FR = FIGURE_RADIUS;
export const STEP_UP = 0.5;           // the most you can step up or down in one go (the bench is 0.45)

// ---- the library ------------------------------------------------------------------------------------------------------
export const LIB = {
  u0: LIBRARY.front + 0.25, u1: LIBRARY.front + LIBRARY.depth - 0.25, v: LIBRARY.width / 2 - 0.25,
  ceiling: 5.4,                                                  // W34: the whole room, raised (its walls outside are 4.2)
  door: 0.7,                                                     // the front door's half width
  mezz: { u0: LIBRARY.front + 0.25, u1: 9.5, v0: -(LIBRARY.width / 2 - 0.25), v1: -2.4, h: 2.3 },
  stairs: { u0: 9.5, u1: 13.0, v0: -(LIBRARY.width / 2 - 0.25), v1: -3.55 },
  // Step 2b: the walkway over the entrance, from the reading nook's corner along the front wall to the right wall;
  // its floor climbs from the mezzanine's 2.3 to 3.0 by `level` (clearing the front door) and runs level to the end.
  walk: { u0: LIBRARY.front + 0.25, u1: 2.45, v0: -2.4, v1: LIBRARY.width / 2 - 0.25, h0: 2.3, h1: 3.0, level: 0.2, top: 7.0 },
  bench: { u0: 1.1, u1: 2.3, v0: 4.25, v1: 4.75, h: 0.45 },     // at the walkway's end, one hop up (0.45 above it)
  littleDoor: { u: 1.7, half: 0.13, y0: 3.45, y1: 3.8 },        // on the right wall, above the bench (W14, step 2b)
  // Windows: the right side's three are tall; the front's two and the left side's are high and round. The front ones
  // match (W35): the left by the reading nook, the right beside the walkway's end, both looking back to the clearing.
  tall: [4.1, 8.1, 12.1].map((u) => ({ wall: 'right', at: u, w: 2.4, sill: 0.8, h: 2.6 })),
  round: [{ wall: 'front', at: -3.35, y: 3.9, r: 0.5 }, { wall: 'front', at: 3.35, y: 3.9, r: 0.5 }, ...[4.1, 8.1, 12.1].map((u) => ({ wall: 'left', at: u, y: 3.55, r: 0.5 }))],
  columns: [[0, -1.3], [0, 1.3], [6.1, 1], [10.1, 1], [6.1, -1], [10.1, -1]],    // [u, side]: trunks set into the walls
};
LIB.mezz.u0 = LIB.u0;
LIB.stairs.v0 = LIB.mezz.v0;
const inBox = (u, v, b, m = 0) => u > b.u0 - m && u < b.u1 + m && v > b.v0 - m && v < b.v1 + m;
const UP = 1;                           // anything higher than this is "up" (the mezzanine, the walkway, the bench)

// Things you can't walk through (boxes in u, v): on the floor, up on the mezzanine and walkway, or both.
export const LIB_FURNITURE = [
  { id: 'table1', u0: 3.9, u1: 6.1, v0: 0.65, v1: 1.75 },
  { id: 'table2', u0: 8.4, u1: 10.6, v0: 0.65, v1: 1.75 },
  { id: 'chairs1', u0: 4.1, u1: 5.9, v0: 1.95, v1: 2.5 },
  { id: 'chairs2', u0: 8.6, u1: 10.4, v0: 1.95, v1: 2.5 },
  { id: 'fireplace', u0: 13.55, u1: 14.4, v0: -1.35, v1: 1.35 },
  { id: 'shelf-back-right', u0: 13.85, u1: 14.4, v0: 1.5, v1: 4.8 },
  { id: 'ladder', u0: 13.4, u1: 13.85, v0: 2.85, v1: 3.55 },
  { id: 'shelf-back-left', u0: 13.85, u1: 14.4, v0: -3.45, v1: -1.5 },
  { id: 'column-6', u0: 5.65, u1: 6.55, v0: 4.3, v1: 4.8 },
  { id: 'column-10', u0: 9.65, u1: 10.55, v0: 4.3, v1: 4.8 },
  { id: 'column-front-left', u0: 0.8, u1: 1.33, v0: -1.75, v1: -0.85, level: 'both' },
  { id: 'column-front-right', u0: 0.8, u1: 1.33, v0: 0.85, v1: 1.75, level: 'both' },
  { id: 'coat-stand', u0: 0.95, u1: 1.6, v0: 3.95, v1: 4.8 },                 // W36: downstairs, under the walkway's end
  { id: 'walk-posts', u0: 2.2, u1: 2.5, v0: 1.45, v1: 1.75 },                 // a post holding up the walkway
  // Up: the mezzanine's low shelves along the wall, the reading nook's chair and its little table.
  { id: 'mezz-shelves', u0: 2.7, u1: 9.5, v0: -4.8, v1: -4.3, level: 'up' },
  { id: 'nook-chair', u0: 1.55, u1: 2.35, v0: -3.85, v1: -3.05, level: 'up' },
  { id: 'nook-table', u0: 0.8, u1: 1.4, v0: -4.8, v1: -4.2, level: 'up' },
];

// The walkway's floor height at v (a slope, then level).
export function walkFloor(v) {
  const w = LIB.walk;
  return w.h0 + (w.h1 - w.h0) * Math.max(0, Math.min(1, (v - w.v0) / (w.level - w.v0)));
}
// The ceiling over (u, v): 5.4, rising over the walkway from its corner to about 7 at the little door (W34).
export function libCeiling(u, v) {
  const w = LIB.walk;
  if (u > w.u1) return LIB.ceiling;
  return LIB.ceiling + (w.top - LIB.ceiling) * Math.max(0, Math.min(1, (v - w.v0) / (w.v1 - w.v0)));
}
// Every floor at (u, v): one height almost everywhere; two under the walkway (the floor below it, and it).
export function libFloors(u, v) {
  const { mezz, stairs, bench, walk } = LIB;
  if (inBox(u, v, mezz) || (Math.abs(u - mezz.u1) < 1e-9 && v > mezz.v0 && v < LIB.stairs.v1)) return [mezz.h];   // (the top step meets it)
  if (inBox(u, v, stairs)) return [mezz.h * Math.max(0, Math.min(1, (stairs.u1 - u) / (stairs.u1 - stairs.u0)))];
  if (u > walk.u0 && u < walk.u1 && v >= walk.v0 - 1e-9 && v < walk.v1) return [0, walkFloor(v) + (inBox(u, v, bench) ? bench.h : 0)];
  return [0];
}
// The floor you're on at (u, v), from the one you were on: the nearest within a step, or null (an edge too far).
export function libHeight(u, v, near = 0) {
  let best = null;
  for (const h of libFloors(u, v)) if (Math.abs(h - near) <= STEP_UP + 1e-9 && (best === null || Math.abs(h - near) < Math.abs(best - near))) best = h;
  return best;
}
export function libFree(u, v, h = 0) {
  if (u < LIB.u0 + FR || u > LIB.u1 - FR || Math.abs(v) > LIB.v - FR) return false;
  for (const b of LIB_FURNITURE) {
    const applies = b.level === 'both' || (b.level === 'up' ? h > UP : h <= UP);
    if (applies && inBox(u, v, b, FR * 0.6)) return false;
  }
  return true;
}
// A move inside the library, in world coordinates, from the floor at height h0: try it, then slide along the room's
// own walls. A step of more than STEP_UP anywhere under the figure stops you (so it never stands half over an edge).
// Returns [x, z, h] (h: the floor you're now on), or null if you can't move.
export function libStep(pos, move, h0) {
  const f = FRAMES.slide;
  const ok = (x, z) => {
    const [u, v] = local(f, x, z), h = libHeight(u, v, h0);
    if (h === null || !libFree(u, v, h)) return null;
    for (const [a, b] of [[0.7, 0], [-0.7, 0], [0, 0.7], [0, -0.7]]) if (libHeight(u + a * FR, v + b * FR, h) === null) return null;
    return h;
  };
  const along = (d) => { const k = move[0] * d[0] + move[1] * d[1]; return [pos[0] + d[0] * k, pos[1] + d[1] * k]; };
  for (const p of [[pos[0] + move[0], pos[1] + move[1]], along(f.d), along(f.r)]) { const h = ok(p[0], p[1]); if (h !== null) return [p[0], p[1], h]; }
  return null;
}
export function libWalk(pos, move, h0 = 0) { const r = libStep(pos, move, h0); return r ? [r[0], r[1]] : pos; }
// The floor at a spot (from height `near`; with none given, the highest there: arriving from above).
export const libHeightAt = (x, z, near) => {
  const [u, v] = local(FRAMES.slide, x, z);
  if (near === undefined) return Math.max(...libFloors(u, v));
  const h = libHeight(u, v, near);
  return h === null ? near : h;
};
// Walking into something: the front door (out to the forest; from the floor) or, standing on the bench at the
// walkway's end, the little door (the slide).
export function libTouching(x, z, wantX, wantZ, h = 0) {
  const f = FRAMES.slide, [u, v] = local(f, x, z), [wu, wv] = local(f, wantX, wantZ);
  if (h < 0.1 && wu < LIB.u0 + FR + 0.06 && Math.abs(v) < LIB.door - 0.1) return { id: 'out', kind: 'door-out' };
  const L = LIB.littleDoor, onBench = Math.abs(h - (LIB.walk.h1 + LIB.bench.h)) < 0.02;
  if (onBench && wv > LIB.v - FR - 0.03 && Math.abs(u - L.u) < 0.4) return { id: 'slide', kind: 'little-door' };
  return null;
}
export function libArea(x, z, h = 0) {
  const [u, v] = local(FRAMES.slide, x, z);
  if (Math.abs(h - (LIB.walk.h1 + LIB.bench.h)) < 0.02) return 'on the bench';
  if (h > UP && inBox(u, v, LIB.walk)) return 'over the entrance';
  if (h >= LIB.mezz.h - 0.01) return u < 3.2 ? 'the reading nook' : 'up on the mezzanine';
  if (h > 0.1 && inBox(u, v, LIB.stairs)) return 'on the stairs';
  return u > 12.6 && Math.abs(v) < 2 ? 'by the fire' : 'the library';
}
// Where you stand on coming in (just inside the door, facing in) and on going out (outside, facing the path, with
// room behind you for the camera).
const fromLib = (u, v, du, dv) => { const f = FRAMES.slide, [x, z] = world(f, u, v); const dx = f.d[0] * du + f.r[0] * dv, dz = f.d[1] * du + f.r[1] * dv; return { x, z, yaw: yawFacing(dx, dz) }; };
export const LIB_IN = fromLib(LIB.u0 + 2.4, 0, 1, 0);
export const LIB_OUT = fromLib(-1.6, 0, -1, 0);
// The camera stays inside the walls, below the ceiling (and below the walkway when you're under it), out of the
// shelves under the mezzanine and out of the tall things.
export function libCamera(want, fig, fh = 0) {
  const f = FRAMES.slide;
  let [u, v] = local(f, want.x, want.z);
  const [fu, fv] = local(f, fig.x, fig.z);
  u = Math.max(LIB.u0 + 0.2, Math.min(LIB.u1 - 0.2, u));
  v = Math.max(-LIB.v + 0.2, Math.min(LIB.v - 0.2, v));
  let y = want.y;
  if (fh < LIB.mezz.h - 0.5 && inBox(u, v, LIB.mezz, 0.15) && y < LIB.mezz.h + 0.2) v = Math.max(v, LIB.mezz.v1 + 0.2);
  if (fh > UP) y = Math.max(y, fh + 0.9);
  // Never inside the tall things (the back shelves, the ladder, the fireplace, the columns): come closer instead.
  const tall = LIB_FURNITURE.filter((b) => TALL.includes(b.id));
  const inside = (pu, pv) => tall.some((b) => inBox(pu, pv, b, 0.18));
  if (inside(u, v)) {
    for (let i = 19; i >= 1; i--) {
      const k = i / 20, pu = fu + (u - fu) * k, pv = fv + (v - fv) * k;
      if (!inside(pu, pv)) { u = pu; v = pv; break; }
    }
  }
  y = Math.min(y, libCeiling(u, v) - 0.25);
  // Under the walkway (you on the floor): keep below it, or out from under it if there's no room.
  if (fh <= UP && inBox(u, v, LIB.walk, 0.15)) {
    const under = walkFloor(v) - 0.16 - 0.2;
    if (y > under) { if (fu > LIB.walk.u1) u = Math.max(u, LIB.walk.u1 + 0.25); else y = under; }
  }
  const [x, z] = world(f, u, v);
  return { x, y, z };
}
const TALL = ['shelf-back-right', 'shelf-back-left', 'ladder', 'fireplace', 'column-6', 'column-10', 'column-front-left', 'column-front-right', 'coat-stand'];

// ---- the tunnel inside the great tree (W11, W31) ---------------------------------------------------------------------
// The centre line starts at the mouth (in the trunk's face) and curves gently to the right; the door stands at DOOR.
export const TUNNEL = { length: 12, curve: 16, half: 0.95, height: 2.35, door: 6.6 };
const TF = FRAMES['tree-door'];
export const MOUTH = world(TF, TRUNK.at - TRUNK.radius - 0.62, 0);
export const TUNNEL_FLOOR = groundHeight(MOUTH[0], MOUTH[1], 0);   // the ground is flat round the great tree
export function tunnelAt(s) {
  const th = s / TUNNEL.curve, a = TUNNEL.curve * Math.sin(th), b = TUNNEL.curve * (1 - Math.cos(th));
  const x = MOUTH[0] + TF.d[0] * a + TF.r[0] * b, z = MOUTH[1] + TF.d[1] * a + TF.r[1] * b;
  const dx = TF.d[0] * Math.cos(th) + TF.r[0] * Math.sin(th), dz = TF.d[1] * Math.cos(th) + TF.r[1] * Math.sin(th);
  return { x, z, dx, dz, rx: -dz, rz: dx };
}
// (s along the tunnel, w across it: right positive) for a point.
export function tunnelLocal(x, z) {
  let best = { s: 0, w: 0, d: Infinity };
  for (let s = -1.5; s <= TUNNEL.length; s += 0.1) {
    const p = tunnelAt(s), d = Math.hypot(x - p.x, z - p.z);
    if (d < best.d) best = { s, w: (x - p.x) * p.rx + (z - p.z) * p.rz, d };
  }
  // Refine.
  for (let s = best.s - 0.1; s <= best.s + 0.1; s += 0.005) {
    const p = tunnelAt(s), d = Math.hypot(x - p.x, z - p.z);
    if (d < best.d) best = { s, w: (x - p.x) * p.rx + (z - p.z) * p.rz, d };
  }
  return best;
}
export function tunnelFree(x, z) {
  const { s, w } = tunnelLocal(x, z);
  return s > 0.05 && s < TUNNEL.door - FR - 0.12 && Math.abs(w) < TUNNEL.half - FR - 0.12;
}
export function tunnelWalk(pos, move) {
  // Try the move, then slide along the tunnel (its direction where you are), then along the map's axes.
  const t = tunnelAt(tunnelLocal(pos[0], pos[1]).s), k = move[0] * t.dx + move[1] * t.dz;
  for (const p of [[pos[0] + move[0], pos[1] + move[1]], [pos[0] + t.dx * k, pos[1] + t.dz * k], [pos[0] + move[0], pos[1]], [pos[0], pos[1] + move[1]]]) if (tunnelFree(p[0], p[1])) return p;
  return pos;
}
export function tunnelTouching(x, z, wantX, wantZ) {
  const t = tunnelLocal(wantX, wantZ);
  if (t.s < 0.25) return { id: 'out', kind: 'mouth-out' };
  if (t.s > TUNNEL.door - FR - 0.2 && Math.abs(t.w) < TUNNEL.half) return { id: 'tree-door', kind: 'portal' };   // the door fills the tunnel
  return null;
}
const tunnelSpot = (s, back) => { const p = tunnelAt(s); return { x: p.x, z: p.z, yaw: back ? yawFacing(-p.dx, -p.dz) : yawFacing(p.dx, p.dz) }; };
export const TUNNEL_IN = tunnelSpot(1.7, false);                         // just inside the mouth, facing in
export const TUNNEL_ARRIVE = tunnelSpot(TUNNEL.door - 1.9, true);        // through the door, facing the mouth (W31)
export const TUNNEL_OUT = (() => { const [x, z] = world(TF, TRUNK.at - TRUNK.radius - 2.1, 0); return { x, z, yaw: yawFacing(-TF.d[0], -TF.d[1]) }; })();
// The camera keeps inside the tunnel, lower and closer than outside (as the maze's does in the Closet).
export function tunnelCamera(want, fig, facingIn) {
  const t = tunnelLocal(fig.x, fig.z);
  const s = facingIn ? Math.max(0.1, t.s - 1.7) : Math.min(TUNNEL.door - 0.25, t.s + 1.7);
  const w = Math.max(-0.45, Math.min(0.45, t.w * 0.5 + 0.2));
  const p = tunnelAt(s);
  return { x: p.x + p.rx * w, y: Math.min(want.y, TUNNEL_FLOOR + 1.75), z: p.z + p.rz * w };
}
