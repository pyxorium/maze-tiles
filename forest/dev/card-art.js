// forest/dev/card-art.js: draws Winter Forest's card pictures with the tile's own code (it runs in the frame on
// card-art.html, served by forest/dev/serve.mjs), using the tile's still-picture hook (window.__forest.snapshot).
//   banner.png (1280 x 720), also the postcard (W23): the lamp post glowing in the clearing, seen through the spruces
//                            from partway up the slide's path (west of the clearing), no figure
//   icon.png (256 x 256): the lamp post close, the snow and the dark trees behind it
export const SHOTS = {
  banner: { w: 1280, h: 720, at: { x: -12.0, z: 1.3, yaw: 0, camera: [-12.6, 1.55, 1.5], look: [0, 2.6, -0.4] } },
  icon: { w: 256, h: 256, at: { x: -4.2, z: 1.0, yaw: 0, camera: [-4.6, 2.2, 1.6], look: [0, 3.0, 0] } },
};

const frame = document.getElementById('forest');
if (frame) {
  const ready = () => new Promise((r) => { const t = setInterval(() => { if (frame.contentWindow && frame.contentWindow.__forest) { clearInterval(t); r(frame.contentWindow.__forest); } }, 100); });
  ready().then(async (forest) => {
    await new Promise((r) => setTimeout(r, 800));
    for (const name of Object.keys(SHOTS)) {
      const s = SHOTS[name];
      const url = forest.snapshot(s.w, s.h, s.at);
      document.getElementById(name).src = url;
      document.getElementById(`get-${name}`).href = url;
    }
    window.__cardArt = { done: true };
  });
}
