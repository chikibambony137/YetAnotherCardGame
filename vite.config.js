import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      // Создаем алиас для папки public
      // чтобы мы могли использовать абсолютные пути в нашем коде
      '@': path.resolve(__dirname, './src'),
    },
  },
})
