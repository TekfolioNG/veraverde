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
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon"],

  nitro: {
    preset: "cloudflare-pages", // Use "cloudflare-pages" for Cloudflare Pages
    prerender: {
      failOnError: false,
      crawlLinks: true,
      ignore: ["/mission", "/values", "/impact", "/programs"], // Exclude missing routes
    },
  },

  experimental: {
    payloadExtraction: false,
  },

  ssr: false, // Enable static site generation (SSG)

  app: {
    baseURL: "/", // Set this to "/" for root deployment or "/subpath/" for subpath deployment
  },

  compatibilityDate: "2025-01-25",
});