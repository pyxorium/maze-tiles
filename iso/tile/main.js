// main.js: the Escher maze tile (plan: claude/escher-maze-plan.md).
//
// Tap or click a way on (or Tab to it and press Enter): the figure walks there, the view slides the way that
// kind of way on goes (M5), and you arrive on the matching side of the next room. Back (B) walks the way you
// came, up to 8 rooms; a drop clears that trail. The map (M) fills in as you go. Nothing is saved: a reload
// starts again in the Courtyard.

import { MAP } from './map.js';
import { createNav, findPath, geometry, wayOf } from './graph.js';
import { buildScene, drawScene, drawFigure, fitView, proj, rgb, mix, wayLabel } from './render.js';
import { drawMapCard, mapSize } from './mapcard.js';

const STEP_MS = 500;            // half a second per block (M1)
const TRANS_MS = 600;           // a slide (M5)
const DROP_MS = 900;
const FADE_MS = 250;            // "reduce motion": every transition becomes a quick fade
const TOP = 56;                 // room for the bar

const canvas = document.getElementById('view');
const ctx = canvas.getContext('2d');
const waysEl = document.getElementById('ways');
const backBtn = document.getElementById('back');
const mapBtn = document.getElementById('mapbtn');
const roomEl = document.getElementById('room');
const mapcard = document.getElementById('mapcard');
const mapCanvas = document.getElementById('mapcanvas');
const noteEl = document.getElementById('note');
const reduceMotion = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };

const nav = createNav(MAP);
const scenes = new Map();
const scene = (id) => { if (!scenes.has(id)) scenes.set(id, buildScene(MAP, id)); return scenes.get(id); };

let cw = 0, ch = 0, dpr = 1;
const start = MAP.start;
let fig = { x: start.at[0] + 0.5, y: start.at[1] + 0.5, z: 0, facing: start.facing, alpha: 1, bob: 0 };
let busy = false;
let focusWay = null, hoverWay = null;
let transitionFrame = null;      // while sliding: draws the frame instead of the room
let lastSlide = null;            // { kind, ms }: for the browser check

const space = () => ({ x: 16, y: TOP, w: Math.max(40, cw - 32), h: Math.max(40, ch - TOP - 16) });
const viewOf = (sc) => fitView(sc, space());
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeIn = (t) => t * t * t;
const easeOutBack = (t) => { const c1 = 1.5, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };
const clamp01 = (t) => Math.max(0, Math.min(1, t));
const lerp = (a, b, t) => a + (b - a) * t;

// ---- drawing ---------------------------------------------------------------------------------------------

function draw() {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  if (transitionFrame) { transitionFrame(); return; }
  const sc = scene(nav.state.room);
  const v = viewOf(sc);
  ctx.fillStyle = rgb(sc.area.bg);
  ctx.fillRect(0, 0, cw, ch);
  const focus = busy ? null : focusWay ?? hoverWay;
  drawScene(ctx, sc, v, { figure: fig, focus });
  if (focus) {
    const way = wayOf(sc.room, focus);
    if (way) drawLabel(wayLabel(way), anchorOf(sc, v, way));
  }
}

function drawLabel(text, [x, y]) {
  ctx.font = '600 13px system-ui, -apple-system, "Segoe UI", sans-serif';
  const w = ctx.measureText(text).width + 18;
  const h = 24;
  const bx = Math.max(6, Math.min(cw - w - 6, x - w / 2));
  const by = Math.max(TOP - 6, y - 46);
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(bx, by, w, h, 12); else ctx.rect(bx, by, w, h);
  ctx.fillStyle = 'rgba(58,51,48,0.86)';
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, bx + w / 2, by + h / 2 + 0.5);
}

// Where a way on's button sits: a little over halfway along its path, lifted to about knee height.
function anchorOf(sc, v, way) {
  const g = geometry(sc.room, way);
  if (way.kind === 'drop') return proj(v, g.path[0][0], g.path[0][1], 0);
  const p = g.path;
  let total = 0;
  const seg = [];
  for (let i = 0; i < p.length - 1; i++) { const d = Math.hypot(p[i + 1][0] - p[i][0], p[i + 1][1] - p[i][1]); seg.push(d); total += d; }
  let want = total * (way.kind === 'door' ? 1 : 0.6);
  for (let i = 0; i < seg.length; i++) {
    if (want <= seg[i] || i === seg.length - 1) {
      const u = seg[i] ? Math.min(1, want / seg[i]) : 1;
      const a = p[i], b = p[i + 1];
      return proj(v, lerp(a[0], b[0], u), lerp(a[1], b[1], u), lerp(a[2], b[2], u) + (way.kind === 'door' ? 0.75 : 0.45));
    }
    want -= seg[i];
  }
  return proj(v, p[0][0], p[0][1], 0.4);
}

