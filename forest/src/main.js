// main.js: Winter Forest, the tile (claude/winter-forest-plan.md, W8 to W28; this is step 1, the forest outdoors).
//
// Ways-only (W16): until a host says "arrive", the page shows the postcard (W23) and nothing else runs. On arrival
// you appear at the entrance the host named (W19): the lamp post, just inside the wardrobe's doors, at the great
// tree's mouth (step 1; through its door in step 2), or out from under the arch. Then you walk (the maze's controls,
// src/controls.js, used as they are: W27) and the camera follows over your shoulder (the maze's settings, M10).
// Walking into a portal: dormant, "This doesn't lead anywhere yet."; open, its going-through moment plays (W18) and
// the forest tells the host which way you left (way.leave); the host takes it from there. If nothing happens within
// a while, the way was blocked, and you're back where you were (W26).
import * as THREE from 'three';
import { createControls } from '../../src/controls.js';
import { LOOK, OTHER_LIGHT, soundSettings } from './look.js';
import { createScene } from './scene.js';
import { createPortals } from './portals.js';
import { createSound } from './sound.js';
import { joinWays, WAYS } from './ways.js';
import { walk, touching, areaOf, ENTRANCES, FRAMES, local, world as toWorld, CLEARING, WARDROBE, LANE } from './layout.js';
import { showPostcard, hidePostcard } from './postcard.js';

const L = LOOK;
const $ = (id) => document.getElementById(id);
const stage = $('stage');

// ---- settings kept between visits: sound on or off, reduce motion -------------------------------------------------------
const STORE = 'winter-forest';
const kept = (() => { try { return JSON.parse(localStorage.getItem(STORE) || '{}'); } catch { return {}; } })();
const keep = () => { try { localStorage.setItem(STORE, JSON.stringify({ sound: params.sound, reduce: reduceTouched ? reduceMotion : undefined })); } catch { /* private window */ } };
const params = { ...soundSettings(), sound: kept.sound !== false };
const reduceQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
let reduceTouched = typeof kept.reduce === 'boolean';
let reduceMotion = reduceTouched ? kept.reduce : !!reduceQuery.matches;

// ---- the world -----------------------------------------------------------------------------------------------------------
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: false });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
stage.appendChild(renderer.domElement);
const world3 = createScene(renderer, L);
const { scene, camera, groundAt, walkWorld, figure } = world3;
const portals = createPortals({ scene, renderer, sceneParts: world3, look: L, other: OTHER_LIGHT });
const sound = createSound(params);

// ---- where you are ---------------------------------------------------------------------------------------------------------
const fig = { x: ENTRANCES.lamppost.x, z: ENTRANCES.lamppost.z, yaw: ENTRANCES.lamppost.yaw, bob: 0, steps: 0 };
let phase = 'postcard';            // postcard | walking | going | leaving | arriving
let entered = false;
let anim = null;                   // the going-through or arriving moment playing: { kind, t, ... }
let leftBy = null, leftAt = 0;     // after way.leave: which exit, and when (to notice a blocked way)
let touched = null;                // the portal being touched now (so a dormant note shows once per touch)
let lastArea = '';
const cam = { pos: new THREE.Vector3(), look: new THREE.Vector3(), ready: false, override: null };
const held = { forward: false, back: false, left: false, right: false };
const stick = { x: 0, y: 0 };
let dragX = 0;

