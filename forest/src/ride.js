// ride.js: the slide ride (W15; step 2 of W28), played by itself in about 8 seconds once you've shrunk and slipped
// through the library's little door (W14): you're figurine-sized now, so the chute is only a hand's width across.
//   1. the wood   a polished wooden chute spiralling down through the library's walls and then among roots and earth,
//                 small warm lights flicking past (a scene of its own: the shaft under the library)
//   2. the ice    bursting out of a snowbank behind the library into a clear ice run that winds back through the night
//                 forest beside it (laid in the forest itself: layout.js ICE_RUN; you can find it from outside, too)
//   3. the blue   the run dives into a hollow glowing the blue of the maze's Great Hall; the forest hands you on
// main.js drives it: rideAt(t) says where the rider and the camera are, and which scene to draw.
import * as THREE from 'three';
import { iceRunPoints, ICE_RUN_END } from './layout.js';
import { col, glowTexture } from './scene.js';
import { woodTexture, barkTexture } from './textures.js';

export const RIDE = { wood: 3.0, ice: 3.6, blue: 1.5 };         // seconds for each part
export const HALL_BLUE = '#4260b0';                               // the maze's Great Hall accent (rgb 66, 96, 176)

// A half-pipe along a curve: the lower half of a ring round the curve at every sample (open at the top).
function trough(curve, samples, radius, lip = 0.12) {
  const frames = curve.computeFrenetFrames(samples, false);
  const pos = [], uv = [], idx = [], n = 14;
  const up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i <= samples; i++) {
    const p = curve.getPointAt(i / samples), t = frames.tangents[i];
    // A side vector level with the ground, and "down" square to the curve.
    const side = new THREE.Vector3().crossVectors(t, up).normalize(), down = new THREE.Vector3().crossVectors(t, side).normalize();
    if (down.y > 0) down.negate();
    for (let k = 0; k <= n; k++) {
      const a = -lip + (k / n) * (Math.PI + 2 * lip);                // from one lip, down under, to the other
      const q = p.clone().addScaledVector(side, Math.cos(a) * radius).addScaledVector(down, Math.sin(a) * radius);
      pos.push(q.x, q.y, q.z); uv.push(k / n, i / 6);
    }
    if (i) for (let k = 0; k < n; k++) { const a = (i - 1) * (n + 1) + k; idx.push(a, a + n + 1, a + 1, a + 1, a + n + 1, a + n + 2); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx); geo.computeVertexNormals();
  return geo;
}

