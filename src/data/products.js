import { Bot, TrendingUp } from 'lucide-react';

export const PRODUCTS = [
  {
    id: 'autotrader',
    name: 'AutoTrader',
    tagline: 'Fully automated trading execution',
    description: 'Deploy Pine Script strategies to MT5 and Tradovate simultaneously. Dual-leg entries, risk-based sizing, Telegram alerts, Docker deployment — a complete automation infrastructure that runs 24/7.',
    icon: Bot,
    gradient: 'linear-gradient(135deg, #5ed29c, #059669)',
    color: '#5ed29c',
    stats: [
      { value: '63%', label: 'Win Rate' },
      { value: '672', label: 'Trades Executed' },
      { value: '7', label: 'Assets Tracked' },
    ],
    links: [
      { label: 'View Performance', to: '/performance' },
      { label: 'See Pricing', to: '/pricing' },
    ],
    features: ['Multi-platform execution', 'Risk-based position sizing', 'Dual-leg entry + runners', 'Docker deploy ready'],
  },
  {
    id: 'pinesignals',
    name: 'PineSignals',
    tagline: 'Real-time trade alerts before execution',
    description: 'Get the same high-conviction signals our automated system trades — delivered to your phone, email, or Telegram before the order hits the market. Monthly subscription, no setup required.',
    icon: TrendingUp,
    gradient: 'linear-gradient(135deg, #4facfe, #2563eb)',
    color: '#4facfe',
    stats: [
      { value: '63%', label: 'Win Rate' },
      { value: '4.2', label: 'Sharpe Ratio' },
      { value: '1.9R', label: 'Avg Monthly' },
    ],
    links: [
      { label: 'Explore PineSignals', to: '/pine-signals' },
      { label: 'Subscribe Now', to: '/pine-signals#pricing' },
    ],
    features: ['Pre-trade signal delivery', 'Telegram + Email alerts', 'Entry, SL & TP included', 'No setup or config needed'],
  },
];