// ---- the page's bits: the label, sound, the menu, notes, the fade ----------------------------------------------------------
const whereEl = $('where'), noteEl = $('note'), fadeEl = $('fade'), fadeText = $('fadetext'), hintEl = $('hint');
const soundBtn = $('soundbtn'), gearBtn = $('gearbtn'), menu = $('menu'), reduceBox = $('reduce');
let noteTimer = 0;
function note(text, ms = 2600) { noteEl.textContent = text; noteEl.classList.add('show'); clearTimeout(noteTimer); noteTimer = setTimeout(() => noteEl.classList.remove('show'), ms); }
function setWhere(area) { if (area !== lastArea) { lastArea = area; whereEl.textContent = `Winter Forest · ${area}`; } }
function fade(colour, opacity, ms = 0, text = '') {
  fadeEl.style.transition = ms ? `opacity ${ms}ms ease` : 'none';
  if (colour) fadeEl.style.background = colour;
  fadeEl.style.opacity = String(opacity);
  fadeText.textContent = text;
  fadeEl.classList.toggle('dark', colour === '#2a1a0c' || colour === '#0b1020');
}
function showSound() { soundBtn.textContent = params.sound ? 'Sound on' : 'Sound off'; soundBtn.setAttribute('aria-pressed', String(params.sound)); }
soundBtn.addEventListener('click', () => { params.sound = !params.sound; keep(); sound.start(); sound.apply(); showSound(); soundBtn.blur(); });
showSound();
const wake = () => { if (entered) sound.start(); };
addEventListener('keydown', wake, { capture: true });
addEventListener('pointerdown', wake, { capture: true });
document.addEventListener('visibilitychange', () => { if (document.hidden) sound.pause(); else if (entered) sound.resume(); });
gearBtn.addEventListener('click', () => { const open = menu.hidden; menu.hidden = !open; gearBtn.setAttribute('aria-expanded', String(open)); if (open) refreshMenu(); });
$('menuclose').addEventListener('click', () => { menu.hidden = true; gearBtn.setAttribute('aria-expanded', 'false'); gearBtn.focus(); });
$('tolamp').addEventListener('click', () => { menu.hidden = true; gearBtn.setAttribute('aria-expanded', 'false'); if (phase === 'walking') placeAt('lamppost', { quick: true }); });
reduceBox.addEventListener('change', () => { reduceMotion = reduceBox.checked; reduceTouched = true; keep(); });
function refreshMenu() { reduceBox.checked = reduceMotion; }
if (reduceQuery.addEventListener) reduceQuery.addEventListener('change', (e) => { if (!reduceTouched) reduceMotion = e.matches; refreshMenu(); });
const touch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
hintEl.textContent = touch ? 'Left thumb down in the lower left to walk · drag on the right to turn' : 'Hold ↑ or W to walk · ← → or A D to turn · or drag across the view';
let hinted = false;
const moved = () => { if (!hinted && entered) { hinted = true; hintEl.classList.add('gone'); } };

// ---- the controls (the maze's src/controls.js, as it is) ------------------------------------------------------------------
createControls({
  canvas: renderer.domElement, held, stick,
  isFree: () => true,
  onCommand: () => {},
  onDrag: (dx) => { dragX += dx; },
  onMoved: moved,
  blocked: () => phase !== 'walking' || !menu.hidden,
  onKey: (e) => {
    if (e.code === 'Escape' && !menu.hidden) { menu.hidden = true; gearBtn.setAttribute('aria-expanded', 'false'); return true; }
    return false;
  },
}).setMovement('free');

// ---- ways: the host's messages (W25: the forest's ways.json) ----------------------------------------------------------
const ways = joinWays({
  onStatus: () => { for (const ex of WAYS.exits) portals.setLook(ex.id, ways.state(ex.id)); },
  onArrive: (id) => arrive(id),
});
showPostcard({ inFrame: window.parent !== window });

// ---- arriving (W19): at an entrance, with that portal's own arrival moment -----------------------------------------------
const ARRIVE_COLOUR = { lamppost: '#0b1020', wardrobe: '#ffffff', 'tree-door': '#2a1a0c', arch: '#cfe2ee' };
function arrive(id) {
  if (!ENTRANCES[id]) return;
  if (!entered) { entered = true; hidePostcard(); stage.hidden = false; resize(); requestAnimationFrame(frame); sound.start(); }
  leftBy = null;
  for (const k in held) held[k] = false;
  placeAt(id, { quick: false });
}
function placeAt(id, { quick }) {
  const e = ENTRANCES[id];
  Object.assign(fig, { x: e.x, z: e.z, yaw: e.yaw });
  cam.ready = false; cam.override = null;
  touched = touching(fig.x, fig.z) ? touching(fig.x, fig.z).id : null;
  portals.parts.wardrobe.setOpen(0); portals.parts.wardrobe.setBeyond(0); portals.parts.arch.faceMat.uniforms.boost.value = 0;
  figure.visible = true;
  if (quick || reduceMotion) {
    fade(ARRIVE_COLOUR[id], 1, 0); requestAnimationFrame(() => fade(null, 0, 450));
    phase = 'walking'; anim = null;
  } else {
    fade(ARRIVE_COLOUR[id], 1, 0);
    phase = 'arriving'; anim = { kind: `arrive-${id}`, t: 0 };
    if (id === 'wardrobe') portals.parts.wardrobe.setOpen(1);
    requestAnimationFrame(() => fade(null, 0, id === 'lamppost' ? 1400 : 900));
  }
  setWhere(areaOf(fig.x, fig.z));
}

