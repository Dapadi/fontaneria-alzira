import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initGallery(): void {
  // 1. Horizontal Scroll for Desktop Gallery
  const wrapper = document.querySelector<HTMLElement>('.gallery-section-wrapper');
  const scrollContainer = document.querySelector<HTMLElement>('.horizontal-scroll-container');

  if (wrapper && scrollContainer) {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth >= 1024;

    if (!isReducedMotion && isDesktop) {
      const getScrollAmount = () => {
        return -(scrollContainer.scrollWidth - window.innerWidth + 80);
      };

      const horizontalTween = gsap.to(scrollContainer, {
        x: getScrollAmount,
        ease: 'none'
      });

      ScrollTrigger.create({
        trigger: wrapper,
        start: 'top top',
        end: () => `+=${scrollContainer.scrollWidth - window.innerWidth + 300}`,
        pin: true,
        animation: horizontalTween,
        scrub: 1,
        invalidateOnRefresh: true
      });
    } else {
      // Mobile & tablet fallback: native smooth horizontal scroll
      scrollContainer.style.overflowX = 'auto';
      scrollContainer.style.paddingLeft = 'var(--container-padding)';
      scrollContainer.style.paddingRight = 'var(--container-padding)';
    }
  }

  // 2. Interactive Before & After Slider
  const sliderContainers = document.querySelectorAll<HTMLElement>('.before-after-container');

  sliderContainers.forEach((container) => {
    const overlay = container.querySelector<HTMLElement>('.before-after-overlay');
    const handle = container.querySelector<HTMLElement>('.before-after-handle');
    const rangeInput = container.querySelector<HTMLInputElement>('.before-after-slider-input');

    if (!overlay || !handle || !rangeInput) return;

    const setPosition = (percent: number) => {
      const clamped = Math.max(0, Math.min(100, percent));
      overlay.style.width = `${clamped}%`;
      handle.style.left = `${clamped}%`;
    };

    // Range input change
    rangeInput.addEventListener('input', (e) => {
      const val = parseFloat((e.target as HTMLInputElement).value);
      setPosition(val);
    });

    // Mouse / Touch drag on container
    let isDragging = false;

    const handleMove = (clientX: number) => {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      setPosition(percent);
      rangeInput.value = `${percent}`;
    };

    container.addEventListener('mousedown', () => { isDragging = true; });
    window.addEventListener('mouseup', () => { isDragging = false; });
    container.addEventListener('mousemove', (e) => {
      if (isDragging) handleMove(e.clientX);
    });

    // Touch events
    container.addEventListener('touchstart', () => { isDragging = true; }, { passive: true });
    window.addEventListener('touchend', () => { isDragging = false; });
    container.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    }, { passive: true });

    // Initial default 50%
    setPosition(50);
  });
}
