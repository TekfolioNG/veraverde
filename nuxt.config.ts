export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || (process.env.NODE_ENV === 'production' ? 'https://veraverde.org' : 'http://localhost:3000')
    }
  },
  
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-icon", "@nuxt/ui", "@nuxt/image"],
  
  nitro: {
    preset: "cloudflare-pages"
  },
  
  // Remove ssr: false and the cloudflare.pages.routes config
})