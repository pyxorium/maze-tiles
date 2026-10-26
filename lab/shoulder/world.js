// world.js: a maze room in 3D (three.js), built from the same map data as the isometric tile.
// Map (x, y) across the floor and z up become three's (X, Z) and Y. One block = 1. Flat colours with fixed
// shading by face direction, as in the isometric look (top x1.12; the sides darker), so no lights are needed.
//
// buildRoom(map, id, { open }) → { group, materials, area, masks: Map(way id → mask geometry info) }
//   open: the way ids shown as real openings (seamless mode): their doors are holes, their stairs end in a gap,
//   and nothing is drawn beyond them (the next room is drawn there through the opening instead).

import * as THREE from 'three';
import { geometry } from '../../iso/tile/graph.js';
import { gatesOf } from './walk.js';

const SLAB = 0.35;
const FACE = { up: 1.12, down: 0.6, px: 0.68, nx: 0.92, pz: 0.86, nz: 0.78 };
const LIGHT = new THREE.Vector3(0.35, 0.85, 0.45).normalize();

export const srgb = (c, f = 1) => new THREE.Color().setRGB(...c.map((v) => Math.max(0, Math.min(255, v * f)) / 255), THREE.SRGBColorSpace);

// Colour every vertex of a (non-indexed) geometry by its face direction (boxes) or a soft light (round things).
export function shade(geo, rgb, smooth = false) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  if (!g.attributes.normal) g.computeVertexNormals();
  const n = g.attributes.normal;
  const col = new Float32Array(n.count * 3);
  const v = new THREE.Vector3();
  for (let i = 0; i < n.count; i++) {
    v.fromBufferAttribute(n, i);
    let f;
    if (smooth) f = 0.66 + 0.5 * Math.max(0, v.dot(LIGHT));
    else {
      const ax = Math.abs(v.x), ay = Math.abs(v.y), az = Math.abs(v.z);
      if (ay >= ax && ay >= az) f = v.y > 0 ? FACE.up : FACE.down;
      else if (ax >= az) f = v.x > 0 ? FACE.px : FACE.nx;
      else f = v.z > 0 ? FACE.pz : FACE.nz;
    }
    const c = srgb(rgb, f);
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

// A box from map coordinates: x, y (floor), z (height), sizes w (x), d (y), h (z).
function boxGeo(x, y, z, w, d, h) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(x + w / 2, z + h / 2, y + d / 2);
  return g;
}

// The arch of a door, in a wall's own plane: u across (0..1), v up.
export function archShape(u0 = 0.22, u1 = 0.78, top = 1.25) {
  const r = (u1 - u0) / 2, s = new THREE.Shape();
  s.moveTo(u0, 0); s.lineTo(u0, top); s.absarc(u0 + r, top, r, Math.PI, 0, true); s.lineTo(u1, 0); s.lineTo(u0, 0);
  return s;
}
export const ARCH_TOP = 1.25 + 0.28;

// Put a shape drawn in a wall plane (u across, v up) onto the ne wall (along x at y = 0) or the nw wall (along y
// at x = 0), at cell `at`, `off` out from the face into the room.
function onWall(geo, side, at, off = 0) {
  if (side === 'ne') geo.translate(at, 0, off);
  else { geo.rotateY(-Math.PI / 2); geo.translate(off, 0, at); }
  return geo;
}

