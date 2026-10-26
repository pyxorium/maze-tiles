// main.js: the over-the-shoulder look test (three rooms of the Escher maze, a camera behind the figure; step and
// turn, or free walking). Notes: claude/escher-maze-shoulder-test.md.
//
// Seamless mode: each open way on shows the room it leads to through it (drawn through the opening with the
// stencil buffer, clipped at the gate), placed so it lines up with where you'll arrive. The camera's room is the
// one drawn in full; it changes when the camera itself passes through an opening, so nothing ever cuts. Fade
// mode: openings are dark, and going through fades out and in.

import * as THREE from 'three';
import GUI from 'lil-gui';
import { testMap, TEST_ROOMS } from './test-map.js';
import { buildRoom, buildFigure, srgb } from './world.js';
import { DIRS, LEFT_OF, RIGHT_OF, gatesOf, heightsOf, step, placement, apply, invert, IDENTITY, nameOf, rot, freeMove, facingOfYaw, cellOf } from './walk.js';
import { splitTo } from '../../tile/graph.js';

const MAP = testMap();
const DEFAULTS = {
  distance: 3.2, height: 2.1, shoulder: 0.35, lookAhead: 1.6, lookHeight: 0.75, fov: 62, follow: 7,
  movement: 'step', stepTime: 0.28, turnTime: 0.24, repeat: true,
  walkSpeed: 2.6, turnSpeed: 150, mouseTurn: true, doorAssist: 1,
  mode: 'seamless', fadeTime: 0.32, duck: true, showMarkers: true, overhead: 0.55,
};
const STORE = 'maze-shoulder-test';
const params = { ...DEFAULTS, ...load() };
function load() { try { return JSON.parse(localStorage.getItem(STORE) || '{}'); } catch { return {}; } }
function save() { try { localStorage.setItem(STORE, JSON.stringify(params)); } catch { /* private window */ } }

// ---- three.js setup -----------------------------------------------------------------------------------------
const renderer = new THREE.WebGLRenderer({ antialias: true, stencil: true });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
renderer.autoClear = false;
renderer.localClippingEnabled = true;
document.getElementById('stage').appendChild(renderer.domElement);
const camera = new THREE.PerspectiveCamera(params.fov, 1, 0.04, 400);
const scene = new THREE.Scene();

const rooms = new Map();
function room(id) {
  const key = `${id}:${params.mode}`;
  if (!rooms.has(key)) {
    const open = new Set();
    if (params.mode === 'seamless') for (const w of MAP.rooms[id].ways) if (w.to && TEST_ROOMS.includes(splitTo(w.to)[0])) open.add(w.id);
    rooms.set(key, buildRoom(MAP, id, { open }));
  }
  return rooms.get(key);
}
const gatesCache = new Map(TEST_ROOMS.map((id) => [id, gatesOf(MAP.rooms[id])]));
const heightsCache = new Map(TEST_ROOMS.map((id) => [id, heightsOf(MAP.rooms[id])]));
const gateOf = (roomId, wayId) => (gatesCache.get(roomId) || gatesOf(MAP.rooms[roomId])).find((g) => g.way.id === wayId);

const fig3 = buildFigure();
const markerMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.75, depthWrite: false });
const maskMat = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false, side: THREE.DoubleSide, stencilWrite: true, stencilFunc: THREE.AlwaysStencilFunc, stencilZPass: THREE.ReplaceStencilOp });
const bgMat = new THREE.MeshBasicMaterial({ depthTest: false, depthWrite: false, side: THREE.DoubleSide, stencilWrite: true, stencilFunc: THREE.EqualStencilFunc, stencilZPass: THREE.KeepStencilOp });
const bgPlane = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), bgMat);
const flags = { noBg: false, noClip: false, noStencil: false, only: null };

