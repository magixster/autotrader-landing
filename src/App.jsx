import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import PerformancePage from './pages/PerformancePage';
import PricingPage from './pages/PricingPage';
import PineSignalsPage from './pages/PineSignalsPage';

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
        setTimeout(() => {
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/performance" element={<PerformancePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/pine-signals" element={<PineSignalsPage />} />
      </Routes>
    </div>
  );
}
