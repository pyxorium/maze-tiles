// graph.js: the maze's rules, with no drawing (also used by the tests in Node).
//   geometry(room, way)   where a way on sits: the cell you stand on to take it, the path the figure walks
//                         (from that cell out), the blocks it adds (steps, ramps, walkways), wall gaps and notches
//   blockedCells(room)    floor cells nobody walks through
//   findPath(room, a, b)  floor cells from a to b (4 neighbours), or null
//   checkMap(map)         every problem with a map, as plain sentences ([] when it's fine)
//   createNav(map)        where you are, the rooms you've seen, the links you've used, and the trail "back" follows

export const KINDS = ['door', 'hallway', 'stairs', 'ramp', 'drop', 'landing'];
const LEVEL = new Set(['door', 'hallway']);
const BACK_SIDES = new Set(['ne', 'nw']);
const FRONT_SIDES = new Set(['se', 'sw']);
export const MAX_TRAIL = 8;

export const splitTo = (to) => { const i = String(to).indexOf('.'); return i < 0 ? [String(to), ''] : [to.slice(0, i), to.slice(i + 1)]; };
export const wayOf = (room, id) => (room && room.ways.find((w) => w.id === id)) || null;
export const takeable = (w) => w.kind !== 'landing' && !w.closed;
const key = (x, y) => `${x},${y}`;

// A box sitting on one cell, its corner heights listed as (x,y), (x+1,y), (x+1,y+1), (x,y+1).
const box = (x, y, bot, top, role, extra = {}) => ({ x, y, w: 1, d: 1, bot: [bot, bot, bot, bot], top: [top, top, top, top], role, ...extra });
const slopeBox = (x, y, top, role, thin) => ({ x, y, w: 1, d: 1, top, bot: thin ? top.map((t) => t - 0.35) : [0, 0, 0, 0], role, slope: true });

