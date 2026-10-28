// main.js: Winter Forest, the tile (claude/winter-forest-plan.md, W8 to W33; steps 1 and 2 of W28).
//
// Ways-only (W16): until a host says "arrive", the page shows the postcard (W23) and nothing else runs. On arrival
// you appear at the entrance the host named (W19): the lamp post, just inside the wardrobe's doors, through the
// tree-door in the great tree's tunnel, or out from under the arch. Then you walk (the maze's controls,
// src/controls.js, used as they are: W27) and the camera follows over your shoulder (the maze's settings, M10).
//
// Four places: the forest; the library (built inside its cottage, drawn over the forest); the tunnel in the great
// tree (bigger on the inside, drawn over the forest so its mouth looks out on it); and the slide ride. Going in and
// out of the library and the tunnel is a short fade (W33). Walking into a portal: dormant, "This doesn't lead
// anywhere yet."; open, its going-through moment plays (W18) and the forest tells the host which way you left
// (way.leave); the host takes it from there. If nothing happens within a while, the way was blocked, and you're back
// at that portal (or the lamp post, for the slide: W19, W26).
import * as THREE from 'three';
import { createControls } from '../../src/controls.js';
import { LOOK, OTHER_LIGHT, soundSettings } from './look.js';
import { createScene } from './scene.js';
import { createPortals } from './portals.js';
import { createLibrary } from './library.js';
import { createTunnel } from './tunnel.js';
import { createRide, RIDE, HALL_BLUE } from './ride.js';
import { createSound } from './sound.js';
import { joinWays, WAYS } from './ways.js';
import { walk, touching, areaOf, ENTRANCES, FRAMES, local, world as toWorld, CLEARING, WARDROBE, LANE } from './layout.js';
import { LIB, libWalk, libHeightAt, libTouching, libArea, libCamera, LIB_IN, LIB_OUT, tunnelWalk, tunnelTouching, tunnelCamera, tunnelLocal, TUNNEL_IN, TUNNEL_OUT, TUNNEL_ARRIVE, TUNNEL_FLOOR, tunnelAt } from './inside.js';
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
const library = createLibrary();
const tunnel = createTunnel();
const ride = createRide({ forest: scene, groundAt });
const sound = createSound(params);
const SCENES = { forest: scene, library: library.scene, tunnel: tunnel.scene, ride: ride.scene };
{ const [fx, fz] = toWorld(FRAMES.slide, LIB.u1 - 0.5, 0); sound.setFirePos(fx, 0.6, fz); }

// Where travellers arrive (W19): three in the forest; the tree-door's in the tunnel, just through the door (W31).
const ARRIVALS = {
  lamppost: { ...ENTRANCES.lamppost, place: 'forest' },
  wardrobe: { ...ENTRANCES.wardrobe, place: 'forest' },
  'tree-door': { ...TUNNEL_ARRIVE, place: 'tunnel' },
  arch: { ...ENTRANCES.arch, place: 'forest' },
};

// ---- where you are ---------------------------------------------------------------------------------------------------------
const fig = { x: ENTRANCES.lamppost.x, z: ENTRANCES.lamppost.z, yaw: ENTRANCES.lamppost.yaw, y: 0, bob: 0, steps: 0, size: 1 };
let place = 'forest';              // forest | library | tunnel | ride
let phase = 'postcard';            // postcard | walking | going | leaving | arriving | passing
let entered = false;
let anim = null;                   // the moment playing: { kind, t, ... }
let leftBy = null, leftAt = 0;     // after way.leave: which exit, and when (to notice a blocked way)
let touched = null;                // the thing being touched now (so a note shows once per touch)
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
const DARK = ['#2a1a0c', '#0b1020', '#05070c', '#1c1209', HALL_BLUE];
function fade(colour, opacity, ms = 0, text = '') {
  fadeEl.style.transition = ms ? `opacity ${ms}ms ease` : 'none';
  if (colour) fadeEl.style.background = colour;
  fadeEl.style.opacity = String(opacity);
  fadeText.textContent = text;
  if (colour) fadeEl.classList.toggle('dark', DARK.includes(colour));
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
const touchScreen = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
hintEl.textContent = touchScreen ? 'Left thumb down in the lower left to walk · drag on the right to turn' : 'Hold ↑ or W to walk · ← → or A D to turn · or drag across the view';
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
  onStatus: () => {
    for (const ex of WAYS.exits) portals.setLook(ex.id, ways.state(ex.id));
    tunnel.setLook(ways.state('tree-door'));
    library.setLook(ways.state('slide'));
  },
  onArrive: (id) => arrive(id),
});
showPostcard({ inFrame: window.parent !== window });

