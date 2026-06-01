import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    title: 'AutoTrader Core',
    desc: 'The full automation engine. Connects TradingView webhooks to MT5 and Tradovate with real-time execution and risk management.',
    features: ['Multi-account execution', 'Real-time P&amp;L tracking', 'Risk management', 'Docker deployment'],
    href: '/pricing',
  },
  {
    title: 'Pine Signal Runner',
    desc: 'Run TradingView Pine Script strategies server-side without keeping a browser open. Backtest and forward-test simultaneously.',
    features: ['Server-side execution', 'Multi-timeframe support', 'Historical backtesting', 'Strategy optimization'],
    href: '/pinesignals',
  },
];

export default function Products() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="section" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16 scroll-reveal">
          <div className="section-label mx-auto mb-5 w-fit">Products</div>
          <h2 className="section-title">Choose Your Tool</h2>
          <p className="section-subtitle mx-auto mt-4">
            Two powerful products, one unified ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.title}
              className="neumo-card p-8 md:p-10 scroll-reveal flex flex-col"
              style={{
                animationDelay: `${i * 150}ms`,
                background: 'var(--bg-primary)',
              }}
            >
              <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'var(--text-primary)' }}>
                {product.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {product.desc}
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {product.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: 'var(--accent-teal)', flexShrink: 0 }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span dangerouslySetInnerHTML={{ __html: feat }} />
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link
                  to={product.href}
                  className="neumo-btn !rounded-2xl !text-sm !px-5 !py-2.5"
                  style={{ background: 'var(--bg-primary)' }}
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