export function geometry(room, w) {
  const [W, D] = room.size;
  const g = { stand: null, path: [], solids: [], inner: [], gap: null, notch: null, door: null, hole: null, fade: false };
  const k = w.at;
  switch (w.kind) {
    case 'door': {
      g.door = { side: w.side, at: k, closed: !!w.closed };
      g.fade = true;
      if (w.side === 'ne') { g.stand = [k, 0]; g.path = [[k + 0.5, 0.5, 0], [k + 0.5, 0.06, 0]]; }
      else { g.stand = [0, k]; g.path = [[0.5, k + 0.5, 0], [0.06, k + 0.5, 0]]; }
      break;
    }
    case 'hallway': {
      if (w.side === 'ne') {
        g.stand = [k, 0]; g.gap = { side: 'ne', at: k };
        g.solids.push(box(k, -1, -0.35, 0, 'floor', { topOnly: true }), box(k, -2, -0.35, 0, 'floor', { topOnly: true, fadeOut: true }));
        g.path = [[k + 0.5, 0.5, 0], [k + 0.5, -1.6, 0]];
      } else if (w.side === 'nw') {
        g.stand = [0, k]; g.gap = { side: 'nw', at: k };
        g.solids.push(box(-1, k, -0.35, 0, 'floor', { topOnly: true }), box(-2, k, -0.35, 0, 'floor', { topOnly: true, fadeOut: true }));
        g.path = [[0.5, k + 0.5, 0], [-1.6, k + 0.5, 0]];
      } else if (w.side === 'se') {
        g.stand = [W - 1, k];
        g.solids.push(box(W, k, -0.35, 0, 'floor'), box(W + 1, k, -0.35, 0, 'floor', { fadeOut: true }));
        g.path = [[W - 0.5, k + 0.5, 0], [W + 1.6, k + 0.5, 0]];
      } else {
        g.stand = [k, D - 1];
        g.solids.push(box(k, D, -0.35, 0, 'floor'), box(k, D + 1, -0.35, 0, 'floor', { fadeOut: true }));
        g.path = [[k + 0.5, D - 0.5, 0], [k + 0.5, D + 1.6, 0]];
      }
      break;
    }
    case 'stairs':
    case 'ramp': {
      const ramp = w.kind === 'ramp';
      if (w.dir === 'up') {
        // Four half-block steps (or a slope) climbing to the wall, which drops to the top step's height there.
        const along = w.side === 'ne' ? (j, z) => [k + 0.5, j, z] : (j, z) => [j, k + 0.5, z];
        g.stand = w.side === 'ne' ? [k, 4] : [4, k];
        g.notch = { side: w.side, at: k, h: 2 };
        for (let j = 0; j < 4; j++) {
          const [x, y] = w.side === 'ne' ? [k, j] : [j, k];
          g.inner.push([x, y]);
          if (ramp) {
            const hi = (4 - j) * 0.5, lo = (3 - j) * 0.5;
            g.solids.push(slopeBox(x, y, w.side === 'ne' ? [hi, hi, lo, lo] : [hi, lo, lo, hi], 'feature', false));
          } else {
            g.solids.push(box(x, y, 0, (4 - j) * 0.5, 'feature'));
          }
        }
        g.path = ramp
          ? [along(4.5, 0), along(4, 0), along(0, 2), along(-0.6, 2)]
          : [along(4.5, 0), along(3.5, 0.5), along(2.5, 1), along(1.5, 1.5), along(0.5, 2), along(-0.6, 2)];
      } else {
        // Three steps (or a slope) going down off the front edge, floating like the floor's own slab.
        const se = w.side === 'se';
        const at = (i, z) => (se ? [W + i, k + 0.5, z] : [k + 0.5, D + i, z]);
        g.stand = se ? [W - 1, k] : [k, D - 1];
        for (let i = 0; i < 3; i++) {
          const [x, y] = se ? [W + i, k] : [k, D + i];
          if (ramp) {
            const a = -i * 0.5, b = -(i + 1) * 0.5;
            g.solids.push(slopeBox(x, y, se ? [a, b, b, a] : [a, a, b, b], 'feature', true));
          } else {
            const top = -(i + 1) * 0.5;
            g.solids.push(box(x, y, top - 0.35, top, 'feature', i === 2 ? { fadeOut: true } : {}));
          }
        }
        g.path = ramp
          ? [at(-0.5, 0), at(0, 0), at(3, -1.5)]
          : [at(-0.5, 0), at(0.5, -0.5), at(1.5, -1), at(2.5, -1.5)];
      }
      break;
    }
    case 'drop': {
      const [x, y] = w.at;
      g.stand = [x, y]; g.hole = { x, y };
      g.path = [[x + 0.5, y + 0.5, 0], [x + 0.5, y + 0.5, -3]];
      break;
    }
    case 'landing': {
      const [x, y] = w.at;
      g.stand = [x, y];
      g.path = [[x + 0.5, y + 0.5, 0], [x + 0.5, y + 0.5, 5]];   // arriving, you fall from above
      break;
    }
    default: break;
  }
  return g;
}

export function markCells(room) {
  const out = [];
  for (const m of room.marks || []) {
    if (m.kind === 'orb' || m.kind === 'pillar' || m.kind === 'obelisk') out.push(m.at);
    if (m.kind === 'blocks') for (const [x, y, w, d] of m.blocks) for (let i = 0; i < w; i++) for (let j = 0; j < d; j++) out.push([x + i, y + j]);
  }
  return out;
}

export function blockedCells(room) {
  const s = new Set();
  for (const c of markCells(room)) s.add(key(c[0], c[1]));
  for (const w of room.ways) {
    const g = geometry(room, w);
    for (const c of g.inner) s.add(key(c[0], c[1]));
    if (g.hole) s.add(key(g.hole.x, g.hole.y));
  }
  return s;
}

const inFloor = (room, x, y) => x >= 0 && y >= 0 && x < room.size[0] && y < room.size[1];

// Breadth-first over floor cells; the end cell may be a blocked one (a hole you walk into).
export function findPath(room, from, to, blocked = blockedCells(room)) {
  const [tx, ty] = to;
  const start = key(from[0], from[1]);
  const prev = new Map([[start, null]]);
  const queue = [from];
  while (queue.length) {
    const [x, y] = queue.shift();
    if (x === tx && y === ty) {
      const out = [];
      for (let c = key(x, y); c; c = prev.get(c)) out.unshift(c.split(',').map(Number));
      return out;
    }
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx, ny = y + dy, nk = key(nx, ny);
      if (!inFloor(room, nx, ny) || prev.has(nk)) continue;
      if (blocked.has(nk) && !(nx === tx && ny === ty)) continue;
      prev.set(nk, key(x, y));
      queue.push([nx, ny]);
    }
  }
  return null;
}

