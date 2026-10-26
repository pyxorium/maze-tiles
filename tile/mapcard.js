// mapcard.js: the map card (plan M5). A map of links, not a floor plan: the maze doesn't fit one real space.
// Rooms you've found are small squares in their area's colour, at hand-placed spots (mapAt); lines are the
// ways on you've used (an arrow points up a flight; the drop is dashed); short stubs are ways on you've seen
// but not taken; your room is marked. The loop shows as it is: a ring with every arrow the same way round.

import { linkKey, splitTo, takeable } from './graph.js';
import { rgb } from './render.js';

const G = 84;        // grid step
const S = 30;        // square
const PAD = 48;      // room for the names under the squares
const STUB = { ne: [0.7, -0.7], nw: [-0.7, -0.7], se: [0.7, 0.7], sw: [-0.7, 0.7] };

export function mapSize(map) {
  let mx = 0, my = 0;
  for (const r of Object.values(map.rooms)) { mx = Math.max(mx, r.mapAt[0]); my = Math.max(my, r.mapAt[1]); }
  return { w: PAD * 2 + mx * G + S, h: PAD * 2 + my * G + S + 16 };
}

function arrow(ctx, x1, y1, x2, y2, size) {
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const a = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.moveTo(mx + Math.cos(a) * size, my + Math.sin(a) * size);
  ctx.lineTo(mx + Math.cos(a + 2.5) * size, my + Math.sin(a + 2.5) * size);
  ctx.lineTo(mx + Math.cos(a - 2.5) * size, my + Math.sin(a - 2.5) * size);
  ctx.closePath();
  ctx.fill();
}

// Draws into ctx (already scaled to CSS pixels), at the size mapSize gives.
export function drawMapCard(ctx, map, state) {
  const { w, h } = mapSize(map);
  ctx.clearRect(0, 0, w, h);
  const at = (id) => { const [x, y] = map.rooms[id].mapAt; return [PAD + x * G + S / 2, PAD + y * G + S / 2]; };
  const ink = '#4a4440';

  // Links you've used.
  const drawn = new Set();
  for (const id of state.visited) {
    for (const way of map.rooms[id].ways) {
      if (!takeable(way) || !way.to) continue;
      const k = linkKey(id, way);
      if (!state.used.has(k) || drawn.has(k)) continue;
      drawn.add(k);
      const [tr] = splitTo(way.to);
      let [x1, y1] = at(id), [x2, y2] = at(tr);
      ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.lineWidth = 2;
      ctx.setLineDash(way.kind === 'drop' ? [5, 5] : []);
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.setLineDash([]);
      if (way.kind === 'drop') arrow(ctx, x1, y1, x2, y2, 7);
      else if (way.kind === 'stairs' || way.kind === 'ramp') {
        if (way.dir === 'down') [x1, y1, x2, y2] = [x2, y2, x1, y1];
        arrow(ctx, x1, y1, x2, y2, 7);          // pointing up the flight
      }
    }
  }
  // Stubs: ways on you've seen in rooms you've visited but not taken (no spoilers: they point by the side the
  // way on is on, not at where it leads).
  for (const id of state.visited) {
    const room = map.rooms[id];
    const [cx, cy] = at(id);
    for (const way of room.ways) {
      if (way.kind === 'landing') continue;
      if (way.to && state.used.has(linkKey(id, way))) continue;
      const d = way.kind === 'drop' ? [0, 1] : STUB[way.side] || [0, 1];
      ctx.strokeStyle = way.closed ? 'rgb(214,150,50)' : 'rgba(74,68,64,0.6)';
      ctx.lineWidth = 2;
      ctx.setLineDash(way.kind === 'drop' ? [3, 3] : []);
      ctx.beginPath();
      ctx.moveTo(cx + d[0] * S * 0.55, cy + d[1] * S * 0.55);
      ctx.lineTo(cx + d[0] * S * 1.05, cy + d[1] * S * 1.05);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }
  // Rooms.
  ctx.font = '11px system-ui, -apple-system, "Segoe UI", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  for (const id of state.visited) {
    const room = map.rooms[id];
    const area = map.areas[room.area];
    const [cx, cy] = at(id);
    const here = id === state.room;
    ctx.fillStyle = rgb(area.floor, 1.06);
    ctx.strokeStyle = here ? '#2e2a2a' : rgb(area.wall, 0.9);
    ctx.lineWidth = here ? 3 : 2;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(cx - S / 2, cy - S / 2, S, S, 5); else ctx.rect(cx - S / 2, cy - S / 2, S, S);
    ctx.fill(); ctx.stroke();
    if (here) {
      ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI * 2); ctx.fillStyle = '#ffffff'; ctx.fill();
      ctx.lineWidth = 1.5; ctx.strokeStyle = '#2e2a2a'; ctx.stroke();
    }
    ctx.fillStyle = '#3a3532';
    ctx.fillText(room.name, cx, cy + S / 2 + 4);
  }
}
