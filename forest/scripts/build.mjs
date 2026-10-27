// Builds forest/tile/forest.js: Winter Forest's code (forest\src\, plus the maze's src\controls.js, used as it is)
// and three.js bundled into one script, as scripts/build.mjs does for the maze. Run in C:\thunderbird-cafe\maze-tiles
// after changing anything in forest\src\ (npm run build-forest), then commit forest\tile\forest.js.
//
//   node forest/scripts/build.mjs                       three.js and esbuild from C:\thunderbird-cafe\web-tile-foundry\node_modules
//   node forest/scripts/build.mjs <node_modules folder> [path to esbuild]
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const FOREST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = path.resolve(FOREST, '..');
export const OUT = path.join(FOREST, 'tile', 'forest.js');
const NOTICE = '/* Winter Forest (thunderbird.cafe). Includes three.js (MIT licence, three.js authors). */\n';

export async function build({ mods = path.resolve(ROOT, '..', 'web-tile-foundry', 'node_modules'), esbuildPath, write = true } = {}) {
  const three = path.join(mods, 'three', 'build', 'three.module.js');
  if (!existsSync(three)) throw new Error(`three.js isn't at ${three}. Say where the node_modules folder with three is.`);
  const require = createRequire(import.meta.url);
  const esbuild = require(esbuildPath || path.join(mods, 'esbuild'));
  const version = JSON.parse(readFileSync(path.join(mods, 'three', 'package.json'), 'utf8')).version;
  const out = await esbuild.build({
    entryPoints: [path.join(FOREST, 'src', 'main.js')],
    bundle: true, format: 'iife', minify: true, write: false, target: 'es2020', legalComments: 'none', charset: 'utf8',
    alias: { three },
  });
  const js = NOTICE + out.outputFiles[0].text;
  if (write) writeFileSync(OUT, js);
  return { js, three: version };
}

if (process.argv[1] && path.resolve(process.argv[1]).toLowerCase() === fileURLToPath(import.meta.url).toLowerCase()) {
  const [mods, esbuildPath] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  build({ ...(mods ? { mods: path.resolve(mods) } : {}), esbuildPath })
    .then(({ js, three }) => console.log(`forest/tile/forest.js: ${(js.length / 1024).toFixed(0)} KB (three.js ${three})`))
    .catch((err) => { console.error(err.message); process.exitCode = 1; });
}