// ---- state ----------------------------------------------------------------------------------------------------
const yawOf = (facing) => ({ ne: 0, se: Math.PI / 2, sw: Math.PI, nw: -Math.PI / 2 })[facing];
const startState = () => ({ room: 'courtyard', cell: [2, 4], h: 0, facing: 'ne' });
let view = 'courtyard';                     // the camera's room: the world is drawn in its coordinates
const fig = { ...startState(), place: IDENTITY, local: null, yaw: 0, alpha: 1 };
fig.local = [fig.cell[0] + 0.5, fig.cell[1] + 0.5, 0];
fig.yaw = yawOf(fig.facing);
let busy = false, queued = null;
const held = { forward: false, back: false, left: false, right: false };
let dragX = 0, fading = false;
const free = () => params.movement === 'free';
const cam = { pos: new THREE.Vector3(), look: new THREE.Vector3(), prev: new THREE.Vector3(), shoulder: params.shoulder, height: params.height, ready: false };
let fadeAlpha = 0;

// Map coordinates (x, y floor; z up) ↔ three (X, Y up, Z).
const toV3 = ([x, y, z], v = new THREE.Vector3()) => v.set(x, z, y);
const fromV3 = (v) => [v.x, v.z, v.y];
const figWorld = () => apply(fig.place, fig.local);
const figYawWorld = () => fig.yaw + fig.place.k * Math.PI / 2;
function compose(a, b) {                     // a after b
  const [tx, ty] = rot([b.tx, b.ty], a.k);
  return { k: (a.k + b.k) % 4, tx: tx + a.tx, ty: ty + a.ty, dy: a.dy + b.dy };
}

// ---- moving ---------------------------------------------------------------------------------------------------
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
function tween(ms, f) {
  return new Promise((done) => {
    const t0 = performance.now();
    const tick = (now) => { const t = Math.min(1, (now - t0) / ms); f(ease(t), t); if (t < 1) requestAnimationFrame(tick); else done(); };
    requestAnimationFrame(tick);
  });
}

async function walkTo(local, ms) {
  const a = [...fig.local];
  await tween(ms, (e) => { fig.local = a.map((v, i) => v + (local[i] - v) * e); });
  fig.local = [...local];
}
async function bump(sign) {
  const d = DIRS[fig.facing], a = [...fig.local];
  await tween(180, (_, t) => { const s = Math.sin(Math.PI * t) * 0.12 * sign; fig.local = [a[0] + d[0] * s, a[1] + d[1] * s, a[2]]; });
  fig.local = a;
}

function note(text) {
  const n = document.getElementById('note');
  n.textContent = text; n.classList.add('show');
  clearTimeout(note.t); note.t = setTimeout(() => n.classList.remove('show'), 2200);
}

async function command(c) {
  if (busy) { if (params.repeat) queued = c; return; }
  busy = true;
  try {
    if (c === 'left' || c === 'right') {
      const to = c === 'left' ? LEFT_OF[fig.facing] : RIGHT_OF[fig.facing];
      const a = fig.yaw, b = a + (c === 'left' ? -Math.PI / 2 : Math.PI / 2);
      await tween(params.turnTime * 1000, (e) => { fig.yaw = a + (b - a) * e; });
      fig.yaw = yawOf(to) + Math.round((b - yawOf(to)) / (2 * Math.PI)) * 2 * Math.PI;
      fig.facing = to;
    } else {
      const sign = c === 'back' ? -1 : 1;
      const R = MAP.rooms[fig.room];
      const r = step(R, fig.cell, fig.facing, sign, heightsCache.get(fig.room), gatesCache.get(fig.room));
      if (r.kind === 'blocked') await bump(sign);
      else if (r.kind === 'move') {
        await walkTo([r.to[0] + 0.5, r.to[1] + 0.5, r.h], params.stepTime * 1000);
        fig.cell = r.to; fig.h = r.h;
      } else await throughGate(r.gate);
    }
  } finally {
    busy = false;
    if (queued) { const q = queued; queued = null; command(q); }
  }
}

