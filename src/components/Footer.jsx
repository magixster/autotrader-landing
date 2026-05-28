import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { FOOTER_CTA, FOOTER_LINKS } from '../data/footer';

export default function Footer() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <footer
      id="get-started"
      className="relative overflow-hidden border-t"
      style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}
    >
      {/* CTA Section */}
      <div className="container py-20 md:py-24 text-center" ref={ref}>
        <div
          className="max-w-[640px] mx-auto p-10 md:p-12 rounded-3xl relative overflow-hidden"
          style={{
            border: '1px solid var(--border-accent)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Decorative glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              background: 'radial-gradient(circle, rgba(94,210,156,0.07), transparent)',
              filter: 'blur(60px)',
            }}
          />

          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 relative" style={{ color: 'var(--text-primary)' }}>
            {FOOTER_CTA.headline}
          </h2>
          <p className="text-base md:text-lg mb-8 relative" style={{ color: 'var(--text-secondary)' }}>
            {FOOTER_CTA.description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center relative">
            <a
              href={FOOTER_CTA.primaryBtn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn !rounded-full !px-7 !py-3.5 !text-sm !font-bold gap-2"
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              {FOOTER_CTA.primaryBtn.label}
            </a>
            <a
              href={FOOTER_CTA.secondaryBtn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn !rounded-full !px-7 !py-3.5 !text-sm !font-semibold"
              style={{
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              {FOOTER_CTA.secondaryBtn.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container pb-8 pt-0">
        <div
          className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <div className="flex items-center gap-2">
            <div
              className="flex items-center justify-center w-6 h-6 rounded-md text-xs font-extrabold"
              style={{ background: 'var(--gradient-primary)', color: '#070b0a' }}
            >
              A
            </div>
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
              AutoTrader &copy; {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex gap-6 text-sm">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
