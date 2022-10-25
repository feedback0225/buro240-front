import { createApp } from "vue";
// import Vue from 'vue'
import App from "./App.vue";
// import VueSimpleSVG from 'vue-simple-svg';
import { svgSpritePlugin } from "vue-svg-sprite";
// Vue.use(svgSpritePlugin, {
//   url: '@/assets/sprite.svg',
//   class: 'my-class',
// })

createApp(App)
  .use(svgSpritePlugin, {
    url: "./sprite.svg",
  })
  .mount("#app");
