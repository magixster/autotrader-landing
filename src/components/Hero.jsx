import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20">
      {/* Decorative neumorphic circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px]" aria-hidden="true">
        {/* Outer extruded ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'var(--bg-primary)',
            boxShadow: '12px 12px 24px rgb(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5)',
          }}
        />
        {/* Middle inset ring */}
        <div
          className="absolute inset-[50px] rounded-full"
          style={{
            background: 'var(--bg-primary)',
            boxShadow: 'inset 8px 8px 16px rgb(163,177,198,0.6), inset -8px -8px 16px rgba(255,255,255,0.5)',
          }}
        />
        {/* Inner extruded dot */}
        <div
          className="absolute inset-[110px] rounded-full animate-float"
          style={{
            background: 'var(--bg-primary)',
            boxShadow: '6px 6px 12px rgb(163,177,198,0.5), -6px -6px 12px rgba(255,255,255,0.4)',
          }}
        >
          {/* Accent center */}
          <div
            className="absolute inset-[20px] rounded-full"
            style={{
              background: 'var(--accent)',
              boxShadow: '0 0 30px color-mix(in srgb, var(--accent) 40%, transparent)',
            }}
          />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label tag */}
          <div className="section-label mx-auto mb-6 w-fit">Multi-Platform Trading Automation</div>

          {/* Headline */}
          <h1 className="section-title text-5xl md:text-6xl lg:text-7xl">
            Trade Across{' '}
            <span style={{ color: 'var(--accent)' }}>Forex &amp; Futures</span>
            <br />
            On Autopilot
          </h1>

          {/* Subtitle */}
          <p className="section-subtitle mx-auto mt-5 text-base md:text-lg">
            Connect TradingView Pine Script signals to MT5 and Tradovate. Execute trades
            across multiple accounts with built-in risk management and real-time P&amp;L tracking.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              to="/pricing"
              className="neumo-btn-primary !rounded-2xl !px-8 !py-3.5 !text-base font-display font-bold"
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a
              href="#features"
              className="neumo-btn !rounded-2xl !px-8 !py-3.5 !text-base font-display font-bold"
              style={{ background: 'var(--bg-primary)' }}
            >
              Learn More
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-16">
            {[
              { value: '$2M+', label: 'Volume Traded' },
              { value: '99.9%', label: 'Uptime' },
              { value: '50+', label: 'Accounts' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="neumo-inset !rounded-2xl px-5 py-3 min-w-[120px]"
                style={{ background: 'var(--bg-primary)' }}
              >
                <div className="font-display font-extrabold text-xl" style={{ color: 'var(--accent)' }}>
                  {stat.value}
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
