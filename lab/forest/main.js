// main.js: Winter Forest's look test (claude/winter-forest-plan.md, W3): the clearing at night, a glowing lamp
// post, spruces, falling snow, snowy ground and the starts of the four paths, with the maze's figure, free walking
// and over-the-shoulder camera (the maze's settings, M10). A lil-gui panel tunes the mood; nothing here is the
// real tile yet. Built into lab/forest-test.html by lab/build-forest.mjs.
import * as THREE from 'three';
import GUI from 'lil-gui';
import { CLEARING, WORLD, PATHS, PATH_END, pathPoints, plantTrees, walk } from './layout.js';
import { createSound, SOUND_DEFAULTS } from './sound.js';

const DEFAULTS = {
  // Night
  skyTop: '#04060d', skyHorizon: '#1a2640', stars: 0.7, moonlight: 0.8, moonColour: '#9fb6ff', ambient: 0.6, exposure: 1.0,
  // Lamp
  lampColour: '#ffbf6e', lampIntensity: 14, lampReach: 18, halo: 1.6, shadows: true, flicker: 0.15,
  // Snow falling
  snowAmount: 6000, snowSpeed: 0.8, flakeSize: 1.0, snowDrift: 0.5, falling: true,
  // Ground
  snowColour: '#e6ecf6', pathColour: '#8592ab', pathWidth: 1.8, bumps: 0.12,
  // Trees
  treeCount: 260, treeSize: 1.0, treeSpacing: 2.6, treeSnow: 0.6, treeColour: '#2c5341', trunkColour: '#4a3527', seed: 7,
  // Fog
  fogColour: '#141c2e', fogDensity: 0.03,
  // Camera and moving (the maze's, M10)
  distance: 3.2, height: 2.1, shoulder: 0.35, lookAhead: 1.6, lookHeight: 0.75, fov: 62, follow: 7,
  walkSpeed: 2.6, turnSpeed: 150, mouseTurn: true,
  // Sound (W5)
  ...SOUND_DEFAULTS,
};
const STORE = 'winter-forest-look-test';
const params = { ...DEFAULTS, ...load() };
function load() { try { return JSON.parse(localStorage.getItem(STORE) || '{}'); } catch { return {}; } }
function save() { try { localStorage.setItem(STORE, JSON.stringify(params)); } catch { /* private window */ } }
function forget() { try { localStorage.removeItem(STORE); } catch { /* private window */ } }
const col = (hex) => new THREE.Color(hex);

// ---- renderer, scene, camera --------------------------------------------------------------------------------------
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.getElementById('stage').appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(params.fov, 1, 0.05, 600);
scene.fog = new THREE.FogExp2(col(params.fogColour), params.fogDensity);

// ---- the sky: a gradient dome and stars ------------------------------------------------------------------------------
const skyMat = new THREE.ShaderMaterial({
  uniforms: { top: { value: col(params.skyTop) }, horizon: { value: col(params.skyHorizon) } },
  vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: 'uniform vec3 top; uniform vec3 horizon; varying vec3 vP; void main(){ float h = clamp(normalize(vP).y, 0.0, 1.0); gl_FragColor = vec4(mix(horizon, top, pow(h, 0.55)), 1.0); }',
  side: THREE.BackSide, depthWrite: false, fog: false,
});
const sky = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), skyMat);
sky.renderOrder = -2;
scene.add(sky);
const starGeo = new THREE.BufferGeometry();
{
  const n = 1400, p = new Float32Array(n * 3), b = new Float32Array(n);
  let s = 12345; const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < n; i++) {
    const u = r(), v = 0.08 + r() * 0.92, a = u * Math.PI * 2, y = v, q = Math.sqrt(1 - y * y);
    p.set([Math.cos(a) * q * 380, y * 380, Math.sin(a) * q * 380], i * 3); b[i] = 0.3 + r() * 0.7;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(p, 3));
  starGeo.setAttribute('bright', new THREE.BufferAttribute(b, 1));
}
const starMat = new THREE.ShaderMaterial({
  uniforms: { amount: { value: params.stars }, time: { value: 0 } },
  vertexShader: 'attribute float bright; uniform float time; varying float vB; void main(){ vB = bright * (0.75 + 0.25 * sin(time * 1.3 + position.x)); gl_PointSize = 1.0 + bright * 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: 'uniform float amount; varying float vB; void main(){ vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(c)); gl_FragColor = vec4(vec3(0.85,0.9,1.0), a * vB * amount); }',
  transparent: true, depthWrite: false, fog: false,
});
const stars = new THREE.Points(starGeo, starMat);
stars.renderOrder = -1;
scene.add(stars);

