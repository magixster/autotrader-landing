import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:5173';

const NAV_ITEMS = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Products', href: '/#products' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Performance', href: '/performance' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Track scroll position
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', mobileOpen);
    return () => document.body.classList.remove('mobile-nav-open');
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      style={{
        background: scrolled ? 'var(--bg-primary)' : 'transparent',
        boxShadow: scrolled
          ? '0 4px 6px rgb(163,177,198,0.15), 0 -2px 4px rgba(255,255,255,0.3)'
          : 'none',
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
      }}
      className="fixed top-0 left-0 right-0 z-50 h-[var(--navbar-height)]"
    >
      <div className="container flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="font-display text-xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          AutoTrader
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={handleNavClick}
              className="font-body text-sm font-medium px-4 py-2 rounded-2xl transition-all duration-300"
              style={{
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.background = 'var(--bg-secondary)';
                e.currentTarget.style.boxShadow =
                  'inset 3px 3px 6px rgb(163,177,198,0.4), inset -3px -3px 6px rgba(255,255,255,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right group: Theme toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* Login */}
          <a
            href={DASHBOARD_URL}
            className="hidden md:inline-flex neumo-btn-secondary !rounded-2xl !text-sm !px-4 !py-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign In
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="neumo-btn !p-3 !rounded-2xl !min-w-[44px] !min-h-[44px] !justify-center"
            style={{ background: 'var(--bg-primary)' }}
          >
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="20.22" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* CTA button - desktop only */}
          <Link
            to="/pricing"
            className="hidden md:inline-flex neumo-btn-primary !rounded-2xl !text-sm !px-5 !py-2.5"
          >
            Get Started
          </Link>

          {/* Hamburger - mobile only */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden neumo-btn !p-3 !rounded-2xl !min-w-[44px] !min-h-[44px] !justify-center"
            style={{ background: 'var(--bg-primary)' }}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown nav */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          top: 'var(--navbar-height)',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 40,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.2)',
            opacity: mobileOpen ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Menu panel */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            right: 12,
            background: 'var(--bg-primary)',
            borderRadius: 32,
            padding: 24,
            boxShadow: mobileOpen
              ? '12px 12px 24px rgb(163,177,198,0.7), -12px -12px 24px rgba(255,255,255,0.6)'
              : '4px 4px 8px rgb(163,177,198,0.3), -4px -4px 8px rgba(255,255,255,0.2)',
            transform: mobileOpen ? 'translateY(0)' : 'translateY(-16px)',
            opacity: mobileOpen ? 1 : 0,
            transition: 'all 0.3s ease-out',
          }}
        >
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={handleNavClick}
                className="neumo-card !rounded-2xl !px-4 !py-3 text-sm font-medium"
                style={{
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  boxShadow:
                    '5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="neumo-btn-secondary !rounded-2xl !text-sm !text-center !justify-center !py-3"
              style={{ textDecoration: 'none' }}
              onClick={handleNavClick}
            >
              Sign In
            </a>
            <Link
              to="/pricing"
              onClick={handleNavClick}
              className="neumo-btn-primary !rounded-2xl !text-sm !text-center !justify-center !py-3 mt-2"
              style={{ textDecoration: 'none' }}
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