export function buildRoom(map, id, { open = new Set() } = {}) {
  const room = map.rooms[id];
  const area = map.areas[room.area];
  const [W, D] = room.size;
  const wallH = room.wallHeight || 3;
  const parts = [];                              // geometries sharing the room's one vertex-colour material
  const extra = [];                              // meshes with their own material (pictures, flat shapes)
  const masks = new Map();
  const add = (geo, rgb, smooth) => parts.push(shade(geo, rgb, smooth));

  const ways = room.ways.map((w) => ({ w, g: geometry(room, w), open: open.has(w.id) }));
  const gates = new Map(gatesOf(room).map((g) => [g.way.id, g]));
  const holes = new Set(ways.filter((x) => x.g.hole).map((x) => `${x.g.hole.x},${x.g.hole.y}`));

  // The floor: one block-thick tile per cell, checkered.
  for (let x = 0; x < W; x++) for (let y = 0; y < D; y++) {
    if (holes.has(`${x},${y}`)) continue;
    add(boxGeo(x, y, -SLAB, 1, 1, SLAB), area.floor.map((c) => c * ((x + y) % 2 === 0 ? 1 : 0.93)));
  }

  // Walls: a row along the ne side, a column along the nw side, and their corner.
  const wallCell = new Map();          // `${side}:${at}` → what's there
  for (const { w, g, open: isOpen } of ways) {
    if (g.door) wallCell.set(`${w.side}:${w.at}`, { door: true, open: isOpen, closed: w.closed });
    if (g.gap) wallCell.set(`${w.side}:${w.at}`, { gap: true });
    if (g.notch) wallCell.set(`${w.side}:${w.at}`, isOpen ? { gap: true } : { notch: g.notch.h });
  }
  const wallAt = (side, at) => {
    const c = wallCell.get(`${side}:${at}`);
    const [x, y] = side === 'ne' ? [at, -1] : [-1, at];
    if (!c) { add(boxGeo(x, y, 0, 1, 1, wallH), area.wall); return; }
    if (c.gap) return;
    if (c.notch !== undefined) { add(boxGeo(x, y, 0, 1, 1, c.notch), area.wall); return; }
    // A door: the wall with an arched hole through it.
    const s = new THREE.Shape();
    s.moveTo(0, 0); s.lineTo(1, 0); s.lineTo(1, wallH); s.lineTo(0, wallH); s.lineTo(0, 0);
    s.holes.push(archShape());
    const geo = new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false, curveSegments: 10 });
    geo.translate(0, 0, -1);                 // the extrusion runs back from the face (y = 0) into the wall
    add(onWall(geo, side, at), area.wall);
    if (c.open) add(boxGeo(x, y, -SLAB, 1, 1, SLAB), area.floor);   // a floor through the doorway
    if (!c.open) {
      // Closed (or fade mode): a dark doorway, or a closed door with a gold edge.
      const fill = new THREE.ShapeGeometry(archShape(), 10);
      onWall(fill, side, at, -0.3);
      const m = new THREE.Mesh(fill, new THREE.MeshBasicMaterial({ color: srgb(area.wall, c.closed ? 0.62 : 0.28) }));
      extra.push(m);
    }
  };
  for (let x = 0; x < W; x++) wallAt('ne', x);
  for (let y = 0; y < D; y++) wallAt('nw', y);
  add(boxGeo(-1, -1, 0, 1, 1, wallH), area.wall);

  // What the ways on add: steps, ramps, walkways. Nothing beyond an open gate.
  for (const { w, g, open: isOpen } of ways) {
    const gate = gates.get(w.id);
    for (const s of g.solids) {
      const beyond = gate && isOutside(room, s.x, s.y);
      if (beyond && isOpen) continue;
      const rgb = s.role === 'feature' ? area.feature : area.floor;
      const c = s.fadeOut ? rgb.map((v, i) => v + (area.bg[i] - v) * 0.5) : rgb;
      if (s.slope) add(slopeGeo(s), c);
      else add(boxGeo(s.x, s.y, s.bot[0], 1, 1, s.top[0] - s.bot[0]), c);
    }
    if (gate && isOpen) masks.set(w.id, maskFor(room, w, gate, wallH));
  }

  // Landmarks.
  for (const m of room.marks || []) {
    if (m.kind === 'orb' || m.kind === 'pillar') {
      const [x, y] = m.at;
      add(boxGeo(x + 0.25, y + 0.25, 0, 0.5, 0.5, 1.4), area.pillar);
      if (m.kind === 'orb') { const s = new THREE.SphereGeometry(0.26, 20, 14); s.translate(x + 0.5, 1.7, y + 0.5); add(s, area.accent, true); }
    } else if (m.kind === 'obelisk') {
      const [x, y] = m.at;
      add(boxGeo(x + 0.15, y + 0.15, 0, 0.7, 0.7, 3.4), area.pillar);
      const c = new THREE.ConeGeometry(0.5, 0.9, 4); c.rotateY(Math.PI / 4); c.translate(x + 0.5, 3.85, y + 0.5); add(c, area.accent);
    } else if (m.kind === 'arches') {
      for (let i = 0; i < m.count; i++) {
        const at = m.from + i;
        if (wallCell.has(`${m.side}:${at}`)) continue;
        const geo = new THREE.ShapeGeometry(archShape(0.17, 0.83, 1.45), 10);
        extra.push(new THREE.Mesh(onWall(geo, m.side, at, 0.01), new THREE.MeshBasicMaterial({ color: srgb(area.wall, 0.8) })));
      }
    } else if (m.kind === 'numeral') {
      const tex = numeralTexture(m.text, area.wall);
      const geo = new THREE.PlaneGeometry(1.3, 1.3);
      if (m.side === 'nw') { geo.rotateY(Math.PI / 2); geo.translate(0.01, 1.95, m.at); } else geo.translate(m.at, 1.95, 0.01);
      extra.push(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })));
    } else if (m.kind === 'railing') {
      const front = new Set(room.ways.filter((w) => w.side === 'se' || w.side === 'sw').map((w) => `${w.side}:${w.at}`));
      for (let y = 0; y < D; y++) if (!front.has(`se:${y}`)) add(boxGeo(W, y, 0, 0.18, 1, 0.55), area.wall);
      for (let x = 0; x < W; x++) if (!front.has(`sw:${x}`)) add(boxGeo(x, D, 0, 1, 0.18, 0.55), area.wall);
    } else if (m.kind === 'blocks') {
      for (const [x, y, w, d, h] of m.blocks) add(boxGeo(x, y, 0, w, d, h), area.feature);
    }
  }

  const material = new THREE.MeshBasicMaterial({ vertexColors: true });
  const merged = mergeGeometries(parts);
  const group = new THREE.Group();
  group.add(new THREE.Mesh(merged, material));
  for (const m of extra) group.add(m);
  const materials = [material, ...extra.map((m) => m.material)];
  return { id, room, area, group, materials, masks, gates, wallH };
}

