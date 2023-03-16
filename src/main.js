/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import App from "./App.vue";
import { svgSpritePlugin } from "vue-svg-sprite";
import router from "./router";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import "./fullpage.scrollHorizontally.min"; // Optional. When using fullpage extensions
import 'animate.css'
// import 'vue-fullpage/vue-fullpage.css'
import VueFullPage from "vue-fullpage.js";
import 'vue-fullpage.js/dist/style.css'
createApp(App)
    .use(svgSpritePlugin, {
        url: "./sprite.svg",
    })
    .use(VueFullPage)
    .use(router)
    .mount("#app");