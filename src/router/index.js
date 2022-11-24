import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import DiskPage from "@/views/DiskPage/DiskPage.vue";

// import NotFoundPage from "@/views/NotFoundPage.vue";

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

  // { name: "not-found", component: NotFoundPage, path: "/:pathMatch(.*)*" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
