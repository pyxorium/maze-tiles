// looks.js: the pictures behind the song in the track renderer (claude/mixtape-3c-track-renderer-notes.md, R3c-2 and
// R3c-8; drawn as approved in claude/raku-track-renderer-mockup.html). One canvas, three looks drawn on it (Plain
// draws nothing): the Jukebox, the Reel-to-reel and the Oscilloscope. Each frame gets what the music is doing from
// track.js (the analyser's bands and levels) and draws; nothing here touches the page beyond the canvas.
//
//   const scene = createScene(canvas);
//   scene.draw(look, dt, { playing, time, duration, lessMotion, colour, bands(n) → [0..1]×n, level(channel) → 0..1 })
// track/dev/card-art.html uses the same drawing for the tile's icon and banner.

export function createScene(cv) {
  const g = cv.getContext('2d');
  let W = 0, H = 0;
  let spin = 0, reelL = 0, reelR = 0, needleL = 0, needleR = 0, hueDrift = 0;
  const bubbles = Array.from({ length: 22 }, () => ({ y: Math.random(), x: Math.random(), r: 2 + Math.random() * 3, s: 0.2 + Math.random() * 0.5 }));
  const scopeAmp = new Array(6).fill(0);
  const scopePh = [0, 1.1, 2.3, 0.7, 1.9, 2.8];

  // The canvas's size on the page (or, for the card art, a size given in pixels).
  function resize(w, h, scale) {
    const r = w ? { width: w, height: h } : cv.getBoundingClientRect();
    const dpr = scale || Math.min(2, globalThis.devicePixelRatio || 1);
    W = r.width; H = r.height;
    cv.width = Math.max(1, Math.round(W * dpr)); cv.height = Math.max(1, Math.round(H * dpr));
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function roundRect(x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }

  // ---- Jukebox: an arched wooden cabinet, a light arch driven by the music, a spinning record, bubble tubes ----
  function jukebox(dt, s) {
    const bg = g.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, '#2a1730'); bg.addColorStop(1, '#120a14'); g.fillStyle = bg; g.fillRect(0, 0, W, H);
    g.save(); g.globalAlpha = 0.18; const sq = 26;
    for (let y = H * 0.8; y < H; y += sq) for (let x = (Math.floor(y / sq) % 2) * sq; x < W; x += sq * 2) { g.fillStyle = '#e9dcc8'; g.fillRect(x, y, sq, sq); }
    g.restore();
    const b = s.bands(14), avg = b.reduce((a, x) => a + x, 0) / b.length;
    const ch = H - 16, cw = Math.min(W * 0.62, ch * 0.92), cx = W / 2, top = 10, r = cw / 2;
    const glow = g.createRadialGradient(cx, top + r, 10, cx, top + r, r * 1.6);
    glow.addColorStop(0, `rgba(255,170,60,${0.12 + avg * 0.35})`); glow.addColorStop(1, 'rgba(255,170,60,0)');
    g.fillStyle = glow; g.fillRect(0, 0, W, H);
    const wood = g.createLinearGradient(cx - r, 0, cx + r, 0); wood.addColorStop(0, '#4a2612'); wood.addColorStop(0.5, '#8b4f24'); wood.addColorStop(1, '#4a2612');
    g.fillStyle = wood; g.beginPath(); g.moveTo(cx - r, top + ch); g.lineTo(cx - r, top + r); g.arc(cx, top + r, r, Math.PI, 0); g.lineTo(cx + r, top + ch); g.closePath(); g.fill();
    const ar = r * 0.9, aw = Math.max(8, r * 0.13);
    for (let i = 0; i < b.length; i++) {
      const a0 = Math.PI + (i / b.length) * Math.PI, a1 = Math.PI + ((i + 1) / b.length) * Math.PI;
      const hue = (i / b.length) * 300, lit = 0.25 + b[i] * 0.75;
      g.strokeStyle = `hsla(${hue},95%,${35 + lit * 30}%,${0.35 + lit * 0.65})`; g.lineWidth = aw; g.shadowColor = `hsl(${hue},100%,60%)`; g.shadowBlur = 6 + lit * 22;
      g.beginPath(); g.arc(cx, top + r, ar, a0 + 0.012, a1 - 0.012); g.stroke();
    }
    g.shadowBlur = 0;
    for (const side of [-1, 1]) {
      const x = cx + side * ar, lit = 0.3 + (side < 0 ? b[0] : b[b.length - 1]) * 0.7;
      const pl = g.createLinearGradient(0, top + r, 0, top + ch - 10); pl.addColorStop(0, `hsla(${side < 0 ? 0 : 300},90%,60%,${lit})`); pl.addColorStop(1, `hsla(${side < 0 ? 40 : 260},90%,50%,${lit * 0.6})`);
      g.fillStyle = pl; g.fillRect(x - aw / 2, top + r, aw, ch - r - 10);
    }
    const wr = r * 0.62, wy = top + r + r * 0.05;
    g.fillStyle = '#1b0f0a'; g.beginPath(); g.arc(cx, wy, wr, Math.PI, 0); g.lineTo(cx + wr, wy + wr * 0.55); g.lineTo(cx - wr, wy + wr * 0.55); g.closePath(); g.fill();
    if (s.playing) spin += dt * (s.lessMotion ? 0.4 : 3.5);
    const rr = wr * 0.62, ry = wy + wr * 0.05;
    g.save(); g.translate(cx, ry); g.scale(1, 0.42); g.rotate(spin);
    g.fillStyle = '#0a0a0a'; g.beginPath(); g.arc(0, 0, rr, 0, Math.PI * 2); g.fill();
    g.strokeStyle = 'rgba(255,255,255,.07)'; g.lineWidth = 1; for (let k = 0.35; k < 1; k += 0.08) { g.beginPath(); g.arc(0, 0, rr * k, 0, Math.PI * 2); g.stroke(); }
    g.strokeStyle = 'rgba(255,255,255,.22)'; g.lineWidth = 3; g.beginPath(); g.arc(0, 0, rr * 0.8, -0.4, 0.3); g.stroke();
    g.fillStyle = '#c0392b'; g.beginPath(); g.arc(0, 0, rr * 0.3, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#f6e7c8'; g.beginPath(); g.arc(rr * 0.15, 0, rr * 0.05, 0, Math.PI * 2); g.fill();
    g.restore();
    const gy = wy + wr * 0.62, gh = top + ch - gy - 14, gw = wr * 1.7;
    roundRect(cx - gw / 2, gy, gw, gh, 10); const chrome = g.createLinearGradient(0, gy, 0, gy + gh); chrome.addColorStop(0, '#e9ecef'); chrome.addColorStop(0.5, '#8d949b'); chrome.addColorStop(1, '#d7dbe0'); g.fillStyle = chrome; g.fill();
    g.fillStyle = '#3b1f10'; for (let i = 1; i < 9; i++) g.fillRect(cx - gw / 2 + (gw / 9) * i - 2, gy + 6, 4, gh - 12);
    if (W < 420) return;
    for (const side of [-1, 1]) {
      const tx = cx + side * (r + 16), tw = 14, ty = top + r * 0.55, th = ch - r * 0.55 - 6;
      roundRect(tx - tw / 2, ty, tw, th, 7); const tube = g.createLinearGradient(tx - tw / 2, 0, tx + tw / 2, 0);
      tube.addColorStop(0, `hsla(${side < 0 ? 20 : 280},80%,40%,.9)`); tube.addColorStop(0.5, `hsla(${side < 0 ? 40 : 300},90%,${55 + avg * 20}%,.95)`); tube.addColorStop(1, `hsla(${side < 0 ? 20 : 280},80%,40%,.9)`);
      g.fillStyle = tube; g.fill();
      g.fillStyle = 'rgba(255,255,255,.55)';
      for (const bb of bubbles) {
        if (s.playing) bb.y -= dt * bb.s * (0.4 + avg * 2) * (s.lessMotion ? 0.1 : 1);
        if (bb.y < 0) { bb.y = 1; bb.x = Math.random(); }
        g.beginPath(); g.arc(tx + (bb.x - 0.5) * (tw - 6), ty + 4 + bb.y * (th - 8), bb.r * 0.7, 0, Math.PI * 2); g.fill();
      }
    }
  }

  // ---- Reel-to-reel: two turning reels, the tape between them, level needles, a counter ----
  function reel(dt, s) {
    const bg = g.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, '#3a3d42'); bg.addColorStop(1, '#1e2024'); g.fillStyle = bg; g.fillRect(0, 0, W, H);
    const dw = Math.min(W - 24, H * 1.55), dx = (W - dw) / 2, dy = 10, dh = H - 20;
    roundRect(dx, dy, dw, dh, 12); const metal = g.createLinearGradient(0, dy, 0, dy + dh); metal.addColorStop(0, '#d9dadc'); metal.addColorStop(0.5, '#b8babd'); metal.addColorStop(1, '#cfd0d2'); g.fillStyle = metal; g.fill();
    g.strokeStyle = 'rgba(255,255,255,.18)'; g.lineWidth = 1; for (let y = dy + 4; y < dy + dh; y += 3) { g.beginPath(); g.moveTo(dx + 4, y); g.lineTo(dx + dw - 4, y); g.stroke(); }
    const p = s.duration ? Math.min(1, s.time / s.duration) : 0;
    const R = Math.min(dw * 0.2, dh * 0.3), cy = dy + R + 14, lx = dx + dw * 0.26, rx = dx + dw * 0.74;
    const hub = R * 0.28, packL = hub + (R * 0.92 - hub) * (1 - p), packR = hub + (R * 0.92 - hub) * p;
    if (s.playing) { const sp = s.lessMotion ? 0.3 : 1; reelL += dt * sp * (R * 2.2 / Math.max(packL, 1)); reelR += dt * sp * (R * 2.2 / Math.max(packR, 1)); }
    const hx = dx + dw / 2, hy = cy + R + 8;
    g.strokeStyle = '#5a3a1e'; g.lineWidth = 2;
    g.beginPath(); g.moveTo(lx - packL * 0.2, cy + packL); g.lineTo(hx - 34, hy); g.lineTo(hx + 34, hy); g.lineTo(rx + packR * 0.2, cy + packR); g.stroke();
    roundRect(hx - 30, hy - 9, 60, 18, 4); g.fillStyle = '#2a2c30'; g.fill();
    g.fillStyle = '#9ea3a8'; for (const k of [-16, 0, 16]) g.fillRect(hx + k - 4, hy - 7, 8, 14);
    for (const [x, pack, ang] of [[lx, packL, reelL], [rx, packR, reelR]]) {
      g.fillStyle = '#4a2f18'; g.beginPath(); g.arc(x, cy, pack, 0, Math.PI * 2); g.fill();
      g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = 1; for (let k = hub; k < pack; k += 3) { g.beginPath(); g.arc(x, cy, k, 0, Math.PI * 2); g.stroke(); }
      g.save(); g.translate(x, cy); g.rotate(ang);
      g.fillStyle = 'rgba(225,228,232,.92)'; g.beginPath(); g.arc(0, 0, R, 0, Math.PI * 2);
      for (let i = 0; i < 3; i++) { const a = i * (Math.PI * 2 / 3); g.moveTo(Math.cos(a) * R * 0.78, Math.sin(a) * R * 0.78); g.arc(0, 0, R * 0.78, a, a + Math.PI * 0.42); g.arc(0, 0, R * 0.38, a + Math.PI * 0.42, a, true); g.closePath(); }
      g.fill('evenodd');
      g.strokeStyle = '#7d838a'; g.lineWidth = 2; g.beginPath(); g.arc(0, 0, R, 0, Math.PI * 2); g.stroke();
      g.fillStyle = '#30343a'; g.beginPath(); g.arc(0, 0, hub * 0.7, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#c9cdd2'; for (let i = 0; i < 3; i++) { const a = i * 2.094 + 0.5; g.fillRect(Math.cos(a) * hub * 0.4 - 2, Math.sin(a) * hub * 0.4 - 2, 4, 4); }
      g.restore();
    }
    const mW = Math.min(dw * 0.2, 150), mH = mW * 0.62, my = dy + dh - mH - 10;
    needleL += (s.level(0) - needleL) * Math.min(1, dt * 12); needleR += (s.level(1) - needleR) * Math.min(1, dt * 12);
    [[hx - mW - 10, needleL, 'L'], [hx + 10, needleR, 'R']].forEach(([mx, v, name]) => {
      roundRect(mx, my, mW, mH, 6); g.fillStyle = '#1c1d20'; g.fill();
      roundRect(mx + 4, my + 4, mW - 8, mH - 8, 4); const face = g.createLinearGradient(0, my, 0, my + mH); face.addColorStop(0, '#fff3cf'); face.addColorStop(1, '#f1d98f'); g.fillStyle = face; g.fill();
      const px = mx + mW / 2, py = my + mH * 0.95, rad = mH * 0.72;
      g.lineWidth = 2; g.strokeStyle = '#2a2a2a'; g.beginPath(); g.arc(px, py, rad, Math.PI * 1.22, Math.PI * 1.62); g.stroke();
      g.strokeStyle = '#c0392b'; g.beginPath(); g.arc(px, py, rad, Math.PI * 1.62, Math.PI * 1.78); g.stroke();
      g.fillStyle = '#2a2a2a'; g.font = `600 ${Math.max(9, mH * 0.14)}px system-ui, sans-serif`; g.textAlign = 'center'; g.fillText('VU', px, my + mH * 0.62); g.fillText(name, mx + 14, my + mH * 0.3);
      const a = Math.PI * 1.25 + Math.min(1, v) * Math.PI * 0.5;
      g.strokeStyle = '#111'; g.lineWidth = 1.6; g.beginPath(); g.moveTo(px, py); g.lineTo(px + Math.cos(a) * rad * 1.02, py + Math.sin(a) * rad * 1.02); g.stroke();
    });
    g.fillStyle = '#1c1d20'; roundRect(dx + 16, dy + dh - 34, 74, 22, 4); g.fill();
    g.fillStyle = '#f5d76e'; g.font = '600 13px ui-monospace, Consolas, monospace'; g.textAlign = 'left'; g.fillText(String(Math.floor(s.time * 3) % 10000).padStart(4, '0'), dx + 28, dy + dh - 18);
  }

  // ---- Oscilloscope: a calm braid (R3c-8): six gentle waves, bass to treble, each following its part of the music,
  //      drawn with its mirror image about a faint centre line and a glow between the two strands; green or rainbow ----
  const CYC = [1, 2, 3, 5, 8, 13], WT = [0.55, 0.4, 0.3, 0.2, 0.14, 0.09];
  function scope(dt, s) {
    g.fillStyle = '#26282b'; g.fillRect(0, 0, W, H);
    const sx = 16, sy = 14, sw = W - (W > 520 ? 130 : 32), sh = H - 28;
    roundRect(sx, sy, sw, sh, 18); g.fillStyle = '#06120a'; g.fill();
    g.save(); roundRect(sx, sy, sw, sh, 18); g.clip();
    g.strokeStyle = 'rgba(80,200,110,.11)'; g.lineWidth = 1;
    for (let i = 1; i < 10; i++) { const x = sx + (sw / 10) * i; g.beginPath(); g.moveTo(x, sy); g.lineTo(x, sy + sh); g.stroke(); }
    for (let i = 1; i < 8; i++) { const y = sy + (sh / 8) * i; g.beginPath(); g.moveTo(sx, y); g.lineTo(sx + sw, y); g.stroke(); }
    const rainbow = s.colour === 'rainbow';
    const mid = sy + sh / 2, N = 160;
    g.strokeStyle = rainbow ? 'rgba(255,255,255,.28)' : 'rgba(125,255,154,.32)'; g.lineWidth = 1.2;
    g.beginPath(); g.moveTo(sx, mid); g.lineTo(sx + sw, mid); g.stroke();
    for (let i = 0; i <= 50; i++) { const x = sx + (sw / 50) * i, t = i % 5 === 0 ? 6 : 3; g.beginPath(); g.moveTo(x, mid - t); g.lineTo(x, mid + t); g.stroke(); }
    const lv = s.bands(6);
    for (let k = 0; k < 6; k++) {
      scopeAmp[k] += ((s.playing ? lv[k] : 0) - scopeAmp[k]) * Math.min(1, dt * 3.2);
      scopePh[k] += dt * (0.35 + k * 0.22) * (s.lessMotion ? 0.2 : 1);
    }
    if (s.playing) hueDrift += dt * 18;
    const vals = [];
    for (let i = 0; i < N; i++) {
      const x = i / (N - 1), edge = Math.min(1, x * 8, (1 - x) * 8);
      let y = 0; for (let k = 0; k < 6; k++) y += WT[k] * scopeAmp[k] * Math.sin(2 * Math.PI * CYC[k] * x + scopePh[k]);
      vals.push(y * edge);
    }
    const X = (i) => sx + (i / (N - 1)) * sw, A = sh * 0.42;
    const path = (sign) => {
      const pts = vals.map((v, i) => [X(i), mid - sign * v * A]);
      g.moveTo(pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length - 1; i++) { const mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2; g.quadraticCurveTo(pts[i][0], pts[i][1], mx, my); }
      g.lineTo(pts[pts.length - 1][0], pts[pts.length - 1][1]);
    };
    const paint = (alpha) => {
      if (!rainbow) return `rgba(125,255,154,${alpha})`;
      const gr = g.createLinearGradient(sx, 0, sx + sw, 0);
      for (let k = 0; k <= 6; k++) gr.addColorStop(k / 6, `hsla(${(hueDrift + k * 50) % 360},95%,62%,${alpha})`);
      return gr;
    };
    // the glow between the strands
    g.beginPath(); path(1); for (let i = N - 1; i >= 0; i--) g.lineTo(X(i), mid + vals[i] * A); g.closePath();
    g.fillStyle = paint(0.26); g.fill('nonzero');
    g.lineWidth = 2; g.shadowBlur = 12; g.shadowColor = rainbow ? `hsl(${(hueDrift + 150) % 360},100%,60%)` : '#3dff6a';
    g.strokeStyle = paint(1); g.beginPath(); path(1); g.stroke();
    g.strokeStyle = paint(0.75); g.beginPath(); path(-1); g.stroke();
    g.shadowBlur = 0;
    g.fillStyle = rainbow ? 'rgba(255,255,255,.7)' : 'rgba(125,255,154,.75)'; g.font = '12px ui-monospace, Consolas, monospace'; g.textAlign = 'left';
    g.fillText(`CH1  0.5 V/div   ${clock(s.time)}${s.duration ? ` / ${clock(s.duration)}` : ''}`, sx + 12, sy + sh - 12);
    g.restore();
    if (W > 520) {
      const kx = sx + sw + 50;
      [['TIME', 0.3], ['VOLTS', -0.6], ['FOCUS', 1.1]].forEach(([name, a], i) => {
        const ky = sy + 34 + i * ((sh - 50) / 2.2);
        g.fillStyle = '#111'; g.beginPath(); g.arc(kx, ky, 20, 0, Math.PI * 2); g.fill();
        g.fillStyle = '#5b5f66'; g.beginPath(); g.arc(kx, ky, 16, 0, Math.PI * 2); g.fill();
        g.strokeStyle = '#e9ecef'; g.lineWidth = 2; g.beginPath(); g.moveTo(kx, ky); g.lineTo(kx + Math.cos(a - 1.57) * 13, ky + Math.sin(a - 1.57) * 13); g.stroke();
        g.fillStyle = '#c9cdd2'; g.font = '600 10px system-ui, sans-serif'; g.textAlign = 'center'; g.fillText(name, kx, ky + 34);
      });
    }
  }

  function clock(t) {
    const x = Math.max(0, Math.floor(t)), h = Math.floor(x / 3600), m = Math.floor((x % 3600) / 60), sec = x % 60;
    return h ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : `${m}:${String(sec).padStart(2, '0')}`;
  }

  return {
    resize,
    get width() { return W; },
    draw(look, dt, s) {
      if (!W || !H) return;
      g.clearRect(0, 0, W, H);
      if (look === 'jukebox') jukebox(dt, s);
      else if (look === 'reel') reel(dt, s);
      else if (look === 'scope') scope(dt, s);
    },
  };
}

/**
 * What the music is doing, from Web Audio analysers (none before the song plays): bands(n) are n slices of the
 * spectrum from bass to treble, each 0..1, scaled by a slowly falling peak so quiet and loud songs both move; level(c)
 * is channel c's loudness, 0..1, scaled the same way.
 */
export function createListener() {
  let an = null, anL = null, anR = null, freq = null, lv = null;
  let bandPeak = 0.2, lvlPeak = 0.05;
  return {
    attach(ctx, source) {
      an = ctx.createAnalyser(); an.fftSize = 2048; an.smoothingTimeConstant = 0.78;
      anL = ctx.createAnalyser(); anR = ctx.createAnalyser(); anL.fftSize = anR.fftSize = 1024;
      const split = ctx.createChannelSplitter(2);
      source.connect(an); source.connect(split); split.connect(anL, 0); split.connect(anR, 1);
      freq = new Uint8Array(an.frequencyBinCount); lv = new Float32Array(1024);
    },
    bands(n, on = true) {
      const out = new Array(n).fill(0);
      if (!an || !on) return out;
      an.getByteFrequencyData(freq);
      const maxBin = Math.min(380, freq.length - 2);
      for (let i = 0; i < n; i++) {
        const a = Math.floor(Math.pow(i / n, 1.6) * maxBin) + 1, b = Math.floor(Math.pow((i + 1) / n, 1.6) * maxBin) + 2;
        let s = 0; for (let k = a; k < b; k++) s += freq[k]; out[i] = s / (b - a) / 255;
      }
      const top = Math.max(...out); bandPeak = Math.max(top, bandPeak * 0.995, 0.05);
      return out.map((x) => Math.min(1, x / bandPeak));
    },
    level(c, on = true) {
      const a = c ? anR : anL;
      if (!a || !on) return 0;
      a.getFloatTimeDomainData(lv); let s = 0; for (let i = 0; i < lv.length; i++) s += lv[i] * lv[i];
      const v = Math.sqrt(s / lv.length); lvlPeak = Math.max(v, lvlPeak * 0.998, 0.01);
      return Math.min(1, (v / lvlPeak) * 0.85);
    },
  };
}
