export default defineNuxtConfig({
  runtimeConfig: {
    paystackSecretKey: process.env.PAYSTACK_SECRET_KEY,
    public: {
      paystackPublicKey: process.env.PAYSTACK_PUBLIC_KEY,
    
    },
  },
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
    preset: "cloudflare",
    prerender: {
      failOnError: false,
      crawlLinks: true,
    },
  },

  experimental: {
    payloadExtraction: false,
    // Remove inlineSSRStyles
  },

  ssr: true,

  compatibilityDate: "2025-01-25",
});