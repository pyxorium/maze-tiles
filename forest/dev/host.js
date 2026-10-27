// forest/dev/host.js: a stand-in host for forest/dev/host.html. It speaks the host's side of forest/src/ways.js:
// answers way.hello with way.status (each exit as chosen; or not at all, "no host"), sends way.arrive at the chosen
// entrance, and logs every message (window.__host.log, for the browser check). After a way.leave it can bring the
// traveller back through the same portal, as if they'd gone and come back (the slide, an exit only, brings them to
// the lamp post), so the forest's arrivals can be tried without a second place.
const UP = 'tiles-protocol-up-way-payload', DOWN = 'tiles-protocol-down-way-payload';
const ENTRANCES = ['lamppost', 'wardrobe', 'tree-door', 'arch'];
const params = new URLSearchParams(location.search);
const frame = document.getElementById('forest');
const logEl = document.getElementById('log');
const log = [];
const selects = [...document.querySelectorAll('select[data-exit]')];
// ?open=wardrobe,arch (the rest dormant); default: all open.
const openList = params.has('open') ? params.get('open').split(',') : null;
for (const s of selects) s.value = !openList || openList.includes(s.dataset.exit) ? 'open' : 'dormant';
document.getElementById('plain').checked = params.get('plain') === '1';
document.getElementById('roundtrip').checked = params.get('roundtrip') !== '0';
const status = () => Object.fromEntries(selects.map((s) => [s.dataset.exit, s.value]));
const plain = () => document.getElementById('plain').checked;
const down = (payload) => frame.contentWindow.postMessage({ action: DOWN, payload: { v: 1, ...payload } }, '*');
function note(text) { const li = document.createElement('li'); li.textContent = text; logEl.append(li); }
function sendStatus() { if (!plain()) { down({ kind: 'status', exits: status() }); note(`host: way.status ${JSON.stringify(status())}`); } }
function arrive(id) { down({ kind: 'arrive', entrance: id }); note(`host: way.arrive at "${id}"`); }
for (const s of selects) s.addEventListener('change', sendStatus);
for (const b of document.querySelectorAll('[data-arrive]')) b.addEventListener('click', () => { arrive(b.dataset.arrive); frame.focus(); });
document.getElementById('big').addEventListener('change', (e) => { frame.width = e.target.checked ? 1120 : 640; frame.height = e.target.checked ? 700 : 480; });

addEventListener('message', (e) => {
  if (e.source !== frame.contentWindow || !e.data || e.data.action !== UP) return;
  const p = e.data.payload;
  log.push(p);
  note(`forest: way.${p.kind} ${JSON.stringify(p)}`);
  if (p.kind === 'hello' && !plain()) sendStatus();
  if (p.kind === 'leave') {
    note(`host: the traveller left by "${p.exit}"; a real host would take them to where its signpost points.`);
    if (document.getElementById('roundtrip').checked) setTimeout(() => arrive(ENTRANCES.includes(p.exit) ? p.exit : 'lamppost'), 2000);
  }
});
window.__host = { log, arrive, sendStatus };
