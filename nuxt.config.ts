export default defineNuxtConfig({
  runtimeConfig: {
    ssr: true,
    web3formsKey: process.env.WEB3FORMS_KEY,
  
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/ui",
    "@nuxt/image"
  ],
  ui: {
    fonts: true
  },
  nitro: {
    preset: "cloudflare-pages",
    output: {
    publicDir: ".output/public",
    serverDir: '.output/server'
    },
    prerender: {
      failOnError: false,
      crawlLinks: true,
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  ssr: false,
  app: {
    baseURL: "/",
  },
  compatibilityDate: "2025-01-25",
});