// sound.js: the Escher maze's sounds (0.4.0; claude/escher-maze-04-plan.md, M34 as reworked by M37), all made in
// code with Web Audio, no files. A hushed gallery: mostly quiet, your footsteps in a large still room.
//   footsteps   a soft knock on stone for every step, a brighter tap on stairs, a scuff on the ramps, each with a
//               little of the room's echo (more in the ivory rooms)
//   the rooms   near-silence; now and then (every 8 to 20 s) one soft, glassy note, far away in a reverb, from a small
//               set of notes for each kind of room: the sand rooms warmer, the slate landings cooler, the ivory rooms
//               brighter, the Cellar duller and closer
//   the stairs  on the four landings' flights only: one short soft tap for each step, a step higher going up (lower
//               going down) along a Shepard scale, which seems to rise for ever, as the stairs do
//   the ways    the obelisk and the Lantern room's door, when they lead somewhere: one soft bright note as you come
//               within about two blocks (once each time you come near); the door's creak as it opens and thud as it
//               shuts
//   the fall    a rising rush as you drop through the hole, a thump as you land
// Browsers only allow sound after the person does something, so start() is called on the first key, click or tap.
// On or off (the bar's Sound button) is not remembered: the maze saves nothing (a reload starts again).

const MIDI = (n) => 440 * Math.pow(2, (n - 69) / 12);
export const AREA_NOTES = {
  // notes (MIDI), how loud, and how bright (a low-pass filter, Hz); how much of the room's echo footsteps get
  sand: { notes: [62, 64, 66, 69, 71, 74], level: 0.022, bright: 2400, echo: 0.06 },
  slate: { notes: [64, 67, 71, 74, 76, 79], level: 0.02, bright: 2800, echo: 0.1 },
  ivory: { notes: [69, 71, 73, 76, 78, 81], level: 0.02, bright: 4200, echo: 0.18 },
  dull: { notes: [50, 53, 55, 57, 60], level: 0.02, bright: 700, echo: 0.03 },
};
export const NOTE_GAP = [8, 20];                  // seconds between distant notes
export const SHEPARD = { voices: 6, base: 65.4, level: 0.022 };   // a tap's octaves from C2, and how loud the whole tap is
export const NEAR = { chime: 2, again: 3 };       // blocks: the note within 2; it can sound again once you've been 3 away