// ---- going through (W18) -------------------------------------------------------------------------------------------------
const DORMANT = "This doesn't lead anywhere yet.";
function touchPortal(t) {
  if (t.kind === 'mouth') { note('The way into the great tree is still being built.'); return; }       // step 2
  if (t.kind === 'door') { note('The library is still being built.'); return; }                         // step 2
  const st = ways.state(t.id);
  if (st !== 'open') { note(DORMANT); return; }
  goThrough(t.id);
}
function goThrough(id) {
  phase = 'going';
  for (const k in held) held[k] = false;
  if (reduceMotion) { anim = { kind: 'fade-out', t: 0, id, colour: id === 'wardrobe' ? '#ffffff' : '#cfe2ee' }; fade(anim.colour, 1, 500); return; }
  anim = { kind: `through-${id}`, t: 0, id, from: { x: fig.x, z: fig.z } };
}
function leave(id) {
  phase = 'leaving'; leftBy = id; leftAt = performance.now(); anim = null;
  if (!ways.leave(id, fig.yaw)) { blocked(); return; }
  fadeText.textContent = 'On your way…';
}
// The host didn't take you on (or there's no host): back where you were (W26).
function blocked() {
  const id = leftBy;
  leftBy = null;
  const back = ENTRANCES[id] ? id : 'lamppost';
  placeAt(back, { quick: true });
  setTimeout(() => note('The way is blocked.'), 300);
}
const BLOCKED_AFTER = 8000;

// The moments, frame by frame.
function play(dt) {
  if (!anim) return;
  anim.t += dt;
  const a = anim, t = a.t;
  const W = portals.parts.wardrobe, A = portals.parts.arch;
  const ease = (x) => x * x * (3 - 2 * Math.min(1, Math.max(0, x)));
  if (a.kind === 'fade-out') { if (t > 0.55) leave(a.id); return; }
  if (a.kind === 'through-wardrobe') {
    // The doors swing outward as you reach them, light floods in; you step into it; white.
    const f = FRAMES.wardrobe;
    W.setOpen(ease(Math.min(1, t / 1.0)));
    W.setBeyond(Math.min(1, t / 0.9));
    const k = Math.min(1, Math.max(0, (t - 0.5) / 1.1));
    const [x, z] = toWorld(f, -0.5 + k * 1.2, local(f, a.from.x, a.from.z)[1] * (1 - k));
    fig.x = x; fig.z = z; fig.bob += dt * 9 * (k > 0 && k < 1 ? 1 : 0);
    const [cx, cz] = toWorld(f, -2.2 + ease(k) * 2.3, 0), [lx, lz] = toWorld(f, 2, 0);
    cam.override = { pos: new THREE.Vector3(cx, 1.45, cz), look: new THREE.Vector3(lx, 1.2, lz) };
    if (t > 0.9 && !a.faded) { a.faded = true; fade('#ffffff', 1, 700); }
    if (t > 1.7) leave('wardrobe');
    return;
  }
  if (a.kind === 'through-arch') {
    // You walk under it; the ripple washes across the whole view; the colours shift; it fades.
    const f = FRAMES.arch;
    const k = Math.min(1, t / 1.5);
    const [x, z] = toWorld(f, -0.6 + k * 0.7, local(f, a.from.x, a.from.z)[1] * (1 - k));
    fig.x = x; fig.z = z; fig.bob += dt * 7;
    if (k > 0.55) figure.visible = false;
    const [cx, cz] = toWorld(f, -3.0 + ease(k) * 2.95, 0), [lx, lz] = toWorld(f, 3, 0);
    cam.override = { pos: new THREE.Vector3(cx, 1.55 - k * 0.2, cz), look: new THREE.Vector3(lx, 1.45, lz) };
    A.faceMat.uniforms.boost.value = Math.min(1, t / 1.4);
    if (t > 1.2 && !a.faded) { a.faded = true; fade('#cfe2ee', 1, 700); }
    if (t > 2.0) leave('arch');
    return;
  }
  if (a.kind === 'arrive-wardrobe') {
    // Stepped out through the doors; they swing shut behind you.
    if (t > 0.35) W.setOpen(1 - ease(Math.min(1, (t - 0.35) / 0.9)));
    if (t > 1.3) { W.setOpen(0); anim = null; phase = 'walking'; }
    return;
  }
  if (a.kind === 'arrive-arch') {
    A.faceMat.uniforms.boost.value = Math.max(0, 1 - t / 1.2);
    if (t > 1.2) { A.faceMat.uniforms.boost.value = 0; anim = null; phase = 'walking'; }
    return;
  }
  if (a.kind.startsWith('arrive-')) { if (t > 0.9) { anim = null; phase = 'walking'; } }
}

