import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import { HERO_STATS } from '../data/hero';

/* ── Fullscreen Video Background ── */
function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      style={{ opacity: 0.4 }}
      src="https://d8jnt0lcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_094440_a3592600-bd1e-49e5-9bce-a73662061d83.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}

/* ── Animated Candlestick Chart SVG ── */
function AnimatedChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(t);
  }, []);

  // Candlestick data: [open, high, low, close]
  const candles = [
    [48, 55, 45, 52, true],   // up
    [52, 58, 50, 56, true],   // up
    [56, 59, 53, 54, false],  // down
    [54, 57, 50, 52, false],  // down
    [52, 56, 51, 55, true],   // up
    [55, 62, 54, 60, true],   // up
    [60, 63, 58, 59, false],  // down
    [59, 64, 58, 63, true],   // up
    [63, 68, 62, 66, true],   // up
    [66, 69, 64, 65, false],  // down
    [65, 67, 61, 62, false],  // down
    [62, 66, 60, 65, true],   // up
  ];

  const candleW = 24;
  const candleGap = 4;
  const chartH = 120;
  const chartW = candles.length * (candleW + candleGap);
  const minP = 44, maxP = 70;
  const normY = (p) => chartH - ((p - minP) / (maxP - minP)) * chartH;

  return (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${chartW + 40} ${chartH + 20}`}
        className="opacity-30"
        style={{ maxWidth: 360, maxHeight: 160 }}
      >
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((r) => (
          <line
            key={r}
            x1="0" y1={chartH * (1 - r) + 10}
            x2={chartW + 20} y2={chartH * (1 - r) + 10}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.5"
          />
        ))}

        {/* Moving average line */}
        <polyline
          points={candles.map((c, i) => {
            const x = 10 + i * (candleW + candleGap) + candleW / 2;
            const y = normY(c[3]) + 10;
            return `${x},${y}`;
          }).join(' ')}
          fill="none"
          stroke="rgba(94, 210, 156, 0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={mounted ? 'animate-chart-line' : ''}
        />

        {/* Candles */}
        {candles.map((c, i) => {
          const x = 10 + i * (candleW + candleGap);
          const isUp = c[4];
          const color = isUp ? '#5ed29c' : '#ef4444';
          const open = c[0], high = c[1], low = c[2], close = c[3];
          const openY = normY(open) + 10;
          const closeY = normY(close) + 10;
          const highY = normY(high) + 10;
          const lowY = normY(low) + 10;
          const bodyH = Math.max(Math.abs(closeY - openY), 1);
          const bodyTop = Math.min(openY, closeY);
          const delay = 0.1 + i * 0.08;

          return (
            <g key={i} className={mounted ? (isUp ? 'animate-candle-rise' : 'animate-candle-fall') : ''} style={{ animationDelay: `${delay}s` }}>
              {/* Wick */}
              <line
                x1={x + candleW / 2} y1={highY}
                x2={x + candleW / 2} y2={lowY}
                stroke={color}
                strokeWidth="1"
                strokeLinecap="round"
              />
              {/* Body */}
              <rect
                x={x + 2} y={bodyTop}
                width={candleW - 4} height={bodyH}
                rx="1"
                fill={color}
                opacity="0.8"
              />
            </g>
          );
        })}

        {/* Current price label */}
        <text
          x={chartW - 5} y={normY(candles[candles.length - 1][3]) + 6}
          fill="#5ed29c"
          fontSize="9"
          fontFamily="'JetBrains Mono', monospace"
          textAnchor="end"
          opacity="0.6"
        >
          65.42
        </text>
      </svg>
    </div>
  );
}

/* ── Floating Trading Data Card ── */
function TradingDataCard() {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: '0.3s', animationDuration: '0.8s' }}>
      <div
        className="liquid-glass w-[240px] md:w-[270px] rounded-2xl p-5 md:p-6"
        style={{ backdropFilter: 'blur(8px)' }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-display)' }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5ed29c] animate-pulse-dot mr-1.5" />
            LIVE SIGNAL
          </span>
          <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>
            +0.47%
          </span>
        </div>

        <div className="mb-3">
          <div className="flex items-baseline justify-between">
            <span className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>EURUSD</span>
            <span className="text-lg font-black font-mono" style={{ color: '#5ed29c' }}>1.0876</span>
          </div>
          <div className="flex justify-between text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>
            <span>Bid: 1.0874</span>
            <span>Ask: 1.0878</span>
          </div>
        </div>

        <div className="h-px w-full mb-3" style={{ background: 'var(--border-color)' }} />

        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div>
            <div style={{ color: 'var(--text-muted)' }}>Signal</div>
            <div style={{ color: '#5ed29c' }} className="font-bold">BUY</div>
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)' }}>Confidence</div>
            <div style={{ color: '#4facfe' }} className="font-bold">87%</div>
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)' }}>Entry Zone</div>
            <div className="font-mono font-bold" style={{ color: 'var(--text-primary)' }}>1.0860-90</div>
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)' }}>Risk</div>
            <div className="font-bold" style={{ color: '#f59e0b' }}>0.5%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Mini Stats Card ── */
function StatsCard() {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: '0.5s', animationDuration: '0.8s' }}>
      <div
        className="liquid-glass w-[200px] md:w-[220px] rounded-2xl p-4 md:p-5"
        style={{ backdropFilter: 'blur(8px)' }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Activity size={12} style={{ color: '#4facfe' }} />
          <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-display)' }}>
            SYSTEM HEALTH
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>Uptime</span>
            <span className="text-[11px] font-bold font-mono" style={{ color: '#5ed29c' }}>99.97%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>Latency</span>
            <span className="text-[11px] font-bold font-mono" style={{ color: '#f59e0b' }}>12ms</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>Trades Today</span>
            <span className="text-[11px] font-bold font-mono" style={{ color: 'var(--text-primary)' }}>24</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>Win Rate</span>
            <span className="text-[11px] font-bold font-mono" style={{ color: '#5ed29c' }}>68.4%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Count-Up Stats ── */
function CountUpStats() {
  const [counts, setCounts] = useState({});
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const targets = {
      '29': 29,
      '7': 7,
      '63%': 63,
      '4.2': 42,
      '2.55': 255,
    };

    const intervals = {};
    Object.entries(targets).forEach(([key, target]) => {
      intervals[key] = setInterval(() => {
        setCounts(prev => {
          const current = prev[key] || 0;
          const step = Math.max(1, Math.floor(target / 30));
          const next = Math.min(current + step, target);
          if (next >= target) {
            clearInterval(intervals[key]);
          }
          return { ...prev, [key]: next };
        });
      }, 40);
    });

    return () => Object.values(intervals).forEach(clearInterval);
  }, [hasAnimated]);

  const formatStat = (stat) => {
    if (stat.label === 'Win Rate') {
      return `${counts['63%'] || 0}%`;
    }
    if (stat.label === 'Sharpe') {
      return (counts['4.2'] / 10 || 0).toFixed(1);
    }
    if (stat.label === 'Months Live') {
      return counts['29'] || 0;
    }
    if (stat.label === 'Assets Tracked') {
      return counts['7'] || 0;
    }
    if (stat.label === 'Profit Factor') {
      return (counts['2.55'] / 100 || 0).toFixed(2);
    }
    return stat.value;
  };

  return (
    <div ref={ref} className="animate-fade-in-up flex flex-wrap gap-x-10 gap-y-3 mt-14" style={{ animationDelay: '0.35s' }}>
      {HERO_STATS.map((stat) => (
        <div key={stat.label}>
          <div className="text-xl md:text-2xl font-black tracking-tight font-mono" style={{ color: 'var(--accent-primary)' }}>
            {hasAnimated ? formatStat(stat) : '0'}
          </div>
          <div className="text-xs md:text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Main Hero ── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background layers */}
      <VideoBackground />
      <div className="noise-overlay" />
      <div className="gradient-mesh" />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, var(--bg-primary) 40%, transparent 70%), linear-gradient(to top, var(--bg-primary) 0%, transparent 40%)',
      }} />
      <div className="grid-bg absolute inset-0" />

      {/* Grid Lines */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute top-0 bottom-0 left-[25%] w-px" style={{ background: 'var(--border-color)' }} />
          <div className="absolute top-0 bottom-0 left-[50%] w-px" style={{ background: 'var(--border-color)' }} />
          <div className="absolute top-0 bottom-0 left-[75%] w-px" style={{ background: 'var(--border-color)' }} />
        </div>
      </div>

      {/* Animated Chart Background */}
      <div className="absolute right-0 top-[15%] w-[400px] h-[200px] hidden lg:block">
        <AnimatedChart />
      </div>

      {/* Central SVG Glow Ellipse */}
      <div className="absolute pointer-events-none" style={{ top: '15%', left: '50%', transform: 'translateX(-50%)', filter: 'blur(25px)', opacity: 0.5 }}>
        <svg width="600" height="120" viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="300" cy="60" rx="300" ry="60" fill="url(#glowGradient)" />
          <defs>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#5ed29c" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#4facfe" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#5ed29c" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, var(--bg-primary), transparent)',
        }}
      />

      {/* Left gradient fade */}
      <div
        className="absolute top-0 bottom-0 left-0 w-64 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, var(--bg-primary), transparent)',
        }}
      />

      <div className="container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left content */}
          <div className="max-w-[640px] pt-8 lg:pt-12">
            {/* Eyebrow badge */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-[0.15em] uppercase mb-6"
                style={{
                  color: 'var(--accent-primary)',
                  border: '1px solid var(--border-accent)',
                  background: 'color-mix(in srgb, var(--accent-primary) 8%, transparent)',
                  fontFamily: 'var(--font-display)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
                  style={{ background: 'var(--accent-primary)' }}
                />
                Career-Ready Curriculum
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="animate-fade-in-up text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.92] tracking-[-0.04em] mb-6"
              style={{ animationDelay: '0.15s', fontFamily: "'Inter', sans-serif" }}
            >
              LAUNCH YOUR{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                TRADING
              </span>
              <br />
              CAREER<span style={{ color: 'var(--accent-primary)' }}>.</span>
            </h1>

            {/* Description */}
            <p
              className="animate-fade-in-up text-[clamp(0.875rem,1.5vw,1rem)] max-w-[512px] mb-8 leading-relaxed"
              style={{ color: 'var(--text-secondary)', animationDelay: '0.2s' }}
            >
              Master in-demand trading automation skills with production-grade 
              Pine Script strategies, multi-platform execution, and professional-grade 
              risk management — all deployed through Docker. Backed by{' '}
              <strong style={{ color: 'var(--accent-primary)' }}>29 months</strong> of live results
              across <strong style={{ color: 'var(--accent-primary)' }}>7 assets</strong> with a{' '}
              <strong style={{ color: 'var(--accent-primary)' }}>63% win rate</strong> and{' '}
              <strong style={{ color: 'var(--accent-primary)' }}>4.2 Sharpe</strong>.
            </p>

            {/* CTA */}
            <div className="animate-fade-in-up flex flex-wrap gap-4" style={{ animationDelay: '0.25s' }}>
              <button
                onClick={() => {
                  const el = document.getElementById('products');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn !rounded-full !px-7 !py-3.5 !text-sm !font-extrabold uppercase tracking-wider gap-3 cursor-pointer border-none"
                style={{
                  background: 'var(--accent-primary)',
                  color: '#070b0a',
                  boxShadow: '0 4px 24px rgba(94, 210, 156, 0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(94, 210, 156, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(94, 210, 156, 0.25)';
                }}
              >
                Our Products
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
              <a
                href="https://github.com/sachinn/autotrader-landing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn !rounded-full !px-7 !py-3.5 !text-sm !font-semibold gap-2"
                style={{
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card)';
                  e.currentTarget.style.borderColor = 'var(--text-muted)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View Source
              </a>
            </div>

            {/* Count-Up Stats */}
            <CountUpStats />
          </div>

          {/* Right: Trading Data Cards */}
          <div className="hidden lg:flex flex-col gap-6 mt-20">
            <TradingDataCard />
            <StatsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
