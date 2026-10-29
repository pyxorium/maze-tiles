// walk.js: walking (free, or step and turn on the room's grid), and how rooms join at a gate (no three.js;
// tested in Node). From the over-the-shoulder look test (lab/shoulder/walk.js), with the hole and the fall added.
//
// Every room keeps its own coordinates (the maze's map.js). A way on is a gate between two cells: L, the last
// cell in the room, and O, the first cell beyond it. Stepping from L to O takes you through, and you arrive on
// the other room's L. To show a room through a doorway (and walk through with no cut), the other room is
// placed so its L sits on this room's O, facing back: a quarter-turn k, a shift (tx, ty) and a height dy.
// Stairs gates rise half a block like any step: up-stairs leave the top step (2) for 2.5, down-stairs leave
// the floor (0) for the first step down (-0.5). A ramp's slope runs straight on: up-ramps leave the top cell
// (1.75 at its middle) for 2, the height of the ramp's top edge; down-ramps leave the floor for -0.25.

import { geometry, blockedCells, splitTo, wayOf } from './graph.js';

export const DIRS = { ne: [0, -1], se: [1, 0], sw: [0, 1], nw: [-1, 0] };
export const LEFT_OF = { ne: 'nw', nw: 'sw', sw: 'se', se: 'ne' };
export const RIGHT_OF = { ne: 'se', se: 'sw', sw: 'nw', nw: 'ne' };
const eq = (a, b) => a[0] === b[0] && a[1] === b[1];
const k2 = (x, y) => `${x},${y}`;
export const nameOf = (v) => Object.keys(DIRS).find((n) => eq(DIRS[n], [Math.round(v[0]), Math.round(v[1])]));

export function rot([x, y], k) {
  k = ((k % 4) + 4) % 4;
  for (let i = 0; i < k; i++) [x, y] = [-y, x];
  return [x === 0 ? 0 : x, y === 0 ? 0 : y];
}

export function gatesOf(room) {
  const [W, D] = room.size;
  const out = [];
  for (const w of room.ways) {
    if (w.kind === 'drop' || w.kind === 'landing') continue;
    const k = w.at, dir = DIRS[w.side];
    const L = w.side === 'ne' ? [k, 0] : w.side === 'nw' ? [0, k] : w.side === 'se' ? [W - 1, k] : [k, D - 1];
    const O = [L[0] + dir[0], L[1] + dir[1]];
    let hL = 0, hO = 0;
    if (w.kind === 'stairs') { if (w.dir === 'up') { hL = 2; hO = 2.5; } else { hL = 0; hO = -0.5; } }
    if (w.kind === 'ramp') { if (w.dir === 'up') { hL = 1.75; hO = 2; } else { hL = 0; hO = -0.25; } }
    out.push({ way: w, side: w.side, L, O, dir, hL, hO });
  }
  return out;
}

// Walkable cells and their heights: the floor (0) except landmarks and holes, plus the steps of flights up.
export function heightsOf(room) {
  const [W, D] = room.size;
  const blocked = blockedCells(room);
  const h = new Map();
  for (let x = 0; x < W; x++) for (let y = 0; y < D; y++) if (!blocked.has(k2(x, y))) h.set(k2(x, y), 0);
  for (const w of room.ways) {
    if (!((w.kind === 'stairs' || w.kind === 'ramp') && w.dir === 'up')) continue;
    for (const s of geometry(room, w).solids) {
      if (s.x < 0 || s.y < 0 || s.x >= W || s.y >= D) continue;
      h.set(k2(s.x, s.y), s.top.reduce((a, b) => a + b, 0) / 4);
    }
  }
  return h;
}

// The slopes of up-ramps (cell → its corner heights), so a figure can follow the surface smoothly.
export function slopesOf(room) {
  const out = new Map();
  for (const w of room.ways) {
    if (!(w.kind === 'ramp' && w.dir === 'up')) continue;
    for (const s of geometry(room, w).solids) if (s.slope) out.set(k2(s.x, s.y), s.top);
  }
  return out;
}
// The surface's height at (x, y) on a slope cell (corners at (x0,y0), (x0+1,y0), (x0+1,y0+1), (x0,y0+1)).
export function slopeHeight(top, x, y) {
  const u = x - Math.floor(x), v = y - Math.floor(y);
  return (top[0] * (1 - u) + top[1] * u) * (1 - v) + (top[3] * (1 - u) + top[2] * u) * v;
}

// One step forward (sign 1) or back (-1) from cell, facing a direction. Returns
//   { kind: 'move', to, h } | { kind: 'gate', gate } | { kind: 'fall', drop } | { kind: 'blocked' }
export function step(room, cell, facing, sign = 1, heights = heightsOf(room), gates = gatesOf(room), drops = dropsOf(room)) {
  const d = DIRS[facing];
  const to = [cell[0] + d[0] * sign, cell[1] + d[1] * sign];
  const gate = gates.find((g) => eq(g.L, cell) && eq(g.O, to));
  if (gate) return { kind: 'gate', gate };
  const drop = drops.find((g) => eq(g.L, to));
  if (drop && (heights.get(k2(cell[0], cell[1])) ?? 0) === 0) return { kind: 'fall', drop };
  const from = heights.get(k2(cell[0], cell[1])) ?? 0;
  const h = heights.get(k2(to[0], to[1]));
  if (h === undefined || Math.abs(h - from) > 0.5 + 1e-6) return { kind: 'blocked' };
  return { kind: 'move', to, h };
}

