export default defineNuxtConfig({
  experimental: {
    viewTransition: true
  },
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