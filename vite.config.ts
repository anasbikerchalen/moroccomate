import path from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
            if (id.includes('src/listings/eat')) {
              return 'listings-eat';
            }
            if (id.includes('src/listings/sleep')) {
              return 'listings-sleep';
            }
            if (id.includes('src/listings/things')) {
              return 'listings-things';
            }
            if (id.includes('src/listings/shop')) {
              return 'listings-shop';
            }
            if (id.includes('src/components/finder')) {
              return 'finder';
            }
            if (id.includes('src/data/cities') || id.includes('src/data/tourismAreas')) {
              return 'city-data';
            }
          },
        },
      },
    },
  };
});
