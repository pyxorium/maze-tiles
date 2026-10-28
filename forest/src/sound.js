// sound.js: Winter Forest's sounds, all made in code with Web Audio, no files (claude/winter-forest-plan.md, W5, W24).
// Grown from the look test's (lab/forest/sound.js, which stays as it is).
//   footsteps   a crunch in the snow for every step (filtered noise with little crackles), softer and lower on the
//               trodden paths; a soft knock on the coats lane's boards and the library's floor, hollow with a short
//               echo in the tunnel; now and then a creak on the library's stairs; a soft thump hopping onto the bench
//   wind        through the spruces: slowly swelling filtered noise, stronger out on the paths than in the clearing,
//               fading and muffled among the coats, faint as if behind glass in the library, none in the tunnel
//   lamp        a faint hum and hiss from the lamp post, placed in space (louder near it, from its side); outdoors only
//   music       a gentle generative ambient: a slow pad changing chord every so often, and sparse bell-like notes,
//               in a hall-like reverb made from decaying noise; softer and closer in the library
//   the fire    a soft crackle and low rumble from the library's fireplace, placed in space
//   the tree    an occasional deep creak of the old tree, in the tunnel
//   the arch    open, a faint shimmering tone as you near it, swelling as you pass under
//   the ride    a wooden rattle-whoosh, then the hiss of ice, then a deep soft swell into the blue
//   portals     a quiet chord as each going-through fade begins; a soft door sound going in and out
//   the crow    a soft rustle of feathers when it hops along the railing (step 2b)
// Browsers only allow sound after the person does something, so start() is called on the first key, click or tap.

const DEFAULTS = { sound: true, volume: 0.8, footsteps: 0.8, footTone: 1.0, footCrisp: 0.6, wind: 0.5, lampHum: 0.35, music: 0.5, bells: 0.5, reverb: 0.5 };
export const SOUND_DEFAULTS = DEFAULTS;

// D dorian (MIDI note numbers), and four slow chords for the pad.
const NOTE = (n) => 440 * Math.pow(2, (n - 69) / 12);
const SCALE = [62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84, 86];      // D4 dorian, two octaves
const CHORDS = [[50, 57, 62, 65, 69], [46, 53, 58, 62, 65], [41, 48, 53, 57, 64], [48, 55, 60, 64, 67]];  // Dm9, B♭, F, C

