export default defineNuxtConfig({
  css:['@/assets/scss/main.scss'],
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  runtimeConfig: {
    public: {
      apiBase: '/testAPI'
    }
  },
})