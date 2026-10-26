// tiles.mjs: what goes into the maze tile (modelled on rooms-lab/scripts/tiles.mjs), for publish.mjs.
//   maze   the Escher maze, step 1: twelve rooms, no tile behind the Lantern room's door yet
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

export const TILES = {
  maze: {
    name: 'Escher maze',
    description: "Wander an impossible place: twelve isometric rooms joined by doors, stairs and ramps that don't fit one real space. Climb four flights, all up, and end where you began; fall through a hole with no way back up; step out of a closet into a hall far bigger than it. Tap a way on to go. Back and the map help you find your way.",
    sizing: { width: 640, height: 480 },
    folder: 'tile',
    files: ['index.html', 'maze.css', 'main.js', 'map.js', 'graph.js', 'render.js', 'mapcard.js'],
  },
};
// Card pictures, drawn by dev/card-art.html with the tile's own code.
export const CARD_FILES = ['icon.png', 'banner.png'];

// The Foundry's one fixed type per kind of file (web-tile-foundry/src/core/fileset.js CONTENT_TYPES).
export const PUBLISH_TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' };

// The tile's own security policy, from its page's <meta> tag (it also goes in the record, as the Foundry does).
export function cspOf(html) {
  const m = /<meta\s+http-equiv="Content-Security-Policy"\s+content="([^"]*)"/i.exec(html);
  if (!m) throw new Error('The tile page has no security policy.');
  return m[1];
}

// A tile's files for publishing: [{ path, bytes, contentType }], "/" being its page.
export function publishFiles(id) {
  const t = TILES[id];
  const out = [];
  for (const f of [...t.files, ...CARD_FILES]) {
    const file = join(ROOT, t.folder, f);
    if (!existsSync(file)) throw new Error(`Missing ${t.folder}/${f}${CARD_FILES.includes(f) ? ' (draw it with npm run dev, then http://127.0.0.1:5200/dev/card-art.html)' : ''}`);
    const path = f === 'index.html' ? '/' : `/${f}`;
    out.push({ path, bytes: new Uint8Array(readFileSync(file)), contentType: PUBLISH_TYPES[extname(f)] });
  }
  return out;
}
