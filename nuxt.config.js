export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/sitemap',
  ],
  ui: {
    icons: true
  },
  sitemap: {
    hostname: 'https://www.ymcasantander.org',
    gzip: true,
    routes: [
      '/about',
      '/proyectos',
      '/legal/esal',
      '/legal/privacidad',
      '/legal/terminos-y-condiciones'
    ]
  }
})