// ---- walking ---------------------------------------------------------------------------------------------------------------
function update(dt) {
  if (phase !== 'walking') return;
  const turn = (held.right ? 1 : 0) - (held.left ? 1 : 0) + stick.x;
  fig.yaw -= Math.max(-1, Math.min(1, turn)) * L.turnSpeed * Math.PI / 180 * dt + (L.mouseTurn ? dragX * 0.006 : 0);
  dragX = 0;
  const fwd = Math.max(-1, Math.min(1, (held.forward ? 1 : 0) - (held.back ? 1 : 0) - stick.y));
  const f = [-Math.sin(fig.yaw), -Math.cos(fig.yaw)];
  if (fwd) {
    const want = [fig.x + f[0] * fwd * L.walkSpeed * dt, fig.z + f[1] * fwd * L.walkSpeed * dt];
    const [x, z] = walk([fig.x, fig.z], [want[0] - fig.x, want[1] - fig.z], walkWorld);
    fig.x = x; fig.z = z;
    fig.bob += dt * 9 * Math.abs(fwd);
    const n = Math.floor(fig.bob / Math.PI);
    if (n !== fig.steps) { fig.steps = n; const r = Math.hypot(fig.x, fig.z); sound.step({ onPath: r > CLEARING - 0.3 || Math.abs(r - 3.2) < 0.6 }); }
    // Walking forwards into a portal (where you'd have been, had nothing stopped you).
    const t = fwd > 0 ? (touching(want[0], want[1]) || touching(fig.x, fig.z)) : null;
    if (t && touched !== t.id) { touched = t.id; touchPortal(t); }
    else if (!t) touched = null;
  }
  dragX = 0;
  setWhere(areaOf(fig.x, fig.z));
}
function placeFigure() {
  figure.position.set(fig.x, groundAt(fig.x, fig.z) + Math.abs(Math.sin(fig.bob)) * 0.04, fig.z);
  figure.rotation.y = fig.yaw;
}

// ---- the camera: behind and above the shoulder, easing after you; inside the wardrobe it keeps under the top --------------
function updateCamera(dt) {
  let want, look;
  if (cam.override) { want = cam.override.pos; look = cam.override.look; }
  else {
    const f = new THREE.Vector3(-Math.sin(fig.yaw), 0, -Math.cos(fig.yaw));
    const right = new THREE.Vector3(-f.z, 0, f.x);
    const base = new THREE.Vector3(fig.x, groundAt(fig.x, fig.z), fig.z);
    want = base.clone().addScaledVector(f, -L.distance).addScaledVector(right, L.shoulder);
    want.y = Math.max(base.y + L.height, groundAt(want.x, want.z) + 0.4);
    // Near the wardrobe: never behind its doors (you'd see only the wardrobe's back), and below its top.
    let [u, v] = local(FRAMES.wardrobe, want.x, want.z);
    const [fu] = local(FRAMES.wardrobe, fig.x, fig.z);
    if (fu > -LANE && u > -0.35 && Math.abs(v) < 3) {
      u = -0.35; v = Math.max(-WARDROBE.inner, Math.min(WARDROBE.inner, v));
      const [x, z] = toWorld(FRAMES.wardrobe, u, v); want.x = x; want.z = z;
    }
    if (u > -WARDROBE.depth - 0.4 && u < 0.2 && Math.abs(v) < WARDROBE.half + 0.4) want.y = Math.min(want.y, WARDROBE.height - 0.3);
    look = base.clone().addScaledVector(f, L.lookAhead); look.y = base.y + L.lookHeight;
  }
  const k = cam.ready ? 1 - Math.exp(-(cam.override ? 5 : L.follow) * dt) : 1;
  cam.pos.lerp(want, k); cam.look.lerp(look, k); cam.ready = true;
  camera.position.copy(cam.pos); camera.lookAt(cam.look);
  world3.snowMat.uniforms.centre.value.copy(cam.pos);
}

