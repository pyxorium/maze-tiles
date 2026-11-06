// A stand-in host for the place renderer, to look at it on this computer without Raku: npm run dev-place, then
// http://127.0.0.1:5220/ . The page holds the tile in a frame and answers its "ready" with a sample record over the
// tiles spec's data protocol (as Raku does), and logs what the tile asks ("Step into" → { open }).
// The tile's own data.js here is a copy of the loading server's (C:\thunderbird-cafe\tiles-loading-server\public\data.js).
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, normalize, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const TILE = join(HERE, '..', 'tile');
const PORT = Number(process.env.PORT) || 5220;
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.png': 'image/png', '.json': 'application/json' };
const DATA_JS = `const UP = 'tiles-protocol-up-data-', DOWN = 'tiles-protocol-down-data-';
const handlers = [];
export function addDataHandler (h) { if (!handlers.includes(h)) handlers.push(h); }
export function removeDataHandler (h) { const i = handlers.indexOf(h); if (i >= 0) handlers.splice(i, 1); }
window.addEventListener('message', (ev) => { const { action, payload } = ev.data || {}; if (action === DOWN + 'payload') handlers.forEach((h) => h(payload)); });
export function listen () { window.parent.postMessage({ action: UP + 'ready' }, '*'); }
export function sendData (payload) { window.parent.postMessage({ action: UP + 'payload', payload }, '*'); }
`;

createServer(async (req, res) => {
  const path = new URL(req.url, 'http://x').pathname;
  if (path === '/') { res.writeHead(200, { 'content-type': TYPES['.html'] }); return res.end(await readFile(join(HERE, 'host.html'))); }
  if (path === '/.well-known/web-tiles/data.js') { res.writeHead(200, { 'content-type': TYPES['.js'] }); return res.end(DATA_JS); }
  if (path.startsWith('/tile/')) {
    const file = normalize(join(TILE, path.slice('/tile/'.length) || 'index.html'));
    if (!file.startsWith(TILE)) { res.writeHead(403); return res.end(); }
    try { const b = await readFile(file); res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream' }); return res.end(b); }
    catch { /* fall through */ }
  }
  res.writeHead(404); res.end();
}).listen(PORT, '127.0.0.1', () => console.log(`Place renderer stand-in host: http://127.0.0.1:${PORT}/`));
