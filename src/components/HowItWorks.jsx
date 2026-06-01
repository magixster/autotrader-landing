import { useEffect, useRef } from 'react';

const STEPS = [
  {
    number: '01',
    title: 'Write Your Strategy',
    desc: 'Create a TradingView Pine Script strategy that sends webhook alerts on buy/sell signals.',
  },
  {
    number: '02',
    title: 'Configure Accounts',
    desc: 'Connect your MT5 and Tradovate accounts. Set risk parameters, lot sizes, and symbol mappings.',
  },
  {
    number: '03',
    title: 'Deploy &amp; Monitor',
    desc: 'Run the bot via Docker or CLI. Watch live trades execute across all your accounts in real time.',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="section" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16 scroll-reveal">
          <div className="section-label mx-auto mb-5 w-fit">How It Works</div>
          <h2 className="section-title">Three Steps to Automate</h2>
          <p className="section-subtitle mx-auto mt-4">
            From Pine Script to live execution in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="scroll-reveal text-center relative"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Step number in neumorphic inset */}
              <div
                className="neumo-inset-deep w-20 h-20 flex items-center justify-center mx-auto mb-6"
                style={{
                  background: 'var(--bg-primary)',
                  borderRadius: '9999px',
                }}
              >
                <span
                  className="font-display font-extrabold text-2xl"
                  style={{ color: 'var(--accent)' }}
                >
                  {step.number}
                </span>
              </div>

              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-10 left-[60%] w-[calc(80%)] h-0.5"
                  style={{
                    background: 'var(--bg-primary)',
                    boxShadow: '0 1px 0 rgba(255,255,255,0.5), 0 -1px 0 rgb(163,177,198,0.3)',
                  }}
                />
              )}

              <h3 className="font-display font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed max-w-xs mx-auto"
                style={{ color: 'var(--text-secondary)' }}
                dangerouslySetInnerHTML={{ __html: step.desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
