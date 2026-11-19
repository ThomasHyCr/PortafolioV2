import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // A relative base works both on a GitHub Pages project site and on a fork
  // with a different repository name.
  base: './',
})
