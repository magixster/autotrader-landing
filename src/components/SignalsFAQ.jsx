import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { FAQ_ITEMS } from '../data/signalsFAQ';

function FAQItem({ item, index, isOpen, onToggle }) {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1, staggerDelay: 60, index });

  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.06}s`,
        background: 'var(--bg-card)',
        border: `1px solid ${isOpen ? 'var(--border-accent)' : 'var(--border-color)'}`,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer bg-transparent border-none"
        style={{ color: 'var(--text-primary)' }}
        onMouseEnter={(e) => {
          if (!isOpen) e.currentTarget.style.background = 'rgba(79, 172, 254, 0.03)';
        }}
        onMouseLeave={(e) => {
          if (!isOpen) e.currentTarget.style.background = 'transparent';
        }}
      >
        <span className="text-sm md:text-base font-semibold leading-snug flex-1">
          {item.question}
        </span>
        <div
          className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300"
          style={{
            background: isOpen ? 'rgba(79, 172, 254, 0.1)' : 'rgba(255,255,255,0.03)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <ChevronDown size={16} style={{ color: isOpen ? '#4facfe' : 'var(--text-muted)' }} />
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{
          maxHeight: isOpen ? 500 : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          className="px-5 md:px-6 pb-5 md:pb-6 text-sm leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function SignalsFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.05 });

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="signals-faq" className="section relative overflow-hidden">
      <div
        className="glow pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.06), transparent)',
          top: '10%',
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
              transition: 'all 0.5s ease',
            }}
          >
            FAQ
          </span>
          <h2
            className="section-title"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.5s ease 0.1s',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="section-subtitle mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.5s ease 0.2s',
            }}
          >
            Everything you need to know about PineSignals. Still have questions? We are here to help.
          </p>
        </div>

        <div className="max-w-[700px] mx-auto flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
