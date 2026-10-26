// ways.js: the maze's ways in and out, and how it talks to the page that holds it (claude/escher-maze-ways-plan.md,
// decisions M17 to M25). The maze has one way out and one way in, both at the Great Hall's obelisk. Which tile
// the obelisk leads to is never in the maze: its signpost (a record in thunderbird.cafe's account, named in
// tile/ways.json) says, and only a host can read it, since a tile can't reach the network. So:
//
//   the maze, when it loads      way.hello   { tile: "maze", ways: "/ways.json" }   (twice, half a second apart)
//   the host, in reply           way.status  { exits: { obelisk: "open" | "dormant" } }
//   the host, someone arriving   way.arrive  { entrance: "obelisk" }
//   the maze, stepping in        way.leave   { exit: "obelisk", facing: "ne" | "se" | "sw" | "nw" }
//
// No reply within about a second: a plain viewer (lexicographer.space, a gallery, the tile opened on its own),
// and the obelisk offers its fallback address in a new tab instead. The maze never says who is travelling.
//
// The envelope (postMessage with the page that holds the tile; the tiles protocols' naming, as the Rooms lab's
// live tiles use):
//   up    { action: "tiles-protocol-up-way-payload",   payload: { v: 1, kind: "hello" | "leave", ... } }
//   down  { action: "tiles-protocol-down-way-payload", payload: { v: 1, kind: "status" | "arrive", ... } }

import WAYS from '../tile/ways.json' with { type: 'json' };

export { WAYS };
export const UP = 'tiles-protocol-up-way-payload';
export const DOWN = 'tiles-protocol-down-way-payload';
export const V = 1;
export const PLAIN_AFTER_MS = 1000;
const FACINGS = new Set(['ne', 'se', 'sw', 'nw']);

export const exitOf = (id) => WAYS.exits.find((e) => e.id === id) || null;
export const hasEntrance = (id) => WAYS.entrances.some((e) => e.id === id);

// joinWays({ win, onStatus, onArrive }): win is the window (passed in for tests). Returns
//   state(exitId)   'waiting' (no answer yet), 'plain' (nobody answered), 'open' or 'dormant' (as the host said)
//   leave(exitId, facing)   tell the host the traveller left by this exit (only once a host has answered)
//   host            true once a host has answered
export function joinWays({ win = window, onStatus = () => {}, onArrive = () => {}, timers = { setTimeout: (f, ms) => setTimeout(f, ms) } } = {}) {
  const inFrame = win.parent && win.parent !== win;
  let mode = 'waiting';                                  // 'host', 'plain' or 'waiting'
  const status = new Map();
  const post = (payload) => { if (inFrame) win.parent.postMessage({ action: UP, payload: { v: V, ...payload } }, '*'); };

  win.addEventListener('message', (e) => {
    if (!inFrame || e.source !== win.parent) return;
    const d = e.data;
    if (!d || d.action !== DOWN || !d.payload || d.payload.v !== V) return;
    const p = d.payload;
    if (p.kind === 'status') {
      if (!p.exits || typeof p.exits !== 'object') return;
      mode = 'host';
      for (const ex of WAYS.exits) {
        const s = p.exits[ex.id];
        status.set(ex.id, s === 'open' ? 'open' : 'dormant');      // anything else counts as dormant
      }
      onStatus();
    } else if (p.kind === 'arrive') {
      if (typeof p.entrance !== 'string' || !hasEntrance(p.entrance)) return;
      mode = 'host';
      onArrive(p.entrance);
    }
  });

  if (inFrame) {
    post({ kind: 'hello', tile: WAYS.tile, ways: '/ways.json' });
    timers.setTimeout(() => { if (mode === 'waiting') post({ kind: 'hello', tile: WAYS.tile, ways: '/ways.json' }); }, 500);
  }
  const plain = () => { if (mode === 'waiting') { mode = 'plain'; onStatus(); } };
  if (inFrame) timers.setTimeout(plain, PLAIN_AFTER_MS); else plain();

  return {
    state(id) {
      if (mode === 'host') return status.get(id) || 'dormant';
      return mode;
    },
    leave(id, facing) {
      if (mode !== 'host' || !exitOf(id)) return false;
      post({ kind: 'leave', exit: id, facing: FACINGS.has(facing) ? facing : 'ne' });
      return true;
    },
    get host() { return mode === 'host'; },
    get mode() { return mode; },
  };
}
