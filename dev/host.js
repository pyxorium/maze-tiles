// dev/host.js: a stand-in host for dev/host.html. It speaks the maze's side of src/ways.js: answers way.hello
// with way.status for both exits (?mode=open, dormant or plain: plain doesn't answer at all), sends way.arrive on the
// buttons (at the obelisk, or through the Lantern room's door, 0.4.0), and
// logs every message from the maze (window.__host.log, for the browser check).
const UP = 'tiles-protocol-up-way-payload', DOWN = 'tiles-protocol-down-way-payload';
const params = new URLSearchParams(location.search);
const mode = ['open', 'dormant', 'plain'].includes(params.get('mode')) ? params.get('mode') : 'dormant';
const frame = document.getElementById('maze');
const logEl = document.getElementById('log');
const log = [];
document.querySelector(`input[value="${mode}"]`).checked = true;
document.getElementById('modes').addEventListener('change', (e) => { location.search = `?mode=${e.target.value}`; });
const down = (payload) => frame.contentWindow.postMessage({ action: DOWN, payload: { v: 1, ...payload } }, '*');
document.getElementById('arrive').addEventListener('click', () => { down({ kind: 'arrive', entrance: 'obelisk' }); note('host: way.arrive at the obelisk'); });
document.getElementById('arrivedoor').addEventListener('click', () => { down({ kind: 'arrive', entrance: 'second-door' }); note('host: way.arrive through the second door'); });

function note(text) { const li = document.createElement('li'); li.textContent = text; logEl.append(li); }

addEventListener('message', (e) => {
  if (e.source !== frame.contentWindow || !e.data || e.data.action !== UP) return;
  const p = e.data.payload;
  log.push(p);
  note(`maze: way.${p.kind} ${JSON.stringify(p)}`);
  if (p.kind === 'hello' && mode !== 'plain') {
    down({ kind: 'status', exits: { obelisk: mode, 'second-door': mode } });
    note(`host: way.status, the obelisk and the second door are ${mode}`);
  }
  if (p.kind === 'leave') note(`host: the traveller left by "${p.exit}"; a real host would show the destination's card now.`);
});
window.__host = { log, mode, arrive: () => document.getElementById('arrive').click(), arriveDoor: () => document.getElementById('arrivedoor').click() };
