import { useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Platforms from './components/Platforms';
import PricingTable from './components/PricingTable';
import PerformanceResults from './components/PerformanceResults';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

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
      <Navbar />
      <Ticker />
      <div className="pt-[calc(var(--navbar-height)+36px)]">
        <Hero />
        <Features />
        <HowItWorks />
        <Platforms />
        <PerformanceResults />
        <PricingTable />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
