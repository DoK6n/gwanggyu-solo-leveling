import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    manifest: true,
    outDir: 'dist'
  },
  publicDir: 'static',
  server: {
    port: 3000
  }
});
