import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  },
  optimizeDeps: {
    include: ['@vuelidate/core/lib', '@vuelidate/core/lib/validators']
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
