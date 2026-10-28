// textures.js: Winter Forest's textures, all drawn in code on canvases (no picture files): wood, bark, stone,
// cobbles, the library's snowy mossy roof and frosted windows, book spines, embers. Shared by portals.js (the
// portals' outsides) and the insides (library.js, tunnel.js).
import * as THREE from 'three';
import { rng } from './layout.js';

// ---- textures drawn in code --------------------------------------------------------------------------------------------
export function canvasTexture(w, h, draw, { repeat = null, srgb = true } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...repeat); }
  t.anisotropy = 4;
  return t;
}
export const woodTexture = (base = '#5a3a24', grain = 'rgba(30,16,8,0.35)', planks = 4) => canvasTexture(256, 256, (g, w, h) => {
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  const rand = rng(5);
  for (let i = 0; i < 120; i++) { g.strokeStyle = grain; g.lineWidth = 0.6 + rand() * 1.4; g.beginPath(); const x = rand() * w; g.moveTo(x, 0); g.bezierCurveTo(x + rand() * 8 - 4, h / 3, x + rand() * 8 - 4, (2 * h) / 3, x + rand() * 6 - 3, h); g.stroke(); }
  g.fillStyle = 'rgba(15,8,4,0.6)';
  for (let i = 1; i < planks; i++) g.fillRect((i * w) / planks - 1, 0, 2, h);
});
export const barkTexture = () => canvasTexture(256, 512, (g, w, h) => {
  g.fillStyle = '#4b3a2e'; g.fillRect(0, 0, w, h);
  const rand = rng(11);
  for (let i = 0; i < 90; i++) {
    const x = rand() * w, wd = 3 + rand() * 9;
    g.fillStyle = rand() < 0.5 ? 'rgba(20,14,10,0.55)' : 'rgba(120,100,82,0.25)';
    g.beginPath(); g.moveTo(x, 0);
    for (let y = 0; y <= h; y += 32) g.lineTo(x + Math.sin(y * 0.03 + i) * 6, y);
    for (let y = h; y >= 0; y -= 32) g.lineTo(x + wd + Math.sin(y * 0.03 + i) * 6, y);
    g.fill();
  }
}, { repeat: [3, 2] });
export const stoneTexture = (seed = 3) => canvasTexture(256, 256, (g, w, h) => {
  g.fillStyle = '#d2ccc0'; g.fillRect(0, 0, w, h);
  const rand = rng(seed);
  for (let i = 0; i < 1600; i++) { const v = 150 + rand() * 80; g.fillStyle = `rgba(${v},${v - 4},${v - 12},0.35)`; g.fillRect(rand() * w, rand() * h, 2 + rand() * 6, 2 + rand() * 6); }
});
export const cobbleTexture = () => canvasTexture(512, 512, (g, w, h) => {
  g.fillStyle = '#3d3a36'; g.fillRect(0, 0, w, h);
  const rand = rng(21);
  for (let row = 0, y = 0; y < h + 40; row++) {
    const rh = 34 + rand() * 14;
    for (let x = (row % 2) * -20; x < w + 40;) {
      const rw = 42 + rand() * 26, v = 105 + rand() * 60, t = rand() * 18;
      g.fillStyle = `rgb(${v + t},${v + t * 0.6},${v - 8})`;
      g.beginPath(); g.ellipse(x + rw / 2, y + rh / 2, rw / 2 - 3, rh / 2 - 3, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.08)'; g.beginPath(); g.ellipse(x + rw / 2 - 4, y + rh / 2 - 5, rw / 3, rh / 5, 0, 0, Math.PI * 2); g.fill();
      x += rw;
    }
    y += rh;
  }
}, { repeat: [2.5, 1.2] });
export const roofTexture = () => canvasTexture(256, 256, (g, w, h) => {
  // Snow over moss: white above, the moss showing towards the eaves (the bottom of the picture) and in patches.
  g.fillStyle = '#e8eef7'; g.fillRect(0, 0, w, h);
  const rand = rng(31);
  for (let i = 0; i < 140; i++) {
    const y = h * (0.45 + rand() * 0.6), x = rand() * w, r = 6 + rand() * 22;
    g.fillStyle = rand() < 0.6 ? 'rgba(62,92,52,0.85)' : 'rgba(92,118,66,0.8)';
    g.beginPath(); g.ellipse(x, y, r, r * 0.6, 0, 0, Math.PI * 2); g.fill();
  }
  const grad = g.createLinearGradient(0, h * 0.85, 0, h); grad.addColorStop(0, 'rgba(232,238,247,0)'); grad.addColorStop(1, 'rgba(232,238,247,0.95)');
  g.fillStyle = grad; g.fillRect(0, 0, w, h);
});
export const windowTexture = () => canvasTexture(128, 160, (g, w, h) => {
  const grad = g.createRadialGradient(w / 2, h * 0.55, 6, w / 2, h * 0.55, h * 0.75);
  grad.addColorStop(0, '#ffd9a0'); grad.addColorStop(0.6, '#e99a4c'); grad.addColorStop(1, '#a8582a');
  g.fillStyle = grad; g.fillRect(0, 0, w, h);
  // Soft shapes inside (shelves, a lamp) and frost round the edges.
  g.fillStyle = 'rgba(90,45,20,0.35)';
  for (let i = 0; i < 4; i++) g.fillRect(8, 30 + i * 30, w * 0.35, 6);
  g.fillStyle = 'rgba(255,240,200,0.5)'; g.beginPath(); g.arc(w * 0.72, h * 0.5, 9, 0, Math.PI * 2); g.fill();
  const rand = rng(41);
  for (let i = 0; i < 260; i++) {
    const edge = rand() < 0.5, x = edge ? (rand() < 0.5 ? rand() * 22 : w - rand() * 22) : rand() * w, y = edge ? rand() * h : (rand() < 0.5 ? rand() * 22 : h - rand() * 22);
    g.fillStyle = `rgba(235,242,255,${0.12 + rand() * 0.3})`; g.beginPath(); g.arc(x, y, 1 + rand() * 4, 0, Math.PI * 2); g.fill();
  }
});

