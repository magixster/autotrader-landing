import { TrendingUp, Webhook, Bell, Smartphone, DollarSign, BarChart3 } from 'lucide-react';

export const SIGNAL_STEPS = [
  {
    icon: TrendingUp,
    title: 'Pine Script Scans Markets',
    subtitle: 'TradingView Analysis',
    description: 'Our production Pine Script strategies scan BTCUSD, ETHUSD, EURUSD, and more across multiple timeframes. When high-conviction setups align, a signal is generated with precise entry, SL, and TP levels.',
    color: '#4facfe',
  },
  {
    icon: Webhook,
    title: 'Signal Is Validated',
    subtitle: 'Webhook Processing',
    description: 'The signal passes through our validation layer — duplicate check, risk score calculation, and market condition verification. Only validated signals make it to the dispatch queue.',
    color: '#06b6d4',
  },
  {
    icon: Bell,
    title: 'Alert Is Dispatched',
    subtitle: 'Pre-Trade Notification',
    description: 'Before the automated system executes, the signal is dispatched to all subscribers simultaneously. You receive it with enough time to review the setup and decide if you want to take the trade.',
    color: '#f59e0b',
  },
  {
    icon: Smartphone,
    title: 'Receive Instantly',
    subtitle: 'Telegram + Email + SMS',
    description: 'Signals arrive in your Telegram channel, email inbox, or SMS (Pro plans). Each alert includes: asset, direction (long/short), entry price, stop loss, take profit targets, and a brief rationale.',
    color: '#8b5cf6',
  },
  {
    icon: DollarSign,
    title: 'Trade or Skip',
    subtitle: 'Your Choice',
    description: 'You decide whether to take the trade. No automated execution — you stay in full control. Use the provided levels on your own broker, copy them into your platform, or simply follow along.',
    color: '#5ed29c',
  },
  {
    icon: BarChart3,
    title: 'Track the Results',
    subtitle: 'Performance Dashboard',
    description: 'Every signal is tracked end-to-end. You get weekly performance recap emails showing win rate, R-multiple, drawdown, and comparison to our automated execution results. Full transparency.',
    color: '#ef4444',
  },
];
