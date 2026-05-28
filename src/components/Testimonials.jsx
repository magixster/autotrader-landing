import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { TESTIMONIALS } from '../data/testimonials';

function TestimonialCard({ testimonial, index }) {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.15, staggerDelay: 80, index });

  return (
    <div
      ref={ref}
      className="card-hover rounded-2xl p-8 relative flex flex-col"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.4s ease, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Quote mark */}
      <div
        className="text-5xl leading-none mb-2 select-none"
        style={{ color: testimonial.color, opacity: 0.15, fontWeight: 900, fontFamily: "'Georgia', serif" }}
      >
        &ldquo;
      </div>

      {/* Quote text */}
      <p
        className="text-sm leading-relaxed flex-1 mb-6 italic"
        style={{ color: 'var(--text-secondary)' }}
      >
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full text-xs font-bold flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}88)`,
            color: '#070b0a',
          }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
            {testimonial.author}
          </div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section id="testimonials" className="section relative overflow-hidden">
      <div
        className="glow pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(94,210,156,0.05), transparent)',
          top: '30%',
          left: -200,
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
            Testimonials
          </span>
          <h2
            className="section-title"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease 0.1s',
            }}
          >
            Trusted by Traders Worldwide
          </h2>
          <p
            className="section-subtitle mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease 0.2s',
            }}
          >
            From independent traders to prop firm veterans — see how automation transforms their workflow.
          </p>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.author} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
