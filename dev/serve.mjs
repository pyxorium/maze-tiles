// dev/serve.mjs: walk the maze on this computer without publishing. `npm run dev` in
// C:\thunderbird-cafe\maze-tiles, then open http://127.0.0.1:5200/ (the tile, full window).
//   http://127.0.0.1:5200/dev/frame.html      the tile in a 640 x 480 frame, as a tile host shows it
//   http://127.0.0.1:5200/dev/card-art.html   draws the card pictures (icon.png, banner.png) to save
// Only this computer can reach it. The tile's own files are sent with the tile's security policy, as the
// tile loader does, so anything the policy would block shows up here too. No packages needed.
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.json': 'application/json' };

export async function tileCsp() {
  const page = await readFile(path.join(ROOT, 'tile', 'index.html'), 'utf8');
  const m = /<meta\s+http-equiv="Content-Security-Policy"\s+content="([^"]*)"/i.exec(page);
  return m ? m[1] : "default-src 'self'";
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
  if (!quiet) console.log(`The maze: http://${host}:${port}/   (in a tile-sized frame: http://${host}:${port}/dev/frame.html)`);
  return server;
}

if (process.argv[1] && path.resolve(process.argv[1]).toLowerCase() === fileURLToPath(import.meta.url).toLowerCase()) {
  startDev().catch((err) => { console.error(err.message); process.exitCode = 1; });
}
