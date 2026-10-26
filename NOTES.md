# Inkfall: build notes

Portfolio one-pager for Stephen Fehon. Built after studying Lorenzo Lottici's
award-winning site (lorenzolottici.it/en) and the techniques behind sites of
that kind. This file records the study, what was borrowed, what was
deliberately different, and how the build maps to it.

## What the reference site does

Walkthrough of all five pages (home, services, work, path, pensiero,
lets-talk) with screenshots:

- Dark near-black theme (#070707), Archivo + JetBrains Mono type.
- An entry gate before the site: a LISTEN/SILENT choice (stored in
  sessionStorage) and an "it/en" language gate. The copy carries a theme of
  order vs chaos.
- "Press and hold to break the order": holding the pointer disturbs a 3D
  element; it settles back on release. The same hold-to-disturb idea repeats
  across pages.
- A 3D character model (skeleton GLB at /modelli/omino-scheletro.glb with a
  .bin companion) that reacts to the page.
- Work is a 3D carousel of seven project cards with query-param deep links
  (?p=roxam and so on), so each card has its own URL.
- Pensiero (thinking) is a set of essay subpages.
- Let's talk is a conversational four-question form instead of a raw form.
- Under the hood: Next.js with WebGL (Three.js) scenes, smooth-scroll
  libraries, and scroll-linked GSAP animation. The public pattern for this
  class of site is a fixed full-screen WebGL canvas behind the DOM, Lenis or
  locomotive-scroll for smooth scrolling, GSAP ScrollTrigger driving
  scrubbed timelines, and GLSL-driven particles or meshes.

## What Inkfall takes from that class of site

- One fixed WebGL canvas behind the whole page, thousands of shader-driven
  particles, scroll-linked state changes, a preloader, smooth scrolling,
  custom cursor, and a "press and hold" disturbance.

## What Inkfall deliberately does differently

- Light cool vellum paper with blue-black ink and one ultramarine accent.
  The reference is near-black; this site is its opposite pole so it never
  reads as a copy.
- The particles are typography. They assemble into STEPHEN FEHON, then
  morph BUILD, WRITE, a torus knot, and SAY HELLO as chapters scroll by.
  Sampling runs offscreen on a canvas, maps glyph pixels to particle
  targets, and a spring integrator moves each particle per frame.
- Assembling into your own name rather than hosting a GLB character: no
  external model to download, and the identity is the content.
- Scroll turbulence: fast scrolling drags the ink upward and sideways
  (velocity from the smooth scroller, smoothed, fed into the particle
  loop). The reference disturbs on press and hold; this reacts to how you
  scroll too.
- Works gallery is a pinned horizontal track, not a 3D carousel: simpler,
  and deep-linkable later if it ever becomes separate pages.
- No gate before the site. The preloader counts, the ink assembles behind
  it, and you are in.

## Implementation map

- src/ink.js: WebGL layer. Offscreen text sampling to particle targets,
  per-particle spring integration, pointer repulsion, hold-to-spill,
  scroll turbulence, assemble-on-load. Returns null when WebGL is
  unavailable; the page then shows a static headline (body.no-gl).
- src/main.js: Lenis smooth scroll wired into one GSAP ticker; a single
  scroll read (not competing tweens, which left morph stuck at the last
  created tween's start value) computes the chapter morph; split-word
  reveals; pinned horizontal gallery; cursor and magnetic hover; loader
  timeline.
- reduced-motion: the WebGL layer and smooth scroll are skipped entirely
  and the page renders as a clean static document.
- Build: Vite, chunks split (three, gsap, lenis). No tracking, no cookies.

## Ideas if this grows

- Per-project case-study pages built as argument pages (problem, decisions,
  tradeoffs, honest outcome ledger) rather than galleries.
- Deep links for gallery cards (?p=fehonfinds) mirroring the reference's
  work-carousel URLs.
- An it/en-style gate is not needed; a dark mode variant of the ink could
  be a fun toggle.

## Fix pass, Oct 26 evening (video bug report)
- ROOT CAUSE of "ink never comes back": the press-and-hold spill pushed particles on z with
  no restoring force, and the ortho camera's depth window is only [-10, 10]. A 3s hold drove
  z past 10, so every particle was permanently clipped behind the camera plane. Now: z gets
  the same spring as x/y, and the hold bulge is bounded (target z = 3*hold, capped).
- Return redesigned per request: on release a return-vortex envelope (ret) starts; each
  particle spirals home on its own stagger (delay by seed), slight overshoot via a softer
  damping during the return. Hold now also stirs the ink tangentially around the press point.
- Hold no longer selects text: body.ink-holding class sets user-select none.
- Hardening: points.frustumCulled = false, per-particle NaN self-heal, velocity clamp.
- Gallery clip fix: track padding-top 4.5rem (cards clear the fixed header during the pin),
  card width 72vw/640 -> 68vw/600. Plus a paper scrim so sliding content fades under the nav.
- Verified in headless Chromium: 3.2s vigorous hold (zout stayed 0), no text selection,
  settled rms 7 back to formed name, contact rms 0, zero page errors.

## Polish pass, Oct 26 evening 2
- Essay hover preview (floating image on Write rows) removed per request: block in main.js,
  figure in index.html, rules in styles.css, and the now-unused cover-notes.png dropped.
  Hover feedback on essay rows is the existing indent + ultramarine rule.
- Header scrim deepened (120px, solid to 55%) so section heads sliding under the fixed nav
  fade out instead of colliding with the wordmark. Verified on the Write section.