// Where room B sits in room A's coordinates when gate gA (in A) leads to gate gB (in B).
export function placement(gA, gB) {
  const want = [-gA.dir[0], -gA.dir[1]];
  let k = 0;
  while (k < 4 && !eq(rot(gB.dir, k), want)) k++;
  const c = rot([gB.L[0] + 0.5, gB.L[1] + 0.5], k);
  return { k, tx: gA.O[0] + 0.5 - c[0], ty: gA.O[1] + 0.5 - c[1], dy: gA.hO - gB.hL };
}

// ---- the hole (M12) ---------------------------------------------------------------------------------------------
// A drop is a gate pointing down: its "plane" is the bottom of the floor slab under the hole, and the room it falls
// into hangs FALL blocks below, its landing spot right under the hole (turned the same way as the room above).
export const FALL = 9;
export const SLAB = 0.35;
export function dropsOf(room) {
  return room.ways.filter((w) => w.kind === 'drop').map((w) => ({ way: w, drop: true, L: [...w.at], O: [...w.at], dir: [0, 0], hL: 0, hO: -FALL }));
}
export function dropPlacement(dA, landing) {
  return { k: 0, tx: dA.L[0] - landing.at[0], ty: dA.L[1] - landing.at[1], dy: -FALL };
}

// What a room shows through its openings: one entry per way on that leads somewhere (closed doors and landings
// show nothing), with the room beyond placed in this room's coordinates (P) and the way back from there.
export function portalsOf(map, roomId) {
  const room = map.rooms[roomId];
  const out = [];
  for (const g of [...gatesOf(room), ...dropsOf(room)]) {
    if (!g.way.to || g.way.closed) continue;
    const [toRoom, toWayId] = splitTo(g.way.to);
    const R = map.rooms[toRoom];
    const toWay = wayOf(R, toWayId);
    if (!R || !toWay) continue;
    const P = g.drop ? dropPlacement(g, toWay) : placement(g, gatesOf(R).find((x) => x.way.id === toWayId));
    out.push({ gate: g, toRoom, toWay: toWayId, P, back: g.drop ? null : toWayId });
  }
  return out;
}

// The portals two deep from a room (M13): each opening, and the openings of the room beyond it except the way
// back, each placed in the first room's coordinates.
export function portalTree(map, roomId, depth = 2) {
  const walk = (id, P, skip, d) => portalsOf(map, id).filter((p) => p.gate.way.id !== skip).map((p) => {
    const Q = compose(P, p.P);
    return { ...p, from: id, Pw: Q, inner: d > 1 ? walk(p.toRoom, Q, p.back, d - 1) : [] };
  });
  return walk(roomId, IDENTITY, null, depth);
}

// a after b: a point placed by b, then by a.
export function compose(a, b) {
  const [tx, ty] = rot([b.tx, b.ty], a.k);
  return { k: (a.k + b.k) % 4, tx: tx + a.tx, ty: ty + a.ty, dy: a.dy + b.dy };
}

export function apply(p, [x, y, z]) {
  const [rx, ry] = rot([x, y], p.k);
  return [rx + p.tx, ry + p.ty, z + p.dy];
}
export const applyDir = (p, v) => rot(v, p.k);
export function invert(p) {
  const [tx, ty] = rot([p.tx, p.ty], -p.k);
  return { k: (4 - p.k) % 4, tx: 0 - tx, ty: 0 - ty, dy: 0 - p.dy };
}
export const IDENTITY = { k: 0, tx: 0, ty: 0, dy: 0 };

// ---- free walking -------------------------------------------------------------------------------------------
// The figure is a small square of half-width RADIUS (a box slides along walls nicely). As in Minecraft, it stands
// on the highest thing under its footprint: touching a step lifts it onto the step (so it never sinks into one),
// and it can walk out to the very edge of a stair. A move is refused if the footprint would touch a wall or a
// closed way, cut a wall's corner, or ask to climb more than half a block, or if it would leave the figure with
// nothing within half a block under it (stepping off the side of a flight). A gate's far cell (O) counts as floor
// only from its own L cell, and only when the gate can be passed; when the centre enters it, the figure has gone
// through (crossed). Moving back the way you came is never refused, so the figure can't get stuck. Slightly off
// line for an opening ahead, it eases sideways into it.
// M38 (0.4.0): a door's far cell is the doorway through the wall, and only its arch is open (DOOR_SPAN across the
// cell, as world.js draws it): the footprint may reach into it only within the arch, or the figure's side went into
// the wall beside the door.
export const RADIUS = 0.22;
export const DOOR_SPAN = [0.22, 0.78];
export const cellOf = (x, y) => [Math.floor(x), Math.floor(y)];

