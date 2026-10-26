// controls.js: keys, dragging to turn, the thumb joystick and the arrow buttons (M8, M15).
//
// Keys: ↑ ↓ or W S walk (or step), ← → or A D turn. Free walking: hold them; drag across the view to turn.
// Phones: in free walking a soft circle appears where the left thumb lands in the lower left (up to walk, further
// is faster; down to back up; sideways to turn), and dragging on the right side turns. In step and turn the
// corner shows four arrow buttons (one tap, one step or turn).

const KEYS = { ArrowUp: 'forward', KeyW: 'forward', ArrowDown: 'back', KeyS: 'back', ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right' };
const RADIUS = 56;          // the joystick's reach, in pixels
const DEAD = 0.14;

export function createControls({ canvas, held, stick, isFree, onCommand, onDrag, onMoved, blocked, onKey, repeat = () => true }) {
  const body = document.body;
  const base = document.getElementById('stick');
  const knob = document.getElementById('knob');
  const typing = (e) => e.target && /^(INPUT|SELECT|TEXTAREA|BUTTON)$/.test(e.target.tagName) && e.target.closest('#menu');
  const clearHeld = () => { for (const k in held) held[k] = false; stick.x = 0; stick.y = 0; };

  window.addEventListener('keydown', (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (onKey(e)) { e.preventDefault(); return; }
    if (typing(e) || blocked()) return;
    const c = KEYS[e.code];
    if (!c) return;
    e.preventDefault();
    onMoved();
    if (isFree()) held[c] = true;
    else if (!e.repeat || repeat()) onCommand(c);
  });
  window.addEventListener('keyup', (e) => { const c = KEYS[e.code]; if (c) held[c] = false; });
  window.addEventListener('blur', clearHeld);
  document.addEventListener('visibilitychange', () => { if (document.hidden) clearHeld(); });

  // Touch devices get the touch controls; a first touch anywhere turns them on too.
  const coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  if (coarse) body.classList.add('touch');

  let stickId = null, stickAt = [0, 0];
  let dragId = null, dragLast = 0;
  const inStickZone = (e) => {
    const r = canvas.getBoundingClientRect();
    return e.clientX - r.left < r.width * 0.5 && e.clientY - r.top > r.height * 0.4;
  };
  const showStick = (x, y) => {
    const r = canvas.getBoundingClientRect();
    base.style.left = `${x - r.left}px`; base.style.top = `${y - r.top}px`;
    base.hidden = false;
    moveKnob(0, 0);
  };
  const moveKnob = (dx, dy) => { knob.style.transform = `translate(${dx}px, ${dy}px)`; };

  canvas.addEventListener('pointerdown', (e) => {
    if (blocked()) return;
    if (e.pointerType === 'touch') body.classList.add('touch');
    if (e.pointerType === 'touch' && isFree() && stickId === null && inStickZone(e)) {
      stickId = e.pointerId; stickAt = [e.clientX, e.clientY];
      showStick(e.clientX, e.clientY);
    } else if (dragId === null) {
      dragId = e.pointerId; dragLast = e.clientX;
    } else return;
    try { canvas.setPointerCapture(e.pointerId); } catch { /* already gone */ }
    onMoved();
  });
  canvas.addEventListener('pointermove', (e) => {
    if (e.pointerId === stickId) {
      let dx = e.clientX - stickAt[0], dy = e.clientY - stickAt[1];
      const d = Math.hypot(dx, dy);
      if (d > RADIUS) { dx *= RADIUS / d; dy *= RADIUS / d; }
      moveKnob(dx, dy);
      const sx = dx / RADIUS, sy = dy / RADIUS;
      stick.x = Math.abs(sx) < DEAD ? 0 : (sx - Math.sign(sx) * DEAD) / (1 - DEAD);
      stick.y = Math.abs(sy) < DEAD ? 0 : (sy - Math.sign(sy) * DEAD) / (1 - DEAD);
    } else if (e.pointerId === dragId) {
      if (isFree()) onDrag(e.clientX - dragLast);
      dragLast = e.clientX;
    }
  });
  const end = (e) => {
    if (e.pointerId === stickId) { stickId = null; stick.x = 0; stick.y = 0; base.hidden = true; }
    if (e.pointerId === dragId) dragId = null;
  };
  for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) canvas.addEventListener(ev, end);

  // The arrow buttons (step and turn).
  for (const b of document.querySelectorAll('#pad [data-cmd]')) {
    b.addEventListener('pointerdown', (e) => { e.preventDefault(); onMoved(); onCommand(b.dataset.cmd); });
    b.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onCommand(b.dataset.cmd); } });
  }

  return {
    setMovement(m) {
      clearHeld();
      stickId = null; base.hidden = true;
      body.classList.toggle('step', m === 'step');
      body.classList.toggle('free', m !== 'step');
    },
  };
}
