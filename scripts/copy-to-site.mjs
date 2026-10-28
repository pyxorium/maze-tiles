// copy-to-site.mjs: brings the way pages (site\) into the thunderbird.cafe site, as rooms-lab's does for its page.
// Since Winter Forest's step 3 the way pages are travel pages (site\travel.js), and there's one for every exit of
// every tile with ways: the maze's obelisk and Winter Forest's wardrobe, tree-door, arch and slide.
// Run in C:\thunderbird-cafe\maze-tiles after changing anything in site\ or a tile's ways.json:
//
//   node scripts/copy-to-site.mjs                     the site at C:\thunderbird-cafe\pyxorium.github.io
//   node scripts/copy-to-site.mjs <site folder>
//
// It writes src\way\ (way-page.js, travel.js, tile-records.js, way-main.js, page-csp.js, way.css, pages.generated.js:
// one page per exit, from each tile's ways.json) and src\pages\way\[tile]\[exit].astro, and checks that
// astro.config.mjs keeps /way/ hidden.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROOT, WAY_TILES } from './tiles.mjs';

export const SITE_FILES = ['way-page.js', 'travel.js', 'tile-records.js', 'way-main.js', 'page-csp.js', 'way.css'];
export const PAGE = path.join('src', 'pages', 'way', '[tile]', '[exit].astro');

// Every exit of every tile with ways: { tile, exit, signpost, place, from, title, path }.
export function wayPages(tiles = WAY_TILES) {
  const out = [];
  for (const [id, t] of Object.entries(tiles)) {
    if (!t.ways) continue;
    const ways = JSON.parse(readFileSync(path.join(ROOT, t.folder, 'ways.json'), 'utf8'));
    for (const e of ways.exits) {
      const url = new URL(e.fallback);
      const want = `/way/${ways.tile}/${e.id}`;
      if (url.origin !== 'https://thunderbird.cafe' || url.pathname !== want) throw new Error(`${id}: the exit ${e.id}'s fallback should be https://thunderbird.cafe${want}`);
      out.push({ tile: ways.tile, exit: e.id, signpost: e.signpost, place: ways.place, from: `the ${t.name}'s ${e.id}`, title: `Where the ${t.name}'s ${e.id} leads`, path: want });
    }
  }
  return out;
}

export function generatedPages(pages) {
  return `// pages.generated.js: written by C:\\thunderbird-cafe\\maze-tiles\\scripts\\copy-to-site.mjs from each tile's
// ways.json. Don't edit: run that script again. One way page per exit (src/pages/way/[tile]/[exit].astro).
export const WAY_PAGES = ${JSON.stringify(pages.map(({ path: _p, ...p }) => p), null, 2)};
`;
}

export function copyToSite(site, { log = console.log } = {}) {
  if (!existsSync(path.join(site, 'astro.config.mjs'))) throw new Error(`${site} doesn't look like the site (no astro.config.mjs).`);
  const way = path.join(site, 'src', 'way');
  mkdirSync(way, { recursive: true });
  for (const f of SITE_FILES) writeFileSync(path.join(way, f), readFileSync(path.join(ROOT, 'site', f)));
  const pages = wayPages();
  writeFileSync(path.join(way, 'pages.generated.js'), generatedPages(pages));
  mkdirSync(path.dirname(path.join(site, PAGE)), { recursive: true });
  writeFileSync(path.join(site, PAGE), readFileSync(path.join(ROOT, 'site', 'way-page.astro')));
  const config = readFileSync(path.join(site, 'astro.config.mjs'), 'utf8');
  const hidden = /HIDDEN_PAGES\s*=\s*\[[^\]]*'\/way\/'/.test(config);
  log(`Copied the way pages into ${site}: ${pages.map((p) => p.path).join(', ')}`);
  if (!hidden) log("Note: astro.config.mjs's HIDDEN_PAGES doesn't list '/way/': add it, or the pages go in the sitemap.");
  return { pages, hidden };
}

if (process.argv[1] && path.resolve(process.argv[1]).toLowerCase() === fileURLToPath(import.meta.url).toLowerCase()) {
  const site = path.resolve(process.argv[2] || path.join(ROOT, '..', 'pyxorium.github.io'));
  try { copyToSite(site); } catch (err) { console.error(err.message); process.exitCode = 1; }
}
