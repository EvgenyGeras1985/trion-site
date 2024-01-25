export default defineNuxtConfig({
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