export const PLATFORMS = [
  {
    name: 'MetaTrader 5',
    subtitle: 'Forex & CFDs',
    description: 'Full MT5 terminal integration via the MetaTrader5 Python package. Supports pending orders, market execution, dual trades, and real-time position tracking across multiple accounts.',
    features: ['Pending & Market Orders', 'Dual Trade (Runner)', 'Breakeven Management', 'Multi-Account'],
    gradient: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    icon: '📈',
  },
  {
    name: 'Tradovate',
    subtitle: 'Futures',
    description: 'REST API integration for futures trading. 3-strategy contract resolution with automatic fallbacks. Supports bracket orders, OCO, and prop firm account overrides.',
    features: ['Bracket Orders (SL/TP)', '3-Strat Contract Resolution', 'Prop Firm Overrides', 'Fill History Sync'],
    gradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
    icon: '⚡',
  },
  {
    name: 'TradingView',
    subtitle: 'Pine Script',
    description: 'Seamless Pine Script integration via JSON webhooks. Supports setup, market, entry_dual, runner_exit, cancel, and close event types with automatic platform detection.',
    features: ['6 Event Types', 'Auto Platform Detection', 'Live Signal Updates', 'Test Alert Mode'],
    gradient: 'linear-gradient(135deg, #059669, #047857)',
    icon: '📊',
  },
  {
    name: 'Prop Firms',
    subtitle: 'FundedNext · 5ers',
    description: 'Per-account product map overrides for prop firm instances. Configure custom product names for FundedNext, 5ers, or any broker with different futures contract naming.',
    features: ['Custom Product Maps', 'Per-Account Config', 'Fallback Resolution', 'Demo Account Support'],
    gradient: 'linear-gradient(135deg, #d97706, #b45309)',
    icon: '🏆',
  },
];
