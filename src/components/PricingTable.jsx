import { Link } from 'react-router-dom';

const TIERS = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    desc: 'For individual traders getting started with automation.',
    features: [
      'Up to 2 accounts',
      'MT5 or Tradovate',
      'Basic risk management',
      'Email support',
      'Real-time P&L tracking',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/month',
    desc: 'For serious traders with multi-account setups.',
    features: [
      'Up to 10 accounts',
      'MT5 + Tradovate',
      'Advanced risk management',
      'Priority support',
      'Performance analytics',
      'Docker deployment',
      'Custom symbol mapping',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$499',
    period: '/month',
    desc: 'For prop firms and institutional traders.',
    features: [
      'Unlimited accounts',
      'All platforms',
      'Custom risk rules',
      'Dedicated support',
      'API access',
      'On-premise deployment',
      'SLA guarantee',
      'White-label options',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function PricingTable() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-label mx-auto mb-5 w-fit">Pricing</div>
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle mx-auto mt-4">
            No hidden fees. No surprises. Scale your plan as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col ${
                tier.highlighted ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              <div
                className="neumo-card p-8 md:p-10 flex flex-col h-full"
                style={{
                  background: 'var(--bg-primary)',
                }}
              >
                {tier.highlighted && (
                  <div
                    className="section-label mx-auto mb-4 w-fit !text-[10px]"
                    style={{
                      background: 'var(--accent)',
                      color: 'white',
                      boxShadow: `
                        inset 3px 3px 6px rgba(0,0,0,0.15),
                        inset -3px -3px 6px rgba(255,255,255,0.15)
                      `,
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <h3 className="font-display font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                  {tier.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {tier.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display font-extrabold text-4xl" style={{ color: 'var(--text-primary)' }}>
                    {tier.price}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {tier.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {tier.features.map((feat) => (
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
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/pricing"
                  className={`text-center !rounded-2xl !py-3 !text-sm font-display font-bold ${
                    tier.highlighted
                      ? 'neumo-btn-primary'
                      : 'neumo-btn'
                  }`}
                  style={{
                    background: tier.highlighted ? undefined : 'var(--bg-primary)',
                    textDecoration: 'none',
                  }}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
