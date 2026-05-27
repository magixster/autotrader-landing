import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // This tells Vite to prepend your repository name to ALL compiled assets in production
  base: process.env.NODE_ENV === 'production' ? '/autotrader-landing/' : '/',
})