import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_STATS } from '../data/hero';

/* ── Fullscreen Video Background ── */
function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays on load
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked — will play on user interaction
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      style={{ opacity: 0.5 }}
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_094440_a3592600-bd1e-49e5-9bce-a73662061d83.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}

/* ── Grid Lines (25%, 50%, 75%) ── */
function GridLines() {
  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none">
      <div className="relative w-full h-full">
        <div className="absolute top-0 bottom-0 left-[25%] w-px" style={{ background: 'var(--border-color)' }} />
        <div className="absolute top-0 bottom-0 left-[50%] w-px" style={{ background: 'var(--border-color)' }} />
        <div className="absolute top-0 bottom-0 left-[75%] w-px" style={{ background: 'var(--border-color)' }} />
      </div>
    </div>
  );
}

/* ── Central SVG Glow Ellipse ── */
function CentralGlow() {
  return (
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
  );
}

/* ── Liquid Glass Card ── */
function GlassCard() {
  return (
    <div
      className="animate-fade-in-up"
      style={{ animationDelay: '0.05s', animationDuration: '0.6s' }}
    >
      <div
        className="liquid-glass w-[200px] h-[200px] md:w-[220px] md:h-[220px] rounded-2xl p-5 md:p-6 flex flex-col justify-between translate-y-[-50px]"
        style={{ backdropFilter: 'blur(4px)' }}
      >
        <div className="text-[11px] font-medium tracking-wider" style={{ color: 'var(--text-muted)' }}>
          [ 2025 ]
        </div>
        <div>
          <div className="text-base md:text-lg font-bold leading-tight mb-1.5" style={{ color: 'var(--text-primary)' }}>
            Taught by{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent-primary)' }}>
              Industry
            </span>{' '}
            Professionals
          </div>
          <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
            Build production-ready trading systems used by real traders.
          </div>
        </div>
      </div>
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
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, var(--bg-primary) 40%, transparent 70%), linear-gradient(to top, var(--bg-primary) 0%, transparent 40%)',
      }} />
      <div className="grid-bg absolute inset-0" />
      <GridLines />
      <CentralGlow />

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
                  className="w-1.5 h-1.5 rounded-full"
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
              <a
                href="#features"
                className="btn !rounded-full !px-7 !py-3.5 !text-sm !font-extrabold uppercase tracking-wider gap-3"
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
                Get Started
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
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

            {/* Stats */}
            <div className="animate-fade-in-up flex flex-wrap gap-x-10 gap-y-3 mt-14" style={{ animationDelay: '0.35s' }}>
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl md:text-2xl font-black tracking-tight" style={{ color: 'var(--accent-primary)' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Glass Card */}
          <div className="hidden lg:flex flex-shrink-0 mt-20">
            <GlassCard />
          </div>
        </div>
      </div>
    </section>
  );
}
