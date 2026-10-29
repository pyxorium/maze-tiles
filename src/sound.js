// sound.js: the Escher maze's sounds (M34, 0.4.0; claude/escher-maze-04-plan.md), all made in code with Web Audio,
// no files, as Winter Forest's are.
//   footsteps   a soft knock on stone for every step, a brighter tap on stairs (a little higher going up, lower going
//               down), a longer scuff on the ramps; a touch of the room's echo in the ivory rooms
//   room tones  each area its own quiet bed: the sand rooms a warm low breeze, the slate landings cool thin air, the
//               ivory rooms a soft hall drone; the Cellar dull and close. They crossfade as you go from room to room
//   the stairs  in the four landings, a Shepard tone: a chord of octaves that seems to rise for ever as you climb
//               (and fall as you go down), because the stairs do too
//   the obelisk a low hum near it; when it leads somewhere, a shimmer over the hum
//   the door    a faint tone near it when it leads somewhere; a creak as it swings open, a thud as it swings shut
//   the fall    a rising rush as you drop through the hole, a thump as you land
// Browsers only allow sound after the person does something, so start() is called on the first key, click or tap.
// On or off (the bar's Sound button) is not remembered: the maze saves nothing (a reload starts again).

const AREA_TONE = {
  // noise band (Hz, Q, level) and a drone (Hz list, level); the Cellar gets `dull`.
  sand: { band: [320, 0.7, 0.07], drone: [[82.4, 123.5], 0.012], echo: 0.05 },
  slate: { band: [1500, 1.6, 0.035], drone: [[55, 110], 0.01], echo: 0.12 },
  ivory: { band: [600, 1.0, 0.03], drone: [[98, 147, 196], 0.016], echo: 0.24 },
  dull: { band: [180, 0.8, 0.05], drone: [[49], 0.012], echo: 0.02 },
};
export const SHEPARD = { voices: 7, base: 55, period: 4 };    // octaves from 55 Hz; one octave rise every 4 blocks climbed

