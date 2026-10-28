# Escher maze

An impossible, wander-around world inside one web tile, seen from just behind your shoulder. Every way on
(a door, stairs, a ramp, an opening, a hole in the floor) shows the room it leads to, and you walk through
with no cut, so the rooms never have to fit one real 3D space: four flights all going up bring you back where
you began, a hole drops you into a cellar with no way back up, and a tiny closet opens into a vast hall.

A proof of concept for thunderbird.cafe. This is the real maze: twelve rooms in three areas, drawn in 3D with
three.js, see-through openings two deep, and the real fall. The isometric step 1 it grew from is kept,
frozen, in `iso\`. Step 2 will put one real tile behind the Lantern room's closed door.

## Playing

Free walking (the default): hold ↑ or W to walk, ↓ or S to back up, ← → or A D to turn, or drag across the
view to turn. On a phone, put your left thumb down in the lower left: a soft circle appears, up to walk
(further is faster), down to back up, sideways to turn; drag on the right side to turn.

Step and turn (in the gear menu): one block or a quarter turn at a time, with the keys or the four arrow
buttons. Calmer, and easy with keys alone.

**The obelisk** in the Great Hall is the maze's one way out (and the way in for travellers from other tiles).
Where it leads is never in the maze: its signpost, a record in thunderbird.cafe's account, says, and only the
page holding the tile (a host such as Raku or the Rooms lab, one day) can read it. With a host that says it leads
somewhere, its tip glows and stepping in sends you on; with an empty signpost it says "This doesn't lead anywhere
yet."; with no host at all (lexicographer.space, a gallery) it offers https://thunderbird.cafe/way/maze/obelisk
in a new tab, which says where it leads. See "Ways" below.

**Map** (or M) shows the rooms you've found and the ways you've taken. The gear menu also has **Back to the
start** (the map is kept) and **Reduce motion** (taken from the device's own setting): the fall and the
swoop through doorways become quick fades. Nothing is saved: a reload starts again in the Courtyard.

## The folders

- `src\` the maze's code: `map.js` (the rooms), `graph.js` (the map's rules), `walk.js` (walking, gates, the
  hole, how rooms are placed against each other, the openings two deep), `world.js` (a room in 3D),
  `view.js` (drawing, two deep, through the stencil buffer), `main.js` (moving, the camera, the fall),
  `controls.js` (keys, dragging, the joystick, the arrow buttons), `ui.js` (the map card, the gear menu,
  notes), `mapcard.js`.
- `tile\` the tile as published: `index.html` (with the tile's security policy), `maze.css`, `maze.js` (`src\`
  and three.js bundled into one script by `npm run build`), `ways.json` (its ways in and out), and the card
  pictures `icon.png` and `banner.png`.
- `lexicons\` the two record kinds for ways: `cafe.thunderbird.way.place` and `cafe.thunderbird.way.signpost`.
- `site\` the fallback pages for exits (https://thunderbird.cafe/way/maze/obelisk), copied into the site by
  `scripts\copy-to-site.mjs`.
- `dev\` `npm run dev`: the maze on this computer at http://127.0.0.1:5200/, in tile-sized frames at
  http://127.0.0.1:5200/dev/frame.html, held by a stand-in host at http://127.0.0.1:5200/dev/host.html (the
  obelisk open, dormant, or no host; send a traveller in), and the card pictures at
  http://127.0.0.1:5200/dev/card-art.html.
- `test\` `npm test`: the map's rules (every link honest, nothing traps you, the loop, the drop, the closet,
  the rooms suited to over the shoulder), walking (free and step and turn, the hole, every opening placed right,
  two deep), publishing to a stand-in server. `test\browser\check.mjs` walks the whole maze in a browser (needs
  Playwright; run in the build chat).
- `scripts\` `build.mjs` builds `tile\maze.js`; `publish.mjs` publishes the tile from thunderbird.cafe; `lib\`
  holds the record-building code copied from rooms-lab (the Foundry's own).
- `iso\` the isometric step 1, frozen: its own tile, map copy, dev page (`npm run dev-iso`,
  http://127.0.0.1:5201/), tests (part of `npm test`) and publish settings. Not published unless you choose to.
- `lab\` the over-the-shoulder look test (open `lab\shoulder-test.html`), built from the frozen map.

## Changing the rooms

Edit `src\map.js` (its top comment explains the coordinates and kinds of way on), then `npm test`: it says
in plain words what's wrong (a way that doesn't lead back, steps through a landmark, a room you can't get out
of, an arrival that faces a wall). Then `npm run build` and check the look with `npm run dev`.

`npm run build` borrows three.js and esbuild from `C:\thunderbird-cafe\web-tile-foundry\node_modules` (read
only); the maze has no packages of its own. Commit `tile\maze.js` after building.

## Publishing

In `C:\thunderbird-cafe\maze-tiles`:

```
node scripts/publish.mjs --dry-run
node scripts/publish.mjs
```

It checks that `tile\maze.js` is built from the current `src\`, asks for a thunderbird.cafe app password
(hidden as you type), publishes the tile as a new record, reads everything back, writes `published.json` and
prints links to open it in Raku and on lexicographer.space. Alongside the tile it publishes the two ways
lexicons (once, or when changed), points the place at the new tile, and creates the empty signpost if there is
none yet. The lexicons need a TXT record at Wix, once: host `_lexicon.way`, value
`did=did:plc:6vxjigxrqizmbo56gojxico3` (as `_lexicon.daisy` and `_lexicon.rooms`). After a change, `node scripts/publish.mjs --again`
publishes a new record (a new address); delete the old one in PDSls once the new one works. Add `--iso` to
publish the isometric step 1 instead (only if you want it published too).

## Ways

Plan: claude/escher-maze-ways-plan.md in the Foundry project (decisions M17 to M25). Kept small on purpose, so it
can move to a shared standard if one appears.

- **`tile\ways.json`** (frozen with the tile): the tile's id (`maze`), its place, its exits (`obelisk`: its
  signpost and its fallback address) and its entrances (`obelisk`). Any host can read it.
- **The place** `at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.place/maze`: "the maze is currently
  this tile", its address and exact version (CID). `publish.mjs` writes it after every publish, so whatever points
  at the place keeps working when the maze is republished.
- **The signpost** `…/cafe.thunderbird.way.signpost/maze.obelisk`: where the obelisk leads, a list (`to`) of places
  or tiles, each with an optional `entrance` and `label`. **Empty: dormant** (how `publish.mjs` creates it, once);
  one: straight there; several: the host offers a choice. Edit it yourself (PDSls) whenever the way should open
  or change: the maze is never republished for it, and `publish.mjs` never touches a signpost that exists.
- **Messages** with the page that holds the tile (`tiles-protocol-up-way-payload` / `-down-way-payload`, v 1; see
  `src\ways.js`): the maze says `hello`; a host answers `status` (each exit `open` or `dormant`) and may send
  `arrive` (at an entrance); stepping into an open exit, the maze says `leave` (the exit and facing, never who).
  No answer within about a second: a plain viewer.
- **Addresses** follow `https://thunderbird.cafe/way/<tile id>/<exit id>`; a tile id is chosen once and never
  reused (`maze`; a second maze would be `maze-2`).

