import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { SIGNAL_PLANS } from '../data/signalsPricing';

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
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: plan.featured
            ? 'linear-gradient(135deg, rgba(79,172,254,0.06), rgba(37,99,235,0.04))'
            : 'var(--bg-card)',
          border: plan.featured ? '1px solid var(--border-accent)' : '1px solid var(--border-color)',
        }}
      />

      {plan.featured && (
        <div
          className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[0.7rem] font-bold tracking-wider uppercase"
          style={{
            background: plan.gradient,
            color: '#070b0a',
          }}
        >
          Most Popular
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full">
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
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{plan.period}</span>
          </div>
        </div>

        <ul className="flex-1 space-y-1 mb-7">
          {plan.features.map((feat) => (
            <li
              key={feat}
              className="flex items-center gap-2.5 py-2 text-sm"
              style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-color)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <circle cx="12" cy="12" r="10" stroke="#4facfe" strokeWidth="2" opacity="0.3" />
                <path d="M8 12l3 3 5-5" stroke="#4facfe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {feat}
            </li>
          ))}
        </ul>

        <button
          className="btn w-full justify-center py-3.5 text-sm font-bold rounded-full cursor-pointer"
          style={{
            background: plan.featured ? plan.gradient : 'transparent',
            color: plan.featured ? '#070b0a' : 'var(--text-primary)',
            border: plan.featured ? 'none' : '1px solid var(--border-color)',
            boxShadow: plan.featured ? '0 4px 20px rgba(79, 172, 254, 0.25)' : 'none',
          }}
          onMouseEnter={(e) => {
            if (!plan.featured) {
              e.currentTarget.style.background = 'var(--bg-card)';
              e.currentTarget.style.borderColor = 'var(--text-muted)';
            } else {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(79, 172, 254, 0.35)';
            }
          }}
          onMouseLeave={(e) => {
            if (!plan.featured) {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            } else {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(79, 172, 254, 0.25)';
            }
          }}
        >
          {plan.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function SignalsPricing() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section id="pricing" className="section relative overflow-hidden">
      <div
        className="glow pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(79,172,254,0.06), transparent)',
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
          background: 'radial-gradient(circle, rgba(94,210,156,0.05), transparent)',
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
            Signals Pricing
          </h2>
          <p
            className="section-subtitle mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease 0.2s',
            }}
          >
            Get the same signals our automated system trades — delivered before execution.
            Cancel anytime, no lock-in.
          </p>
        </div>

        <div
          className="grid gap-7"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'start' }}
        >
          {SIGNAL_PLANS.map((plan, i) => (
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
          All plans include a 7-day free trial. No credit card required to start.
          Signals delivered via Telegram, email, and SMS (Pro+).
        </p>
      </div>
    </section>
  );
}
