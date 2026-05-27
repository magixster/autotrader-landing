import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const FEATURES = [
  {
    icon: '🔄',
    title: 'Multi-Platform Execution',
    description: 'Deploy the same Pine Script strategy to both MT5 (forex) and Tradovate (futures) accounts simultaneously. One webhook, multiple destinations.',
    gradient: 'linear-gradient(135deg, #00d4aa, #059669)',
    color: '#00d4aa',
    stat: '7 assets across 3 classes · $846K combined',
  },
  {
    icon: '⚡',
    title: 'Pine Script Webhook Bridge',
    description: 'Flask-powered webhook that ingests TradingView alerts, stores them in SQLite, and triggers execution. Supports setup, market, entry_dual, runner_exit, cancel, and close events.',
    gradient: 'linear-gradient(135deg, #4facfe, #2563eb)',
    color: '#4facfe',
    stat: '672 trades executed · 0 manual interventions',
  },
  {
    icon: '📊',
    title: 'Dual Trade (Entry + Runner)',
    description: 'Split risk into two legs: Leg A with take-profit target, Leg B as a runner. Automatically move runner to breakeven when Leg A hits TP.',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    color: '#f59e0b',
    stat: 'Avg 1.9R/month · 293 total R\'s earned',
  },
  {
    icon: '🛡️',
    title: 'Risk-Based Position Sizing',
    description: 'Position size is automatically calculated so your max loss at the SL level = risk-per-trade % of account balance. Configurable per account and per symbol.',
    gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
    color: '#ef4444',
    stat: 'Avg max DD: −2.39% across all assets',
  },
  {
    icon: '🔗',
    title: 'Intelligent Contract Resolution',
    description: '3-strategy fallback system for futures: product/find → contract/find → contract/search. Supports prop firms like FundedNext and 5ers with per-account product map overrides.',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    color: '#8b5cf6',
    stat: 'Prop firm ready · Stays within 5-10% DD limits',
  },
  {
    icon: '🏢',
    title: 'Multi-Account Support',
    description: 'Trade multiple accounts simultaneously from a single TradingView signal. Each account has independent risk settings, product maps, and execution parameters.',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    color: '#06b6d4',
    stat: 'Scale ∞ accounts · Each with independent risk',
  },
  {
    icon: '🐳',
    title: 'Docker Deploy Ready',
    description: 'One-command Docker deployment with health checks, volume persistence, and env-file configuration. CI/CD pipeline validates builds, runs 226+ tests, and lints code.',
    gradient: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
    color: '#0ea5e9',
    stat: 'Runs 24/7 · Zero-downtime deployment',
  },
  {
    icon: '📱',
    title: 'Real-Time Telegram Alerts',
    description: 'Get instant notifications on trade execution, cancellations, runner closures, breakeven moves, and P&L updates. Configurable per event type.',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    color: '#10b981',
    stat: 'Every event logged · Full audit trail',
  },
  {
    icon: '📈',
    title: 'P&L Sync & Tracking',
    description: 'Automatically sync closed positions via fill history (Tradovate) or deal history (MT5). Track realized P&L, close reasons, and per-position performance.',
    gradient: 'linear-gradient(135deg, #f472b6, #db2777)',
    color: '#f472b6',
    stat: '672 trades tracked · Real P&L data',
  },
];

function FeatureCard({ feature, index }) {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1, staggerDelay: 80, index });

  return (
    <div
      ref={ref}
      className="card-hover rounded-2xl p-8 relative overflow-hidden cursor-default"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.4s ease, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-12 h-12 rounded-xl mb-5 text-xl"
        style={{ background: feature.gradient, boxShadow: `0 4px 16px ${feature.gradient.replace('linear-gradient', '')}20` }}
      >
        {feature.icon}
      </div>

      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
        {feature.title}
      </h3>

      <div
        className="mb-3 inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide"
        style={{
          background: `${feature.color}15`,
          color: feature.color,
        }}
      >
        {feature.stat}
      </div>

      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {feature.description}
      </p>
    </div>
  );
}

export default function Features() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section id="features" className="section relative overflow-hidden">
      <div
        className="glow pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(94,210,156,0.06), transparent)',
          top: '10%',
          left: -200,
          filter: 'blur(80px)',
        }}
      />

      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <span
            className="section-label"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease',
            }}
          >
            Capabilities
          </span>
          <h2
            className="section-title"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease 0.1s',
            }}
          >
            Everything You Need to Trade Automatically
          </h2>
          <p
            className="section-subtitle mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease 0.2s',
            }}
          >
            From Pine Script webhooks to multi-platform execution, risk management to P&amp;L tracking — a complete trading automation stack.
          </p>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
