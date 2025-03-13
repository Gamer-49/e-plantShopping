import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://gamer-49.github.io/e-plantshopping/",
  plugins: [react()],
})
