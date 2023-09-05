import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(new URL('.', import.meta.url).pathname),
    },
  },
});
