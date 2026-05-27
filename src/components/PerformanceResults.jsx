import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

/* ═══════════════════════════════════════════════════════════════
   ASSET DATA — All 7 assets tracked live
   ═══════════════════════════════════════════════════════════════ */

const ASSETS = [
  { symbol: 'BTCUSD', name: 'Bitcoin', class: 'Crypto', winRate: '63%', profitFactor: '2.55', sharpe: '4.20', maxDD: '-3.25%', avgRMnth: '4.22', avgTrades: '7.4', months: 29, finalBalance: '$162,000', color: '#f7931a', gradient: 'linear-gradient(135deg, #f7931a, #ffae4a)' },
  { symbol: 'ETHUSD', name: 'Ethereum', class: 'Crypto', winRate: '56.2%', profitFactor: '1.93', sharpe: '3.38', maxDD: '-3.00%', avgRMnth: '2.83', avgTrades: '6.9', months: 29, finalBalance: '$140,750', color: '#627eea', gradient: 'linear-gradient(135deg, #627eea, #8b9cf7)' },
  { symbol: 'EURUSD', name: 'Euro / USD', class: 'Forex', winRate: '52.7%', profitFactor: '1.67', sharpe: '2.69', maxDD: '-3.50%', avgRMnth: '1.76', avgTrades: '5.5', months: 10, finalBalance: '$108,750', color: '#2563eb', gradient: 'linear-gradient(135deg, #2563eb, #3b82f6)' },
  { symbol: 'XAUUSD', name: 'Gold', class: 'Commodity', winRate: '61.9%', profitFactor: '2.44', sharpe: '2.08', maxDD: '-2.00%', avgRMnth: '1.05', avgTrades: '1.9', months: 11, finalBalance: '$105,750', color: '#d97706', gradient: 'linear-gradient(135deg, #d97706, #f59e0b)' },
  { symbol: 'USDCAD', name: 'USD / CAD', class: 'Forex', winRate: '52.7%', profitFactor: '1.67', sharpe: '1.35', maxDD: '-1.75%', avgRMnth: '0.70', avgTrades: '2.2', months: 41, finalBalance: '$114,500', color: '#dc2626', gradient: 'linear-gradient(135deg, #dc2626, #ef4444)' },
  { symbol: 'NZDUSD', name: 'NZD / USD', class: 'Forex', winRate: '52.2%', profitFactor: '1.64', sharpe: '3.27', maxDD: '-2.25%', avgRMnth: '2.07', avgTrades: '6.9', months: 10, finalBalance: '$110,500', color: '#0891b2', gradient: 'linear-gradient(135deg, #0891b2, #06b6d4)' },
  { symbol: 'USDCHF', name: 'USD / Swiss Franc', class: 'Forex', winRate: '57.9%', profitFactor: '2.06', sharpe: '2.13', maxDD: '-1.00%', avgRMnth: '0.95', avgTrades: '2.1', months: 9, finalBalance: '$104,250', color: '#7c3aed', gradient: 'linear-gradient(135deg, #7c3aed, #8b5cf6)' },
];

/* ═══════════════════════════════════════════════════════════════
   HEADLINE STATS
   ═══════════════════════════════════════════════════════════════ */

const HEADLINE_STATS = [
  { value: '$846K', label: 'Combined Portfolio', desc: 'Across 7 live assets' },
  { value: '672', label: 'Total Trades', desc: 'Real capital, real execution' },
  { value: '293', label: 'Total R\'s Earned', desc: 'Risk-unit compounding' },
  { value: '29', label: 'Months Live', desc: 'Jun 2024 – May 2026' },
];

/* ═══════════════════════════════════════════════════════════════
   STORY DATA
   ═══════════════════════════════════════════════════════════════ */