const SIDE_OK = {
  door: (w) => BACK_SIDES.has(w.side),
  hallway: (w) => BACK_SIDES.has(w.side) || FRONT_SIDES.has(w.side),
  stairs: (w) => (w.dir === 'up' ? BACK_SIDES.has(w.side) : w.dir === 'down' && FRONT_SIDES.has(w.side)),
  ramp: (w) => (w.dir === 'up' ? BACK_SIDES.has(w.side) : w.dir === 'down' && FRONT_SIDES.has(w.side)),
  drop: (w) => Array.isArray(w.at),
  landing: (w) => Array.isArray(w.at),
};

export function partnersMatch(a, b) {
  if (LEVEL.has(a.kind)) return LEVEL.has(b.kind);
  if (a.kind === 'stairs' || a.kind === 'ramp') return b.kind === a.kind && a.dir !== b.dir;
  if (a.kind === 'drop') return b.kind === 'landing';
  return false;
}

export function checkMap(map) {
  const bad = [];
  const rooms = map.rooms || {};
  const ids = Object.keys(rooms);
  if (!rooms[map.start?.room]) bad.push(`The start room "${map.start?.room}" doesn't exist.`);

  for (const id of ids) {
    const room = rooms[id];
    const where = `${id}`;
    if (!map.areas[room.area]) bad.push(`${where}: unknown area "${room.area}".`);
    const [W, D] = room.size || [];
    if (!(W >= 1 && W <= 8 && D >= 1 && D <= 8)) bad.push(`${where}: the floor must be 1 to 8 blocks each way.`);
    if (!Array.isArray(room.mapAt)) bad.push(`${where}: no spot on the map (mapAt).`);
    const takeableCount = room.ways.filter((w) => w.kind !== 'landing').length;
    if (takeableCount < 1 || takeableCount > 3) bad.push(`${where}: has ${takeableCount} ways on (1 to 3 allowed).`);
    const seen = new Set();
    const used = new Map();        // cell -> way id, for cells a way's steps or hole take up
    const marks = new Set(markCells(room).map((c) => key(c[0], c[1])));
    const blocked = blockedCells(room);
    for (const w of room.ways) {
      const at = `${where}.${w.id}`;
      if (seen.has(w.id)) bad.push(`${at}: the id is used twice.`);
      seen.add(w.id);
      if (!KINDS.includes(w.kind)) { bad.push(`${at}: unknown kind "${w.kind}".`); continue; }
      if (!SIDE_OK[w.kind](w)) { bad.push(`${at}: a ${w.kind}${w.dir ? ` ${w.dir}` : ''} can't go on side "${w.side}".`); continue; }
      const g = geometry(room, w);
      const [sx, sy] = g.stand;
      if (!inFloor(room, sx, sy)) { bad.push(`${at}: doesn't fit in the room (its standing cell is outside the floor).`); continue; }
      if (!Array.isArray(w.at) && !(w.at >= 0 && w.at < (w.side === 'ne' || w.side === 'sw' ? W : D))) bad.push(`${at}: "at" ${w.at} is off the ${w.side} side.`);
      for (const [x, y] of g.inner) {
        if (!inFloor(room, x, y)) bad.push(`${at}: its steps run outside the floor.`);
        const c = key(x, y);
        if (used.has(c)) bad.push(`${at}: its steps overlap ${used.get(c)}.`);
        if (marks.has(c)) bad.push(`${at}: its steps overlap a landmark.`);
        used.set(c, w.id);
      }
      if (g.hole) { const c = key(g.hole.x, g.hole.y); if (used.has(c)) bad.push(`${at}: the hole overlaps ${used.get(c)}.`); used.set(c, w.id); if (marks.has(c)) bad.push(`${at}: the hole is under a landmark.`); }
      if (w.kind !== 'drop' && blocked.has(key(sx, sy))) bad.push(`${at}: its standing cell is blocked.`);

      if (w.kind === 'landing') { if (w.to) bad.push(`${at}: a landing leads nowhere (no "to").`); continue; }
      if (w.closed) { if (w.kind !== 'door') bad.push(`${at}: only a door can be closed.`); if (w.to) bad.push(`${at}: a closed door has no "to".`); continue; }
      if (w.oneWay && w.kind !== 'drop') bad.push(`${at}: only a drop is one way.`);
      if (w.kind === 'drop' && !w.oneWay) bad.push(`${at}: a drop must be marked oneWay.`);
      const [tr, tw] = splitTo(w.to);
      const target = wayOf(rooms[tr], tw);
      if (!target) { bad.push(`${at}: leads to "${w.to}", which doesn't exist.`); continue; }
      if (!partnersMatch(w, target)) bad.push(`${at}: a ${w.kind}${w.dir ? ` ${w.dir}` : ''} can't arrive at ${w.to} (a ${target.kind}${target.dir ? ` ${target.dir}` : ''}).`);
      if (w.kind !== 'drop' && target.to !== `${id}.${w.id}`) bad.push(`${at}: leads to ${w.to}, which doesn't lead back (it says "${target.to}").`);
    }
    // Every place you can stand on arrival reaches every way on in the room.
    const sources = room.ways.filter((w) => w.kind === 'landing' || (takeable(w) && w.kind !== 'drop')).map((w) => [w.id, geometry(room, w).stand]);
    if (map.start?.room === id) {
      sources.push(['the start', map.start.at]);
      if (blocked.has(key(map.start.at[0], map.start.at[1])) || !inFloor(room, map.start.at[0], map.start.at[1])) bad.push(`${where}: the start cell is blocked or outside the floor.`);
    }
    for (const [name, from] of sources) {
      for (const w of room.ways) {
        if (w.kind === 'landing') continue;
        if (!findPath(room, from, geometry(room, w).stand, blocked)) bad.push(`${where}: from ${name} you can't walk to ${w.id}.`);
      }
    }
  }

  // Reachable from the start, and the start reachable from everywhere (a drop never traps you).
  const edges = new Map(ids.map((id) => [id, new Set()]));
  for (const id of ids) for (const w of rooms[id].ways) if (takeable(w) && w.to) { const [tr] = splitTo(w.to); if (rooms[tr]) edges.get(id).add(tr); }
  const reach = (from, next) => { const s = new Set([from]); const q = [from]; while (q.length) { for (const n of next(q.shift())) if (!s.has(n)) { s.add(n); q.push(n); } } return s; };
  if (rooms[map.start?.room]) {
    const fwd = reach(map.start.room, (r) => edges.get(r));
    for (const id of ids) if (!fwd.has(id)) bad.push(`${id}: can't be reached from the start.`);
    const back = reach(map.start.room, (r) => ids.filter((o) => edges.get(o).has(r)));
    for (const id of ids) if (!back.has(id)) bad.push(`${id}: there's no way from it back to the start.`);
  }
  return bad;
}

