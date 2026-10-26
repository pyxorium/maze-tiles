// render.js: draws a room in true isometric (30° lines, one fixed view; plan M1) on a 2D canvas.
//
// A room becomes a scene once (buildScene): its floor, walls (with door recesses, gaps and notches), the
// blocks its ways on add (steps, ramps, walkways), and its landmarks. drawScene paints it back to front
// (painter's order: each box by the centre of its footprint, then by its bottom), with the figure slotted in
// by the cell it stands on. Every box has three visible faces: top x1.12, left x0.86, right x0.68.

import { geometry } from './graph.js';

const K = 0.5773502691896258;     // tan 30°: the floor's lines climb 0.577 for every 1 across
const Z = 1.1547005383792515;     // a block's height on screen, in the same units (2 / sqrt 3)
const SLAB = 0.35;                // the floor's slab, under its top

export const proj = (v, x, y, z) => [v.ox + (x - y) * v.a, v.oy + ((x + y) * K - z * Z) * v.a];
export const rgb = (c, f = 1, alpha = 1) => {
  const p = c.map((n) => Math.max(0, Math.min(255, Math.round(n * f))));
  return alpha >= 1 ? `rgb(${p.join(',')})` : `rgba(${p.join(',')},${alpha})`;
};
export const mix = (a, b, t) => a.map((n, i) => n + (b[i] - n) * t);

const LABELS = { door: 'Door', hallway: 'Way through', drop: 'A hole in the floor', landing: '' };
export function wayLabel(w) {
  if (w.closed) return 'Closed door';
  if (w.kind === 'stairs') return w.dir === 'up' ? 'Stairs up' : 'Stairs down';
  if (w.kind === 'ramp') return w.dir === 'up' ? 'Ramp up' : 'Ramp down';
  return LABELS[w.kind] || w.kind;
}

function poly(ctx, pts, fill) {
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = fill;      // the same colour, to close the hairline seams between faces
  ctx.lineWidth = 0.75;
  ctx.stroke();
}

function solid(x, y, w, d, bot, top, color, extra = {}) {
  const b = Array.isArray(bot) ? bot : [bot, bot, bot, bot];
  const t = Array.isArray(top) ? top : [top, top, top, top];
  return { x, y, w, d, bot: b, top: t, color, key: x + w / 2 + y + d / 2, zb: Math.min(...b), ...extra };
}

function drawSolid(ctx, v, s) {
  const { x, y, w, d, bot, top, color } = s;
  const P = (X, Y, z) => proj(v, X, Y, z);
  if (!s.topOnly) {
    poly(ctx, [P(x, y + d, bot[3]), P(x + w, y + d, bot[2]), P(x + w, y + d, top[2]), P(x, y + d, top[3])], rgb(color, 0.86));
    poly(ctx, [P(x + w, y, bot[1]), P(x + w, y + d, bot[2]), P(x + w, y + d, top[2]), P(x + w, y, top[1])], rgb(color, 0.68));
  }
  if (!s.noTop) poly(ctx, [P(x, y, top[0]), P(x + w, y, top[1]), P(x + w, y + d, top[2]), P(x, y + d, top[3])], rgb(color, s.slope ? 1.02 : 1.12));
  if (s.after) s.after(ctx, v);
}

// A shape in a back wall's face: points (u along the wall, z up). ne face: the plane y = 0; nw face: x = 0.
const onWall = (v, side, u, z) => (side === 'ne' ? proj(v, u, 0, z) : proj(v, 0, u, z));
function archPts(v, side, u0, u1, zTop) {
  const r = (u1 - u0) / 2, c = u0 + r, pts = [onWall(v, side, u0, 0)];
  for (let i = 0; i <= 10; i++) { const th = Math.PI - (Math.PI * i) / 10; pts.push(onWall(v, side, c + r * Math.cos(th), zTop + r * Math.sin(th))); }
  pts.push(onWall(v, side, u1, 0));
  return pts;
}

