import { defineConfig, type UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config: UserConfigExport = {
  plugins: [
    react(),
    tailwindcss(),
  ],
}

export default defineConfig(config)