function resize() {
  dpr = Math.min(3, window.devicePixelRatio || 1);
  cw = canvas.clientWidth || window.innerWidth;
  ch = canvas.clientHeight || window.innerHeight;
  canvas.width = Math.round(cw * dpr);
  canvas.height = Math.round(ch * dpr);
  placeButtons();
  if (!mapcard.hidden) drawMap();
  draw();
}

// ---- the buttons over the canvas (tap targets, and Tab / Enter for keyboards) ----------------------------

function placeButtons() {
  const sc = scene(nav.state.room);
  const v = viewOf(sc);
  const ids = new Set();
  const size = Math.max(44, Math.min(96, v.a * 1.4));
  for (const way of sc.room.ways) {
    if (way.kind === 'landing') continue;
    ids.add(way.id);
    let b = waysEl.querySelector(`[data-way="${way.id}"]`);
    if (!b) {
      b = document.createElement('button');
      b.type = 'button';
      b.className = 'way';
      b.dataset.way = way.id;
      b.addEventListener('click', () => take(way.id));
      b.addEventListener('focus', () => { focusWay = way.id; draw(); });
      b.addEventListener('blur', () => { if (focusWay === way.id) focusWay = null; draw(); });
      b.addEventListener('pointerenter', () => { hoverWay = way.id; draw(); });
      b.addEventListener('pointerleave', () => { if (hoverWay === way.id) hoverWay = null; draw(); });
      waysEl.appendChild(b);
    }
    b.setAttribute('aria-label', wayLabel(way));
    const [x, y] = anchorOf(sc, v, way);
    b.style.left = `${x}px`;
    b.style.top = `${y}px`;
    b.style.width = `${size}px`;
    b.style.height = `${size}px`;
  }
  for (const b of [...waysEl.children]) if (!ids.has(b.dataset.way)) b.remove();
}

function clearButtons() { waysEl.replaceChildren(); focusWay = null; hoverWay = null; }

function updateBar() {
  const room = MAP.rooms[nav.state.room];
  roomEl.textContent = room.name;
  const back = nav.backTarget();
  backBtn.disabled = !back;
  backBtn.title = back ? 'Back (B)' : nav.state.fell ? 'No way back up' : 'Back (B)';
}

let noteTimer = 0;
function showNote(text) {
  noteEl.textContent = text;
  noteEl.classList.add('show');
  clearTimeout(noteTimer);
  noteTimer = setTimeout(() => noteEl.classList.remove('show'), 2600);
}

// ---- moving ----------------------------------------------------------------------------------------------

function animate(ms, onFrame) {
  return new Promise((resolve) => {
    if (ms <= 0) { onFrame(1); resolve(); return; }
    const t0 = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - t0) / ms);
      onFrame(t);
      if (t < 1) requestAnimationFrame(step); else resolve();
    };
    requestAnimationFrame(step);
  });
}
const pause = (ms) => new Promise((r) => setTimeout(r, ms));

function facingOf(dx, dy, was) {
  if (Math.abs(dx) < 1e-6 && Math.abs(dy) < 1e-6) return was;
  if (Math.abs(dx) >= Math.abs(dy)) return dx > 0 ? 'se' : 'nw';
  return dy > 0 ? 'sw' : 'ne';
}

// Walk the figure along points [x, y, z]. fadeIn / fadeOut: on the first / last stretch (doors). clip: a hole.
async function walk(pts, { fadeIn = false, fadeOut = false, clip = null } = {}) {
  const segs = [];
  let total = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1];
    const horiz = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const ms = Math.max(horiz, Math.abs(b[2] - a[2]) * 0.5) * STEP_MS;
    if (ms > 0) { segs.push({ a, b, ms, horiz }); total += ms; }
  }
  if (!segs.length) return;
  const bobOn = !reduceMotion.matches;
  await animate(total, (t) => {
    let el = t * total, i = 0;
    while (i < segs.length - 1 && el > segs[i].ms) { el -= segs[i].ms; i++; }
    const s = segs[i];
    const u = Math.min(1, el / s.ms);
    fig.x = lerp(s.a[0], s.b[0], u);
    fig.y = lerp(s.a[1], s.b[1], u);
    fig.z = lerp(s.a[2], s.b[2], u);
    fig.facing = facingOf(s.b[0] - s.a[0], s.b[1] - s.a[1], fig.facing);
    fig.bob = bobOn && s.horiz > 0.01 && t < 1 ? Math.abs(Math.sin((t * total / STEP_MS) * Math.PI)) * 0.07 : 0;
    fig.alpha = 1;
    if (fadeIn && i === 0) fig.alpha = u;
    if (fadeOut && i === segs.length - 1) fig.alpha = 1 - u;
    fig.clip = clip && fig.z < 0.6 ? clip : null;
    draw();
  });
  fig.bob = 0;
}

