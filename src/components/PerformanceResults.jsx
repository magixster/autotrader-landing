import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { ASSETS, HEADLINE_STATS, PERFORMANCE_STORIES, CHART_DATA } from '../data/performance';

/* ═══════════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

/* ── Headline Stat Bar ── */
function HeadlineBar() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden mb-20"
      style={{
        border: '1px solid var(--border-color)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {HEADLINE_STATS.map((stat) => (
        <div
          key={stat.label}
          className="relative p-6 md:p-8 text-center"
          style={{ background: 'var(--bg-card)' }}
        >
          <div
            className="text-2xl md:text-3xl font-black tracking-tight mb-1"
            style={{ color: 'var(--accent-primary)' }}
          >
            {stat.value}
          </div>
          <div className="text-sm font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>
            {stat.label}
          </div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {stat.desc}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Individual Stat Story Card ── */
function StoryCard({ stat, index }) {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1, staggerDelay: 100, index });
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-10 items-start`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Stat Display */}
      <div className="flex-shrink-0 w-full md:w-[280px] lg:w-[320px]">
        <div
          className="rounded-2xl p-7 md:p-8 relative overflow-hidden"
          style={{
            background: `${stat.color}08`,
            border: `1px solid ${stat.color}20`,
          }}
        >
          <div
            className="absolute top-0 left-0 right-0"
            style={{ height: 3, background: stat.gradient }}
          />

          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{stat.icon}</span>
            <span
              className="text-[10px] font-bold tracking-[0.15em] uppercase"
              style={{ color: stat.color, fontFamily: 'var(--font-display)' }}
            >
              {stat.label}
            </span>
          </div>

          <div
            className="text-4xl md:text-5xl font-black tracking-tight mb-2"
            style={{
              background: stat.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {stat.value}
          </div>

          <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            {stat.subtitle}
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="flex-1 min-w-0">
        <h3
          className="text-xl md:text-2xl font-extrabold mb-3 leading-tight"
          style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
        >
          {stat.headline}
        </h3>

        <div className="space-y-4">
          <div>
            <div
              className="text-[11px] font-bold tracking-[0.15em] uppercase mb-2"
              style={{ color: stat.color, fontFamily: 'var(--font-display)' }}
            >
              Why This Matters
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {stat.significance}
            </p>
          </div>

          <div>
            <div
              className="text-[11px] font-bold tracking-[0.15em] uppercase mb-2"
              style={{ color: stat.color, fontFamily: 'var(--font-display)' }}
            >
              Long-Term Wealth Impact
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
              {stat.wealth}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── R-Multiple Bar Chart ── */
function RMultipleChart() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  const chartData = CHART_DATA;

  const maxR = Math.max(...chartData.map(d => d.r));
  const barMaxWidth = 100;

  return (
    <div
      ref={ref}
      className="mt-24 max-w-4xl mx-auto"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="text-center mb-10">
        <span className="section-label">R-Multiple by Asset</span>
        <h2 className="section-title">
          Monthly R-Multiple{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Per Asset
          </span>
        </h2>
        <p className="section-subtitle mx-auto">
          Average monthly R-multiple earned by each asset. Weighted average across all 7 assets: <strong>1.9R/month</strong>.
        </p>
      </div>

      <div
        className="rounded-2xl p-6 md:p-10"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
        }}
      >
        {/* Y-axis label */}
        <div className="flex items-end justify-between gap-4">
          {/* Y-axis */}
          <div className="flex flex-col items-end gap-[18px] md:gap-[22px] pr-3 pt-2 flex-shrink-0">
            <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>4R</span>
            <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>3R</span>
            <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>2R</span>
            <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>1R</span>
            <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>0R</span>
          </div>

          {/* Bars */}
          <div className="flex-1">
            <div className="flex flex-col gap-3 md:gap-4">
              {chartData.map((d, i) => {
                const widthPct = (d.r / maxR) * barMaxWidth;
                const delay = 0.1 + i * 0.06;

                return (
                  <div key={d.asset} className="flex items-center gap-3 md:gap-4">
                    <span
                      className="text-[11px] font-bold w-16 md:w-20 text-right flex-shrink-0"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {d.asset}
                    </span>
                    <div className="flex-1 relative h-8 md:h-10">
                      {/* Background track */}
                      <div
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: 'var(--bg-tertiary)',
                          opacity: 0.5,
                        }}
                      />
                      {/* Filled bar */}
                      <div
                        className="absolute inset-y-0 left-0 rounded-lg flex items-center px-3"
                        style={{
                          width: isVisible ? `${widthPct}%` : '0%',
                          background: `linear-gradient(90deg, ${d.color}, ${d.color}cc)`,
                          boxShadow: `0 0 12px ${d.color}40`,
                          transition: `width 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                        }}
                      >
                        {isVisible && (
                          <span className="text-xs font-bold whitespace-nowrap" style={{ color: '#fff' }}>
                            {d.label}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Average line callout */}
        <div
          className="mt-6 pt-5 text-center"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Weighted average:{' '}
            <span
              className="font-bold text-base"
              style={{ color: '#06b6d4' }}
            >
              1.9R / month
            </span>
            {' '}· 293 total R's earned · Accounts for every trade across all 7 assets
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Asset Breakdown Table ── */
function AssetTable() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="mt-24"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="text-center mb-10">
        <span
          className="section-label"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.5s ease',
          }}
        >
          Asset Breakdown
        </span>
        <h2
          className="section-title"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.5s ease 0.1s',
          }}
        >
          Every Asset, Every Number
        </h2>
        <p
          className="section-subtitle mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.5s ease 0.2s',
          }}
        >
          Detailed performance data for each of the 7 assets tracked live — crypto, forex, and gold.
          All numbers from real execution with real capital.
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-hidden rounded-2xl" style={{ border: '1px solid var(--border-color)' }}>
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--bg-tertiary)' }}>
              <Th>Asset</Th>
              <Th>Class</Th>
              <Th>Win Rate</Th>
              <Th>Profit Factor</Th>
              <Th>Sharpe</Th>
              <Th>Max DD</Th>
              <Th>Avg R/Mo</Th>
              <Th>Trades/Mo</Th>
              <Th>Final Balance</Th>
              <Th>Months</Th>
            </tr>
          </thead>
          <tbody>
            {ASSETS.map((a, i) => (
              <tr
                key={a.symbol}
                style={{
                  background: i % 2 === 0 ? 'transparent' : 'var(--bg-card)',
                  borderTop: '1px solid var(--border-color)',
                }}
              >
                <Td>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: a.color }}
                    />
                    <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{a.symbol}</span>
                  </div>
                </Td>
                <Td><span style={{ color: 'var(--text-secondary)' }}>{a.class}</span></Td>
                <Td><span className="font-semibold" style={{ color: '#5ed29c' }}>{a.winRate}</span></Td>
                <Td><span className="font-semibold" style={{ color: '#f59e0b' }}>{a.profitFactor}</span></Td>
                <Td><span className="font-semibold" style={{ color: '#4facfe' }}>{a.sharpe}</span></Td>
                <Td><span className="font-semibold" style={{ color: '#ef4444' }}>{a.maxDD}</span></Td>
                <Td><span className="font-semibold" style={{ color: '#06b6d4' }}>{a.avgRMnth}R</span></Td>
                <Td><span style={{ color: 'var(--text-secondary)' }}>{a.avgTrades}</span></Td>
                <Td><span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>{a.finalBalance}</span></Td>
                <Td><span style={{ color: 'var(--text-secondary)' }}>{a.months}</span></Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {ASSETS.map((a) => (
          <div
            key={a.symbol}
            className="rounded-2xl p-5"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: a.color }} />
              <div>
                <div className="font-bold" style={{ color: 'var(--text-primary)' }}>{a.symbol}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{a.name} · {a.class}</div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-sm font-bold" style={{ color: 'var(--accent-primary)' }}>{a.finalBalance}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{a.months} months</div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 text-center">
              <MobileStat label="Win Rate" value={a.winRate} color="#5ed29c" />
              <MobileStat label="PF" value={a.profitFactor} color="#f59e0b" />
              <MobileStat label="Sharpe" value={a.sharpe} color="#4facfe" />
              <MobileStat label="Max DD" value={a.maxDD} color="#ef4444" />
              <MobileStat label="R/Mo" value={`${a.avgRMnth}R`} color="#06b6d4" />
              <MobileStat label="Trades" value={a.avgTrades} color="var(--text-secondary)" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Table Helpers ── */
function Th({ children }) {
  return (
    <th className="px-4 py-3.5 text-left text-xs font-bold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
      {children}
    </th>
  );
}

function Td({ children }) {
  return <td className="px-4 py-3.5 text-sm">{children}</td>;
}

function MobileStat({ label, value, color }) {
  return (
    <div>
      <div className="text-xs font-bold" style={{ color }}>{value}</div>
      <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{label}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════════ */
export default function PerformanceResults() {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.05 });

  return (
    <section id="performance" className="section relative overflow-hidden">
      {/* Glows */}
      <div
        className="glow pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(94,210,156,0.05), transparent)',
          top: '5%',
          left: -250,
          filter: 'blur(100px)',
        }}
      />
      <div
        className="glow pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(79,172,254,0.04), transparent)',
          bottom: '10%',
          right: -200,
          filter: 'blur(80px)',
        }}
      />

      <div className="container" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="section-label"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease',
            }}
          >
            Live Results
          </span>
          <h2
            className="section-title"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease 0.1s',
            }}
          >
            Proven Across Markets.{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Built for Wealth.
            </span>
          </h2>
          <p
            className="section-subtitle mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease 0.2s',
            }}
          >
            Every number on this page comes from live execution with real capital — spanning 7 assets,
            29 months, and hundreds of trades. Here is what each metric means and why it matters
            for building lasting wealth.
          </p>
        </div>

        {/* Headline Stats Bar */}
        <HeadlineBar />

        {/* Story Cards */}
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
          {PERFORMANCE_STORIES.map((stat, i) => (
            <StoryCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* R-Multiple Chart */}
        <RMultipleChart />

        {/* Asset Breakdown Table */}
        <AssetTable />

        {/* Bottom Callout */}
        <div
          className="text-center mt-20 max-w-2xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.7s ease 0.5s',
          }}
        >
          <div className="p-8 rounded-2xl liquid-glass">
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              These results represent live, automated execution of a systematic trading strategy.
              Past performance does not guarantee future results, but statistically significant track
              records across multiple market cycles provide the highest-confidence evidence available.
              <br /><br />
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                The system does the work. Time does the compounding. You do the living.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