The fallback pages: after changing `site\` or a `ways.json`, run `node scripts/copy-to-site.mjs` here (it writes
into `C:\thunderbird-cafe\pyxorium.github.io`), then build and push the site. They're hidden (`/way/` is in the
site's `HIDDEN_PAGES`).

## Winter Forest (`forest\`)

The obelisk's first destination: a snowy forest at night, a lamp post in a clearing, four winding paths to four
portals (the wardrobe, the tree-door, the stone arch, and the library's slide back to the maze). Plan:
claude/winter-forest-plan.md in the Foundry project (decisions W1 to W33). **Steps 1 and 2 of 3:** the clearing
with its settings (W6), the paths (the wardrobe's about 45 blocks with one bend, hidden from the clearing: W32), the
four portals with their dormant and open looks and their going-through moments; the tunnel inside the great tree
(bigger on the inside, the plank door halfway, its lantern); the library inside (shelves, tables and lamps, the
fireplace, open books, the rolling ladder, the stairs up to the mezzanine and its reading nook, the bench and the
figurine-sized door); the shrink and the slide ride (wood, ice through the forest, the Great Hall's blue); the new
places' sounds; the four entrances, `ways.json`, the postcard. Step 3 is the travel page and publishing. Not
published yet.

- **Ways-only** (W16): opened directly (any viewer without a host) it shows its postcard, "This place is reached
  through other places."; only a host's `arrive` lets you in. Its `ways.json` says `"entry": "ways-only"`.
- `forest\src\` its code: `main.js` (the four places, walking, the camera, the moments), `scene.js` the forest,
  `portals.js` the portals' outsides, `library.js` the library's inside, `tunnel.js` the great tree's tunnel, `ride.js`
  the slide ride, `layout.js` and `inside.js` where everything is (no three.js, so the tests run them), `textures.js`
  (all drawn in code), `ways.js` (a copy of the maze's, changed for the forest), `look.js` the settings, `sound.js`,
  `postcard.js`. It uses the maze's `src\controls.js` as it is; nothing in the maze's `src\` is changed (W27).
- The library and the tunnel are drawn over the forest (the forest first, then the room with its own lights), so the
  library's windows and the tunnel's mouth show the real forest, live.
- `forest\tile\` the tile: `index.html`, `forest.css`, `forest.js` (built), `ways.json`, `icon.png`, `banner.png`.
- `npm run build-forest` builds `forest\tile\forest.js` (three.js and esbuild from the Foundry's folder, as the
  maze's build). Commit `forest\tile\forest.js` after building.
- `npm run dev-forest`: http://127.0.0.1:5210/dev/host.html holds the forest in a stand-in host (choose where each
  portal leads, send a traveller in at each entrance; after you leave, it can bring you back through the same
  portal); http://127.0.0.1:5210/ is the tile on its own (the postcard); http://127.0.0.1:5210/dev/card-art.html
  draws the card pictures.
- `test\winter-forest.test.mjs` and `test\winter-forest-inside.test.mjs` (part of `npm test`): `ways.json`, the
  messages, the settings, every entrance a place you can stand, every path walkable from the lamp post to its portal,
  the wardrobe hidden from the clearing; the library (up the stairs to the nook, the mezzanine's edge, the bench and
  the little door, the doors in and out, the camera), the tunnel (in, to the door, out), the ice run's way. `forest\test\browser\check.mjs` tries
  it all in a browser (run in the build chat).
