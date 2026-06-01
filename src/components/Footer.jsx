import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Products', href: '/#products' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Performance', href: '/performance' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 md:py-20" style={{ background: 'var(--bg-secondary)' }}>
      {/* Separator line using neumorphic inset */}
      <div
        className="absolute top-0 left-8 right-8"
        style={{
          height: 1,
          background: 'var(--bg-secondary)',
          boxShadow: '0 1px 0 rgba(255,255,255,0.5), 0 -1px 0 rgb(163,177,198,0.4)',
        }}
      />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              AutoTrader
            </Link>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Automate your trading across Forex &amp; Futures with multi-platform execution, risk management, and real-time P&amp;L tracking.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:support@autotrader.app"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  support@autotrader.app
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            &copy; {currentYear} AutoTrader. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs transition-colors" style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              Privacy Policy
            </a>
            <a href="#" className="text-xs transition-colors" style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
