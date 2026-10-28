// postcard.js: what Winter Forest shows until a host brings you in (W16, W23): the card's picture (banner.jpg)
// filling the tile, snow still falling gently over it (so it doesn't look broken or frozen), and after a moment the
// quiet line "This place is reached through other places." (it waits a little, so a normal arrival never shows it).
let raf = 0, lineTimer = 0;

export function showPostcard({ inFrame = true } = {}) {
  const card = document.getElementById('postcard'), canvas = document.getElementById('pcsnow'), line = document.getElementById('pcline');
  if (!card) return;
  card.hidden = false;
  line.classList.remove('show');
  clearTimeout(lineTimer);
  lineTimer = setTimeout(() => line.classList.add('show'), inFrame ? 1400 : 600);
  const g = canvas.getContext('2d');
  const flakes = [];
  let w = 0, h = 0, last = performance.now();
  const size = () => {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    w = card.clientWidth; h = card.clientHeight;
    canvas.width = Math.max(1, Math.round(w * dpr)); canvas.height = Math.max(1, Math.round(h * dpr));
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const want = Math.round((w * h) / 2600);
    while (flakes.length < want) flakes.push({ x: Math.random() * w, y: Math.random() * h, r: 0.6 + Math.random() * 1.8, s: 12 + Math.random() * 26, p: Math.random() * 6.28 });
    flakes.length = want;
  };
  size();
  window.addEventListener('resize', size);
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tick = (now) => {
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    g.clearRect(0, 0, w, h);
    for (const f of flakes) {
      if (!reduce) { f.y += f.s * dt; f.x += Math.sin(now / 1400 + f.p) * 6 * dt; }
      if (f.y > h + 4) { f.y = -4; f.x = Math.random() * w; }
      g.globalAlpha = 0.45 + f.r * 0.2;
      g.fillStyle = '#f2f6ff';
      g.beginPath(); g.arc(f.x, f.y, f.r, 0, Math.PI * 2); g.fill();
    }
    raf = requestAnimationFrame(tick);
  };
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(tick);
}

export function hidePostcard() {
  const card = document.getElementById('postcard');
  if (card) card.hidden = true;
  cancelAnimationFrame(raf); clearTimeout(lineTimer);
}
