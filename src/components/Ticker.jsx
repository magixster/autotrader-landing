import { useEffect, useState } from 'react';

const TICKER_ITEMS = [
  { pair: 'EUR/USD', bid: '1.0842', ask: '1.0845', change: '+0.12%', up: true },
  { pair: 'GBP/USD', bid: '1.2678', ask: '1.2681', change: '-0.08%', up: false },
  { pair: 'USD/JPY', bid: '151.34', ask: '151.37', change: '+0.23%', up: true },
  { pair: 'XAU/USD', bid: '2345.6', ask: '2346.1', change: '+0.45%', up: true },
  { pair: 'ES',      bid: '5324.0', ask: '5324.5', change: '-0.15%', up: false },
  { pair: 'NQ',      bid: '18792.5', ask: '18793.0', change: '+0.31%', up: true },
  { pair: 'CL',      bid: '78.93', ask: '78.96', change: '-0.52%', up: false },
  { pair: 'GC',      bid: '2398.2', ask: '2398.7', change: '+0.18%', up: true },
  { pair: '6J',      bid: '0.006634', ask: '0.006637', change: '+0.05%', up: true },
  { pair: 'BTC/USD', bid: '68234', ask: '68256', change: '+1.23%', up: true },
];

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
