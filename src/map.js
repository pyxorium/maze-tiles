// map.js: the Escher maze's rooms (plans: claude/escher-maze-plan.md, decisions M1 and M4, and
// claude/escher-maze-3d-plan.md, M16: the rooms checked for over the shoulder).
//
// Plain data, bundled in the tile. Each room is built in 3D by one engine (world.js); every way on is a door the
// maze runs, so rooms never have to fit one real space. test/map.test.mjs checks that the links are honest:
// every `to` exists, every two-way path points back, only drops are one-way, every room can be reached from
// the start and the start from every room.
//
// Coordinates: a room's floor is size [W, D] blocks, x one way and y the other (the names come from the
// isometric step 1: x ran to the lower right, y to the lower left). Its two walls stand along x = 0 and y = 0:
// "ne" (along x, at y = 0) and "nw" (along y, at x = 0). The two other edges are open, with a low kerb: "se"
// (x = W) and "sw" (y = D). Rule for over the shoulder (M16): you arrive facing the room's longest open stretch.
//
// A way on: { id, kind, side, at, to }   (`at` = the cell along that side)
//   door      in a back wall (ne, nw)
//   hallway   an opening: a gap in a back wall, or a walkway off a front edge
//   stairs    dir "up": a flight of half-block steps climbing to a back wall and over it (needs 5 blocks of depth)
//             dir "down": steps going down off a front edge
//   ramp      as stairs, a slope instead of steps
//   drop      a hole in the floor at `at: [x, y]`, one way (oneWay: true), to a landing
//   landing   where a drop lands, `at: [x, y]`, turning you to `facing` as you fall; no way back up
// `to` is "room.way": you arrive at that way, facing into the room. A door may be `closed` (step 1's
// Lantern room) with a `note` instead of a `to`. A closed door can be a portal (M28, 0.4.0): `portal: { exit }` names
// its exit in tile/ways.json, as an obelisk waystone does; its signpost says where it leads, and while it leads
// nowhere it stays closed and says its note.
//
// marks: landmarks. orb (a pillar with an orb in the area's accent), pillar, obelisk, arches (blind arches
// on a back wall), numeral (on a back wall), railing (along the open edges, instead of the kerb), blocks:
// [x, y, w, d, h]. An obelisk can be a waystone (M9): `waystone: { exit }` names its exit in tile/ways.json, where
// its signpost (the record that says where it leads) is named. A room's `entrances` are where travellers from
// other tiles arrive: `{ id, at: [x, y], facing }`, the id as in tile/ways.json.
// mapAt: the room's spot on the map card (M5).

export const MAP = {
  version: 1,
  start: { room: 'courtyard', at: [2, 4], facing: 'ne' },

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
        { id: 'gallery', kind: 'door', side: 'ne', at: 1, to: 'gallery.court' },
        { id: 'climb', kind: 'stairs', dir: 'up', side: 'ne', at: 4, to: 'landing1.down' },
        { id: 'well', kind: 'door', side: 'nw', at: 3, to: 'well.court' },
      ],
    },
    gallery: {
      // Both ways in are at its ends, so you always arrive looking down its 8 blocks (M16).
      name: 'Gallery', area: 'sand', size: [8, 3], mapAt: [3, 3],
      marks: [{ kind: 'arches', side: 'ne', from: 0, count: 8 }],
      ways: [
        { id: 'court', kind: 'hallway', side: 'se', at: 1, to: 'courtyard.gallery' },
        { id: 'closet', kind: 'door', side: 'nw', at: 1, to: 'closet.gallery' },
      ],
    },
    well: {
      // 5 x 5 (M16), so you can walk round the hole and look in: the Cellar is far below (M12).
      name: 'Well room', area: 'sand', size: [5, 5], mapAt: [2, 4],
      marks: [],
      ways: [
        { id: 'court', kind: 'hallway', side: 'se', at: 1, to: 'courtyard.well' },
        { id: 'hole', kind: 'drop', at: [2, 2], to: 'cellar.landing', oneWay: true },
      ],
    },
    closet: {
      // Cramped on purpose (M16): the camera rises over your head, and the Great Hall then feels vast.
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
      // The obelisk is the maze's one way out and one way in (claude/escher-maze-ways-plan.md, M17, M18): exit and
      // entrance "obelisk" in tile/ways.json. Travellers from other tiles arrive beside it, facing down the hall
      // towards the Cellar's stairs.
      marks: [{ kind: 'obelisk', at: [3, 4], waystone: { exit: 'obelisk' } }],
      entrances: [{ id: 'obelisk', at: [3, 5], facing: 'se' }],
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
        { id: 'landing', kind: 'landing', at: [2, 3], facing: 'ne' },   // you land facing the stairs up (M12)
        { id: 'up', kind: 'stairs', dir: 'up', side: 'nw', at: 1, to: 'hall.cellar' },
      ],
    },
    lantern: {
      name: 'Lantern room', area: 'ivory', size: [5, 5], mapAt: [5, 1],
      marks: [],
      // The second door (M28, M31 to M33): the maze's second way out and in, exit and entrance "second-door" in
      // tile/ways.json. Travellers through it arrive a block in front of it, facing into the room, the door at their back.
      entrances: [{ id: 'second-door', at: [2, 1], facing: 'sw' }],
      ways: [
        { id: 'hall', kind: 'ramp', dir: 'down', side: 'sw', at: 2, to: 'hall.lantern' },
        { id: 'door', kind: 'door', side: 'ne', at: 2, closed: true, note: 'This door is closed, for now.', portal: { exit: 'second-door' } },
        { id: 'lookout', kind: 'hallway', side: 'nw', at: 2, to: 'lookout.lantern' },
      ],
    },
    lookout: {
      // Its stairs go down into the loop, so this area sits somehow "above" a loop that never ends.
      // 6 x 5 (M16): arriving up the stairs from Landing III you face five blocks, not four.
      name: 'Lookout', area: 'ivory', size: [6, 5], mapAt: [4, 0],
      marks: [{ kind: 'railing' }],
      ways: [
        { id: 'lantern', kind: 'hallway', side: 'se', at: 1, to: 'lantern.lookout' },
        { id: 'down', kind: 'stairs', dir: 'down', side: 'sw', at: 3, to: 'landing3.lookout' },
      ],
    },
  },
};
