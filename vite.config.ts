import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("src/listings/eat")) {
            return "listings-eat";
          }
          if (id.includes("src/listings/sleep")) {
            return "listings-sleep";
          }
          if (id.includes("src/listings/things")) {
            return "listings-things";
          }
          if (id.includes("src/listings/shop")) {
            return "listings-shop";
          }
          if (id.includes("src/components/finder")) {
            return "finder";
          }
          if (id.includes("src/data/cities") || id.includes("src/data/tourismAreas")) {
            return "city-data";
          }
        },
      },
    },
  },
});