// ---- places: which scene the figure is in, and what's hidden while you're inside ---------------------------------------
function setPlace(p) {
  place = p;
  const home = SCENES[p] || scene;
  if (figure.parent !== home) home.add(figure);
  portals.parts.library.group.visible = p !== 'library';
  portals.parts.trunk.group.visible = p !== 'tunnel';           // seen from inside, the trunk would hide its own mouth
  sound.setPlace(p);
  cam.ready = false;
}
function setSpot(spot) {
  Object.assign(fig, { x: spot.x, z: spot.z, yaw: spot.yaw });
  fig.y = floorAt(fig.x, fig.z);
}
function floorAt(x, z) {
  if (place === 'library') return libHeightAt(x, z);
  if (place === 'tunnel') return TUNNEL_FLOOR;
  return groundAt(x, z);
}

// ---- arriving (W19): at an entrance, with that portal's own arrival moment -----------------------------------------------
const ARRIVE_COLOUR = { lamppost: '#0b1020', wardrobe: '#ffffff', 'tree-door': '#c98a3e', arch: '#cfe2ee' };
function arrive(id) {
  if (!ARRIVALS[id]) return;
  if (!entered) { entered = true; hidePostcard(); stage.hidden = false; resize(); requestAnimationFrame(frame); sound.start(); }
  leftBy = null;
  for (const k in held) held[k] = false;
  placeAt(id, { quick: false });
}
function resetMoments() {
  portals.parts.wardrobe.setOpen(0); portals.parts.wardrobe.setBeyond(0); portals.parts.arch.faceMat.uniforms.boost.value = 0;
  tunnel.setDoor(0); tunnel.setBeyond(0); library.setLittleDoor(0);
  fig.size = 1; figure.scale.setScalar(1); figure.visible = true;
}
function placeAt(id, { quick }) {
  const e = ARRIVALS[id];
  resetMoments();
  setPlace(e.place);
  setSpot(e);
  cam.ready = false; cam.override = null;
  touched = null;
  if (quick || reduceMotion) {
    fade(ARRIVE_COLOUR[id], 1, 0); requestAnimationFrame(() => fade(null, 0, 450));
    phase = 'walking'; anim = null;
  } else {
    fade(ARRIVE_COLOUR[id], 1, 0);
    phase = 'arriving'; anim = { kind: `arrive-${id}`, t: 0 };
    if (id === 'wardrobe') portals.parts.wardrobe.setOpen(1);
    if (id === 'tree-door') { tunnel.setDoor(1); tunnel.setBeyond(1); }
    requestAnimationFrame(() => fade(null, 0, id === 'lamppost' ? 1400 : 900));
  }
  setWhere(areaHere());
}

// ---- in and out of the library and the tunnel (W33): a short fade ------------------------------------------------------------
function passTo(to, spot) {
  phase = 'passing';
  for (const k in held) held[k] = false;
  anim = { kind: 'pass', t: 0, to, spot, swapped: false };
  fade('#05070c', 1, reduceMotion ? 200 : 330);
  sound.door();
}

