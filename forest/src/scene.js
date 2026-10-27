// scene.js: Winter Forest's world in three.js: the night sky and stars, moonlight, the ground with its paths, the
// spruces, the lamp post, falling snow and the figure. Grown from the look test (lab/forest/main.js), with the
// settings fixed (look.js, W6) and the portals' ground (layout.js). The portals themselves are portals.js.
import * as THREE from 'three';
import { CLEARING, WORLD, PATHS, pathPoints, plantTrees, groundHeight, FRAMES, WARDROBE, LIBRARY, local, world as toWorld, LANE } from './layout.js';

export const col = (hex) => new THREE.Color(hex);

export function createScene(renderer, L) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(L.fov, 1, 0.05, 600);
  scene.fog = new THREE.FogExp2(col(L.fogColour), L.fogDensity);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = L.exposure;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  // ---- the sky: a gradient dome and stars ----------------------------------------------------------------------------
  const skyMat = new THREE.ShaderMaterial({
    uniforms: { top: { value: col(L.skyTop) }, horizon: { value: col(L.skyHorizon) } },
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 top; uniform vec3 horizon; varying vec3 vP; void main(){ float h = clamp(normalize(vP).y, 0.0, 1.0); gl_FragColor = vec4(mix(horizon, top, pow(h, 0.55)), 1.0); }',
    side: THREE.BackSide, depthWrite: false, fog: false,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), skyMat);
  sky.renderOrder = -2;
  scene.add(sky);
  const starGeo = new THREE.BufferGeometry();
  {
    const n = 1400, p = new Float32Array(n * 3), b = new Float32Array(n);
    let s = 12345; const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < n; i++) {
      const u = r(), v = 0.08 + r() * 0.92, a = u * Math.PI * 2, y = v, q = Math.sqrt(1 - y * y);
      p.set([Math.cos(a) * q * 380, y * 380, Math.sin(a) * q * 380], i * 3); b[i] = 0.3 + r() * 0.7;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(p, 3));
    starGeo.setAttribute('bright', new THREE.BufferAttribute(b, 1));
  }
  const starMat = new THREE.ShaderMaterial({
    uniforms: { amount: { value: L.stars }, time: { value: 0 } },
    vertexShader: 'attribute float bright; uniform float time; varying float vB; void main(){ vB = bright * (0.75 + 0.25 * sin(time * 1.3 + position.x)); gl_PointSize = 1.0 + bright * 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'uniform float amount; varying float vB; void main(){ vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(c)); gl_FragColor = vec4(vec3(0.85,0.9,1.0), a * vB * amount); }',
    transparent: true, depthWrite: false, fog: false,
  });
  const stars = new THREE.Points(starGeo, starMat);
  stars.renderOrder = -1;
  scene.add(stars);

  // ---- lights ----------------------------------------------------------------------------------------------------------
  const hemi = new THREE.HemisphereLight(0x8fa4d8, 0x2a3346, L.ambient);
  scene.add(hemi);
  const moon = new THREE.DirectionalLight(col(L.moonColour), L.moonlight);
  moon.position.set(-30, 40, -18);
  scene.add(moon);

  // ---- the ground: snow with the four paths trodden into it ------------------------------------------------------------
  const groundAt = (x, z) => groundHeight(x, z, L.bumps);
  const SIZE = 2 * (WORLD + 14);
  const groundGeo = new THREE.PlaneGeometry(SIZE, SIZE, 180, 180).rotateX(-Math.PI / 2);
  {
    const pos = groundGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) pos.setY(i, groundAt(pos.getX(i), pos.getZ(i)));
    groundGeo.computeVertexNormals();
  }
  const paths = PATHS.map((p) => ({ id: p.id, pts: pathPoints(p) }));
  const groundCanvas = document.createElement('canvas');
  groundCanvas.width = groundCanvas.height = 2048;
  const toCanvas = (x, z) => [(x / SIZE + 0.5) * 2048, (z / SIZE + 0.5) * 2048];
  {
    const g = groundCanvas.getContext('2d');
    g.fillStyle = L.snowColour; g.fillRect(0, 0, 2048, 2048);
    const rand = (() => { let s = 99; return () => ((s = (s * 16807) % 2147483647) / 2147483647); })();
    for (let i = 0; i < 900; i++) {
      const x = rand() * 2048, y = rand() * 2048, r = 10 + rand() * 60;
      const grad = g.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, rand() < 0.5 ? 'rgba(255,255,255,0.10)' : 'rgba(120,140,180,0.07)'); grad.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = grad; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    }
    const px = 2048 / SIZE;
    for (const pass of [{ w: 1.35, a: 0.4, blur: 6 }, { w: 0.95, a: 0.85, blur: 2 }]) {
      g.save();
      g.filter = `blur(${pass.blur}px)`;
      g.strokeStyle = L.pathColour; g.globalAlpha = pass.a;
      g.lineWidth = L.pathWidth * px * pass.w; g.lineCap = 'round'; g.lineJoin = 'round';
      for (const p of paths) {
        g.beginPath();
        p.pts.forEach(([x, z], i) => { const [cx, cz] = toCanvas(x, z); if (i) g.lineTo(cx, cz); else g.moveTo(cx, cz); });
        g.stroke();
      }
      const [lx, lz] = toCanvas(0, 0);
      g.lineWidth = L.pathWidth * px * pass.w * 0.9;
      g.beginPath(); g.arc(lx, lz, 3.2 * px, 0, Math.PI * 2); g.stroke();
      // The glades in front of the arch, the great tree and the library: trodden a little.
      g.globalAlpha = pass.a * 0.45;
      for (const [id, u, rad] of [['arch', -1.6, 2.6], ['tree-door', -0.8, 2.4], ['slide', -1.0, 2.8]]) {
        const [gx, gz] = toCanvas(...toWorld(FRAMES[id], u, 0));
        g.fillStyle = L.pathColour; g.beginPath(); g.arc(gx, gz, rad * px, 0, Math.PI * 2); g.fill();
      }
      g.restore();
    }
    // Warm light from the library's windows lying on the snow.
    const f = FRAMES.slide;
    const lights = [];
    for (const v of [-3.2, 3.2]) lights.push(toWorld(f, LIBRARY.front - 1.4, v));
    for (const s of [-1, 1]) for (const u of [3.5, 7.5, 11.5]) lights.push(toWorld(f, LIBRARY.front + u, s * (LIBRARY.width / 2 + 1.4)));
    g.save(); g.globalCompositeOperation = 'source-over';
    for (const [x, z] of lights) {
      const [cx, cz] = toCanvas(x, z), r = 2.6 * px;
      const grad = g.createRadialGradient(cx, cz, 0, cx, cz, r);
      grad.addColorStop(0, 'rgba(255,196,120,0.55)'); grad.addColorStop(1, 'rgba(255,196,120,0)');
      g.fillStyle = grad; g.beginPath(); g.arc(cx, cz, r, 0, Math.PI * 2); g.fill();
    }
    g.restore();
  }
  const groundTex = new THREE.CanvasTexture(groundCanvas);
  groundTex.colorSpace = THREE.SRGBColorSpace;
  groundTex.anisotropy = 4;
  const ground = new THREE.Mesh(groundGeo, new THREE.MeshLambertMaterial({ map: groundTex }));
  ground.receiveShadow = true;
  scene.add(ground);

  // ---- the spruces: one tree drawn many times ------------------------------------------------------------------------
  function treeGeometry() {
    const green = col(L.treeColour), snow = col(L.snowColour), trunk = col(L.trunkColour);
    const parts = [{ geo: new THREE.CylinderGeometry(0.2, 0.3, 1.2, 7).translate(0, 0.6, 0), colour: trunk }];
    const tiers = 6;
    for (let i = 0; i < tiers; i++) {
      const t = i / (tiers - 1);
      const r = 2.4 - t * 1.75, h = 2.9 - t * 1.0, y = 0.45 + i * 1.55;
      parts.push({ geo: new THREE.ConeGeometry(r, h, 9).translate(0, y + h / 2, 0), colour: green });
      const k = L.treeSnow, cr = r * (0.55 + 0.35 * k), ch = h * (0.35 + 0.25 * k);
      if (k > 0) parts.push({ geo: new THREE.ConeGeometry(cr, ch, 9).translate(0, y + h - ch / 2 + 0.06, 0), colour: snow });
    }
    return mergeColoured(parts);
  }
  const treeList = plantTrees({ seed: L.seed, count: L.treeCount, spacing: L.treeSpacing, size: L.treeSize, pathWidth: L.pathWidth });
  const trees = new THREE.InstancedMesh(treeGeometry(), new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }), treeList.length);
  {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0);
    treeList.forEach((t, i) => {
      q.setFromAxisAngle(up, t.r);
      m.compose(new THREE.Vector3(t.x, groundAt(t.x, t.z) - 0.1, t.z), q, new THREE.Vector3(t.s, t.s * (0.95 + (i % 5) * 0.03), t.s));
      trees.setMatrixAt(i, m);
    });
  }
  trees.castShadow = true; trees.receiveShadow = true;
  scene.add(trees);
  const walkWorld = { trees: treeList, paths, pathWidth: L.pathWidth };

  // ---- the lamp post ---------------------------------------------------------------------------------------------------
  const lamp = new THREE.Group();
  const iron = new THREE.MeshLambertMaterial({ color: 0x1b1d22 });
  for (const g of [
    new THREE.CylinderGeometry(0.28, 0.36, 0.35, 10).translate(0, 0.17, 0),
    new THREE.CylinderGeometry(0.07, 0.1, 3.0, 10).translate(0, 1.85, 0),
    new THREE.CylinderGeometry(0.2, 0.12, 0.12, 8).translate(0, 3.33, 0),
    new THREE.ConeGeometry(0.34, 0.3, 4).rotateY(Math.PI / 4).translate(0, 4.07, 0),
    new THREE.SphereGeometry(0.06, 8, 6).translate(0, 4.27, 0),
  ]) lamp.add(new THREE.Mesh(g, iron));
  const glassMat = new THREE.MeshBasicMaterial({ color: col(L.lampColour) });
  lamp.add(new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.15, 0.55, 4).rotateY(Math.PI / 4).translate(0, 3.66, 0), glassMat));
  for (const [dx, dz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) lamp.add(new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.6, 0.03).translate(dx * 0.17, 3.66, dz * 0.17), iron));
  scene.add(lamp);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: col(L.lampColour), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false }));
  halo.position.set(0, 3.66, 0);
  halo.scale.setScalar(L.halo);
  scene.add(halo);
  const lampLight = new THREE.PointLight(col(L.lampColour), L.lampIntensity, L.lampReach, 1.6);
  lampLight.position.set(0, 3.5, 0);
  lampLight.shadow.mapSize.set(1024, 1024);
  lampLight.shadow.bias = -0.002;
  lampLight.shadow.radius = 4;
  lampLight.castShadow = L.shadows;
  scene.add(lampLight);

  // ---- the figure: the maze's shape, lit -------------------------------------------------------------------------------
  const figure = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.46, 6, 16).translate(0, 0.43, 0), new THREE.MeshLambertMaterial({ color: 0xf6f7fb, emissive: 0x2a3040 }));
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 18, 12).translate(0, 1.0, 0), new THREE.MeshLambertMaterial({ color: 0x3c3a4e }));
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.2, 10).rotateX(Math.PI / 2).translate(0, 1.0, -0.2), new THREE.MeshLambertMaterial({ color: 0xf0b046 }));
  for (const m of [body, head, cap]) { m.castShadow = true; figure.add(m); }
  scene.add(figure);

  // ---- falling snow (on the graphics card); none falls inside the wardrobe ----------------------------------------------
  const SNOW_BOX = [36, 16, 36];
  const wf = FRAMES.wardrobe;
  const shelterAt = toWorld(wf, -WARDROBE.depth / 2, 0);
  const snowMat = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 }, speed: { value: L.snowSpeed }, drift: { value: L.snowDrift }, size: { value: L.flakeSize },
      centre: { value: new THREE.Vector3() }, box: { value: new THREE.Vector3(...SNOW_BOX) }, scale: { value: 400 },
      fogColour: { value: col(L.fogColour) }, fogDensity: { value: L.fogDensity },
      shelter: { value: new THREE.Vector4(shelterAt[0], shelterAt[1], wf.d[0], wf.d[1]) }, shelterSize: { value: new THREE.Vector3(WARDROBE.depth / 2 + 0.05, WARDROBE.half + 0.05, WARDROBE.height) },
    },
    vertexShader: `
      attribute float seed; uniform float time, speed, drift, size, scale; uniform vec3 centre, box; uniform vec4 shelter; uniform vec3 shelterSize;
      varying float vD; varying float vHide;
      void main() {
        vec3 p = position;
        p.y = mod(p.y - time * speed * (0.7 + seed * 0.6), box.y);
        p.x += sin(time * 0.6 + seed * 6.283) * drift; p.z += cos(time * 0.5 + seed * 4.0) * drift * 0.7;
        vec3 w = vec3(centre.x + mod(p.x - centre.x + box.x * 0.5, box.x) - box.x * 0.5, p.y - 2.0, centre.z + mod(p.z - centre.z + box.z * 0.5, box.z) - box.z * 0.5);
        vec2 q = w.xz - shelter.xy;
        float u = dot(q, shelter.zw), v = dot(q, vec2(-shelter.w, shelter.z));
        vHide = (abs(u) < shelterSize.x && abs(v) < shelterSize.y && w.y < shelterSize.z) ? 1.0 : 0.0;
        vec4 mv = modelViewMatrix * vec4(w, 1.0);
        vD = -mv.z;
        gl_PointSize = size * (0.6 + seed * 0.8) * scale * 0.045 / max(0.5, -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform vec3 fogColour; uniform float fogDensity; varying float vD; varying float vHide;
      void main() {
        if (vHide > 0.5) discard;
        float a = smoothstep(0.5, 0.15, length(gl_PointCoord - 0.5));
        float f = 1.0 - exp(-fogDensity * fogDensity * vD * vD);
        gl_FragColor = vec4(mix(vec3(0.95, 0.97, 1.0), fogColour, f), a * 0.9 * (1.0 - f * 0.8));
      }`,
    transparent: true, depthWrite: false,
  });
  const snow = (() => {
    const n = Math.max(1, Math.round(L.snowAmount));
    const p = new Float32Array(n * 3), s = new Float32Array(n);
    for (let i = 0; i < n; i++) { p.set([(Math.random() - 0.5) * SNOW_BOX[0], Math.random() * SNOW_BOX[1], (Math.random() - 0.5) * SNOW_BOX[2]], i * 3); s[i] = Math.random(); }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    g.setAttribute('seed', new THREE.BufferAttribute(s, 1));
    const pts = new THREE.Points(g, snowMat);
    pts.frustumCulled = false;
    pts.visible = L.falling;
    return pts;
  })();
  scene.add(snow);

  // ---- the light: this forest's own, or the arch's "other light" (W12) for drawing the view through it ----------------
  const own = { skyTop: L.skyTop, skyHorizon: L.skyHorizon, fogColour: L.fogColour, fogDensity: L.fogDensity, ambient: L.ambient, hemiSky: '#8fa4d8', moonColour: L.moonColour, snowSpeed: L.snowSpeed, lampColour: L.lampColour };
  function setLight(o) {
    skyMat.uniforms.top.value.set(o.skyTop); skyMat.uniforms.horizon.value.set(o.skyHorizon);
    scene.fog.color.set(o.fogColour); scene.fog.density = o.fogDensity;
    snowMat.uniforms.fogColour.value.set(o.fogColour); snowMat.uniforms.fogDensity.value = o.fogDensity;
    hemi.intensity = o.ambient; hemi.color.set(o.hemiSky);
    moon.color.set(o.moonColour);
    snowMat.uniforms.speed.value = o.snowSpeed;
    glassMat.color.set(o.lampColour); halo.material.color.set(o.lampColour); lampLight.color.set(o.lampColour);
  }

  function tick(t) {
    snowMat.uniforms.time.value = t; starMat.uniforms.time.value = t;
    const fl = 1 - L.flicker * (0.5 + 0.5 * Math.sin(t * 7.3) * Math.sin(t * 3.1 + 1.7)) * 0.35;
    lampLight.intensity = L.lampIntensity * fl;
    halo.material.opacity = 0.65 + 0.35 * fl;
  }

  return { scene, camera, groundAt, walkWorld, figure, snow, snowMat, halo, lampLight, setLight, own, tick, groundTex };
}

