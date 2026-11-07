// place.js: the place renderer (claude/raku-renderer-tiles-plan.md, RT1 to RT9). A web tile that shows one place record
// (cafe.thunderbird.way.place) as a postcard: its name, who made it and when, "Step into <name>", and the tile behind
// it. Raku opens it when someone opens a place's address; any other host that speaks the tiles spec's data protocol
// (tp-data, /.well-known/web-tiles/data.js) can use it too.
//
//   1. load the host's data.js, add a handler, then listen() (the host answers "ready" with the record: RT1);
//   2. no record within a few seconds, or no data.js at all: "This tile shows places." (opened alone, in a gallery…);
//   3. "Step into" asks the host to open the place's tile: sendData({ open: "at://…" }) (RT5). The tile can't tell
//      whether its host did, so a quiet line says what to do if nothing opens;
//   4. the tile's card (claude/raku-places-card-plan.md, PC1 to PC6): it asks the host for the tile record behind the
//      place, { get: <tile> }, once, and draws its banner (or icon), name, who made it and its description in "The tile
//      behind it"; the picture comes from a second request, { picture: <blob cid>, from: <record> }, shown as a blob:
//      picture. A host that doesn't answer leaves the card as it was (the tile's address only); a picture that doesn't
//      come leaves the card without one. Nothing else is ever sent.
import { readPlace, byLine, PLACE, readTileCard, readPicture, tileByLine, changedLine, CANT_READ, keepsLine } from './view.js';

const root = document.getElementById('place');
const NO_HOST_MS = 3000;
const PICTURE_WAIT_MS = 10000;   // a picture that hasn't come by then won't: the spot goes away
let sendData = null;
let heard = false;
let view = null;       // the place, from readPlace
let card = null;       // the answer to { get }, from readTileCard (null: none yet)
let asked = null;      // the picture asked for: { cid, from, use }
let picture = null;    // its blob: address once shown; false once it won't come
let pressed = false;   // "Step into" was pressed (the "If nothing opens" line stays shown)
let open = false;      // the description's "More" was pressed

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
function ask(payload) {
  try { if (sendData) sendData(payload); return true; } catch { return false; }   // the host has gone
}

function drawWaiting() { draw('waiting', el('p', { class: 'wait' }, 'Waiting for a place…')); }

function drawNoHost() {
  draw('nohost',
    el('h1', {}, 'This tile shows places.'),
    el('p', {}, 'Open a place address in Raku to see one here.'),
    el('p', { class: 'small' }, `A place is a ${PLACE} record: a name for a spot in a web of tiles, pointing at the tile that is there now.`));
}

function drawNotPlace(v) {
  draw('notplace',
    el('h1', {}, "This isn't a place."),
    el('p', {}, v.collection
      ? `This tile shows places (${PLACE} records). It was given a record of another kind (${v.collection}).`
      : `This tile shows places (${PLACE} records). What it was given isn't one.`));
}

// The picture: a banner across the top of the card, or else the icon beside the tile's name (PC2). While it comes,
// a cream shimmer holds its place; if it won't come, the spot goes away.
function pictureEl(use) {
  if (!card.picture || picture === false) return null;
  const img = el('img', { class: use === 'banner' ? 'pic' : 'ico', alt: '', 'data-pic': use });
  if (picture) img.src = picture; else img.classList.add('coming');
  return img;
}

