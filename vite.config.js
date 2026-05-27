import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Automatically sets base path to the subfolder for production builds
  base: process.env.NODE_ENV === 'production' ? '/autotrader-landing/' : '/',
})