export function createSound() {
  let ctx = null, master, noise, reverb, wet, beds = {}, shepard = null, hum = null, doorTone = null;
  let on = true, started = false, current = null, phase = 0;

  function noiseBuffer(seconds) {
    const b = ctx.createBuffer(1, Math.round(ctx.sampleRate * seconds), ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }
  function impulse(seconds) {
    const len = Math.round(ctx.sampleRate * seconds), b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = b.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3); }
    return b;
  }
  const gain = (v = 0, to = master) => { const g = ctx.createGain(); g.gain.value = v; g.connect(to); return g; };
  const osc = (f, type = 'sine') => { const o = ctx.createOscillator(); o.type = type; o.frequency.value = f; return o; };
  const loopNoise = () => { const s = ctx.createBufferSource(); s.buffer = noise; s.loop = true; s.start(0, Math.random() * 2); return s; };
  const ease = (param, v, tau = 0.4) => param.setTargetAtTime(v, ctx.currentTime, tau);

  function build() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = on ? 0.8 : 0; master.connect(ctx.destination);
    noise = noiseBuffer(2.5);
    reverb = ctx.createConvolver(); reverb.buffer = impulse(1.8);
    wet = gain(0); reverb.connect(wet);
    // A bed for each kind of room, all running, faded in and out.
    for (const [id, t] of Object.entries(AREA_TONE)) {
      const out = gain(0);
      const src = loopNoise(), f = ctx.createBiquadFilter();
      f.type = 'bandpass'; f.frequency.value = t.band[0]; f.Q.value = t.band[1];
      const ng = gain(t.band[2], out); src.connect(f); f.connect(ng);
      // A slow swell on the noise, so it breathes.
      const lfo = osc(0.06 + Math.random() * 0.05), lg = ctx.createGain(); lg.gain.value = t.band[2] * 0.5; lfo.connect(lg); lg.connect(ng.gain); lfo.start();
      for (const hz of t.drone[0]) { const o = osc(hz); const og = gain(t.drone[1], out); o.connect(og); o.start(); }
      beds[id] = out;
    }
    // The Shepard tone: octaves of one note, each loudest in the middle of the range, so the whole seems to rise
    // without end as their phase moves.
    shepard = { out: gain(0), voices: [] };
    for (let i = 0; i < SHEPARD.voices; i++) {
      const o = osc(SHEPARD.base), g = gain(0, shepard.out); o.connect(g); o.start();
      shepard.voices.push({ o, g, i });
    }
    // The obelisk's hum, and its shimmer when it leads somewhere.
    hum = { out: gain(0), shimmer: gain(0) };
    for (const hz of [73.4, 110]) { const o = osc(hz, 'triangle'); const g = gain(0.5, hum.out); o.connect(g); o.start(); }
    { const sh = gain(1, hum.out); hum.shimmer.disconnect(); hum.shimmer.connect(sh);
      for (const hz of [880, 1318.5, 1760]) { const o = osc(hz); const g = gain(0.06, hum.shimmer); o.connect(g); o.start();
        const t = osc(3 + Math.random() * 2), tg = ctx.createGain(); tg.gain.value = 0.04; t.connect(tg); tg.connect(g.gain); t.start(); } }
    // The door's faint tone, when it leads somewhere.
    doorTone = gain(0);
    for (const hz of [392, 587.3]) { const o = osc(hz); const g = gain(0.5, doorTone); o.connect(g); o.start();
      const t = osc(0.5 + Math.random() * 0.3), tg = ctx.createGain(); tg.gain.value = 0.25; t.connect(tg); tg.connect(g.gain); t.start(); }
  }

  // A one-off burst of noise through a filter, with its own envelope.
  function burst({ f = 900, q = 1, type = 'bandpass', level = 0.2, attack = 0.004, decay = 0.08, at = 0, echo = 0 }) {
    const t0 = ctx.currentTime + at;
    const s = ctx.createBufferSource(); s.buffer = noise;
    const filt = ctx.createBiquadFilter(); filt.type = type; filt.frequency.value = f; filt.Q.value = q;
    const g = ctx.createGain(); g.gain.value = 0;
    g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(level, t0 + attack); g.gain.exponentialRampToValueAtTime(0.0001, t0 + attack + decay);
    s.connect(filt); filt.connect(g); g.connect(master);
    if (echo) { const e = ctx.createGain(); e.gain.value = echo; g.connect(e); e.connect(reverb); }
    s.start(t0, Math.random() * 2); s.stop(t0 + attack + decay + 0.05);
    return filt;
  }
  function tone({ f0, f1 = f0, type = 'sine', level = 0.2, attack = 0.005, decay = 0.25, at = 0 }) {
    const t0 = ctx.currentTime + at, o = osc(f0, type), g = ctx.createGain();
    o.frequency.setValueAtTime(f0, t0); o.frequency.exponentialRampToValueAtTime(f1, t0 + attack + decay);
    g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(level, t0 + attack); g.gain.exponentialRampToValueAtTime(0.0001, t0 + attack + decay);
    o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + attack + decay + 0.05);
    return o;
  }

  const ready = () => ctx && on && ctx.state === 'running';
  const echoOf = () => (current ? (AREA_TONE[current] || AREA_TONE.sand).echo : 0.05);

  return {
    // The first key, click or tap (and the Sound button) calls this.
    start() {
      if (!ctx) { try { build(); } catch { return; } }
      if (ctx.state === 'suspended') ctx.resume();
      started = true;
    },
    pause() { if (ctx && ctx.state === 'running') ctx.suspend(); },
    resume() { if (ctx && started && ctx.state === 'suspended') ctx.resume(); },
    setOn(v) { on = !!v; if (ctx) ease(master.gain, on ? 0.8 : 0, 0.08); },
    get on() { return on; },
    state: () => ({ on, started, running: !!ctx && ctx.state === 'running', bed: current, phase }),

    // surface: 'stone', 'steps' or 'ramp'; up: +1 climbing, -1 going down, 0 level.
    step(surface = 'stone', up = 0) {
      if (!ready()) return;
      const echo = echoOf();
      const v = 0.85 + Math.random() * 0.3;
      if (surface === 'ramp') {
        burst({ f: 700 * v, q: 0.8, level: 0.07, attack: 0.03, decay: 0.16, echo });
      } else if (surface === 'steps') {
        const f = 1500 * v * (up > 0 ? 1.18 : up < 0 ? 0.85 : 1);
        burst({ f, q: 2.2, level: 0.13, decay: 0.05, echo });
        tone({ f0: 160 * v, f1: 90, level: 0.06, decay: 0.06 });
      } else {
        burst({ f: 950 * v, q: 1.4, level: 0.1, decay: 0.07, echo });
        tone({ f0: 120 * v, f1: 70, level: 0.06, decay: 0.07 });
      }
    },
    creak() {
      if (!ready()) return;
      // A sawtooth, filtered narrow, its pitch wobbling and sagging: an old hinge.
      const o = tone({ f0: 210, f1: 150, type: 'sawtooth', level: 0.05, attack: 0.08, decay: 0.7 });
      const w = osc(11), wg = ctx.createGain(); wg.gain.value = 18; w.connect(wg); wg.connect(o.frequency); w.start(); w.stop(ctx.currentTime + 0.9);
      burst({ f: 2400, q: 6, level: 0.02, attack: 0.1, decay: 0.6 });
    },
    thud() {
      if (!ready()) return;
      tone({ f0: 90, f1: 42, level: 0.28, decay: 0.32 });
      burst({ f: 400, q: 0.8, type: 'lowpass', level: 0.18, decay: 0.12, echo: echoOf() * 1.5 });
    },
    rush() {
      if (!ready()) return;
      const t0 = ctx.currentTime, f = burst({ f: 300, q: 0.9, level: 0.16, attack: 0.85, decay: 0.25 });
      f.frequency.setValueAtTime(300, t0); f.frequency.exponentialRampToValueAtTime(2600, t0 + 1.0);
    },
    thump() {
      if (!ready()) return;
      tone({ f0: 70, f1: 32, level: 0.34, decay: 0.4 });
      burst({ f: 500, q: 0.7, type: 'lowpass', level: 0.22, decay: 0.16 });
    },

    // Every frame: area ('sand', 'slate', 'ivory' or 'dull'); climb (blocks risen since the last frame, in the
    // landings, or null elsewhere); obelisk and door: { dist, open } or null when not in their room.
    update({ area, climb, obelisk, door }) {
      if (!ctx) return;
      if (area !== current) {
        current = area;
        for (const [id, g] of Object.entries(beds)) ease(g.gain, id === area ? 1 : 0, 0.7);
        ease(wet.gain, (AREA_TONE[area] || AREA_TONE.sand).echo * 2, 0.7);
      }
      // The Shepard tone: in the landings only.
      ease(shepard.out.gain, climb === null ? 0 : 0.05, 0.6);
      if (climb !== null) {
        phase = ((phase + climb / SHEPARD.period) % 1 + 1) % 1;
        const span = SHEPARD.voices;
        for (const v of shepard.voices) {
          const pos = (v.i + phase) / span;                         // 0..1 across the range
          v.o.frequency.setTargetAtTime(SHEPARD.base * Math.pow(2, v.i + phase), ctx.currentTime, 0.05);
          v.g.gain.setTargetAtTime(Math.exp(-Math.pow((pos - 0.5) / 0.2, 2) / 2) * 0.6, ctx.currentTime, 0.05);
        }
      }
      const near = (x, r) => (x ? Math.max(0, 1 - x.dist / r) : 0);
      const o = near(obelisk, 6);
      ease(hum.out.gain, 0.05 * o * o, 0.3);
      ease(hum.shimmer.gain, obelisk && obelisk.open ? 1 : 0, 0.5);
      const d = near(door && door.open ? door : null, 4);
      ease(doorTone.gain, 0.03 * d * d, 0.3);
    },
  };
}
