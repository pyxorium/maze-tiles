// dev/card-art.js: draws the maze's card pictures from the 3D rooms, with the tile's own code (it runs in the
// frame on dev/card-art.html, served by dev/serve.mjs), using the tile's still-picture hook (window.__maze).
//   banner.png (1280 x 720): the Courtyard at the start, the Gallery through its door, the stairs climbing into
//                            Landing I's teal
//   icon.png (256 x 256): the Courtyard's stairs, Landing I's teal showing through the gap at the top
export const SHOTS = {
  banner: { w: 1280, h: 720, room: 'courtyard', at: [2.9, 4.9], yaw: 0.16 },
  icon: { w: 256, h: 256, room: 'courtyard', at: [4.5, 5.3], yaw: 0 },
};

export function take(maze, s) {
  maze.jump(s.room, s.at, s.yaw);
  return maze.snapshot(s.w, s.h);
}

const frame = document.getElementById('maze');
if (frame) {
  const ready = () => new Promise((r) => { const t = setInterval(() => { if (frame.contentWindow && frame.contentWindow.__maze) { clearInterval(t); r(frame.contentWindow.__maze); } }, 100); });
  ready().then(async (maze) => {
    await new Promise((r) => setTimeout(r, 500));
    for (const name of Object.keys(SHOTS)) {
      const url = take(maze, SHOTS[name]);
      document.getElementById(name).src = url;
      document.getElementById(`get-${name}`).href = url;
    }
    window.__cardArt = { done: true };
  });
}
