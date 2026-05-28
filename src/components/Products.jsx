import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { PRODUCTS } from '../data/products';

function ProductCard({ product, index }) {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1, staggerDelay: 100, index });
  const Icon = product.icon;

  return (
    <div
      ref={ref}
      className="rounded-2xl relative overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className="p-8 md:p-10 h-full flex flex-col"
        style={{
          background: `linear-gradient(135deg, ${product.color}06, transparent)`,
          border: `1px solid ${product.color}20`,
          backdropFilter: 'blur(4px)',
        }}
      >
        {/* Animated gradient accent bar */}
        <div
          className="absolute top-0 left-0 right-0 animate-shimmer"
          style={{
            height: 3,
            background: product.gradient,
            backgroundSize: '200% 100%',
          }}
        />

        {/* Live indicator */}
        <div className="flex items-center gap-1.5 mb-4">
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: product.color }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: product.color }}
            />
          </span>
          <span
            className="text-[10px] font-semibold uppercase tracking-wider"
            style={{ color: product.color }}
          >
            {product.id === 'autotrader' ? 'Live 24/7' : 'Real-Time'}
          </span>
        </div>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${product.color}20, ${product.color}05)`,
              transition: 'all 0.3s ease',
            }}
          >
            <Icon size={24} style={{ color: product.color }} />
          </div>
          <div>
            <h3
              className="text-2xl font-extrabold tracking-tight"
              style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
            >
              {product.name}
            </h3>
            <div
              className="text-sm font-semibold mt-0.5"
              style={{ color: product.color }}
            >
              {product.tagline}
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          {product.description}
        </p>

        {/* Feature chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.map((f) => (
            <span
              key={f}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: `${product.color}10`,
                border: `1px solid ${product.color}20`,
                color: 'var(--text-secondary)',
              }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex gap-6 mb-8">
          {product.stats.map((stat, si) => (
            <div
              key={stat.label}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${0.3 + si * 0.08}s`,
                animationDuration: '0.5s',
              }}
            >
              <div
                className="text-lg font-black tracking-tight"
                style={{ color: product.color }}
              >
                {stat.value}
              </div>
              <div
                className="text-[11px] font-medium"
                style={{ color: 'var(--text-muted)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {product.links.map((link, i) => (
            <Link
              key={link.label}
              to={link.to}
              className="btn !rounded-full !px-5 !py-2.5 !text-xs !font-bold gap-1.5"
              style={{
                background: i === 0 ? product.color : 'transparent',
                color: i === 0 ? '#070b0a' : 'var(--text-primary)',
                border: i === 0 ? 'none' : `1px solid ${product.color}30`,
                boxShadow: i === 0 ? `0 4px 16px ${product.color}30` : 'none',
              }}
              onMouseEnter={(e) => {
                if (i === 0) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 6px 20px ${product.color}40`;
                } else {
                  e.currentTarget.style.background = `${product.color}10`;
                }
              }}
              onMouseLeave={(e) => {
                if (i === 0) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 16px ${product.color}30`;
                } else {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {link.label}
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section id="products" className="section relative overflow-hidden">
      <div
        className="glow pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(94,210,156,0.05), transparent)',
          top: '20%',
          left: -200,
          filter: 'blur(80px)',
        }}
      />

      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <span
            className="section-label"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease',
            }}
          >
            Products
          </span>
          <h2
            className="section-title"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease 0.1s',
            }}
          >
            Choose Your Edge
          </h2>
          <p
            className="section-subtitle mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease 0.2s',
            }}
          >
            Whether you want fully automated execution or high-conviction signals you can trade yourself — we have you covered.
          </p>
        </div>

        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))' }}
        >
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
