export default defineNuxtConfig({
  // Runtime configuration
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    }
    // Removed ssr from runtimeConfig - it doesn't belong here
  },

  // CSS and PostCSS
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  // Modules
  modules: [
    "nuxt-icon",
    "@nuxt/ui",
    "@nuxt/image"
  ],

  // UI configuration
  ui: {
    fonts: true
  },

  // Nitro configuration for Cloudflare Pages
  nitro: {
    preset: "cloudflare-pages",
    experimental: {
      wasm: true
    },
    // Remove custom output config - let Cloudflare Pages handle this
    prerender: {
      failOnError: false,
      crawlLinks: true,
    },
    // Add this for better API route handling on Cloudflare
    routeRules: {
      '/api/**': { 
        headers: { 
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      }
    }
  },

  // Experimental features
  experimental: {
    payloadExtraction: false,
  },

  // SSR configuration - keep this at root level
  ssr: false, // You have SPA mode enabled

  // App configuration
  app: {
    baseURL: "/",
  },

  // Compatibility date
  compatibilityDate: "2025-01-25",

  // Add build configuration for better Cloudflare compatibility
  build: {
    transpile: ['@nuxt/ui']
  },

});