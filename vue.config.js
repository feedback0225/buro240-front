const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/buro-240-build2/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/style/_mixin.scss";`,
      },
    },
  },
});
