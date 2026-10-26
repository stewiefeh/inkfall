import * as THREE from 'three';

// One fixed WebGL canvas behind the page. Thousands of ink particles
// morph between typographic forms as the page scrolls. Press and hold
// anywhere to spill them; release and they settle back.

const TEXT_TARGETS = [
  { lines: ['STEPHEN', 'FEHON'], weight: 800, tracking: '0em' },
  { lines: ['BUILD'], weight: 800, tracking: '0.02em' },
  { lines: ['WRITE'], weight: 800, tracking: '0.02em' },
  null, // torus knot, generated below
  { lines: ['SAY HELLO'], weight: 800, tracking: '0em' },
];

function sampleText(lines, weight, tracking) {
  const H = 420;
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d', { willReadFrequently: true });
  ctx.font = `800 ${Math.floor(H * 0.72)}px "Bricolage Grotesque"`;
  if ('letterSpacing' in ctx) ctx.letterSpacing = tracking;
  let w = 0;
  for (const ln of lines) w = Math.max(w, ctx.measureText(ln).width);
  c.width = Math.ceil(w + 80);
  c.height = H * lines.length + 40;
  const ctx2 = c.getContext('2d');
  ctx2.font = `800 ${Math.floor(H * 0.72)}px "Bricolage Grotesque"`;
  if ('letterSpacing' in ctx2) ctx2.letterSpacing = tracking;
  ctx2.textBaseline = 'middle';
  ctx2.fillStyle = '#000';
  const lh = c.height / lines.length;
  lines.forEach((ln, i) => ctx2.fillText(ln, 40, lh * (i + 0.5)));
  const img = ctx2.getImageData(0, 0, c.width, c.height).data;
  const pts = [];
  const stride = 3;
  for (let y = 0; y < c.height; y += stride) {
    for (let x = 0; x < c.width; x += stride) {
      if (img[(y * c.width + x) * 4 + 3] > 110) pts.push(x, y);
    }
  }
  // normalize to a unit box centered at 0, preserving aspect
  let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
  for (let i = 0; i < pts.length; i += 2) {
    minX = Math.min(minX, pts[i]); maxX = Math.max(maxX, pts[i]);
    minY = Math.min(minY, pts[i + 1]); maxY = Math.max(maxY, pts[i + 1]);
  }
  const bw = maxX - minX, bh = maxY - minY;
  const scale = 1 / Math.max(bw, bh);
  const out = new Float32Array(pts.length);
  for (let i = 0; i < pts.length; i += 2) {
    out[i] = ((pts[i] - minX) / bw - 0.5) * (bw * scale) * 2;
    out[i + 1] = -(((pts[i + 1] - minY) / bh - 0.5) * (bh * scale) * 2);
  }
  return { pts: out, count: pts.length / 2, aspect: bw / bh };
}

function torusKnot(count) {
  const out = new Float32Array(count * 2);
  const p = 2, q = 3, R = 0.42, r = 0.16;
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2 * 6;
    const cx = (R + r * Math.cos(q * t)) * Math.cos(p * t);
    const cy = (R + r * Math.cos(q * t)) * Math.sin(p * t);
    const jitter = 0.05;
    out[i * 2] = cx + (Math.random() - 0.5) * jitter;
    out[i * 2 + 1] = cy + (Math.random() - 0.5) * jitter;
  }
  return { pts: out, count, aspect: 1 };
}

