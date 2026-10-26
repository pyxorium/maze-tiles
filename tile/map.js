// map.js: the Escher maze's rooms (plan: claude/escher-maze-plan.md, decisions M1 and M4).
//
// Plain data, bundled in the tile. Each room is drawn by one engine (render.js); every way on is a door the
// maze runs, so rooms never have to fit one real space. test/map.test.mjs checks that the links are honest:
// every `to` exists, every two-way path points back, only drops are one-way, every room can be reached from
// the start and the start from every room.
//
// Coordinates: a room's floor is size [W, D] blocks, x across to the lower right, y across to the lower left.
// Its two back walls stand along the top edges: "ne" (the upper-right wall, along x) and "nw" (the upper-left
// wall, along y). The two front edges are open: "se" (lower right, x = W) and "sw" (lower left, y = D).
//
// A way on: { id, kind, side, at, to }   (`at` = the cell along that side)
//   door      in a back wall (ne, nw)
//   hallway   an opening: a gap in a back wall, or a walkway off a front edge
//   stairs    dir "up": a flight of half-block steps climbing to a back wall and over it (needs 5 blocks of depth)
//             dir "down": steps going down off a front edge
//   ramp      as stairs, a slope instead of steps
//   drop      a hole in the floor at `at: [x, y]`, one way (oneWay: true), to a landing
//   landing   where a drop lands, `at: [x, y]`; no way back up
// `to` is "room.way": you arrive at that way, facing into the room. A door may be `closed` (step 1's
// Lantern room) with a `note` instead of a `to`.
//
// marks: landmarks. orb (a pillar with an orb in the area's accent), pillar, obelisk, arches (blind arches
// on a back wall), numeral (on a back wall), railing (along the front edges), blocks: [x, y, w, d, h].
// mapAt: the room's spot on the map card (M5).

