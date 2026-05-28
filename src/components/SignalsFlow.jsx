import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { SIGNAL_STEPS } from '../data/signalsFlow';

function FlowStep({ step, index }) {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.15, staggerDelay: 120, index });
  const Icon = step.icon;
  const isRight = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : `translateX(${isRight ? '30px' : '-30px'})`,
        transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Step icon */}
      <div
        className="flex-shrink-0 relative flex items-center justify-center"
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
          border: `2px solid ${step.color}30`,
          color: step.color,
        }}
      >
        <Icon size={26} strokeWidth={1.5} />
        <div
          className="absolute animate-spin-slow"
          style={{
            inset: -3,
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

export default function SignalsFlow() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section id="signals-flow" className="section relative overflow-hidden">
      <div
        className="glow pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.06), transparent)',
          top: '20%',
          left: -200,
          filter: 'blur(80px)',
        }}
      />

      <div className="container" ref={ref}>
        <div className="text-center mb-16 md:mb-20">
          <span
            className="section-label"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.5s ease',
            }}
          >
            Signal Pipeline
          </span>
          <h2
            className="section-title"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.5s ease 0.1s',
            }}
          >
            How Signals Reach You
          </h2>
          <p
            className="section-subtitle mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.5s ease 0.2s',
            }}
          >
            From Pine Script analysis to your phone — the complete signal delivery pipeline.
            No code, no configuration, no complexity.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical connecting line */}
          <div
            className="hidden md:block absolute top-0 bottom-0 left-[32px] md:left-1/2"
            style={{
              width: 2,
              background: 'linear-gradient(180deg, #4facfe, #06b6d4, #f59e0b, #8b5cf6, #5ed29c, #ef4444)',
              transform: 'translateX(-50%)',
              opacity: 0.15,
            }}
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {SIGNAL_STEPS.map((step, i) => (
              <FlowStep key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
