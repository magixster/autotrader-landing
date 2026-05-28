import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // This tells Vite to prepend your repository name to ALL compiled assets in production
  // Uses `mode` (injected by Vite) instead of process.env.NODE_ENV, which isn't set during build
  base: mode === 'production' ? '/autotrader-landing/' : '/',
}))