// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'light'
  },
  modules: ['@nuxt/ui', '@nuxt/image'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css',  '~/assets/globals.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },


})
