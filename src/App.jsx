import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { scrollToElement } from './utils/scrollTo';
import HomePage from './pages/HomePage';
import PerformancePage from './pages/PerformancePage';
import PricingPage from './pages/PricingPage';
import PineSignalsPage from './pages/PineSignalsPage';
import NotFoundPage from './pages/NotFoundPage';
import StructuredData from './components/StructuredData';
import Analytics from './components/Analytics';

/* ── Page Transition Wrapper ── */
function PageTransition({ children }) {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Skip animation for users who prefer reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    setVisible(false);
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [location.pathname]);

  // Handle hash links (e.g. /pine-signals#pricing)
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace('#', '');
    // Wait for page transition animation to complete, then scroll
    scrollToElement(id, { delay: 450 });
  }, [location.pathname, location.hash]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const { isDark } = useTheme();

  // Handle GitHub Pages 404 redirect
  useEffect(() => {
    const stored = sessionStorage.getItem('autotrader_redirect');
    if (stored) {
      sessionStorage.removeItem('autotrader_redirect');
      const hashMatch = stored.match(/#(\w[\w-]*)/);
      const pathMatch = stored.match(/\/(\w[\w-]*)/);
      const target = hashMatch ? hashMatch[1] : (pathMatch ? pathMatch[1] : null);
      if (target) {
        scrollToElement(target, { delay: 300 });
      }
    }
  }, []);

  // Smooth theme transition on toggle
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('theme-transition');
    const timeout = setTimeout(() => html.classList.remove('theme-transition'), 400);
    return () => clearTimeout(timeout);
  }, [isDark]);

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
      }}
    >
      <Analytics />
      <StructuredData />
      <Routes>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/performance" element={<PageTransition><PerformancePage /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><PricingPage /></PageTransition>} />
        <Route path="/pine-signals" element={<PageTransition><PineSignalsPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
      </Routes>
    </div>
  );
}