// The link a way on makes, as a key for the map card: two-way links are the same both ways round.
export function linkKey(fromRoom, way) {
  const a = `${fromRoom}.${way.id}`;
  if (way.kind === 'drop') return `${a}>${way.to}`;
  return [a, way.to].sort().join('|');
}

export function createNav(map) {
  const s = { room: map.start.room, visited: new Set([map.start.room]), used: new Set(), trail: [], fell: false };
  const nav = {
    state: s,
    // What taking this way on in the current room would do, or null (a landing, a closed door, no such way).
    target(wayId) {
      const room = map.rooms[s.room];
      const way = wayOf(room, wayId);
      if (!way || !takeable(way)) return null;
      const [toRoom, toId] = splitTo(way.to);
      const toWay = wayOf(map.rooms[toRoom], toId);
      if (!toWay) return null;
      return { fromRoom: s.room, way, toRoom, toWay };
    },
    // Back: the way on you arrived by, while the trail lasts (a drop clears it).
    backTarget() {
      const e = s.trail[s.trail.length - 1];
      return e && e.room === s.room ? nav.target(e.via) : null;
    },
    commit(t, { back = false } = {}) {
      s.used.add(linkKey(t.fromRoom, t.way));
      s.visited.add(t.toRoom);
      s.fell = t.way.kind === 'drop';
      if (s.fell) s.trail = [];
      else if (back) s.trail.pop();
      else { s.trail.push({ room: t.toRoom, via: t.toWay.id }); if (s.trail.length > MAX_TRAIL) s.trail.shift(); }
      s.room = t.toRoom;
    },
  };
  return nav;
}
