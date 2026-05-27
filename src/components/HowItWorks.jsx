import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const STEPS = [
  {
    num: '01',
    title: 'Pine Script Strategy',
    subtitle: 'TradingView',
    description: 'Your MA bounce or trend alignment strategy runs on TradingView. It calculates ATR-based SL/TP, detects setups, and sends JSON webhook alerts.',
    color: '#5ed29c',
  },
  {
    num: '02',
    title: 'Webhook Bridge',
    subtitle: 'Flask API',
    description: 'The Flask webhook ingests alerts, validates payloads, deduplicates signals, and stores them in SQLite with status tracking and metadata.',
    color: '#4facfe',
  },
  {
    num: '03',
    title: 'Signal Router',
    subtitle: 'SQLite DB',
    description: 'Signals are categorized by event type (setup, market, entry_dual, cancel, runner_exit) and platform (mt5, tradovate). Watchers pick up armed signals.',
    color: '#f59e0b',
  },
  {
    num: '04',
    title: 'Multi-Platform Watchers',
    subtitle: 'MT5 + Tradovate',
    description: 'Dedicated watchers for each platform. MT5 uses the MetaTrader5 terminal API. Tradovate uses REST API with 3-strategy contract resolution and bracket orders.',
    color: '#ef4444',
  },
  {
    num: '05',
    title: 'Position & Risk Manager',
    subtitle: 'Real-Time',
    description: 'Positions are recorded, SL/TP are placed as brackets or pending orders. Risk is calculated per-trade. Runners are managed and breakeven moves executed.',
    color: '#8b5cf6',
  },
  {
    num: '06',
    title: 'P&L Sync & Notifications',
    subtitle: 'Telegram',
    description: 'Closed positions are synced via fill/deal history. Telegram alerts fire on execution, closures, cancellations, and breakeven moves. All P&L is tracked per-position.',
    color: '#06b6d4',
  },
];

function StepCard({ step, index }) {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.15, staggerDelay: 120, index });
  const isRight = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="how-it-works-row relative flex flex-col md:flex-row items-center gap-8 md:gap-12"
      style={{
        flexDirection: isRight ? 'md:row-reverse' : 'md:row',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : `translateX(${isRight ? '30px' : '-30px'})`,
        transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Step number */}
      <div
        className="flex-shrink-0 relative flex items-center justify-center"
        style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
          border: `2px solid ${step.color}30`,
          fontSize: '1.35rem',
          fontWeight: 800,
          color: step.color,
          fontFamily: 'var(--font-mono)',
        }}
      >
        {step.num}
        <div
          className="absolute animate-spin-slow"
          style={{
            inset: -4,
            borderRadius: '50%',
            border: `1px solid ${step.color}15`,
          }}
        />
      </div>

      {/* Content */}
      <div
        className="flex-1 rounded-2xl p-7 md:p-8"
        style={{
          background: 'var(--bg-card)',
          border: `1px solid ${step.color}15`,
          borderLeft: `3px solid ${step.color}`,
        }}
      >
        <div
          className="text-[11px] font-bold tracking-[0.15em] uppercase mb-1.5"
          style={{ color: step.color, fontFamily: 'var(--font-display)' }}
        >
          {step.subtitle}
        </div>
        <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="section relative overflow-hidden">
      <div
        className="glow pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.06), transparent)',
          top: '20%',
          right: -200,
          filter: 'blur(80px)',
        }}
      />

      <div className="container" ref={ref}>
        <div className="text-center mb-20">
          <span
            className="section-label"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.5s ease',
            }}
          >
            Architecture
          </span>
          <h2
            className="section-title"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.5s ease 0.1s',
            }}
          >
            How It Works
          </h2>
          <p
            className="section-subtitle mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.5s ease 0.2s',
            }}
          >
            From TradingView alert to filled order — the complete flow through the automation pipeline.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical connecting line (hidden on mobile) */}
          <div
            className="hidden md:block absolute top-0 bottom-0 left-[36px] md:left-1/2"
            style={{
              width: 2,
              background: 'linear-gradient(180deg, #5ed29c, #4facfe, #f59e0b, #ef4444, #8b5cf6, #06b6d4)',
              transform: 'translateX(-50%)',
              opacity: 0.15,
            }}
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {STEPS.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
