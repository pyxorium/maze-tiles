// layout.js: where everything is in Winter Forest (no three.js, so the tests run it in Node).
// Plan: claude/winter-forest-plan.md (W8 to W28). Grown from the look test's lab/forest/layout.js (which stays as
// it is). Units are the maze's blocks (the figure is about one block tall); y is up, the ground is x, z; north is
// -z. The lamp post stands in the middle of the clearing at (0, 0).
//
// Four paths wind out of the clearing for about 30 blocks (W9) and each ends at its portal:
//   wardrobe   roughly north: the last 8 blocks are the coats lane (W10), ending at the wardrobe's doors
//   tree-door  roughly east: the giant old tree with a tunnel carved into it (W11; its inside is step 2)
//   arch       roughly south: a small glade and the stone arch (W12)
//   slide      roughly west: the library (W13; its inside, the bench and the slide are step 2)
// Each portal has a frame: its origin O (where the path ends), d (onwards, away from the clearing) and r (to the
// right of d). A point's (u, v) in that frame: u along d (negative: on the clearing's side), v to the right.

export const CLEARING = 7;          // the clearing's radius
export const WORLD = 44;            // trees grow out to here
export const PATH_LENGTH = 30;      // W9: each path winds about 30 blocks (a per-forest setting)
export const PATH_END = PATH_LENGTH;
export const LANE = 8;              // W10: the coats lane is the wardrobe path's last 8 blocks

// A small seeded random number generator (mulberry32), so the same seed always grows the same forest.
export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// The four paths (W2), each leaving the clearing roughly towards one compass point and winding as it goes. The
// last stretch straightens (so each portal stands square to its path).
export const PATHS = [
  { id: 'wardrobe', angle: -Math.PI / 2 + 0.25, bend: 1.0 },
  { id: 'tree-door', angle: 0.15, bend: -1.2 },
  { id: 'arch', angle: Math.PI / 2 - 0.2, bend: 0.9 },
  { id: 'slide', angle: Math.PI + 0.1, bend: -0.8 },
];
const STRAIGHT = 0.82;              // the bends stop here (as a share of the way out), so the end runs straight
function angleAt(p, r) {
  const t = Math.max(0, Math.min(STRAIGHT, (r - CLEARING) / (PATH_END - CLEARING)));
  return p.angle + t * p.bend * 0.55 + Math.sin(t * Math.PI * 1.6) * 0.16 * p.bend;
}
export function pathPoints(p, { from = CLEARING - 1.5, to = PATH_END, step = 0.5 } = {}) {
  const pts = [];
  for (let r = from; r <= to + 1e-9; r += step) {
    const a = angleAt(p, r);
    pts.push([Math.cos(a) * r, Math.sin(a) * r]);
  }
  return pts;
}
export const pathOf = (id) => PATHS.find((p) => p.id === id);

// The shortest distance from (x, z) to any path (and which), for keeping trees off the paths.
export function nearestPath(x, z, paths) {
  let best = Infinity, id = null;
  for (const p of paths) {
    const pts = p.pts;
    for (let i = 1; i < pts.length; i++) {
      const [ax, az] = pts[i - 1], [bx, bz] = pts[i];
      const dx = bx - ax, dz = bz - az;
      const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz)));
      const d = Math.hypot(x - (ax + dx * t), z - (az + dz * t));
      if (d < best) { best = d; id = p.id; }
    }
  }
  return { d: best, id };
}

// ---- the portals' frames -------------------------------------------------------------------------------------------
function frameOf(id) {
  const pts = pathPoints(pathOf(id));
  const [ex, ez] = pts[pts.length - 1], [px, pz] = pts[pts.length - 3];
  const len = Math.hypot(ex - px, ez - pz);
  const d = [(ex - px) / len, (ez - pz) / len];
  return { id, o: [ex, ez], d, r: [-d[1], d[0]] };
}
export const FRAMES = Object.fromEntries(PATHS.map((p) => [p.id, frameOf(p.id)]));
export function local(f, x, z) { const dx = x - f.o[0], dz = z - f.o[1]; return [dx * f.d[0] + dz * f.d[1], dx * f.r[0] + dz * f.r[1]]; }
export function world(f, u, v) { return [f.o[0] + f.d[0] * u + f.r[0] * v, f.o[1] + f.d[1] * u + f.r[1] * v]; }
// The yaw that faces along (dx, dz): yaw 0 looks north (-z); forward is (-sin yaw, -cos yaw).
export const yawFacing = (dx, dz) => Math.atan2(-dx, -dz);

