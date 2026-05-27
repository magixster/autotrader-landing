import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base for GitHub Pages subfolder deployment
  base: process.env.GITHUB_ACTIONS ? '/autotrader-landing/' : '/',
})
