module.exports = {
    publicPath: '/vue-pages/',

    pluginOptions: {
      quasar: {
        importStrategy: 'kebab',
        rtlSupport: true
      }
    },

    transpileDependencies: [
      'quasar'
    ]
}
