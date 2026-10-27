// forest/dev/serve.mjs: walk Winter Forest on this computer without publishing. `npm run dev-forest` in
// C:\thunderbird-cafe\maze-tiles, then open:
//   http://127.0.0.1:5210/dev/host.html      the forest held by a stand-in host (the way in: the forest is ways-only)
//   http://127.0.0.1:5210/                   the tile on its own: the postcard, as any viewer without a host shows it
//   http://127.0.0.1:5210/dev/card-art.html  draws the card pictures (icon.png, banner.png) to save
// It serves forest\tile\ (the built forest.js: after changing forest\src\, run `npm run build-forest` first; it says
// so if you forget), with the tile's security policy as the tile loader sends it. Only this computer can reach it.
import http from 'node:http';
import { readFile, stat, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const FOREST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.json': 'application/json' };

export async function tileCsp() {
  const page = await readFile(path.join(FOREST, 'tile', 'index.html'), 'utf8');
  const m = /<meta\s+http-equiv="Content-Security-Policy"\s+content="([^"]*)"/i.exec(page);
  return m ? m[1] : "default-src 'self'";
}

export async function bundleIsStale() {
  try {
    const built = (await stat(path.join(FOREST, 'tile', 'forest.js'))).mtimeMs;
    for (const f of await readdir(path.join(FOREST, 'src'))) if ((await stat(path.join(FOREST, 'src', f))).mtimeMs > built + 1000) return true;
    return false;
  } catch { return true; }
}

export async function startDev({ port = 5210, host = '127.0.0.1', quiet = false } = {}) {
  const csp = await tileCsp();
  const server = http.createServer(async (req, res) => {
    let p = decodeURIComponent((req.url || '/').split('?')[0]);
    if (p === '/') p = '/index.html';
    const inDev = p.startsWith('/dev/');
    const file = path.normalize(path.join(FOREST, inDev ? '' : 'tile', p));
    const base = path.join(FOREST, inDev ? 'dev' : 'tile');
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
    console.log(`Winter Forest, with a stand-in host: http://${host}:${port}/dev/host.html`);
    console.log(`On its own (the postcard): http://${host}:${port}/   Card pictures: http://${host}:${port}/dev/card-art.html`);
    if (await bundleIsStale()) console.log('Note: forest\\src\\ has changed since forest\\tile\\forest.js was built. Run `npm run build-forest` to see the changes.');
  }
  return server;
}

if (process.argv[1] && path.resolve(process.argv[1]).toLowerCase() === fileURLToPath(import.meta.url).toLowerCase()) {
  startDev().catch((err) => { console.error(err.message); process.exitCode = 1; });
}
