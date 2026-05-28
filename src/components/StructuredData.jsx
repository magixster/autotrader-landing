import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getAutoTraderSchema,
  getPineSignalsSchema,
  getFAQSchema,
  getBreadcrumbSchema,
} from '../utils/seo';
import { FAQ_ITEMS } from '../data/signalsFAQ';

export default function StructuredData() {
  const location = useLocation();

  useEffect(() => {
    // Remove any previously injected JSON-LD scripts
    document.querySelectorAll('script[data-ld="autotrader"]').forEach((s) => s.remove());

    const schemas = [];

    // Schemas that apply to every page
    schemas.push(getAutoTraderSchema());

    // /pine-signals pages also get Product + FAQ schemas
    if (location.pathname.startsWith('/pine-signals')) {
      schemas.push(getPineSignalsSchema());
      schemas.push(getFAQSchema(FAQ_ITEMS));
    }

    schemas.push(getBreadcrumbSchema(location.pathname));

    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-ld', 'autotrader');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-ld="autotrader"]').forEach((s) => s.remove());
    };
  }, [location.pathname]);

  return null;
}