// ---- the frame -------------------------------------------------------------------------------------------------------------
let last = performance.now(), paused = false;
const archAt = new THREE.Vector3(...(() => { const [x, z] = toWorld(FRAMES.arch, 0, 0); return [x, 1.8, z]; })());
function render(now) {
  const t = now / 1000;
  world3.tick(t);
  portals.shimmerTime.value = t;
  // The arch's view: only drawn when it's open and could be seen (near, and in front of the camera).
  const A = portals.parts.arch;
  if (A.faceMat.uniforms.open.value > 0.5) {
    const toArch = archAt.clone().sub(camera.position);
    const fwd = new THREE.Vector3(); camera.getWorldDirection(fwd);
    const [u] = local(FRAMES.arch, camera.position.x, camera.position.z);
    if (toArch.length() < 34 && toArch.normalize().dot(fwd) > 0.2 && u < 0.2) A.draw(renderer, camera, world3);
  }
  renderer.render(scene, camera);
}
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  if (!paused) {
    update(dt); play(dt); placeFigure(); updateCamera(dt);
    if (phase === 'leaving' && now - leftAt > BLOCKED_AFTER) blocked();
    const r = Math.hypot(fig.x, fig.z);
    sound.update({ camPos: cam.pos, camFwd: new THREE.Vector3().subVectors(cam.look, cam.pos).normalize(), outside: Math.min(1, Math.max(0, (r - CLEARING + 1) / 5)) });
    render(now);
  }
  requestAnimationFrame(frame);
}
function resize() {
  const w = stage.clientWidth || innerWidth, h = stage.clientHeight || innerHeight;
  renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix();
  world3.snowMat.uniforms.scale.value = h * renderer.getPixelRatio();
}
addEventListener('resize', resize);
resize();

// For the browser check and the card pictures (forest/test/browser/check.mjs, forest/dev/card-art.html) only; nothing
// on the page calls these.
window.__forest = {
  state: () => ({ phase, entered, x: fig.x, z: fig.z, yaw: fig.yaw, area: lastArea, ways: ways.mode, exits: Object.fromEntries(WAYS.exits.map((e) => [e.id, ways.state(e.id)])), anim: anim && anim.kind, leftBy, reduceMotion, archOpen: portals.parts.arch.faceMat.uniforms.open.value, wardrobeGlow: portals.parts.wardrobe.lineMat.opacity, cam: [camera.position.x, camera.position.z] }),
  jump(x, z, yaw) { Object.assign(fig, { x, z, yaw }); cam.ready = false; setWhere(areaOf(x, z)); },
  held, stick,
  // Card pictures: one still from a spot, at a size, and hand back a PNG.
  snapshot(w, h, at) {
    paused = true;
    hidePostcard(); stage.hidden = false;
    const was = renderer.getPixelRatio();
    renderer.setPixelRatio(1); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    world3.snowMat.uniforms.scale.value = h;
    figure.visible = !!at.figure;
    Object.assign(fig, { x: at.x, z: at.z, yaw: at.yaw });
    placeFigure();
    cam.override = at.camera ? { pos: new THREE.Vector3(...at.camera), look: new THREE.Vector3(...at.look) } : null;
    cam.ready = false;
    updateCamera(1);
    render(performance.now());
    const url = renderer.domElement.toDataURL('image/png');
    figure.visible = true; cam.override = null;
    renderer.setPixelRatio(was); resize(); paused = false;
    if (!entered) { stage.hidden = true; showPostcard({ inFrame: window.parent !== window }); }
    return url;
  },
};