// ---- lights: moonlight, the sky's soft fill, the lamp ----------------------------------------------------------------
const hemi = new THREE.HemisphereLight(0x8fa4d8, 0x2a3346, params.ambient);
scene.add(hemi);
const moon = new THREE.DirectionalLight(col(params.moonColour), params.moonlight);
moon.position.set(-30, 40, -18);
scene.add(moon);

// ---- the ground: snow with the four paths trodden into it (a picture laid over a gently bumpy plane) -----------------
let world = null;                         // { trees, paths } for walking
const SIZE = 2 * (WORLD + 14);
const groundGeo = new THREE.PlaneGeometry(SIZE, SIZE, 160, 160).rotateX(-Math.PI / 2);
const groundCanvas = document.createElement('canvas');
groundCanvas.width = groundCanvas.height = 2048;
const groundTex = new THREE.CanvasTexture(groundCanvas);
groundTex.colorSpace = THREE.SRGBColorSpace;
groundTex.anisotropy = 4;
const groundMat = new THREE.MeshLambertMaterial({ map: groundTex });
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.receiveShadow = true;
scene.add(ground);
const toCanvas = (x, z) => [(x / SIZE + 0.5) * 2048, (z / SIZE + 0.5) * 2048];
function paintGround() {
  const g = groundCanvas.getContext('2d');
  g.fillStyle = params.snowColour; g.fillRect(0, 0, 2048, 2048);
  // Faint drifts so the snow isn't flat.
  const rand = (() => { let s = 99; return () => ((s = (s * 16807) % 2147483647) / 2147483647); })();
  for (let i = 0; i < 900; i++) {
    const x = rand() * 2048, y = rand() * 2048, r = 10 + rand() * 60;
    const grad = g.createRadialGradient(x, y, 0, x, y, r);
    const shade = rand() < 0.5 ? 'rgba(255,255,255,0.10)' : 'rgba(120,140,180,0.07)';
    grad.addColorStop(0, shade); grad.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grad; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  // The paths: soft-edged, a little darker (trodden), each from the clearing out to where the test stops.
  const px = 2048 / SIZE;
  for (const pass of [{ w: 1.35, a: 0.4, blur: 6 }, { w: 0.95, a: 0.85, blur: 2 }]) {
    g.save();
    g.filter = `blur(${pass.blur}px)`;
    g.strokeStyle = params.pathColour; g.globalAlpha = pass.a;
    g.lineWidth = params.pathWidth * px * pass.w; g.lineCap = 'round'; g.lineJoin = 'round';
    for (const p of world.paths) {
      g.beginPath();
      p.pts.forEach(([x, z], i) => { const [cx, cz] = toCanvas(x, z); if (i) g.lineTo(cx, cz); else g.moveTo(cx, cz); });
      g.stroke();
    }
    // A worn ring round the lamp post where the paths meet.
    const [lx, lz] = toCanvas(0, 0);
    g.lineWidth = params.pathWidth * px * pass.w * 0.9;
    g.beginPath(); g.arc(lx, lz, 3.2 * px, 0, Math.PI * 2); g.stroke();
    g.restore();
  }
  groundTex.needsUpdate = true;
}
function shapeGround() {
  const pos = groundGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i), r = Math.hypot(x, z);
    const n = Math.sin(x * 0.35) * Math.cos(z * 0.29) + Math.sin(x * 0.11 + z * 0.17) * 1.6;
    const away = Math.min(1, Math.max(0, (r - CLEARING + 1) / 6));            // flat in the clearing
    pos.setY(i, n * params.bumps * away);
  }
  pos.needsUpdate = true;
  groundGeo.computeVertexNormals();
}
const groundAt = (x, z) => {
  const r = Math.hypot(x, z);
  const n = Math.sin(x * 0.35) * Math.cos(z * 0.29) + Math.sin(x * 0.11 + z * 0.17) * 1.6;
  return n * params.bumps * Math.min(1, Math.max(0, (r - CLEARING + 1) / 6));
};

