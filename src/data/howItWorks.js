export const STEPS = [
  {
    num: '01',
    title: 'Pine Script Strategy',
    subtitle: 'TradingView',
    description: 'Your MA bounce or trend alignment strategy runs on TradingView. It calculates ATR-based SL/TP, detects setups, and sends JSON webhook alerts.',
    color: '#5ed29c',
  },
  {
    num: '02',
    title: 'Webhook Bridge',
    subtitle: 'Flask API',
    description: 'The Flask webhook ingests alerts, validates payloads, deduplicates signals, and stores them in SQLite with status tracking and metadata.',
    color: '#4facfe',
  },
  {
    num: '03',
    title: 'Signal Router',
    subtitle: 'SQLite DB',
    description: 'Signals are categorized by event type (setup, market, entry_dual, cancel, runner_exit) and platform (mt5, tradovate). Watchers pick up armed signals.',
    color: '#f59e0b',
  },
  {
    num: '04',
    title: 'Multi-Platform Watchers',
    subtitle: 'MT5 + Tradovate',
    description: 'Dedicated watchers for each platform. MT5 uses the MetaTrader5 terminal API. Tradovate uses REST API with 3-strategy contract resolution and bracket orders.',
    color: '#ef4444',
  },
  {
    num: '05',
    title: 'Position & Risk Manager',
    subtitle: 'Real-Time',
    description: 'Positions are recorded, SL/TP are placed as brackets or pending orders. Risk is calculated per-trade. Runners are managed and breakeven moves executed.',
    color: '#8b5cf6',
  },
  {
    num: '06',
    title: 'P&L Sync & Notifications',
    subtitle: 'Telegram',
    description: 'Closed positions are synced via fill/deal history. Telegram alerts fire on execution, closures, cancellations, and breakeven moves. All P&L is tracked per-position.',
    color: '#06b6d4',
  },
];
