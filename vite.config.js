import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use /autotrader-landing/ for production (GitHub Pages subfolder), / for dev
  base: mode === 'production' ? '/autotrader-landing/' : '/',
}))
