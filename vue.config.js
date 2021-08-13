module.exports = {
    publicPath: '/vue-pages/',

    pluginOptions: {
      quasar: {
        importStrategy: 'kebab',
        rtlSupport: true
      },
      i18n: {
        locale: 'ja',
        fallbackLocale: 'en',
        localeDir: 'assets/locales',
        enableInSFC: true
      }
    },

    transpileDependencies: [
      'quasar'
    ]
}
