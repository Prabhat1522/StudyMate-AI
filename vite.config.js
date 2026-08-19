import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Tailwind v4 integrates via Vite plugin — no tailwind.config.js needed
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Allows clean imports like: import Button from '@/components/common/Button'
      '@': `${import.meta.dirname}/src`,
    },
  },
})
