import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Glows */}
        <div
          className="glow pointer-events-none"
          style={{
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(94,210,156,0.06), transparent)',
            top: '5%',
            right: -200,
            filter: 'blur(100px)',
          }}
        />
        <div
          className="glow pointer-events-none"
          style={{
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(79,172,254,0.05), transparent)',
            bottom: '10%',
            left: -150,
            filter: 'blur(80px)',
          }}
        />

        <div className="container" ref={ref}>
          <div
            className="max-w-[520px] mx-auto text-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Large 404 */}
            <div
              className="text-[7rem] md:text-[10rem] font-black leading-none mb-4"
              style={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              404
            </div>

            <h1
              className="text-2xl md:text-3xl font-extrabold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Page Not Found
            </h1>

            <p
              className="text-base mb-10 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
              Let&rsquo;s get you back on track.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/"
                className="btn !rounded-full !px-7 !py-3.5 !text-sm !font-bold gap-2"
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
                <Home size={18} strokeWidth={2.5} />
                Go Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="btn !rounded-full !px-7 !py-3.5 !text-sm !font-semibold gap-2 cursor-pointer"
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
                <ArrowLeft size={16} strokeWidth={2.5} />
                Go Back
              </button>
            </div>

            {/* Decorative links */}
            <div
              className="flex flex-wrap justify-center gap-6 mt-12 text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              <Link to="/performance" className="hover:underline" style={{ color: 'inherit' }}>
                Performance
              </Link>
              <Link to="/pricing" className="hover:underline" style={{ color: 'inherit' }}>
                Pricing
              </Link>
              <Link to="/pine-signals" className="hover:underline" style={{ color: 'inherit' }}>
                PineSignals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
