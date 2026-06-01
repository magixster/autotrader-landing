import { useEffect, useRef } from 'react';

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: 'Multi-Platform Execution',
    desc: 'Deploy the same TradingView strategy to both MT5 (forex) and Tradovate (futures) accounts simultaneously.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Risk Management',
    desc: 'Set per-trade and per-account risk limits. Automatic lot sizing, max drawdown protection, and daily loss limits.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Real-Time P&amp;L Tracking',
    desc: 'Monitor open positions, equity curves, and trade history with live snapshots updated every 5 seconds.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 13 14 20 7" />
        <polyline points="14 7 20 7 20 13" />
      </svg>
    ),
    title: 'Performance Analytics',
    desc: 'Detailed trade logs, win/loss ratios, drawdown analysis, and performance metrics across all your accounts.',
  },
];

export default function Features() {
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
    <section id="features" className="section" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16 scroll-reveal">
          <div className="section-label mx-auto mb-5 w-fit">Features</div>
          <h2 className="section-title">Built for Serious Traders</h2>
          <p className="section-subtitle mx-auto mt-4">
            Everything you need to automate your multi-account trading operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="neumo-card p-8 md:p-10 scroll-reveal"
              style={{
                animationDelay: `${i * 100}ms`,
                background: 'var(--bg-primary)',
              }}
            >
              {/* Icon well (inset) */}
              <div
                className="neumo-inset-deep w-14 h-14 flex items-center justify-center mb-5"
                style={{
                  background: 'var(--bg-primary)',
                  color: 'var(--accent)',
                }}
              >
                {feature.icon}
              </div>

              <h3
                className="font-display font-bold text-lg mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
