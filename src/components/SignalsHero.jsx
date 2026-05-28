import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SIGNAL_HERO_STATS } from '../data/signalsHero';

export default function SignalsHero() {
  return (
    <section
      id="signals-hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background layers */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, var(--bg-primary) 30%, transparent 60%), linear-gradient(to top, var(--bg-primary) 0%, transparent 40%)',
      }} />
      <div className="grid-bg absolute inset-0" />

      {/* Gradient orbs */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.08), transparent)',
          top: -200,
          right: -200,
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.05), transparent)',
          bottom: '10%',
          left: -150,
          filter: 'blur(60px)',
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, var(--bg-primary), transparent)',
        }}
      />

      <div className="container relative z-10 w-full">
        <div className="max-w-[720px] pt-8 lg:pt-12">
          {/* Eyebrow badge */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-6"
              style={{
                color: '#4facfe',
                border: '1px solid rgba(79, 172, 254, 0.3)',
                background: 'rgba(79, 172, 254, 0.08)',
                fontFamily: 'var(--font-display)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#4facfe' }}
              />
              Monthly Signal Subscription
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="animate-fade-in-up text-[clamp(2.2rem,6vw,4rem)] font-black leading-[0.92] tracking-[-0.04em] mb-6"
            style={{ animationDelay: '0.15s', fontFamily: "'Inter', sans-serif" }}
          >
            Trade the Same Signals Our{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(135deg, #4facfe, #2563eb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Algorithm
            </span>{' '}
            Trades<span style={{ color: '#4facfe' }}>.</span>
          </h1>

          {/* Description */}
          <p
            className="animate-fade-in-up text-[clamp(0.875rem,1.5vw,1rem)] max-w-[560px] mb-8 leading-relaxed"
            style={{ color: 'var(--text-secondary)', animationDelay: '0.2s' }}
          >
            Every signal from our production Pine Script strategies — delivered to your{' '}
            <strong style={{ color: '#4facfe' }}>Telegram</strong> and{' '}
            <strong style={{ color: '#4facfe' }}>email</strong> before the order hits the market.
            Entry price, stop loss, take profit levels and trade rationale included.
            <strong style={{ color: 'var(--text-primary)' }}> No setup, no config, no code.</strong>
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up flex flex-wrap gap-4" style={{ animationDelay: '0.25s' }}>
            <Link
              to="/pine-signals#pricing"
              className="btn !rounded-full !px-7 !py-3.5 !text-sm !font-extrabold uppercase tracking-wider gap-3"
              style={{
                background: 'linear-gradient(135deg, #4facfe, #2563eb)',
                color: '#fff',
                boxShadow: '0 4px 24px rgba(79, 172, 254, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(79, 172, 254, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(79, 172, 254, 0.3)';
              }}
            >
              View Plans
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
            <Link
              to="/"
              className="btn !rounded-full !px-7 !py-3.5 !text-sm !font-semibold gap-2"
              style={{
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-card)';
                e.currentTarget.style.borderColor = 'var(--text-muted)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              Learn About AutoTrader
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up flex flex-wrap gap-x-10 gap-y-3 mt-14" style={{ animationDelay: '0.35s' }}>
            {SIGNAL_HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-xl md:text-2xl font-black tracking-tight" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
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
