// main.js: the Escher maze over the shoulder (plans: claude/escher-maze-plan.md M7 to M9,
// claude/escher-maze-3d-plan.md M10 to M16). Built from the look test (lab/shoulder/main.js) without its panel
// and debugging switches.
//
// All twelve rooms in 3D. Every way on shows the room it leads to (two deep), and you walk through with no cut:
// the camera's room is the one drawn in full, and it changes only when the camera itself passes through an
// opening. The hole in the Well room is a real fall into the Cellar. Free walking by default; step and turn in
// the gear menu. The map card fills in as you go. Nothing is saved: a reload starts again in the Courtyard.
// 0.4.0 (claude/escher-maze-04-plan.md): the Lantern room's door is a second way out and in (M28, M31 to M33), the
// obelisk a block shorter (M29), the maze has sound (M34, reworked as a hushed gallery by M37: src/sound.js), and
// the figure no longer goes into the wall beside a door's arch (M38, src/walk.js).

import * as THREE from 'three';
import { MAP } from './map.js';
import { createNav, splitTo, wayOf } from './graph.js';
import { buildFigure, srgb, WAYSTONE_TIPS, DOOR_PORTALS, DOOR_OPEN, DOOR_AJAR } from './world.js';
import { createSound } from './sound.js';
import { joinWays, exitOf } from './ways.js';
import { createView } from './view.js';
import {
  DIRS, LEFT_OF, RIGHT_OF, gatesOf, heightsOf, dropsOf, step, apply, invert, IDENTITY,
  freeMove, facingOfYaw, cellOf, compose, portalsOf, slopesOf, slopeHeight, FALL, SLAB,
} from './walk.js';
import { createControls } from './controls.js';
import { createUi } from './ui.js';

// M10: the look test's settings, free walking.
export const SETTINGS = {
  distance: 3.2, height: 2.1, shoulder: 0.35, lookAhead: 1.6, lookHeight: 0.75, fov: 62, follow: 7,
  movement: 'free', stepTime: 0.28, turnTime: 0.24, repeat: true,
  walkSpeed: 2.6, turnSpeed: 150, mouseTurn: true, doorAssist: 1,
  mode: 'seamless', fadeTime: 0.32, duck: true, showMarkers: true, overhead: 0.55,
};
const params = { ...SETTINGS };

// ---- three.js ---------------------------------------------------------------------------------------------------
const stage = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ antialias: true, stencil: true, preserveDrawingBuffer: false });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
renderer.autoClear = false;
renderer.localClippingEnabled = true;
stage.appendChild(renderer.domElement);
renderer.domElement.setAttribute('aria-hidden', 'true');
const camera = new THREE.PerspectiveCamera(params.fov, 1, 0.04, 400);
const view3 = createView(renderer, MAP);

const ROOM_IDS = Object.keys(MAP.rooms);
const gatesCache = new Map(ROOM_IDS.map((id) => [id, gatesOf(MAP.rooms[id])]));
const heightsCache = new Map(ROOM_IDS.map((id) => [id, heightsOf(MAP.rooms[id])]));
const dropsCache = new Map(ROOM_IDS.map((id) => [id, dropsOf(MAP.rooms[id])]));
const slopesCache = new Map(ROOM_IDS.map((id) => [id, slopesOf(MAP.rooms[id])]));
const portalCache = new Map(ROOM_IDS.map((id) => [id, portalsOf(MAP, id)]));
const portalOf = (roomId, wayId) => portalCache.get(roomId).find((p) => p.gate.way.id === wayId);

const fig3 = buildFigure();
const markerGeo = new THREE.PlaneGeometry(0.56, 0.56).rotateX(-Math.PI / 2);
const markerGroup = new THREE.Group();
const passable = (g) => !!g.way.to && !g.way.closed;

// ---- state --------------------------------------------------------------------------------------------------------
const nav = createNav(MAP);
const yawOf = (facing) => ({ ne: 0, se: Math.PI / 2, sw: Math.PI, nw: -Math.PI / 2 })[facing];
const fig = { room: MAP.start.room, cell: [...MAP.start.at], h: 0, facing: MAP.start.facing, yaw: yawOf(MAP.start.facing), local: [0, 0, 0], place: IDENTITY, support: undefined, alpha: 1 };
fig.local = [fig.cell[0] + 0.5, fig.cell[1] + 0.5, 0];
let view = fig.room;                 // the camera's room: everything is drawn in its coordinates
let chain = [];                      // the openings the figure has gone through since the camera's room
// M27 (Oct 28 2026; claude/escher-maze-view-bug.md): how long the figure has been in another room than the camera's,
// and how many times the safety net below has had to put the camera back with the figure (for the browser check).
let strayFor = 0, recovered = 0;
export const STRAY_LIMIT = 0.8;      // seconds
let busy = false, queued = null, fading = false, falling = null;
let fadeAlpha = 0;
const held = { forward: false, back: false, left: false, right: false };
const stick = { x: 0, y: 0 };        // the thumb joystick: -1..1 each way (y up = negative)
let dragX = 0;
const cam = { pos: new THREE.Vector3(), look: new THREE.Vector3(), prev: new THREE.Vector3(), shoulder: params.shoulder, height: params.height, ready: false };
const reduceQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
let reduceMotion = !!reduceQuery.matches;
const free = () => params.movement === 'free';

