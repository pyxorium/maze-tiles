// signpost.js: the signpost renderer (claude/raku-renderer-tiles-plan.md, "The signpost renderer", SR1 to SR7). A web
// tile that shows one signpost record (cafe.thunderbird.way.signpost: where one exit of a tile leads) as a postcard:
// the exit and its tile, who made it and when, where it leads, and a way to go there. Raku opens it when someone opens
// a signpost's address; any host that speaks the tiles spec's data protocol (tp-data) can use it too.
//
//   1. load the host's data.js, add a handler, then listen(): the host answers "ready" with the signpost;
//   2. ask the host for the records the names come from, { get: "at://…" } for each (SR2): the tile's own place (the
//      heading) and every destination; each answer, { got, record }, fills a name in. A host that doesn't answer:
//      the record's own data shows as it is (SR1's brackets), nothing waits for it;
//   3. "Go to …" / "Go there" asks the host to open the destination: { open: "at://…" } (as Places' Step into).
//   No record within a few seconds, or no data.js at all: "This tile shows signposts." (opened alone, in a gallery…).
import { readSignpost, readGot, wanted, lines, SIGNPOST } from './view.js';

const root = document.getElementById('signpost');
const NO_HOST_MS = 3000;
let sendData = null;
let heard = false;
let view = null;
let names = new Map();
let pressed = false;

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
// A line's parts: text, or record data in brackets with the kind it is ([place: maze], [did:plc:…]).
function line(cls, parts) {
  return el('p', { class: cls }, ...parts.map((x) => (typeof x === 'string' ? x
    : el('span', { class: 'raw' }, '[', x.tag ? `${x.tag}: ` : '', el('code', {}, x.value), ']'))));
}
function go(uri) {
  try { if (sendData) sendData({ open: uri }); } catch { /* the host has gone: the line below still helps */ }
  pressed = true;
  root.querySelector('.after').hidden = false;
}

function drawWaiting() { draw('waiting', el('p', { class: 'wait' }, 'Waiting for a signpost…')); }

function drawNoHost() {
  draw('nohost',
    el('h1', {}, 'This tile shows signposts.'),
    el('p', {}, 'Open a signpost address in Raku to see one here.'),
    el('p', { class: 'small' }, `A signpost is a ${SIGNPOST} record: where a way out of a tile leads, changed any time without changing the tile.`));
}

function drawNotSignpost(v) {
  draw('notsignpost',
    el('h1', {}, "This isn't a signpost."),
    el('p', {}, v.collection
      ? `This tile shows signposts (${SIGNPOST} records). It was given a record of another kind (${v.collection}).`
      : `This tile shows signposts (${SIGNPOST} records). What it was given isn't one.`));
}

function drawSignpost() {
  const L = lines(view, names);
  const nodes = [el('h1', {}, L.heading), line('out', L.out)];
  if (L.by) nodes.push(line('by', L.by));
  if (L.updated) nodes.push(el('p', { class: 'by' }, L.updated));
  if (L.note) nodes.push(el('p', { class: 'note' }, L.note));
  const after = el('p', { class: 'after', hidden: pressed ? null : '' }, 'If nothing opens, copy the address from "Open in" into Raku.');
  const card = el('div', { class: 'card' }, el('p', { class: 'label' }, L.dests.length > 1 ? 'Where it leads (pick one)' : 'Where it leads'));
  if (!L.dests.length) {
    card.append(el('p', {}, "This doesn't lead anywhere yet."));
    nodes.push(card);
  } else {
    if (L.button) {
      const b = el('button', { type: 'button', class: 'go' }, L.button);
      b.addEventListener('click', () => go(L.dests[0].uri));
      nodes.push(b, after);
    } else {
      nodes.push(el('p', { class: 'small' }, 'This way leads to more than one place. Pick one.'), after);
    }
    for (const d of L.dests) {
      const what = el('div', { class: 'what' });
      if (d.label) what.append(el('p', { class: 'name' }, d.label));
      what.append(line(d.label ? 'sub' : 'name', d.way));
      if (d.by) what.append(line('sub', d.by));
      const row = el('div', { class: 'dest' }, what);
      if (L.dests.length > 1) {
        const b = el('button', { type: 'button', class: 'go mini' }, 'Go there');
        b.setAttribute('aria-label', `Go to ${d.name}`);
        b.addEventListener('click', () => go(d.uri));
        row.append(b);
      }
      card.append(row);
    }
    nodes.push(card);
  }
  draw('signpost', ...nodes);
  document.title = L.heading;
}

function onPayload(payload) {
  const got = readGot(payload);
  if (got) {                                   // an answer to one of our { get }s
    if (view && view.kind === 'signpost' && wanted(view).includes(got[0])) { names.set(got[0], got[1]); drawSignpost(); }
    return;
  }
  if (payload && typeof payload === 'object' && typeof payload.got === 'string') return;   // { got, error }: keep the record's data
  heard = true;
  view = readSignpost(payload);
  names = new Map();
  if (view.kind !== 'signpost') { drawNotSignpost(view); document.title = 'Signpost'; return; }
  drawSignpost();
  for (const uri of wanted(view)) { try { sendData({ get: uri }); } catch { /* no host to ask: the record's data shows */ } }
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