// ---- going through (W18) -------------------------------------------------------------------------------------------------
const DORMANT = "This doesn't lead anywhere yet.";
function touchThing(t) {
  if (t.kind === 'mouth') { passTo('tunnel', TUNNEL_IN); return; }
  if (t.kind === 'door' && t.id === 'slide') { passTo('library', LIB_IN); return; }             // the library's front door
  if (t.kind === 'door-out') { passTo('forest', LIB_OUT); return; }
  if (t.kind === 'mouth-out') { passTo('forest', TUNNEL_OUT); return; }
  const id = t.id;
  if (ways.state(id) !== 'open') { note(DORMANT); return; }
  goThrough(id);
}
const THROUGH_COLOUR = { wardrobe: '#ffffff', arch: '#cfe2ee', 'tree-door': '#c98a3e', slide: '#1c1209' };
function goThrough(id) {
  phase = 'going';
  for (const k in held) held[k] = false;
  sound.portal(id);
  if (reduceMotion) { anim = { kind: 'fade-out', t: 0, id }; fade(THROUGH_COLOUR[id], 1, 500); return; }
  anim = { kind: id === 'slide' ? 'shrink' : `through-${id}`, t: 0, id, from: { x: fig.x, z: fig.z } };
}
function leave(id) {
  phase = 'leaving'; leftBy = id; leftAt = performance.now(); anim = null;
  sound.ride(null);
  if (!ways.leave(id, fig.yaw)) { blocked(); return; }
  fadeText.textContent = 'On your way…';
}
// The host didn't take you on (or there's no host): back where you were (W26), or the lamp post after the slide.
function blocked() {
  const id = leftBy;
  leftBy = null;
  placeAt(ARRIVALS[id] ? id : 'lamppost', { quick: true });
  setTimeout(() => note('The way is blocked.'), 300);
}
const BLOCKED_AFTER = 8000;