const toV3 = ([x, y, z], v = new THREE.Vector3()) => v.set(x, z, y);
const fromV3 = (v) => [v.x, v.z, v.y];
const figWorld = () => apply(fig.place, fig.local);
const figYawWorld = () => fig.yaw + fig.place.k * Math.PI / 2;

const ui = createUi({
  map: MAP, nav,
  getMovement: () => params.movement,
  setMovement: (m) => { params.movement = m; switchMovement(); },
  getReduceMotion: () => reduceMotion,
  setReduceMotion: (on) => { reduceMotion = on; },
  restart: () => restart(),
});
const controls = createControls({
  canvas: renderer.domElement, held, stick, isFree: free,
  onCommand: (c) => command(c), onDrag: (dx) => { dragX += dx; },
  onMoved: () => ui.moved(), blocked: () => ui.isOpen(),
  onKey: (k) => ui.key(k),
});

// ---- sound (M34, M37) ---------------------------------------------------------------------------------------------------
// On by default, starting with the first key, click or tap (browsers allow sound only then); the bar's button turns it
// off and on. Not remembered: the maze saves nothing.
const sound = createSound();
const soundBtn = document.getElementById('soundbtn');
function showSound() { soundBtn.textContent = sound.on ? 'Sound on' : 'Sound off'; soundBtn.setAttribute('aria-pressed', String(sound.on)); }
soundBtn.addEventListener('click', () => { sound.setOn(!sound.on); sound.start(); showSound(); soundBtn.blur(); });
showSound();
for (const ev of ['keydown', 'pointerdown', 'touchstart']) window.addEventListener(ev, () => sound.start(), { capture: true, passive: true });
document.addEventListener('visibilitychange', () => { if (document.hidden) sound.pause(); else sound.resume(); });
const soundArea = (roomId) => (roomId === 'cellar' ? 'dull' : MAP.rooms[roomId].area);
const isLanding = (roomId) => /^landing\d$/.test(roomId);
// Footsteps: one every STRIDE blocks walked, by what's underfoot.
const STRIDE = 0.62;
let strode = 0, stepH = 0, stepRoom = null;
function footstep() {
  const slope = slopesCache.get(fig.room).get(`${fig.cell[0]},${fig.cell[1]}`);
  // Each room has its own heights: through a way into the next room, start again (no false step up or down).
  const dh = fig.room === stepRoom ? fig.local[2] - stepH : 0;
  stepH = fig.local[2]; stepRoom = fig.room;
  const surface = slope ? 'ramp' : Math.abs(dh) > 0.05 ? 'steps' : 'stone', up = Math.sign(Math.round(dh * 20));
  sound.step(surface, up);
  // M37: on the four landings' flights, a soft tap on the endless Shepard scale for each step.
  if (surface === 'steps' && isLanding(fig.room)) sound.tap(up);
}
// The sources in each room: its waystones and door portals, where they stand in the room's own coordinates.
const SOURCES = new Map(ROOM_IDS.map((id) => {
  const R = MAP.rooms[id];
  const marks = (R.marks || []).filter((m) => m.waystone).map((m) => ({ exit: m.waystone.exit, kind: 'obelisk', at: [m.at[0] + 0.5, m.at[1] + 0.5] }));
  const doors = R.ways.filter((w) => w.portal).map((w) => ({ exit: w.portal.exit, kind: 'door', at: w.side === 'ne' ? [w.at + 0.5, 0] : [0, w.at + 0.5] }));
  return [id, [...marks, ...doors]];
}));
function updateSound() {
  const src = (kind) => {
    const s = SOURCES.get(fig.room).find((x) => x.kind === kind);
    return s ? { dist: Math.hypot(s.at[0] - fig.local[0], s.at[1] - fig.local[1]), open: ways.state(s.exit) === 'open' } : null;
  };
  sound.update({ area: soundArea(fig.room), obelisk: src('obelisk'), door: src('door') });
}

