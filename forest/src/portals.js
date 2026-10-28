// portals.js: the four portals' outsides (step 1 of W28), with their dormant and open looks (W18), and the library's
// outside changed in step 2 to match its inside (round windows high on the mezzanine's side, columns, the chimney).
//   wardrobe   the coats lane (W10): spruce boughs, then coats hanging from boughs, then coats on hangers on a rail,
//              the snow giving way to boards, and the wardrobe's two plain doors seen from inside. Open: a thin line
//              of warm light between the doors; going through, they swing outward into light.
//   tree-door  the great old tree (W11) with a rounded tunnel carved into it (its inside and its door: tunnel.js)
//   arch       the stone arch (W12); open, its face shows this forest drawn again from another place (the clearing,
//              looking at the lamp post) under another light, rippling; dormant, a faint shimmer
//   slide      the library's outside (W13): cobblestone, a mossy snowy roof, warm frosted windows, trunks as columns
// Each portal is built in its own frame (layout.js FRAMES): u onwards along the path, v to the right, y up. In a
// portal's group, a point (u, y, v) is at (-v, y, u).
import * as THREE from 'three';
import { FRAMES, WARDROBE, ARCH, TRUNK, LIBRARY, laneSpots, rng } from './layout.js';
import { LIB } from './inside.js';
import { col, glowTexture, mergeColoured } from './scene.js';
import { canvasTexture, woodTexture, barkTexture, stoneTexture, cobbleTexture, roofTexture, windowTexture } from './textures.js';

export const P = (u, y, v) => new THREE.Vector3(-v, y, u);

export function frameGroup(id) {
  const f = FRAMES[id];
  const g = new THREE.Group();
  const d = new THREE.Vector3(f.d[0], 0, f.d[1]), r = new THREE.Vector3(f.r[0], 0, f.r[1]);
  g.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(r.clone().negate(), new THREE.Vector3(0, 1, 0), d));
  g.position.set(f.o[0], 0, f.o[1]);
  return g;
}

