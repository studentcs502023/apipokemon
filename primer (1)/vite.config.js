import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})

// vite.config.js
export default {
  base: './', // 👈 Esto hace que las rutas sean relativas (necesario en Vercel)
};
