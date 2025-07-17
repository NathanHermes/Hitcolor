import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "./src",
      "@assets": "./src/assets",
      "@components": "./src/components",
    }
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})
