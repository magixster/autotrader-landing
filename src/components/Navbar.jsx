import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/navbar';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = (sectionId) => {
    // Wait for DOM to render after navigation, then attempt scroll
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 100);
      }
    };
    tryScroll();
  };

  const handleNavClick = (item) => {
    setMobileOpen(false);

    if (item.route === '/pricing') {
      navigate('/pricing');
      return;
    }

    if (location.pathname === '/') {
      scrollToSection(item.section);
    } else {
      navigate('/');
      scrollToSection(item.section);
    }
  };

  const handleGetStarted = () => {
    setMobileOpen(false);
    if (location.pathname === '/') {
      scrollToSection('get-started');
    } else {
      navigate('/');
      scrollToSection('get-started');
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: 'var(--navbar-height)',
          background: scrolled ? 'var(--bg-primary)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="container h-full flex items-center justify-between">
          {/* Minimalist Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline group">
            <div
              className="flex items-center justify-center w-8 h-8 rounded-[8px] text-sm font-extrabold text-white transition-transform duration-300 group-hover:scale-105"
              style={{ background: 'var(--gradient-primary)' }}
            >
              A
            </div>
            <span className="text-base font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              <span style={{ color: 'var(--accent-primary)' }}>Auto</span>Trader
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-sm font-medium no-underline tracking-wide transition-all duration-200 relative py-1 cursor-pointer bg-transparent border-none"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-secondary)';
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 cursor-pointer"
              style={{
                color: 'var(--text-secondary)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-primary)';
                e.currentTarget.style.background = 'rgba(94, 210, 156, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'transparent';
              }}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              onClick={handleGetStarted}
              className="btn !rounded-full !px-6 !py-2.5 !text-sm !font-bold uppercase tracking-wider cursor-pointer"
              style={{
                background: 'var(--accent-primary)',
                color: '#070b0a',
                boxShadow: '0 4px 24px rgba(94, 210, 156, 0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(94, 210, 156, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(94, 210, 156, 0.25)';
              }}
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* Mobile: Theme + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-lg cursor-pointer transition-all duration-200"
              style={{ color: 'var(--text-secondary)', background: 'transparent' }}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-9 h-9 cursor-pointer transition-all duration-200 relative z-[100]"
              style={{ color: 'var(--text-primary)', background: 'transparent' }}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ease-in-out md:hidden ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{
          background: mobileOpen ? 'rgba(7, 11, 10, 0.97)' : 'rgba(7, 11, 10, 0)',
          backdropFilter: mobileOpen ? 'blur(30px)' : 'blur(0px)',
          WebkitBackdropFilter: mobileOpen ? 'blur(30px)' : 'blur(0px)',
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        {/* Close button at top-right of overlay */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer transition-all duration-200 z-10"
          style={{
            color: 'rgba(236, 239, 244, 0.9)',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.color = '#5ed29c';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.color = 'var(--text-primary)';
          }}
          aria-label="Close navigation menu"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col items-center justify-center h-full gap-10 px-6">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="text-2xl font-bold no-underline transition-all duration-300 bg-transparent border-none cursor-pointer"
              style={{
                color: mobileOpen ? 'var(--text-primary)' : 'transparent',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.4s ease ${0.1 + i * 0.05}s`,
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-primary)')}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={handleGetStarted}
            className="btn !rounded-full !px-8 !py-3.5 !text-sm !font-bold uppercase tracking-wider mt-4 cursor-pointer"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.4s ease 0.3s`,
              background: 'var(--accent-primary)',
              color: '#070b0a',
              boxShadow: '0 4px 24px rgba(94, 210, 156, 0.25)',
            }}
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          {/* Decorative glow in mobile menu */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 400,
              height: 400,
              background: 'radial-gradient(circle, rgba(94, 210, 156, 0.06), transparent)',
              bottom: -100,
              left: '50%',
              transform: 'translateX(-50%)',
              filter: 'blur(60px)',
            }}
          />
        </div>
      </div>
    </>
  );
}
