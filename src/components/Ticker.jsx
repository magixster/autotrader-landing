import { useEffect, useState } from 'react';
import { TICKER_ITEMS } from '../data/ticker';

function TickerItem({ item }) {
  const isUp = item.change.startsWith('+');
  const color = isUp ? '#00d4aa' : '#ef4444';

  return (
    <span className="inline-flex items-center gap-2.5 px-5 py-1.5 border-r whitespace-nowrap font-mono text-xs md:text-sm" style={{ borderColor: 'var(--border-color)' }}>
      <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{item.pair}</span>
      <span style={{ color: 'var(--text-muted)' }}>{item.bid}</span>
      <span
        className="inline-flex items-center gap-1 font-medium tabular-nums"
        style={{ color }}
      >
        <svg
          width="7"
          height="7"
          viewBox="0 0 7 7"
          fill="currentColor"
          className={isUp ? '' : 'rotate-180'}
        >
          <path d="M3.5 0l3.5 5.5H0z" />
        </svg>
        {item.change}
      </span>
      <span className="text-[10px] font-medium tabular-nums" style={{ color: isUp ? 'rgba(0,212,170,0.5)' : 'rgba(239,68,68,0.5)' }}>
        {isUp ? '▲' : '▼'} {item.volume || '2.4K'}
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
        background: 'color-mix(in srgb, var(--bg-primary) 95%, transparent)',
        backdropFilter: 'blur(20px) saturate(1.5)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="flex ticker-gradient-mask">
        <div className="flex animate-ticker" style={{ animationDuration: '35s' }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <TickerItem key={`${item.pair}-${i}`} item={item} />
          ))}
        </div>
        <div className="flex animate-ticker" style={{ animationDuration: '35s' }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <TickerItem key={`dup-${item.pair}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
