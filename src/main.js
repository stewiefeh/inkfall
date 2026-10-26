import './styles.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createInk } from './ink.js';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
if (reduced) document.body.classList.add('reduced');
if (isTouch) document.body.classList.add('touch');

let ink = null;
let inkState = null;
if (!reduced) {
  createInk(document.getElementById('ink')).then((api) => {
    if (!api) {
      document.body.classList.add('no-gl');
    } else {
      ink = api; inkState = api.state;
      // scroll drives the morphs: hero(0) build(1) write(2) about(3) contact(4)
      // one deterministic morph read: the deepest chapter in view wins
      const chapterEls = [...document.querySelectorAll('[data-chapter]')].map((el) => ({
        el, to: parseFloat(el.dataset.chapter),
      }));
      const updateMorph = () => {
        if (!inkState) return;
        const vh = window.innerHeight;
        let m = 0;
        for (const c of chapterEls) {
          const top = c.el.getBoundingClientRect().top;
          const p = Math.min(1, Math.max(0, (vh * 0.95 - top) / (vh * 0.7)));
          if (p > 0) m = c.to - 1 + p;
        }
        inkState.morph = m;
      };
      ScrollTrigger.create({
        trigger: document.body, start: 'top top', end: 'bottom bottom',
        onUpdate: updateMorph, onRefresh: updateMorph,
      });
      updateMorph();
    }
    startLoader();
  });
} else {
  startLoader();
}

// ---------- smooth scroll ----------
let lenis = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  // render loop for ink runs on the same ticker
  let turbSmooth = 0;
  gsap.ticker.add(() => {
    if (ink && inkState && inkState.running) {
      if (lenis && inkState.turb !== undefined) {
        const target = Math.min(1.2, Math.abs(lenis.velocity || 0) / 70);
        turbSmooth += (target - turbSmooth) * 0.12;
        inkState.turb = turbSmooth;
      }
      ink.frame(gsap.ticker.deltaRatio(60) / 60);
    }
  });
  window.addEventListener('resize', () => ink && ink.resize());
}

// anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.4 });
    else target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ---------- split-text reveals ----------
function splitWords(el) {
  const text = el.textContent;
  el.setAttribute('aria-label', text);
  el.textContent = '';
  text.split(/\s+/).forEach((word, i, arr) => {
    const outer = document.createElement('span');
    outer.className = 'w';
    const inner = document.createElement('span');
    inner.className = 'wi';
    inner.textContent = word;
    outer.appendChild(inner);
    el.appendChild(outer);
    if (i < arr.length - 1) el.appendChild(document.createTextNode(' '));
  });
}
document.querySelectorAll('.reveal').forEach(splitWords);

document.querySelectorAll('.chapter-lede, .about-body p').forEach((el) => {
  if (el.classList.contains('reveal')) {
    gsap.fromTo(el.querySelectorAll('.wi'),
      { yPercent: 115 },
      {
        yPercent: 0, stagger: 0.012, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      });
  }
});

// chapter titles slide in
document.querySelectorAll('.chapter-title, .chapter-no').forEach((el) => {
  gsap.fromTo(el, { y: 60, opacity: 0 }, {
    y: 0, opacity: 1, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 88%' },
  });
});