// Arriving through a drop: a fall from above, then a small bump.
async function fall(to) {
  const [x, y] = to;
  fig.x = x + 0.5; fig.y = y + 0.5; fig.alpha = 1; fig.clip = null;
  await animate(reduceMotion.matches ? 1 : 520, (t) => { fig.z = 5 * (1 - t * t); draw(); });
  if (!reduceMotion.matches) await animate(200, (t) => { fig.z = 0.22 * Math.sin(Math.PI * t); draw(); });
  fig.z = 0;
  draw();
}

function kindOfMove(way) {
  if (reduceMotion.matches) return 'fade';
  if (way.kind === 'drop') return 'drop';
  if (way.kind === 'stairs' || way.kind === 'ramp') return way.dir === 'up' ? 'up' : 'down';
  return 'level';
}

// Slide from one room to the next (M5). The figure travels from where it left to where it will appear.
function slide(scA, scB, kind, exitPt, entryPt, showFigure, dirVec) {
  const ms = kind === 'fade' ? FADE_MS : kind === 'drop' ? DROP_MS : TRANS_MS;
  const facing = fig.facing;
  const t0 = performance.now();
  return animate(ms, (t) => {
    transitionFrame = () => {
      const vA = viewOf(scA), vB = viewOf(scB);
      const e = ease(t);
      let oA = [0, 0], oB = [0, 0], showA = true, showB = true, aA = 1, aB = 1, bgT = e;
      if (kind === 'level') {
        const L = Math.hypot(cw, ch) * 0.9;
        oA = [-dirVec[0] * L * e, -dirVec[1] * L * e];
        oB = [dirVec[0] * L * (1 - e), dirVec[1] * L * (1 - e)];
      } else if (kind === 'up') {
        oA = [0, ch * e]; oB = [0, -ch * (1 - e)];
      } else if (kind === 'down') {
        oA = [0, -ch * e]; oB = [0, ch * (1 - e)];
      } else if (kind === 'drop') {
        const e1 = easeIn(clamp01(t / 0.42));
        const e2 = easeOutBack(clamp01((t - 0.58) / 0.42));
        oA = [0, -ch * 1.15 * e1];
        oB = [0, ch * 1.15 * (1 - e2)];
        showA = t < 0.42; showB = t > 0.58;
        bgT = clamp01((t - 0.42) / 0.16);
      } else {
        aA = 1 - t; aB = t; bgT = t;
      }
      ctx.fillStyle = rgb(mix(scA.area.bg, scB.area.bg, bgT));
      ctx.fillRect(0, 0, cw, ch);
      if (showA) { ctx.save(); ctx.globalAlpha = aA; ctx.translate(oA[0], oA[1]); drawScene(ctx, scA, vA, {}); ctx.restore(); }
      if (showB) { ctx.save(); ctx.globalAlpha = aB; ctx.translate(oB[0], oB[1]); drawScene(ctx, scB, vB, {}); ctx.restore(); }
      if (showFigure && kind !== 'drop') {
        const pA = proj(vA, ...exitPt), pB = proj(vB, ...entryPt);
        const x = lerp(pA[0] + oA[0], pB[0] + oB[0], e);
        const y = lerp(pA[1] + oA[1], pB[1] + oB[1], e);
        drawFigure(ctx, [x, y], lerp(vA.a, vB.a, e), { facing, alpha: 1 }, scB.area, false);
      }
    };
    draw();
  }).then(() => { transitionFrame = null; lastSlide = { kind, ms: Math.round(performance.now() - t0) }; });
}

