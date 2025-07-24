export default defineNuxtConfig({
  // Runtime configuration
  runtimeConfig: {
    public: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || (process.env.NODE_ENV === 'production' ? 'https://veraverde.org' : 'http://localhost:3000')
    }
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
    output: {
      dir: '.output',
      publicDir: '.output/public'
    },
    experimental: {
      wasm: true
    },
    prerender: {
      failOnError: false,
      crawlLinks: true,
    },
    
    // Route rules for API
    routeRules: {
      '/api/**': { 
        cors: true,
        headers: { 
          'Access-Control-Allow-Origin': '',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Accept'
        }
      }
    }
  },

  // Experimental features
  experimental: {
    payloadExtraction: false,
  },

  // SSR configuration
  ssr: false, // SPA mode enabled

  // App configuration
  app: {
    baseURL: "/",
  },

  // Compatibility date
  compatibilityDate: "2025-01-25",

  // Build configuration
  build: {
    transpile: ['@nuxt/ui']
  }

});