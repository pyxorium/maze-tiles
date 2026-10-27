// layout.js: where things are in Winter Forest's clearing (no three.js, so the tests can run it in Node).
// Plan: claude/winter-forest-plan.md. Units are the maze's blocks (the figure is about one block tall); y is up,
// the ground is x, z. The lamp post stands in the middle of the clearing at (0, 0).

export const CLEARING = 7;          // the clearing's radius
export const WORLD = 44;            // trees stop here; you can't walk past PATH_END on a path or the trees' edge
export const PATH_END = 30;         // in the look test the paths go this far into the trees and stop

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

// The four paths (W2: wardrobe, tree-door, arch, slide), each leaving the clearing roughly towards one compass
// point and winding as it goes: a list of points from the clearing's edge outwards.
export const PATHS = [
  { id: 'wardrobe', angle: -Math.PI / 2 + 0.25, bend: 1.0 },
  { id: 'tree-door', angle: 0.15, bend: -1.2 },
  { id: 'arch', angle: Math.PI / 2 - 0.2, bend: 0.9 },
  { id: 'slide', angle: Math.PI + 0.1, bend: -0.8 },
];
export function pathPoints(p, { from = CLEARING - 1.5, to = PATH_END, step = 0.5 } = {}) {
  const pts = [];
  for (let r = from; r <= to + 1e-9; r += step) {
    const t = (r - CLEARING) / (PATH_END - CLEARING);
    const a = p.angle + Math.max(0, t) * p.bend * 0.55 + Math.sin(Math.max(0, t) * Math.PI * 1.6) * 0.16 * p.bend;
    pts.push([Math.cos(a) * r, Math.sin(a) * r]);
  }
  return pts;
}

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

// The spruces: count trees outside the clearing, off the paths, at least `spacing` apart (scaled by size), with
// a few right at the clearing's edge so it reads as a clearing. Each: { x, z, s (scale), r (yaw) }.
export function plantTrees({ seed = 7, count = 260, spacing = 2.6, size = 1, pathWidth = 1.8 } = {}) {
  const rand = rng(seed);
  const paths = PATHS.map((p) => ({ id: p.id, pts: pathPoints(p, { to: PATH_END + 6 }) }));
  const trees = [];
  let tries = 0;
  while (trees.length < count && tries < count * 60) {
    tries++;
    const r = CLEARING + 1.0 + Math.pow(rand(), 0.8) * (WORLD - CLEARING - 1.0);
    const a = rand() * Math.PI * 2;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    const s = size * (0.7 + rand() * 0.6) * (r < CLEARING + 4 ? 1.12 : 1);
    // Their lowest branches spread about 2.4 × scale: keep them off the paths and outside the clearing.
    if (r < CLEARING + 1.9 * s) continue;
    if (nearestPath(x, z, paths).d < pathWidth / 2 + 2.0 * s) continue;
    if (trees.some((t) => Math.hypot(t.x - x, t.z - z) < spacing * (t.s + s) / 2)) continue;
    trees.push({ x, z, s, r: rand() * Math.PI * 2 });
  }
  return trees;
}

// How far a spruce blocks walking (its low branches), for its scale.
export const treeRadius = (s) => 1.7 * s;        // the low branches reach out almost to the ground
export const LAMP_RADIUS = 0.35;
export const FIGURE_RADIUS = 0.28;

// Is a figure at (x, z) free to stand there? Inside the clearing or on a path (up to its end), and not inside a
// tree or the lamp post.
export function canStand(x, z, { trees, paths, pathWidth = 1.8 }) {
  const r = Math.hypot(x, z);
  if (Math.hypot(x, z) < LAMP_RADIUS + FIGURE_RADIUS) return false;
  for (const t of trees) if (Math.hypot(t.x - x, t.z - z) < treeRadius(t.s) + FIGURE_RADIUS) return false;
  if (r <= CLEARING) return true;
  const near = nearestPath(x, z, paths);
  return near.d <= pathWidth / 2 + 0.25 && r <= PATH_END + 0.01;
}

// One step of free walking: try the move, then each axis alone (sliding along trees and the clearing's edge).
export function walk(pos, move, world) {
  const tries = [[pos[0] + move[0], pos[1] + move[1]], [pos[0] + move[0], pos[1]], [pos[0], pos[1] + move[1]]];
  for (const p of tries) if (canStand(p[0], p[1], world)) return p;
  return pos;
}
