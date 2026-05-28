/**
 * Get the fixed navbar height from CSS custom property.
 * Falls back to 72px if the property isn't set.
 */
export function getNavbarHeight() {
  return (
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'),
    ) || 72
  );
}

/**
 * Scroll to an element with an offset for the fixed navbar.
 * Retries up to `maxAttempts` times at `interval` ms if the element isn't found.
 */
export function scrollToElement(id, { maxAttempts = 10, interval = 100, delay = 0 } = {}) {
  const tryScroll = (attempts = 0) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - getNavbarHeight();
      window.scrollTo({ top, behavior: 'smooth' });
    } else if (attempts < maxAttempts) {
      setTimeout(() => tryScroll(attempts + 1), interval);
    }
  };

  if (delay > 0) {
    setTimeout(() => tryScroll(), delay);
  } else {
    tryScroll();
  }
}
