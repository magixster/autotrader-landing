import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { PLATFORMS } from '../data/platforms';

function PlatformCard({ platform, index }) {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1, staggerDelay: 100, index });

  return (
    <div
      ref={ref}
      className="card-hover rounded-2xl p-8 md:p-9 relative overflow-hidden"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.5s ease, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Gradient accent bar */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: 3, background: platform.gradient }}
      />

      <div className="flex items-start gap-4 mb-5">
        <div
          className="flex items-center justify-center w-11 h-11 rounded-xl text-xl flex-shrink-0"
          style={{ background: `${platform.gradient}25` }}
        >
          {platform.icon}
        </div>
        <div>
          <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{platform.name}</h3>
          <div className="text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>
            {platform.subtitle}
          </div>
        </div>
      </div>

      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
        {platform.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {platform.features.map((f) => (
          <span
            key={f}
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
            }}
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Platforms() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section id="platforms" className="section relative overflow-hidden">
      <div
        className="glow pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06), transparent)',
          bottom: 0,
          right: -150,
          filter: 'blur(80px)',
        }}
      />

      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <span
            className="section-label"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.5s ease',
            }}
          >
            Integration
          </span>
          <h2
            className="section-title"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.5s ease 0.1s',
            }}
          >
            Supported Platforms
          </h2>
          <p
            className="section-subtitle mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.5s ease 0.2s',
            }}
          >
            Trade across forex, futures, and prop firm accounts — all from a single TradingView strategy.
          </p>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {PLATFORMS.map((p, i) => (
            <PlatformCard key={p.name} platform={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