export async function createInk(canvas) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'high-performance' });
  } catch (e) {
    return null;
  }
  if (!renderer) return null;
  renderer.setClearColor(0x000000, 0);

  try {
    await document.fonts.load('800 300px "Bricolage Grotesque"');
    await document.fonts.ready;
  } catch (e) { /* fall back to sampled system font */ }

  // device tiers: phones, tablets/small laptops, large screens
  const tier = window.innerWidth < 768 ? 0 : window.innerWidth < 1200 ? 1 : 2;
  const COUNT = [6000, 11000, 16000][tier];
  const DPR_CAPS = [1.5, 1.6, 1.75];

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10);

  // build targets
  const targets = [];
  for (const spec of TEXT_TARGETS) {
    if (spec === null) { targets.push(torusKnot(COUNT)); continue; }
    const s = sampleText(spec.lines, 800, spec.tracking);
    targets.push(s);
  }
  // per particle: pick points from each target (wrap around)
  const tgt = targets.map((t) => {
    const arr = new Float32Array(COUNT * 2);
    for (let i = 0; i < COUNT; i++) {
      const j = (i * 7919) % t.count; // prime stride for spread
      arr[i * 2] = t.pts[j * 2];
      arr[i * 2 + 1] = t.pts[j * 2 + 1];
    }
    return arr;
  });

  const positions = new Float32Array(COUNT * 3);
  const velocities = new Float32Array(COUNT * 3);
  const seeds = new Float32Array(COUNT);
  const sizes = new Float32Array(COUNT);
  const vels = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 4;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
    positions[i * 3 + 2] = 0;
    seeds[i] = Math.random();
    sizes[i] = 0.6 + Math.random() * 0.9;
  }
  // scattered start for the reveal
  const scatter = new Float32Array(COUNT * 2);
  for (let i = 0; i < COUNT * 2; i++) scatter[i] = (Math.random() - 0.5) * 4;

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aVel', new THREE.BufferAttribute(vels, 1));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

  const uniforms = {
    uScale: { value: 1 },
    uInk: { value: new THREE.Color('#16151a') },
    uUltra: { value: new THREE.Color('#2b3fd6') },
  };

  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    vertexShader: `
      attribute float aVel; attribute float aSeed; attribute float aSize;
      uniform float uScale; varying float vVel; varying float vSeed;
      void main() {
        vVel = aVel; vSeed = aSeed;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uScale;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform vec3 uInk; uniform vec3 uUltra;
      varying float vVel; varying float vSeed;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float m = smoothstep(0.5, 0.28, length(d));
        if (m < 0.01) discard;
        vec3 col = mix(uInk, uUltra, clamp(vVel * 2.2, 0.0, 1.0) * 0.9);
        float a = m * (0.55 + 0.45 * fract(vSeed * 7.13));
        gl_FragColor = vec4(col, a);
      }`,
  });

  const points = new THREE.Points(geo, material);
  points.frustumCulled = false;
  scene.add(points);

  const state = { morph: 0, assemble: 0, hold: 0, holdV: 0, turb: 0, running: true };
  const mouse = { x: 9999, y: 9999, tx: 9999, ty: 9999 };
  let vw = 1, vh = 1;

  function resize() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    vw = w; vh = h;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, DPR_CAPS[tier]));
    renderer.setSize(w, h, false);
    camera.left = -w / 2; camera.right = w / 2;
    camera.top = h / 2; camera.bottom = -h / 2;
    camera.updateProjectionMatrix();
    uniforms.uScale.value = (h / 900) * (renderer.getPixelRatio()) * 2.1;
  }
  resize();

  // pointer handling (canvas is pointer-events none; listen on window)
  function toWorld(e) {
    return { x: e.clientX - vw / 2, y: -(e.clientY - vh / 2) };
  }
  let touchStart = null;
  let scrollCancel = false;
  function onMove(e) {
    const p = toWorld(e); mouse.tx = p.x; mouse.ty = p.y;
    // outside the ink stage a moving touch is a scroll, not a hold;
    // inside the stage the drag IS the play
    const inStage = e.target && e.target.closest && e.target.closest('.ink-stage');
    if (e.pointerType === 'touch' && touchStart && state.holdV > 0 && !inStage) {
      const dx = e.clientX - touchStart.x, dy = e.clientY - touchStart.y;
      if (dx * dx + dy * dy > 144) { // moved: it is a scroll, not a hold
        state.holdV = 0; touchStart = null; scrollCancel = true;
        document.body.classList.remove('ink-holding');
      }
    }
  }
  function onLeave() { mouse.tx = 9999; mouse.ty = 9999; }
  let holdEl = null;
  let ret = 0; // return-vortex envelope: set to 1 on release, decays
  function onDown(e) {
    if (e.target.closest && e.target.closest('a, button, input, textarea, select')) return;
    if (e.pointerType === 'touch') touchStart = { x: e.clientX, y: e.clientY };
    state.holdV = 1; holdEl = e.target;
    document.body.classList.add('ink-holding');
  }
  function onUp() {
    if (state.holdV > 0.05 && !scrollCancel) ret = 1;
    state.holdV = 0; holdEl = null; touchStart = null; scrollCancel = false;
    document.body.classList.remove('ink-holding');
  }
  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('pointerdown', onDown, { passive: true });
  window.addEventListener('pointerup', onUp, { passive: true });
  window.addEventListener('pointercancel', onUp, { passive: true });
  document.addEventListener('mouseleave', onLeave);

  let t = 0;
  function frame(dt) {
    if (!state.running) return;
    t += dt;
    // smooth mouse and hold
    mouse.x += (mouse.tx - mouse.x) * 0.18;
    mouse.y += (mouse.ty - mouse.y) * 0.18;
    state.hold += (state.holdV - state.hold) * (state.holdV > state.hold ? 0.08 : 0.045);
    if (ret > 0) ret = Math.max(0, ret - dt * 1.7);

    const m = Math.max(0, Math.min(state.morph, targets.length - 1));
    const i0 = Math.floor(m), i1 = Math.min(i0 + 1, targets.length - 1);
    const fm = m - i0;
    const pos = geo.attributes.position.array;
    const velAttr = geo.attributes.aVel.array;
    const damp = ret > 0.1 ? 0.85 : 0.8;
    const assemble = state.assemble;
    const hold = state.hold;
    const timeN = t * 0.55;

    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3, iy = ix + 1, iz = ix + 2;
      const s = seeds[i];
      // per-particle stagger on the morph
      let f = (fm - s * 0.35) / (1 - 0.35);
      f = f < 0 ? 0 : f > 1 ? 1 : f;
      f = f * f * (3 - 2 * f);
      // assemble blend from scattered start
      const a = Math.max(0, Math.min((assemble - s * 0.4) / 0.6, 1));
      const aEase = a * a * (3 - 2 * a);
      const T0 = tgt[i0], T1 = tgt[i1];
      let bx = T0[i * 2] + (T1[i * 2] - T0[i * 2]) * f;
      let by = T0[i * 2 + 1] + (T1[i * 2 + 1] - T0[i * 2 + 1]) * f;
      // world scale: fit the unit box to the viewport with margins
      const S = Math.min(vw * 0.46, vh * 0.42);
      bx *= S; by *= S * 0.86;
      // scatter blend (page load reveal)
      bx = scatter[i * 2] * S * 1.6 + (bx - scatter[i * 2] * S * 1.6) * aEase;
      by = scatter[i * 2 + 1] * S * 1.2 + (by - scatter[i * 2 + 1] * S * 1.2) * aEase;

      let px = positions[ix], py = positions[iy];
      let pz = positions[iz];
      // spring toward base
      let vx = velocities[ix], vy = velocities[iy], vz = velocities[iz];
      vx += (bx - px) * 0.085;
      vy += (by - py) * 0.085;
      // z gets a spring too: spill drift used to escape the camera's depth window forever
      vz += (0 - pz) * 0.085;
      // idle drift
      vx += Math.sin(timeN + s * 40.0 + px * 0.004) * 0.012;
      vy += Math.cos(timeN * 0.8 + s * 61.0 + py * 0.004) * 0.012;
      // mouse repulsion
      const dx = px - mouse.x, dy = py - mouse.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < 32400) { // 180px radius
        const d = Math.sqrt(d2) || 1;
        const f2 = (180 - d) / 180;
        vx += (dx / d) * f2 * 2.4;
        vy += (dy / d) * f2 * 2.4;
      }
      // scroll turbulence: fast scrolling drags the ink upward and sideways
      if (state.turb > 0.01) {
        const tr = state.turb;
        vy -= tr * (0.4 + s * 1.1) * 1.5;
        vx += Math.sin(t * 7 + s * 47 + py * 0.01) * tr * 0.8;
        vy += Math.cos(t * 5.5 + s * 31 + px * 0.01) * tr * 0.4;
      }
      // hold: spill outward with noise
      if (hold > 0.01) {
        const dd = Math.sqrt(px * px + py * py) || 1;
        const g = hold * (0.35 + s * 0.65);
        vx += (px / dd) * g * 2.6 + Math.sin(t * 3 + s * 90) * g;
        vy += (py / dd) * g * 2.6 + Math.cos(t * 2.4 + s * 70) * g;
        // stir: tangential swirl around the press point, like dragging a spoon through ink
        vx += -dy * g * 0.0045;
        vy += dx * g * 0.0045;
        // ink bulges toward the viewer while held, bounded so it can never clip away
        vz += ((3 * g) - pz) * 0.06;
      }
      // return vortex: each particle spirals home on its own stagger, slight overshoot
      if (ret > 0.01) {
        const dly = s * 0.5;
        const rf = Math.max(0, Math.min(1, (1 - dly - ret) * 6));
        if (rf > 0) {
          const rx = px - bx, ry = py - by;
          const sp = rf * ret * (0.7 + 0.5 * s) * 0.008;
          vx += -ry * sp;
          vy += rx * sp;
        }
      }
      vx *= damp; vy *= damp; vz *= damp;
      const vm = Math.sqrt(vx * vx + vy * vy + vz * vz);
      if (vm > 90) { const k = 90 / vm; vx *= k; vy *= k; vz *= k; }
      px += vx; py += vy;
      positions[ix] = px; positions[iy] = py;
      positions[iz] = pz + vz * 0.1;
      if (!Number.isFinite(px) || !Number.isFinite(py) || !Number.isFinite(positions[iz])) {
        positions[ix] = bx; positions[iy] = by; positions[iz] = 0;
        velocities[ix] = 0; velocities[iy] = 0; velocities[iz] = 0;
      }
      velocities[ix] = vx; velocities[iy] = vy; velocities[iz] = vz;
      const sp = Math.sqrt(vx * vx + vy * vy);
      velAttr[i] = Math.min(1, sp * 0.14);
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.aVel.needsUpdate = true;
    renderer.render(scene, camera);
  }

  document.addEventListener('visibilitychange', () => {
    state.running = !document.hidden;
  });

  function debug() {
    const m = Math.max(0, Math.min(state.morph, targets.length - 1));
    const i0 = Math.floor(m), i1 = Math.min(i0 + 1, targets.length - 1);
    const fm = m - i0;
    const S = Math.min(vw * 0.46, vh * 0.42);
    let sum = 0; let zout = 0;
    for (let i = 0; i < COUNT; i++) {
      const T0 = tgt[i0], T1 = tgt[i1];
      const tx = (T0[i * 2] + (T1[i * 2] - T0[i * 2]) * fm) * S;
      const ty = (T0[i * 2 + 1] + (T1[i * 2 + 1] - T0[i * 2 + 1]) * fm) * S * 0.86;
      const dx = positions[i * 3] - tx, dy = positions[i * 3 + 1] - ty;
      sum += dx * dx + dy * dy;
      const zval = positions[i * 3 + 2];
      if (zval > 9.5 || zval < -9.5) zout++;
    }
    return { morph: +state.morph.toFixed(3), assemble: +state.assemble.toFixed(3), hold: +state.hold.toFixed(3), rms: Math.round(Math.sqrt(sum / COUNT)), zout };
  }
  if (typeof window !== 'undefined') window.__inkDebug = debug;

  return {
    state,
    resize,
    frame,
    reveal() { state.assemble = 0.0001; },
    dispose() {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      renderer.dispose();
    },
  };
}
