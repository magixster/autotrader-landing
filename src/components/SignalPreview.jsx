import { useEffect, useRef, useState } from 'react';
import { Bell, TrendingUp, AlertTriangle } from 'lucide-react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const SAMPLE_SIGNALS = [
  {
    type: 'BUY',
    asset: 'BTCUSD',
    entry: '68,420',
    sl: '66,880',
    tp1: '70,100',
    tp2: '71,500',
    rationale: 'Bullish divergence on 4H RSI + support retest at 200 EMA. High probability bounce setup.',
    color: '#5ed29c',
    time: '09:42 AM',
    confidence: 'HIGH',
  },
  {
    type: 'SELL',
    asset: 'ETHUSD',
    entry: '3,520',
    sl: '3,610',
    tp1: '3,380',
    tp2: '3,250',
    rationale: 'Resistance rejection at weekly pivot. Bearish engulfing on 1H. Targeting liquidity below.',
    color: '#ef4444',
    time: '11:18 AM',
    confidence: 'MEDIUM',
  },
  {
    type: 'BUY',
    asset: 'EURUSD',
    entry: '1.0875',
    sl: '1.0830',
    tp1: '1.0930',
    tp2: '1.0980',
    rationale: 'Dovish ECB expectations + support at demand zone. Risk 1:2.5 reward ratio.',
    color: '#5ed29c',
    time: '02:05 PM',
    confidence: 'HIGH',
  },
];

function SignalCard({ signal, index, isActive, onHover, onLeave }) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300 cursor-default"
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${isActive ? signal.color + '40' : 'var(--border-color)'}`,
        transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: isActive ? `0 8px 24px ${signal.color}15` : 'none',
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{
          background: `linear-gradient(90deg, ${signal.color}12, ${signal.color}05)`,
          borderBottom: `1px solid ${signal.color}15`,
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-extrabold tracking-wider uppercase"
            style={{
              background: signal.color,
              color: '#070b0a',
            }}
          >
            {signal.type}
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            {signal.asset}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded"
            style={{
              background: signal.confidence === 'HIGH'
                ? 'rgba(94, 210, 156, 0.15)'
                : 'rgba(245, 158, 11, 0.15)',
              color: signal.confidence === 'HIGH' ? '#5ed29c' : '#f59e0b',
            }}
          >
            {signal.confidence}
          </span>
          <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
            {signal.time}
          </span>
        </div>
      </div>

      {/* Price Levels */}
      <div className="px-4 py-3 space-y-2">
        <div className="grid grid-cols-4 gap-2 text-center">
          <PriceLevel label="Entry" value={signal.entry} color={signal.color} />
          <PriceLevel label="Stop Loss" value={signal.sl} color="#ef4444" />
          <PriceLevel label="TP 1" value={signal.tp1} color={signal.color} />
          <PriceLevel label="TP 2" value={signal.tp2} color={signal.color} />
        </div>

        {/* Rationale */}
        <div
          className="pt-2 text-xs leading-relaxed"
          style={{ color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)' }}
        >
          {signal.rationale}
        </div>
      </div>
    </div>
  );
}

function PriceLevel({ label, value, color }) {
  return (
    <div>
      <div className="text-[9px] font-medium mb-0.5" style={{ color: 'var(--text-muted)' }}>
        {label}
      </div>
      <div className="text-xs font-bold font-mono" style={{ color }}>
        {value}
      </div>
    </div>
  );
}

export default function SignalPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  // Auto-cycle through signals
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SAMPLE_SIGNALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section relative overflow-hidden">
      <div
        className="glow pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.05), transparent)',
          bottom: '10%',
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
              transition: 'all 0.5s ease',
            }}
          >
            Live Preview
          </span>
          <h2
            className="section-title"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.5s ease 0.1s',
            }}
          >
            What a Signal Looks Like
          </h2>
          <p
            className="section-subtitle mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.5s ease 0.2s',
            }}
          >
            Real alerts delivered straight to your Telegram. Entry price, stop loss, take profit levels
            and rationale — everything you need to trade with confidence.
          </p>
        </div>

        <div
          className="max-w-[480px] mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.3s',
          }}
        >
          {/* Signal cards */}
          <div className="flex flex-col gap-3">
            {SAMPLE_SIGNALS.map((signal, i) => (
              <SignalCard
                key={`${signal.asset}-${i}`}
                signal={signal}
                index={i}
                isActive={activeIndex === i}
                onHover={() => setActiveIndex(i)}
                onLeave={() => setActiveIndex(0)}
              />
            ))}
          </div>

          {/* Auto-cycling indicator */}
          <div className="flex justify-center gap-1.5 mt-5">
            {SAMPLE_SIGNALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="rounded-full transition-all duration-500 cursor-pointer border-none"
                style={{
                  width: activeIndex === i ? 24 : 6,
                  height: 6,
                  background: activeIndex === i ? '#4facfe' : 'var(--border-color)',
                }}
                aria-label={`Show signal ${i + 1}`}
              />
            ))}
          </div>

          <p className="text-center text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
            Sample signal preview · Signals auto-cycle every 4 seconds
          </p>
        </div>
      </div>
    </section>
  );
}
