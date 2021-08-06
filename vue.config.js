module.exports = {
  publicPath: "/",

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: true,
    },
  },

  transpileDependencies: ["quasar"],
};