// ---- the spruces: one tree drawn many times (instancing) ------------------------------------------------------------
// Tiers of faceted cones, each with a snow cap on its upper part (how much: "snow on branches").
function mergeColoured(parts) {
  const geos = parts.map(({ geo, colour }) => {
    const g = geo.index ? geo.toNonIndexed() : geo;
    g.computeVertexNormals();
    const c = new Float32Array(g.attributes.position.count * 3);
    for (let i = 0; i < g.attributes.position.count; i++) c.set([colour.r, colour.g, colour.b], i * 3);
    g.setAttribute('color', new THREE.BufferAttribute(c, 3));
    return g;
  });
  const total = geos.reduce((n, g) => n + g.attributes.position.count, 0);
  const pos = new Float32Array(total * 3), nor = new Float32Array(total * 3), clr = new Float32Array(total * 3);
  let o = 0;
  for (const g of geos) {
    pos.set(g.attributes.position.array, o * 3); nor.set(g.attributes.normal.array, o * 3); clr.set(g.attributes.color.array, o * 3);
    o += g.attributes.position.count;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('color', new THREE.BufferAttribute(clr, 3));
  return out;
}
function treeGeometry() {
  const green = col(params.treeColour), snow = col(params.snowColour), trunk = col(params.trunkColour);
  // A short trunk, mostly hidden: spruces in snow keep their branches nearly to the ground.
  const parts = [{ geo: new THREE.CylinderGeometry(0.2, 0.3, 1.2, 7).translate(0, 0.6, 0), colour: trunk }];
  const tiers = 6;
  for (let i = 0; i < tiers; i++) {
    const t = i / (tiers - 1);
    const r = 2.4 - t * 1.75, h = 2.9 - t * 1.0, y = 0.45 + i * 1.55;
    parts.push({ geo: new THREE.ConeGeometry(r, h, 9).translate(0, y + h / 2, 0), colour: green });
    if (params.treeSnow > 0) {
      const k = params.treeSnow;
      const cr = r * (0.55 + 0.35 * k), ch = h * (0.35 + 0.25 * k);
      parts.push({ geo: new THREE.ConeGeometry(cr, ch, 9).translate(0, y + h - ch / 2 + 0.06, 0), colour: snow });
    }
  }
  return mergeColoured(parts);
}
const treeMat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
let trees = null;
function plant() {
  if (trees) { scene.remove(trees); trees.geometry.dispose(); }
  const list = plantTrees({ seed: params.seed, count: params.treeCount, spacing: params.treeSpacing, size: params.treeSize, pathWidth: params.pathWidth });
  const paths = PATHS.map((p) => ({ id: p.id, pts: pathPoints(p) }));
  world = { trees: list, paths, pathWidth: params.pathWidth };
  trees = new THREE.InstancedMesh(treeGeometry(), treeMat, Math.max(1, list.length));
  const m = new THREE.Matrix4(), q = new THREE.Quaternion();
  list.forEach((t, i) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), t.r);
    m.compose(new THREE.Vector3(t.x, groundAt(t.x, t.z) - 0.1, t.z), q, new THREE.Vector3(t.s, t.s * (0.95 + (i % 5) * 0.03), t.s));
    trees.setMatrixAt(i, m);
  });
  trees.count = list.length;
  trees.castShadow = true;
  trees.receiveShadow = true;
  scene.add(trees);
}

// ---- the lamp post: iron, a glowing lantern, a halo and its light --------------------------------------------------
const lamp = new THREE.Group();
const iron = new THREE.MeshLambertMaterial({ color: 0x1b1d22 });
const postParts = [
  new THREE.CylinderGeometry(0.28, 0.36, 0.35, 10).translate(0, 0.17, 0),
  new THREE.CylinderGeometry(0.07, 0.1, 3.0, 10).translate(0, 1.85, 0),
  new THREE.CylinderGeometry(0.2, 0.12, 0.12, 8).translate(0, 3.33, 0),
  new THREE.ConeGeometry(0.34, 0.3, 4).rotateY(Math.PI / 4).translate(0, 4.07, 0),
  new THREE.SphereGeometry(0.06, 8, 6).translate(0, 4.27, 0),
];
for (const g of postParts) { const m = new THREE.Mesh(g, iron); m.castShadow = false; lamp.add(m); }
const glassMat = new THREE.MeshBasicMaterial({ color: col(params.lampColour) });
const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.15, 0.55, 4).rotateY(Math.PI / 4).translate(0, 3.66, 0), glassMat);
lamp.add(glass);
for (const [dx, dz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) lamp.add(new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.6, 0.03).translate(dx * 0.17, 3.66, dz * 0.17), iron));
scene.add(lamp);
const haloCanvas = document.createElement('canvas');
haloCanvas.width = haloCanvas.height = 128;
{
  const g = haloCanvas.getContext('2d'), grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,0.9)'); grad.addColorStop(0.18, 'rgba(255,255,255,0.45)'); grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad; g.fillRect(0, 0, 128, 128);
}
const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(haloCanvas), color: col(params.lampColour), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false }));
halo.position.set(0, 3.66, 0);
scene.add(halo);
const lampLight = new THREE.PointLight(col(params.lampColour), params.lampIntensity, params.lampReach, 1.6);
lampLight.position.set(0, 3.5, 0);
lampLight.shadow.mapSize.set(1024, 1024);
lampLight.shadow.bias = -0.002;
lampLight.shadow.radius = 4;
scene.add(lampLight);

