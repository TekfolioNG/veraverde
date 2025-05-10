export default defineNuxtConfig({
  runtimeConfig: {
    paystackSecretKey: process.env.PAYSTACK_SECRET_KEY,
    web3formsKey: process.env.WEB3FORMS_KEY,
    public: {
      paystackPublicKey: process.env.PAYSTACK_PUBLIC_KEY,
      siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {}, // Changed from '@tailwindcss/postcss' to 'tailwindcss'
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/ui"
  ],
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons'],
    colors: {
      primary: 'blue', 
    },
    fonts: {
      sans: 'Barlow',
      heading: 'Inter',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    }
  },
  nitro: {
    preset: "cloudflare-pages",
    output: {
      publicDir: ".output/public",
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