// A soft round glow (for the lamp's halo and other lights).
export function glowTexture(stops = [[0, 0.9], [0.18, 0.45], [1, 0]]) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  for (const [at, a] of stops) grad.addColorStop(at, `rgba(255,255,255,${a})`);
  g.fillStyle = grad; g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

// Several coloured pieces as one geometry (one draw per tree, however many pieces).
export function mergeColoured(parts) {
  const geos = parts.map(({ geo, colour }) => {
    const g = geo.index ? geo.toNonIndexed() : geo;
    g.computeVertexNormals();
    const c = new Float32Array(g.attributes.position.count * 3);
    for (let i = 0; i < g.attributes.position.count; i++) c.set([colour.r, colour.g, colour.b], i * 3);
    g.setAttribute('color', new THREE.BufferAttribute(c, 3));
    return g;
  });
  const total = geos.reduce((n, g) => n + g.attributes.position.count, 0);
  const pos = new Float32Array(total * 3), nor = new Float32Array(total * 3), clr = new Float32Array(total * 3);
  let o = 0;
  for (const g of geos) {
    pos.set(g.attributes.position.array, o * 3); nor.set(g.attributes.normal.array, o * 3); clr.set(g.attributes.color.array, o * 3);
    o += g.attributes.position.count;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('color', new THREE.BufferAttribute(clr, 3));
  return out;
}
