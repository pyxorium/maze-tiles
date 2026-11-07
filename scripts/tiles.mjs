// tiles.mjs: what goes into each tile (modelled on rooms-lab/scripts/tiles.mjs), for publish.mjs and copy-to-site.mjs.
//   maze            the Escher maze over the shoulder: twelve rooms in 3D (TILES; publish.mjs)
//   winter-forest   Winter Forest, the hub beyond the obelisk (FOREST_TILES; publish.mjs --forest)
//   place-renderer  "Places", the place renderer: one place record as a postcard, for Raku (PLACE_TILES; publish.mjs --place)
//   signpost-renderer  "Signposts", the signpost renderer: where one exit leads, for Raku (SIGNPOST_TILES; publish.mjs --signpost)
// The isometric step 1 (the frozen snapshot) has its own settings in iso/tiles.mjs (publish.mjs --iso).
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// The accounts tiles are published from (M30, 0.4.0): the maze from pyxorium.com, Winter Forest (and the ways'
// lexicons) from thunderbird.cafe. A tile without `account` is thunderbird.cafe's.
export const THUNDERBIRD_DID = 'did:plc:6vxjigxrqizmbo56gojxico3';     // thunderbird.cafe
export const PYXORIUM_DID = 'did:plc:rqbqpaaluty5v47jwciowpik';        // pyxorium.com

export const TILES = {
  maze: {
    name: 'Escher maze',
    description: "Wander an impossible place, seen from just behind your shoulder: twelve rooms joined by doors, stairs, ramps and a hole in the floor that don't fit one real space. Climb four flights, all up, and end where you began; fall through a hole with no way back up; step out of a closet into a hall far bigger than it. Every doorway shows the room beyond, and you walk through with no cut. The map fills in as you go.",
    sizing: { width: 640, height: 480 },
    folder: 'tile',
    files: ['index.html', 'maze.css', 'maze.js', 'ways.json'],
    ways: true,                                   // has /ways.json: publish.mjs also writes its place and signposts
    account: PYXORIUM_DID,                        // since 0.4.0 (M30); 0.3.0 was thunderbird.cafe's
    // Signposts set up when first published (M33): the obelisk leads to Winter Forest's lamp post, as the live one
    // on thunderbird.cafe did; the second door starts empty. A signpost that already exists is never touched.
    signposts: {
      obelisk: [{ place: `at://${THUNDERBIRD_DID}/cafe.thunderbird.way.place/winter-forest`, entrance: 'lamppost' }],
    },
    exitNames: { 'second-door': 'second door' },  // for the way pages' wording (copy-to-site.mjs)
  },
};
// Card pictures, drawn from the 3D rooms by dev/card-art.html.
export const CARD_FILES = ['icon.png', 'banner.png'];

// Winter Forest (claude/winter-forest-plan.md, W1 to W38; claude/winter-forest-step3-plan.md, W42 to W45). Published
// on its own with publish.mjs --forest, so publishing it never touches the maze (M26).
export const FOREST_TILES = {
  'winter-forest': {
    name: 'Winter Forest',
    description: 'A snowy night forest. A lamp post glows in a clearing, and four winding paths lead to a wardrobe, a great old tree, a stone arch and a small library. This place is reached through other places.',
    sizing: { width: 640, height: 480 },
    folder: 'forest/tile',
    files: ['index.html', 'forest.css', 'forest.js', 'ways.json'],
    cards: ['icon.png', 'banner.jpg'],            // the banner is also the postcard (W23), a JPEG since W45
    icon: '/icon.png',
    screenshot: '/banner.jpg',
    cardArt: 'npm run dev-forest, then http://127.0.0.1:5210/dev/card-art.html',
    bundle: 'forest',                             // publish.mjs checks forest/tile/forest.js is built from forest/src/
    generator: 'Winter Forest',
    ways: true,
    // Signposts set up when first published (W20): the slide leads back to the maze's obelisk; the others start empty.
    // A signpost that already exists is never touched (the live slide is pointed at pyxorium.com's maze by hand, M36).
    signposts: {
      slide: [{ place: `at://${PYXORIUM_DID}/cafe.thunderbird.way.place/maze`, entrance: 'obelisk' }],
    },
  },
};
// Every tile with ways, for the site's way pages (copy-to-site.mjs).
export const WAY_TILES = { ...TILES, ...FOREST_TILES };