async function throughGate(gA) {
  const w = gA.way;
  if (!w.to) { note(w.closed ? (w.note || 'This door is closed.') : 'Nothing that way.'); await bump(1); return; }
  const [toRoom, toWay] = splitTo(w.to);
  if (!TEST_ROOMS.includes(toRoom)) { note(`That way leads to the ${MAP.rooms[toRoom].name}, which isn't part of this test.`); await bump(1); return; }
  const gB = gateOf(toRoom, toWay);
  const P = placement(gA, gB);                                  // B in A's coordinates
  await walkTo([gA.O[0] + 0.5, gA.O[1] + 0.5, gA.hO], params.stepTime * 1000);
  // Now standing on B's first cell: carry on in B's own coordinates.
  const facingB = nameOf(rot(DIRS[fig.facing], -P.k));
  const yawB = fig.yaw - P.k * Math.PI / 2;
  if (params.mode === 'fade') {
    await tween(params.fadeTime * 500, (e) => { fadeAlpha = e; });
    Object.assign(fig, { room: toRoom, cell: gB.L, h: gB.hL, facing: facingB, yaw: yawB, place: IDENTITY, local: [gB.L[0] + 0.5, gB.L[1] + 0.5, gB.hL] });
    view = toRoom; cam.ready = false;
    await tween(params.fadeTime * 500, (e) => { fadeAlpha = 1 - e; });
    fadeAlpha = 0;
  } else {
    Object.assign(fig, { room: toRoom, cell: gB.L, h: gB.hL, facing: facingB, yaw: yawB, place: compose(fig.place, P), local: [gB.L[0] + 0.5, gB.L[1] + 0.5, gB.hL] });
  }
  updateHud();
}

// ---- free walking -------------------------------------------------------------------------------------------
const passable = (g) => !!g.way.to && TEST_ROOMS.includes(splitTo(g.way.to)[0]);
let bumpNoteAt = 0;
function updateFree(dt) {
  if (fading || busy) { dragX = 0; return; }
  const turn = (held.right ? 1 : 0) - (held.left ? 1 : 0);
  fig.yaw += turn * params.turnSpeed * Math.PI / 180 * dt + (params.mouseTurn ? dragX * 0.006 : 0);
  dragX = 0;
  const fwd = (held.forward ? 1 : 0) - (held.back ? 1 : 0);
  const f = [Math.sin(fig.yaw), -Math.cos(fig.yaw)];
  const move = [f[0] * fwd * params.walkSpeed * dt, f[1] * fwd * params.walkSpeed * dt];
  const gates = gatesCache.get(fig.room);
  // Doorways are narrow: walking at one, ease toward its middle.
  if (fwd && params.doorAssist > 0) {
    for (const g of gates) {
      if (g.way.kind !== 'door' || !passable(g)) continue;
      const toward = (f[0] * g.dir[0] + f[1] * g.dir[1]) * fwd;
      if (toward < 0.5) continue;
      const lat = g.dir[0] === 0 ? 0 : 1;                       // the axis across the doorway
      const c = g.L[lat] + 0.5, ahead = g.L[1 - lat] + 0.5 + g.dir[1 - lat] * 0.5;
      const dist = (ahead - fig.local[1 - lat]) * g.dir[1 - lat];
      const off = c - fig.local[lat];
      if (dist > 0 && dist < 1.6 && Math.abs(off) < 1.25) {
        // Close to the doorway the sideways part of the walk is replaced by a pull to the middle (stronger the closer
        // you are), so walking at it at an angle still takes you through.
        const pull = Math.min(1, params.doorAssist * (1.6 - dist) * 5 * dt);
        move[lat] = move[lat] * (1 - Math.min(1, params.doorAssist * (1.6 - dist))) + off * pull;
        move[1 - lat] = g.dir[1 - lat] * Math.max(Math.abs(move[1 - lat]), toward * params.walkSpeed * dt * 0.6);
      }
    }
  }
  if (!move[0] && !move[1]) { settleHeight(dt); return; }
  const r = freeMove(fig.local, move, { heights: heightsCache.get(fig.room), gates, passable });
  fig.local = [r.pos[0], r.pos[1], fig.local[2]];
  fig.cell = cellOf(r.pos[0], r.pos[1]);
  fig.support = r.support;
  fig.facing = facingOfYaw(fig.yaw);
  if (r.bumped && performance.now() - bumpNoteAt > 2500) {
    bumpNoteAt = performance.now();
    const w = r.bumped.way;
    note(w.closed ? (w.note || 'This door is closed.') : w.to ? `That way leads to the ${MAP.rooms[splitTo(w.to)[0]].name}, which isn't part of this test.` : 'Nothing that way.');
  }
  if (r.crossed) crossFree(r.crossed);
  else settleHeight(dt);
}
// The figure's feet rise (quickly) or settle to what it stands on: the highest cell under its footprint.
function settleHeight(dt) {
  const h = fig.support ?? heightsCache.get(fig.room).get(`${fig.cell[0]},${fig.cell[1]}`);
  if (h === undefined) return;
  fig.h = h;
  fig.local[2] += (h - fig.local[2]) * Math.min(1, dt * 14);   // up a step, quickly but not in a jump
}
async function crossFree(gA) {
  const [toRoom, toWay] = splitTo(gA.way.to);
  const gB = gateOf(toRoom, toWay);
  const P = placement(gA, gB);
  const local = apply(invert(P), fig.local);
  const next = { room: toRoom, local, cell: cellOf(local[0], local[1]), h: gB.hL, support: undefined, yaw: fig.yaw - P.k * Math.PI / 2 };
  if (params.mode === 'fade') {
    fading = true;
    await tween(params.fadeTime * 500, (e) => { fadeAlpha = e; });
    Object.assign(fig, next, { place: IDENTITY });
    view = toRoom; cam.ready = false;
    await tween(params.fadeTime * 500, (e) => { fadeAlpha = 1 - e; });
    fadeAlpha = 0; fading = false;
  } else {
    Object.assign(fig, next, { place: compose(fig.place, P) });
  }
  fig.facing = facingOfYaw(fig.yaw);
  updateHud();
}