// Sizes of the things at the ends of the paths.
export const WARDROBE = { depth: 2.6, half: 1.1, height: 2.45, inner: 0.8 };            // inside: |v| <= inner to walk
export const ARCH = { opening: 1.2, pillar: 0.45, height: 3.6, glade: 3.4, gladeAt: -1.6 }; // opening is the half width
export const TRUNK = { radius: 2.5, at: 3.2, mouth: 0.95, glade: 3.0, gladeAt: -1.0 };   // centre at u = at
export const LIBRARY = { width: 10, depth: 14, front: 0.6, door: 0.7, glade: 3.6, gladeAt: -1.2 };

const site = (id) => FRAMES[id];
export const TRUNK_CENTRE = world(site('tree-door'), TRUNK.at, 0);
export const LIBRARY_CENTRE = world(site('slide'), LIBRARY.front + LIBRARY.depth / 2, 0);

// Walkable glades in front of the arch, the great tree and the library (as the clearing is walkable).
export const GLADES = [
  { id: 'arch', at: world(site('arch'), ARCH.gladeAt, 0), r: ARCH.glade },
  { id: 'tree-door', at: world(site('tree-door'), TRUNK.gladeAt, 0), r: TRUNK.glade },
  { id: 'slide', at: world(site('slide'), LIBRARY.gladeAt, 0), r: LIBRARY.glade },
];
// Where no spruce may grow (beyond keeping off the paths): round the portals and their glades.
export const CLEAR = [
  { at: world(site('arch'), 0, 0), r: 7.5 },
  { at: TRUNK_CENTRE, r: 9.5 },
  { at: LIBRARY_CENTRE, r: 12.5 },
  { at: world(site('wardrobe'), -1.2, 0), r: 3.6 },
];
// The ground is flat round each portal (W6's drifts and bumps everywhere else beyond the clearing).
export const FLAT = [
  { at: world(site('wardrobe'), -1.5, 0), r: 4, fade: 4 },
  { at: world(site('arch'), -0.8, 0), r: 5, fade: 4 },
  { at: TRUNK_CENTRE, r: 7, fade: 4 },
  { at: LIBRARY_CENTRE, r: 11, fade: 4 },
];
const smooth = (e0, e1, x) => { const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
export function flatness(x, z) {
  let k = 1;
  for (const f of FLAT) k = Math.min(k, smooth(f.r, f.r + f.fade, Math.hypot(x - f.at[0], z - f.at[1])));
  return k;
}
// The ground's height: flat in the clearing and at the portals, gently drifted elsewhere (bumps: W6, 0.5).
export function groundHeight(x, z, bumps) {
  const r = Math.hypot(x, z);
  const n = Math.sin(x * 0.35) * Math.cos(z * 0.29) + Math.sin(x * 0.11 + z * 0.17) * 1.6;
  return n * bumps * Math.min(1, Math.max(0, (r - CLEARING + 1) / 6)) * flatness(x, z);
}

// ---- the coats lane (W10) ------------------------------------------------------------------------------------------
// Along the wardrobe path's last 8 blocks, on both sides: t runs 0 (where the lane starts) to 1 (the doors). The
// page draws each spot as a spruce bough, a coat hanging from a bough, or a coat on a hanger on the rail, by t.
export function arcLengths(pts) { const s = [0]; for (let i = 1; i < pts.length; i++) s.push(s[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1])); return s; }
export function alongPath(id, s) {
  const pts = pathPoints(pathOf(id)), L = arcLengths(pts);
  const total = L[L.length - 1];
  s = Math.max(0, Math.min(total, s));
  let i = 1; while (i < L.length - 1 && L[i] < s) i++;
  const k = (s - L[i - 1]) / (L[i] - L[i - 1] || 1);
  const [ax, az] = pts[i - 1], [bx, bz] = pts[i];
  const len = Math.hypot(bx - ax, bz - az) || 1;
  return { x: ax + (bx - ax) * k, z: az + (bz - az) * k, dx: (bx - ax) / len, dz: (bz - az) / len, total };
}
export const pathLength = (id) => { const L = arcLengths(pathPoints(pathOf(id))); return L[L.length - 1]; };
export function laneSpots({ gap = 0.42, side = 0.95 } = {}) {
  const total = pathLength('wardrobe'), out = [];
  for (let s = total - LANE; s <= total - 0.25; s += gap) {
    const a = alongPath('wardrobe', s), t = (s - (total - LANE)) / LANE;
    for (const sd of [-1, 1]) out.push({ x: a.x - a.dz * side * sd, z: a.z + a.dx * side * sd, t, side: sd, dx: a.dx, dz: a.dz });
  }
  return out;
}
// The spruces that crowd in along the lane's first part (smaller, close to the path).
export function laneTrees() {
  const total = pathLength('wardrobe'), out = [];
  let i = 0;
  for (let s = total - LANE - 1.5; s <= total - LANE * 0.42; s += 1.25, i++) {
    const a = alongPath('wardrobe', s);
    for (const sd of [-1, 1]) {
      const off = 2.75 + ((i * 7 + (sd > 0 ? 3 : 0)) % 5) * 0.06;
      out.push({ x: a.x - a.dz * off * sd, z: a.z + a.dx * off * sd, s: 0.66 + ((i * 3 + (sd > 0 ? 1 : 0)) % 4) * 0.03, r: i * 1.7 + sd, lane: true });
    }
  }
  return out;
}

