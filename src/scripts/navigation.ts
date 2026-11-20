/**
 * Navegación, Header Sticky y Menú Móvil Accesible
 */

export function initNavigation(): void {
  const header = document.querySelector<HTMLElement>('.site-header');
  const toggleBtn = document.querySelector<HTMLButtonElement>('.btn-mobile-toggle');
  const drawer = document.querySelector<HTMLElement>('.mobile-drawer');
  const drawerCloseBtn = document.querySelector<HTMLButtonElement>('.btn-drawer-close');
  const drawerLinks = document.querySelectorAll<HTMLAnchorElement>('.drawer-nav a');
  const progressBar = document.querySelector<HTMLElement>('.reading-progress-bar');

  // Sticky header scroll listener
  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    // Reading progress bar
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = (scrollY / docHeight) * 100;
        progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Drawer Open / Close
  const openDrawer = () => {
    if (!drawer) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    toggleBtn?.setAttribute('aria-expanded', 'true');
    drawerCloseBtn?.focus();
  };

  const closeDrawer = () => {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    toggleBtn?.setAttribute('aria-expanded', 'false');
    toggleBtn?.focus();
  };

  toggleBtn?.addEventListener('click', openDrawer);
  drawerCloseBtn?.addEventListener('click', closeDrawer);

  // Close drawer on link click
  drawerLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // Close drawer on clicking outside overlay
  drawer?.addEventListener('click', (e) => {
    if (e.target === drawer) {
      closeDrawer();
    }
  });

  // Close drawer on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}
