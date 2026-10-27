// look.js: Winter Forest's settings (W6): all the look test's starting settings (lab/forest/main.js, DEFAULTS),
// except snow on branches 0.75 and drifts and bumps 0.5. Sound: the look test's defaults (W5). The real tile has no
// tuning panel; change these here.
import { SOUND_DEFAULTS } from './sound.js';

export const LOOK = Object.freeze({
  // Night
  skyTop: '#04060d', skyHorizon: '#1a2640', stars: 0.7, moonlight: 0.8, moonColour: '#9fb6ff', ambient: 0.6, exposure: 1.0,
  // Lamp
  lampColour: '#ffbf6e', lampIntensity: 14, lampReach: 18, halo: 1.6, shadows: true, flicker: 0.15,
  // Snow falling
  snowAmount: 6000, snowSpeed: 0.8, flakeSize: 1.0, snowDrift: 0.5, falling: true,
  // Ground
  snowColour: '#e6ecf6', pathColour: '#8592ab', pathWidth: 1.8, bumps: 0.5,                 // W6: bumps 0.5
  // Trees
  treeCount: 260, treeSize: 1.0, treeSpacing: 2.6, treeSnow: 0.75, treeColour: '#2c5341', trunkColour: '#4a3527', seed: 7,   // W6: snow on branches 0.75
  // Fog
  fogColour: '#141c2e', fogDensity: 0.03,
  // Camera and moving (the maze's, M10)
  distance: 3.2, height: 2.1, shoulder: 0.35, lookAhead: 1.6, lookHeight: 0.75, fov: 62, follow: 7,
  walkSpeed: 2.6, turnSpeed: 150, mouseTurn: true,
});

// The arch's "other light" (W12): the same forest under a slightly different sky, fog and snowfall, seen through the
// arch when it leads somewhere. (Once the second forest exists, its own settings can go here.)
export const OTHER_LIGHT = Object.freeze({
  skyTop: '#06121c', skyHorizon: '#1f4152', fogColour: '#10242e', fogDensity: 0.026, ambient: 0.75, hemiSky: '#9fd0d8',
  moonColour: '#b8e2e6', snowSpeed: 0.35, lampColour: '#ffd9a0',
});

export const soundSettings = () => ({ ...SOUND_DEFAULTS });