export const MAP = {
  version: 1,
  start: { room: 'courtyard', at: [2, 4], facing: 'se' },

  // M1's colours (RGB). Shading is fixed: top x1.12, left face x0.86, right face x0.68.
  areas: {
    sand:  { name: 'Sand and rose',   bg: [246, 238, 226], floor: [226, 206, 170], wall: [206, 128, 118], feature: [176, 156, 196], accent: [240, 176, 70],  pillar: [176, 156, 196] },
    slate: { name: 'Slate and teal',  bg: [226, 234, 238], floor: [168, 182, 196], wall: [64, 118, 128],  feature: [118, 190, 188], accent: [240, 122, 92],  pillar: [200, 210, 220] },
    ivory: { name: 'Ivory and ochre', bg: [238, 231, 215], floor: [214, 202, 176], wall: [232, 222, 198], feature: [214, 164, 76],  accent: [66, 96, 176],   pillar: [196, 186, 166] },
  },

  rooms: {
    // ---- Area 1: sand and rose -------------------------------------------------------------------------
    courtyard: {
      name: 'Courtyard', area: 'sand', size: [6, 6], mapAt: [2, 3],
      marks: [{ kind: 'orb', at: [2, 2] }],
      ways: [
        { id: 'gallery', kind: 'hallway', side: 'ne', at: 1, to: 'gallery.court' },
        { id: 'climb', kind: 'stairs', dir: 'up', side: 'ne', at: 4, to: 'landing1.down' },
        { id: 'well', kind: 'door', side: 'nw', at: 3, to: 'well.court' },
      ],
    },
    gallery: {
      name: 'Gallery', area: 'sand', size: [8, 3], mapAt: [3, 3],
      marks: [{ kind: 'arches', side: 'ne', from: 0, count: 5 }],
      ways: [
        { id: 'court', kind: 'hallway', side: 'sw', at: 1, to: 'courtyard.gallery' },
        { id: 'closet', kind: 'door', side: 'ne', at: 6, to: 'closet.gallery' },
      ],
    },
    well: {
      name: 'Well room', area: 'sand', size: [4, 4], mapAt: [2, 4],
      marks: [],
      ways: [
        { id: 'court', kind: 'hallway', side: 'se', at: 1, to: 'courtyard.well' },
        { id: 'hole', kind: 'drop', at: [1, 2], to: 'cellar.landing', oneWay: true },
      ],
    },
    closet: {
      name: 'Closet', area: 'sand', size: [2, 2], mapAt: [4, 3],
      marks: [],
      ways: [
        { id: 'gallery', kind: 'hallway', side: 'sw', at: 0, to: 'gallery.closet' },
        { id: 'hall', kind: 'hallway', side: 'se', at: 0, to: 'hall.closet' },
      ],
    },

    // ---- Area 2: slate and teal, the Penrose loop (each flight up arrives at the foot of the next) --------
    landing1: {
      name: 'Landing I', area: 'slate', size: [6, 6], mapAt: [1, 2],
      marks: [{ kind: 'orb', at: [2, 1] }, { kind: 'numeral', text: 'I', side: 'nw', at: 2 }],
      ways: [
        { id: 'foot', kind: 'stairs', dir: 'down', side: 'sw', at: 1, to: 'landing4.climb' },
        { id: 'climb', kind: 'stairs', dir: 'up', side: 'ne', at: 5, to: 'landing2.foot' },
        { id: 'down', kind: 'stairs', dir: 'down', side: 'se', at: 5, to: 'courtyard.climb' },
      ],
    },
    landing2: {
      name: 'Landing II', area: 'slate', size: [6, 6], mapAt: [0, 1],
      marks: [{ kind: 'pillar', at: [2, 1] }, { kind: 'numeral', text: 'II', side: 'nw', at: 2 }],
      ways: [
        { id: 'foot', kind: 'stairs', dir: 'down', side: 'sw', at: 1, to: 'landing1.climb' },
        { id: 'climb', kind: 'stairs', dir: 'up', side: 'ne', at: 5, to: 'landing3.foot' },
      ],
    },
    landing3: {
      name: 'Landing III', area: 'slate', size: [6, 6], mapAt: [1, 0],
      marks: [{ kind: 'pillar', at: [2, 1] }, { kind: 'numeral', text: 'III', side: 'nw', at: 2 }],
      ways: [
        { id: 'foot', kind: 'stairs', dir: 'down', side: 'sw', at: 1, to: 'landing2.climb' },
        { id: 'climb', kind: 'stairs', dir: 'up', side: 'ne', at: 5, to: 'landing4.foot' },
        { id: 'lookout', kind: 'stairs', dir: 'up', side: 'nw', at: 4, to: 'lookout.down' },
      ],
    },
    landing4: {
      name: 'Landing IV', area: 'slate', size: [6, 6], mapAt: [2, 1],
      marks: [{ kind: 'pillar', at: [2, 1] }, { kind: 'numeral', text: 'IV', side: 'nw', at: 2 }],
      ways: [
        { id: 'foot', kind: 'stairs', dir: 'down', side: 'sw', at: 1, to: 'landing3.climb' },
        { id: 'climb', kind: 'stairs', dir: 'up', side: 'ne', at: 5, to: 'landing1.foot' },
      ],
    },

    // ---- Area 3: ivory and ochre --------------------------------------------------------------------------
    hall: {
      // Bigger on the inside: the 2x2 Closet opens into it through a small door in a tall wall.
      name: 'Great Hall', area: 'ivory', size: [8, 8], mapAt: [5, 2], wallHeight: 4.5,
      marks: [{ kind: 'obelisk', at: [3, 4] }],
      ways: [
        { id: 'closet', kind: 'door', side: 'nw', at: 2, to: 'closet.hall' },
        { id: 'lantern', kind: 'ramp', dir: 'up', side: 'ne', at: 5, to: 'lantern.hall' },
        { id: 'cellar', kind: 'stairs', dir: 'down', side: 'se', at: 5, to: 'cellar.up' },
      ],
    },
    cellar: {
      name: 'Cellar', area: 'ivory', size: [5, 5], mapAt: [5, 4],
      marks: [],
      ways: [
        { id: 'landing', kind: 'landing', at: [2, 3] },
        { id: 'up', kind: 'stairs', dir: 'up', side: 'nw', at: 1, to: 'hall.cellar' },
      ],
    },
    lantern: {
      name: 'Lantern room', area: 'ivory', size: [5, 5], mapAt: [5, 1],
      marks: [],
      ways: [
        { id: 'hall', kind: 'ramp', dir: 'down', side: 'sw', at: 2, to: 'hall.lantern' },
        { id: 'door', kind: 'door', side: 'ne', at: 2, closed: true, note: 'This door is closed, for now.' },
        { id: 'lookout', kind: 'hallway', side: 'nw', at: 2, to: 'lookout.lantern' },
      ],
    },
    lookout: {
      // Its stairs go down into the loop, so this area sits somehow "above" a loop that never ends.
      name: 'Lookout', area: 'ivory', size: [6, 4], mapAt: [4, 0],
      marks: [{ kind: 'railing' }],
      ways: [
        { id: 'lantern', kind: 'hallway', side: 'se', at: 1, to: 'lantern.lookout' },
        { id: 'down', kind: 'stairs', dir: 'down', side: 'sw', at: 3, to: 'landing3.lookout' },
      ],
    },
  },
};