// Panelling inside the library: warm boards with a darker line between each, a little grain.
export const panelTexture = () => canvasTexture(256, 256, (g, w, h) => {
  g.fillStyle = '#6b4a30'; g.fillRect(0, 0, w, h);
  const rand = rng(51);
  for (let i = 0; i < 8; i++) {
    g.fillStyle = `rgba(${110 + rand() * 30},${74 + rand() * 18},${44 + rand() * 12},0.55)`; g.fillRect((i * w) / 8, 0, w / 8 - 3, h);
    g.fillStyle = 'rgba(25,14,6,0.65)'; g.fillRect(((i + 1) * w) / 8 - 3, 0, 3, h);
  }
  for (let i = 0; i < 160; i++) { g.strokeStyle = 'rgba(40,22,10,0.18)'; g.lineWidth = 0.6 + rand(); g.beginPath(); const x = rand() * w; g.moveTo(x, 0); g.lineTo(x + rand() * 4 - 2, h); g.stroke(); }
}, { repeat: [1, 1] });
// A page of an open book: cream with faint lines of writing.
export const pageTexture = () => canvasTexture(128, 160, (g, w, h) => {
  g.fillStyle = '#efe6d2'; g.fillRect(0, 0, w, h);
  const rand = rng(61);
  g.fillStyle = 'rgba(70,55,40,0.45)';
  for (let y = 18; y < h - 14; y += 7) { let x = 12; while (x < w - 14) { const l = 4 + rand() * 16; g.fillRect(x, y, Math.min(l, w - 14 - x), 2); x += l + 3; } }
});
// Glass seen from inside: clear in the middle, frost creeping in from the edges (its alpha), a faint cool tint.
export const frostTexture = (round = false) => canvasTexture(128, 128, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  const rand = rng(round ? 73 : 71);
  g.fillStyle = 'rgba(170,195,230,0.10)'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 700; i++) {
    const t = Math.pow(rand(), 2.2) * 0.22;
    const side = Math.floor(rand() * 4), a = rand();
    const [x, y] = round ? [w / 2 + Math.cos(a * 6.283) * (0.5 - t) * w, h / 2 + Math.sin(a * 6.283) * (0.5 - t) * h]
      : side === 0 ? [a * w, t * h] : side === 1 ? [a * w, h - t * h] : side === 2 ? [t * w, a * h] : [w - t * w, a * h];
    g.fillStyle = `rgba(230,240,255,${0.15 + rand() * 0.35})`; g.beginPath(); g.arc(x, y, 0.8 + rand() * 3, 0, Math.PI * 2); g.fill();
  }
});
// Carved wood for the tunnel: the long grain of the trunk with growth rings showing as bands where it was cut.
export const carvedTexture = () => canvasTexture(256, 512, (g, w, h) => {
  g.fillStyle = '#7a5434'; g.fillRect(0, 0, w, h);
  const rand = rng(81);
  for (let i = 0; i < 26; i++) {
    const y = rand() * h, amp = 6 + rand() * 18;
    g.strokeStyle = rand() < 0.5 ? 'rgba(60,34,16,0.45)' : 'rgba(160,118,78,0.3)'; g.lineWidth = 1.5 + rand() * 4;
    g.beginPath(); for (let x = 0; x <= w; x += 8) g.lineTo(x, y + Math.sin(x * 0.02 + i) * amp); g.stroke();
  }
  for (let i = 0; i < 300; i++) { g.strokeStyle = 'rgba(40,22,10,0.2)'; g.lineWidth = 0.5 + rand(); g.beginPath(); const x = rand() * w; g.moveTo(x, 0); g.bezierCurveTo(x + rand() * 10 - 5, h / 3, x + rand() * 10 - 5, (2 * h) / 3, x, h); g.stroke(); }
}, { repeat: [2, 3] });