export function buildScene(map, roomId) {
  const room = map.rooms[roomId];
  const area = map.areas[room.area];
  const [W, D] = room.size;
  const wallH = room.wallHeight || 3;
  const solids = [];
  const ways = room.ways.map((w) => ({ w, g: geometry(room, w) }));
  const gaps = { ne: new Set(), nw: new Set() };
  const notches = { ne: new Map(), nw: new Map() };
  const deco = { ne: new Map(), nw: new Map() };
  const addDeco = (side, at, fn) => { const list = deco[side].get(at) || []; list.push(fn); deco[side].set(at, list); };
  const front = new Set();       // "se:3": front cells a way uses (no railing there)

  for (const { w, g } of ways) {
    if (g.gap) gaps[g.gap.side].add(g.gap.at);
    if (g.notch) notches[g.notch.side].set(g.notch.at, g.notch.h);
    if (!Array.isArray(w.at) && (w.side === 'se' || w.side === 'sw')) front.add(`${w.side}:${w.at}`);
    for (const s of g.solids) {
      const color = s.role === 'feature' ? area.feature : area.floor;
      solids.push(solid(s.x, s.y, s.w, s.d, s.bot, s.top, s.fadeOut ? mix(color, area.bg, 0.5) : color, { topOnly: s.topOnly, slope: s.slope }));
    }
    if (g.door) {
      const { side, at, closed } = g.door;
      addDeco(side, at, (ctx, v) => {
        const pts = archPts(v, side, at + 0.22, at + 0.78, 1.25);
        if (closed) {
          poly(ctx, pts, rgb(area.wall, 0.62));
          ctx.strokeStyle = rgb([240, 176, 70]); ctx.lineWidth = Math.max(1.5, v.a * 0.06); ctx.stroke();
          const [kx, ky] = onWall(v, side, at + 0.66, 0.75);
          ctx.beginPath(); ctx.arc(kx, ky, Math.max(1.5, v.a * 0.05), 0, Math.PI * 2); ctx.fillStyle = rgb([240, 176, 70]); ctx.fill();
        } else {
          poly(ctx, pts, rgb(area.wall, 0.3));
        }
      });
    }
  }

  for (const m of room.marks || []) {
    if (m.kind === 'orb' || m.kind === 'pillar') {
      const [x, y] = m.at;
      solids.push(solid(x + 0.25, y + 0.25, 0.5, 0.5, 0, 1.4, area.pillar, {
        key: x + y + 1,
        after: m.kind === 'orb' ? (ctx, v) => {
          const [cx, cy] = proj(v, x + 0.5, y + 0.5, 1.4 + 0.3);
          const r = v.a * 0.26;
          ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = rgb(area.accent); ctx.fill();
          ctx.beginPath(); ctx.arc(cx - r * 0.35, cy - r * 0.35, r * 0.3, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,255,255,0.45)'; ctx.fill();
        } : null,
      }));
    } else if (m.kind === 'obelisk') {
      const [x, y] = m.at;
      solids.push(solid(x + 0.15, y + 0.15, 0.7, 0.7, 0, 3.4, area.pillar, {
        key: x + y + 1,
        after: (ctx, v) => {
          const ap = proj(v, x + 0.5, y + 0.5, 4.3);
          const c = (X, Y) => proj(v, X, Y, 3.4);
          poly(ctx, [c(x + 0.15, y + 0.85), c(x + 0.85, y + 0.85), ap], rgb(area.accent, 0.86));
          poly(ctx, [c(x + 0.85, y + 0.15), c(x + 0.85, y + 0.85), ap], rgb(area.accent, 0.68));
        },
      }));
    } else if (m.kind === 'blocks') {
      for (const [x, y, w, d, h] of m.blocks) for (let i = 0; i < w; i++) for (let j = 0; j < d; j++) solids.push(solid(x + i, y + j, 1, 1, 0, h, area.feature));
    } else if (m.kind === 'arches') {
      for (let i = 0; i < m.count; i++) {
        const at = m.from + i;
        addDeco(m.side, at, (ctx, v) => poly(ctx, archPts(v, m.side, at + 0.17, at + 0.83, 1.45), rgb(area.wall, 0.8)));
      }
    } else if (m.kind === 'numeral') {
      const cell = Math.min(D - 1, Math.floor(m.at + 0.6));
      addDeco(m.side, cell, (ctx, v) => {
        const [sx, sy] = m.side === 'nw' ? proj(v, 0, m.at, 1.95) : proj(v, m.at, 0, 1.95);
        const S = 0.012;
        ctx.save();
        // Text in the wall's plane: reading toward the corner, letters standing up.
        if (m.side === 'nw') ctx.transform(v.a * S, -K * v.a * S, 0, Z * v.a * S, sx, sy);
        else ctx.transform(v.a * S, K * v.a * S, 0, Z * v.a * S, sx, sy);
        ctx.font = 'bold 100px Georgia, "Times New Roman", serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        const lum = 0.3 * area.wall[0] + 0.59 * area.wall[1] + 0.11 * area.wall[2];
        ctx.fillStyle = rgb(area.wall, lum < 120 ? 1.5 : 0.55);   // engraved: lighter on a dark wall, darker on a pale one
        ctx.fillText(m.text, 0, 0);
        ctx.restore();
      });
    } else if (m.kind === 'railing') {
      for (let y = 0; y < D; y++) if (!front.has(`se:${y}`)) solids.push(solid(W, y, 0.18, 1, 0, 0.55, area.wall));
      for (let x = 0; x < W; x++) if (!front.has(`sw:${x}`)) solids.push(solid(x, D, 1, 0.18, 0, 0.55, area.wall));
      solids.push(solid(W, D, 0.18, 0.18, 0, 0.55, area.wall));
    }
  }

  // The two back walls and their corner.
  const decoAfter = (side, at) => { const fns = deco[side].get(at); return fns ? (ctx, v) => fns.forEach((f) => f(ctx, v)) : null; };
  for (let x = 0; x < W; x++) if (!gaps.ne.has(x)) solids.push(solid(x, -1, 1, 1, 0, notches.ne.get(x) ?? wallH, area.wall, { after: decoAfter('ne', x) }));
  for (let y = 0; y < D; y++) if (!gaps.nw.has(y)) solids.push(solid(-1, y, 1, 1, 0, notches.nw.get(y) ?? wallH, area.wall, { after: decoAfter('nw', y) }));
  solids.push(solid(-1, -1, 1, 1, 0, wallH, area.wall));

  solids.sort((a, b) => a.key - b.key || a.zb - b.zb);
  const holes = ways.filter((x) => x.g.hole).map((x) => x.g.hole);
  const landing = ways.find((x) => x.w.kind === 'landing');
  const sc = { id: roomId, room, area, W, D, wallH, solids, ways, holes, landing: landing ? landing.g.stand : null };
  sc.bounds = boundsOf(sc);
  return sc;
}