// ---- moving -------------------------------------------------------------------------------------------------------
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
function tween(ms, f, curve = ease) {
  return new Promise((done) => {
    if (ms <= 0) { f(1, 1); done(); return; }
    const t0 = performance.now();
    const tick = (now) => { const t = Math.min(1, (now - t0) / ms); f(curve(t), t); if (t < 1) requestAnimationFrame(tick); else done(); };
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
async function fade(to) {
  const from = fadeAlpha;
  await tween(params.fadeTime * 500, (e) => { fadeAlpha = from + (to - from) * e; }, (t) => t);
  fadeAlpha = to;
}

// Going through gate gA of the figure's room (seamless): carry on in the next room's coordinates, the camera
// following. With "reduce motion" the move is a quick fade instead, and the camera starts again behind you.
async function enter(gA, local) {
  const p = portalOf(fig.room, gA.way.id);
  const t = nav.target(gA.way.id);
  if (t) nav.commit(t);
  const last = chain[chain.length - 1];
  const yaw = fig.yaw - p.P.k * Math.PI / 2;
  const next = { room: p.toRoom, local, cell: cellOf(local[0], local[1]), yaw, support: undefined };
  if (reduceMotion) {
    fading = true;
    await fade(1);
    Object.assign(fig, next, { place: IDENTITY });
    view = p.toRoom; chain = []; cam.ready = false;
    await fade(0);
    fading = false;
  } else {
    if (last && last.room === p.toRoom && last.gate.way.to === `${fig.room}.${gA.way.id}`) chain.pop();
    else chain.push({ room: fig.room, gate: gA, P: p.P, to: p.toRoom });
    Object.assign(fig, next, { place: compose(fig.place, p.P) });
    // More than two openings ahead of the camera, the figure would be in a room that isn't drawn: catch up.
    if (chain.length > 2) { view = fig.room; fig.place = IDENTITY; chain = []; cam.ready = false; }
  }
  fig.facing = facingOfYaw(fig.yaw);
  fig.h = gatesCache.get(fig.room).find((g) => g.way.id === p.toWay)?.hL ?? 0;
  ui.setRoom(MAP.rooms[fig.room].name);
}

function wayNote(w) {
  if (w.closed) return w.note || 'This door is closed.';
  return 'Nothing that way.';
}

// Step and turn (M8): one block, 90° turns.
async function command(c) {
  if (free() || falling) return;
  if (busy || fading) { if (params.repeat) queued = c; return; }
  busy = true;
  ui.moved();
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
      const r = step(R, fig.cell, fig.facing, sign, heightsCache.get(fig.room), gatesCache.get(fig.room), dropsCache.get(fig.room));
      if (r.kind === 'blocked') { touchWaystone(fig.cell, fig.facing, sign); await bump(sign); }
      else if (r.kind === 'move') {
        await walkTo([r.to[0] + 0.5, r.to[1] + 0.5, r.h], params.stepTime * 1000);
        fig.cell = r.to; fig.h = r.h;
        footstep();
      } else if (r.kind === 'fall') {
        busy = false;
        await fall(r.drop);
        return;
      } else {
        const g = r.gate;
        if (!passable(g)) {
          if (g.way.portal && sign > 0) touchExit(g.way.portal.exit, g.way);
          else ui.note(wayNote(g.way));
          await bump(sign);
          return;
        }
        const p = portalOf(fig.room, g.way.id);
        const gB = gatesCache.get(p.toRoom).find((x) => x.way.id === p.toWay);
        await walkTo([g.O[0] + 0.5, g.O[1] + 0.5, g.hO], params.stepTime * 1000);
        await enter(g, [gB.L[0] + 0.5, gB.L[1] + 0.5, gB.hL]);
        fig.cell = [...gB.L]; fig.h = gB.hL;
        footstep();
      }
    }
  } finally {
    busy = false;
    if (queued) { const q = queued; queued = null; command(q); }
  }
}

// The ways out and in (M9, M17 to M24; the second door M28, M31 to M33): the Great Hall's obelisk and the Lantern
// room's door. Only a host can say whether one leads anywhere (src/ways.js): open, the obelisk glows and the door
// stands ajar, and stepping in (or pushing the door) tells the host you left by it; dormant, it says so (the door its
// own note, "This door is closed, for now."); no host at all (a plain viewer), it offers its fallback address in a
// new tab (M19, M22).
const ways = joinWays({ onStatus: () => paintTips(performance.now()), onArrive: (id) => arrive(id) });
let waystoneAt = 0;
function touchMark(m) { touchExit(m.waystone.exit); }
// door: the closed door's way when the exit is a door portal (otherwise an obelisk).
function touchExit(exit, door = null) {
  if (performance.now() - waystoneAt < 2500) return;
  waystoneAt = performance.now();
  const st = ways.state(exit);
  if (st === 'open') {
    if (!door) { if (ways.leave(exit, fig.facing)) ui.note('On your way…'); return; }
    // The door swings wide open, then you're on your way.
    const a = doorAnim(exit);
    if (a.leaving) return;
    a.leaving = true;
    sound.creak();
    ui.note('On your way…');
    setTimeout(() => { if (!ways.leave(exit, fig.facing)) a.leaving = false; }, reduceMotion ? 0 : 520);
  } else if (st === 'dormant') ui.note(door ? wayNote(door) : "This doesn't lead anywhere yet.");
  else ui.offer("I can't take you anywhere from here.", 'Open where this leads', exitOf(exit).fallback);
}
// The doors' swing: shut (dormant, or no host), ajar (it leads somewhere), wide open (someone leaving or arriving).
const doors = new Map();
function doorAnim(exit) {
  if (!doors.has(exit)) doors.set(exit, { angle: 0, leaving: false, arriving: false, closing: false });
  return doors.get(exit);
}
function paintDoors(dt) {
  const exits = new Set(DOOR_PORTALS.map((d) => d.exit));
  for (const exit of exits) {
    const a = doorAnim(exit), open = ways.state(exit) === 'open';
    const target = a.leaving || a.arriving ? DOOR_OPEN : open ? DOOR_AJAR : 0;
    const before = a.angle;
    a.angle = reduceMotion ? target : a.angle + (target - a.angle) * Math.min(1, dt * (target < a.angle ? 5 : 3.2));
    if (Math.abs(a.angle - target) < 0.004) a.angle = target;
    // Swinging shut after someone came in: a thud as it meets the frame (or settles ajar).
    if (a.closing && a.angle <= target + 0.03 && before > target + 0.03) { a.closing = false; sound.thud(); }
    if (a.closing && reduceMotion) { a.closing = false; sound.thud(); }
    for (const d of DOOR_PORTALS) {
      if (d.exit !== exit) continue;
      d.leaf.rotation.y = d.base + d.swing * a.angle;
      d.glow.visible = open || a.leaving || a.arriving;
    }
  }
}
function touchWaystone(cell, facing, sign = 1) {
  const d = DIRS[facing];
  const ahead = [cell[0] + d[0] * sign, cell[1] + d[1] * sign];
  for (const m of MAP.rooms[fig.room].marks || []) {
    if (!m.waystone || m.at[0] !== ahead[0] || m.at[1] !== ahead[1]) continue;
    touchMark(m);
    return true;
  }
  return false;
}
function touchWaystoneFree(fwd) {
  if (fwd <= 0) return;
  const f = [Math.sin(fig.yaw), -Math.cos(fig.yaw)];
  for (const m of MAP.rooms[fig.room].marks || []) {
    if (!m.waystone) continue;
    const dx = m.at[0] + 0.5 - fig.local[0], dy = m.at[1] + 0.5 - fig.local[1];
    const dist = Math.hypot(dx, dy);
    if (dist < 0.95 && (dx * f[0] + dy * f[1]) / dist > 0.6) touchMark(m);
  }
}
// The tip: dull unless a host says the way is open; then the area's accent, gently brightening and fading
// (steady with "reduce motion").
function paintTips(now) {
  for (const t of WAYSTONE_TIPS) {
    if (ways.state(t.exit) !== 'open') { t.material.color.copy(srgb(t.dull)); continue; }
    const k = reduceMotion ? 0.3 : 0.22 + 0.33 * (0.5 + 0.5 * Math.sin(now / 1000 * 2.2));
    t.material.color.copy(srgb(t.bright.map((v) => v + (255 - v) * k)));
  }
}
// Someone arriving from another tile (way.arrive): beside the obelisk, facing down the hall (M18), or through the
// Lantern room's door, a block in front of it, facing into the room (M32), the door wide open behind and swinging shut
// after (with a thud). A quick fade, as "Back to the start"; the map card notes the room as found.
const ARRIVE_NOTE = { obelisk: 'You arrive by the obelisk.', 'second-door': 'You come in through the door.' };
async function arrive(id) {
  const roomId = Object.keys(MAP.rooms).find((r) => (MAP.rooms[r].entrances || []).some((e) => e.id === id));
  if (!roomId || falling) return;
  const e = MAP.rooms[roomId].entrances.find((x) => x.id === id);
  const door = MAP.rooms[roomId].ways.find((w) => w.portal && w.portal.exit === id);
  if (door) { const a = doorAnim(id); a.arriving = true; a.angle = DOOR_OPEN; a.leaving = false; }
  fading = true;
  await fade(1);
  Object.assign(fig, { room: roomId, cell: [...e.at], facing: e.facing, yaw: yawOf(e.facing), place: IDENTITY, support: undefined });
  fig.h = heightsCache.get(roomId).get(`${e.at[0]},${e.at[1]}`) ?? 0;
  fig.local = [e.at[0] + 0.5, e.at[1] + 0.5, fig.h];
  nav.state.room = roomId; nav.state.visited.add(roomId);
  view = roomId; chain = []; cam.ready = false;
  ui.setRoom(MAP.rooms[roomId].name);
  await fade(0);
  fading = false;
  stepH = fig.local[2];
  ui.note(ARRIVE_NOTE[id] || 'You arrive.');
  if (door) setTimeout(() => { const a = doorAnim(id); a.arriving = false; a.closing = true; }, reduceMotion ? 200 : 900);
}

// Free walking (M8): hold to walk, turn smoothly; the thumb joystick on phones (M15).
let bumpNoteAt = 0;
function updateFree(dt) {
  if (fading || busy || falling) { dragX = 0; return; }
  const turn = (held.right ? 1 : 0) - (held.left ? 1 : 0) + stick.x;
  fig.yaw += Math.max(-1, Math.min(1, turn)) * params.turnSpeed * Math.PI / 180 * dt + (params.mouseTurn ? dragX * 0.006 : 0);
  dragX = 0;
  const fwd = Math.max(-1, Math.min(1, (held.forward ? 1 : 0) - (held.back ? 1 : 0) - stick.y));
  const f = [Math.sin(fig.yaw), -Math.cos(fig.yaw)];
  const move = [f[0] * fwd * params.walkSpeed * dt, f[1] * fwd * params.walkSpeed * dt];
  const gates = gatesCache.get(fig.room);
  // Doorways are narrow: walking at one, ease toward its middle.
  if (fwd && params.doorAssist > 0) {
    for (const g of gates) {
      if (g.way.kind !== 'door' || !passable(g)) continue;
      const toward = (f[0] * g.dir[0] + f[1] * g.dir[1]) * Math.sign(fwd);
      if (toward < 0.5) continue;
      const lat = g.dir[0] === 0 ? 0 : 1;
      const c = g.L[lat] + 0.5, ahead = g.L[1 - lat] + 0.5 + g.dir[1 - lat] * 0.5;
      const dist = (ahead - fig.local[1 - lat]) * g.dir[1 - lat];
      const off = c - fig.local[lat];
      if (dist > 0 && dist < 1.6 && Math.abs(off) < 1.25) {
        const pull = Math.min(1, params.doorAssist * (1.6 - dist) * 5 * dt);
        move[lat] = move[lat] * (1 - Math.min(1, params.doorAssist * (1.6 - dist))) + off * pull;
        move[1 - lat] = g.dir[1 - lat] * Math.max(Math.abs(move[1 - lat]), toward * Math.abs(fwd) * params.walkSpeed * dt * 0.6);
      }
    }
  }
  if (!move[0] && !move[1]) { settleHeight(dt); return; }
  const r = freeMove(fig.local, move, { heights: heightsCache.get(fig.room), gates, drops: dropsCache.get(fig.room), passable });
  const moved = Math.hypot(r.pos[0] - fig.local[0], r.pos[1] - fig.local[1]);
  fig.local = [r.pos[0], r.pos[1], fig.local[2]];
  fig.cell = cellOf(r.pos[0], r.pos[1]);
  fig.support = r.support;
  fig.facing = facingOfYaw(fig.yaw);
  touchWaystoneFree(fwd);
  if (r.bumped && r.bumped.way.portal && fwd > 0) touchExit(r.bumped.way.portal.exit, r.bumped.way);
  else if (r.bumped && performance.now() - bumpNoteAt > 2500) { bumpNoteAt = performance.now(); ui.note(wayNote(r.bumped.way)); }
  strode += moved;
  if (strode > STRIDE) { strode -= STRIDE; footstep(); }
  if (r.fell) { fall(r.fell); return; }
  if (r.crossed) {
    const p = portalOf(fig.room, r.crossed.way.id);
    enter(r.crossed, apply(invert(p.P), fig.local));
  } else settleHeight(dt);
}
function settleHeight(dt) {
  // On a ramp, the surface under the figure's middle; elsewhere the highest thing under its footprint.
  const slope = slopesCache.get(fig.room).get(`${fig.cell[0]},${fig.cell[1]}`);
  const h = slope ? slopeHeight(slope, fig.local[0], fig.local[1]) : fig.support ?? heightsCache.get(fig.room).get(`${fig.cell[0]},${fig.cell[1]}`);
  if (h === undefined) return;
  fig.h = h;
  fig.local[2] += (h - fig.local[2]) * Math.min(1, dt * 14);
}

// ---- the fall (M12) ---------------------------------------------------------------------------------------------
// Into the hole: the figure slips to its middle and falls; the camera rises a little over the hole and follows
// down through it, looking down as the Cellar floor comes up; a short bump on landing. "Reduce motion": a fade.
async function fall(drop) {
  if (falling) return;
  const p = portalOf(fig.room, drop.way.id);
  const landing = wayOf(MAP.rooms[p.toRoom], p.toWay);
  const t = nav.target(drop.way.id);
  if (t) nav.commit(t);
  falling = { drop, phase: 'slip', centre: [drop.L[0] + 0.5, drop.L[1] + 0.5] };
  ui.moved();
  for (const k in held) held[k] = false;
  const arrive = [landing.at[0] + 0.5, landing.at[1] + 0.5, 0];
  if (reduceMotion) {
    fading = true;
    await fade(1);
    sound.rush();
    Object.assign(fig, { room: p.toRoom, local: arrive, cell: [...landing.at], h: 0, support: undefined, place: IDENTITY });
    view = p.toRoom; chain = []; cam.ready = false;
    sound.thump();
    await fade(0);
    fading = false;
  } else {
    const a = [...fig.local];
    await tween(260, (e) => { fig.local = [a[0] + (falling.centre[0] - a[0]) * e, a[1] + (falling.centre[1] - a[1]) * e, -0.25 * e]; });
    // If the camera is still behind in the room before (you stepped in and straight down the hole), it comes
    // through the doorway first, while you teeter at the hole's middle.
    falling.phase = 'wait';
    for (let i = 0; chain.length && i < 90; i++) await tween(16, () => {});
    if (chain.length) { view = fig.room; fig.place = IDENTITY; chain = []; cam.ready = false; }
    falling.phase = 'over';
    await tween(240, () => {});
    falling.phase = 'fall';
    sound.rush();
    const g = 2 * FALL / (1.0 * 1.0);            // a second's fall
    let entered = false;
    // Turning as you fall, to face the way the landing spot looks (the long way, not into a wall).
    const yaw0 = fig.yaw;
    let turn = landing.facing ? yawOf(landing.facing) + p.P.k * Math.PI / 2 - yaw0 : 0;   // (the Cellar hangs turned by P.k: none)
    turn = Math.atan2(Math.sin(turn), Math.cos(turn));
    await tween(1000, (_, tt) => {
      fig.yaw = yaw0 + turn * ease(Math.min(1, tt * 1.15));
      const z = -0.25 - 0.5 * g * tt * tt * (FALL - 0.25) / FALL;
      if (!entered && z < -SLAB - 1.2) {
        // Below the floor: carry on in the Cellar's coordinates.
        entered = true;
        chain.push({ room: fig.room, gate: drop, P: p.P, to: p.toRoom });
        Object.assign(fig, { room: p.toRoom, place: compose(fig.place, p.P), cell: [...landing.at], support: undefined });
        ui.setRoom(MAP.rooms[fig.room].name);
      }
      fig.local = [entered ? arrive[0] : falling.centre[0], entered ? arrive[1] : falling.centre[1], entered ? z + FALL : z];
    }, (x) => x);
    fig.local = [...arrive];
    falling.phase = 'land';
    sound.thump();
    await tween(220, (_, tt) => { fig.local[2] = -0.16 * Math.sin(Math.PI * tt); }, (x) => x);
    fig.local[2] = 0;
  }
  fig.h = 0; fig.support = 0;
  fig.cell = [...landing.at];
  fig.facing = facingOfYaw(fig.yaw);
  ui.setRoom(MAP.rooms[fig.room].name);
  ui.note('No way back up.');
  falling = null;
}

// When the camera passes through the first opening the figure went through, the room beyond becomes the view,
// and everything is re-expressed in its coordinates (nothing moves on screen).
function switchView() {
  const c = chain.shift();
  const Q = invert(c.P);
  for (const v of [cam.pos, cam.look, cam.prev]) toV3(apply(Q, fromV3(v)), v);
  fig.place = compose(Q, fig.place);
  view = c.to;
}

// ---- the camera (from the look test) ---------------------------------------------------------------------------
const tmp = new THREE.Vector3();
function corridorGate() {
  if (chain.length) return { g: chain[0].gate, through: true };
  const v = view3.room(view);
  for (const g of gatesCache.get(view)) if (v.masks.has(g.way.id) && g.L[0] === fig.cell[0] && g.L[1] === fig.cell[1]) return { g, through: false };
  return null;
}

function updateCamera(dt) {
  // M27's safety net: the maze is drawn from the camera's room, so the figure must never stay in another room for
  // long. Normally the camera follows it through the opening within a moment; if not, put it back with the figure
  // (a quiet cut).
  if (chain.length && view !== fig.room && !falling && !fading) {
    strayFor += dt;
    if (strayFor > STRAY_LIMIT) { view = fig.room; fig.place = IDENTITY; chain = []; cam.ready = false; strayFor = 0; recovered++; }
  } else strayFor = 0;
  const v = view3.room(view);
  const [fx, fy, fz] = figWorld();
  const yaw = figYawWorld();
  const f = [Math.sin(yaw), -Math.cos(yaw)];
  const right = [-f[1], f[0]];
  if (falling && !(chain.length && !chain[0].gate.drop)) { fallCamera(dt, [fx, fy, fz], f); return; }
  const cg = corridorGate();
  const k = 1 - Math.exp(-params.follow * dt);
  cam.shoulder += ((cg ? 0 : params.shoulder) - cam.shoulder) * k;
  const top = cg && !cg.g.drop && v.masks.get(cg.g.way.id)?.top;
  const wantH = cg && params.duck && Number.isFinite(top) ? Math.min(params.height, top - 0.25 - (fz - cg.g.hL)) : params.height;
  cam.height += (wantH - cam.height) * k;
  const want = [fx - f[0] * params.distance + right[0] * cam.shoulder, fy - f[1] * params.distance + right[1] * cam.shoulder, fz + cam.height];
  if (cg && cg.through) {
    // The figure has gone through: the camera follows it through the opening, then eases back out behind it.
    const g = cg.g, px = g.L[0] + 0.5 + g.dir[0] * 0.5, py = g.L[1] + 0.5 + g.dir[1] * 0.5;
    const along = (want[0] - px) * g.dir[0] + (want[1] - py) * g.dir[1];
    if (along < 0.35) { want[0] += g.dir[0] * (0.35 - along); want[1] += g.dir[1] * (0.35 - along); }
    const lat = g.dir[0] === 0 ? 0 : 1;
    want[lat] = Math.min(g.way.at + 0.8, Math.max(g.way.at + 0.2, want[lat]));
  }
  const look = [fx + f[0] * params.lookAhead, fy + f[1] * params.lookAhead, fz + params.lookHeight];

  const clampSide = (side, p) => {
    if (cg && cg.g.side === side) return;
    if (side === 'ne') p[1] = Math.max(p[1], 0.15); else p[0] = Math.max(p[0], 0.15);
  };
  const clamp = (p) => { clampSide('ne', p); clampSide('nw', p); };
  // Never out through (or hanging just beyond) a see-through opening other than the one the figure went through.
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
  const hd = Math.hypot(next[0] - fx, next[1] - fy);
  if (hd < params.distance) next[2] = Math.max(next[2], fz + cam.height + (params.distance - hd) * params.overhead);
  cam.prev.copy(cam.pos);
  toV3(next, cam.pos);
  cam.look.lerp(toV3(look, tmp), k);

  if (cg && cg.through && !cg.g.drop) {
    const g = cg.g, m = v.masks.get(g.way.id);
    const sPrev = tmp.copy(cam.prev).sub(m.point).dot(m.normal), sNow = tmp.copy(cam.pos).sub(m.point).dot(m.normal);
    const u = g.side === 'ne' || g.side === 'sw' ? cam.pos.x : cam.pos.z;
    // Through the opening: switch. M27: past the opening's plane anywhere else (facing almost along the wall, the
    // camera can pass it beside the opening, through the wall's corner): switch too, or the old room would go on
    // being drawn round a figure that has left it.
    if (sNow > 0 && ((sPrev <= 0 && u > g.way.at - 0.3 && u < g.way.at + 1.3) || sNow > 0.02)) switchView();
  }
  finishCamera(fx, fy, fz);
}

// During the fall: over the hole, then down through it after the figure, looking down.
function fallCamera(dt, [fx, fy, fz], f) {
  const fast = falling.phase === 'fall' || falling.phase === 'land';
  const k = 1 - Math.exp(-(fast ? 16 : 8) * dt);
  const c = !fast || chain.length ? holeCentre() : null;
  const above = falling.phase === 'land' ? 2.4 : 2.6;
  const want = c ? [c[0] - f[0] * 0.2, c[1] - f[1] * 0.2, fz + above] : [fx - f[0] * 0.2, fy - f[1] * 0.2, fz + above];
  const next = fromV3(cam.pos).map((v, i) => v + (want[i] - v) * k);
  if (c && fast) { next[0] = c[0] + Math.max(-0.3, Math.min(0.3, next[0] - c[0])); next[1] = c[1] + Math.max(-0.3, Math.min(0.3, next[1] - c[1])); }
  cam.prev.copy(cam.pos);
  toV3(next, cam.pos);
  cam.look.lerp(toV3([fx + f[0] * 0.5, fy + f[1] * 0.5, fz - 0.6], tmp), k);
  if (chain.length && chain[0].gate.drop && cam.prev.y > -SLAB && cam.pos.y <= -SLAB) switchView();
  finishCamera(fx, fy, fz);
}
function holeCentre() {
  const c = chain.length && chain[0].gate.drop ? chain[0].gate : falling.drop;
  // In the camera's room: the drop's own room is the view while the camera hasn't followed down yet.
  return [c.L[0] + 0.5, c.L[1] + 0.5];
}
function finishCamera(fx, fy, fz) {
  camera.position.copy(cam.pos);
  camera.lookAt(cam.look);
  const d = cam.pos.distanceTo(toV3([fx, fy, fz], tmp).add(new THREE.Vector3(0, 0.7, 0)));
  fig.alpha = Math.max(0, Math.min(1, (d - 0.35) / 0.55));
}

// ---- drawing --------------------------------------------------------------------------------------------------
function placeMarkers() {
  for (const m of markerGroup.children) m.material.dispose();
  markerGroup.clear();
  if (!params.showMarkers) return;
  const v = view3.room(view);
  for (const g of gatesCache.get(view)) {
    const mesh = new THREE.Mesh(markerGeo, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.75, depthWrite: false, color: srgb(passable(g) ? v.area.accent : v.area.wall, passable(g) ? 1 : 0.7) }));
    mesh.position.set(g.L[0] + 0.5, g.hL + 0.012, g.L[1] + 0.5);
    markerGroup.add(mesh);
  }
}
let markersFor = null;
let lastDrawn = 0;
function render(dt) {
  if (dt > 0 && free()) updateFree(dt);
  if (dt > 0) updateCamera(dt);
  if (markersFor !== view) { placeMarkers(); markersFor = view; }
  lastDrawn = view3.draw(view, camera, [markerGroup]);
  const [x, y, z] = figWorld();
  fig3.group.position.set(x, z, y);
  fig3.group.rotation.y = -figYawWorld();
  for (const m of fig3.materials) { m.transparent = true; m.opacity = m === fig3.materials[3] ? 0.18 * fig.alpha : fig.alpha; }
  fig3.capMat.color = srgb(MAP.areas[MAP.rooms[fig.room].area].accent);
  view3.renderScene([fig3.group], camera);
  ui.setFade(fadeAlpha);
}