// =========================================================================================================================
export function createPortals({ scene, renderer, sceneParts, look, other }) {
  const parts = {};
  const shimmerTime = { value: 0 };

  // ---- the wardrobe and the coats lane (W10) ---------------------------------------------------------------------------
  {
    const g = frameGroup('wardrobe');
    const f = FRAMES.wardrobe;
    const toLocal = (x, z) => { const dx = x - f.o[0], dz = z - f.o[1]; return [dx * f.d[0] + dz * f.d[1], dx * f.r[0] + dz * f.r[1]]; };
    const spots = laneSpots();
    const rand = rng(17);
    const green = col(look.treeColour), snowC = col(look.snowColour);
    // A spruce bough: a drooping, flattened cone reaching into the lane, snow along its top.
    const boughGeo = mergeColoured([
      { geo: new THREE.ConeGeometry(0.36, 1.1, 7).rotateZ(Math.PI / 2).scale(1, 0.38, 1).translate(-0.55, 0, 0), colour: green },
      { geo: new THREE.ConeGeometry(0.26, 0.95, 7).rotateZ(Math.PI / 2).scale(1, 0.16, 0.7).translate(-0.5, 0.09, 0), colour: snowC },
    ]);
    // A fur coat: a soft body wider at the hem, shoulders, a hook on a hanger.
    const coatProfile = [[0.0, -1.0], [0.27, -0.98], [0.29, -0.8], [0.25, -0.45], [0.22, -0.15], [0.24, -0.06], [0.2, 0.0], [0.06, 0.04], [0, 0.04]].map(([r, y]) => new THREE.Vector2(r, y));
    const coatGeo = new THREE.LatheGeometry(coatProfile, 12).scale(1, 1, 0.5);
    {
      // Fur: nudge the surface a little so it isn't smooth.
      const p = coatGeo.attributes.position, fr = rng(23);
      for (let i = 0; i < p.count; i++) { const k = 1 + (fr() - 0.5) * 0.12; p.setX(i, p.getX(i) * k); p.setZ(i, p.getZ(i) * k); }
      coatGeo.computeVertexNormals();
    }
    const hangerGeo = mergeColoured([
      { geo: new THREE.BoxGeometry(0.44, 0.025, 0.025).translate(0, 0.02, 0), colour: col('#6b4a2c') },
      { geo: new THREE.TorusGeometry(0.05, 0.008, 4, 10, Math.PI * 1.4).translate(0, 0.1, 0), colour: col('#9a9aa2') },
    ]);
    const coatColours = ['#7a5a40', '#5c4a3e', '#8a6a4c', '#4e4a52', '#9a7552', '#6a4a52', '#7c6a58', '#3e3632', '#a08a72'].map(col);
    const boughs = [], coats = [], hangers = [];
    for (const s of spots) {
      const [u, v] = toLocal(s.x, s.z);
      const k = rand();
      // Where along the lane: boughs, then (a few at a time) coats hanging from boughs, then coats on the rail.
      const coatFrom = 0.3 + k * 0.32;                    // each spot turns to a coat somewhere between t 0.3 and 0.62
      const onRail = s.t >= 0.6;
      const hasBough = s.t < 0.66;
      const hasCoat = s.t >= coatFrom;
      const h = onRail ? 1.62 : 1.5 + rand() * 0.35;
      if (hasBough) boughs.push({ u, v: v + s.side * 0.75, y: h + 0.08, side: s.side, droop: 0.15 + rand() * 0.2, tw: rand() });
      if (hasCoat) { coats.push({ u, v, y: h - 0.04, side: s.side, c: coatColours[Math.floor(rand() * coatColours.length)], sway: rand() * 6 }); if (onRail) hangers.push({ u, v, y: h }); }
    }
    const boughMesh = new THREE.InstancedMesh(boughGeo, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }), boughs.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion();
    boughs.forEach((b, i) => {
      // Reaching in from its side: in the group, +x is -v, so a bough on the right (+v) points towards +x... into the lane.
      // The bough is made pointing to -x (in the group, towards +v): a bough on the right (+v) turns round to reach in.
      q.setFromEuler(new THREE.Euler(0, b.side > 0 ? Math.PI : 0, b.droop));
      m.compose(P(b.u, b.y, b.v), q, new THREE.Vector3(1, 1, 0.9 + b.tw * 0.3));
      boughMesh.setMatrixAt(i, m);
    });
    boughMesh.castShadow = true;
    g.add(boughMesh);
    const coatMesh = new THREE.InstancedMesh(coatGeo, new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x15110d }), coats.length);
    coats.forEach((c, i) => {
      // Shoulders across the lane, so they hang side by side along the rail.
      q.setFromEuler(new THREE.Euler(0, Math.PI / 2, 0));
      m.compose(P(c.u, c.y, c.v), q, new THREE.Vector3(1, 1, 1));
      coatMesh.setMatrixAt(i, m);
      coatMesh.setColorAt(i, c.c);
    });
    coatMesh.castShadow = true; coatMesh.receiveShadow = true;
    g.add(coatMesh);
    const hangerMesh = new THREE.InstancedMesh(hangerGeo, new THREE.MeshLambertMaterial({ vertexColors: true }), Math.max(1, hangers.length));
    hangers.forEach((h, i) => { q.setFromEuler(new THREE.Euler(0, Math.PI / 2, 0)); m.compose(P(h.u, h.y, h.v), q, new THREE.Vector3(1, 1, 1)); hangerMesh.setMatrixAt(i, m); });
    hangerMesh.count = hangers.length;
    g.add(hangerMesh);
    // The rails: from where the last spruce gives way, to the wardrobe.
    const railMat = new THREE.MeshLambertMaterial({ map: woodTexture('#6b4a2c', 'rgba(30,16,8,0.3)', 1) });
    for (const side of [-1, 1]) {
      const pts = spots.filter((s) => s.side === side && s.t >= 0.56).map((s) => { const [u, v] = toLocal(s.x, s.z); return P(u, 1.66, v); });
      pts.push(P(-0.05, 1.66, side * 0.95));
      const curve = new THREE.CatmullRomCurve3(pts);
      const rail = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.035, 6, false), railMat);
      g.add(rail);
    }
    // The boards underfoot: a strip along the lane's last part, the snow thinning onto them (W10).
    {
      const sp = spots.filter((s) => s.side === 1 && s.t >= 0.48).map((s) => toLocal(s.x, s.z));
      const centre = sp.map(([u, v]) => [u, v - 0.95]);
      centre.push([0, 0]);
      const pos = [], uv = [], idx = [];
      const total = centre.length - 1;
      centre.forEach(([u, v], i) => {
        const nx = i < total ? centre[i + 1] : centre[i], px = i > 0 ? centre[i - 1] : centre[i];
        let du = nx[0] - px[0], dv = nx[1] - px[1]; const l = Math.hypot(du, dv) || 1; du /= l; dv /= l;
        for (const s of [-1, 1]) { const w = 1.05; const p = P(u - dv * w * s * 0, 0.02, v + s * w); pos.push(p.x, p.y, p.z); uv.push(s < 0 ? 0 : 1, i / total); }
        if (i < total) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
      });
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      geo.setIndex(idx); geo.computeVertexNormals();
      const boards = canvasTexture(128, 512, (c, w, h) => {
        c.fillStyle = '#6a4a30'; c.fillRect(0, 0, w, h);
        const r = rng(9);
        for (let i = 0; i < 6; i++) { c.fillStyle = `rgba(${90 + r() * 30},${60 + r() * 20},${36 + r() * 10},0.6)`; c.fillRect((i * w) / 6, 0, w / 6 - 2, h); c.fillStyle = 'rgba(20,10,4,0.7)'; c.fillRect(((i + 1) * w) / 6 - 2, 0, 2, h); }
        // Snow lying on the first part, thinning out towards the doors.
        for (let i = 0; i < 1800; i++) { const y = Math.pow(r(), 1.8) * h * 0.75, a = 1 - y / (h * 0.75); c.fillStyle = `rgba(232,238,246,${0.5 * a + 0.1})`; c.beginPath(); c.arc(r() * w, y, 1 + r() * 4 * a, 0, Math.PI * 2); c.fill(); }
        const fade = c.createLinearGradient(0, 0, 0, h * 0.28); fade.addColorStop(0, 'rgba(0,0,0,1)'); fade.addColorStop(1, 'rgba(0,0,0,0)');
        c.globalCompositeOperation = 'destination-out'; c.fillStyle = fade; c.fillRect(0, 0, w, h * 0.28);
      });
      const floor = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ map: boards, transparent: true, depthWrite: false }));
      floor.receiveShadow = true;
      floor.renderOrder = 1;
      g.add(floor);
    }
    // The wardrobe itself: sides, a top, the frame and the two doors, seen from inside.
    const wood = new THREE.MeshLambertMaterial({ map: woodTexture('#4e321f'), side: THREE.DoubleSide });
    const W = WARDROBE;
    for (const s of [-1, 1]) g.add(new THREE.Mesh(new THREE.BoxGeometry(0.08, W.height, W.depth).translate(...P(-W.depth / 2, W.height / 2, s * (W.half + 0.04)).toArray()), wood));
    g.add(new THREE.Mesh(new THREE.BoxGeometry(2 * W.half + 0.24, 0.1, W.depth + 0.1).translate(...P(-W.depth / 2, W.height + 0.05, 0).toArray()), wood));
    g.add(new THREE.Mesh(new THREE.BoxGeometry(2 * W.half + 0.4, 0.14, W.depth + 0.25).translate(...P(-W.depth / 2, W.height + 0.17, 0).toArray()), wood));
    // Snow on top of it.
    g.add(new THREE.Mesh(new THREE.BoxGeometry(2 * W.half + 0.3, 0.1, W.depth + 0.1).translate(...P(-W.depth / 2, W.height + 0.28, 0).toArray()), new THREE.MeshLambertMaterial({ color: col(look.snowColour) })));
    g.add(new THREE.Mesh(new THREE.BoxGeometry(2 * W.half + 0.2, 0.1, 0.12).translate(...P(0.02, W.height - 0.05, 0).toArray()), wood));
    g.add(new THREE.Mesh(new THREE.BoxGeometry(2 * W.half + 0.2, 0.12, 0.12).translate(...P(0.02, 0.06, 0).toArray()), wood));
    const doorMat = new THREE.MeshLambertMaterial({ map: woodTexture('#5d3c24', 'rgba(30,16,8,0.3)', 2) });
    const knobMat = new THREE.MeshLambertMaterial({ color: 0xb08a4a, emissive: 0x1a1006 });
    const doors = [];
    for (const s of [-1, 1]) {
      // Each door turns about its hinge at the side; outward (onwards, +u) to open.
      const hinge = new THREE.Group();
      hinge.position.copy(P(0.04, 0, s * W.half));
      const leaf = new THREE.Mesh(new THREE.BoxGeometry(W.half - 0.01, W.height - 0.2, 0.05), doorMat);
      leaf.position.set(s * (W.half / 2), (W.height - 0.2) / 2 + 0.1, 0);     // from the hinge (x = -s·half) towards the middle
      leaf.castShadow = true;
      hinge.add(leaf);
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), knobMat);
      knob.position.set(s * (W.half - 0.12), 1.12, -0.05);
      hinge.add(knob);
      // Two plain panels on each door's inside.
      for (const y of [0.75, 1.65]) {
        const panel = new THREE.Mesh(new THREE.BoxGeometry(W.half - 0.3, 0.6, 0.02), new THREE.MeshLambertMaterial({ map: woodTexture('#553620', 'rgba(30,16,8,0.25)', 1) }));
        panel.position.set(s * (W.half / 2), y, -0.035);
        hinge.add(panel);
      }
      g.add(hinge);
      doors.push({ hinge, s });
    }
    // Open: a thin line of warm light between the doors (W18), and a little glow.
    const lineMat = new THREE.MeshBasicMaterial({ color: col('#ffd28a'), transparent: true, opacity: 0, fog: false });
    const line = new THREE.Mesh(new THREE.PlaneGeometry(0.035, W.height - 0.3).translate(0, (W.height - 0.3) / 2 + 0.15, 0), lineMat);
    line.position.copy(P(-0.01, 0, 0)); line.rotation.y = Math.PI;
    g.add(line);
    const lineGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture([[0, 0.8], [0.3, 0.25], [1, 0]]), color: col('#ffcc80'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
    lineGlow.position.copy(P(-0.1, 1.15, 0)); lineGlow.scale.set(0.9, 2.4, 1);
    g.add(lineGlow);
    // Behind the doors, the light you step into (only while going through).
    // A little warm light inside the wardrobe, from the gap between the doors (stronger when it leads somewhere).
    const inside = new THREE.PointLight(col('#ffc98a'), 1.2, 7, 1.4);
    inside.position.copy(P(-0.35, 1.6, 0));
    g.add(inside);
    const beyondMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, fog: false, side: THREE.DoubleSide });
    const beyond = new THREE.Mesh(new THREE.PlaneGeometry(2 * W.half + 0.6, W.height + 0.4), beyondMat);
    beyond.position.copy(P(0.45, W.height / 2, 0));
    g.add(beyond);
    scene.add(g);
    parts.wardrobe = {
      group: g, doors, lineMat, lineGlow, beyondMat, inside,
      setOpen(k) { for (const d of doors) d.hinge.rotation.y = -d.s * k * 1.75; },    // 0 shut, 1 swung outward (onwards)
      setGlow(k) { lineMat.opacity = k; lineGlow.material.opacity = k * 0.55; inside.intensity = 1.2 + k * 3.2; },
      setBeyond(k) { beyondMat.opacity = k; },
    };
  }

  // ---- the great old tree with its tunnel (W11; outside only in step 1) ------------------------------------------------
  {
    const g = frameGroup('tree-door');
    const at = TRUNK.at, R = TRUNK.radius;
    const bark = new THREE.MeshLambertMaterial({ map: barkTexture(), color: 0xbfb2a6 });
    // The trunk: flared at the foot, tapering upwards, into a great snowy crown.
    const prof = [[R + 0.55, 0], [R + 0.2, 0.5], [R, 1.3], [R - 0.25, 4], [R - 0.6, 8], [R - 1.0, 13], [R - 1.6, 20], [0.4, 28], [0, 28.2]].map(([r, y]) => new THREE.Vector2(r, y));
    const trunk = new THREE.Mesh(new THREE.LatheGeometry(prof, 22), bark);
    trunk.position.copy(P(at, 0, 0));
    trunk.castShadow = true; trunk.receiveShadow = true;
    g.add(trunk);
    // Roots, gnarled and half under the snow.
    const rr = rng(13);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + rr() * 0.4;
      if (Math.abs(Math.atan2(Math.sin(a - Math.PI), Math.cos(a - Math.PI))) < 0.55) continue;      // none across the mouth
      const len = 2.2 + rr() * 1.6, pts = [];
      for (let k = 0; k <= 5; k++) { const t = k / 5, rad = R - 0.2 + t * len; pts.push(new THREE.Vector3(Math.sin(a + t * (rr() - 0.5) * 0.4) * rad, 0.55 * (1 - t) - 0.1 * t, Math.cos(a + t * (rr() - 0.5) * 0.4) * rad)); }
      const root = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 16, 0.32, 7, false), bark);
      root.position.copy(P(at, 0, 0)); root.scale.set(1, 1, 1);
      g.add(root);
    }
    // The crown: broad tiers high above the tunnel, snow on each.
    const green = col(look.treeColour).multiplyScalar(0.9), snowC = col(look.snowColour);
    const crown = [];
    for (let i = 0; i < 7; i++) {
      const t = i / 6, r = 6.2 - t * 4.6, h = 4.4 - t * 1.6, y = 8.5 + i * 2.7;
      crown.push({ geo: new THREE.ConeGeometry(r, h, 12).translate(0, y + h / 2, 0), colour: green });
      crown.push({ geo: new THREE.ConeGeometry(r * 0.8, h * 0.5, 12).translate(0, y + h - h * 0.25 + 0.08, 0), colour: snowC });
    }
    const crownMesh = new THREE.Mesh(mergeColoured(crown), new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
    crownMesh.position.copy(P(at, 0, 0)); crownMesh.castShadow = true;
    g.add(crownMesh);
    // The tunnel's mouth: a rounded opening carved into the front, dark, with a faint warm glow far inside.
    const mw = TRUNK.mouth, mh = 2.35;
    const shape = new THREE.Shape();
    shape.moveTo(-mw, 0); shape.lineTo(-mw, mh - mw); shape.absarc(0, mh - mw, mw, Math.PI, 0, true); shape.lineTo(mw, 0); shape.lineTo(-mw, 0);
    const mouthTex = canvasTexture(128, 128, (c, w, h) => {
      const grad = c.createRadialGradient(w / 2, h * 0.62, 2, w / 2, h * 0.62, w * 0.62);
      grad.addColorStop(0, '#a5642c'); grad.addColorStop(0.18, '#4a2a14'); grad.addColorStop(0.55, '#140b06'); grad.addColorStop(1, '#050302');
      c.fillStyle = grad; c.fillRect(0, 0, w, h);
    });
    const mouthGeo = new THREE.ShapeGeometry(shape, 16);
    { const p = mouthGeo.attributes.position, uv = mouthGeo.attributes.uv; for (let i = 0; i < p.count; i++) uv.setXY(i, (p.getX(i) + mw) / (2 * mw), p.getY(i) / mh); }
    const mouth = new THREE.Mesh(mouthGeo, new THREE.MeshBasicMaterial({ map: mouthTex }));
    // In the group, the face looking back at the clearing is -z: turn the shape (made facing +z) round.
    mouth.rotation.y = Math.PI; mouth.position.copy(P(at - R - 0.62, 0.02, 0));
    g.add(mouth);
    // The carved rim: a lighter band of cut wood round the opening.
    const rim = new THREE.Shape();
    const rw = mw + 0.22, rh = mh + 0.22;
    rim.moveTo(-rw, 0); rim.lineTo(-rw, rh - rw); rim.absarc(0, rh - rw, rw, Math.PI, 0, true); rim.lineTo(rw, 0); rim.lineTo(mw, 0); rim.lineTo(mw, mh - mw); rim.absarc(0, mh - mw, mw, 0, Math.PI, false); rim.lineTo(-mw, 0); rim.lineTo(-rw, 0);
    const rimMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(rim, { depth: 0.5, bevelEnabled: false, curveSegments: 16 }), new THREE.MeshLambertMaterial({ map: woodTexture('#8a6440', 'rgba(60,36,18,0.3)', 1) }));
    rimMesh.rotation.y = Math.PI; rimMesh.position.copy(P(at - R - 0.66, 0, 0));
    g.add(rimMesh);
    scene.add(g);
    parts.trunk = { group: g };
  }

  // ---- the stone arch, and its view (W12) ------------------------------------------------------------------------------
  {
    const g = frameGroup('arch');
    const A = ARCH;
    const stoneMat = new THREE.MeshLambertMaterial({ map: stoneTexture(), vertexColors: true, flatShading: true });
    const blocks = [];
    const sr = rng(19);
    const stoneC = () => col('#c4beb2').multiplyScalar(0.85 + sr() * 0.25);
    const moss = col('#5f7a46');
    // Two pillars of rough courses.
    for (const s of [-1, 1]) {
      let y = 0;
      for (let k = 0; k < 4; k++) {
        const h = 0.55 + sr() * 0.12, w = 2 * A.pillar + 0.1 + sr() * 0.12;
        const c = k === 0 ? stoneC().lerp(moss, 0.45) : (sr() < 0.3 ? stoneC().lerp(moss, 0.3) : stoneC());
        blocks.push({ geo: new THREE.BoxGeometry(w, h - 0.03, 0.95 + sr() * 0.1).translate(...P(sr() * 0.04, y + h / 2, s * (A.opening + A.pillar) + (sr() - 0.5) * 0.06).toArray()), colour: c });
        y += h;
      }
      blocks.push({ geo: new THREE.BoxGeometry(2 * A.pillar + 0.35, 0.18, 1.15).translate(...P(0, y + 0.09, s * (A.opening + A.pillar)).toArray()), colour: stoneC() });
    }
    // The arch's voussoirs round a half circle, a keystone at the top.
    const springAt = A.height - A.opening, inner = A.opening, outer = A.opening + 2 * A.pillar;
    const n = 9;
    for (let i = 0; i < n; i++) {
      const a0 = Math.PI - (i / n) * Math.PI, a1 = Math.PI - ((i + 1) / n) * Math.PI;
      const key = i === Math.floor(n / 2);
      const sh = new THREE.Shape();
      const o = key ? outer + 0.18 : outer, gap = 0.012;
      sh.moveTo(Math.cos(a0 - gap) * inner, Math.sin(a0 - gap) * inner);
      sh.lineTo(Math.cos(a0 - gap) * o, Math.sin(a0 - gap) * o);
      sh.lineTo(Math.cos(a1 + gap) * o, Math.sin(a1 + gap) * o);
      sh.lineTo(Math.cos(a1 + gap) * inner, Math.sin(a1 + gap) * inner);
      const geo = new THREE.ExtrudeGeometry(sh, { depth: key ? 1.05 : 0.95, bevelEnabled: false }).translate(0, 0, key ? -0.525 : -0.475);
      // Made in the group's x (across the path) and y, its thickness along the path: lift it onto the pillars.
      geo.translate(0, springAt, 0);
      blocks.push({ geo, colour: sr() < 0.25 ? stoneC().lerp(moss, 0.25) : stoneC() });
    }
    // Snow on the arch's back and the pillars' caps.
    const snowGeo = [];
    for (let i = 0; i < 12; i++) {
      const a0 = Math.PI * 0.18 + (i / 12) * Math.PI * 0.64, a1 = Math.PI * 0.18 + ((i + 1) / 12) * Math.PI * 0.64;
      const sh = new THREE.Shape();
      sh.moveTo(Math.cos(a0) * outer, Math.sin(a0) * outer); sh.lineTo(Math.cos(a0) * (outer + 0.12), Math.sin(a0) * (outer + 0.12));
      sh.lineTo(Math.cos(a1) * (outer + 0.12), Math.sin(a1) * (outer + 0.12)); sh.lineTo(Math.cos(a1) * outer, Math.sin(a1) * outer);
      snowGeo.push({ geo: new THREE.ExtrudeGeometry(sh, { depth: 0.9, bevelEnabled: false }).translate(0, springAt, -0.45), colour: col(look.snowColour) });
    }
    for (const s of [-1, 1]) snowGeo.push({ geo: new THREE.BoxGeometry(2 * A.pillar + 0.3, 0.1, 1.05).translate(...P(0, 2.42, s * (A.opening + A.pillar)).toArray()), colour: col(look.snowColour) });
    const arch = new THREE.Mesh(mergeColoured(blocks.concat(snowGeo)), stoneMat);
    arch.castShadow = true; arch.receiveShadow = true;
    g.add(arch);

    // The face: the opening's shape, facing back towards the clearing. Open, it shows the view through (drawn into
    // a picture each frame); dormant, a faint shimmer over what's really behind it.
    const face = new THREE.Shape();
    face.moveTo(-inner, 0); face.lineTo(-inner, springAt); face.absarc(0, springAt, inner, Math.PI, 0, true); face.lineTo(inner, 0); face.lineTo(-inner, 0);
    const faceGeo = new THREE.ShapeGeometry(face, 24);
    { const p = faceGeo.attributes.position, uv = faceGeo.attributes.uv; for (let i = 0; i < p.count; i++) uv.setXY(i, (p.getX(i) + inner) / (2 * inner), p.getY(i) / A.height); }
    const target = new THREE.WebGLRenderTarget(16, 16, { type: THREE.HalfFloatType });
    const faceMat = new THREE.ShaderMaterial({
      uniforms: {
        view: { value: target.texture }, res: { value: new THREE.Vector2(1, 1) }, time: shimmerTime, open: { value: 0 }, ripple: { value: 1 }, boost: { value: 0 },
      },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: `
        uniform sampler2D view; uniform vec2 res; uniform float time, open, ripple, boost; varying vec2 vUv;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main() {
          vec2 sc = gl_FragCoord.xy / res;
          float amp = (0.0035 + boost * 0.03) * ripple;
          vec2 off = vec2(sin(vUv.y * 22.0 + time * 1.9) + 0.5 * sin(vUv.y * 41.0 - time * 2.7), cos(vUv.x * 18.0 + time * 1.6) + 0.5 * cos(vUv.x * 37.0 + time * 2.3)) * amp;
          vec3 c = texture2D(view, sc + off).rgb;
          // The edge glimmers a little.
          vec2 e = min(vUv, 1.0 - vUv);
          float edge = 1.0 - smoothstep(0.0, 0.06, min(e.x * 2.0, e.y * 1.2));
          // Sparkles drifting slowly upwards (the dormant shimmer; faint over the open view too).
          vec2 g = vec2(vUv.x * 40.0, vUv.y * 60.0 - time * 1.2);
          float sp = step(0.985, hash(floor(g))) * (0.5 + 0.5 * sin(time * 3.0 + hash(floor(g) + 3.1) * 6.28));
          vec3 shimmer = vec3(0.75, 0.88, 1.0) * (sp * 0.5 + edge * 0.25);
          vec3 col = mix(vec3(0.0), c, open) + shimmer * (open > 0.5 ? 0.35 : 1.0);
          float a = mix(sp * 0.45 + edge * 0.18, 1.0, open);
          gl_FragColor = vec4(col, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      transparent: true, depthWrite: false, toneMapped: true,
    });
    const faceMesh = new THREE.Mesh(faceGeo, faceMat);
    faceMesh.rotation.y = Math.PI;                               // made facing +z; turn it to face the clearing (-z here)
    faceMesh.position.copy(P(-0.02, 0, 0));
    g.add(faceMesh);
    scene.add(g);

    // The view through: this forest drawn from another place (the clearing, a little south of the lamp post, looking
    // north at it), under the other light. A second camera stands where the viewer would be if the arch were there.
    const vcam = new THREE.PerspectiveCamera();
    const src = new THREE.Matrix4(), dst = new THREE.Matrix4(), map = new THREE.Matrix4();
    {
      const f = FRAMES.arch;
      const d = new THREE.Vector3(f.d[0], 0, f.d[1]), r = new THREE.Vector3(f.r[0], 0, f.r[1]);
      src.makeBasis(r.clone().negate(), new THREE.Vector3(0, 1, 0), d).setPosition(f.o[0], 0, f.o[1]);
      const dd = new THREE.Vector3(0, 0, -1), dr = new THREE.Vector3(1, 0, 0);       // onwards: north; right: east
      dst.makeBasis(dr.clone().negate(), new THREE.Vector3(0, 1, 0), dd).setPosition(0, 0, 5.2);
      map.copy(dst).multiply(src.clone().invert());
    }
    const destPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 5.2);          // keep what's north of z = 5.2
    parts.arch = {
      group: g, faceMat, faceMesh, target, vcam,
      // Draw the view through into the arch's picture (only when it's open and could be seen).
      draw(renderer, camera, parts2) {
        const size = renderer.getDrawingBufferSize(new THREE.Vector2());
        const w = Math.max(16, Math.round(size.x * 0.5)), h = Math.max(16, Math.round(size.y * 0.5));
        if (target.width !== w || target.height !== h) target.setSize(w, h);
        faceMat.uniforms.res.value.set(size.x, size.y);
        camera.updateMatrixWorld();
        vcam.copy(camera, false);
        vcam.matrixWorld.copy(map).multiply(camera.matrixWorld);
        vcam.matrixWorld.decompose(vcam.position, vcam.quaternion, vcam.scale);
        vcam.updateMatrixWorld(true);
        vcam.projectionMatrix.copy(camera.projectionMatrix);
        // Clip away everything between the second camera and the place it looks out of (the oblique near plane).
        const plane = destPlane.clone().applyMatrix4(vcam.matrixWorldInverse);
        const clip = new THREE.Vector4(plane.normal.x, plane.normal.y, plane.normal.z, plane.constant);
        const pm = vcam.projectionMatrix.elements;
        const q = new THREE.Vector4((Math.sign(clip.x) + pm[8]) / pm[0], (Math.sign(clip.y) + pm[9]) / pm[5], -1, (1 + pm[10]) / pm[14]);
        clip.multiplyScalar(2 / clip.dot(q));
        pm[2] = clip.x; pm[6] = clip.y; pm[10] = clip.z + 1; pm[14] = clip.w;
        vcam.projectionMatrixInverse.copy(vcam.projectionMatrix).invert();
        // Under the other light, without this frame's shadows drawn again, the figure and the arch's own face hidden.
        const { setLight, own, snowMat, figure } = parts2;
        const was = snowMat.uniforms.centre.value.clone();
        setLight(other);
        snowMat.uniforms.centre.value.copy(vcam.position);
        const auto = renderer.shadowMap.autoUpdate; renderer.shadowMap.autoUpdate = false;
        faceMesh.visible = false; const figVis = figure.visible; figure.visible = false;
        renderer.setRenderTarget(target);
        renderer.clear();
        renderer.render(scene, vcam);
        renderer.setRenderTarget(null);
        faceMesh.visible = true; figure.visible = figVis;
        renderer.shadowMap.autoUpdate = auto;
        snowMat.uniforms.centre.value.copy(was);
        setLight(own);
      },
    };
  }

  // ---- the library's outside (W13; its inside is library.js) ----------------------------------------------------------------
  {
    const g = frameGroup('slide');
    const Lb = LIBRARY, wallH = 4.2, roofH = 3.2, front = Lb.front, back = front + Lb.depth, half = Lb.width / 2;
    const cobble = cobbleTexture();
    const wallMat = new THREE.MeshLambertMaterial({ map: cobble });
    const wall = (u0, v0, u1, v1, h, uvRepeat) => {
      const len = Math.hypot(u1 - u0, v1 - v0);
      const m = new THREE.Mesh(new THREE.BoxGeometry(len, h, 0.5), wallMat);
      const mid = P((u0 + u1) / 2, h / 2, (v0 + v1) / 2);
      m.position.copy(mid);
      m.rotation.y = Math.atan2(-(u1 - u0), -(v1 - v0));            // the box's length along the wall
      m.castShadow = true; m.receiveShadow = true;
      g.add(m);
      return m;
    };
    wall(front, -half, front, half, wallH);              // front
    wall(back, -half, back, half, wallH);                // back
    wall(front, -half, back, -half, wallH);              // left
    wall(front, half, back, half, wallH);                // right
    // The gable ends (triangles of cobbles) and the roof: two slopes along its length, snow over moss.
    for (const u of [front, back]) {
      const tri = new THREE.Shape(); tri.moveTo(-half - 0.25, 0); tri.lineTo(half + 0.25, 0); tri.lineTo(0, roofH); tri.lineTo(-half - 0.25, 0);
      const m = new THREE.Mesh(new THREE.ExtrudeGeometry(tri, { depth: 0.5, bevelEnabled: false }), wallMat);
      m.position.copy(P(u - 0.25, wallH, 0));
      g.add(m);
    }
    const roofTex = roofTexture(); roofTex.wrapS = THREE.RepeatWrapping; roofTex.repeat.set(3, 1);
    const roofMat = new THREE.MeshLambertMaterial({ map: roofTex, side: THREE.DoubleSide });
    for (const s of [-1, 1]) {
      // One slope from the ridge down to the eave on its side (in the group, x is -v); snow at the ridge, moss at the eave.
      const z0 = front - 0.5, z1 = back + 0.5, ridge = wallH + roofH, eaveX = s * (half + 0.6), eaveY = wallH - 0.2;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute([0, ridge, z0, eaveX, eaveY, z0, eaveX, eaveY, z1, 0, ridge, z1], 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute([0, 1, 0, 0, 1, 0, 1, 1], 2));
      geo.setIndex([0, 1, 2, 0, 2, 3]); geo.computeVertexNormals();
      const mesh = new THREE.Mesh(geo, roofMat);
      mesh.castShadow = true; mesh.receiveShadow = true;
      g.add(mesh);
      // A thin snowy rim along the eave.
      const rim = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.14, z1 - z0), new THREE.MeshLambertMaterial({ color: col(look.snowColour) }));
      rim.position.set(eaveX, eaveY + 0.02, (z0 + z1) / 2);
      g.add(rim);
    }
    // Trunks as columns in the walls: at the corners and between the windows.
    const bark = new THREE.MeshLambertMaterial({ map: barkTexture(), color: 0xb7a99a });
    const columns = [[front, -half], [front, half], [back, -half], [back, half], [front, -1.3], [front, 1.3], ...[6.1, 10.1].flatMap((u) => [[u, -half], [u, half]])];
    for (const [u, v] of columns) {
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.42, wallH + 0.5, 9), bark);
      c.position.copy(P(u, (wallH + 0.5) / 2 - 0.1, v)); c.castShadow = true;
      g.add(c);
    }
    // The windows: large, warm and frosted (light and soft shapes, not a clear view in).
    const winMat = new THREE.MeshBasicMaterial({ map: windowTexture() });
    const frameMat = new THREE.MeshLambertMaterial({ color: 0x2e2117 });
    const glow = glowTexture([[0, 0.5], [0.4, 0.18], [1, 0]]);
    const windowAt = (u, v, w, h, sill, facing) => {
      const holder = new THREE.Group();
      holder.position.copy(P(u, sill, v)); holder.rotation.y = facing;
      const pane = new THREE.Mesh(new THREE.PlaneGeometry(w, h).translate(0, h / 2, 0), winMat);
      holder.add(pane);
      for (const [fw, fh, x, y] of [[w + 0.2, 0.14, 0, 0], [w + 0.2, 0.14, 0, h], [0.12, h, -w / 2, h / 2], [0.12, h, w / 2, h / 2], [0.07, h, 0, h / 2], [w, 0.07, 0, h * 0.55]]) {
        const b = new THREE.Mesh(new THREE.BoxGeometry(fw, fh, 0.1), frameMat); b.position.set(x, y, 0.03); holder.add(b);
      }
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: col('#ffb870'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.6 }));
      s.position.set(0, h / 2, 0.6); s.scale.set(w * 2.2, h * 1.8, 1);
      holder.add(s);
      g.add(holder);
    };
    // The tall windows (inside.js LIB.tall): front-right and the right side's three (facing the clearing is -z in
    // the group, so the front's turns round). The round ones (LIB.round) sit high, above the mezzanine inside:
    // front-left and the left side's three.
    for (const t of LIB.tall) {
      if (t.wall === 'front') windowAt(front - 0.27, t.at, t.w, t.h, t.sill, Math.PI);
      else windowAt(t.at, half + 0.27, t.w, t.h, t.sill, -Math.PI / 2);
    }
    const roundMat = new THREE.MeshBasicMaterial({ map: windowTexture() });
    for (const r of LIB.round) {
      const holder = new THREE.Group();
      if (r.wall === 'front') { holder.position.copy(P(front - 0.27, r.y, r.at)); holder.rotation.y = Math.PI; }
      else { holder.position.copy(P(r.at, r.y, -half - 0.27)); holder.rotation.y = Math.PI / 2; }
      holder.add(new THREE.Mesh(new THREE.CircleGeometry(r.r, 24), roundMat));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r.r + 0.04, 0.07, 6, 24), frameMat); ring.position.z = 0.03; holder.add(ring);
      for (const a of [0, Math.PI / 2]) { const bar = new THREE.Mesh(new THREE.BoxGeometry(2 * r.r, 0.05, 0.06), frameMat); bar.rotation.z = a; bar.position.z = 0.03; holder.add(bar); }
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: col('#ffb870'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.45 }));
      s.position.set(0, 0, 0.5); s.scale.setScalar(r.r * 4); holder.add(s);
      g.add(holder);
    }
    // The door: arched planks, iron studs, a small lantern beside it.
    {
      const dw = 0.75, dh = 2.4;
      const sh = new THREE.Shape(); sh.moveTo(-dw, 0); sh.lineTo(-dw, dh - dw); sh.absarc(0, dh - dw, dw, Math.PI, 0, true); sh.lineTo(dw, 0); sh.lineTo(-dw, 0);
      const door = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: 0.12, bevelEnabled: false, curveSegments: 14 }), new THREE.MeshLambertMaterial({ map: woodTexture('#5a3a22', 'rgba(30,16,8,0.35)', 4) }));
      door.geometry.computeBoundingBox();
      { const p = door.geometry.attributes.position, uv = door.geometry.attributes.uv; for (let i = 0; i < p.count; i++) uv.setXY(i, (p.getX(i) + dw) / (2 * dw), p.getY(i) / dh); }
      door.rotation.y = Math.PI; door.position.copy(P(front - 0.2, 0, 0));
      g.add(door);
      // A lantern either side of the door (step 2b: the left one added to match), each with a small warm light that
      // falls on the door's planks and the stone round it.
      const ironMat = new THREE.MeshLambertMaterial({ color: 0x1b1d22 });
      for (const v of [-1.15, 1.15]) {
        const lantern = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: col('#ffc276'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
        lantern.position.copy(P(front - 0.45, 2.3, v)); lantern.scale.setScalar(0.9);
        g.add(lantern);
        const box = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.24, 0.16), new THREE.MeshBasicMaterial({ color: col('#ffd59a') }));
        box.position.copy(P(front - 0.4, 2.3, v));
        g.add(box);
        const cap = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.12, 4).rotateY(Math.PI / 4), ironMat); cap.position.copy(P(front - 0.4, 2.48, v)); g.add(cap);
        const arm = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.3), ironMat); arm.position.copy(P(front - 0.2, 2.55, v)); g.add(arm);
        const light = new THREE.PointLight(col('#ffc276'), 2.4, 4.2, 1.4); light.position.copy(P(front - 0.75, 2.2, v * 0.85)); g.add(light);
      }
    }
    // A stone chimney at the back, over the fireplace inside.
    const chim = new THREE.Mesh(new THREE.BoxGeometry(1.1, 3.2, 1.1), wallMat);
    chim.position.copy(P(back - 0.55, wallH + roofH - 0.2, 0));
    g.add(chim);
    scene.add(g);
    parts.library = { group: g };
  }

  return {
    parts,
    shimmerTime,
    // Each exit's look: 'open' or 'dormant' (W18). The tree-door's and the slide's are inside (tunnel.js, library.js).
    setLook(exit, state) {
      const open = state === 'open';
      if (exit === 'wardrobe') parts.wardrobe.setGlow(open ? 1 : 0);
      if (exit === 'arch') parts.arch.faceMat.uniforms.open.value = open ? 1 : 0;
    },
  };
}