function boundsOf(sc) {
  const v = { a: 1, ox: 0, oy: 0 };
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  const add = (x, y, z) => { const [px, py] = proj(v, x, y, z); minX = Math.min(minX, px); maxX = Math.max(maxX, px); minY = Math.min(minY, py); maxY = Math.max(maxY, py); };
  for (const [x, y] of [[0, 0], [sc.W, 0], [sc.W, sc.D], [0, sc.D]]) { add(x, y, -SLAB); add(x, y, 1.3); }
  for (const s of sc.solids) {
    const c = [[s.x, s.y], [s.x + s.w, s.y], [s.x + s.w, s.y + s.d], [s.x, s.y + s.d]];
    c.forEach(([x, y], i) => { add(x, y, s.bot[i]); add(x, y, s.top[i]); });
  }
  add(-1, -1, sc.wallH);
  for (const { g } of sc.ways) for (const [x, y, z] of g.path) if (z <= 2) add(x, y, z + 1.2);
  if (sc.room.marks?.some((m) => m.kind === 'obelisk')) { const m = sc.room.marks.find((k) => k.kind === 'obelisk'); add(m.at[0] + 0.5, m.at[1] + 0.5, 4.3); }
  return { minX, maxX, minY, maxY };
}

// Fit a room into the space (scaled to fit; a block never narrower than about 24 px: a = half a block's width).
export const MIN_A = 12;
export const MAX_A = 80;
export function fitView(sc, box) {
  const { minX, maxX, minY, maxY } = sc.bounds;
  const w = maxX - minX, h = maxY - minY;
  const a = Math.max(MIN_A, Math.min(MAX_A, box.w / w, box.h / h));
  return { a, ox: box.x + (box.w - w * a) / 2 - minX * a, oy: box.y + (box.h - h * a) / 2 - minY * a };
}

