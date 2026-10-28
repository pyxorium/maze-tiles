// forest/dev/card-art.js: draws Winter Forest's card pictures with the tile's own code (it runs in the frame on
// card-art.html, served by forest/dev/serve.mjs), using the tile's still-picture hook (window.__forest.snapshot).
//   banner.jpg (1280 x 720), also the postcard (W23): the lamp post glowing in the clearing, seen through the spruces
//                            from partway up the slide's path (west of the clearing), no figure. A JPEG at quality
//                            0.92 (W45: about 120 to 150 KB; the PNG was about 490 KB)
//   icon.png (256 x 256): the lamp post close, the snow and the dark trees behind it
export const SHOTS = {
  banner: { w: 1280, h: 720, jpeg: 0.92, at: { x: -12.0, z: 1.3, yaw: 0, camera: [-12.6, 1.55, 1.5], look: [0, 2.6, -0.4] } },
  icon: { w: 256, h: 256, at: { x: -4.2, z: 1.0, yaw: 0, camera: [-4.6, 2.2, 1.6], look: [0, 3.0, 0] } },
};

// The snapshot is a PNG; the banner is saved as a JPEG.
async function toJpeg(png, w, h, quality) {
  const img = new Image();
  img.src = png;
  await img.decode();
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  c.getContext('2d').drawImage(img, 0, 0);
  return c.toDataURL('image/jpeg', quality);
}

const frame = document.getElementById('forest');
if (frame) {
  const ready = () => new Promise((r) => { const t = setInterval(() => { if (frame.contentWindow && frame.contentWindow.__forest) { clearInterval(t); r(frame.contentWindow.__forest); } }, 100); });
  ready().then(async (forest) => {
    await new Promise((r) => setTimeout(r, 800));
    for (const name of Object.keys(SHOTS)) {
      const s = SHOTS[name];
      const png = forest.snapshot(s.w, s.h, s.at);
      const url = s.jpeg ? await toJpeg(png, s.w, s.h, s.jpeg) : png;
      document.getElementById(name).src = url;
      document.getElementById(`get-${name}`).href = url;
    }
    window.__cardArt = { done: true };
  });
}