async function take(wayId, { back = false } = {}) {
  if (busy) return;
  const roomId = nav.state.room;
  const room = MAP.rooms[roomId];
  const way = wayOf(room, wayId);
  if (!way || way.kind === 'landing') return;
  const t = way.closed ? null : back ? nav.backTarget() : nav.target(wayId);
  if (!way.closed && !t) return;
  const hadFocus = waysEl.contains(document.activeElement) || document.activeElement === backBtn;
  busy = true;
  document.body.classList.add('busy');
  try {
    const g = geometry(room, way);
    const here = [Math.floor(fig.x), Math.floor(fig.y)];
    const cells = findPath(room, here, g.stand) || [g.stand];
    const pts = [[fig.x, fig.y, fig.z], ...cells.slice(1).map(([x, y]) => [x + 0.5, y + 0.5, 0])];
    const standPt = [g.stand[0] + 0.5, g.stand[1] + 0.5, 0];
    const last = pts[pts.length - 1];
    if (last[0] !== standPt[0] || last[1] !== standPt[1]) pts.push(standPt);
    await walk(pts);
    if (way.closed) { showNote(way.note || 'This door is closed.'); return; }

    await walk(g.path, { fadeOut: g.fade, clip: g.hole });
    await pause(120);

    const scA = scene(roomId);
    const toRoom = MAP.rooms[t.toRoom];
    const tg = geometry(toRoom, t.toWay);
    const arrive = [...tg.path].reverse();
    const exitPt = g.path[g.path.length - 1];
    const entryPt = arrive[0];
    // The direction of a level move on screen: from where you stood toward the way out.
    const vA = viewOf(scA);
    const p0 = proj(vA, ...g.path[0]), p1 = proj(vA, ...exitPt);
    const n = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]) || 1;
    const dirVec = [(p1[0] - p0[0]) / n, (p1[1] - p0[1]) / n];

    nav.commit(t, { back });
    clearButtons();
    updateBar();
    const scB = scene(t.toRoom);
    fig = { ...fig, x: entryPt[0], y: entryPt[1], z: entryPt[2], alpha: tg.fade ? 0 : 1, clip: null };
    await slide(scA, scB, kindOfMove(way), exitPt, entryPt, !g.fade && !tg.fade, dirVec);

    if (t.toWay.kind === 'landing') {
      await fall(tg.stand);
      showNote('No way back up.');
    } else {
      fig.facing = facingOf(arrive[1][0] - arrive[0][0], arrive[1][1] - arrive[0][1], fig.facing);
      await walk(arrive, { fadeIn: tg.fade });
    }
    fig.alpha = 1;
  } finally {
    busy = false;
    document.body.classList.remove('busy');
    placeButtons();
    updateBar();
    if (!mapcard.hidden) drawMap();
    draw();
    if (hadFocus) { const first = waysEl.querySelector('.way'); if (first) first.focus(); }
  }
}

function goBack() {
  const t = nav.backTarget();
  if (t && !busy) take(t.way.id, { back: true });
}

// ---- the map card ----------------------------------------------------------------------------------------

function drawMap() {
  const { w, h } = mapSize(MAP);
  const maxW = Math.max(160, cw - 56), maxH = Math.max(120, ch - 120);
  const s = Math.min(1, maxW / w, maxH / h);
  mapCanvas.width = Math.round(w * dpr);
  mapCanvas.height = Math.round(h * dpr);
  mapCanvas.style.width = `${Math.round(w * s)}px`;
  mapCanvas.style.height = `${Math.round(h * s)}px`;
  const mctx = mapCanvas.getContext('2d');
  mctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  drawMapCard(mctx, MAP, nav.state);
}

function toggleMap(open = mapcard.hidden) {
  mapcard.hidden = !open;
  mapBtn.setAttribute('aria-expanded', String(open));
  if (open) drawMap();
}

mapBtn.addEventListener('click', () => toggleMap());
mapcard.addEventListener('click', () => toggleMap(false));
backBtn.addEventListener('click', goBack);
document.addEventListener('keydown', (e) => {
  if (e.altKey || e.ctrlKey || e.metaKey) return;
  const k = e.key.toLowerCase();
  if (k === 'b') { e.preventDefault(); goBack(); }
  else if (k === 'm') { e.preventDefault(); toggleMap(); }
  else if (k === 'escape' && !mapcard.hidden) { e.preventDefault(); toggleMap(false); }
});
window.addEventListener('resize', resize);
if (window.ResizeObserver) new ResizeObserver(() => resize()).observe(document.body);

// For the browser check (test/browser/check.mjs): where things are, without reaching into the canvas.
// jump() is for the checks and the card pictures only (nothing on the page calls it).
function jump(roomId, cell) {
  const room = MAP.rooms[roomId];
  const w = room.ways.find((x) => x.kind !== 'drop') || room.ways[0];
  const at = cell || geometry(room, w).stand;
  nav.state.room = roomId; nav.state.visited.add(roomId); nav.state.trail = [];
  fig = { x: at[0] + 0.5, y: at[1] + 0.5, z: 0, facing: 'se', alpha: 1, bob: 0 };
  clearButtons(); placeButtons(); updateBar(); draw();
}
window.__maze = { nav, take, goBack, jump, state: () => ({ room: nav.state.room, busy, fig: { ...fig }, visited: [...nav.state.visited], trail: nav.state.trail.length, fell: nav.state.fell, lastSlide }) };

updateBar();
resize();