export function holePolygon(v, hole) {
  const { x, y } = hole;
  return [proj(v, x, y, 0), proj(v, x + 1, y, 0), proj(v, x + 1, y + 1, 0), proj(v, x, y + 1, 0)];
}

// opts: { figure: {x, y, z, facing, alpha, bob, clip}, focus: way id, markers: false to leave out the way-on markers }
export function drawScene(ctx, sc, v, opts = {}) {
  const { area, W, D } = sc;
  const P = (x, y, z) => proj(v, x, y, z);
  // The floor's slab (its two front faces), then its tiles.
  drawSolid(ctx, v, { x: 0, y: 0, w: W, d: D, bot: [-SLAB, -SLAB, -SLAB, -SLAB], top: [0, 0, 0, 0], color: area.floor, noTop: true });
  const holeAt = new Set(sc.holes.map((h) => `${h.x},${h.y}`));
  for (let i = 0; i < W; i++) {
    for (let j = 0; j < D; j++) {
      if (holeAt.has(`${i},${j}`)) continue;
      poly(ctx, [P(i, j, 0), P(i + 1, j, 0), P(i + 1, j + 1, 0), P(i, j + 1, 0)], rgb(area.floor, (i + j) % 2 === 0 ? 1.12 : 1.04));
    }
  }
  for (const h of sc.holes) {
    const { x, y } = h;
    poly(ctx, holePolygon(v, h), rgb(area.wall, 0.22));
    poly(ctx, [P(x, y, 0), P(x + 1, y, 0), P(x + 1, y, -SLAB), P(x, y, -SLAB)], rgb(area.floor, 0.6));
    poly(ctx, [P(x, y, 0), P(x, y + 1, 0), P(x, y + 1, -SLAB), P(x, y, -SLAB)], rgb(area.floor, 0.48));
  }
  if (sc.landing) {
    const [x, y] = sc.landing;
    const c = (X, Y) => P(X, Y, 0);
    ctx.beginPath();
    const pts = [c(x + 0.15, y + 0.5), c(x + 0.5, y + 0.15), c(x + 0.85, y + 0.5), c(x + 0.5, y + 0.85)];
    ctx.moveTo(...pts[0]); pts.slice(1).forEach((p) => ctx.lineTo(...p)); ctx.closePath();
    ctx.strokeStyle = rgb(area.floor, 0.78); ctx.lineWidth = Math.max(1, v.a * 0.04); ctx.stroke();
  }
  // Markers on the cells where you stand to take a way on.
  for (const { w, g } of opts.markers === false ? [] : sc.ways) {
    if (w.kind === 'landing') continue;
    const [x, y] = g.stand;
    if (w.kind === 'drop') continue;
    const focused = opts.focus === w.id;
    const i = focused ? 0.14 : 0.22;
    const pts = [P(x + i, y + i, 0), P(x + 1 - i, y + i, 0), P(x + 1 - i, y + 1 - i, 0), P(x + i, y + 1 - i, 0)];
    const c = w.closed ? [240, 176, 70] : area.accent;
    poly(ctx, pts, rgb(c, 1, focused ? 0.95 : 0.7));
    ctx.strokeStyle = rgb(c, 0.7, focused ? 1 : 0.8);
    ctx.lineWidth = Math.max(1, v.a * (focused ? 0.06 : 0.035));
    ctx.stroke();
  }

  const f = opts.figure;
  let drewFigure = !f;
  const figKey = f ? Math.floor(f.x) + Math.floor(f.y) + 1 : 0;
  for (const s of sc.solids) {
    if (!drewFigure && (s.key > figKey || (s.key === figKey && s.zb > f.z))) { drawFigureIn(ctx, v, f, sc); drewFigure = true; }
    drawSolid(ctx, v, s);
  }
  if (!drewFigure) drawFigureIn(ctx, v, f, sc);
}