// ---- the spruces -------------------------------------------------------------------------------------------------
// The lane's own spruces, then count more outside the clearing, off the paths and the portals' ground, at least
// `spacing` apart (scaled by size). Each: { x, z, s (scale), r (yaw) }.
export function plantTrees({ seed = 7, count = 260, spacing = 2.6, size = 1, pathWidth = 1.8 } = {}) {
  const rand = rng(seed);
  const paths = PATHS.map((p) => ({ id: p.id, pts: pathPoints(p, { to: p.id === 'wardrobe' ? PATH_END + 3 : PATH_END + 6 }) }));
  const trees = laneTrees();
  const lane = trees.length;
  let tries = 0;
  while (trees.length < count + lane && tries < count * 60) {
    tries++;
    const r = CLEARING + 1.0 + Math.pow(rand(), 0.8) * (WORLD - CLEARING - 1.0);
    const a = rand() * Math.PI * 2;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    const s = size * (0.7 + rand() * 0.6) * (r < CLEARING + 4 ? 1.12 : 1);
    if (r < CLEARING + 1.9 * s) continue;
    if (nearestPath(x, z, paths).d < pathWidth / 2 + 2.0 * s) continue;
    if (CLEAR.some((c) => Math.hypot(x - c.at[0], z - c.at[1]) < c.r + 1.2 * s)) continue;
    if (GLADES.some((g) => Math.hypot(x - g.at[0], z - g.at[1]) < g.r + 2.0 * s)) continue;
    if (trees.some((t) => Math.hypot(t.x - x, t.z - z) < spacing * (t.s + s) / 2)) continue;
    trees.push({ x, z, s, r: rand() * Math.PI * 2 });
  }
  return trees;
}

// How far a spruce blocks walking (its low branches), for its scale.
export const treeRadius = (s) => 1.7 * s;
export const LAMP_RADIUS = 0.35;
export const FIGURE_RADIUS = 0.28;

// Is a figure at (x, z) free to stand there? In the clearing, a glade or on a path (up to its end), and not inside
// a tree, the lamp post, the great tree, the library, or through a portal.
export function canStand(x, z, { trees, paths, pathWidth = 1.8 }) {
  const r = Math.hypot(x, z);
  if (r < LAMP_RADIUS + FIGURE_RADIUS) return false;
  for (const t of trees) if (Math.hypot(t.x - x, t.z - z) < treeRadius(t.s) + FIGURE_RADIUS) return false;
  // The portals.
  {
    const [u, v] = local(FRAMES.wardrobe, x, z);
    if (u > -0.3 && u < 3 && Math.abs(v) < 3) return false;                          // the doors
    if (u > -WARDROBE.depth - 0.1 && u <= -0.3 && Math.abs(v) > WARDROBE.inner) return false;   // inside its sides
  }
  {
    const [u, v] = local(FRAMES.arch, x, z);
    if (u > -0.32 && u < 6 && Math.abs(v) < 6) return false;                         // the arch's face
  }
  if (Math.hypot(x - TRUNK_CENTRE[0], z - TRUNK_CENTRE[1]) < TRUNK.radius + FIGURE_RADIUS) return false;
  {
    const [u, v] = local(FRAMES.slide, x, z);
    if (u > LIBRARY.front - FIGURE_RADIUS && u < LIBRARY.front + LIBRARY.depth + FIGURE_RADIUS && Math.abs(v) < LIBRARY.width / 2 + FIGURE_RADIUS) return false;
  }
  if (r <= CLEARING) return true;
  if (GLADES.some((g) => Math.hypot(x - g.at[0], z - g.at[1]) <= g.r)) return true;
  const near = nearestPath(x, z, paths);
  return near.d <= pathWidth / 2 + 0.25 && r <= PATH_END + 0.6;
}

