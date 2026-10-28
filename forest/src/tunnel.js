// tunnel.js: the tunnel inside the great tree (W11, W31; step 2 of W28). Bigger on the inside: a rounded passage
// carved through the wood, curving gently on for twice the trunk's width, so it's a scene of its own. It is laid out
// in the forest's own coordinates from the real mouth (inside.js tunnelAt), and drawn over the forest (main.js: the
// forest first, then this with the depth cleared), so through its mouth you see the real forest, live.
//   the walls   carved wood with the grain and growth rings, a lighter cut rim at the mouth, snow dust near it
//   the door    halfway: tall vertical planks, black wrought-iron straps with curled ends and round bolt heads;
//               dormant, a heavy iron bar across it in two brackets; open, the bar lifted aside and warm light
//               through the gaps between the planks; going through, it opens away from you onto amber light
//   the lantern a small iron lantern on a hook beside the door (the glow you see from the mouth)
import * as THREE from 'three';
import { TUNNEL, tunnelAt, TUNNEL_FLOOR } from './inside.js';
import { col, glowTexture } from './scene.js';
import { carvedTexture, woodTexture } from './textures.js';

// A point at (s along, w across: right positive, y up from the floor) in the tunnel.
const at = (s, w, y) => { const p = tunnelAt(s); return new THREE.Vector3(p.x + p.rx * w, TUNNEL_FLOOR + y, p.z + p.rz * w); };

