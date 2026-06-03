# AutoTrader Landing

Multi-platform trading automation landing page. Built with React, Vite, and Tailwind CSS with a neumorphic design system.

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — Build tool
- **Tailwind CSS 3** — Utility-first CSS
- **Firebase Firestore** — Contact form backend
- **React Router 7** — Client-side routing
- **Lucide React** — Icons

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your Firebase project keys in .env

# Start dev server
npm run dev
```

## Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start Vite dev server              |
| `npm run build`     | Production build                   |
| `npm run preview`   | Preview production build           |
| `npm run lint`      | Run ESLint                         |
| `npm run preview:prod` | Build + preview               |

## Project Structure

```
src/
├── main.jsx              # App entry point
├── App.jsx               # Router + SPA redirect handler
├── index.css             # Neumorphic design system (Tailwind)
├── context/
│   └── ThemeContext.jsx   # Dark/light mode
├── lib/
│   └── firebase.js       # Firebase client config
├── components/
│   ├── Navbar.jsx         # Top navigation
│   ├── Hero.jsx           # Hero section with decorative elements
│   ├── Ticker.jsx         # Live price ticker
│   ├── Features.jsx       # Features grid
│   ├── HowItWorks.jsx     # Steps section
│   ├── Products.jsx       # Product cards
│   ├── PricingTable.jsx   # Pricing tiers
│   ├── ContactForm.jsx    # Firebase Firestore contact form
│   ├── Footer.jsx         # Site footer
│   └── Layout.jsx         # Shared layout (Navbar + Outlet + Footer)
└── pages/
    ├── HomePage.jsx       # Landng page
    ├── PricingPage.jsx    # Pricing + contact
    ├── PerformancePage.jsx# Live trading metrics
    ├── PineSignalsPage.jsx# Pine Signal Runner info
    └── NotFoundPage.jsx   # 404 page
```

## Deployment

Deployed to GitHub Pages via the `.github/workflows/deploy.yml` workflow.
