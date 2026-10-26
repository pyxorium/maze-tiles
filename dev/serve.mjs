// dev/serve.mjs: walk the maze on this computer without publishing. `npm run dev` in
// C:\thunderbird-cafe\maze-tiles, then open http://127.0.0.1:5200/ (the tile, full window).
//   http://127.0.0.1:5200/dev/frame.html      the tile in a 640 x 480 frame and a phone-sized one
//   http://127.0.0.1:5200/dev/card-art.html   draws the card pictures (icon.png, banner.png) to save
//   http://127.0.0.1:5200/dev/host.html       the maze held by a stand-in host: the obelisk open, dormant, or no host
// It serves tile\ (the built maze.js: after changing src\, run `npm run build` first; it says so if you forget),
// with the tile's security policy as the tile loader sends it. Only this computer can reach it. No packages needed.
// The isometric step 1 has its own: `npm run dev-iso` (http://127.0.0.1:5201/).
import http from 'node:http';
import { readFile, stat, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.json': 'application/json' };

export async function tileCsp() {
  const page = await readFile(path.join(ROOT, 'tile', 'index.html'), 'utf8');
  const m = /<meta\s+http-equiv="Content-Security-Policy"\s+content="([^"]*)"/i.exec(page);
  return m ? m[1] : "default-src 'self'";
}

// Is tile/maze.js older than anything in src/?
export async function bundleIsStale() {
  try {
    const built = (await stat(path.join(ROOT, 'tile', 'maze.js'))).mtimeMs;
    for (const f of await readdir(path.join(ROOT, 'src'))) if ((await stat(path.join(ROOT, 'src', f))).mtimeMs > built + 1000) return true;
    return false;
  } catch { return true; }
}

export async function startDev({ port = 5200, host = '127.0.0.1', quiet = false } = {}) {
  const csp = await tileCsp();
  const server = http.createServer(async (req, res) => {
    let p = decodeURIComponent((req.url || '/').split('?')[0]);
    if (p === '/') p = '/index.html';
    const inDev = p.startsWith('/dev/');
    const file = path.normalize(path.join(ROOT, inDev ? '' : 'tile', p));
    const base = path.join(ROOT, inDev ? 'dev' : 'tile');
    if (!file.startsWith(base + path.sep) || p.includes('\0')) { res.writeHead(404); res.end('Not found'); return; }
    try {
      const body = await readFile(file);
      const headers = { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' };
      if (!inDev) headers['content-security-policy'] = csp;
      res.writeHead(200, headers);
      res.end(body);
    } catch {
      res.writeHead(404); res.end('Not found');
    }
  });
  await new Promise((resolve) => server.listen(port, host, resolve));
  if (!quiet) {
    console.log(`The maze: http://${host}:${port}/   (in tile-sized frames: http://${host}:${port}/dev/frame.html)`);
    if (await bundleIsStale()) console.log('Note: src\\ has changed since tile\\maze.js was built. Run `npm run build` to see the changes.');
  }
  return server;
}

if (process.argv[1] && path.resolve(process.argv[1]).toLowerCase() === fileURLToPath(import.meta.url).toLowerCase()) {
  startDev().catch((err) => { console.error(err.message); process.exitCode = 1; });
}
