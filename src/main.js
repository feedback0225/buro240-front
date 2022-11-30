import { createApp } from "vue";
import App from "./App.vue";
import { svgSpritePlugin } from "vue-svg-sprite";
import router from "./router";

createApp(App)
  .use(svgSpritePlugin, {
    url: "./sprite.svg",
  })
  .use(router)
  .mount("#app");
