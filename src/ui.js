// ui.js: what's drawn over the maze: the room's name, the Map and gear buttons, the map card (M5, M14), the gear
// menu (movement, reduce motion, back to the start), a first hint, notes, and the fade.

import { drawMapCard, mapSize } from './mapcard.js';

export function createUi({ map, nav, getMovement, setMovement, getReduceMotion, setReduceMotion, restart }) {
  const $ = (id) => document.getElementById(id);
  const roomEl = $('room'), noteEl = $('note'), hintEl = $('hint'), fadeEl = $('fade');
  const mapBtn = $('mapbtn'), gearBtn = $('gearbtn'), menu = $('menu'), mapcard = $('mapcard'), mapCanvas = $('mapcanvas');
  const reduceBox = $('reduce'), keysEl = $('keys');
  let reduceTouched = false;

  // ---- notes and the hint --------------------------------------------------------------------------------------
  let noteTimer = 0;
  function note(text) {
    noteEl.textContent = text;
    noteEl.classList.add('show');
    clearTimeout(noteTimer);
    noteTimer = setTimeout(() => noteEl.classList.remove('show'), 2600);
  }
  let hintGone = false;
  const hideHint = () => { if (!hintGone) { hintGone = true; hintEl.classList.add('gone'); } };
  setTimeout(hideHint, 12000);

  // ---- the map card --------------------------------------------------------------------------------------------
  function drawMap() {
    const dpr = Math.min(3, window.devicePixelRatio || 1);
    const { w, h } = mapSize(map);
    const maxW = Math.max(160, window.innerWidth - 56), maxH = Math.max(120, window.innerHeight - 120);
    const s = Math.min(1, maxW / w, maxH / h);
    mapCanvas.width = Math.round(w * dpr);
    mapCanvas.height = Math.round(h * dpr);
    mapCanvas.style.width = `${Math.round(w * s)}px`;
    mapCanvas.style.height = `${Math.round(h * s)}px`;
    const ctx = mapCanvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawMapCard(ctx, map, nav.state);
  }
  function toggleMap(open = mapcard.hidden) {
    if (open) toggleMenu(false);
    mapcard.hidden = !open;
    mapBtn.setAttribute('aria-expanded', String(open));
    if (open) drawMap(); else if (document.activeElement && mapcard.contains(document.activeElement)) mapBtn.focus();
  }
  mapBtn.addEventListener('click', () => toggleMap());
  mapcard.addEventListener('click', () => toggleMap(false));

  // ---- the gear menu --------------------------------------------------------------------------------------------
  function refresh() {
    for (const r of menu.querySelectorAll('input[name="move"]')) r.checked = r.value === getMovement();
    reduceBox.checked = getReduceMotion();
  }
  function toggleMenu(open = menu.hidden) {
    if (open) { toggleMap(false); refresh(); }
    menu.hidden = !open;
    gearBtn.setAttribute('aria-expanded', String(open));
    if (open) { const first = menu.querySelector('input:checked') || menu.querySelector('input'); if (first) first.focus(); }
    else if (menu.contains(document.activeElement)) gearBtn.focus();
  }
  gearBtn.addEventListener('click', () => toggleMenu());
  $('menuclose').addEventListener('click', () => toggleMenu(false));
  for (const r of menu.querySelectorAll('input[name="move"]')) r.addEventListener('change', () => { if (r.checked) setMovement(r.value); });
  reduceBox.addEventListener('change', () => { reduceTouched = true; setReduceMotion(reduceBox.checked); });
  $('restart').addEventListener('click', () => { if (restart()) { toggleMenu(false); note('Back in the Courtyard. The map is kept.'); } });

  function setMovementHelp(m) {
    keysEl.textContent = m === 'step'
      ? 'Keys: ↑ ↓ (or W S) step forward and back, ← → (or A D) turn. M the map.'
      : 'Keys: hold ↑ ↓ (or W S) to walk, ← → (or A D) to turn, or drag across the view. M the map.';
    hintEl.textContent = document.body.classList.contains('touch')
      ? (m === 'step' ? 'Tap the arrows to step and turn.' : 'Left thumb: walk and turn. Drag on the right to look round.')
      : (m === 'step' ? '↑ ↓ to step, ← → to turn.' : 'Hold ↑ or W to walk, ← → to turn, or drag across the view.');
  }

  return {
    note,
    moved: hideHint,
    setRoom(name) { if (roomEl.textContent !== name) roomEl.textContent = name; if (!mapcard.hidden) drawMap(); },
    setFade(a) { const v = String(Math.round(a * 1000) / 1000); if (fadeEl.style.opacity !== v) fadeEl.style.opacity = v; },
    isOpen: () => !menu.hidden || !mapcard.hidden,
    // Keys the page itself handles; true when used.
    key(e) {
      const typingInMenu = e.target && menu.contains(e.target) && e.code !== 'Escape';
      if (typingInMenu) return false;
      if (e.code === 'KeyM') { toggleMap(); return true; }
      if (e.code === 'Escape' && (!menu.hidden || !mapcard.hidden)) { toggleMenu(false); toggleMap(false); return true; }
      return false;
    },
    setMovementHelp,
    refresh,
    reduceTouched: () => reduceTouched,
  };
}
