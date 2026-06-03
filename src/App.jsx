import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import PerformancePage from './pages/PerformancePage';
import PineSignalsPage from './pages/PineSignalsPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * GitHub Pages SPA redirect handler.
 * When GitHub Pages serves 404.html for unknown routes, it stores the
 * original path in sessionStorage. This component reads it on mount
 * and navigates to the correct route.
 */
function RedirectHandler({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.getItem('autotrader_redirect');
    if (redirect) {
      sessionStorage.removeItem('autotrader_redirect');
      // Parse the stored URL and preserve search params / hash
      const url = new URL(redirect, window.location.origin);
      const target = url.pathname.replace(/^\/autotrader-landing/, '') || '/';
      navigate(target + url.search + url.hash, { replace: true });
    }
  }, [navigate]);

  return children;
}

export default function App() {
  return (
    <BrowserRouter basename="/autotrader-landing">
      <ThemeProvider>
        <RedirectHandler>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="performance" element={<PerformancePage />} />
              <Route path="pinesignals" element={<PineSignalsPage />} />
              <Route path="404" element={<NotFoundPage />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Route>
          </Routes>
        </RedirectHandler>
      </ThemeProvider>
    </BrowserRouter>
  );
}
