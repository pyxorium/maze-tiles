// loader-replica.mjs: a stand-in for the tile loading server (tiles-loading-server, load.tiles.lexicographer.space) on
// this computer, for test/browser/check_travel.mjs: the same routing and headers as its index.js (a fresh random
// 20-letter name for every tile, the loader's own files under /.well-known/web-tiles/ with their security policy),
// serving the loader's own files (shuttle.js, worker.js, index.html, data.js) from a folder you name. Chromium treats
// *.localhost as a secure place, so the service worker runs over plain http.
//
//   startLoaderReplica({ publicDir, port })  → { server, loadDomain: "load.tiles.localhost:<port>", loadSource }
//
// publicDir: the loading server's public\ folder (C:\thunderbird-cafe\tiles-loading-server\public by default, or
// LOADER_PUBLIC; the stock copy in github.com/darobin/dasl-tiles, tile-server/public, works the same).
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };
// As the loading server sends them (its index.js; the same as the stock router, `form-src` included).
const HEADERS = {
  'service-worker-allowed': '/',
  'origin-agent-cluster': '?1',
  'referrer-policy': 'no-referrer',
  'permissions-policy': 'interest-cohort=(), browsing-topics=()',
  'cross-origin-resource-policy': 'cross-origin',
  'cross-origin-opener-policy': 'same-origin',
  'x-content-type-options': 'nosniff',
  'content-security-policy': [
    "default-src 'self' blob: data:",
    "script-src 'self' blob: data: 'unsafe-inline' 'wasm-unsafe-eval'",
    "script-src-attr 'none'",
    "style-src 'self' blob: data: 'unsafe-inline'",
    "form-src 'self'",
    "manifest-src 'none'",
    "object-src 'none'",
    "base-uri 'none'",
    'sandbox allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts',
  ].join('; '),
};
const randomName = () => Array.from({ length: 20 }, () => 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)]).join('');

export async function startLoaderReplica({ publicDir, port = 5231, base = 'tiles.localhost' } = {}) {
  const server = http.createServer(async (req, res) => {
    const host = String(req.headers.host || '').toLowerCase();
    const [hostname] = host.split(':');
    const url = new URL(req.url || '/', `http://${host}`);
    if (hostname === `load.${base}`) {
      res.writeHead(303, { location: `http://${randomName()}.${base}:${port}${url.pathname}${url.search}` });
      res.end();
      return;
    }
    if (!hostname.endsWith(`.${base}`) || !url.pathname.startsWith('/.well-known/web-tiles/')) { res.writeHead(404); res.end('Not found'); return; }
    let name = url.pathname.slice('/.well-known/web-tiles/'.length) || 'index.html';
    if (name.includes('/') || name.includes('..')) { res.writeHead(404); res.end('Not found'); return; }
    try {
      const body = await readFile(path.join(publicDir, name));
      res.writeHead(200, { ...HEADERS, 'content-type': TYPES[path.extname(name)] || 'application/octet-stream' });
      res.end(body);
    } catch { res.writeHead(404); res.end('Not found'); }
  });
  await new Promise((r) => server.listen(port, '127.0.0.1', r));
  const loadDomain = `load.${base}:${port}`;
  return { server, loadDomain, loadSource: `http://${loadDomain}/.well-known/web-tiles/` };
}
