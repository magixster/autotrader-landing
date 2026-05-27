import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const TESTIMONIALS = [
  {
    quote: 'I was spending hours manually executing my MA bounce strategy across multiple accounts. Now it runs on autopilot — MT5 and Tradovate simultaneously. The dual-leg entry with runner management is a game changer.',
    author: 'Alex Chen',
    role: 'Independent Trader',
    avatar: 'AC',
    color: '#5ed29c',
  },
  {
    quote: 'Setting this up with FundedNext was surprisingly straightforward. The per-account product map overrides meant I could use my custom ticker names without modifying the core engine. Contract resolution just works.',
    author: 'Marcus Rivera',
    role: 'Prop Firm Trader',
    avatar: 'MR',
    color: '#4facfe',
  },
  {
    quote: 'The risk-based position sizing alone saved me from over-leveraging. I can finally trust that every trade risks exactly 0.1% of my account. The Telegram alerts give me peace of mind even when I\'m away from the screen.',
    author: 'Sarah Kim',
    role: 'Swing Trader',
    avatar: 'SK',
    color: '#f59e0b',
  },
  {
    quote: 'I deployed the Docker container on my VPS in under 5 minutes. The CI/CD pipeline runs 226+ tests on every push, so I know my changes won\'t break anything. This is production-grade infrastructure.',
    author: 'James Whitfield',
    role: 'Quant Developer',
    avatar: 'JW',
    color: '#8b5cf6',
  },
  {
    quote: 'Running both 5ers and funded accounts simultaneously used to be a nightmare of tab-switching. Now a single TradingView alert fires orders to all my accounts with independent risk profiles. Absolutely essential tool.',
    author: 'Priya Sharma',
    role: 'Multi-Account Trader',
    avatar: 'PS',
    color: '#06b6d4',
  },
];

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