let last = performance.now();
let paused = false;
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  paintTips(now);
  paintDoors(dt);
  if (!paused) { render(dt); updateSound(); }
  requestAnimationFrame(frame);
}

function resize() {
  const w = stage.clientWidth || window.innerWidth, h = stage.clientHeight || window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.fov = params.fov;
  camera.updateProjectionMatrix();
}

// ---- settings ---------------------------------------------------------------------------------------------------
// Into step and turn: onto the middle of the cell, facing the nearest of the four ways.
function switchMovement() {
  for (const k in held) held[k] = false;
  stick.x = 0; stick.y = 0;
  controls.setMovement(params.movement);
  ui.setMovementHelp(params.movement);
  if (free()) return;
  fig.facing = facingOfYaw(fig.yaw);
  const y = yawOf(fig.facing);
  fig.yaw = y + Math.round((fig.yaw - y) / (2 * Math.PI)) * 2 * Math.PI;
  const h = heightsCache.get(fig.room).get(`${fig.cell[0]},${fig.cell[1]}`);
  fig.local = [fig.cell[0] + 0.5, fig.cell[1] + 0.5, h ?? fig.h];
  fig.support = undefined;
}

// Back to the start (M14, in the gear menu): the Courtyard again, the map kept.
function restart() {
  if (fading || falling || busy) return false;
  Object.assign(fig, { room: MAP.start.room, cell: [...MAP.start.at], h: 0, facing: MAP.start.facing, yaw: yawOf(MAP.start.facing), place: IDENTITY, support: undefined });
  fig.local = [fig.cell[0] + 0.5, fig.cell[1] + 0.5, 0];
  nav.state.room = fig.room;
  view = fig.room; chain = []; cam.ready = false;
  ui.setRoom(MAP.rooms[fig.room].name);
  return true;
}

