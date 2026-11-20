/**
 * Acordeón accesible para FAQs según estándares WAI-ARIA
 */

export function initAccordion(): void {
  const accordionItems = document.querySelectorAll<HTMLElement>('.accordion-item');

  accordionItems.forEach((item) => {
    const trigger = item.querySelector<HTMLButtonElement>('.accordion-trigger');
    const content = item.querySelector<HTMLElement>('.accordion-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close other items if desired, or allow multiple open
      // Here we allow standard toggle
      if (isOpen) {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard support for Enter and Space
    trigger.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        trigger.click();
      }
    });
  });
}