export function createSound() {
  let ctx = null, master, noise, reverb, wet;
  let on = true, started = false, current = null, nextNote = 0, notes = 0, taps = 0, step12 = 0, chimes = 0;
  const near = new Map();                          // 'obelisk' / 'door' → chimed this approach

  function noiseBuffer(seconds) {
    const b = ctx.createBuffer(1, Math.round(ctx.sampleRate * seconds), ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }
  // A still, large room: noise dying away smoothly over a few seconds, a little different in each ear, darker as it fades.
  function impulse(seconds) {
    const len = Math.round(ctx.sampleRate * seconds), b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c);
      let lp = 0;
      for (let i = 0; i < len; i++) { lp += ((Math.random() * 2 - 1) - lp) * (0.5 - 0.42 * i / len); d[i] = lp * Math.pow(1 - i / len, 2.4) * 1.6; }
    }
    return b;
  }
  const ease = (param, v, tau = 0.4) => param.setTargetAtTime(v, ctx.currentTime, tau);

  function build() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = on ? 0.8 : 0; master.connect(ctx.destination);
    noise = noiseBuffer(2.5);
    reverb = ctx.createConvolver(); reverb.buffer = impulse(3.2);
    wet = ctx.createGain(); wet.gain.value = 0.6; reverb.connect(wet); wet.connect(master);
    nextNote = ctx.currentTime + 3 + Math.random() * 5;
  }

  // An envelope'd voice into the dry mix and the reverb.
  function voice(node, { level, attack, decay, at = 0, dry = 1, echo = 0 }) {
    const t0 = ctx.currentTime + at, g = ctx.createGain();
    g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(level, t0 + attack); g.gain.exponentialRampToValueAtTime(0.0001, t0 + attack + decay);
    node.connect(g);
    if (dry) { const d = ctx.createGain(); d.gain.value = dry; g.connect(d); d.connect(master); }
    if (echo) { const e = ctx.createGain(); e.gain.value = echo; g.connect(e); e.connect(reverb); }
    return { t0, end: t0 + attack + decay + 0.05 };
  }
  function burst({ f = 900, q = 1, type = 'bandpass', level = 0.2, attack = 0.004, decay = 0.08, at = 0, echo = 0 }) {
    const s = ctx.createBufferSource(); s.buffer = noise;
    const filt = ctx.createBiquadFilter(); filt.type = type; filt.frequency.value = f; filt.Q.value = q;
    s.connect(filt);
    const v = voice(filt, { level, attack, decay, at, echo });
    s.start(v.t0, Math.random() * 2); s.stop(v.end);
    return filt;
  }
  function tone({ f0, f1 = f0, type = 'sine', level = 0.2, attack = 0.005, decay = 0.25, at = 0, dry = 1, echo = 0, lowpass = 0 }) {
    const o = ctx.createOscillator(); o.type = type;
    let out = o;
    if (lowpass) { const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = lowpass; o.connect(lp); out = lp; }
    const v = voice(out, { level, attack, decay, at, dry, echo });
    o.frequency.setValueAtTime(f0, v.t0); if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, v.end - 0.05);
    o.start(v.t0); o.stop(v.end);
    return o;
  }
  // A soft glassy note: a sine and a quieter, faster-fading partial a little under three times higher.
  function glass(f, { level, decay = 3.2, attack = 0.06, dry = 0.35, echo = 1, lowpass = 0, at = 0 }) {
    tone({ f0: f, level, attack, decay, dry, echo, lowpass, at });
    tone({ f0: f * 2.76, level: level * 0.22, attack, decay: decay * 0.4, dry, echo, lowpass, at });
  }

  const ready = () => ctx && on && ctx.state === 'running';
  const areaOf = () => AREA_NOTES[current] || AREA_NOTES.sand;

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
    state: () => ({ on, started, running: !!ctx && ctx.state === 'running', bed: current, notes, taps, step: step12, chimes }),

    // surface: 'stone', 'steps' or 'ramp'; up: +1 climbing, -1 going down, 0 level.
    step(surface = 'stone', up = 0) {
      if (!ready()) return;
      const echo = areaOf().echo, v = 0.85 + Math.random() * 0.3;
      if (surface === 'ramp') burst({ f: 700 * v, q: 0.8, level: 0.07, attack: 0.03, decay: 0.16, echo });
      else if (surface === 'steps') {
        burst({ f: 1500 * v * (up > 0 ? 1.18 : up < 0 ? 0.85 : 1), q: 2.2, level: 0.12, decay: 0.05, echo });
        tone({ f0: 160 * v, f1: 90, level: 0.05, decay: 0.06 });
      } else {
        burst({ f: 950 * v, q: 1.4, level: 0.1, decay: 0.07, echo });
        tone({ f0: 120 * v, f1: 70, level: 0.05, decay: 0.07 });
      }
    },
    // A step up (+1) or down (-1) one of the landings' flights: one short soft tap on the Shepard scale.
    tap(up) {
      if (!ready() || !up) return;
      step12 = ((step12 + Math.sign(up)) % 12 + 12) % 12;
      taps++;
      const phase = step12 / 12;
      for (let k = 0; k < SHEPARD.voices; k++) {
        const pos = (k + phase) / SHEPARD.voices;                          // 0..1 across the range
        const w = Math.exp(-Math.pow((pos - 0.5) / 0.18, 2) / 2);           // loudest in the middle, so it never ends
        if (w < 0.02) continue;
        tone({ f0: SHEPARD.base * Math.pow(2, k + phase), level: SHEPARD.level * w, attack: 0.006, decay: 0.42, dry: 0.7, echo: 0.5 });
      }
    },
    creak() {
      if (!ready()) return;
      // A sawtooth, filtered, its pitch wobbling and sagging: an old hinge, soft.
      const o = tone({ f0: 210, f1: 150, type: 'sawtooth', level: 0.03, attack: 0.08, decay: 0.7, lowpass: 1600, echo: 0.3 });
      const w = ctx.createOscillator(); w.frequency.value = 11;
      const wg = ctx.createGain(); wg.gain.value = 18; w.connect(wg); wg.connect(o.frequency); w.start(); w.stop(ctx.currentTime + 0.9);
    },
    thud() {
      if (!ready()) return;
      tone({ f0: 90, f1: 42, level: 0.22, decay: 0.32, echo: 0.4 });
      burst({ f: 400, q: 0.8, type: 'lowpass', level: 0.12, decay: 0.12, echo: 0.3 });
    },
    rush() {
      if (!ready()) return;
      const t0 = ctx.currentTime, f = burst({ f: 300, q: 0.9, level: 0.16, attack: 0.85, decay: 0.25 });
      f.frequency.setValueAtTime(300, t0); f.frequency.exponentialRampToValueAtTime(2600, t0 + 1.0);
    },
    thump() {
      if (!ready()) return;
      tone({ f0: 70, f1: 32, level: 0.34, decay: 0.4, echo: 0.3 });
      burst({ f: 500, q: 0.7, type: 'lowpass', level: 0.22, decay: 0.16 });
    },

    // Every frame: area ('sand', 'slate', 'ivory' or 'dull'); obelisk and door: { dist, open } or null when not in
    // their room.
    update({ area, obelisk, door }) {
      if (!ctx) return;
      if (area !== current) { current = area; ease(wet.gain, 0.45 + areaOf().echo * 2, 0.7); }
      if (!ready()) return;
      // Now and then, one distant note.
      if (ctx.currentTime >= nextNote) {
        const a = areaOf(), n = a.notes[Math.floor(Math.random() * a.notes.length)];
        glass(MIDI(n), { level: a.level, lowpass: a.bright });
        notes++;
        nextNote = ctx.currentTime + NOTE_GAP[0] + Math.random() * (NOTE_GAP[1] - NOTE_GAP[0]);
      }
      // Coming near a way that leads somewhere: one soft bright note.
      for (const [id, s] of [['obelisk', obelisk], ['door', door]]) {
        if (!s || !s.open || s.dist > NEAR.again) { near.delete(id); continue; }
        if (s.dist <= NEAR.chime && !near.get(id)) {
          near.set(id, true); chimes++;
          glass(MIDI(id === 'obelisk' ? 88 : 91), { level: 0.03, decay: 2.6, attack: 0.03, dry: 0.5 });
          glass(MIDI(id === 'obelisk' ? 95 : 98), { level: 0.012, decay: 2.2, attack: 0.03, dry: 0.5, at: 0.09 });
        }
      }
    },
  };
}
