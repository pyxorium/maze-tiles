// view.js: drawing the maze, seamless and two deep (M13).
//
// The camera's room is drawn in full. Each of its openings is then marked in the stencil buffer, filled with the
// next room's sky, and the next room is drawn there, placed so it lines up with where you'll arrive and clipped
// at the opening. Inside that, the next room's own openings (except the way back) are done the same way, one
// level deeper. Beyond two deep an opening shows only a sky colour, softly faded towards the room it's in. The
// same room can be drawn more than once (on the Penrose loop, Landing I can show up in its own view).
//
// The stencil counts how deep a pixel is: an opening's mask adds one where it can be seen, the room beyond is
// drawn where the count matches, and afterwards the count is wound back so the next opening starts clean.

import * as THREE from 'three';
import { buildRoom, srgb } from './world.js';
import { portalTree, apply, rot } from './walk.js';

export const DEPTH = 2;

export function createView(renderer, map) {
  const rooms = new Map();
  const trees = new Map();
  const room = (id) => {
    if (!rooms.has(id)) {
      const r = buildRoom(map, id);
      r.maskMeshes = new Map([...r.masks].map(([k, m]) => [k, new THREE.Mesh(m.geo, maskMat)]));
      rooms.set(id, r);
    }
    return rooms.get(id);
  };
  const tree = (id) => { if (!trees.has(id)) trees.set(id, portalTree(map, id, DEPTH + 1)); return trees.get(id); };

  const maskMat = new THREE.MeshBasicMaterial({
    colorWrite: false, depthWrite: false, side: THREE.DoubleSide,
    stencilWrite: true, stencilFunc: THREE.EqualStencilFunc, stencilZPass: THREE.IncrementStencilOp,
    stencilFail: THREE.KeepStencilOp, stencilZFail: THREE.KeepStencilOp,
  });
  // Full-screen passes: the sky inside an opening, and winding the stencil back afterwards.
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quadGeo = new THREE.PlaneGeometry(2, 2);
  const skyMat = new THREE.MeshBasicMaterial({ depthTest: false, depthWrite: false, stencilWrite: true, stencilFunc: THREE.EqualStencilFunc, stencilZPass: THREE.KeepStencilOp });
  const undoMat = new THREE.MeshBasicMaterial({ colorWrite: false, depthTest: false, depthWrite: false, stencilWrite: true, stencilFunc: THREE.EqualStencilFunc, stencilZPass: THREE.DecrementStencilOp });
  const sky = new THREE.Mesh(quadGeo, skyMat);
  const undo = new THREE.Mesh(quadGeo, undoMat);
  for (const m of [sky, undo]) m.frustumCulled = false;
  const scene = new THREE.Scene();
  const only = (...objs) => { scene.clear(); for (const o of objs) scene.add(o); };

  function setPass(materials, ref = null, clip = null) {
    for (const m of materials) {
      m.stencilWrite = ref !== null;
      m.stencilRef = ref ?? 0;
      m.stencilFunc = THREE.EqualStencilFunc;
      m.stencilZPass = THREE.KeepStencilOp;
      m.clippingPlanes = clip;
      m.needsUpdate = true;
    }
  }
  const place = (obj, P) => { obj.rotation.set(0, -P.k * Math.PI / 2, 0); obj.position.set(P.tx, P.dy, P.ty); obj.updateMatrixWorld(true); };
  // A point or a direction from a room's own (three) coordinates into the view's, for placement P.
  const pointIn = (P, v) => { const [x, y, z] = apply(P, [v.x, v.z, v.y]); return new THREE.Vector3(x, z, y); };
  const dirIn = (P, v) => { const [x, y] = rot([v.x, v.z], P.k); return new THREE.Vector3(x, v.y, y); };

  const fill = (ref, rgb) => { skyMat.color = srgb(rgb); skyMat.stencilRef = ref; only(sky); renderer.render(scene, quadCam); };
  const unwind = (ref) => { undoMat.stencilRef = ref; only(undo); renderer.render(scene, quadCam); };

  let drawnCount = 0;
  function portals(list, level, parentP, camera) {
    for (const p of list) {
      const from = room(p.from);
      const m = from.masks.get(p.gate.way.id);
      if (!m) continue;
      const point = pointIn(parentP, m.point), normal = dirIn(parentP, m.normal);
      if (camera.position.clone().sub(point).dot(normal) >= 0) continue;   // seen from beyond: nothing to show
      const mesh = from.maskMeshes.get(p.gate.way.id);
      place(mesh, parentP);
      maskMat.stencilRef = level;
      only(mesh);
      renderer.render(scene, camera);
      const next = map.areas[map.rooms[p.toRoom].area].bg;
      if (level < DEPTH) {
        fill(level + 1, next);
        const r = room(p.toRoom);
        place(r.group, p.Pw);
        setPass(r.materials, level + 1, [new THREE.Plane(normal, -normal.dot(point) + 0.02)]);
        only(r.group);
        renderer.render(scene, camera);
        setPass(r.materials);
        drawnCount++;
        portals(p.inner, level + 1, p.Pw, camera);
      } else {
        const here = map.areas[map.rooms[p.from].area].bg;
        fill(level + 1, next.map((c, i) => c + (here[i] - c) * 0.55));
      }
      unwind(level + 1);
    }
  }

  // Draws everything but the figure: the view room, its markers, and the rooms seen through its openings.
  function draw(viewId, camera, extras = []) {
    const v = room(viewId);
    renderer.setClearColor(srgb(v.area.bg), 1);
    renderer.clear(true, true, true);
    place(v.group, { k: 0, tx: 0, ty: 0, dy: 0 });
    setPass(v.materials);
    only(v.group, ...extras);
    renderer.render(scene, camera);
    drawnCount = 1;
    portals(tree(viewId), 0, { k: 0, tx: 0, ty: 0, dy: 0 }, camera);
    return drawnCount;
  }

  return { room, tree, draw, renderScene: (objs, camera) => { only(...objs); renderer.render(scene, camera); } };
}
