// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon"],

  
 nitro: {
    preset: 'cloudflare',
    prerender: {
      failOnError: false,
      crawlLinks: true
    }
  },

  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false
  },

  // Add this for Cloudflare compatibility
  ssr: true,

  compatibilityDate: "2025-01-25"
});