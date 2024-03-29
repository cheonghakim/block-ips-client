export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'block-ips-client',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  router: {
    middleware: ['auth'],
    routes: [
      {
        path: '/main',
        component: '~/pages/user/Main.vue',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/custom.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/notifications.ts', mode: 'client' },
    { src: '~/plugins/eventBus.ts', mode: 'client' },
    { src: '~/plugins/mdi.ts', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt',
  ],

  proxy: {
    '/api': 'http://localhost:8088',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    watch: ['~/middleware'],
  },
}
