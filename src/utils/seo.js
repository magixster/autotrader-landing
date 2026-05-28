/**
 * Structured data (JSON-LD) generators for SEO.
 */

/** SoftwareApplication schema for AutoTrader */
export function getAutoTraderSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AutoTrader',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Linux, macOS, Windows',
    description:
      'Fully automated trading system that bridges TradingView Pine Script strategies to multi-platform execution on MT5 and Tradovate. Supports dual-leg entries, risk-based sizing, and Docker deployment.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free Starter plan with paid Pro ($29/mo) and Enterprise ($99/mo) tiers',
    },
    author: {
      '@type': 'Person',
      name: 'AutoTrader Team',
    },
  };
}

/** Product schema for PineSignals */
export function getPineSignalsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'PineSignals',
    description:
      'Real-time trade alerts delivered before execution. Get the same high-conviction signals our automated system trades — on Telegram, email, or SMS. Monthly subscription, no setup required.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '19',
      highPrice: '79',
      offerCount: '3',
      offers: [
        { '@type': 'Offer', name: 'Starter', price: '19', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Pro', price: '39', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Elite', price: '79', priceCurrency: 'USD' },
      ],
    },
    brand: {
      '@type': 'Brand',
      name: 'AutoTrader',
    },
  };
}

/** BreadcrumbList schema — pass current path segments */
export function getBreadcrumbSchema(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://sachinn.github.io/autotrader-landing/',
    },
  ];

  let accumulated = '';
  segments.forEach((seg, i) => {
    accumulated += `/${seg}`;
    const label = seg
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
    items.push({
      '@type': 'ListItem',
      position: i + 2,
      name: label,
      item: `https://sachinn.github.io/autotrader-landing${accumulated}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

/** FAQPage schema — pass in your FAQ items array */
export function getFAQSchema(faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
