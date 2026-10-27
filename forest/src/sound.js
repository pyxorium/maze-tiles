// sound.js: Winter Forest's sounds, all made in code with Web Audio, no files (claude/winter-forest-plan.md, W5).
// Copied from the look test (lab/forest/sound.js, which stays as it is); the new places' sounds (W24) come in step 2.
//   footsteps   a crunch in the snow for every step (filtered noise with little crackles), softer and lower on the
//               trodden paths than in the fresh snow of the clearing
//   wind        through the spruces: slowly swelling filtered noise, stronger out on the paths than in the clearing
//   lamp        a faint hum and hiss from the lamp post, placed in space (louder near it, from its side)
//   music       a gentle generative ambient: a slow pad changing chord every so often, and sparse bell-like notes,
//               in a hall-like reverb made from decaying noise
// Browsers only allow sound after the person does something, so start() is called on the first key, click or tap.

const DEFAULTS = { sound: true, volume: 0.8, footsteps: 0.8, footTone: 1.0, footCrisp: 0.6, wind: 0.5, lampHum: 0.35, music: 0.5, bells: 0.5, reverb: 0.5 };
export const SOUND_DEFAULTS = DEFAULTS;

// D dorian (MIDI note numbers), and four slow chords for the pad.
const NOTE = (n) => 440 * Math.pow(2, (n - 69) / 12);
const SCALE = [62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84, 86];      // D4 dorian, two octaves
const CHORDS = [[50, 57, 62, 65, 69], [46, 53, 58, 62, 65], [41, 48, 53, 57, 64], [48, 55, 60, 64, 67]];  // Dm9, B♭, F, C