// The moments, frame by frame.
const ease = (x) => { const k = Math.min(1, Math.max(0, x)); return k * k * (3 - 2 * k); };
function play(dt) {
  if (!anim) return;
  anim.t += dt;
  const a = anim, t = a.t;
  const W = portals.parts.wardrobe, A = portals.parts.arch;
  if (a.kind === 'pass') {
    if (!a.swapped && t > (reduceMotion ? 0.22 : 0.36)) {
      a.swapped = true; setPlace(a.to); setSpot(a.spot); touched = null; cam.ready = false; setWhere(areaHere());
      fade(null, 0, reduceMotion ? 200 : 360);
    }
    if (t > (reduceMotion ? 0.45 : 0.75)) { anim = null; phase = 'walking'; }
    return;
  }
  if (a.kind === 'fade-out') { if (t > 0.55) leave(a.id); return; }
  if (a.kind === 'through-wardrobe') {
    // The doors swing outward as you reach them, light floods in; you step into it; white.
    const f = FRAMES.wardrobe;
    W.setOpen(ease(t / 1.0));
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
  if (a.kind === 'through-tree-door') {
    // The door creaks open away from you; amber light beyond; you step into it; amber (W18, W31).
    tunnel.setDoor(ease(t / 1.1));
    tunnel.setBeyond(Math.min(1, t / 1.0));
    const from = tunnelLocal(a.from.x, a.from.z), k = Math.min(1, Math.max(0, (t - 0.6) / 1.0));
    const p = tunnelAt(from.s + k * 1.4), w = from.w * (1 - ease(k));
    fig.x = p.x + p.rx * w; fig.z = p.z + p.rz * w; fig.bob += dt * 8 * (k > 0 && k < 1 ? 1 : 0);
    if (t > 0.9 && !a.faded) { a.faded = true; fade('#c98a3e', 1, 700); }
    if (t > 1.8) leave('tree-door');
    return;
  }
  if (a.kind === 'shrink') {
    // On the bench, before the little door: you shrink to its size, the room towering up; it swings open; you slip
    // through (W14). Then the ride (W15).
    const k = ease(t / 1.0);
    fig.size = 1 - k * 0.82;
    figure.scale.setScalar(fig.size);
    if (t > 1.0) library.setLittleDoor(ease((t - 1.0) / 0.45));
    if (t > 1.35) {
      const [u, v] = local(FRAMES.slide, fig.x, fig.z), m = Math.min(1, (t - 1.35) / 0.5);
      const [x, z] = toWorld(FRAMES.slide, u + (LIB.littleDoor.u - u) * m, v + (LIB.v + 0.15 - v) * m);
      fig.x = x; fig.z = z; fig.bob += dt * 10;
    }
    if (t > 1.85 && !a.faded) { a.faded = true; fade('#1c1209', 1, 160); }
    if (t > 2.05) { anim = { kind: 'ride', t: 0, id: 'slide', part: null }; fig.size = 0.18; }
    return;
  }
  if (a.kind === 'ride') {
    const r = ride.rideAt(t);
    if (r.part !== a.part) {
      // Each part: into its scene; a quick bright moment as you burst out of the wood onto the ice.
      a.part = r.part;
      if (r.scene !== place) setPlace(r.scene);
      setWhere('down the slide');
      sound.ride(r.part);
      if (r.part === 'wood') fade(null, 0, 220);
      if (r.part === 'ice') { fade('#e8f0ff', 0.85, 0); requestAnimationFrame(() => fade(null, 0, 260)); }
    }
    fig.x = r.rider.x; fig.z = r.rider.z; fig.y = r.rider.y;
    const ahead = r.look.clone().sub(r.rider); fig.yaw = Math.atan2(-ahead.x, -ahead.z);
    cam.override = { pos: r.cam, look: r.look };
    if (r.part === 'blue' && r.k > 0.35 && !a.faded) { a.faded = true; fade(HALL_BLUE, 1, 700); }
    if (t > ride.total + 0.1) leave('slide');
    return;
  }
  if (a.kind === 'arrive-wardrobe') {
    // Stepped out through the doors; they swing shut behind you.
    if (t > 0.35) W.setOpen(1 - ease((t - 0.35) / 0.9));
    if (t > 1.3) { W.setOpen(0); anim = null; phase = 'walking'; }
    return;
  }
  if (a.kind === 'arrive-tree-door') {
    // Through the door from the light; it closes behind you (W31).
    if (t > 0.3) { tunnel.setDoor(1 - ease((t - 0.3) / 0.9)); tunnel.setBeyond(1 - ease((t - 0.3) / 0.8)); }
    if (t > 1.3) { tunnel.setDoor(0); tunnel.setBeyond(0); anim = null; phase = 'walking'; }
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
function areaHere() {
  if (place === 'library') return libArea(fig.x, fig.z);
  if (place === 'tunnel') return 'inside the great tree';
  if (place === 'ride' || (anim && anim.kind === 'ride')) return 'down the slide';
  return areaOf(fig.x, fig.z);
}
function surfaceHere() {
  if (place === 'tunnel') return 'hollow';
  if (place === 'library') return 'wood';
  const [u, v] = local(FRAMES.wardrobe, fig.x, fig.z);
  if (u > -LANE * 0.52 && u < 0.3 && Math.abs(v) < 1.3) return 'boards';
  const r = Math.hypot(fig.x, fig.z);
  return r > CLEARING - 0.3 || Math.abs(r - 3.2) < 0.6 ? 'path' : 'snow';
}
function update(dt) {
  if (phase !== 'walking') return;
  const turn = (held.right ? 1 : 0) - (held.left ? 1 : 0) + stick.x;
  fig.yaw -= Math.max(-1, Math.min(1, turn)) * L.turnSpeed * Math.PI / 180 * dt + (L.mouseTurn ? dragX * 0.006 : 0);
  dragX = 0;
  const fwd = Math.max(-1, Math.min(1, (held.forward ? 1 : 0) - (held.back ? 1 : 0) - stick.y));
  const f = [-Math.sin(fig.yaw), -Math.cos(fig.yaw)];
  if (fwd) {
    const want = [fig.x + f[0] * fwd * L.walkSpeed * dt, fig.z + f[1] * fwd * L.walkSpeed * dt];
    const move = [want[0] - fig.x, want[1] - fig.z];
    const before = fig.y;
    const [x, z] = place === 'library' ? libWalk([fig.x, fig.z], move) : place === 'tunnel' ? tunnelWalk([fig.x, fig.z], move) : walk([fig.x, fig.z], move, walkWorld);
    fig.x = x; fig.z = z;
    fig.bob += dt * 9 * Math.abs(fwd);
    const n = Math.floor(fig.bob / Math.PI);
    if (n !== fig.steps) {
      fig.steps = n;
      const onStairs = place === 'library' && libArea(fig.x, fig.z) === 'on the stairs';
      sound.step({ surface: surfaceHere(), creak: onStairs && Math.random() < 0.35 });
    }
    // Walking forwards into something (where you'd have been, had nothing stopped you).
    let t = null;
    if (fwd > 0) {
      if (place === 'library') t = libTouching(fig.x, fig.z, want[0], want[1]);
      else if (place === 'tunnel') t = tunnelTouching(fig.x, fig.z, want[0], want[1]);
      else t = touching(want[0], want[1]) || touching(fig.x, fig.z);
    }
    if (t && touched !== t.id + t.kind) { touched = t.id + t.kind; touchThing(t); }
    else if (!t) touched = null;
    if (place === 'library' && libHeightAt(fig.x, fig.z) - before > 0.3) sound.hop();
  }
  dragX = 0;
  setWhere(areaHere());
}
function placeFigure(dt) {
  // The floor under you, eased (a hop up onto the bench, a smooth climb up the stairs).
  if (!(anim && anim.kind === 'ride')) {
    const target = floorAt(fig.x, fig.z);
    fig.y += (target - fig.y) * Math.min(1, dt * 14);
    if (Math.abs(target - fig.y) < 0.002) fig.y = target;
  }
  const hop = place === 'library' && Math.abs(floorAt(fig.x, fig.z) - fig.y) > 0.05 ? Math.sin(Math.min(1, Math.abs(floorAt(fig.x, fig.z) - fig.y) / 0.45) * Math.PI) * 0.12 : 0;
  figure.position.set(fig.x, fig.y + hop + Math.abs(Math.sin(fig.bob)) * 0.04 * fig.size, fig.z);
  figure.rotation.y = fig.yaw;
}

// ---- the camera: behind and above the shoulder, easing after you; kept inside walls indoors --------------------------------
function updateCamera(dt) {
  let want, look;
  if (cam.override) { want = cam.override.pos; look = cam.override.look; }
  else {
    const s = fig.size;
    const f = new THREE.Vector3(-Math.sin(fig.yaw), 0, -Math.cos(fig.yaw));
    const right = new THREE.Vector3(-f.z, 0, f.x);
    const base = new THREE.Vector3(fig.x, fig.y, fig.z);
    want = base.clone().addScaledVector(f, -L.distance * s).addScaledVector(right, L.shoulder * s);
    want.y = base.y + L.height * s;
    if (place === 'forest') {
      want.y = Math.max(want.y, groundAt(want.x, want.z) + 0.4);
      // Near the wardrobe: never behind its doors (you'd see only the wardrobe's back), and below its top.
      let [u, v] = local(FRAMES.wardrobe, want.x, want.z);
      const [fu] = local(FRAMES.wardrobe, fig.x, fig.z);
      if (fu > -LANE && u > -0.35 && Math.abs(v) < 3) {
        u = -0.35; v = Math.max(-WARDROBE.inner, Math.min(WARDROBE.inner, v));
        const [x, z] = toWorld(FRAMES.wardrobe, u, v); want.x = x; want.z = z;
      }
      if (u > -WARDROBE.depth - 0.4 && u < 0.2 && Math.abs(v) < WARDROBE.half + 0.4) want.y = Math.min(want.y, WARDROBE.height - 0.3);
    } else if (place === 'library' && s > 0.9) {
      const c = libCamera(want, fig); want.set(c.x, c.y, c.z);
    } else if (place === 'tunnel') {
      const along = tunnelAt(tunnelLocal(fig.x, fig.z).s), into = f.x * along.dx + f.z * along.dz > 0;
      const c = tunnelCamera(want, fig, into); want.set(c.x, c.y, c.z);
    }
    look = base.clone().addScaledVector(f, L.lookAhead * s); look.y = base.y + L.lookHeight * s;
  }
  const k = cam.ready ? 1 - Math.exp(-(cam.override ? (anim && anim.kind === 'ride' ? 30 : 5) : L.follow) * dt) : 1;
  cam.pos.lerp(want, k); cam.look.lerp(look, k); cam.ready = true;
  camera.position.copy(cam.pos); camera.lookAt(cam.look);
  camera.near = fig.size < 0.5 ? 0.01 : 0.05; camera.updateProjectionMatrix();
  world3.snowMat.uniforms.centre.value.copy(cam.pos);
}

// ---- the frame -------------------------------------------------------------------------------------------------------------
let last = performance.now(), paused = false;
const archAt = new THREE.Vector3(...(() => { const [x, z] = toWorld(FRAMES.arch, 0, 0); return [x, 1.8, z]; })());
function render(now) {
  const t = now / 1000;
  world3.tick(t); library.tick(t); tunnel.tick(t);
  portals.shimmerTime.value = t;
  if (place === 'ride') { renderer.render(ride.scene, camera); return; }
  // The arch's view: only drawn outdoors, when it's open and could be seen (near, and in front of the camera).
  const A = portals.parts.arch;
  if (place === 'forest' && A.faceMat.uniforms.open.value > 0.5) {
    const toArch = archAt.clone().sub(camera.position);
    const fwd = new THREE.Vector3(); camera.getWorldDirection(fwd);
    const [u] = local(FRAMES.arch, camera.position.x, camera.position.z);
    if (toArch.length() < 34 && toArch.normalize().dot(fwd) > 0.2 && u < 0.2) A.draw(renderer, camera, world3);
  }
  renderer.render(scene, camera);
  // Indoors: the room (or the tunnel) over the forest, which shows through its windows (or its mouth).
  if (place === 'library' || place === 'tunnel') {
    renderer.autoClear = false;
    renderer.clearDepth();
    renderer.render(SCENES[place], camera);
    renderer.autoClear = true;
  }
}
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000) * (window.__forest.timeScale || 1); last = now;
  if (!paused) {
    update(dt); play(dt); placeFigure(dt); updateCamera(dt);
    if (phase === 'leaving' && now - leftAt > BLOCKED_AFTER) blocked();
    const r = Math.hypot(fig.x, fig.z);
    const [lu, lv] = local(FRAMES.wardrobe, fig.x, fig.z);
    const lane = place === 'forest' && lu > -LANE - 1 && lu < 0.5 && Math.abs(lv) < 3 ? Math.min(1, (lu + LANE + 1) / 4) : 0;
    const [au, av] = local(FRAMES.arch, fig.x, fig.z);
    const archNear = place === 'forest' && ways.state('arch') === 'open' ? Math.max(0, 1 - Math.hypot(au, av) / 9) : 0;
    sound.update({
      camPos: cam.pos, camFwd: new THREE.Vector3().subVectors(cam.look, cam.pos).normalize(),
      outside: place === 'forest' ? Math.min(1, Math.max(0, (r - CLEARING + 1) / 5)) : 0, lane, archNear: Math.max(archNear, portals.parts.arch.faceMat.uniforms.boost.value),
      ride: anim && anim.kind === 'ride' ? ride.rideAt(anim.t) : null,
    });
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
  state: () => ({ phase, place, entered, x: fig.x, z: fig.z, y: fig.y, yaw: fig.yaw, size: fig.size, area: lastArea, ways: ways.mode, exits: Object.fromEntries(WAYS.exits.map((e) => [e.id, ways.state(e.id)])), anim: anim && anim.kind, part: anim && anim.part, leftBy, reduceMotion, archOpen: portals.parts.arch.faceMat.uniforms.open.value, wardrobeGlow: portals.parts.wardrobe.lineMat.opacity, cam: [camera.position.x, camera.position.z, camera.position.y] }),
  jump(x, z, yaw, where) { if (where && where !== place) setPlace(where); Object.assign(fig, { x, z, yaw }); fig.y = floorAt(x, z); cam.ready = false; touched = null; setWhere(areaHere()); },
  held, stick,
  timeScale: 1,                 // the browser check slows the moments down to look at them
  // Card pictures: one still from a spot, at a size, and hand back a PNG.
  snapshot(w, h, at) {
    paused = true;
    hidePostcard(); stage.hidden = false;
    const was = renderer.getPixelRatio();
    renderer.setPixelRatio(1); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    world3.snowMat.uniforms.scale.value = h;
    figure.visible = !!at.figure;
    Object.assign(fig, { x: at.x, z: at.z, yaw: at.yaw });
    placeFigure(1);
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
