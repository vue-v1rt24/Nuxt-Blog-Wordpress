// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },
  css: ['@/assets/css/index.css'],
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active',
    },
  },
  runtimeConfig: {
    public: {
      wpUrl: process.env.WP_URL,
    },
  },
  devtools: { enabled: false },
});