// A hole (drops) counts as floor for the footprint, so you can walk round its edge; when the centre enters it,
// you fall (result.fell).
export function freeMove(pos, [dx, dy], { heights, gates, drops = [], passable = () => true, radius = RADIUS }) {
  let bumped = null;
  const start = cellOf(pos[0], pos[1]);
  const gateOut = (cx, cy, from) => gates.find((q) => q.O[0] === cx && q.O[1] === cy && eq(q.L, from));
  const holeAt = (cx, cy) => drops.find((q) => q.L[0] === cx && q.L[1] === cy);
  const heightAt = (cx, cy, from) => {
    const h = heights.get(k2(cx, cy));
    if (h !== undefined) return h;
    if (holeAt(cx, cy)) return 0;
    const g = gateOut(cx, cy, from);
    if (!g) return undefined;
    if (!passable(g)) { bumped = g; return undefined; }
    return g.hO;
  };
  // What a square centred at (px, py) stands on (the highest cell under it), or null where it can't be at all.
  const footprint = (px, py) => {
    const c = cellOf(px, py);
    const x0 = Math.floor(px - radius), x1 = Math.floor(px + radius - 1e-9);
    const y0 = Math.floor(py - radius), y1 = Math.floor(py + radius - 1e-9);
    let top = -Infinity;
    for (let cx = x0; cx <= x1; cx++) for (let cy = y0; cy <= y1; cy++) {
      const from = cx === c[0] && cy === c[1] ? start : c;
      const h = heightAt(cx, cy, from);
      if (h === undefined) return null;
      if (!heights.has(k2(cx, cy))) {
        const g = gateOut(cx, cy, from);
        if (g && g.way.kind === 'door') {
          const lat = g.dir[0] === 0 ? 0 : 1, u = (lat === 0 ? px : py) - g.O[lat];
          if (u - radius < DOOR_SPAN[0] - 1e-9 || u + radius > DOOR_SPAN[1] + 1e-9) return null;
        }
      }
      if (cx !== c[0] && cy !== c[1] && (heightAt(cx, c[1], c) === undefined || heightAt(c[0], cy, c) === undefined)) return null;
      top = Math.max(top, h);
    }
    return top;
  };
  let [x, y] = pos;
  let support = footprint(x, y);
  const tryMove = (nx, ny) => {
    const next = footprint(nx, ny);
    if (next === null) return false;
    // The centre stays over something within half a block of what you stand on: you can hang over a stair's
    // edge, not float out over the floor beside it.
    const c = cellOf(nx, ny), hc = heightAt(c[0], c[1], start);
    if (hc === undefined || next - hc > 0.5 + 1e-6) return false;
    if (support === null) return true;                                  // somehow off the grid: let it out
    return Math.abs(next - support) <= 0.5 + 1e-6;                      // up a step, not a wall; not off an edge
  };
  // Blocked going straight on, but the cell ahead is open (an opening, a stair, a gap you're slightly off line
  // for)? Ease sideways toward the middle of your cell, as fast as you were walking, so you slip into it.
  const ease = (axis, d) => {
    const c = cellOf(x, y);
    const ahead = axis === 0 ? [c[0] + Math.sign(d), c[1]] : [c[0], c[1] + Math.sign(d)];
    const ha = heightAt(ahead[0], ahead[1], c);
    if (ha === undefined || support === null || Math.abs(ha - support) > 0.5 + 1e-6) return;   // not a way on
    const other = 1 - axis, now = other === 0 ? x : y, mid = c[other] + 0.5;
    const off = mid - now;
    if (Math.abs(off) < 1e-6) return;
    const step = Math.sign(off) * Math.min(Math.abs(d), Math.abs(off));
    const nx = other === 0 ? x + step : x, ny = other === 1 ? y + step : y;
    if (tryMove(nx, ny)) { x = nx; y = ny; support = footprint(x, y); }
  };
  if (dx) { if (tryMove(x + dx, y)) { x += dx; support = footprint(x, y); } else ease(0, dx); }
  if (dy) { if (tryMove(x, y + dy)) { y += dy; support = footprint(x, y); } else ease(1, dy); }
  const end = cellOf(x, y);
  const crossed = gates.find((g) => eq(g.O, end) && eq(g.L, start)) || null;
  const fell = crossed ? null : holeAt(end[0], end[1]) || null;
  return { pos: [x, y], crossed, fell, bumped: crossed ? null : bumped, support: support ?? undefined, wedged: !crossed && !fell && support === null };
}

// Which of the four directions a yaw (0 = ne, clockwise) is closest to.
export function facingOfYaw(yaw) {
  const i = ((Math.round(yaw / (Math.PI / 2)) % 4) + 4) % 4;
  return ['ne', 'se', 'sw', 'nw'][i];
}
