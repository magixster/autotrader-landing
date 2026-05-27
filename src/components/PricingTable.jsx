import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const PLANS = [
  {
    name: 'Starter',
    subtitle: 'For personal experimentation',
    price: 'Free',
    period: 'forever',
    gradient: 'linear-gradient(135deg, #64748b, #475569)',
    features: [
      'Single TradingView strategy',
      '1 MT5 demo account',
      '1 Tradovate demo account',
      'Basic webhook bridge',
      'Telegram notifications',
      'Community support (GitHub)',
    ],
    cta: 'Get Started',
    href: '#get-started',
    featured: false,
  },
  {
    name: 'Pro',
    subtitle: 'For serious retail traders',
    price: '$29',
    period: '/month',
    gradient: 'linear-gradient(135deg, #00d4aa, #3b82f6)',
    features: [
      'Unlimited strategies',
      'Up to 5 MT5 accounts (live + demo)',
      'Up to 5 Tradovate accounts',
      'Dual-leg entry & runner management',
      'Per-account risk & product overrides',
      'Prop firm support (FundedNext, 5ers)',
      'Breakeven automation',
      'Priority Discord support',
    ],
    cta: 'Start Free Trial',
    href: '#get-started',
    featured: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'For funds & teams',
    price: '$99',
    period: '/month',
    gradient: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    features: [
      'Everything in Pro',
      'Unlimited accounts (all platforms)',
      'Custom product map resolution',
      'Multi-strategy deployment',
      'Advanced P&L analytics dashboard',
      'White-label Telegram alerts',
      'Dedicated onboarding engineer',
      'SLA-backed uptime guarantee',
      'Custom integrations available',
    ],
    cta: 'Contact Sales',
    href: '#contact',
    featured: false,
  },
];

function PlanCard({ plan, index }) {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.15, staggerDelay: 100, index });

  return (
    <div
      ref={ref}
      className="card-hover rounded-2xl p-9 md:p-10 relative flex flex-col overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.5s ease, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Card background */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: plan.featured
            ? 'linear-gradient(135deg, rgba(0,212,170,0.06), rgba(59,130,246,0.04))'
            : 'var(--bg-card)',
          border: plan.featured ? '1px solid var(--border-accent)' : '1px solid var(--border-color)',
        }}
      />

      {/* Featured badge */}
      {plan.featured && (
        <div
          className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[0.7rem] font-bold tracking-wider uppercase"
          style={{
            background: 'var(--gradient-primary)',
            color: '#070b0a',
          }}
        >
          Most Popular
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Plan header */}
        <div className="mb-6">
          <h3 className="text-xl font-extrabold mb-1" style={{ color: 'var(--text-primary)' }}>
            {plan.name}
          </h3>
          <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>{plan.subtitle}</p>
          <div className="flex items-baseline gap-1.5">
            <span
              className="text-4xl md:text-5xl font-black"
              style={{
                background: plan.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {plan.price}
            </span>
            {plan.period && (
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{plan.period}</span>
            )}
          </div>
        </div>

        {/* Features */}
        <ul className="flex-1 space-y-1 mb-7">
          {plan.features.map((feat) => (
            <li
              key={feat}
              className="flex items-center gap-2.5 py-2 text-sm"
              style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-color)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <circle cx="12" cy="12" r="10" stroke="#00d4aa" strokeWidth="2" opacity="0.3" />
                <path d="M8 12l3 3 5-5" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {feat}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={plan.href}
          className="btn w-full justify-center py-3.5 text-sm font-bold rounded-full"
          style={{
            background: plan.featured ? 'var(--gradient-primary)' : 'transparent',
            color: plan.featured ? '#070b0a' : 'var(--text-primary)',
            border: plan.featured ? 'none' : '1px solid var(--border-color)',
            boxShadow: plan.featured ? '0 4px 20px rgba(0, 212, 170, 0.25)' : 'none',
          }}
          onMouseEnter={(e) => {
            if (!plan.featured) {
              e.currentTarget.style.background = 'var(--bg-card)';
              e.currentTarget.style.borderColor = 'var(--text-muted)';
            }
          }}
          onMouseLeave={(e) => {
            if (!plan.featured) {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }
          }}
        >
          {plan.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function PricingTable() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section id="pricing" className="section relative overflow-hidden">
      <div
        className="glow pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(0,212,170,0.06), transparent)',
          top: '10%',
          left: -200,
          filter: 'blur(80px)',
        }}
      />
      <div
        className="glow pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(79,172,254,0.05), transparent)',
          bottom: '10%',
          right: -200,
          filter: 'blur(80px)',
        }}
      />

      <div className="container" ref={ref}>
        <div className="text-center mb-14 md:mb-16">
          <span
            className="section-label"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease',
            }}
          >
            Pricing
          </span>
          <h2
            className="section-title"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease 0.1s',
            }}
          >
            Simple, Transparent Pricing
          </h2>
          <p
            className="section-subtitle mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease 0.2s',
            }}
          >
            Start free, scale as you grow. All plans include the core automation engine.
            No hidden fees, no surprise charges.
          </p>
        </div>

        <div className="grid gap-7" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'start' }}>
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        <p
          className="text-center text-sm mt-10"
          style={{
            color: 'var(--text-muted)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.5s ease 0.4s',
          }}
        >
          All plans are open-source and self-hostable. Paid plans include premium support and hosted infrastructure.{' '}
          <a
            href="https://github.com/sachinn/autotrader-landing"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium"
            style={{ color: 'var(--accent-primary)' }}
          >
            View on GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
