// iso/tiles.mjs: the isometric step 1's publish settings, kept with the frozen snapshot (M11). It isn't
// published unless the owner chooses to: `node scripts/publish.mjs --iso` (its record goes under "mazeIso" in
// published.json, apart from the 3D maze's).
export const ISO_TILES = {
  mazeIso: {
    name: 'Escher maze (isometric)',
    description: "Wander an impossible place: twelve isometric rooms joined by doors, stairs and ramps that don't fit one real space. Climb four flights, all up, and end where you began; fall through a hole with no way back up; step out of a closet into a hall far bigger than it. Tap a way on to go. Back and the map help you find your way.",
    sizing: { width: 640, height: 480 },
    folder: 'iso/tile',
    files: ['index.html', 'maze.css', 'main.js', 'map.js', 'graph.js', 'render.js', 'mapcard.js'],
    cardArt: 'npm run dev-iso, then http://127.0.0.1:5201/dev/card-art.html',
  },
};
