import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      dirs: ["src/components"],
    }),
    Components({
      dirs: ["src/components"],
      deep: true,
    }),
  ],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['.ngrok-free.app']
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  build: {
    // SEO ve Performance Optimizasyonu
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'],
          lenis: ['lenis'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Gzip sıkıştırma
    reportCompressedSize: true,
    // Chunk boyut uyarısı
    chunkSizeWarningLimit: 1000,
    // CSS kod bölme
    cssCodeSplit: true,
    // Source map üretme (production'da false)
    sourcemap: false,
  },
  // Asset optimizasyonu
  assetsInclude: ['**/*.webp', '**/*.avif'],
  // CSS optimizasyonu
  css: {
    devSourcemap: false,
  },
  // Önbellek optimizasyonu
  optimizeDeps: {
    include: ['vue', 'lenis'],
    exclude: [],
  },
});
