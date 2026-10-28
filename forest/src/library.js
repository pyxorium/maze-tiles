// library.js: the library's inside (W13, W29, W30; step 2 of W28), built inside its own cottage so its windows look
// out on the real forest. It is a scene of its own, drawn over the forest (main.js: the forest first, then this, the
// cottage's outside hidden while you're in): so its lamps and fire light only the room, and the moonlight stays out.
//   the room       panelled walls, a beamed ceiling, board floor, trunks set into the walls as columns
//   windows        the tall ones (front-right, the right side) and the high round ones (front-left and the left side,
//                  above the mezzanine): frosted glass you see the forest and the falling snow through
//   the mezzanine  along the left wall over bays of shelves, a railing, the stairs up from the back; at its front end
//                  the reading nook: an armchair and a small lamp by the round window towards the lamp post (W29)
//   the back wall  the fireplace (the warmest light, flickering), a tall shelf with a rolling ladder, a shorter one
//   tables         two, with lamps; on the first, books left open, a candle and a cup (W30)
//   the bench      in the front-right corner, and above it the figurine-sized door with its keyhole (W14, W18)
// All in the slide portal's frame (layout.js FRAMES.slide): u from the door to the back wall, v to the right.
import * as THREE from 'three';
import { LIB, LIB_FURNITURE } from './inside.js';
import { rng } from './layout.js';
import { col, glowTexture } from './scene.js';
import { P, frameGroup } from './portals.js';
import { woodTexture, barkTexture, stoneTexture, panelTexture, pageTexture, frostTexture } from './textures.js';

const box = (u0, u1, v0, v1, y0, y1, mat) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(Math.abs(v1 - v0), Math.abs(y1 - y0), Math.abs(u1 - u0)), mat);
  m.position.copy(P((u0 + u1) / 2, (y0 + y1) / 2, (v0 + v1) / 2));
  return m;
};
const furniture = (id) => LIB_FURNITURE.find((f) => f.id === id);