// When the camera passes through an open gate of the room it's in, that room's neighbour becomes the view, and
// everything is re-expressed in the neighbour's coordinates (nothing moves on screen).
function switchView(gate) {
  const [toRoom, toWay] = splitTo(gate.way.to);
  const P = placement(gate, gateOf(toRoom, toWay));
  const Q = invert(P);
  for (const v of [cam.pos, cam.look, cam.prev]) toV3(apply(Q, fromV3(v)), v);
  fig.place = compose(Q, fig.place);
  view = toRoom;
  updateHud();
}

// ---- the camera -------------------------------------------------------------------------------------------------
const tmp = new THREE.Vector3();
function corridorGate() {
  const v = room(view);
  if (fig.room !== view) {
    // The figure has gone on through one of this room's openings.
    for (const g of gatesCache.get(view)) if (v.masks.has(g.way.id) && splitTo(g.way.to)[0] === fig.room) return { g, through: true };
    return null;
  }
  for (const g of gatesCache.get(view)) if (v.masks.has(g.way.id) && g.L[0] === fig.cell[0] && g.L[1] === fig.cell[1]) return { g, through: false };
  return null;
}

function updateCamera(dt) {
  const v = room(view);
  const [fx, fy, fz] = figWorld();
  const yaw = figYawWorld();
  const f = [Math.sin(yaw), -Math.cos(yaw)];
  const right = [-f[1], f[0]];
  const cg = corridorGate();
  const k = 1 - Math.exp(-params.follow * dt);
  cam.shoulder += ((cg ? 0 : params.shoulder) - cam.shoulder) * k;
  const top = cg && v.masks.get(cg.g.way.id).top;
  const wantH = cg && params.duck && Number.isFinite(top) ? Math.min(params.height, top - 0.25 - (fz - cg.g.hL)) : params.height;
  cam.height += (wantH - cam.height) * k;
  const want = [fx - f[0] * params.distance + right[0] * cam.shoulder, fy - f[1] * params.distance + right[1] * cam.shoulder, fz + cam.height];
  if (cg && cg.through) {
    // The figure has gone through: the camera follows it through the opening (and then eases back out behind
    // it in the room beyond), rather than staying behind the wall.
    const g = cg.g, px = g.L[0] + 0.5 + g.dir[0] * 0.5, py = g.L[1] + 0.5 + g.dir[1] * 0.5;
    const along = (want[0] - px) * g.dir[0] + (want[1] - py) * g.dir[1];
    if (along < 0.35) { want[0] += g.dir[0] * (0.35 - along); want[1] += g.dir[1] * (0.35 - along); }
    // Line up with the opening to pass through it (the figure may have gone through at an angle).
    const lat = g.dir[0] === 0 ? 0 : 1;
    want[lat] = Math.min(g.way.at + 0.8, Math.max(g.way.at + 0.2, want[lat]));
  }
  const look = [fx + f[0] * params.lookAhead, fy + f[1] * params.lookAhead, fz + params.lookHeight];

  // Stay inside the back walls, except through the opening the figure is using.
  const inColumn = (g, p) => { const a = g.way.at; const u = g.side === 'ne' || g.side === 'sw' ? p[0] : p[1]; return u > a + 0.08 && u < a + 0.92; };
  const clampSide = (side, p) => {
    if (cg && cg.g.side === side) return;
    if (side === 'ne') p[1] = Math.max(p[1], 0.15); else p[0] = Math.max(p[0], 0.15);
  };
  const clamp = (p) => { clampSide('ne', p); clampSide('nw', p); };
  // The camera never passes out through a see-through opening (or hangs just beyond one at an open edge), except
  // the one the figure has gone through: beyond it, this room's neighbour would be drawn in front of everything.
  // (Stepping back through an opening, the figure goes first.)
  const keepIn = (p) => {
    for (const g of gatesCache.get(view)) {
      if (!v.masks.has(g.way.id) || (cg && cg.through && cg.g === g)) continue;
      const along = (p[0] - (g.L[0] + 0.5 + g.dir[0] * 0.5)) * g.dir[0] + (p[1] - (g.L[1] + 0.5 + g.dir[1] * 0.5)) * g.dir[1];
      const u = g.dir[0] === 0 ? p[0] : p[1];
      if (along > -0.03 && u > g.way.at - 1.5 && u < g.way.at + 2.5) { p[0] -= g.dir[0] * (along + 0.03); p[1] -= g.dir[1] * (along + 0.03); }
    }
  };
  if (!cam.ready) {
    clamp(want); keepIn(want);
    toV3(want, cam.pos); toV3(look, cam.look); cam.prev.copy(cam.pos); cam.ready = true;
  }
  const next = fromV3(cam.pos).map((c, i) => c + (want[i] - c) * k);
  clamp(next);
  keepIn(next);
  // Held closer than it wants to be (at an opening, or a wall behind): rise to look over the figure's head.
  const hd = Math.hypot(next[0] - fx, next[1] - fy);
  if (hd < params.distance) next[2] = Math.max(next[2], fz + cam.height + (params.distance - hd) * params.overhead);
  cam.prev.copy(cam.pos);
  toV3(next, cam.pos);
  cam.look.lerp(toV3(look, tmp), k);

  // Passed through an opening? Then the room beyond becomes the view.
  if (cg && cg.through) {
    const g = cg.g, m = v.masks.get(g.way.id);
    const sPrev = tmp.copy(cam.prev).sub(m.point).dot(m.normal), sNow = tmp.copy(cam.pos).sub(m.point).dot(m.normal);
    const u = g.side === 'ne' || g.side === 'sw' ? cam.pos.x : cam.pos.z;
    if (sPrev <= 0 && sNow > 0 && u > g.way.at - 0.3 && u < g.way.at + 1.3) switchView(g);
  }
  camera.position.copy(cam.pos);
  camera.lookAt(cam.look);
  const d = cam.pos.distanceTo(toV3(figWorld(), tmp).add(new THREE.Vector3(0, 0.7, 0)));
  fig.alpha = Math.max(0, Math.min(1, (d - 0.35) / 0.55));
}

