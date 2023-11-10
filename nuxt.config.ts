// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    '@nuxtjs/i18n',
    "@formkit/auto-animate",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts"
  ],
  i18n: {
    /* module options */
  }
})