import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/views/MainPage/MainPage.vue";
import DiskPage from "@/views/DiskPage/DiskPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/disk/:id",
    name: "disk",
    component: DiskPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