const PERFORMANCE_STORIES = [
  // ── 1. Win Rate ──
  {
    value: '63%',
    label: 'Win Rate',
    subtitle: 'BTCUSD · 136 wins / 80 losses · 216 trades',
    gradient: 'linear-gradient(135deg, #5ed29c, #059669)',
    color: '#5ed29c',
    icon: '🎯',
    headline: 'Consistency Over Luck',
    significance: 'A 63% win rate across 216 trades and 29 months is statistically significant — not a lucky streak. With 136 winners against 80 losers, the ratio is 1.7:1. Across all 7 assets, the average win rate stands at 56.6%, consistently above break-even across crypto, forex, and commodities. This is the hallmark of a strategy that identifies genuine market inefficiencies, not random noise.',
    wealth: 'A consistently positive win rate means your account equity trends upward over time. Each winning trade compounds your capital while losses stay contained by strict risk management. Over months and years, this predictable asymmetry creates the mathematical foundation of long-term wealth.',
  },
  // ── 2. Sharpe Ratio ──
  {
    value: '4.2',
    label: 'Sharpe Ratio',
    subtitle: 'BTCUSD · Average across all assets: 2.73',
    gradient: 'linear-gradient(135deg, #4facfe, #2563eb)',
    color: '#4facfe',
    icon: '📐',
    headline: 'Institutional-Grade Efficiency',
    significance: 'Top hedge funds target Sharpe ratios of 1.0–2.0. A Sharpe ratio of 4.2 means the strategy generates 4.2 units of return for every unit of volatility — indicating remarkably smooth equity growth with minimal drawdowns. The average Sharpe across all 7 assets is 2.73, confirming this is not a one-off result but a repeatable characteristic of the system.',
    wealth: 'High Sharpe ratios translate to fewer emotional ups and downs. When your equity curve is smooth, you stay disciplined — you do not panic-sell during drawdowns or get euphoric during winning streaks. You stay invested, and compounding does its work uninterrupted.',
  },
  // ── 3. Profit Factor ──
  {
    value: '2.55',
    label: 'Profit Factor',
    subtitle: 'BTCUSD · Average across all assets: 1.99',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    color: '#f59e0b',
    icon: '⚡',
    headline: 'Every Dollar, Magnified',
    significance: 'A profit factor of 2.55 means for every $1 of losses, the system generates $2.55 in profits. Gross profits consistently outpace gross losses by more than 2.5×. The average across all 7 assets is 1.99 — meaning nearly every market traded shows positive mathematical expectancy. This is the engine that drives long-term growth, independent of market direction.',
    wealth: 'Positive expectancy is the only thing that mathematically matters for long-term wealth. A system with a profit factor above 2.0 will grow your account steadily regardless of short-term market conditions. This is the difference between gambling (negative expectancy) and investing (positive expectancy).',
  },
  // ── 4. Max Drawdown ──
  {
    value: '−3.25%',
    label: 'Max Drawdown',
    subtitle: 'BTCUSD · Average across all assets: −2.39%',
    gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
    color: '#ef4444',
    icon: '🛡️',
    headline: 'Capital Preservation First',
    significance: 'The worst peak-to-trough drawdown across 29 months of BTC trading was just -3.25%. Buy-and-hold Bitcoin experienced multiple -50%+ drawdowns in the same period. The average max drawdown across all 7 assets is only -2.39%. This capital preservation is achieved through risk-based position sizing — each trade risks exactly 0.5% of account balance.',
    wealth: 'The #1 rule of compounding is: do not lose money. A -50% loss requires a +100% gain just to break even. By limiting drawdowns to -3.25%, the system ensures every recovery is quick and compounding resumes without needing heroic gains. This is sleep-well-at-night trading.',
  },
  // ── 5. Backtested vs Live Data ──
  {
    value: 'Live',
    label: 'Forward-Tested',
    subtitle: '29 months · 672 trades · 7 assets · Real capital',
    gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
    color: '#a78bfa',
    icon: '🔬',
    headline: 'From Backtest to Reality',
    significance: 'Most trading systems look great in backtest and fall apart live. The difference is data snooping, overfitting, and curve-fitting — where a strategy is optimised to perfection on past data but fails in real market conditions. This system\'s 29-month live track record across 7 assets is the gold standard of validation. Every trade was executed with real capital, real slippage, real commissions, and real market impact. There is no gap between theory and practice — the numbers you see are the numbers that were achieved.',
    wealth: 'A backtest tells you what could have happened. A 29-month live track record tells you what did happen — across bull markets, bear markets, ranging conditions, and high-volatility events. When you commit capital to a system with a verified live track record, you are not betting on a theory. You are betting on evidence. And evidence is what allows you to scale confidently.',
  },
  // ── 6. Less Trading / Quality Over Quantity ──
  {
    value: '4.7',
    label: 'Avg Trades/Mo',
    subtitle: 'Per asset · Range: 1.9 (XAU) to 7.4 (BTC)',
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    color: '#f472b6',
    icon: '🎯',
    headline: 'Less Trading, More Winning',
    significance: 'The system averages just 4.7 trades per month per asset. Gold (XAUUSD) trades as few as 1.9 times per month, while BTCUSD trades 7.4 times. This is not random activity — every trade is a high-conviction setup that meets strict criteria. In trading, activity is the enemy of returns. Overtrading leads to higher transaction costs, emotional fatigue, and diluted edge. By trading only when the setup fires, the system maximizes quality over quantity.',
    wealth: 'Less trading means lower commissions, less slippage, and fewer emotional decisions. It means your compounding engine runs efficiently without being eroded by transaction costs. Over a year, 4.7 high-quality trades per month at 0.57R per trade outperforms 47 low-quality trades near break-even. The secret to wealth is not trading more — it is trading only what matters.',
  },
  // ── 7. Monthly R Multiple ──
  {
    value: '1.9R',
    label: 'Avg Monthly R',
    subtitle: 'Weighted across all 7 assets · 293 total R\'s earned',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    color: '#06b6d4',
    icon: '📊',
    headline: 'The R-Multiple Engine',
    significance: 'R-multiple is the universal currency of trading performance — it measures return relative to risk, independent of account size. The system earns an average of 1.9R per month across all assets, with BTCUSD leading at 4.22R/month. Total R\'s earned across all 7 assets: 293 — meaning over nearly 3 years, the system generated 293 times its initial risk unit. This is the cleanest measure of trading edge because it strips away account size and focuses purely on risk-adjusted execution.',
    wealth: 'R-multiple thinking is how professional traders scale from small accounts to institutional capital. If your system earns 2R per month, it does not matter if your account is $10,000 or $10,000,000 — the expectancy scales proportionally. You grow by adding more risk units, not by taking larger risks. This is the framework that allows wealth to scale without limit.',
  },
  // ── 8. Diversification for Drawdown ──
  {
    value: '7',
    label: 'Diversified Assets',
    subtitle: 'BTC · ETH · EURUSD · XAU · USDCAD · NZDUSD · USDCHF',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    color: '#10b981',
    icon: '🌐',
    headline: 'Diversification: The Least Drawdown Path',
    significance: 'The system tracks 7 major assets across 3 asset classes: crypto (BTC, ETH), forex (EURUSD, USDCAD, NZDUSD, USDCHF), and commodities (XAUUSD/Gold). Each asset has independent market drivers and uncorrelated return streams. When crypto is ranging, forex trends. When gold consolidates, BTC breaks out. The result: the combined portfolio\'s average max drawdown across all assets is just -2.39%, with the worst single drawdown at -3.5% (EURUSD). Compare this to buy-and-hold Bitcoin\'s -50%+ drawdowns — diversification reduced drawdown risk by over 90%.',
    wealth: 'Diversification is the only free lunch in finance. By spreading risk across multiple uncorrelated assets, portfolio volatility drops while returns remain strong. A drawdown in one asset is offset by gains in another — keeping your total equity curve smooth and your compounding uninterrupted. The combined portfolio of $846K is greater than the sum of its parts because the assets work together to minimize the valleys while keeping the peaks.',
  },
  // ── 9. Prop Firm Trading ──
  {
    value: '−2.39%',
    label: 'Avg Max DD',
    subtitle: 'Well within typical 5-10% prop firm limits',
    gradient: 'linear-gradient(135deg, #e879f9, #c026d3)',
    color: '#e879f9',
    icon: '🏆',
    headline: 'Built for Prop Firm Success',
    significance: 'Prop firms impose strict rules: maximum drawdown limits (typically 5-10%), consistency requirements, and minimum trading day quotas. Most traders fail not because they lack strategy, but because they cannot control risk. This system\'s average max drawdown of -2.39% across all 7 assets sits well within even the strictest prop firm limits. The risk-based position sizing (0.5% per trade) is precisely the disciplined approach prop firms demand. The system\'s consistent monthly returns (positive in nearly every month across all assets) demonstrate exactly the kind of steady, repeatable performance that prop firms reward with capital increases.',
    wealth: 'Prop firm capital is leverage without personal risk — you trade the firm\'s money and split the profits. A system that can consistently pass prop firm evaluations and stay within drawdown limits gives you access to exponentially more capital than your own savings. Scaling from a $100K personal account to managing $1M in prop firm capital compounds your earning potential 10× without increasing your personal risk. This is the fast track from retail trader to professional capital manager.',
  },
  // ── 10. Scaling Multiple Accounts ──
  {
    value: '∞',
    label: 'Scalable Accounts',
    subtitle: 'Unlimited MT5 + Tradovate · Per-account config',
    gradient: 'linear-gradient(135deg, #fb923c, #ea580c)',
    color: '#fb923c',
    icon: '🚀',
    headline: 'Scale Without Limits',
    significance: 'The system is architected for multi-account execution from day one. A single TradingView signal can route orders to unlimited MT5 and Tradovate accounts simultaneously — each with independent risk settings, product maps, and execution parameters. You can run the same strategy across your personal account, your prop firm accounts, your spouse\'s account, and your fund\'s accounts, all from one alert. Each account independently manages its own position sizing based on its unique balance and risk profile.',
    wealth: 'Scaling from one account to ten accounts is the single fastest way to multiply your returns without increasing risk per trade. If your personal account earns 2% per month, adding nine more accounts with identical strategies means 10× the total return — without taking 10× the risk on any single trade. Multi-account scaling is how systematic traders turn a good system into life-changing wealth. The infrastructure is already in place; the only limit is how many accounts you connect.',
  },
  // ── 11. Months of Live Data ──
  {
    value: '29',
    label: 'Months of Live Data',
    subtitle: 'Jun 2024 – May 2026 · Every market condition',
    gradient: 'linear-gradient(135deg, #f472b6, #db2777)',
    color: '#f472b6',
    icon: '📅',
    headline: 'Proven Across Market Cycles',
    significance: '29 months of live trading covers bull runs, bear markets, ranging conditions, and high-volatility events. The system has navigated every major market environment with zero-trade months occurring only on select low-frequency assets (XAUUSD had 2 in 11 months). This is not a backtest, a paper trade, or an optimised simulation — every data point comes from live execution with real capital, real slippage, real commissions, and real market impact.',
    wealth: 'A track record across multiple market cycles is the only evidence that truly matters. Any system can work in a bull market. A system that delivers 63% win rate, 4.2 Sharpe, 2.55 profit factor, and -3.25% max drawdown through 29 months across 7 assets has proven it can build wealth in any environment. This is evidence, not theory — and evidence is what lets you commit capital with confidence.',
  },
];

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

  const chartData = [
    { asset: 'BTCUSD', r: 4.22, color: '#f7931a', label: '4.22R' },
    { asset: 'ETHUSD', r: 2.83, color: '#627eea', label: '2.83R' },
    { asset: 'NZDUSD', r: 2.07, color: '#0891b2', label: '2.07R' },
    { asset: 'EURUSD', r: 1.76, color: '#2563eb', label: '1.76R' },
    { asset: 'XAUUSD', r: 1.05, color: '#d97706', label: '1.05R' },
    { asset: 'USDCHF', r: 0.95, color: '#7c3aed', label: '0.95R' },
    { asset: 'USDCAD', r: 0.70, color: '#dc2626', label: '0.70R' },
  ];

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