// The place renderer (claude/raku-renderer-tiles-plan.md, RT1 to RT9): a tile that shows one place record as a
// postcard, given the record by its host over the tiles spec's data protocol. Raku pins it (RENDERERS in Raku's
// src/config.js) and opens it for place addresses. Published on its own with publish.mjs --place; no ways of its own.
export const PLACE_TILES = {
  // Its id is not "places": published.json already uses that key for the place records (Nov 6: the first publish
  // under that id overwrote them; repaired by hand).
  'place-renderer': {
    name: 'Places',
    description: "Shows a place (a cafe.thunderbird.way.place record) as a postcard: its name, who made it, the card of the tile behind it, and a way into that tile. A place keeps one address while its tile is replaced. Raku opens this when you open a place's address.",
    sizing: { width: 640, height: 480 },
    folder: 'place/tile',
    files: ['index.html', 'place.css', 'place.js', 'view.js'],
    cards: ['icon.png', 'banner.png'],
    icon: '/icon.png',
    screenshot: '/banner.png',
    cardArt: 'open place\\dev\\card-art.html in a browser and save both pictures into place\\tile\\',
    generator: 'Places',
    renderer: 'cafe.thunderbird.way.place',       // the kind Raku pins it for: publish.mjs prints the pin
  },
};

// The signpost renderer (claude/raku-renderer-tiles-plan.md, "The signpost renderer", SR1 to SR7): one signpost record
// (where one exit of a tile leads) as a postcard, given the record over the data protocol; it asks its host for the
// records the names come from ({ get }, SR2 and SR6). Raku pins it for signposts. Published on its own with
// publish.mjs --signpost, which also publishes the ways lexicons when they've changed (SR5 adds the signpost's `name`).
export const SIGNPOST_TILES = {
  'signpost-renderer': {
    name: 'Signposts',
    description: "Shows a signpost (a cafe.thunderbird.way.signpost record) as a postcard: the way out it belongs to, who made it, where it leads, and a way to go there. A signpost can be changed any time without changing either tile. Raku opens this when you open a signpost's address.",
    sizing: { width: 640, height: 480 },
    folder: 'signpost/tile',
    files: ['index.html', 'signpost.css', 'signpost.js', 'view.js'],
    cards: ['icon.png', 'banner.png'],
    icon: '/icon.png',
    screenshot: '/banner.png',
    cardArt: 'open signpost\\dev\\card-art.html in a browser and save both pictures into signpost\\tile\\',
    generator: 'Signposts',
    renderer: 'cafe.thunderbird.way.signpost',
    lexicons: true,                               // publishes the ways lexicons when new or changed
  },
};

// The Foundry's one fixed type per kind of file (web-tile-foundry/src/core/fileset.js CONTENT_TYPES).
export const PUBLISH_TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.json': 'application/json' };

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
  const cards = t.cards || CARD_FILES;
  for (const f of [...t.files, ...cards]) {
    const file = join(ROOT, t.folder, f);
    if (!existsSync(file)) throw new Error(`Missing ${t.folder}/${f}${cards.includes(f) ? ` (draw it: ${t.cardArt || 'npm run dev, then http://127.0.0.1:5200/dev/card-art.html'})` : ''}`);
    const path = f === 'index.html' ? '/' : `/${f}`;
    out.push({ path, bytes: new Uint8Array(readFileSync(file)), contentType: PUBLISH_TYPES[extname(f)] });
  }
  return out;
}
