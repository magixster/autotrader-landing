import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { FEATURES } from '../data/features';

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
