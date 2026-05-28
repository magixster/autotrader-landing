import { useEffect, useState } from 'react';
import { TICKER_ITEMS } from '../data/ticker';

function TickerItem({ item }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1 border-r whitespace-nowrap font-mono text-xs md:text-sm" style={{ borderColor: 'var(--border-color)' }}>
      <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{item.pair}</span>
      <span style={{ color: 'var(--text-muted)' }}>{item.bid}</span>
      <span
        className="inline-flex items-center gap-0.5 font-medium"
        style={{ color: item.up ? '#00d4aa' : '#ef4444' }}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="currentColor"
          className={item.up ? '' : 'rotate-180'}
        >
          <path d="M4 0l4 6H0z" />
        </svg>
        {item.change}
      </span>
    </span>
  );
}

export default function Ticker() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed top-[var(--navbar-height)] left-0 right-0 z-40 overflow-hidden border-b"
      style={{
        background: 'var(--bg-primary)',
        backdropFilter: 'blur(12px)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="flex ticker-gradient-mask">
        <div className="flex animate-ticker">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <TickerItem key={`${item.pair}-${i}`} item={item} />
          ))}
        </div>
        <div className="flex animate-ticker">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <TickerItem key={`dup-${item.pair}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
