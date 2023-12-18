// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  plugins: [
    "~/plugins/lottie-vue-player.client.js"
  ],
  app: {
    head: {
      title: 'Nimbl White Paper'
    }
  }
  
})