// ---- the figure: the maze's, but lit (white body, dark head, a little pointed cap that shows which way it faces) ----
const fig3 = new THREE.Group();
// A touch of its own light, so the figure stays readable with its back to the lamp.
const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.46, 6, 16).translate(0, 0.43, 0), new THREE.MeshLambertMaterial({ color: 0xf6f7fb, emissive: 0x2a3040 }));
const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 18, 12).translate(0, 1.0, 0), new THREE.MeshLambertMaterial({ color: 0x3c3a4e }));
const cap = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.2, 10).rotateX(Math.PI / 2).translate(0, 1.0, -0.2), new THREE.MeshLambertMaterial({ color: 0xf0b046 }));
for (const m of [body, head, cap]) { m.castShadow = true; fig3.add(m); }
scene.add(fig3);
const START = { x: 0, z: 3.2, yaw: 0 };            // just south of the lamp post, facing it (yaw 0 looks north, -z)
const fig = { x: START.x, z: START.z, yaw: START.yaw, bob: 0, steps: 0 };

// ---- falling snow: thousands of points drifting down around the camera (the work is done on the graphics card) -------
const SNOW_BOX = [36, 16, 36];
const snowMat = new THREE.ShaderMaterial({
  uniforms: { time: { value: 0 }, speed: { value: params.snowSpeed }, drift: { value: params.snowDrift }, size: { value: params.flakeSize }, centre: { value: new THREE.Vector3() }, box: { value: new THREE.Vector3(...SNOW_BOX) }, scale: { value: 400 }, fogColour: { value: col(params.fogColour) }, fogDensity: { value: params.fogDensity } },
  vertexShader: `
    attribute float seed; uniform float time, speed, drift, size, scale; uniform vec3 centre, box; varying float vD;
    void main() {
      vec3 p = position;
      p.y = mod(p.y - time * speed * (0.7 + seed * 0.6), box.y);
      p.x += sin(time * 0.6 + seed * 6.283) * drift; p.z += cos(time * 0.5 + seed * 4.0) * drift * 0.7;
      vec3 w = vec3(centre.x + mod(p.x - centre.x + box.x * 0.5, box.x) - box.x * 0.5, p.y - 2.0, centre.z + mod(p.z - centre.z + box.z * 0.5, box.z) - box.z * 0.5);
      vec4 mv = modelViewMatrix * vec4(w, 1.0);
      vD = -mv.z;
      gl_PointSize = size * (0.6 + seed * 0.8) * scale * 0.045 / max(0.5, -mv.z);
      gl_Position = projectionMatrix * mv;
    }`,
  fragmentShader: `
    uniform vec3 fogColour; uniform float fogDensity; varying float vD;
    void main() {
      float a = smoothstep(0.5, 0.15, length(gl_PointCoord - 0.5));
      float f = 1.0 - exp(-fogDensity * fogDensity * vD * vD);
      gl_FragColor = vec4(mix(vec3(0.95, 0.97, 1.0), fogColour, f), a * 0.9 * (1.0 - f * 0.8));
    }`,
  transparent: true, depthWrite: false,
});
let snow = null;
function makeSnow() {
  if (snow) { scene.remove(snow); snow.geometry.dispose(); }
  const n = Math.max(1, Math.round(params.snowAmount));
  const p = new Float32Array(n * 3), s = new Float32Array(n);
  for (let i = 0; i < n; i++) { p.set([(Math.random() - 0.5) * SNOW_BOX[0], Math.random() * SNOW_BOX[1], (Math.random() - 0.5) * SNOW_BOX[2]], i * 3); s[i] = Math.random(); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(p, 3));
  g.setAttribute('seed', new THREE.BufferAttribute(s, 1));
  snow = new THREE.Points(g, snowMat);
  snow.frustumCulled = false;
  scene.add(snow);
}