// One step of free walking: try the move, then each axis alone (sliding along trees and edges).
export function walk(pos, move, world) {
  const tries = [[pos[0] + move[0], pos[1] + move[1]], [pos[0] + move[0], pos[1]], [pos[0], pos[1] + move[1]]];
  for (const p of tries) if (canStand(p[0], p[1], world)) return p;
  return pos;
}

// ---- where travellers arrive (W19) and what touches each portal ----------------------------------------------------
// Each entrance: a spot and a yaw (facing back towards the clearing, as if just stepped out of the portal).
function backFrom(id, u) { const f = FRAMES[id], [x, z] = world(f, u, 0); return { x, z, yaw: yawFacing(-f.d[0], -f.d[1]) }; }
export const ENTRANCES = {
  lamppost: { x: 0, z: 3.2, yaw: 0 },                 // just south of the lamp post, facing it
  wardrobe: backFrom('wardrobe', -2.2),               // a step in from the doors, the coats lane ahead (room for the camera)
  'tree-door': backFrom('tree-door', -0.4),           // step 1: at the tunnel's mouth (step 2: inside, through the door)
  arch: backFrom('arch', -0.9),                        // just out from under the arch, in its glade
};

// Which portal (if any) the figure at (x, z) is touching: walking into the doors, the arch's face, the tunnel's
// mouth, the library's door. { id, kind } or null.
export function touching(x, z) {
  {
    const [u, v] = local(FRAMES.wardrobe, x, z);
    if (u > -0.5 && u < 0.5 && Math.abs(v) < WARDROBE.inner + 0.05) return { id: 'wardrobe', kind: 'portal' };
  }
  {
    const [u, v] = local(FRAMES.arch, x, z);
    if (u > -0.5 && u < 0.5 && Math.abs(v) < ARCH.opening - 0.1) return { id: 'arch', kind: 'portal' };
  }
  {
    const [u, v] = local(FRAMES['tree-door'], x, z);
    if (Math.hypot(x - TRUNK_CENTRE[0], z - TRUNK_CENTRE[1]) < TRUNK.radius + FIGURE_RADIUS + 0.25 && Math.abs(v) < TRUNK.mouth && u < TRUNK.at) return { id: 'tree-door', kind: 'mouth' };
  }
  {
    const [u, v] = local(FRAMES.slide, x, z);
    if (u > LIBRARY.front - FIGURE_RADIUS - 0.25 && u < LIBRARY.front && Math.abs(v) < LIBRARY.door) return { id: 'slide', kind: 'door' };
  }
  return null;
}

// What to call where the figure is (the label at the top).
export function areaOf(x, z) {
  const r = Math.hypot(x, z);
  if (r <= CLEARING + 0.5) return 'the clearing';
  { const [u, v] = local(FRAMES.wardrobe, x, z); if (u > -LANE + 2.5 && u < 0.5 && Math.abs(v) < 3) return 'among the coats'; }
  if (Math.hypot(...[0, 1].map((i) => [x, z][i] - GLADES[0].at[i])) <= GLADES[0].r + 1.5) return 'the stone arch';
  if (Math.hypot(x - TRUNK_CENTRE[0], z - TRUNK_CENTRE[1]) <= TRUNK.radius + 4.5) return 'the great tree';
  if (Math.hypot(...[0, 1].map((i) => [x, z][i] - GLADES[2].at[i])) <= GLADES[2].r + 1.5) return 'the library';
  return 'in the woods';
}