export function createSound(params) {
  let ctx = null, master, musicBus, reverb, wet, dry, noise, windNodes, lampNodes, padVoices = [], nextBell = 0, nextChord = 0, chordIx = 0;
  const p = params;

  function noiseBuffer(seconds) {
    const b = ctx.createBuffer(1, Math.round(ctx.sampleRate * seconds), ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }
  // A hall: noise decaying over a few seconds, a little different in each ear.
  function impulse(seconds = 4.2) {
    const len = Math.round(ctx.sampleRate * seconds), b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
    }
    return b;
  }

  function build() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.connect(ctx.destination);
    noise = noiseBuffer(2.5);
    // The music's hall.
    reverb = ctx.createConvolver(); reverb.buffer = impulse();
    wet = ctx.createGain(); dry = ctx.createGain(); musicBus = ctx.createGain();
    musicBus.connect(dry); musicBus.connect(reverb); reverb.connect(wet); dry.connect(master); wet.connect(master);
    // Wind: two layers of looping noise, a low rush and a thin whistle through the needles, each slowly swelling.
    windNodes = [
      { f: 420, q: 0.6, g: 0.55, rate: 0.07 },
      { f: 1700, q: 2.5, g: 0.12, rate: 0.11 },
    ].map((w) => {
      const src = ctx.createBufferSource(); src.buffer = noise; src.loop = true;
      const filt = ctx.createBiquadFilter(); filt.type = 'bandpass'; filt.frequency.value = w.f; filt.Q.value = w.q;
      const gain = ctx.createGain(); gain.gain.value = 0;
      src.connect(filt); filt.connect(gain); gain.connect(master); src.start(0, Math.random() * 2);
      return { ...w, filt, gain, phase: Math.random() * 10 };
    });
    // The lamp: a low hum and a soft hiss, placed at the lamp in space.
    const panner = ctx.createPanner();
    Object.assign(panner, { panningModel: 'HRTF', distanceModel: 'inverse', refDistance: 1.5, rolloffFactor: 1.6, maxDistance: 60 });
    setPos(panner, 0, 3.6, 0);
    const lampGain = ctx.createGain(); lampGain.gain.value = 0;
    const hum = ctx.createOscillator(); hum.frequency.value = 98;
    const hum2 = ctx.createOscillator(); hum2.frequency.value = 196.6;
    const humG = ctx.createGain(); humG.gain.value = 0.18; const hum2G = ctx.createGain(); hum2G.gain.value = 0.05;
    const hiss = ctx.createBufferSource(); hiss.buffer = noise; hiss.loop = true;
    const hissF = ctx.createBiquadFilter(); hissF.type = 'highpass'; hissF.frequency.value = 3500;
    const hissG = ctx.createGain(); hissG.gain.value = 0.05;
    hum.connect(humG); hum2.connect(hum2G); hiss.connect(hissF); hissF.connect(hissG);
    for (const n of [humG, hum2G, hissG]) n.connect(lampGain);
    lampGain.connect(panner); panner.connect(master);
    hum.start(); hum2.start(); hiss.start(0, 1);
    lampNodes = { lampGain };
    nextChord = ctx.currentTime + 0.5; nextBell = ctx.currentTime + 3;
    apply();
  }

  // Older browsers set positions with methods, newer ones with AudioParams.
  function setPos(node, x, y, z) {
    if (node.positionX) { node.positionX.value = x; node.positionY.value = y; node.positionZ.value = z; } else node.setPosition(x, y, z);
  }
  function setListener(pos, fwd) {
    const l = ctx.listener;
    if (l.positionX) {
      l.positionX.value = pos.x; l.positionY.value = pos.y; l.positionZ.value = pos.z;
      l.forwardX.value = fwd.x; l.forwardY.value = fwd.y; l.forwardZ.value = fwd.z; l.upX.value = 0; l.upY.value = 1; l.upZ.value = 0;
    } else { l.setPosition(pos.x, pos.y, pos.z); l.setOrientation(fwd.x, fwd.y, fwd.z, 0, 1, 0); }
  }

  // A crunch: a burst of filtered noise with crackles (the gain flickers), a little different every time.
  function step({ onPath = false } = {}) {
    if (!ctx || !p.sound || p.footsteps <= 0) return;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource(); src.buffer = noise;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass';
    const centre = (onPath ? 1200 : 2100) * p.footTone * (0.85 + Math.random() * 0.3);
    bp.frequency.value = centre; bp.Q.value = 0.7;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = centre * 2.6;
    const g = ctx.createGain();
    const len = 0.16 + Math.random() * 0.07, peak = p.footsteps * (onPath ? 0.5 : 0.75) * (0.8 + Math.random() * 0.4);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(peak, t + 0.008);
    // The crackles: the gain jumps about as the snow gives way.
    for (let k = 0.012; k < len; k += 0.006 + Math.random() * 0.01) {
      const fall = Math.pow(1 - k / len, 1.6);
      g.gain.setValueAtTime(peak * fall * (1 - p.footCrisp * Math.random()), t + k);
    }
    g.gain.linearRampToValueAtTime(0, t + len + 0.02);
    src.connect(bp); bp.connect(lp); lp.connect(g); g.connect(master);
    src.start(t, Math.random() * 2, len + 0.05);
  }

  // A pad chord: a few softly detuned voices through a low filter, swelling in and fading out.
  function padChord(t) {
    const chord = CHORDS[chordIx++ % CHORDS.length], dur = 13;
    for (const n of chord) {
      const o = ctx.createOscillator(), o2 = ctx.createOscillator();
      o.type = 'triangle'; o2.type = 'sawtooth';
      o.frequency.value = NOTE(n); o2.frequency.value = NOTE(n) * 1.004;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 650; f.Q.value = 0.4;
      const o2g = ctx.createGain(); o2g.gain.value = 0.25;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.045, t + 4.5); g.gain.setValueAtTime(0.045, t + dur - 5); g.gain.linearRampToValueAtTime(0, t + dur);
      o.connect(f); o2.connect(o2g); o2g.connect(f); f.connect(g); g.connect(musicBus);
      o.start(t); o2.start(t); o.stop(t + dur + 0.1); o2.stop(t + dur + 0.1);
    }
  }
  // A bell: a sine with an inharmonic partial, a quick strike and a long fade, somewhere left or right.
  function bell(t) {
    const n = SCALE[Math.floor(Math.random() * SCALE.length)] + (Math.random() < 0.3 ? 12 : 0);
    const pan = ctx.createStereoPanner(); pan.pan.value = Math.random() * 1.4 - 0.7;
    const g = ctx.createGain(); g.connect(pan); pan.connect(musicBus);
    const v = 0.06 + Math.random() * 0.04, dur = 3.5 + Math.random() * 2;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0005, t + dur);
    for (const [ratio, amt] of [[1, 1], [2.76, 0.25], [5.4, 0.08]]) {
      const o = ctx.createOscillator(); o.frequency.value = NOTE(n) * ratio;
      const og = ctx.createGain(); og.gain.value = amt;
      o.connect(og); og.connect(g); o.start(t); o.stop(t + dur + 0.1);
    }
  }

  function apply() {
    if (!ctx) return;
    const t = ctx.currentTime;
    master.gain.setTargetAtTime(p.sound ? p.volume : 0, t, 0.08);
    musicBus.gain.setTargetAtTime(p.music, t, 0.3);
    wet.gain.setTargetAtTime(p.reverb * 0.9, t, 0.2);
    dry.gain.setTargetAtTime(1 - p.reverb * 0.55, t, 0.2);
    lampNodes.lampGain.gain.setTargetAtTime(p.lampHum, t, 0.2);
  }

  // Every frame: where the listener is (the camera), how far into the forest, and the music's next notes.
  function update({ camPos, camFwd, outside }) {
    if (!ctx || ctx.state !== 'running') return;
    const t = ctx.currentTime;
    setListener(camPos, camFwd);
    for (const w of windNodes) {
      w.phase += w.rate / 60;
      const swell = 0.55 + 0.45 * Math.sin(w.phase) * Math.sin(w.phase * 0.37 + 1);
      w.gain.gain.setTargetAtTime(p.wind * w.g * swell * (0.45 + 0.55 * outside), t, 0.3);
      w.filt.frequency.setTargetAtTime(w.f * (0.8 + 0.4 * swell), t, 0.5);
    }
    if (p.music > 0) {
      if (t >= nextChord - 0.2) { padChord(Math.max(t, nextChord)); nextChord += 9; }
      if (p.bells > 0 && t >= nextBell) { bell(t + 0.05); nextBell = t + (2 + Math.random() * 6) / Math.max(0.15, p.bells); }
    } else { nextChord = t + 1; nextBell = t + 2; }
  }

  return {
    start() {
      if (!ctx) build();
      if (ctx.state === 'suspended' && !document.hidden) ctx.resume();
    },
    step, update, apply,
    pause() { if (ctx && ctx.state === 'running') ctx.suspend(); },
    resume() { if (ctx && ctx.state === 'suspended') ctx.resume(); },
    get running() { return !!ctx && ctx.state === 'running'; },
    get started() { return !!ctx; },
  };
}
