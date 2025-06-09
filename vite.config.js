import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  host: true, // escuta em 0.0.0.0
  port: process.env.PORT || 4173,
  allowedHosts: ['all'], // permite todos os hosts externos
})
