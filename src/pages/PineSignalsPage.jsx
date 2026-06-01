import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const FEATURES = [
  {
    title: 'Server-Side Execution',
    desc: 'Run your Pine Script strategies on our servers. No need to keep TradingView open or your computer running.',
  },
  {
    title: 'Multi-Timeframe',
    desc: 'Analyze signals across different timeframes simultaneously for more robust trade decisions.',
  },
  {
    title: 'Backtesting Engine',
    desc: 'Test strategies against historical data with detailed performance reports before going live.',
  },
  {
    title: 'Strategy Optimization',
    desc: 'Automatically find optimal parameters for your strategies using genetic algorithm optimization.',
  },
];

export default function PineSignalsPage() {
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

    const els = sectionRef.current?.querySelectorAll('.scroll-reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section pb-32" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16 scroll-reveal">
          <div className="section-label mx-auto mb-5 w-fit">Pine Signal Runner</div>
          <h2 className="section-title">Run Pine Scripts Server-Side</h2>
          <p className="section-subtitle mx-auto mt-4">
            Execute and manage your TradingView strategies without keeping a browser tab open.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Link to="/pricing" className="neumo-btn-primary !rounded-2xl !px-6 !py-3 !text-sm font-display font-bold">
              Get Started
            </Link>
            <a href="#features" className="neumo-btn !rounded-2xl !px-6 !py-3 !text-sm font-display font-bold"
              style={{ background: 'var(--bg-primary)' }}>
              Learn More
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className="neumo-card p-8 md:p-10 scroll-reveal"
              style={{
                animationDelay: `${i * 100}ms`,
                background: 'var(--bg-primary)',
              }}
            >
              <div
                className="neumo-inset-deep w-12 h-12 flex items-center justify-center mb-5"
                style={{
                  background: 'var(--bg-primary)',
                  color: 'var(--accent)',
                  borderRadius: 16,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{feat.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