const isOutside = (room, x, y) => x < 0 || y < 0 || x >= room.size[0] || y >= room.size[1];

function slopeGeo(s) {
  // A box whose top corners sit at four heights (x,y), (x+1,y), (x+1,y+1), (x,y+1).
  const g = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const X = p.getX(i) + 0.5, Y = p.getY(i) + 0.5, Zz = p.getZ(i) + 0.5;  // 0..1 each
    const corner = X < 0.5 ? (Zz < 0.5 ? 0 : 3) : (Zz < 0.5 ? 1 : 2);
    const h = Y > 0.5 ? s.top[corner] : s.bot[corner];
    p.setXYZ(i, s.x + X, h, s.y + Zz);
  }
  g.computeVertexNormals();
  return g;
}

function mergeGeometries(list) {
  let count = 0;
  for (const g of list) count += g.attributes.position.count;
  const pos = new Float32Array(count * 3), col = new Float32Array(count * 3);
  let o = 0;
  for (const g of list) {
    pos.set(g.attributes.position.array, o * 3);
    col.set(g.attributes.color.array, o * 3);
    o += g.attributes.position.count;
  }
  const m = new THREE.BufferGeometry();
  m.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  m.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return m;
}

function numeralTexture(text, wall) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d');
  const lum = 0.3 * wall[0] + 0.59 * wall[1] + 0.11 * wall[2];
  const f = lum < 120 ? 1.5 : 0.55;
  ctx.fillStyle = `rgb(${wall.map((v) => Math.min(255, Math.round(v * f))).join(',')})`;
  ctx.font = 'bold 190px Georgia, "Times New Roman", serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 138);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// The opening a neighbouring room shows through, in this room's coordinates: a shape on the gate's plane,
// plus the plane itself (to clip the neighbour so only what's beyond the gate shows).
function maskFor(room, w, gate, wallH) {
  const [W, D] = room.size;
  let geo;
  if (w.kind === 'door') {
    // At the back of the wall, so the doorway's own sides and floor are drawn in front of the room beyond.
    geo = new THREE.ShapeGeometry(archShape(), 10);
    onWall(geo, w.side, w.at, -0.999);
  } else {
    // A column across the gate: a wall gap's full height, or tall for stairs and open edges.
    const back = w.side === 'ne' || w.side === 'nw';
    const y0 = (w.kind === 'hallway' && back) ? 0 : gate.hL - (back ? 0.02 : 4);
    const y1 = (w.kind === 'hallway' && back) ? wallH : gate.hL + 7;
    geo = new THREE.PlaneGeometry(1, y1 - y0);
    geo.translate(0.5, (y0 + y1) / 2, 0);
    if (w.side === 'ne') geo.translate(w.at, 0, 0);
    else if (w.side === 'nw') { geo.rotateY(-Math.PI / 2); geo.translate(0, 0, w.at); }
    else if (w.side === 'se') { geo.rotateY(-Math.PI / 2); geo.translate(W, 0, w.at); }
    else geo.translate(w.at, 0, D);
  }
  // The gate's plane: through the boundary between L and O, normal pointing out of the room.
  const point = new THREE.Vector3(gate.L[0] + 0.5 + gate.dir[0] * 0.5, 0, gate.L[1] + 0.5 + gate.dir[1] * 0.5);
  const normal = new THREE.Vector3(gate.dir[0], 0, gate.dir[1]);
  const top = w.kind === 'door' ? ARCH_TOP : Infinity;
  return { geo, point, normal, top };
}

// The figure (M1, now in 3D): a rounded white body, a dark head, a cap in the area's accent pointing the way
// it faces (local -Z), a soft shadow. About 1.2 blocks tall.
export function buildFigure() {
  const group = new THREE.Group();
  const body = new THREE.Mesh(shade(new THREE.CapsuleGeometry(0.2, 0.46, 6, 16).translate(0, 0.43, 0), [250, 250, 252], true), new THREE.MeshBasicMaterial({ vertexColors: true }));
  const head = new THREE.Mesh(shade(new THREE.SphereGeometry(0.17, 18, 12).translate(0, 1.0, 0), [60, 58, 78], true), new THREE.MeshBasicMaterial({ vertexColors: true }));
  const capMat = new THREE.MeshBasicMaterial({ color: 0xf0b046 });
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.24, 12).rotateX(-Math.PI / 2).translate(0, 1.02, -0.22), capMat);
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.3, 24).rotateX(-Math.PI / 2).translate(0, 0.005, 0), new THREE.MeshBasicMaterial({ color: 0x281e1e, transparent: true, opacity: 0.18, depthWrite: false }));
  group.add(shadow, body, head, cap);
  return { group, capMat, materials: [body.material, head.material, capMat, shadow.material] };
}