// For the browser check and the card pictures (test/browser/check.mjs, dev/card-art.html) only; nothing on the page
// calls these.
window.__maze = {
  state: () => ({ room: fig.room, view, chain: chain.length, cell: [...fig.cell], h: fig.h, local: [...fig.local], yaw: fig.yaw, facing: fig.facing, busy, fading, falling: falling && falling.phase, movement: params.movement, reduceMotion, visited: [...nav.state.visited], fell: nav.state.fell, drawn: lastDrawn, camera: fromV3(cam.pos), ways: ways.mode, obelisk: ways.state('obelisk'), tip: WAYSTONE_TIPS.map((t) => t.material.color.getHexString()), recovered,
    door: ways.state('second-door'), doorAngle: doorAnim('second-door').angle, doorGlow: DOOR_PORTALS.some((d) => d.glow.visible), sound: sound.state() }),
  jump(roomId, at, facingOrYaw) {
    const yaw = typeof facingOrYaw === 'number' ? facingOrYaw : yawOf(facingOrYaw || 'ne');
    const h = heightsCache.get(roomId).get(`${Math.floor(at[0])},${Math.floor(at[1])}`) ?? 0;
    Object.assign(fig, { room: roomId, cell: cellOf(at[0], at[1]), local: [at[0], at[1], h], h, yaw, facing: facingOfYaw(yaw), place: IDENTITY, support: undefined });
    nav.state.room = roomId; nav.state.visited.add(roomId);
    view = roomId; chain = []; cam.ready = false;
    ui.setRoom(MAP.rooms[roomId].name);
  },
  command, held, stick,
  // Card pictures: draw one still at a size, with the page's controls hidden, and hand back a PNG.
  snapshot(w, h) {
    paused = true;
    const was = [renderer.getPixelRatio(), stage.clientWidth, stage.clientHeight];
    renderer.setPixelRatio(1); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    cam.ready = false;
    for (let i = 0; i < 60; i++) updateCamera(1 / 30);
    render(0);
    const url = renderer.domElement.toDataURL('image/png');
    renderer.setPixelRatio(was[0]); resize(); paused = false;
    return url;
  },
};

window.addEventListener('resize', resize);
if (window.ResizeObserver) new ResizeObserver(() => resize()).observe(stage);
if (reduceQuery.addEventListener) reduceQuery.addEventListener('change', (e) => { if (!ui.reduceTouched()) reduceMotion = e.matches; ui.refresh(); });
resize();
switchMovement();
ui.setRoom(MAP.rooms[fig.room].name);
requestAnimationFrame(frame);
