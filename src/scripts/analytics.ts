/**
 * Módulo de medición analítica y CRO para Fontanería Alzira
 * Diseñado conforme a directrices de privacidad y preparado para Google Analytics 4, Tag Manager o Plausible.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function initAnalytics(): void {
  // Rastrear clics hacia WhatsApp
  const whatsappElements = document.querySelectorAll('a[href*="wa.me"]');
  whatsappElements.forEach((el) => {
    el.addEventListener('click', () => {
      const location = el.getAttribute('data-analytics-location') || 'unknown';
      trackEvent('contact_whatsapp', {
        event_category: 'conversion',
        event_label: location
      });
    });
  });

  // Rastrear llamadas telefónicas directas
  const phoneElements = document.querySelectorAll('a[href^="tel:"]');
  phoneElements.forEach((el) => {
    el.addEventListener('click', () => {
      const location = el.getAttribute('data-analytics-location') || 'unknown';
      trackEvent('contact_phone_call', {
        event_category: 'conversion',
        event_label: location
      });
    });
  });

  // Rastrear envíos de formulario
  const contactForm = document.querySelector('#contact-form');
  contactForm?.addEventListener('submit', () => {
    trackEvent('lead_form_submitted', {
      event_category: 'conversion',
      event_label: 'footer_contact_form'
    });
  });
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  console.info(`[Analytics Event] ${eventName}:`, params);
  
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}