function tileCard() {
  const box = el('div', { class: 'card', 'data-card': card ? card.kind : 'address' }, el('p', { class: 'label' }, 'The tile behind it'));
  if (card && card.kind === 'error') {
    box.append(el('p', { class: 'cant' }, CANT_READ[card.error]), el('p', { class: 'why' }, keepsLine(view)), el('code', {}, view.tile));
    return box;
  }
  if (!card || card.kind !== 'card') {                // no answer (yet), or one that isn't a card: as before
    box.append(el('p', {}, keepsLine(view)), el('code', {}, view.tile));
    return box;
  }
  const text = el('div', { class: 'text' }, el('h2', {}, card.name), el('p', { class: 'tby' }, tileByLine(card)));
  const use = card.picture?.use;
  if (use === 'icon') {
    const ico = pictureEl('icon');
    box.append(el('div', { class: 'head' }, ico, text));
  } else {
    box.append(pictureEl('banner') || '', text);
  }
  if (card.description) {
    const d = el('p', { class: open ? 'desc' : 'desc clip' }, card.description);
    const more = el('button', { type: 'button', class: 'more', hidden: '' }, open ? 'Less' : 'More');
    more.addEventListener('click', () => {
      open = !open;
      d.classList.toggle('clip', !open);
      more.textContent = open ? 'Less' : 'More';
    });
    box.append(d, more);
    // "More" only when the text runs past three lines (measured once it's on the page)
    requestAnimationFrame(() => { if (open || d.scrollHeight > d.clientHeight + 2) more.hidden = false; });
  }
  if (card.changed) box.append(el('p', { class: 'changed' }, changedLine(view)));
  box.append(el('p', { class: 'why' }, keepsLine(view)), el('code', {}, view.tile));
  return box;
}

function drawPlace() {
  const nodes = [el('h1', {}, view.name), el('p', { class: 'by' }, byLine(view))];
  if (view.tile) {
    // Step into stays unless the host said it won't show this tile (PC5: it would refuse to open it too).
    if (!(card && card.kind === 'error' && card.error === 'hidden')) {
      const after = el('p', { class: 'after', hidden: pressed ? null : '' }, 'If nothing opens, copy the address below into Raku.');
      const go = el('button', { type: 'button', class: 'go' }, `Step into ${view.name}`);
      go.addEventListener('click', () => {
        ask({ open: view.tile });
        pressed = true;
        after.hidden = false;
      });
      nodes.push(go, after);
    }
    nodes.push(tileCard());
  } else {
    nodes.push(el('div', { class: 'card' },
      el('p', { class: 'label' }, 'The tile behind it'),
      el('p', {}, "This place doesn't point at a tile right now.")));
  }
  draw('place', ...nodes);
}

function forgetPicture() {
  if (picture) URL.revokeObjectURL(picture);
  picture = null;
  asked = null;
}

function onPicture(payload) {
  const r = readPicture(payload, asked);
  if (!r || picture) return;
  if (r.ok) {
    picture = URL.createObjectURL(new Blob([r.bytes], { type: r.type }));
    const img = root.querySelector('img[data-pic]');
    if (img) {
      img.addEventListener('error', () => { picture = false; img.remove(); }, { once: true });   // bytes that don't draw
      img.src = picture;
      img.classList.remove('coming');
    }
  } else {
    picture = false;
    root.querySelector('img[data-pic]')?.remove();
  }
}

function onCard(payload) {
  const c = readTileCard(payload, view);
  if (!c || card) return;                              // not our answer, or already answered
  card = c;
  drawPlace();
  if (c.kind === 'card' && c.picture) {
    const mine = asked = c.picture;
    const giveUp = () => { if (asked === mine) onPicture({ gotPicture: mine.cid, from: mine.from, error: 'no-answer' }); };
    if (!ask({ picture: c.picture.cid, from: c.picture.from })) giveUp();
    else setTimeout(giveUp, PICTURE_WAIT_MS);
  }
}

function onPayload(payload) {
  if (payload && typeof payload === 'object' && typeof payload.gotPicture === 'string') { onPicture(payload); return; }
  if (payload && typeof payload === 'object' && typeof payload.got === 'string') { if (view && view.kind === 'place') onCard(payload); return; }
  heard = true;
  forgetPicture();
  card = null;
  open = false;
  pressed = false;
  view = readPlace(payload);
  if (view.kind === 'place') drawPlace(); else drawNotPlace(view);
  document.title = view.kind === 'place' ? view.name : 'Place';
  if (view.kind === 'place' && view.tile) ask({ get: view.tile });
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
