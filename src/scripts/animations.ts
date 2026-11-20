import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations(): void {
  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduced-motion');
    // Reveal all elements immediately
    document.querySelectorAll('.reveal-fade').forEach((el) => el.classList.add('is-revealed'));
    document.querySelectorAll('.reveal-mask').forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  // 1. Lenis Smooth Scrolling
  let lenis: Lenis | null = null;
  try {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  } catch (err) {
    console.warn('Lenis could not be initialized:', err);
  }

  // 2. Hero Section Entrance Animation
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .fromTo(
      '.hero-content .badge-tag',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
    .fromTo(
      '.hero-title',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.4'
    )
    .fromTo(
      '.hero-content .lead',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.5'
    )
    .fromTo(
      '.hero-actions',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.4'
    )
    .fromTo(
      '.hero-trust-badges',
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.3'
    )
    .fromTo(
      '.hero-image-frame',
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
      '-=0.8'
    )
    .fromTo(
      '.hero-floating-card',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.4'
    );

  // 3. Section Headers & Headings Reveal
  const sectionHeaders = document.querySelectorAll('.section-header');
  sectionHeaders.forEach((header) => {
    gsap.fromTo(
      header,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // 4. Staggered Service Cards
  const serviceCards = document.querySelectorAll('.card-service');
  if (serviceCards.length > 0) {
    gsap.fromTo(
      serviceCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // 5. Staggered Values Cards
  const valueCards = document.querySelectorAll('.card-value');
  if (valueCards.length > 0) {
    gsap.fromTo(
      valueCards,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // 6. Process Timeline Scroll-Linked Animation
  const timelineProgress = document.querySelector<HTMLElement>('.process-timeline-progress');
  const timelineContainer = document.querySelector<HTMLElement>('.process-timeline');
  const stepItems = document.querySelectorAll('.process-step-item');

  if (timelineProgress && timelineContainer) {
    ScrollTrigger.create({
      trigger: timelineContainer,
      start: 'top 75%',
      end: 'bottom 75%',
      scrub: 0.5,
      onUpdate: (self) => {
        timelineProgress.style.height = `${self.progress * 100}%`;
        
        // Highlight active step based on progress
        const stepCount = stepItems.length;
        stepItems.forEach((item, index) => {
          const threshold = index / stepCount;
          if (self.progress >= threshold) {
            item.classList.add('is-active');
          } else {
            item.classList.remove('is-active');
          }
        });
      }
    });
  }

  // 7. Subtle Parallax on About Image
  const aboutImg = document.querySelector('.about-image-wrapper img');
  if (aboutImg) {
    gsap.fromTo(
      aboutImg,
      { y: -20 },
      {
        y: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-image-wrapper',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  }
}
