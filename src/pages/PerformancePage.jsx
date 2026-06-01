import { useEffect, useRef } from 'react';

const METRICS = [
  { label: 'Win Rate', value: '68.4%', sub: 'Last 30 days' },
  { label: 'Total P&L', value: '+$24,382', sub: 'All accounts', color: 'var(--accent-teal)' },
  { label: 'Avg. Trade', value: '$187', sub: 'Per position' },
  { label: 'Max Drawdown', value: '4.2%', sub: '30-day rolling' },
];

const TRADES = [
  { symbol: 'EUR/USD', type: 'Buy', lots: 0.5, pnl: '+$124', time: '2m ago' },
  { symbol: 'GBP/USD', type: 'Sell', lots: 0.3, pnl: '-$42', time: '15m ago' },
  { symbol: 'XAU/USD', type: 'Buy', lots: 0.1, pnl: '+$312', time: '1h ago' },
  { symbol: 'USD/JPY', type: 'Sell', lots: 0.8, pnl: '+$87', time: '3h ago' },
  { symbol: 'BTC/USD', type: 'Buy', lots: 0.02, pnl: '+$1,240', time: '6h ago' },
];

export default function PerformancePage() {
  const sectionRef = useRef(null);

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

    const els = sectionRef.current?.querySelectorAll('.scroll-reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section pb-32" ref={sectionRef}>
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="section-label mx-auto mb-5 w-fit">Performance</div>
          <h2 className="section-title">Live Trading Metrics</h2>
          <p className="section-subtitle mx-auto mt-4">
            Real-time performance data from connected accounts.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {METRICS.map((metric, i) => (
            <div
              key={metric.label}
              className="neumo-card p-6 md:p-8 text-center scroll-reveal"
              style={{
                animationDelay: `${i * 100}ms`,
                background: 'var(--bg-primary)',
              }}
            >
              <div
                className="font-display font-extrabold text-2xl md:text-3xl mb-1"
                style={{ color: metric.color || 'var(--accent)' }}
              >
                {metric.value}
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                {metric.label}
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Recent trades table */}
        <div className="scroll-reveal">
          <h3 className="font-display font-bold text-lg mb-6" style={{ color: 'var(--text-primary)' }}>
            Recent Trades
          </h3>
          <div className="neumo-card overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{ borderColor: 'transparent', boxShadow: '0 1px 0 rgba(255,255,255,0.5), 0 -1px 0 rgb(163,177,198,0.3)' }}>
                    <th className="text-left px-6 py-4 font-display font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Symbol</th>
                    <th className="text-left px-6 py-4 font-display font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Direction</th>
                    <th className="text-left px-6 py-4 font-display font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Size</th>
                    <th className="text-right px-6 py-4 font-display font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>P&amp;L</th>
                    <th className="text-right px-6 py-4 font-display font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {TRADES.map((trade, i) => (
                    <tr
                      key={i}
                      className="transition-colors duration-200"
                      style={{
                        '--row-shadow': '0 1px 0 rgba(255,255,255,0.3), 0 -1px 0 rgb(163,177,198,0.15)',
                        boxShadow: 'var(--row-shadow)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--bg-secondary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <td className="px-6 py-4 font-medium" style={{ color: 'var(--text-primary)' }}>{trade.symbol}</td>
                      <td className="px-6 py-4">
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-xl"
                          style={{
                            background: 'var(--bg-primary)',
                            boxShadow: trade.type === 'Buy'
                              ? 'inset 2px 2px 4px rgb(163,177,198,0.4), inset -2px -2px 4px rgba(255,255,255,0.3)'
                              : 'inset 2px 2px 4px rgb(163,177,198,0.4), inset -2px -2px 4px rgba(255,255,255,0.3)',
                            color: trade.type === 'Buy' ? 'var(--accent-teal)' : '#ef4444',
                          }}
                        >
                          {trade.type}
                        </span>
                      </td>
                      <td className="px-6 py-4" style={{ color: 'var(--text-secondary)' }}>{trade.lots}</td>
                      <td className={`px-6 py-4 text-right font-medium ${trade.pnl.startsWith('+') ? '' : ''}`}
                        style={{ color: trade.pnl.startsWith('+') ? 'var(--accent-teal)' : '#ef4444' }}
                      >
                        {trade.pnl}
                      </td>
                      <td className="px-6 py-4 text-right" style={{ color: 'var(--text-muted)' }}>{trade.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