export function createSound(params) {
  let ctx = null, master, musicBus, reverb, wet, dry, noise, windNodes, lampNodes, padVoices = [], nextBell = 0, nextChord = 0, chordIx = 0;
  let windBus, windLP, echoIn, fireNodes, archNodes, rideNodes, nextCreak = 0, nextPop = 0, firePos = [0, 1, 0], place = 'forest';
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
    // Wind goes through one filter (muffled among the coats and behind the library's glass).
    windBus = ctx.createGain(); windLP = ctx.createBiquadFilter(); windLP.type = 'lowpass'; windLP.frequency.value = 9000;
    windBus.connect(windLP); windLP.connect(master);
    // A short echo for the tunnel (footsteps, the tree's creaks).
    echoIn = ctx.createGain(); echoIn.gain.value = 0;
    { const d = ctx.createDelay(1); d.delayTime.value = 0.085; const fb = ctx.createGain(); fb.gain.value = 0.38; const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1400;
      echoIn.connect(d); d.connect(lp); lp.connect(fb); fb.connect(d); lp.connect(master); }
    // Wind: two layers of looping noise, a low rush and a thin whistle through the needles, each slowly swelling.
    windNodes = [
      { f: 420, q: 0.6, g: 0.55, rate: 0.07 },
      { f: 1700, q: 2.5, g: 0.12, rate: 0.11 },
    ].map((w) => {
      const src = ctx.createBufferSource(); src.buffer = noise; src.loop = true;
      const filt = ctx.createBiquadFilter(); filt.type = 'bandpass'; filt.frequency.value = w.f; filt.Q.value = w.q;
      const gain = ctx.createGain(); gain.gain.value = 0;
      src.connect(filt); filt.connect(gain); gain.connect(windBus); src.start(0, Math.random() * 2);
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
    // The fire: a crackle (noise through a band, its loudness popping) and a low rumble, placed at the fireplace.
    {
      const pan = ctx.createPanner();
      Object.assign(pan, { panningModel: 'HRTF', distanceModel: 'inverse', refDistance: 1.2, rolloffFactor: 1.4, maxDistance: 30 });
      setPos(pan, ...firePos);
      const gain = ctx.createGain(); gain.gain.value = 0;
      const src = ctx.createBufferSource(); src.buffer = noise; src.loop = true;
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2200; bp.Q.value = 0.6;
      const pop = ctx.createGain(); pop.gain.value = 0.02;
      const rum = ctx.createBufferSource(); rum.buffer = noise; rum.loop = true;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 180;
      const rumG = ctx.createGain(); rumG.gain.value = 0.35;
      src.connect(bp); bp.connect(pop); pop.connect(gain); rum.connect(lp); lp.connect(rumG); rumG.connect(gain);
      gain.connect(pan); pan.connect(master); src.start(0, 0.3); rum.start(0, 1.1);
      fireNodes = { gain, pop, pan };
    }
    // The arch's shimmer: three high soft tones, slowly beating, louder as you near it (open only).
    {
      const gain = ctx.createGain(); gain.gain.value = 0; gain.connect(master);
      const trem = ctx.createOscillator(); trem.frequency.value = 0.7; const tremG = ctx.createGain(); tremG.gain.value = 0.3;
      trem.connect(tremG);
      for (const [f, a] of [[NOTE(86), 0.5], [NOTE(90) * 1.002, 0.35], [NOTE(93), 0.25]]) {
        const o = ctx.createOscillator(); o.frequency.value = f; const g = ctx.createGain(); g.gain.value = a;
        tremG.connect(g.gain); o.connect(g); g.connect(gain); o.start();
      }
      trem.start();
      archNodes = { gain };
    }
    // The ride: a rattle-whoosh (noise through a band, flutter), the hiss of ice, a deep swell.
    {
      const mk = (type, f, q) => { const src = ctx.createBufferSource(); src.buffer = noise; src.loop = true; const fl = ctx.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q; const g = ctx.createGain(); g.gain.value = 0; src.connect(fl); fl.connect(g); g.connect(master); src.start(0, Math.random() * 2); return { g, fl }; };
      const rattle = mk('bandpass', 700, 0.8), hiss = mk('highpass', 3800, 0.5), swellN = mk('lowpass', 200, 0.7);
      const flutter = ctx.createOscillator(); flutter.frequency.value = 16; const fg = ctx.createGain(); fg.gain.value = 0;
      flutter.connect(fg); fg.connect(rattle.g.gain); flutter.start();
      const deep = ctx.createOscillator(); deep.frequency.value = NOTE(38); const dg = ctx.createGain(); dg.gain.value = 0; deep.connect(dg); dg.connect(master); deep.start();
      rideNodes = { rattle, hiss, swellN, fg, dg };
    }
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

  // A crunch: a burst of filtered noise with crackles (the gain flickers), a little different every time. On wood, a
  // knock instead (soft on the lane's boards and the library's floor, hollow with an echo in the tunnel).
  function step({ surface = 'snow', creak = false } = {}) {
    if (!ctx || !p.sound || p.footsteps <= 0) return;
    if (surface === 'boards' || surface === 'wood' || surface === 'hollow') { knock(surface); if (creak) creakSound(380, 0.25, 0.05); return; }
    const onPath = surface === 'path';
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
  // A knock on wood: a short low thump and a click of noise.
  function knock(surface, loud = 1) {
    const t = ctx.currentTime, hollow = surface === 'hollow';
    const f = (hollow ? 105 : surface === 'boards' ? 150 : 135) * (0.9 + Math.random() * 0.2);
    const o = ctx.createOscillator(); o.frequency.setValueAtTime(f * 1.6, t); o.frequency.exponentialRampToValueAtTime(f, t + 0.04);
    const g = ctx.createGain(), peak = p.footsteps * 0.32 * loud * (0.8 + Math.random() * 0.4);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(peak, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0005, t + (hollow ? 0.16 : 0.1));
    const src = ctx.createBufferSource(); src.buffer = noise;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = hollow ? 700 : 1300; bp.Q.value = 1.2;
    const ng = ctx.createGain(); ng.gain.setValueAtTime(peak * 0.5, t); ng.gain.exponentialRampToValueAtTime(0.0005, t + 0.05);
    o.connect(g); src.connect(bp); bp.connect(ng);
    for (const n of [g, ng]) { n.connect(master); if (hollow) n.connect(echoIn); }
    o.start(t); o.stop(t + 0.2); src.start(t, Math.random() * 2, 0.07);
  }
  // A creak: a rough tone gliding down through a narrow band (the stairs, the old tree).
  function creakSound(f, len, vol, echo = false) {
    const t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(f, t); o.frequency.linearRampToValueAtTime(f * 0.78, t + len);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f * 2.2; bp.Q.value = 6;
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + len * 0.25); g.gain.linearRampToValueAtTime(0, t + len);
    o.connect(bp); bp.connect(g); g.connect(master); if (echo) g.connect(echoIn);
    o.start(t); o.stop(t + len + 0.05);
  }
  // A quiet chord as a going-through fade begins (W24): three soft bell-like tones in the music's key.
  function portal(id) {
    if (!ctx || !p.sound) return;
    const t = ctx.currentTime, root = { wardrobe: 62, 'tree-door': 57, arch: 65, slide: 69 }[id] || 62;
    [0, 7, 14].forEach((d, i) => {
      const o = ctx.createOscillator(); o.frequency.value = NOTE(root + d);
      const g = ctx.createGain(); const v = 0.05 / (1 + i * 0.4);
      g.gain.setValueAtTime(0, t + i * 0.06); g.gain.linearRampToValueAtTime(v, t + i * 0.06 + 0.02); g.gain.exponentialRampToValueAtTime(0.0003, t + 3);
      o.connect(g); g.connect(musicBus); o.start(t + i * 0.06); o.stop(t + 3.1);
    });
  }
  // Going in or out of a door: a soft wooden thud and a latch.
  function door() { if (!ctx || !p.sound) return; knock('wood', 1.4); setTimeout(() => { if (ctx) knock('boards', 0.5); }, 140); }
  function hop() { if (!ctx || !p.sound) return; knock('wood', 0.9); }
  // The crow's feathers as it hops (W37): a soft, quick brush of high noise.
  function rustle() {
    if (!ctx || !p.sound) return;
    const t = ctx.currentTime, src = ctx.createBufferSource(); src.buffer = noise;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3200; bp.Q.value = 0.9;
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t);
    for (const [k, v] of [[0.01, 0.05], [0.05, 0.02], [0.08, 0.04], [0.14, 0.015], [0.22, 0]]) g.gain.linearRampToValueAtTime(v, t + k);
    src.connect(bp); bp.connect(g); g.connect(master); src.start(t, Math.random() * 2, 0.25);
  }
  // The ride's parts (W24): 'wood', 'ice', 'blue', or null (quiet).
  function ride(part) {
    if (!ctx) return;
    const t = ctx.currentTime, R = rideNodes;
    R.rattle.g.gain.setTargetAtTime(part === 'wood' ? 0.22 : 0, t, 0.08); R.fg.gain.setTargetAtTime(part === 'wood' ? 0.12 : 0, t, 0.08);
    R.hiss.g.gain.setTargetAtTime(part === 'ice' ? 0.14 : 0, t, 0.1);
    R.swellN.g.gain.setTargetAtTime(part === 'blue' ? 0.4 : 0, t, part === 'blue' ? 0.5 : 0.2);
    R.dg.gain.setTargetAtTime(part === 'blue' ? 0.12 : 0, t, part === 'blue' ? 0.4 : 0.2);
    if (part === 'blue') R.swellN.fl.frequency.setTargetAtTime(900, t, 0.6); else R.swellN.fl.frequency.setTargetAtTime(200, t, 0.1);
  }
  function setPlace(where) { place = where; if (ctx) apply(); }

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
    // Softer and closer in the library (W24); quieter on the ride.
    const room = place === 'library' ? 0.4 : place === 'tunnel' ? 0.7 : 1;
    musicBus.gain.setTargetAtTime(p.music * (place === 'library' ? 0.7 : place === 'ride' ? 0.6 : 1), t, 0.3);
    wet.gain.setTargetAtTime(p.reverb * 0.9 * room, t, 0.2);
    dry.gain.setTargetAtTime(1 - p.reverb * 0.55 * room, t, 0.2);
    lampNodes.lampGain.gain.setTargetAtTime(place === 'forest' ? p.lampHum : 0, t, 0.2);
    echoIn.gain.setTargetAtTime(place === 'tunnel' ? 0.55 : 0, t, 0.1);
    fireNodes.gain.gain.setTargetAtTime(place === 'library' ? 0.5 : 0, t, 0.3);
    windLP.frequency.setTargetAtTime(place === 'library' ? 700 : 9000, t, 0.3);
  }

  // Every frame: where the listener is (the camera), how far into the forest, and the music's next notes.
  function update({ camPos, camFwd, outside, lane = 0, archNear = 0, ride: r = null }) {
    if (!ctx || ctx.state !== 'running') return;
    const t = ctx.currentTime;
    setListener(camPos, camFwd);
    // The wind: outdoors as before, fading among the coats (W24); faint behind the library's glass; none in the tunnel;
    // on the ice run, rushing past.
    const placeWind = place === 'forest' ? 1 - 0.7 * lane : place === 'library' ? 0.3 : place === 'ride' ? (r && r.part !== 'wood' ? 1.3 : 0) : 0;
    if (place === 'forest') windLP.frequency.setTargetAtTime(9000 - 7600 * lane, t, 0.3);
    for (const w of windNodes) {
      w.phase += w.rate / 60;
      const swell = 0.55 + 0.45 * Math.sin(w.phase) * Math.sin(w.phase * 0.37 + 1);
      const out = place === 'forest' ? 0.45 + 0.55 * outside : 1;
      w.gain.gain.setTargetAtTime(p.wind * w.g * swell * out * placeWind, t, 0.3);
      w.filt.frequency.setTargetAtTime(w.f * (0.8 + 0.4 * swell), t, 0.5);
    }
    archNodes.gain.gain.setTargetAtTime(place === 'forest' ? 0.12 * archNear * archNear * p.music * 2 : 0, t, 0.25);
    if (place === 'library' && t >= nextPop) {
      // The fire's pops.
      fireNodes.pop.gain.setValueAtTime(0.25 + Math.random() * 0.5, t); fireNodes.pop.gain.setTargetAtTime(0.02, t + 0.01, 0.02);
      nextPop = t + 0.04 + Math.random() * Math.random() * 0.45;
    }
    if (place === 'tunnel' && t >= nextCreak) {
      if (nextCreak) creakSound(62 + Math.random() * 18, 1.2 + Math.random() * 0.6, 0.07, true);
      nextCreak = t + 6 + Math.random() * 9;
    } else if (place !== 'tunnel') nextCreak = 0;
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
    step, update, apply, portal, door, hop, rustle, ride, setPlace,
    setFirePos(x, y, z) { firePos = [x, y, z]; if (fireNodes) setPos(fireNodes.pan, x, y, z); },
    pause() { if (ctx && ctx.state === 'running') ctx.suspend(); },
    resume() { if (ctx && ctx.state === 'suspended') ctx.resume(); },
    get running() { return !!ctx && ctx.state === 'running'; },
    get started() { return !!ctx; },
  };
}
