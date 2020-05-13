const colors = require('vuetify/es5/util/colors').default

module.exports = {
  head: {
    mode: 'universal',
    title: 'my-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    // '@/assets/util.css'
  ],
  plugins: [
    { src: '~/plugins/axios.js', ssr: false },
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
    'cookie-universal-nuxt'
  ],
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          'theme-color': '#FE5E5E',
          'twitter-color': '#54ACEE',
          'theme-darken-grey': '#707070',
          'theme-light-gray': '#4B4B4B',
          'theme-background-grey': '#F7F9F9'
        }
      }
    }
  },
  /*
  ** Customize the progress bar color
  */
  // loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) {
    }
  },
  server: {
    port: 4000,
    host: '0.0.0.0'
  }
}