function drawFigureIn(ctx, v, f, sc) {
  if (f.clip) {
    // Sinking into a hole: the figure shows above the hole's middle line, and inside the hole (two passes,
    // so the two regions add up); the floor in front of the hole hides the rest.
    const pts = holePolygon(v, f.clip);
    const midY = (pts[0][1] + pts[2][1]) / 2;
    for (const pass of [0, 1]) {
      ctx.save();
      ctx.beginPath();
      if (pass === 0) ctx.rect(-1e4, -1e4, 2e4, midY + 1e4);
      else { ctx.moveTo(...pts[0]); pts.slice(1).forEach((p) => ctx.lineTo(...p)); ctx.closePath(); }
      ctx.clip();
      drawFigure(ctx, proj(v, f.x, f.y, f.z), v.a, f, sc.area, false);
      ctx.restore();
    }
    return;
  }
  drawFigure(ctx, proj(v, f.x, f.y, f.z), v.a, f, sc.area, f.shadow !== false);
}

const FACING = { ne: [1, -K], nw: [-1, -K], se: [1, K], sw: [-1, K] };

// The figure (M1): a rounded white body, a dark round head, a small cap in the area's accent showing which way
// it faces, a soft shadow; about one block tall.
export function drawFigure(ctx, [sx, sy], a, f, area, shadow = true) {
  ctx.save();
  ctx.globalAlpha = f.alpha ?? 1;
  const bob = f.bob || 0;
  if (shadow) {
    ctx.beginPath();
    ctx.ellipse(sx, sy, a * 0.34, a * 0.34 * K, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(40,30,30,0.18)';
    ctx.fill();
  }
  const y = sy - bob * a;
  const bw = a * 0.22, bh = a * Z * 0.82;
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(sx - bw, y - bh, bw * 2, bh, bw);
  else ctx.rect(sx - bw, y - bh, bw * 2, bh);
  ctx.fillStyle = '#fafafc';
  ctx.fill();
  ctx.lineWidth = Math.max(1, a * 0.035);
  ctx.strokeStyle = 'rgba(70,64,80,0.75)';
  ctx.stroke();
  const r = a * 0.2;
  const hx = sx, hy = y - bh - r * 0.55;
  const [dx, dy] = FACING[f.facing] || FACING.se;
  const n = Math.hypot(dx, dy);
  const ux = dx / n, uy = dy / n;
  const cap = (ctx2) => {
    ctx2.beginPath();
    ctx2.moveTo(hx + ux * r * 1.75, hy + uy * r * 1.75);
    ctx2.lineTo(hx - uy * r * 0.8, hy + ux * r * 0.8);
    ctx2.lineTo(hx + uy * r * 0.8, hy - ux * r * 0.8);
    ctx2.closePath();
    ctx2.fillStyle = rgb(area.accent, 0.95);
    ctx2.fill();
  };
  const away = f.facing === 'ne' || f.facing === 'nw';
  if (away) cap(ctx);           // facing away, the cap is behind the head
  ctx.beginPath();
  ctx.arc(hx, hy, r, 0, Math.PI * 2);
  ctx.fillStyle = '#3c3a4e';
  ctx.fill();
  if (!away) cap(ctx);
  ctx.restore();
}
