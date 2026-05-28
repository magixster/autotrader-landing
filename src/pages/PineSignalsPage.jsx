import SignalsHero from '../components/SignalsHero';
import SignalsFlow from '../components/SignalsFlow';
import SignalPreview from '../components/SignalPreview';
import SignalsPricing from '../components/SignalsPricing';
import SignalsFAQ from '../components/SignalsFAQ';
import Layout from '../components/Layout';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function SignalsCTA() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden py-20 md:py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div
        className="glow pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.06), transparent)',
          top: '20%',
          right: -200,
          filter: 'blur(80px)',
        }}
      />

      <div className="container" ref={ref}>
        <div
          className="max-w-[640px] mx-auto p-10 md:p-12 rounded-3xl relative overflow-hidden text-center"
          style={{
            border: '1px solid var(--border-accent)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              background: 'radial-gradient(circle, rgba(79, 172, 254, 0.07), transparent)',
              filter: 'blur(60px)',
            }}
          />

          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 relative" style={{ color: 'var(--text-primary)' }}>
            Start Receiving Signals Today
          </h2>
          <p className="text-base md:text-lg mb-8 relative" style={{ color: 'var(--text-secondary)' }}>
            No setup. No code. No commitment. Cancel anytime.
            Get your first 7 days free on any plan.
          </p>

          <div className="flex flex-wrap gap-4 justify-center relative">
            <Link
              to="/pine-signals#pricing"
              className="btn !rounded-full !px-7 !py-3.5 !text-sm !font-bold gap-2"
              style={{
                background: 'linear-gradient(135deg, #4facfe, #2563eb)',
                color: '#fff',
                boxShadow: '0 4px 24px rgba(79, 172, 254, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(79, 172, 254, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(79, 172, 254, 0.3)';
              }}
            >
              Choose Your Plan
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
            <Link
              to="/"
              className="btn !rounded-full !px-7 !py-3.5 !text-sm !font-semibold"
              style={{
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              Explore AutoTrader
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PineSignalsPage() {
  return (
    <Layout>
      <SignalsHero />
      <SignalPreview />
      <SignalsFlow />
      <SignalsPricing />
      <SignalsFAQ />
      <SignalsCTA />
    </Layout>
  );
}
