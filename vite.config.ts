import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function serveSitemapPlugin(): Plugin {
  const attach = (middlewares: any, dir: string) => {
    middlewares.use((req: any, res: any, next: any) => {
      const cleanUrl = String(req.url || '').split('?')[0];
      if (cleanUrl === '/sitemap.xml' || cleanUrl === '/sitemap.xsl') {
        const filePath = path.resolve(__dirname, dir, cleanUrl.slice(1));
        if (fs.existsSync(filePath)) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/xml; charset=utf-8');
          res.setHeader('Cache-Control', 'no-cache');
          res.end(fs.readFileSync(filePath));
          return;
        }
      }
      next();
    });
  };
  return {
    name: 'serve-sitemap-xml',
    configureServer(server) {
      attach(server.middlewares, 'public');
    },
    configurePreviewServer(server) {
      attach(server.middlewares, 'dist');
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [serveSitemapPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    optimizeDeps: {
      entries: [
        'index.html',
        'src/main.tsx',
        'src/components/finder/ExplorePage.tsx',
        'src/pages/PlaceListingPage.tsx',
        'src/pages/PlaceMenuPage.tsx',
        'src/pages/ThingsListingPage.tsx',
        'src/components/finder/NearMePage.tsx',
      ],
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'react-helmet-async',
        'react-i18next',
        'i18next',
        'lucide-react',
        'motion',
        'motion/react',
        'zustand',
        'clsx',
        'tailwind-merge',
      ],
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  };
});
