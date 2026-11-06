// place.js: the place renderer (claude/raku-renderer-tiles-plan.md, RT1 to RT9). A web tile that shows one place record
// (cafe.thunderbird.way.place) as a postcard: its name, who made it and when, "Step into <name>", and the tile behind
// it. Raku opens it when someone opens a place's address; any other host that speaks the tiles spec's data protocol
// (tp-data, /.well-known/web-tiles/data.js) can use it too.
//
//   1. load the host's data.js, add a handler, then listen() (the host answers "ready" with the record: RT1);
//   2. no record within a few seconds, or no data.js at all: "This tile shows places." (opened alone, in a gallery…);
//   3. "Step into" asks the host to open the place's tile: sendData({ open: "at://…" }) (RT5). The tile can't tell
//      whether its host did, so a quiet line says what to do if nothing opens. Nothing else is ever sent.
import { readPlace, byLine, PLACE } from './view.js';

const root = document.getElementById('place');
const NO_HOST_MS = 3000;
let sendData = null;
let heard = false;

function el(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) if (v !== null && v !== undefined && v !== false) e.setAttribute(k, v);
  for (const k of kids) if (k !== null && k !== undefined && k !== '') e.append(k);
  return e;
}
function draw(state, ...nodes) {
  root.dataset.state = state;
  root.replaceChildren(...nodes);
}

function drawWaiting() { draw('waiting', el('p', { class: 'wait' }, 'Waiting for a place…')); }

function drawNoHost() {
  draw('nohost',
    el('h1', {}, 'This tile shows places.'),
    el('p', {}, 'Open a place address in Raku to see one here.'),
    el('p', { class: 'small' }, `A place is a ${PLACE} record: a name for a spot in a web of tiles, pointing at the tile that is there now.`));
}

function drawNotPlace(view) {
  draw('notplace',
    el('h1', {}, "This isn't a place."),
    el('p', {}, view.collection
      ? `This tile shows places (${PLACE} records). It was given a record of another kind (${view.collection}).`
      : `This tile shows places (${PLACE} records). What it was given isn't one.`));
}

function drawPlace(view) {
  const nodes = [el('h1', {}, view.name), el('p', { class: 'by' }, byLine(view))];
  if (view.tile) {
    const after = el('p', { class: 'after', hidden: '' }, 'If nothing opens, copy the address below into Raku.');
    const go = el('button', { type: 'button', class: 'go' }, `Step into ${view.name}`);
    go.addEventListener('click', () => {
      try { if (sendData) sendData({ open: view.tile }); } catch { /* the host has gone: the line below still helps */ }
      after.hidden = false;
    });
    nodes.push(go, after,
      el('div', { class: 'card' },
        el('p', { class: 'label' }, 'The tile behind it'),
        el('p', {}, `A place keeps the same address even when its tile is replaced. Right now, ${view.name} is this tile:`),
        el('code', {}, view.tile)));
  } else {
    nodes.push(el('div', { class: 'card' },
      el('p', { class: 'label' }, 'The tile behind it'),
      el('p', {}, "This place doesn't point at a tile right now.")));
  }
  draw('place', ...nodes);
}

function onPayload(payload) {
  heard = true;
  const view = readPlace(payload);
  if (view.kind === 'place') drawPlace(view); else drawNotPlace(view);
  document.title = view.kind === 'place' ? view.name : 'Place';
}

drawWaiting();
(async () => {
  let api;
  try { api = await import('/.well-known/web-tiles/data.js'); } catch { drawNoHost(); return; }
  sendData = api.sendData;
  api.addDataHandler(onPayload);
  api.listen();
  setTimeout(() => { if (!heard) drawNoHost(); }, NO_HOST_MS);
})();
