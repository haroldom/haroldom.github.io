import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

let lenisInstance: Lenis | undefined;

/** Shared Lenis instance (undefined when reduced motion is on). */
export function getLenis(): Lenis | undefined {
  return lenisInstance;
}

export const reducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

/* ------------------------------------------------
   Ready registry — section scripts call onReady()
   and run after fonts are loaded and the engine is
   up, no matter the module evaluation order.
   ------------------------------------------------ */
type ReadyCb = () => void;
const readyCallbacks: ReadyCb[] = [];
let engineReady = false;

export function onReady(cb: ReadyCb) {
  if (engineReady) cb();
  else readyCallbacks.push(cb);
}

/* ------------------------------------------------
   Smooth scroll (Lenis) synced with ScrollTrigger
   ------------------------------------------------ */
function initLenis(): Lenis | undefined {
  if (reducedMotion) return undefined;

  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  lenisInstance = lenis;
  return lenis;
}

/* ------------------------------------------------
   Anchor navigation through Lenis
   ------------------------------------------------ */
function initAnchors(lenis?: Lenis) {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { duration: 1.6 });
      } else {
        target.scrollIntoView();
      }
    });
  });
}

/* ------------------------------------------------
   Generic reveals
   [data-reveal]        -> fade + rise when entering viewport
   [data-split="lines"] -> SplitText line mask reveal
   [data-split="words"] -> word-by-word opacity scrub on scroll
   ------------------------------------------------ */
function initReveals() {
  if (reducedMotion) {
    gsap.set('[data-reveal]', { opacity: 1 });
    return;
  }

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay ?? '0');
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      }
    );
  });

  document.querySelectorAll<HTMLElement>('[data-split="lines"]').forEach((el) => {
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.4,
          stagger: 0.09,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        });
      },
    });
  });

  document.querySelectorAll<HTMLElement>('[data-split="words"]').forEach((el) => {
    SplitText.create(el, {
      type: 'words',
      autoSplit: true,
      onSplit(self) {
        return gsap.fromTo(
          self.words,
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.06,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 78%',
              end: 'bottom 45%',
              scrub: 0.6,
            },
          }
        );
      },
    });
  });
}

/* ------------------------------------------------
   Micro-interactions
   [data-magnetic]  -> element is pulled toward the cursor
   [data-parallax]  -> inner img drifts vertically with scroll
   ------------------------------------------------ */
function initMagnetic() {
  if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic || '') || 0.35;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.45, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.45, ease: 'power3.out' });

    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * strength);
      yTo((e.clientY - (r.top + r.height / 2)) * strength);
    });
    el.addEventListener('pointerleave', () => {
      xTo(0);
      yTo(0);
    });
  });
}

function initParallax() {
  if (reducedMotion) return;

  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const img = el.querySelector('img, video');
    if (!img) return;
    gsap.fromTo(
      img,
      { yPercent: -7, scale: 1.15 },
      {
        yPercent: 7,
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });
}

/* ------------------------------------------------
   Custom cursor — lerped dot + trailing ring in
   difference blend; the ring grows over anything
   interactive (a, button, [data-cursor])
   ------------------------------------------------ */
function initCursor() {
  if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.append(ring, dot);
  document.documentElement.classList.add('has-cursor');

  const dotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power2.out' });
  const dotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power2.out' });
  const ringX = gsap.quickTo(ring, 'x', { duration: 0.42, ease: 'power3.out' });
  const ringY = gsap.quickTo(ring, 'y', { duration: 0.42, ease: 'power3.out' });

  let seen = false;

  window.addEventListener(
    'pointermove',
    (e) => {
      if (!seen) {
        seen = true;
        gsap.set([dot, ring], { x: e.clientX, y: e.clientY, opacity: 1 });
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    },
    { passive: true }
  );

  document.addEventListener('pointerover', (e) => {
    const interactive = (e.target as Element).closest?.(
      'a, button, [data-cursor]'
    );
    dot.classList.toggle('is-active', !!interactive);
    ring.classList.toggle('is-active', !!interactive);
  });

  document.documentElement.addEventListener('pointerleave', () => {
    gsap.to([dot, ring], { opacity: 0, duration: 0.25 });
  });
  document.documentElement.addEventListener('pointerenter', () => {
    gsap.to([dot, ring], { opacity: 1, duration: 0.25 });
  });
}

/* ------------------------------------------------
   Boot — wait for fonts so SplitText measures right
   ------------------------------------------------ */
async function boot() {
  const lenis = initLenis();
  initAnchors(lenis);

  try {
    await document.fonts.ready;
  } catch {
    /* fonts API unavailable — proceed anyway */
  }

  initReveals();
  initMagnetic();
  initParallax();
  initCursor();

  engineReady = true;
  readyCallbacks.forEach((cb) => cb());
  readyCallbacks.length = 0;

  ScrollTrigger.refresh();
}

boot();

export { gsap, ScrollTrigger, SplitText };