export function createTunnel() {
  const scene = new THREE.Scene();
  const { half, height, door } = TUNNEL;
  const wallH = height - half;                       // where the round top begins

  // ---- the passage: one strip of rings round the arch, the floor, and the cut rim at the mouth ---------------------
  const carved = carvedTexture();
  const shellMat = new THREE.MeshLambertMaterial({ map: carved, side: THREE.DoubleSide });
  {
    // The arch's outline, from the left floor corner up and over to the right one: [w, y] points.
    const outline = [];
    for (let k = 0; k <= 4; k++) outline.push([-half, (k / 4) * wallH]);
    for (let k = 1; k < 16; k++) { const a = Math.PI - (k / 16) * Math.PI; outline.push([Math.cos(a) * half, wallH + Math.sin(a) * half]); }
    for (let k = 4; k >= 0; k--) outline.push([half, (k / 4) * wallH]);
    const around = [0]; for (let i = 1; i < outline.length; i++) around.push(around[i - 1] + Math.hypot(outline[i][0] - outline[i - 1][0], outline[i][1] - outline[i - 1][1]));
    const S = [], end = door + 1.2;
    for (let s = 0; s <= end + 1e-9; s += 0.25) S.push(s);
    const pos = [], uv = [], idx = [];
    S.forEach((s, i) => outline.forEach(([w, y], j) => { const p = at(s, w, y); pos.push(p.x, p.y, p.z); uv.push(around[j] / 2.4, s / 3); }));
    const n = outline.length;
    for (let i = 0; i < S.length - 1; i++) for (let j = 0; j < n - 1; j++) { const a = i * n + j; idx.push(a, a + n, a + 1, a + 1, a + n, a + n + 1); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx); geo.computeVertexNormals();
    scene.add(new THREE.Mesh(geo, shellMat));
    // The floor: worn wood, a little snow blown in near the mouth.
    const floorTex = carvedTexture(); floorTex.repeat.set(1, 4);
    const fpos = [], fuv = [], fidx = [];
    S.forEach((s, i) => { for (const w of [-half, half]) { const p = at(s, w, 0.005); fpos.push(p.x, p.y, p.z); fuv.push((w + half) / 2, s / 3); } if (i) { const a = (i - 1) * 2; fidx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); } });
    const fgeo = new THREE.BufferGeometry();
    fgeo.setAttribute('position', new THREE.Float32BufferAttribute(fpos, 3)); fgeo.setAttribute('uv', new THREE.Float32BufferAttribute(fuv, 2));
    fgeo.setIndex(fidx); fgeo.computeVertexNormals();
    scene.add(new THREE.Mesh(fgeo, new THREE.MeshLambertMaterial({ map: floorTex, color: 0x9a8a7a, side: THREE.DoubleSide })));
    const dust = new THREE.MeshLambertMaterial({ color: 0xe8eef7, transparent: true, opacity: 0.55, depthWrite: false });
    for (let k = 0; k < 9; k++) {
      const s = 0.1 + Math.pow(k / 9, 1.4) * 1.8, w = Math.sin(k * 2.1) * 0.55, r = 0.18 + (k % 3) * 0.08;
      const d = new THREE.Mesh(new THREE.CircleGeometry(r * (1 - s / 2.4), 10).rotateX(-Math.PI / 2), dust);
      d.position.copy(at(s, w, 0.012)); scene.add(d);
    }
    // The cut rim at the mouth: a lighter band of fresh wood round the opening.
    const rim = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(outline.map(([w, y]) => at(0.02, w * 1.02, y + 0.01))), 40, 0.06, 6, false), new THREE.MeshLambertMaterial({ map: woodTexture('#9a7248', 'rgba(60,36,18,0.3)', 1) }));
    scene.add(rim);
  }

  // ---- the door and its iron ------------------------------------------------------------------------------------------
  const iron = new THREE.MeshLambertMaterial({ color: 0x17181c });
  const p0 = tunnelAt(door);
  const frame = new THREE.Group();                    // at the door's place, facing back towards the mouth: +z there
  frame.position.copy(at(door, 0, 0));
  frame.rotation.y = Math.atan2(-p0.dx, -p0.dz);
  scene.add(frame);
  const leafW = 2 * half - 0.06, leafH = height - 0.04;
  // Hinged on the left (as you face it from the mouth: the frame's -x is your right... the door's own x runs left to
  // right as seen from the mouth, which is the frame's -x).
  const hinge = new THREE.Group(); hinge.position.set(leafW / 2, 0, 0); frame.add(hinge);
  const plankMat = new THREE.MeshLambertMaterial({ map: woodTexture('#5a3a22', 'rgba(25,12,5,0.4)', 1) });
  const arch = (x) => { const r = half - 0.03; const dx = Math.abs(x); return dx < r ? wallH + Math.sqrt(r * r - dx * dx) - 0.02 : wallH; };
  const gaps = [];
  const planks = 5, pw = leafW / planks;
  for (let i = 0; i < planks; i++) {
    const x0 = -leafW / 2 + i * pw + 0.012, x1 = x0 + pw - 0.024, xm = (x0 + x1) / 2, top = Math.min(arch(x0), arch(x1));
    const p = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, top, 0.09), plankMat);
    p.position.set(-xm - leafW / 2, top / 2, 0); hinge.add(p);
    if (i) gaps.push(-(x0 - 0.012) - leafW / 2);
  }
  // Light through the gaps (open): thin warm strips just behind the planks.
  const gapMat = new THREE.MeshBasicMaterial({ color: col('#ffc27a'), transparent: true, opacity: 0, depthWrite: false });
  for (const x of gaps) { const s = new THREE.Mesh(new THREE.PlaneGeometry(0.02, wallH + 0.4), gapMat); s.position.set(x, (wallH + 0.4) / 2 + 0.05, -0.06); hinge.add(s); }
  // The straps, their curled ends, and the bolt heads.
  for (const y of [0.35, 1.15, 1.9]) {
    const len = leafW * 0.78;
    const strap = new THREE.Mesh(new THREE.BoxGeometry(len, 0.07, 0.02), iron); strap.position.set(-len / 2 - 0.08, y, 0.056); hinge.add(strap);
    const curl = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.016, 6, 16, Math.PI * 1.5), iron); curl.position.set(-len - 0.08, y + 0.07, 0.06); curl.rotation.z = Math.PI * 0.25; hinge.add(curl);
    const curl2 = curl.clone(); curl2.scale.setScalar(0.6); curl2.position.set(-len * 0.55, y - 0.07, 0.06); curl2.rotation.z = Math.PI * 1.25; hinge.add(curl2);
    for (let k = 0; k < 5; k++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), iron); b.position.set(-0.15 - k * (len / 5), y, 0.07); hinge.add(b); }
  }
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.014, 6, 16), iron); ring.position.set(-leafW + 0.25, 1.05, 0.08); hinge.add(ring);
  // The bar (dormant: across the door in two brackets; open: lifted aside, standing against the wall).
  const bar = new THREE.Mesh(new THREE.BoxGeometry(leafW + 0.3, 0.11, 0.08), iron);
  frame.add(bar);
  for (const x of [-leafW / 2 - 0.05, leafW / 2 + 0.05]) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.2, 0.16), iron); b.position.set(x, 1.15, 0.1); frame.add(b); }
  const setBar = (k) => {
    // k 0: across the door at 1.15; k 1: stood upright against the right-hand wall.
    bar.position.set(-leafW / 2 * k * 1.1 + (1 - k) * 0, 1.15 + k * 0.05, 0.16 + k * 0.06);
    bar.rotation.z = k * (Math.PI / 2 - 0.12);
    if (k > 0.99) bar.position.set(-half + 0.12, (leafW + 0.3) / 2, 0.25);
  };
  // Beyond the door: just amber light (W31), only while it opens.
  const beyondMat = new THREE.MeshBasicMaterial({ color: col('#ffb45a'), transparent: true, opacity: 0, fog: false, depthWrite: false });
  const beyond = new THREE.Mesh(new THREE.PlaneGeometry(2 * half + 0.4, height + 0.3), beyondMat);
  beyond.position.set(0, height / 2, -0.7); frame.add(beyond);
  const beyondLight = new THREE.PointLight(col('#ffb45a'), 0, 6, 1.4); beyondLight.position.set(0, 1.4, -0.4); frame.add(beyondLight);

  // ---- the lantern on its hook, beside the door ------------------------------------------------------------------------
  const placed = (mesh, x, y, z) => { mesh.position.set(x, y, z); return mesh; };
  const lantern = new THREE.Group();
  lantern.position.copy(at(door - 0.45, -half + 0.2, 1.55)); scene.add(lantern);
  lantern.add(placed(new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.22), iron), 0, 0.24, 0));
  for (const [dx, dz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) lantern.add(placed(new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.24, 0.02), iron), dx * 0.07, 0, dz * 0.07));
  lantern.add(placed(new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.1, 4).rotateY(Math.PI / 4), iron), 0, 0.17, 0));
  const glass = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.2, 0.12), new THREE.MeshBasicMaterial({ color: col('#ffcf86') })); lantern.add(glass);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: col('#ffbf70'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.8 }));
  halo.scale.setScalar(0.9); lantern.add(halo);
  const lanternLight = new THREE.PointLight(col('#ffb86a'), 4, 7, 1.4); lantern.add(lanternLight);

  // ---- light: the lantern, a little cool night at the mouth, and a dim warmth everywhere --------------------------------
  const mouthLight = new THREE.PointLight(col('#9fb6ff'), 1.6, 4.5, 1.5); mouthLight.position.copy(at(0.4, 0, 1.5)); scene.add(mouthLight);
  scene.add(new THREE.AmbientLight(col('#6a5a50'), 0.35));

  let state = 'dormant';
  const api = {
    scene,
    setLook(s) { state = s === 'open' ? 'open' : 'dormant'; setBar(state === 'open' ? 1 : 0); gapMat.opacity = state === 'open' ? 0.85 : 0; },
    // 0 shut, 1 swung away from you (opening onwards).
    setDoor(k) { hinge.rotation.y = -k * 1.6; },
    setBeyond(k) { beyondMat.opacity = k; beyondLight.intensity = 6 * k; },
    tick(t) {
      const f = 0.85 + 0.15 * Math.sin(t * 7.1) * Math.sin(t * 3.3 + 1);
      lanternLight.intensity = 4 * f; halo.material.opacity = 0.65 + 0.2 * f;
      if (state === 'open') gapMat.opacity = 0.7 + 0.2 * Math.sin(t * 1.7);
    },
  };
  api.setLook('dormant');
  return api;
}
