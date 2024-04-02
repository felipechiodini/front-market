// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/seo',
    'nuxt-icon',
    'nuxt-gtag'
  ],
  gtag: {
    id: 'G-7J4ZF3TX5F'
  },
  runtimeConfig: {
    basic: 'dwads',
    public: {
      BASE_API_URL: process.env.BASE_API_URL
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    },
  },
  site: {
    name: 'RapidEats Sistema para Delivery',
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})