// ---------- horizontal gallery ----------
const gallery = document.querySelector('[data-gallery]');
if (gallery && !reduced) {
  const track = gallery.querySelector('.gallery-track');
  const getScroll = () => track.scrollWidth - window.innerWidth;
  gsap.to(track, {
    x: () => -getScroll(),
    ease: 'none',
    scrollTrigger: {
      trigger: gallery,
      start: 'top top',
      end: () => '+=' + getScroll(),
      pin: true,
      scrub: 0.6,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });
  // cards drift in as the track moves
  gsap.utils.toArray('.card').forEach((card, i) => {
    gsap.fromTo(card.querySelector('.card-media'), { scale: 0.94 }, {
      scale: 1, ease: 'none',
      scrollTrigger: { trigger: gallery, start: 'top top', end: () => '+=' + getScroll(), scrub: 0.6 },
    });
  });
}

// ---------- essay hover preview ----------
const essays = document.querySelector('[data-essays]');
const preview = document.querySelector('.essay-preview');
if (essays && preview && !isTouch) {
  const img = preview.querySelector('img');
  const srcs = [
    '/img/cover-notes.png',
    '/img/cover-sites.png',
    '/img/cover-game.png',
  ];
  const setX = gsap.quickTo(preview, 'x', { duration: 0.45, ease: 'power3' });
  const setY = gsap.quickTo(preview, 'y', { duration: 0.45, ease: 'power3' });
  let shown = false;
  essays.addEventListener('pointermove', (e) => {
    setX(e.clientX + 24); setY(e.clientY - 120);
  });
  essays.querySelectorAll('.essay').forEach((row, i) => {
    row.addEventListener('mouseenter', () => {
      img.src = srcs[i % srcs.length];
      if (!shown) { gsap.to(preview, { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' }); shown = true; }
    });
  });
  essays.addEventListener('mouseleave', () => {
    gsap.to(preview, { opacity: 0, scale: 0.96, duration: 0.3, ease: 'power2.in' });
    shown = false;
  });
  gsap.set(preview, { scale: 0.96 });
}

// ---------- custom cursor ----------
if (!isTouch) {
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  cursor.innerHTML = '<span class="cursor-dot"></span><span class="cursor-ring"></span>';
  document.body.appendChild(cursor);
  const dot = cursor.querySelector('.cursor-dot');
  const ring = cursor.querySelector('.cursor-ring');
  const dx = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power2' });
  const dy = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power2' });
  const rx = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3' });
  const ry = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3' });
  window.addEventListener('pointermove', (e) => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); }, { passive: true });
  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-link'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-link'));
  });
  window.addEventListener('pointerdown', () => cursor.classList.add('is-hold'));
  window.addEventListener('pointerup', () => cursor.classList.remove('is-hold'));
}

// ---------- magnetic elements ----------
if (!isTouch && !reduced) {
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const strength = 0.35;
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - r.left - r.width / 2;
      const my = e.clientY - r.top - r.height / 2;
      gsap.to(el, { x: mx * strength, y: my * strength, duration: 0.4, ease: 'power3.out' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

// ---------- progress bar ----------
const bar = document.querySelector('.progress span');
ScrollTrigger.create({
  start: 0, end: 'max',
  onUpdate: (self) => gsap.set(bar, { scaleX: self.progress }),
});

// ---------- loader ----------
let loaderStarted = false;
function startLoader() {
  if (loaderStarted) return;
  loaderStarted = true;
  const loader = document.querySelector('.loader');
  const count = document.querySelector('.loader-count');
  const obj = { n: 0 };
  const tl = gsap.timeline();
  tl.to(obj, {
    n: 100, duration: reduced ? 0.2 : 1.3, ease: 'power2.inOut',
    onUpdate: () => { count.textContent = String(Math.round(obj.n)).padStart(3, '0'); },
  });
  if (!reduced) {
    tl.to(loader.querySelector('.loader-inner'), { y: -40, opacity: 0, duration: 0.5, ease: 'power2.in' }, '+=0.15');
  }
  tl.to(loader, { yPercent: -100, duration: reduced ? 0.2 : 0.9, ease: 'power4.inOut' });
  tl.set(loader, { display: 'none' });
  // hero entrance
  tl.fromTo('.hero-sub, .hero-hint, .hero-foot',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out' }, '-=0.5');
  tl.call(() => {
    if (ink) {
      ink.reveal();
      gsap.to(inkState, { assemble: 1, duration: 2.0, ease: 'power2.inOut' });
    }
  }, null, 0.1);
}
ScrollTrigger.refresh();
