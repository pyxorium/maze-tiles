// tiles.mjs: what goes into the maze tile (modelled on rooms-lab/scripts/tiles.mjs), for publish.mjs.
//   maze   the Escher maze over the shoulder: twelve rooms in 3D, no tile behind the Lantern room's door yet
// The isometric step 1 (the frozen snapshot) has its own settings in iso/tiles.mjs (publish.mjs --iso).
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

export const TILES = {
  maze: {
    name: 'Escher maze',
    description: "Wander an impossible place, seen from just behind your shoulder: twelve rooms joined by doors, stairs, ramps and a hole in the floor that don't fit one real space. Climb four flights, all up, and end where you began; fall through a hole with no way back up; step out of a closet into a hall far bigger than it. Every doorway shows the room beyond, and you walk through with no cut. The map fills in as you go.",
    sizing: { width: 640, height: 480 },
    folder: 'tile',
    files: ['index.html', 'maze.css', 'maze.js'],
  },
};
// Card pictures, drawn from the 3D rooms by dev/card-art.html.
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
export function publishFiles(id, tiles = TILES) {
  const t = tiles[id];
  const out = [];
  for (const f of [...t.files, ...CARD_FILES]) {
    const file = join(ROOT, t.folder, f);
    if (!existsSync(file)) throw new Error(`Missing ${t.folder}/${f}${CARD_FILES.includes(f) ? ` (draw it: ${t.cardArt || 'npm run dev, then http://127.0.0.1:5200/dev/card-art.html'})` : ''}`);
    const path = f === 'index.html' ? '/' : `/${f}`;
    out.push({ path, bytes: new Uint8Array(readFileSync(file)), contentType: PUBLISH_TYPES[extname(f)] });
  }
  return out;
}
