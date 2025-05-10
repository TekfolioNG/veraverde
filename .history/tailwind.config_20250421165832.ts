import preset from "@nuxt/ui";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset], 
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.{js,ts}",
    "./node_modules/@nuxt/ui/dist/**/*.{mjs,js}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
        heading: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
        hero: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#003366',
        'primary-dark': '#002244',
        blue: '#1A4173',
        red: '#D92121',
        yellow: '#FFB81C',
      },
      letterSpacing: {
        'wider-custom': '0.05em',
      },
      // New extensions
      height: {
        'screen-90': '90vh',
        'screen-80': '80vh',
      },
      minHeight: {
        'screen-90': '90vh',
        'screen-80': '80vh',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}