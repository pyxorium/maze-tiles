// Winter Forest's look test (lab/forest/layout.js, claude/winter-forest-plan.md W3): the forest grows the same
// from the same seed, keeps clear of the clearing and the paths, every path can be walked to its end, and walking
// slides along trees instead of sticking.
import test from 'node:test';
import assert from 'node:assert/strict';
import { CLEARING, PATHS, pathPoints, plantTrees, canStand, walk, nearestPath, treeRadius } from '../lab/forest/layout.js';

const world = (o = {}) => ({ trees: plantTrees(o), paths: PATHS.map((p) => ({ id: p.id, pts: pathPoints(p) })), pathWidth: o.pathWidth ?? 1.8 });

test('the same seed grows the same forest; another seed, another', () => {
  assert.deepEqual(plantTrees({ seed: 7 }), plantTrees({ seed: 7 }));
  assert.notDeepEqual(plantTrees({ seed: 7 }), plantTrees({ seed: 8 }));
  assert.equal(plantTrees({ count: 260 }).length, 260);
});

test('four paths (W2: wardrobe, tree-door, arch, slide), and no tree on them or in the clearing', () => {
  assert.deepEqual(PATHS.map((p) => p.id), ['wardrobe', 'tree-door', 'arch', 'slide']);
  const w = world();
  for (const t of w.trees) {
    assert.ok(Math.hypot(t.x, t.z) >= CLEARING + 1.9 * t.s - 1e-9, 'outside the clearing');
    assert.ok(nearestPath(t.x, t.z, w.paths).d >= w.pathWidth / 2 + treeRadius(t.s) - 1e-9, 'off the paths');
  }
});

test('every path can be walked to its end, for a few forests', () => {
  for (const seed of [7, 11, 42]) {
    const w = world({ seed });
    for (const p of w.paths) for (const [x, z] of p.pts) assert.ok(canStand(x, z, w), `${p.id} at ${x.toFixed(1)}, ${z.toFixed(1)} (seed ${seed})`);
  }
});

test('the lamp post and the trees stop you; you slide along them', () => {
  const w = world();
  assert.equal(canStand(0, 0.2, w), false, 'not inside the lamp post');
  assert.ok(canStand(0, 3.2, w), 'the start is free');
  const p = walk([0, 1], [0.3, -0.5], w);
  assert.ok(p[0] > 0, 'slides sideways past the post');
  assert.equal(canStand(CLEARING + 3, 0.0 + 6, w), false, 'off the paths beyond the clearing is forest');
});
