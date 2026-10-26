// dev/card-art.js: draws the maze's card pictures with the tile's own drawing code (served by dev/serve.mjs,
// which serves the tile's files at /).
//   banner.png (1280 x 720): three rooms side by side, one from each area: the Courtyard, Landing I, the Great Hall
//   icon.png (256 x 256): Landing I, the figure on its stairs
import { MAP } from '/map.js';
import { buildScene, drawScene, fitView, rgb } from '/render.js';

function room(ctx, id, box, figure, bg = true) {
  const sc = buildScene(MAP, id);
  if (bg) { ctx.fillStyle = rgb(sc.area.bg); ctx.fillRect(box.x, box.y, box.w, box.h); }
  const pad = box.pad ?? 24;
  const v = fitView(sc, { x: box.x + pad, y: box.y + pad, w: box.w - pad * 2, h: box.h - pad * 2 });
  drawScene(ctx, sc, v, { markers: false, figure: { facing: 'ne', alpha: 1, bob: 0, ...figure } });
}

export function drawBanner(canvas) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width / 3, h = canvas.height;
  room(ctx, 'courtyard', { x: 0, y: 0, w, h, pad: 40 }, { x: 2.5, y: 4.5, z: 0, facing: 'ne' });
  room(ctx, 'landing1', { x: w, y: 0, w, h, pad: 40 }, { x: 5.5, y: 2.5, z: 1, facing: 'ne' });
  room(ctx, 'hall', { x: w * 2, y: 0, w, h, pad: 40 }, { x: 0.5, y: 2.5, z: 0, facing: 'nw' });
}

export function drawIcon(canvas) {
  const ctx = canvas.getContext('2d');
  room(ctx, 'landing1', { x: 0, y: 0, w: canvas.width, h: canvas.height, pad: 6 }, { x: 5.5, y: 2.5, z: 1, facing: 'ne' });
}

const banner = document.getElementById('banner');
const icon = document.getElementById('icon');
drawBanner(banner);
drawIcon(icon);
for (const [id, c] of [['get-banner', banner], ['get-icon', icon]]) c.toBlob((b) => { document.getElementById(id).href = URL.createObjectURL(b); }, 'image/png');
window.__cardArt = { banner: () => banner.toDataURL('image/png'), icon: () => icon.toDataURL('image/png') };