// ---- drawing ----------------------------------------------------------------------------------------------------
function setPass(materials, { stencilRef = null, clip = null } = {}) {
  for (const m of materials) {
    m.stencilWrite = stencilRef !== null;
    m.stencilRef = stencilRef ?? 0;
    m.stencilFunc = THREE.EqualStencilFunc;
    m.stencilZPass = THREE.KeepStencilOp;
    m.clippingPlanes = clip;
    m.needsUpdate = true;
  }
}
function only(...objs) { scene.clear(); for (const o of objs) scene.add(o); }

const markerGroup = new THREE.Group();
function placeMarkers(v) {
  markerGroup.clear();
  if (!params.showMarkers) return;
  for (const g of gatesCache.get(view)) {
    const geo = new THREE.PlaneGeometry(0.56, 0.56).rotateX(-Math.PI / 2);
    geo.translate(g.L[0] + 0.5, g.hL + 0.012, g.L[1] + 0.5);
    const inTest = g.way.to && TEST_ROOMS.includes(splitTo(g.way.to)[0]);
    const mat = markerMat.clone();
    mat.color = srgb(inTest ? v.area.accent : [150, 150, 150]);
    markerGroup.add(new THREE.Mesh(geo, mat));
  }
}

function render(dt) {
  if (dt > 0 && free()) updateFree(dt);
  if (dt > 0) updateCamera(dt);
  const v = room(view);
  renderer.setClearColor(srgb(v.area.bg), 1);
  renderer.clear(true, true, true);
  placeMarkers(v);
  setPass(v.materials);
  only(v.group, markerGroup);
  renderer.render(scene, camera);

  // Each opening: mark it in the stencil, fill it with the next room's sky, then draw the next room inside it.
  let ref = 1;
  if (params.mode === 'seamless') {
    for (const [wayId, m] of v.masks) {
      if (flags.only && flags.only !== wayId) continue;
      const g = gatesCache.get(view).find((x) => x.way.id === wayId);
      const [toRoom, toWay] = splitTo(g.way.to);
      const n = room(toRoom);
      const P = placement(g, gateOf(toRoom, toWay));
      maskMat.stencilRef = ref;
      only(new THREE.Mesh(m.geo, maskMat));
      renderer.render(scene, camera);
      bgMat.color = srgb(n.area.bg); bgMat.stencilRef = ref;
      bgPlane.position.copy(m.point).addScaledVector(m.normal, 120);
      bgPlane.lookAt(m.point);
      only(bgPlane);
      if (!flags.noBg) renderer.render(scene, camera);
      n.group.rotation.y = -P.k * Math.PI / 2;
      n.group.position.set(P.tx, P.dy, P.ty);
      const plane = new THREE.Plane(m.normal.clone(), -m.normal.dot(m.point) + 0.02);   // a hair this side of the gate, so faces on it don't flicker
      setPass(n.materials, { stencilRef: flags.noStencil ? null : ref, clip: flags.noClip ? null : [plane] });
      only(n.group);
      renderer.render(scene, camera);
      setPass(n.materials);
      n.group.position.set(0, 0, 0); n.group.rotation.y = 0;
      ref++;
    }
  }
  // The figure last, against everything already drawn.
  const [x, y, z] = figWorld();
  fig3.group.position.set(x, z, y);
  fig3.group.rotation.y = -figYawWorld();
  for (const m of fig3.materials) { m.transparent = true; m.opacity = m === fig3.materials[3] ? 0.18 * fig.alpha : fig.alpha; }
  fig3.capMat.color = srgb(MAP.areas[MAP.rooms[fig.room].area].accent);
  only(fig3.group);
  renderer.render(scene, camera);
  document.getElementById('fade').style.opacity = String(fadeAlpha);
}