// ---- applying the settings -------------------------------------------------------------------------------------------
function applyLook() {
  skyMat.uniforms.top.value.set(params.skyTop); skyMat.uniforms.horizon.value.set(params.skyHorizon);
  starMat.uniforms.amount.value = params.stars;
  moon.color.set(params.moonColour); moon.intensity = params.moonlight;
  hemi.intensity = params.ambient;
  renderer.toneMappingExposure = params.exposure;
  glassMat.color.set(params.lampColour); halo.material.color.set(params.lampColour); lampLight.color.set(params.lampColour);
  lampLight.distance = params.lampReach;
  halo.scale.setScalar(params.halo);
  halo.visible = params.halo > 0;
  lampLight.castShadow = params.shadows;
  scene.fog.color.set(params.fogColour); scene.fog.density = params.fogDensity;
  snowMat.uniforms.speed.value = params.snowSpeed; snowMat.uniforms.drift.value = params.snowDrift; snowMat.uniforms.size.value = params.flakeSize;
  snowMat.uniforms.fogColour.value.set(params.fogColour); snowMat.uniforms.fogDensity.value = params.fogDensity;
  snow.visible = params.falling && params.snowAmount > 0;
  camera.fov = params.fov; camera.updateProjectionMatrix();
}
function rebuildGround() { shapeGround(); paintGround(); lamp.position.y = groundAt(0, 0); }
function regrow() { plant(); rebuildGround(); }

// ---- sound (W5): starts on the first key, click or tap; the button mutes; quiet while the tab is hidden --------------
const sound = createSound(params);
const soundBtn = document.getElementById('soundbtn');
function showSoundButton() { soundBtn.textContent = params.sound ? 'Sound on' : 'Sound off'; soundBtn.setAttribute('aria-pressed', String(params.sound)); }
function wake() { sound.start(); }
addEventListener('keydown', wake, { capture: true });
addEventListener('pointerdown', wake, { capture: true });
soundBtn.addEventListener('click', () => { params.sound = !params.sound; save(); sound.start(); sound.apply(); showSoundButton(); gui.controllersRecursive().forEach((c) => c.updateDisplay()); soundBtn.blur(); });
document.addEventListener('visibilitychange', () => { if (document.hidden) sound.pause(); else sound.resume(); });
showSoundButton();