export function createLibrary() {
  const scene = new THREE.Scene();
  const g = frameGroup('slide');
  scene.add(g);
  const { u0, u1, v: V, ceiling: H } = LIB;
  const rand = rng(91);

  // ---- materials ------------------------------------------------------------------------------------------------------
  const panelTex = panelTexture(); panelTex.wrapS = panelTex.wrapT = THREE.RepeatWrapping;
  const panel = new THREE.MeshLambertMaterial({ map: panelTex, side: THREE.DoubleSide });
  const dark = new THREE.MeshLambertMaterial({ map: woodTexture('#3e2716', 'rgba(20,10,4,0.4)', 1) });
  const wood = new THREE.MeshLambertMaterial({ map: woodTexture('#6a4428', 'rgba(30,16,8,0.3)', 1) });
  const floorTex = woodTexture('#5b3b22', 'rgba(25,12,5,0.35)', 6); floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping; floorTex.repeat.set(3, 5);
  const floorMat = new THREE.MeshLambertMaterial({ map: floorTex });
  const bark = new THREE.MeshLambertMaterial({ map: barkTexture(), color: 0xb7a99a });
  const stone = new THREE.MeshLambertMaterial({ map: stoneTexture(7), color: 0x9a948a });
  const iron = new THREE.MeshLambertMaterial({ color: 0x24262c });
  const brass = new THREE.MeshLambertMaterial({ color: 0xb08a4a, emissive: 0x1a1006 });

  // ---- the floor, the ceiling and its beams -------------------------------------------------------------------------
  {
    const f = new THREE.Mesh(new THREE.PlaneGeometry(2 * V, u1 - u0).rotateX(-Math.PI / 2), floorMat);
    f.position.copy(P((u0 + u1) / 2, 0.01, 0)); g.add(f);
    const c = new THREE.Mesh(new THREE.PlaneGeometry(2 * V, u1 - u0).rotateX(Math.PI / 2), dark);
    c.position.copy(P((u0 + u1) / 2, H, 0)); g.add(c);
    for (let u = u0 + 1.4; u < u1; u += 2.2) g.add(box(u - 0.12, u + 0.12, -V, V, H - 0.26, H, dark));
  }

  // ---- the walls: panelling round the window openings -------------------------------------------------------------------
  // Each wall is cut into rectangles that miss its windows. a runs along the wall; holes are { a0, a1, y0, y1 }.
  function wall(kind, holes) {
    const len = kind === 'front' || kind === 'back' ? [-V, V] : [u0, u1];
    const as = new Set([len[0], len[1]]), ys = new Set([0, H]);
    for (const h of holes) { as.add(h.a0); as.add(h.a1); ys.add(h.y0); ys.add(h.y1); }
    const A = [...as].sort((p, q) => p - q), Y = [...ys].sort((p, q) => p - q);
    for (let i = 0; i < A.length - 1; i++) for (let j = 0; j < Y.length - 1; j++) {
      const a = (A[i] + A[i + 1]) / 2, y = (Y[j] + Y[j + 1]) / 2;
      if (holes.some((h) => a > h.a0 && a < h.a1 && y > h.y0 && y < h.y1)) continue;
      const w = A[i + 1] - A[i], hh = Y[j + 1] - Y[j];
      const geo = new THREE.PlaneGeometry(w, hh);
      { const uv = geo.attributes.uv; for (let k = 0; k < uv.count; k++) uv.setXY(k, (A[i] + uv.getX(k) * w) / 2, (Y[j] + uv.getY(k) * hh) / 2); }
      const m = new THREE.Mesh(geo, panel);
      if (kind === 'front') { m.position.copy(P(u0, y, a)); }
      else if (kind === 'back') { m.position.copy(P(u1, y, a)); m.rotation.y = Math.PI; }
      else if (kind === 'left') { m.position.copy(P(a, y, -V)); m.rotation.y = -Math.PI / 2; }
      else { m.position.copy(P(a, y, V)); m.rotation.y = Math.PI / 2; }
      g.add(m);
    }
  }
  const holes = { front: [], back: [], left: [], right: [] };
  for (const t of LIB.tall) holes[t.wall].push({ a0: t.at - t.w / 2, a1: t.at + t.w / 2, y0: t.sill, y1: t.sill + t.h });
  for (const r of LIB.round) holes[r.wall].push({ a0: r.at - r.r - 0.02, a1: r.at + r.r + 0.02, y0: r.y - r.r - 0.02, y1: r.y + r.r + 0.02 });
  for (const k of Object.keys(holes)) wall(k, holes[k]);

  // ---- the windows: frosted glass and frames, seen from inside -------------------------------------------------------
  const frost = new THREE.MeshBasicMaterial({ map: frostTexture(false), transparent: true, depthWrite: false, side: THREE.DoubleSide });
  const frostRound = new THREE.MeshBasicMaterial({ map: frostTexture(true), transparent: true, depthWrite: false, side: THREE.DoubleSide });
  const frameMat = new THREE.MeshLambertMaterial({ color: 0x3a2818 });
  const onWall = (kind, a, y, obj) => {
    if (kind === 'front') obj.position.copy(P(u0, y, a));
    else if (kind === 'left') { obj.position.copy(P(a, y, -V)); obj.rotation.y = -Math.PI / 2; }
    else { obj.position.copy(P(a, y, V)); obj.rotation.y = Math.PI / 2; }
    g.add(obj);
  };
  for (const t of LIB.tall) {
    const h = new THREE.Group();
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(t.w, t.h), frost); glass.renderOrder = 2; h.add(glass);
    for (const [w, hh, x, y] of [[t.w + 0.16, 0.12, 0, -t.h / 2], [t.w + 0.16, 0.12, 0, t.h / 2], [0.12, t.h, -t.w / 2, 0], [0.12, t.h, t.w / 2, 0], [0.06, t.h, 0, 0], [t.w, 0.06, 0, t.h * 0.05]]) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, hh, 0.12), frameMat); b.position.set(x, y, 0.02); h.add(b);
    }
    // A deep sill to put things on.
    const sill = new THREE.Mesh(new THREE.BoxGeometry(t.w + 0.3, 0.06, 0.3), wood); sill.position.set(0, -t.h / 2 - 0.03, 0.15); h.add(sill);
    onWall(t.wall, t.at, t.sill + t.h / 2, h);
  }
  for (const r of LIB.round) {
    const h = new THREE.Group();
    const plate = new THREE.Shape(); const s = r.r + 0.02;
    plate.moveTo(-s, -s); plate.lineTo(s, -s); plate.lineTo(s, s); plate.lineTo(-s, s); plate.lineTo(-s, -s);
    const hole = new THREE.Path(); hole.absarc(0, 0, r.r, 0, Math.PI * 2, true); plate.holes.push(hole);
    h.add(new THREE.Mesh(new THREE.ShapeGeometry(plate, 24), panel));
    const glass = new THREE.Mesh(new THREE.CircleGeometry(r.r, 24), frostRound); glass.renderOrder = 2; h.add(glass);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r.r, 0.06, 6, 28), frameMat); ring.position.z = 0.02; h.add(ring);
    for (const a of [0, Math.PI / 2]) { const bar = new THREE.Mesh(new THREE.BoxGeometry(2 * r.r, 0.04, 0.05), frameMat); bar.rotation.z = a; bar.position.z = 0.02; h.add(bar); }
    onWall(r.wall, r.at, r.y, h);
  }

  // ---- the front door, from inside ----------------------------------------------------------------------------------
  {
    const dw = LIB.door, dh = 2.4, sh = new THREE.Shape();
    sh.moveTo(-dw, 0); sh.lineTo(-dw, dh - dw); sh.absarc(0, dh - dw, dw, Math.PI, 0, true); sh.lineTo(dw, 0); sh.lineTo(-dw, 0);
    const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.08, bevelEnabled: false, curveSegments: 14 });
    { const p = geo.attributes.position, uv = geo.attributes.uv; for (let i = 0; i < p.count; i++) uv.setXY(i, (p.getX(i) + dw) / (2 * dw), p.getY(i) / dh); }
    const door = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ map: woodTexture('#5a3a22', 'rgba(30,16,8,0.35)', 4) }));
    door.position.copy(P(u0 + 0.01, 0, 0)); g.add(door);
    const latch = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.05, 0.05), iron); latch.position.copy(P(u0 + 0.12, 1.1, 0.45)); g.add(latch);
  }

  // ---- trunks set into the walls as columns ---------------------------------------------------------------------------
  for (const [u, side] of LIB.columns) {
    const half = new THREE.CylinderGeometry(0.42, 0.48, H, 10, 1, true, 0, Math.PI);
    const c = new THREE.Mesh(half, bark);
    // A half cylinder (made with x >= 0), turned to stand out from its wall into the room.
    if (u === 0) { c.position.copy(P(u0, H / 2, side)); c.rotation.y = -Math.PI / 2; }    // the front wall, by the door
    else { c.position.copy(P(u, H / 2, side * V)); c.rotation.y = side > 0 ? 0 : Math.PI; }
    g.add(c);
  }
  for (const [u, v] of [[u0, -V], [u0, V], [u1, -V], [u1, V]]) { const c = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.48, H, 10), bark); c.position.copy(P(u, H / 2, v)); g.add(c); }

  // ---- shelves and books ------------------------------------------------------------------------------------------------
  const books = [];
  const bookColours = ['#6b1f1f', '#2f4a2c', '#3a2c1e', '#1f3550', '#7a5a1e', '#4a1f3a', '#5a4632', '#2c3a3f', '#8a3a24', '#3d4a1f', '#a08050', '#232a3a'].map(col);
  // A shelf unit: along a (from a0 to a1) at the fixed coordinate `at` on axis 'u' or 'v', backed against `back`
  // (+1 or -1: which way its back faces), from y0, `levels` boards high, `depth` deep. Books on every board.
  function shelf({ axis, a0, a1, at, back, y0 = 0, height, levels, depth = 0.42, twoSided = false }) {
    const unit = new THREE.Group();
    const across = (lo, hi, y, yy) => (axis === 'u' ? box(lo, hi, at - depth / 2, at + depth / 2, y, yy, dark) : box(at - depth / 2, at + depth / 2, lo, hi, y, yy, dark));
    unit.add(across(a0, a0 + 0.06, y0, y0 + height)); unit.add(across(a1 - 0.06, a1, y0, y0 + height));
    const step = height / levels;
    for (let k = 0; k <= levels; k++) unit.add(across(a0, a1, y0 + k * step, y0 + k * step + 0.04));
    // The back board.
    if (!twoSided) {
      const bk = axis === 'u' ? box(a0, a1, at + back * (depth / 2 - 0.02), at + back * (depth / 2), y0, y0 + height, dark) : box(at + back * (depth / 2 - 0.02), at + back * (depth / 2), a0, a1, y0, y0 + height, dark);
      unit.add(bk);
    }
    g.add(unit);
    for (let k = 0; k < levels; k++) {
      const base = y0 + k * step + 0.04, room = step - 0.08;
      for (const face of twoSided ? [-1, 1] : [-back]) {
        let a = a0 + 0.08;
        while (a < a1 - 0.12) {
          const w = 0.04 + rand() * 0.06, h = Math.min(room, room * (0.62 + rand() * 0.34)), d = depth * (0.5 + rand() * 0.25) / (twoSided ? 2 : 1);
          if (rand() < 0.06) { a += 0.1 + rand() * 0.15; continue; }        // a gap
          const lean = rand() < 0.05 ? (rand() < 0.5 ? 0.25 : -0.25) : 0;
          const off = twoSided ? face * (d / 2 + 0.02) : face * (depth / 2 - d / 2 - 0.04);
          books.push({ axis, a: a + w / 2, at: at + off, y: base + h / 2, w, h, d, lean, c: bookColours[Math.floor(rand() * bookColours.length)].clone().multiplyScalar(0.8 + rand() * 0.4) });
          a += w + 0.004;
        }
      }
    }
  }
  // Under the mezzanine: bays of two-sided shelves across from the left wall, and shelves along the wall itself.
  const { mezz, stairs } = LIB;
  for (const u of [2.3, 4.1, 5.9, 7.7]) shelf({ axis: 'v', a0: mezz.v0 + 0.45, a1: mezz.v1 - 0.2, at: u, back: 1, height: mezz.h - 0.12, levels: 5, depth: 0.5, twoSided: true });
  shelf({ axis: 'u', a0: u0 + 0.5, a1: mezz.u1 - 0.1, at: mezz.v0 + 0.21, back: -1, height: mezz.h - 0.12, levels: 5 });
  // On the mezzanine: low shelves along the wall, under the round windows.
  { const f = furniture('mezz-shelves'); shelf({ axis: 'u', a0: f.u0, a1: f.u1, at: mezz.v0 + 0.22, back: -1, y0: mezz.h, height: 0.78, levels: 2 }); }
  // The back wall: a tall shelf to the ceiling (the ladder's) on the right, a shorter one on the left of the fire.
  { const f = furniture('shelf-back-right'); shelf({ axis: 'v', a0: f.v0, a1: V - 0.1, at: u1 - 0.24, back: 1, height: H - 0.3, levels: 8 }); }
  { const f = furniture('shelf-back-left'); shelf({ axis: 'v', a0: f.v0, a1: f.v1, at: u1 - 0.24, back: 1, height: 2.4, levels: 5 }); }
  // Short shelves under the tall side windows' sills.
  for (const t of LIB.tall.filter((t) => t.wall === 'right')) shelf({ axis: 'u', a0: t.at - t.w / 2 + 0.05, a1: t.at + t.w / 2 - 0.05, at: V - 0.17, back: 1, height: t.sill - 0.08, levels: 2, depth: 0.3 });
  {
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mesh = new THREE.InstancedMesh(geo, new THREE.MeshLambertMaterial({ color: 0xffffff }), books.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion();
    books.forEach((b, i) => {
      // In the group: x is -v, z is u. A book's width runs along its shelf.
      const pos = b.axis === 'u' ? P(b.a, b.y, b.at) : P(b.at, b.y, b.a);
      const scale = b.axis === 'u' ? new THREE.Vector3(b.d, b.h, b.w) : new THREE.Vector3(b.w, b.h, b.d);
      q.setFromEuler(b.axis === 'u' ? new THREE.Euler(b.lean, 0, 0) : new THREE.Euler(0, 0, b.lean));
      m.compose(pos, q, scale); mesh.setMatrixAt(i, m); mesh.setColorAt(i, b.c);
    });
    g.add(mesh);
  }

  // ---- the mezzanine, its railing, the stairs ----------------------------------------------------------------------
  g.add(box(mezz.u0, mezz.u1, mezz.v0, mezz.v1, mezz.h - 0.16, mezz.h, wood));
  g.add(box(mezz.u0, mezz.u1, mezz.v1 - 0.1, mezz.v1 + 0.02, mezz.h - 0.36, mezz.h, dark));        // the edge beam
  for (const u of [3.2, 6.8, mezz.u1 - 0.1]) g.add(box(u - 0.09, u + 0.09, mezz.v1 - 0.18, mezz.v1, 0, mezz.h - 0.16, dark));
  const rail = (a, b, ya, yb) => {
    // A rail from a=(u,v) at height ya to b at yb, with posts.
    const pa = P(a[0], ya, a[1]), pb = P(b[0], yb, b[1]);
    const len = pa.distanceTo(pb), mid = pa.clone().add(pb).multiplyScalar(0.5);
    const top = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.06, len), dark);
    top.position.copy(mid).add(new THREE.Vector3(0, 0.9, 0)); top.lookAt(pb.clone().add(new THREE.Vector3(0, 0.9, 0))); g.add(top);
    const n = Math.max(2, Math.round(len / 0.32));
    for (let i = 0; i <= n; i++) { const p = pa.clone().lerp(pb, i / n); const post = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.9, 0.035), dark); post.position.copy(p).add(new THREE.Vector3(0, 0.45, 0)); g.add(post); }
  };
  rail([mezz.u0 + 0.1, mezz.v1 - 0.05], [mezz.u1, mezz.v1 - 0.05], mezz.h, mezz.h);
  {
    const n = 10, run = (stairs.u1 - stairs.u0) / n;
    for (let i = 0; i < n; i++) {
      const top = mezz.h * (i + 1) / n;
      g.add(box(stairs.u1 - (i + 1) * run, stairs.u1 - i * run, stairs.v0, stairs.v1, 0, top, i % 2 ? wood : dark));
    }
    rail([stairs.u1, stairs.v1 + 0.02], [stairs.u0, stairs.v1 + 0.02], 0.05, mezz.h);
  }

  // ---- the fireplace (W30) --------------------------------------------------------------------------------------------
  const fire = {};
  {
    const f = furniture('fireplace');
    g.add(box(f.u0 + 0.25, u1, f.v0, f.v0 + 0.4, 0, 1.6, stone));
    g.add(box(f.u0 + 0.25, u1, f.v1 - 0.4, f.v1, 0, 1.6, stone));
    g.add(box(f.u0 + 0.25, u1, f.v0, f.v1, 1.25, 1.6, stone));
    g.add(box(f.u0 + 0.05, u1, f.v0 - 0.15, f.v1 + 0.15, 1.6, 1.72, dark));                       // the mantel
    g.add(box(u1 - 0.08, u1, f.v0 + 0.4, f.v1 - 0.4, 0, 1.25, new THREE.MeshLambertMaterial({ color: 0x1a120c })));  // the sooty back
    g.add(box(f.u0 - 0.1, u1, f.v0 - 0.1, f.v1 + 0.1, 0, 0.06, stone));                           // the hearth
    g.add(box(u1 - 0.05, u1, -0.55, 0.55, 1.72, H, stone));                                         // the chimney breast
    for (const [dv, a] of [[-0.15, 0.25], [0.15, -0.3], [0, 0]]) {
      const log = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.75, 7).rotateZ(Math.PI / 2), bark);
      log.position.copy(P(f.u0 + 0.45, 0.14 + (dv === 0 ? 0.13 : 0), dv)); log.rotation.y = a; g.add(log);
    }
    const flameMat = new THREE.SpriteMaterial({ map: glowTexture([[0, 1], [0.25, 0.6], [1, 0]]), color: col('#ff9a3c'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
    fire.flames = [-0.18, 0.02, 0.2].map((dv, i) => { const s = new THREE.Sprite(flameMat.clone()); s.position.copy(P(f.u0 + 0.45, 0.42, dv)); s.scale.set(0.35, 0.6, 1); s.userData.k = i; g.add(s); return s; });
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: col('#ff8a2c'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.55 }));
    glow.position.copy(P(f.u0 + 0.3, 0.5, 0)); glow.scale.set(2.2, 1.4, 1); g.add(glow); fire.glow = glow;
    fire.light = new THREE.PointLight(col('#ff9a4a'), 12, 14, 1.3); fire.light.position.copy(P(f.u0 - 0.2, 0.7, 0)); g.add(fire.light);
  }

  // ---- the tables, chairs and lamps; the open books, the candle and the cup (W30) -----------------------------------------
  const lamps = [];
  function tableLamp(u, v, y) {
    const l = new THREE.Group();
    l.add(box(u - 0.08, u + 0.08, v - 0.08, v + 0.08, y, y + 0.03, brass));
    l.add(box(u - 0.015, u + 0.015, v - 0.015, v + 0.015, y, y + 0.36, brass));
    const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.17, 0.14, 14, 1, true), new THREE.MeshBasicMaterial({ color: col('#ffcf8a'), side: THREE.DoubleSide }));
    shade.position.copy(P(u, y + 0.36, v)); l.add(shade);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: col('#ffc27a'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.8 }));
    s.position.copy(P(u, y + 0.33, v)); s.scale.setScalar(0.8); l.add(s);
    const light = new THREE.PointLight(col('#ffbf78'), 7, 9, 1.4); light.position.copy(P(u, y + 0.3, v)); l.add(light);
    g.add(l); lamps.push(light);
  }
  for (const id of ['table1', 'table2']) {
    const t = furniture(id), y = 0.76;
    g.add(box(t.u0, t.u1, t.v0, t.v1, y - 0.06, y, wood));
    for (const [u, v] of [[t.u0 + 0.12, t.v0 + 0.12], [t.u1 - 0.12, t.v0 + 0.12], [t.u0 + 0.12, t.v1 - 0.12], [t.u1 - 0.12, t.v1 - 0.12]]) g.add(box(u - 0.05, u + 0.05, v - 0.05, v + 0.05, 0, y - 0.06, dark));
    tableLamp(t.u1 - 0.35, t.v1 - 0.3, y);
    const c = furniture(id === 'table1' ? 'chairs1' : 'chairs2');
    for (const u of [c.u0 + 0.3, c.u1 - 0.3]) {
      g.add(box(u - 0.24, u + 0.24, c.v0, c.v0 + 0.45, 0.44, 0.49, wood));
      g.add(box(u - 0.24, u + 0.24, c.v0 + 0.42, c.v0 + 0.47, 0.49, 1.05, wood));
      for (const [du, dv] of [[-0.2, 0.04], [0.2, 0.04], [-0.2, 0.42], [0.2, 0.42]]) g.add(box(u + du - 0.03, u + du + 0.03, c.v0 + dv - 0.03, c.v0 + dv + 0.03, 0, 0.44, dark));
    }
  }
  const candle = {};
  {
    const t = furniture('table1'), y = 0.76;
    // Two books lying open, their pages in a shallow V.
    const pageMat = new THREE.MeshLambertMaterial({ map: pageTexture(), side: THREE.DoubleSide });
    for (const [u, v, turn] of [[t.u0 + 0.55, t.v0 + 0.45, 0.3], [t.u0 + 1.15, t.v0 + 0.55, -0.5]]) {
      const b = new THREE.Group();
      for (const s of [-1, 1]) {
        const cover = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.012, 0.28), new THREE.MeshLambertMaterial({ color: s < 0 ? 0x6b1f1f : 0x6b1f1f }));
        cover.position.set(s * 0.1, 0.006, 0); cover.rotation.z = s * -0.06; b.add(cover);
        const page = new THREE.Mesh(new THREE.PlaneGeometry(0.19, 0.26).rotateX(-Math.PI / 2), pageMat);
        page.position.set(s * 0.1, 0.03, 0); page.rotation.z = s * -0.08; b.add(page);
      }
      b.position.copy(P(u, y, v)); b.rotation.y = turn; g.add(b);
    }
    // The cup.
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.038, 0.09, 12), new THREE.MeshLambertMaterial({ color: 0xe8e2d6 }));
    cup.position.copy(P(t.u0 + 1.55, y + 0.045, t.v0 + 0.3)); g.add(cup);
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.025, 0.007, 6, 10), cup.material); handle.position.copy(P(t.u0 + 1.55, y + 0.05, t.v0 + 0.36)); handle.rotation.y = Math.PI / 2; g.add(handle);
    // The candle, its flame and a little light.
    const at = P(t.u0 + 0.9, y, t.v0 + 0.2);
    const holder = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.02, 12), brass); holder.position.copy(at).add(new THREE.Vector3(0, 0.01, 0)); g.add(holder);
    const wax = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.024, 0.16, 10), new THREE.MeshLambertMaterial({ color: 0xf2ead8, emissive: 0x2a2010 })); wax.position.copy(at).add(new THREE.Vector3(0, 0.1, 0)); g.add(wax);
    candle.flame = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture([[0, 1], [0.3, 0.55], [1, 0]]), color: col('#ffcf7a'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    candle.flame.position.copy(at).add(new THREE.Vector3(0, 0.22, 0)); candle.flame.scale.set(0.07, 0.13, 1); g.add(candle.flame);
    candle.light = new THREE.PointLight(col('#ffc070'), 1.2, 2.5, 1.6); candle.light.position.copy(at).add(new THREE.Vector3(0, 0.26, 0)); g.add(candle.light);
  }

  // ---- the reading nook on the mezzanine (W29) ----------------------------------------------------------------------
  {
    const c = furniture('nook-chair'), y = mezz.h, fabric = new THREE.MeshLambertMaterial({ color: 0x7a3a2a });
    g.add(box(c.u0, c.u1, c.v0, c.v1, y, y + 0.42, fabric));
    g.add(box(c.u0 - 0.05, c.u0 + 0.12, c.v0, c.v1, y, y + 1.0, fabric));             // its back (towards the door end)
    for (const v of [c.v0, c.v1 - 0.14]) g.add(box(c.u0, c.u1, v, v + 0.14, y, y + 0.62, fabric));
    const t = furniture('nook-table');
    g.add(box(t.u0, t.u1, t.v0, t.v1, y + 0.55, y + 0.6, wood));
    g.add(box((t.u0 + t.u1) / 2 - 0.04, (t.u0 + t.u1) / 2 + 0.04, (t.v0 + t.v1) / 2 - 0.04, (t.v0 + t.v1) / 2 + 0.04, y, y + 0.55, dark));
    tableLamp((t.u0 + t.u1) / 2, (t.v0 + t.v1) / 2, y + 0.6);
    // A book left on the chair's arm.
    g.add(box(c.u0 + 0.3, c.u0 + 0.52, c.v1 - 0.13, c.v1 - 0.01, y + 0.62, y + 0.66, new THREE.MeshLambertMaterial({ color: 0x1f3550 })));
  }

  // ---- the rolling ladder on the tall shelf (W30) ---------------------------------------------------------------------
  {
    const f = furniture('ladder'), vm = (f.v0 + f.v1) / 2;
    const railBar = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, LIB.v - 1.5, 8).rotateX(Math.PI / 2), brass);
    railBar.position.copy(P(u1 - 0.5, H - 0.45, (1.5 + LIB.v) / 2)); railBar.rotation.y = Math.PI / 2; g.add(railBar);
    for (const s of [-1, 1]) {
      const a = P(f.u0 + 0.05, 0, vm + s * 0.22), b = P(u1 - 0.5, H - 0.45, vm + s * 0.22);
      const len = a.distanceTo(b), side = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, len), wood);
      side.position.copy(a.clone().add(b).multiplyScalar(0.5)); side.lookAt(b); g.add(side);
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.03, 10).rotateX(Math.PI / 2), brass); wheel.position.copy(a).add(new THREE.Vector3(0, 0.04, 0)); g.add(wheel);
    }
    for (let i = 1; i < 11; i++) {
      const t = i / 11, a = P(f.u0 + 0.05, 0, vm), b = P(u1 - 0.5, H - 0.45, vm), p = a.clone().lerp(b, t);
      const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.44, 6).rotateZ(Math.PI / 2), wood); rung.position.copy(p); g.add(rung);
    }
  }

  // ---- the bench and the little door (W14, W18) -----------------------------------------------------------------------
  const little = {};
  {
    const b = LIB.bench;
    g.add(box(b.u0, b.u1, b.v0, b.v1, b.h - 0.06, b.h, wood));
    for (const u of [b.u0 + 0.1, b.u1 - 0.1]) g.add(box(u - 0.04, u + 0.04, b.v0 + 0.05, b.v1 - 0.03, 0, b.h - 0.06, dark));
    const L = LIB.littleDoor, w = L.half, h = L.y1 - L.y0;
    // The frame round it, and a dark warm hollow behind (seen when it opens).
    const hollow = new THREE.Mesh(new THREE.PlaneGeometry(2 * w, h), new THREE.MeshBasicMaterial({ color: 0x1a0d06 }));
    hollow.position.copy(P(L.u, L.y0 + h / 2, V - 0.005)); hollow.rotation.y = Math.PI / 2; g.add(hollow);
    g.add(box(L.u - w - 0.03, L.u + w + 0.03, V - 0.04, V, L.y1, L.y1 + 0.03, dark));
    for (const s of [-1, 1]) g.add(box(L.u + s * (w + 0.015) - 0.015, L.u + s * (w + 0.015) + 0.015, V - 0.04, V, L.y0, L.y1, dark));
    const sh = new THREE.Shape(); sh.moveTo(-w, 0); sh.lineTo(-w, h - w); sh.absarc(0, h - w, w, Math.PI, 0, true); sh.lineTo(w, 0); sh.lineTo(-w, 0);
    const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.02, bevelEnabled: false, curveSegments: 10 }).translate(w, 0, 0);
    { const p = geo.attributes.position, uv = geo.attributes.uv; for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) / (2 * w), p.getY(i) / h); }
    const hinge = new THREE.Group();
    // In the right wall (facing into the room: in the group +x), hinged on its back edge (larger u).
    hinge.position.copy(P(L.u + w, L.y0, V - 0.03)); hinge.rotation.y = Math.PI / 2;
    const leaf = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ map: woodTexture('#7a5030', 'rgba(30,16,8,0.4)', 3) }));
    hinge.add(leaf);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 6), brass); knob.position.set(2 * w - 0.04, h * 0.45, 0.025); hinge.add(knob);
    const keyhole = new THREE.Group();
    const kc = new THREE.Mesh(new THREE.CircleGeometry(0.009, 10), new THREE.MeshBasicMaterial({ color: 0x050302 })); kc.position.set(2 * w - 0.04, h * 0.3, 0.021);
    const ks = new THREE.Mesh(new THREE.PlaneGeometry(0.007, 0.02), kc.material); ks.position.set(2 * w - 0.04, h * 0.3 - 0.012, 0.021);
    keyhole.add(kc, ks); hinge.add(keyhole);
    g.add(hinge);
    little.hinge = hinge; little.keyhole = keyhole;
    // A faint warm light from inside when it leads somewhere.
    little.glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: col('#ffb060'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
    little.glow.position.copy(P(L.u, L.y0 + h * 0.45, V - 0.08)); little.glow.scale.setScalar(0.35); g.add(little.glow);
  }

  // ---- the room's own light: the night through the windows, cool and dim -----------------------------------------------
  scene.add(new THREE.AmbientLight(col('#7d8db5'), 0.55));
  scene.add(new THREE.HemisphereLight(col('#93a4d0'), col('#4a3424'), 0.45));
  // A soft warmth through the whole room, from the lamps and the fire together.
  const fill = new THREE.PointLight(col('#ffb070'), 3.5, 18, 1.2); fill.position.copy(P((u0 + u1) / 2, H - 0.6, 0.5)); g.add(fill);

  let open = false;
  return {
    scene, group: g,
    // The little door's look (W18): dormant, shut with its keyhole; open, a faint warm glow round it.
    setLook(state) { open = state === 'open'; little.keyhole.visible = !open; },
    setLittleDoor(k) { little.hinge.rotation.y = Math.PI / 2 + k * 1.7; },
    tick(t) {
      const n = (a, b) => 0.5 + 0.5 * Math.sin(t * a + b);
      const f = 0.75 + 0.25 * n(8.3, 0) * n(5.1, 1.3) + 0.1 * n(17, 2);
      fire.light.intensity = 12 * f; fire.glow.material.opacity = 0.4 + 0.25 * f;
      for (const s of fire.flames) { const k = s.userData.k; s.scale.set(0.3 + 0.08 * n(6 + k, k), 0.5 + 0.2 * n(9 + k * 2, k * 1.7), 1); }
      const c = 0.85 + 0.15 * n(11, 0.4) * n(7, 2);
      candle.light.intensity = 1.2 * c; candle.flame.scale.set(0.07, 0.12 + 0.03 * c, 1);
      little.glow.material.opacity = open ? 0.25 + 0.1 * n(2, 0) : 0;
    },
  };
}
