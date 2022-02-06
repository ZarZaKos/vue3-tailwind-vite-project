import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import vue from '@vitejs/plugin-vue'
import path from 'path'

const VitePWAConfig = {
  mode: "development",
  base: "./",
  srcDir: "src",
  filename: "sw.ts",
  includeAssets: ["/favicon.png"],
  strategies: "injectManifest",
  manifest: {
    name: "Test PWA Project",
    short_name: "Test",
    theme_color: "#ffffff",
    start_url: "/vue3-tailwind-vite-project/",
    display: "standalone",
    background_color: "#ffffff",
    icons: [
      {
        src: "./img/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./img/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "./img/icons/android-chrome-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "./img/icons/android-chrome-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  plugins: [vue(), VitePWA(VitePWAConfig)],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './node_modules/'),
      'Components': path.resolve(__dirname, './src/components'),
      'Views': path.resolve(__dirname, './src/views'),
    },
  }
})