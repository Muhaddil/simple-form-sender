import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  build: {
    target: 'ESNext',
    rollupOptions: {
      input: [
        'index.html',
        'form1.html',
        'form2.html',
        'form3.html',
        'trasladosform.html',
        'SAFDForm1.html',
        'SAFDForm2.html',
        'SAFDForm3.html',
      ],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
