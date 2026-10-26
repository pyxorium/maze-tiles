# Escher maze

An impossible, wander-around world inside one web tile. Every way on (stairs, ramp, hallway, door) is a door
the tile runs, so the rooms never have to fit one real 3D space: four flights all going up bring you back where
you began, a hole drops you somewhere with no way back up, and a tiny closet opens into a vast hall.

A proof of concept for thunderbird.cafe. Step 1 (this) is the maze alone: twelve hand-made rooms in three
areas, drawn in true isometric on a 2D canvas, about 60 KB of code, no libraries. Step 2 will put one real tile
behind the Lantern room's closed door.

## Playing

Tap or click a way on (the small coloured tiles on the floor mark them), or Tab to one and press Enter. The
figure walks there and the view slides the way that way on goes: rooms sink as you climb, lift as you go
down, and drop away when you fall. **Back** (or B) walks the way you came, up to 8 rooms; a drop clears it.
**Map** (or M) shows the rooms you've found and the ways you've taken. Nothing is saved: a reload starts again
in the Courtyard. With "reduce motion" set on the device, every move is a quick fade.

## The folders

- `tile\` the tile's own files: `index.html` (with the tile's security policy), `maze.css`, `main.js` (moving,
  the buttons, back, the map card), `render.js` (drawing a room), `graph.js` (the rules: where ways on sit,
  walking paths, the map checks, the trail), `map.js` (the rooms), `mapcard.js`, and the card pictures
  `icon.png` and `banner.png`.
- `dev\` `npm run dev`: the maze on this computer at http://127.0.0.1:5200/, in tile-sized frames at
  http://127.0.0.1:5200/dev/frame.html, and the card pictures at http://127.0.0.1:5200/dev/card-art.html.
- `test\` `npm test`: the map's rules (every link honest, nothing traps you, the loop, the drop, the closet,
  back) and publishing to a stand-in server. `test\browser\check.mjs` clicks its way round the maze in a
  browser (needs Playwright; run in the build chat).
- `scripts\` `publish.mjs` publishes the tile from thunderbird.cafe; `lib\` holds the record-building code
  copied from rooms-lab (the Foundry's own).

## Changing the rooms

Edit `tile\map.js` (its top comment explains the coordinates and kinds of way on), then `npm test`: it says
in plain words what's wrong (a way that doesn't lead back, steps through a landmark, a room you can't get out
of). Check the look with `npm run dev`.

## Publishing

In `C:\thunderbird-cafe\maze-tiles`:

```
node scripts/publish.mjs --dry-run
node scripts/publish.mjs
```

It asks for a thunderbird.cafe app password (hidden as you type), publishes the tile as a new record, reads
everything back, writes `published.json` and prints links to open it in Raku and on lexicographer.space.
After a change, `node scripts/publish.mjs --again` publishes a new record (a new address); delete the old one
in PDSls once the new one works.