// ---- moving: keys, dragging across the view, and a thumb joystick on phones -----------------------------------------
const held = { forward: false, back: false, left: false, right: false };
const KEYS = { ArrowUp: 'forward', KeyW: 'forward', ArrowDown: 'back', KeyS: 'back', ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right' };
const typing = (e) => e.target && /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName);
addEventListener('keydown', (e) => {
  if (typing(e) || e.altKey || e.ctrlKey || e.metaKey) return;
  if (e.code === 'KeyR') { restart(); return; }
  const c = KEYS[e.code]; if (!c) return;
  e.preventDefault(); held[c] = true;
});
addEventListener('keyup', (e) => { const c = KEYS[e.code]; if (c) held[c] = false; });
addEventListener('blur', () => { for (const k in held) held[k] = false; });
const stick = { x: 0, y: 0, id: null, ox: 0, oy: 0 };
const stickEl = document.getElementById('stick'), knob = document.getElementById('knob');
let dragX = 0, drag = null;
const canvas = renderer.domElement;
canvas.addEventListener('pointerdown', (e) => {
  document.getElementById('phonehelp').classList.add('gone');
  const touch = e.pointerType === 'touch';
  if (touch && e.clientX < innerWidth * 0.45 && e.clientY > innerHeight * 0.45 && stick.id === null) {
    stick.id = e.pointerId; stick.ox = e.clientX; stick.oy = e.clientY;
    stickEl.style.left = `${e.clientX}px`; stickEl.style.top = `${e.clientY}px`; stickEl.hidden = false;
  } else drag = { id: e.pointerId, x: e.clientX };
  canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener('pointermove', (e) => {
  if (e.pointerId === stick.id) {
    let dx = e.clientX - stick.ox, dy = e.clientY - stick.oy;
    const d = Math.hypot(dx, dy), R = 56;
    if (d > R) { dx *= R / d; dy *= R / d; }
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
    stick.x = Math.abs(dx / R) < 0.14 ? 0 : dx / R; stick.y = Math.abs(dy / R) < 0.14 ? 0 : dy / R;
  } else if (drag && e.pointerId === drag.id) { dragX += e.clientX - drag.x; drag.x = e.clientX; }
});
const endPointer = (e) => {
  if (e.pointerId === stick.id) { stick.id = null; stick.x = stick.y = 0; stickEl.hidden = true; knob.style.transform = ''; }
  if (drag && e.pointerId === drag.id) drag = null;
};
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', endPointer);

function restart() { Object.assign(fig, { x: START.x, z: START.z, yaw: START.yaw }); cam.ready = false; }
function update(dt) {
  const turn = (held.right ? 1 : 0) - (held.left ? 1 : 0) + stick.x;
  fig.yaw -= Math.max(-1, Math.min(1, turn)) * params.turnSpeed * Math.PI / 180 * dt + (params.mouseTurn ? dragX * 0.006 : 0);
  dragX = 0;
  const fwd = Math.max(-1, Math.min(1, (held.forward ? 1 : 0) - (held.back ? 1 : 0) - stick.y));
  // Facing: yaw 0 looks towards -z (north); forward is (sin(yaw)·-1, cos(yaw)·-1) in x, z.
  const f = [-Math.sin(fig.yaw), -Math.cos(fig.yaw)];
  if (fwd) {
    const [x, z] = walk([fig.x, fig.z], [f[0] * fwd * params.walkSpeed * dt, f[1] * fwd * params.walkSpeed * dt], world);
    fig.x = x; fig.z = z;
    fig.bob += dt * 9 * Math.abs(fwd);
    // A step every half turn of the bob: a crunch, softer on the trodden paths (out of the clearing, or the worn ring).
    const n = Math.floor(fig.bob / Math.PI);
    if (n !== fig.steps) {
      fig.steps = n;
      const r = Math.hypot(fig.x, fig.z);
      sound.step({ onPath: r > CLEARING - 0.3 || Math.abs(r - 3.2) < 0.6 });
    }
  }
  fig3.position.set(fig.x, groundAt(fig.x, fig.z) + Math.abs(Math.sin(fig.bob)) * 0.04, fig.z);
  fig3.rotation.y = fig.yaw;
}

// ---- the camera: behind and above the figure's shoulder, easing after it (the maze's camera without its openings) ----
const cam = { pos: new THREE.Vector3(), look: new THREE.Vector3(), ready: false };
function updateCamera(dt) {
  const f = new THREE.Vector3(-Math.sin(fig.yaw), 0, -Math.cos(fig.yaw));
  const right = new THREE.Vector3(-f.z, 0, f.x);
  const base = new THREE.Vector3(fig.x, groundAt(fig.x, fig.z), fig.z);
  const want = base.clone().addScaledVector(f, -params.distance).addScaledVector(right, params.shoulder);
  want.y = base.y + params.height;
  want.y = Math.max(want.y, groundAt(want.x, want.z) + 0.4);
  const look = base.clone().addScaledVector(f, params.lookAhead); look.y = base.y + params.lookHeight;
  const k = cam.ready ? 1 - Math.exp(-params.follow * dt) : 1;
  cam.pos.lerp(want, k); cam.look.lerp(look, k); cam.ready = true;
  camera.position.copy(cam.pos); camera.lookAt(cam.look);
  snowMat.uniforms.centre.value.copy(cam.pos);
}

// ---- the frame ----------------------------------------------------------------------------------------------------------
let last = performance.now(), frames = 0, fpsAt = last, fps = 0;
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  update(dt); updateCamera(dt);
  const r = Math.hypot(fig.x, fig.z);
  sound.update({ camPos: cam.pos, camFwd: new THREE.Vector3().subVectors(cam.look, cam.pos).normalize(), outside: Math.min(1, Math.max(0, (r - CLEARING + 1) / 5)) });
  const t = now / 1000;
  snowMat.uniforms.time.value = t; starMat.uniforms.time.value = t;
  // A faint flicker in the lamp (0: steady).
  const fl = 1 - params.flicker * (0.5 + 0.5 * Math.sin(t * 7.3) * Math.sin(t * 3.1 + 1.7)) * 0.35;
  lampLight.intensity = params.lampIntensity * fl;
  halo.material.opacity = 0.65 + 0.35 * fl;
  renderer.render(scene, camera);
  frames++; if (now - fpsAt > 1000) { fps = Math.round(frames * 1000 / (now - fpsAt)); frames = 0; fpsAt = now; }
  requestAnimationFrame(frame);
}
function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix();
  snowMat.uniforms.scale.value = h * renderer.getPixelRatio();
}
addEventListener('resize', resize);

