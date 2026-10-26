// Builds lab/shoulder-test.html: one self-contained page (three.js, lil-gui and the look test bundled in), so it
// opens straight from the folder with a double-click. Run in the build chat:
//   node lab/build-shoulder.mjs <folder with three/ and lil-gui/ packages> [path to esbuild]
// (The packages come from C:\thunderbird-cafe\web-tile-foundry\node_modules: three 0.186.1, lil-gui 0.21.0.)
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const mods = process.argv[2];
if (!mods) { console.error('Say where the three and lil-gui packages are.'); process.exit(1); }
const require = createRequire(import.meta.url);
const esbuild = require(process.argv[3] || 'esbuild');

const out = await esbuild.build({
  entryPoints: [path.join(HERE, 'shoulder', 'main.js')],
  bundle: true, format: 'iife', minify: true, write: false, target: 'es2020', legalComments: 'none',
  alias: { three: path.join(mods, 'three', 'build', 'three.module.js'), 'lil-gui': path.join(mods, 'lil-gui', 'dist', 'lil-gui.esm.js') },
});
const js = out.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');
const page = readFileSync(path.join(HERE, 'shoulder', 'page.html'), 'utf8');
const notice = '/* Includes three.js (MIT licence, three.js authors) and lil-gui (MIT licence, George Michael Brower). */\n';
writeFileSync(path.join(HERE, 'shoulder-test.html'), page.replace('/*BUNDLE*/', () => notice + js));
console.log(`lab/shoulder-test.html: ${(js.length / 1024).toFixed(0)} KB of script`);