let last = performance.now();
let stopped = false;
function frame(now) {
  if (stopped) return;
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  render(dt);
  requestAnimationFrame(frame);
}

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.fov = params.fov;
  camera.updateProjectionMatrix();
}

// ---- the page -----------------------------------------------------------------------------------------------
function updateHud() {
  document.getElementById('where').textContent = `${MAP.rooms[fig.room].name}${view !== fig.room ? ` (camera still in the ${MAP.rooms[view].name})` : ''}`;
}
function restart() {
  if (fading) return;
  Object.assign(fig, startState(), { place: IDENTITY, support: undefined });
  fig.local = [fig.cell[0] + 0.5, fig.cell[1] + 0.5, 0];
  fig.yaw = yawOf(fig.facing);
  view = fig.room; cam.ready = false;
  updateHud();
}

const KEYS = { ArrowUp: 'forward', KeyW: 'forward', ArrowDown: 'back', KeyS: 'back', ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right' };
const typing = (e) => e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA');
window.addEventListener('keydown', (e) => {
  if (typing(e)) return;
  const c = KEYS[e.code];
  if (c) {
    e.preventDefault();
    if (free()) held[c] = true;
    else if (!e.repeat || params.repeat) command(c);
  }
  if (e.code === 'KeyR') restart();
});
window.addEventListener('keyup', (e) => { const c = KEYS[e.code]; if (c) held[c] = false; });
window.addEventListener('blur', () => { for (const k in held) held[k] = false; });
for (const b of document.querySelectorAll('[data-cmd]')) {
  b.addEventListener('pointerdown', (e) => { e.preventDefault(); if (free()) held[b.dataset.cmd] = true; else command(b.dataset.cmd); });
  for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) b.addEventListener(ev, () => { held[b.dataset.cmd] = false; });
}
// Free walking: drag across the view to turn (as Minecraft's mouse look, sideways only).
let dragging = false;
renderer.domElement.addEventListener('pointerdown', (e) => { dragging = true; renderer.domElement.setPointerCapture(e.pointerId); });
renderer.domElement.addEventListener('pointermove', (e) => { if (dragging && free()) dragX += e.movementX; });
for (const ev of ['pointerup', 'pointercancel']) renderer.domElement.addEventListener(ev, () => { dragging = false; });
window.addEventListener('resize', resize);