// ---- the panel (lil-gui): double-click a setting's name to reset it; each section has its own reset -----------------
const gui = new GUI({ title: 'Winter Forest' });
if (innerWidth < 700) gui.close();
// Resets go to the starting settings (DEFAULTS), not to what the panel was built with (the saved ones).
const toStart = (c) => { if (Object.hasOwn(DEFAULTS, c.property)) c.setValue(DEFAULTS[c.property]); };
const watch = (c, then = applyLook) => { c.onChange(() => { save(); then(); }); c.domElement.addEventListener('dblclick', () => { toStart(c); }); return c; };
const folder = (name) => { const f = gui.addFolder(name); return f; };
const resetBtn = (f, also) => f.add({ r: () => { f.controllersRecursive().forEach(toStart); if (also) also(); } }, 'r').name('↺ reset');
const fn = folder('Night');
watch(fn.addColor(params, 'skyTop').name('sky overhead'));
watch(fn.addColor(params, 'skyHorizon').name('sky at the horizon'));
watch(fn.add(params, 'stars', 0, 1.5, 0.05).name('stars'));
watch(fn.add(params, 'moonlight', 0, 2, 0.05).name('moonlight'));
watch(fn.addColor(params, 'moonColour').name('moonlight colour'));
watch(fn.add(params, 'ambient', 0, 2, 0.05).name('soft light from the sky'));
watch(fn.add(params, 'exposure', 0.3, 2.5, 0.05).name('overall brightness'));
resetBtn(fn);
const fl = folder('Lamp');
watch(fl.addColor(params, 'lampColour').name('warmth (colour)'));
watch(fl.add(params, 'lampIntensity', 0, 60, 0.5).name('brightness'));
watch(fl.add(params, 'lampReach', 4, 50, 0.5).name('reach'));
watch(fl.add(params, 'halo', 0, 6, 0.1).name('glow round the lantern'));
watch(fl.add(params, 'flicker', 0, 1, 0.05).name('flicker'));
watch(fl.add(params, 'shadows').name('trees cast shadows'));
resetBtn(fl);
const fs = folder('Snow falling');
watch(fs.add(params, 'falling').name('snowing'));
watch(fs.add(params, 'snowAmount', 0, 20000, 100).name('how much'), () => { makeSnow(); applyLook(); });
watch(fs.add(params, 'snowSpeed', 0.1, 4, 0.05).name('how fast'));
watch(fs.add(params, 'flakeSize', 0.2, 4, 0.05).name('flake size'));
watch(fs.add(params, 'snowDrift', 0, 2, 0.05).name('drift in the wind'));
resetBtn(fs, () => { makeSnow(); applyLook(); });
const fg = folder('Ground and paths');
watch(fg.addColor(params, 'snowColour').name('snow'), () => { regrow(); applyLook(); });
watch(fg.addColor(params, 'pathColour').name('paths (trodden snow)'), paintGround);
watch(fg.add(params, 'pathWidth', 0.8, 4, 0.1).name('path width'), () => { regrow(); applyLook(); });
watch(fg.add(params, 'bumps', 0, 0.6, 0.01).name('drifts and bumps'), regrow);
resetBtn(fg, regrow);
const ft = folder('Trees');
watch(ft.add(params, 'treeCount', 0, 600, 10).name('how many'), regrow);
watch(ft.add(params, 'treeSize', 0.5, 2, 0.05).name('size'), regrow);
watch(ft.add(params, 'treeSpacing', 1.4, 5, 0.1).name('spacing'), regrow);
watch(ft.add(params, 'treeSnow', 0, 1, 0.05).name('snow on branches'), regrow);
watch(ft.addColor(params, 'treeColour').name('needles'), regrow);
watch(ft.addColor(params, 'trunkColour').name('trunks'), regrow);
watch(ft.add(params, 'seed', 1, 99, 1).name('another forest (seed)'), regrow);
resetBtn(ft, regrow);
const ff = folder('Fog');
watch(ff.addColor(params, 'fogColour').name('colour'));
watch(ff.add(params, 'fogDensity', 0, 0.12, 0.002).name('how thick'));
resetBtn(ff);
const fc = folder('Camera');
watch(fc.add(params, 'distance', 0.8, 8, 0.05).name('distance behind'));
watch(fc.add(params, 'height', 0.4, 6, 0.05).name('height'));
watch(fc.add(params, 'shoulder', -1.5, 1.5, 0.05).name('over the shoulder'));
watch(fc.add(params, 'lookAhead', 0, 5, 0.05).name('look ahead'));
watch(fc.add(params, 'lookHeight', 0, 3, 0.05).name('look at height'));
watch(fc.add(params, 'fov', 30, 100, 1).name('field of view'));
watch(fc.add(params, 'follow', 1, 30, 0.5).name('follow speed'));
resetBtn(fc);
const fm = folder('Moving');
watch(fm.add(params, 'walkSpeed', 0.6, 6, 0.1).name('walking speed'));
watch(fm.add(params, 'turnSpeed', 30, 360, 5).name('turning (°/s)'));
watch(fm.add(params, 'mouseTurn').name('drag to turn'));
resetBtn(fm);
const fa = folder('Sound');
const soundWatch = (c) => watch(c, () => { sound.start(); sound.apply(); showSoundButton(); });
soundWatch(fa.add(params, 'sound').name('sound on'));
soundWatch(fa.add(params, 'volume', 0, 1, 0.01).name('overall volume'));
soundWatch(fa.add(params, 'footsteps', 0, 1.5, 0.01).name('footsteps in the snow'));
soundWatch(fa.add(params, 'footTone', 0.4, 2, 0.01).name('footsteps: tone (low–high)'));
soundWatch(fa.add(params, 'footCrisp', 0, 1, 0.01).name('footsteps: crunchiness'));
soundWatch(fa.add(params, 'wind', 0, 1.5, 0.01).name('wind in the trees'));
soundWatch(fa.add(params, 'lampHum', 0, 1.5, 0.01).name('the lamp\'s hum'));
soundWatch(fa.add(params, 'music', 0, 1.5, 0.01).name('music'));
soundWatch(fa.add(params, 'bells', 0, 1.5, 0.01).name('music: bell notes'));
soundWatch(fa.add(params, 'reverb', 0, 1, 0.01).name('music: hall'));
resetBtn(fa, () => { sound.apply(); showSoundButton(); });
const fx = folder('Snapshots');
const snaps = { A: null, B: null };
fx.add({ a: () => { snaps.A = { ...params }; note('Saved as A'); } }, 'a').name('save A');
fx.add({ a: () => { if (snaps.A) { setAll(snaps.A); note('A'); } else note('Nothing saved as A yet'); } }, 'a').name('load A');
fx.add({ b: () => { snaps.B = { ...params }; note('Saved as B'); } }, 'b').name('save B');
fx.add({ b: () => { if (snaps.B) { setAll(snaps.B); note('B'); } else note('Nothing saved as B yet'); } }, 'b').name('load B');
fx.add({ c: copySettings }, 'c').name('copy settings');
fx.add({ r: () => { setAll(DEFAULTS); forget(); } }, 'r').name('everything back to the start');
fx.add({ r: restart }, 'r').name('back to the lamp post (R)');
for (const f of [fs, fg, ft, ff, fc, fm, fa, fx]) f.close();
function setAll(o) { Object.assign(params, o); gui.controllersRecursive().forEach((c) => c.updateDisplay()); save(); makeSnow(); regrow(); applyLook(); sound.apply(); showSoundButton(); }
async function copySettings() {
  const text = JSON.stringify(params, null, 2);
  try { await navigator.clipboard.writeText(text); note('Settings copied'); }
  catch { const t = document.getElementById('copybox'); t.value = text; t.hidden = false; t.select(); note('Select all and copy'); }
}
let noteTimer = 0;
function note(text) { const n = document.getElementById('note'); n.textContent = text; n.classList.add('show'); clearTimeout(noteTimer); noteTimer = setTimeout(() => n.classList.remove('show'), 1800); }

// ---- start ----------------------------------------------------------------------------------------------------------
plant(); rebuildGround(); makeSnow(); applyLook(); resize();
requestAnimationFrame(frame);
// For the chat's browser check only (screenshots from set places).
window.__forest = { params, fig, restart, set: (x, z, yaw) => { Object.assign(fig, { x, z, yaw }); cam.ready = false; }, fps: () => fps, trees: () => world.trees.length, apply: (o) => setAll({ ...params, ...o }), sound };
