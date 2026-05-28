import { useEffect } from 'react';

/**
 * Injects the Plausible analytics script.
 *
 * Configure via VITE_PLAUSIBLE_DOMAIN env variable.
 * Analytics only load in production builds.
 */
export default function Analytics() {
  useEffect(() => {
    // Only run in production
    if (!import.meta.env.PROD) return;

    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
    if (!domain) return;

    // Prevent duplicate injection in dev HMR
    if (document.querySelector('script[data-plausible]')) return;

    const script = document.createElement('script');
    script.setAttribute('data-plausible', '');
    script.defer = true;
    script.dataset.domain = domain;
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
  }, []);

  return null;
}