export function createRide({ forest, groundAt }) {
  // ---- 1. the wooden chute, spiralling down a shaft under the library (its own scene) -------------------------------
  const scene = new THREE.Scene();
  scene.background = col('#080503');
  const turns = 3.2, R = 1.1, drop = 7.5;
  const woodCurve = new THREE.CatmullRomCurve3(Array.from({ length: 80 }, (_, i) => {
    const t = i / 79, a = t * turns * Math.PI * 2;
    return new THREE.Vector3(Math.cos(a) * R, -t * drop, Math.sin(a) * R);
  }));
  const polished = new THREE.MeshPhongMaterial({ map: woodTexture('#8a5a30', 'rgba(40,20,8,0.3)', 1), shininess: 70, specular: 0x553322, emissive: 0x2a1408, side: THREE.DoubleSide });
  scene.add(new THREE.Mesh(trough(woodCurve, 360, 0.16), polished));
  // The shaft: the library's stone at the top, then earth with roots across it.
  const shaftTex = barkTexture(); shaftTex.repeat.set(4, 3);
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 2.1, drop + 3, 24, 1, true), new THREE.MeshLambertMaterial({ map: shaftTex, color: 0x8a6a54, side: THREE.BackSide }));
  shaft.position.y = -drop / 2 + 0.5; scene.add(shaft);
  const rootMat = new THREE.MeshLambertMaterial({ map: barkTexture(), color: 0x6a5040 });
  for (let i = 0; i < 16; i++) {
    const y = -2.5 - (i / 16) * (drop - 2), a = i * 2.4;
    const pts = [new THREE.Vector3(Math.cos(a) * 2.2, y + 0.4, Math.sin(a) * 2.2), new THREE.Vector3(Math.cos(a + 0.5) * 1.5, y, Math.sin(a + 0.5) * 1.5), new THREE.Vector3(Math.cos(a + 1.1) * 2.2, y - 0.5, Math.sin(a + 1.1) * 2.2)];
    scene.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 12, 0.05 + (i % 3) * 0.03, 6, false), rootMat));
  }
  // Small warm lights along the way.
  const warm = new THREE.SpriteMaterial({ map: glowTexture(), color: col('#ffb860'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  for (let i = 0; i < 18; i++) {
    const t = (i + 0.5) / 18, p = woodCurve.getPointAt(t), out = new THREE.Vector3(p.x, 0, p.z).normalize();
    const s = new THREE.Sprite(warm); s.position.copy(p).addScaledVector(out, 0.55).add(new THREE.Vector3(0, 0.3, 0)); s.scale.setScalar(0.45); scene.add(s);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), new THREE.MeshBasicMaterial({ color: col('#ffd59a') })); bulb.position.copy(s.position); scene.add(bulb);
  }
  const riderLight = new THREE.PointLight(col('#ffbe78'), 4, 4, 1.4); scene.add(riderLight);
  // Lamps down the shaft, so the walls and roots show as you pass.
  for (let i = 0; i < 4; i++) { const l = new THREE.PointLight(col('#ffaa60'), 5, 5, 1.3); l.position.set(0, -0.6 - i * 2.1, 0); scene.add(l); }
  scene.add(new THREE.AmbientLight(col('#6a4a34'), 0.9));

  // ---- 2. the ice run in the forest --------------------------------------------------------------------------------------
  const runPts = iceRunPoints(0.5).map(([x, z], i, all) => {
    // Sitting on the snow, banked up a little at the start; the last stretch dives down into the hollow.
    const k = i / (all.length - 1);
    const dive = Math.max(0, (k - 0.86) / 0.14);
    return new THREE.Vector3(x, groundAt(x, z) + 0.22 + (1 - k) * 0.25 - dive * dive * 1.6, z);
  });
  const iceCurve = new THREE.CatmullRomCurve3(runPts);
  const iceGroup = new THREE.Group();
  const ice = new THREE.MeshPhongMaterial({ color: col('#a8dcf0'), emissive: col('#24506a'), specular: 0xffffff, shininess: 110, transparent: true, opacity: 0.82, side: THREE.DoubleSide, depthWrite: false });
  const iceMesh = new THREE.Mesh(trough(iceCurve, 420, 0.24, 0.25), ice); iceMesh.renderOrder = 1; iceGroup.add(iceMesh);
  // Snow banked along both sides (low, soft lumps), and the snowbank it bursts out of.
  const snowMat = new THREE.MeshLambertMaterial({ color: col('#e6ecf6') });
  for (const s of [-1, 1]) {
    // A smooth bank along each side, lying on the snow (a flattened tube).
    const pts = [];
    for (let i = 0; i <= 80; i++) {
      const t = (i / 80) * 0.86, p = iceCurve.getPointAt(t), tan = iceCurve.getTangentAt(t), side = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
      const q = p.clone().addScaledVector(side, s * 0.4); q.y = groundAt(q.x, q.z) + 0.06; pts.push(q);
    }
    const bank = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 200, 0.2, 7, false), snowMat);
    bank.scale.y = 1; iceGroup.add(bank);
  }
  {
    const p = iceCurve.getPointAt(0);
    const bank = new THREE.Mesh(new THREE.SphereGeometry(1.2, 14, 8).scale(1.3, 0.6, 1.3), snowMat); bank.position.set(p.x, groundAt(p.x, p.z), p.z); iceGroup.add(bank);
    const mouth = new THREE.Mesh(new THREE.CircleGeometry(0.26, 14), new THREE.MeshBasicMaterial({ color: 0x0a0604 }));
    const t = iceCurve.getTangentAt(0.01); mouth.position.copy(iceCurve.getPointAt(0.004)); mouth.lookAt(mouth.position.clone().add(t)); iceGroup.add(mouth);
  }
  // ---- 3. the hollow, glowing the Great Hall's blue -------------------------------------------------------------------
  const [hx, hz] = ICE_RUN_END;
  const blueAt = new THREE.Vector3(hx, groundAt(hx, hz) - 1.2, hz);
  {
    const rim = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.45, 8, 28).rotateX(Math.PI / 2).scale(1, 0.5, 1), snowMat); rim.position.set(hx, groundAt(hx + 2.7, hz) + 0.05, hz); iceGroup.add(rim);
    const pool = new THREE.Mesh(new THREE.CircleGeometry(1.5, 24).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: col('#8aa0e0') })); pool.position.set(hx, groundAt(hx, hz) - 0.02, hz); iceGroup.add(pool);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: col('#6f8ce0'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.85 }));
    glow.position.set(hx, groundAt(hx, hz) + 0.6, hz); glow.scale.set(4.5, 2.6, 1); iceGroup.add(glow);
    const light = new THREE.PointLight(col('#6f8ce0'), 5, 9, 1.5); light.position.set(hx, groundAt(hx, hz) + 0.8, hz); iceGroup.add(light);
  }
  forest.add(iceGroup);

  // Where the rider and the camera are t seconds into the ride: { part, scene: 'ride' | 'forest', rider, cam, look, k }.
  const total = RIDE.wood + RIDE.ice + RIDE.blue;
  function rideAt(t) {
    if (t < RIDE.wood) {
      const k = t / RIDE.wood, e = k * k * (3 - 2 * k) * 0.25 + k * 0.75;      // gathering speed
      const c = woodCurve.getPointAt(Math.min(1, e)), a = woodCurve.getPointAt(Math.min(1, e + 0.03)), b = woodCurve.getPointAt(Math.max(0, e - 0.025));
      riderLight.position.copy(a).add(new THREE.Vector3(0, 0.25, 0));
      return { part: 'wood', scene: 'ride', rider: a.clone().add(new THREE.Vector3(0, -0.1, 0)), cam: b.clone().add(new THREE.Vector3(0, 0.12, 0)), look: woodCurve.getPointAt(Math.min(1, e + 0.07)), k };
    }
    if (t < RIDE.wood + RIDE.ice) {
      const k = (t - RIDE.wood) / RIDE.ice, e = Math.min(0.9, k * 0.9);
      const a = iceCurve.getPointAt(e + 0.012), b = iceCurve.getPointAt(Math.max(0, e - 0.004));
      return { part: 'ice', scene: 'forest', rider: a.clone().add(new THREE.Vector3(0, -0.12, 0)), cam: b.clone().add(new THREE.Vector3(0, 0.16, 0)), look: iceCurve.getPointAt(Math.min(1, e + 0.05)).add(new THREE.Vector3(0, 0.05, 0)), k };
    }
    const k = Math.min(1, (t - RIDE.wood - RIDE.ice) / RIDE.blue), e = 0.9 + k * 0.1;
    const a = iceCurve.getPointAt(Math.min(1, e)), b = iceCurve.getPointAt(Math.max(0, e - 0.01));
    return { part: 'blue', scene: 'forest', rider: a.clone(), cam: b.clone().add(new THREE.Vector3(0, 0.25 - k * 0.2, 0)), look: blueAt.clone().lerp(a, 0.3 * (1 - k)), k };
  }
  return { scene, woodCurve, iceCurve, iceGroup, blueAt, rideAt, total };
}