// The panel (lil-gui): double-click a setting's name to reset it; each section has its own reset.
const gui = new GUI({ title: 'Look test' });
const watch = (c, then) => { c.onChange(() => { save(); apply2(); if (then) then(); }); c.domElement.addEventListener('dblclick', () => c.reset()); return c; };
function apply2() { camera.fov = params.fov; camera.updateProjectionMatrix(); }
const fc = gui.addFolder('Camera');
watch(fc.add(params, 'distance', 0.8, 8, 0.05).name('distance behind'));
watch(fc.add(params, 'height', 0.4, 6, 0.05).name('height'));
watch(fc.add(params, 'shoulder', -1.5, 1.5, 0.05).name('over the shoulder'));
watch(fc.add(params, 'lookAhead', 0, 5, 0.05).name('look ahead'));
watch(fc.add(params, 'lookHeight', 0, 3, 0.05).name('look at height'));
watch(fc.add(params, 'fov', 30, 100, 1).name('field of view'));
watch(fc.add(params, 'follow', 1, 30, 0.5).name('follow speed'));
watch(fc.add(params, 'duck').name('duck through doors'));
watch(fc.add(params, 'overhead', 0, 1.5, 0.05).name('rise when held close'));
fc.add({ reset: () => fc.reset() }, 'reset').name('↺ reset camera');
const fm = gui.addFolder('Moving');
watch(fm.add(params, 'movement', { 'step and turn': 'step', 'free walking': 'free' }).name('how you move'), () => switchMovement());
watch(fm.add(params, 'stepTime', 0.08, 0.8, 0.01).name('step: step time (s)'));
watch(fm.add(params, 'turnTime', 0.05, 0.8, 0.01).name('step: turn time (s)'));
watch(fm.add(params, 'repeat').name('step: hold a key to keep going'));
watch(fm.add(params, 'walkSpeed', 0.6, 6, 0.1).name('free: walking speed'));
watch(fm.add(params, 'turnSpeed', 30, 360, 5).name('free: turning (°/s)'));
watch(fm.add(params, 'mouseTurn').name('free: drag to turn'));
watch(fm.add(params, 'doorAssist', 0, 3, 0.1).name('free: ease into doorways'));
fm.add({ reset: () => fm.reset() }, 'reset').name('↺ reset moving');
const ft = gui.addFolder('Ways through');
watch(ft.add(params, 'mode', { 'seamless (see through, no cut)': 'seamless', 'fade': 'fade' }).name('doors and stairs'), () => restartKeepPlace());
watch(ft.add(params, 'fadeTime', 0.1, 1.2, 0.01).name('fade time (s)'));
watch(ft.add(params, 'showMarkers').name('floor markers'));
ft.add({ reset: () => ft.reset() }, 'reset').name('↺ reset');
const fs = gui.addFolder('Snapshots');
const snaps = { A: null, B: null };
fs.add({ a: () => { snaps.A = { ...params }; note('Saved as A'); } }, 'a').name('save A');
fs.add({ a: () => { if (snaps.A) { setAll(snaps.A); note('A'); } else note('Nothing saved as A yet'); } }, 'a').name('load A');
fs.add({ b: () => { snaps.B = { ...params }; note('Saved as B'); } }, 'b').name('save B');
fs.add({ b: () => { if (snaps.B) { setAll(snaps.B); note('B'); } else note('Nothing saved as B yet'); } }, 'b').name('load B');
fs.add({ c: copySettings }, 'c').name('copy settings');
fs.add({ r: restart }, 'r').name('back to the start (R)');
function setAll(o) { const was = params.movement; Object.assign(params, o); gui.controllersRecursive().forEach((c) => c.updateDisplay()); save(); apply2(); if (params.movement !== was) switchMovement(); restartKeepPlace(); }
// Into step and turn: back onto the middle of the cell, facing the nearest of the four ways.
function switchMovement() {
  for (const k in held) held[k] = false;
  updateHelp();
  if (free()) return;
  fig.facing = facingOfYaw(fig.yaw);
  const y = { ne: 0, se: Math.PI / 2, sw: Math.PI, nw: -Math.PI / 2 }[fig.facing];
  fig.yaw = y + Math.round((fig.yaw - y) / (2 * Math.PI)) * 2 * Math.PI;
  fig.local = [fig.cell[0] + 0.5, fig.cell[1] + 0.5, fig.h];
  fig.support = undefined;
}
function updateHelp() {
  const el = document.getElementById('keys');
  if (el) el.innerHTML = free()
    ? '<b>Hold ↑ / W</b> to walk · <b>↓ / S</b> back · <b>← → / A D</b> turn · or drag across the view to turn · <b>R</b> back to the start.'
    : '<b>↑ / W</b> step forward · <b>↓ / S</b> step back · <b>← → / A D</b> turn · <b>R</b> back to the start.';
}
function restartKeepPlace() { if (busy) return; rooms.clear(); view = fig.room; fig.place = IDENTITY; cam.ready = false; updateHud(); }
async function copySettings() {
  const text = JSON.stringify(params, null, 2);
  try { await navigator.clipboard.writeText(text); note('Settings copied'); }
  catch { const t = document.getElementById('copybox'); t.value = text; t.hidden = false; t.select(); note('Select all and copy'); }
}

window.__look = { held, setMovement: (m) => { params.movement = m; switchMovement(); }, debug: { flags, room, placement, gateOf, gatesCache, renderer, camera, scene, setPass, only, maskMat, bgMat, bgPlane, stop: () => { stopped = true; } }, command, state: () => ({ room: fig.room, view, cell: [...fig.cell], h: fig.h, facing: fig.facing, busy, mode: params.mode, movement: params.movement, local: [...fig.local], yaw: fig.yaw, fading }), params, restart, setMode: (m) => { params.mode = m; restartKeepPlace(); } };
resize();
updateHud();
updateHelp();
requestAnimationFrame(frame);
