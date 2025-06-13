import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
 //dev env
    host: true,
    port: 5173
  },
  preview: {
    // setup prod env render
    host: true,
    port: 10000, 
    allowedHosts: [
      'myfit.health',
      'myfit-2lu2.onrender.com'
    ]
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});

