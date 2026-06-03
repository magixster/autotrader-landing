import { useEffect, useRef } from 'react';

const TICKER_ITEMS = [
  { symbol: 'EUR/USD', price: '1.0876', change: '+0.02%' },
  { symbol: 'GBP/USD', price: '1.2742', change: '-0.08%' },
  { symbol: 'USD/JPY', price: '151.234', change: '+0.15%' },
  { symbol: 'XAU/USD', price: '2,358.4', change: '+0.32%' },
  { symbol: 'BTC/USD', price: '68,421', change: '+1.24%' },
  { symbol: 'S&P 500', price: '5,289.4', change: '+0.18%' },
  { symbol: 'NASDAQ', price: '16,742', change: '+0.45%' },
  { symbol: 'VIX', price: '13.24', change: '-2.15%' },
  { symbol: 'US 10Y', price: '4.32%', change: '-0.03%' },
  { symbol: 'OIL/USD', price: '79.84', change: '+0.67%' },
];

export default function Ticker() {
  const scrollRef = useRef(null);

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

    const elements = scrollRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const renderItems = (copyIndex) =>
    TICKER_ITEMS.map((item, i) => (
      <div
        key={`${item.symbol}-${copyIndex}-${i}`}
        className="inline-flex items-center gap-3 mx-6"
      >
        <span className="font-display font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
          {item.symbol}
        </span>
        <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
          {item.price}
        </span>
        <span
          className="font-body text-xs font-medium"
          style={{
            color: item.change.startsWith('+')
              ? 'var(--accent-teal)'
              : 'var(--accent-red)',
          }}
        >
          {item.change}
        </span>
      </div>
    ));

  return (
    <div className="relative py-6" ref={scrollRef}>
      {/* Inset divider lines */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: 1,
          boxShadow: '0 1px 0 rgba(255,255,255,0.5), 0 -1px 0 rgb(163,177,198,0.3)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: 1,
          boxShadow: '0 -1px 0 rgba(255,255,255,0.5), 0 1px 0 rgb(163,177,198,0.3)',
        }}
      />

      <div className="ticker-gradient-mask overflow-hidden">
        <div className="animate-ticker whitespace-nowrap" style={{ display: 'inline-flex' }}>
          {renderItems(0)}
          {renderItems(1)}
        </div>
      </div>
    </div>
  );
}
