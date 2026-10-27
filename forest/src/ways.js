// ways.js: Winter Forest's ways in and out, and how it talks to the page that holds it. A copy of the maze's
// src/ways.js (claude/escher-maze-ways-plan.md, M21 to M23), changed for the forest (W27: the maze's file names the
// maze's own ways.json, so the forest has its own copy; the maze's file is never edited). The messages are the same:
//
//   the forest, when it loads      way.hello   { tile: "winter-forest", ways: "/ways.json" }   (twice, half a second apart)
//   the host, in reply             way.status  { exits: { wardrobe, "tree-door", arch, slide: "open" | "dormant" } }
//   the host, someone arriving     way.arrive  { entrance: "lamppost" | "wardrobe" | "tree-door" | "arch" }
//   the forest, going through      way.leave   { exit, facing: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw" }
//
// What's different from the maze: the forest is ways-only (W16, "entry": "ways-only" in its ways.json), so only an
// arrival lets you in; until then the page shows the postcard. A host may send arrive more than once (coming back
// through a portal, or "Back"); each moves you to that entrance. Exits the host never mentions count as dormant.
//
// The envelope (postMessage with the page that holds the tile, as the maze):
//   up    { action: "tiles-protocol-up-way-payload",   payload: { v: 1, kind: "hello" | "leave", ... } }
//   down  { action: "tiles-protocol-down-way-payload", payload: { v: 1, kind: "status" | "arrive", ... } }

import WAYS from '../tile/ways.json' with { type: 'json' };

export { WAYS };
export const UP = 'tiles-protocol-up-way-payload';
export const DOWN = 'tiles-protocol-down-way-payload';
export const V = 1;
export const PLAIN_AFTER_MS = 1000;
export const FACINGS = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];

// The compass point nearest a yaw (yaw 0 looks north, -z; turning left increases it).
export function facingOfYaw(yaw) {
  const turns = ((-yaw / (Math.PI * 2)) % 1 + 1) % 1;            // clockwise from north, 0..1
  return FACINGS[Math.round(turns * 8) % 8];
}

// joinWays({ ways, win, onStatus, onArrive }): ways is a ways.json (the forest's by default), win the window (passed
// in for tests). Returns
//   state(exitId)   'waiting' (no answer yet), 'plain' (nobody answered), 'open' or 'dormant' (as the host said)
//   leave(exitId, yaw)   tell the host the traveller went through this exit (only once a host has answered)
//   host / mode     whether a host has answered
export function joinWays({ ways = WAYS, win = window, onStatus = () => {}, onArrive = () => {}, timers = { setTimeout: (f, ms) => setTimeout(f, ms) } } = {}) {
  const inFrame = win.parent && win.parent !== win;
  const exitOf = (id) => ways.exits.find((e) => e.id === id) || null;
  const hasEntrance = (id) => ways.entrances.some((e) => e.id === id);
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
      for (const ex of ways.exits) status.set(ex.id, p.exits[ex.id] === 'open' ? 'open' : 'dormant');   // anything else: dormant
      onStatus();
    } else if (p.kind === 'arrive') {
      if (typeof p.entrance !== 'string' || !hasEntrance(p.entrance)) return;
      mode = 'host';
      onArrive(p.entrance);
    }
  });

  const hello = () => post({ kind: 'hello', tile: ways.tile, ways: '/ways.json' });
  if (inFrame) {
    hello();
    timers.setTimeout(() => { if (mode === 'waiting') hello(); }, 500);
  }
  const plain = () => { if (mode === 'waiting') { mode = 'plain'; onStatus(); } };
  // Opened on its own: plain, once the page has finished setting up (the maze's says so at once).
  timers.setTimeout(plain, inFrame ? PLAIN_AFTER_MS : 0);

  return {
    state(id) {
      if (mode === 'host') return status.get(id) || 'dormant';
      return mode;
    },
    leave(id, yaw = 0) {
      if (mode !== 'host' || !exitOf(id)) return false;
      post({ kind: 'leave', exit: id, facing: facingOfYaw(yaw) });
      return true;
    },
    get host() { return mode === 'host'; },
    get mode() { return mode; },
  };
}
