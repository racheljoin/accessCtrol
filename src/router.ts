import UserView from "./views/User.vue";
import { createRouter, createWebHistory } from "vue-router";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

export const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/app-vue/" : "/"
  ),
  routes: [
    {
      path: "/",
      name: "home",
      component: UserView,
    },
    {
      path: "/roles",
      name: "roles",
      component: () => import("./views/RolesView.vue"),
    },
    {
      path: "/authorization",
      name: "authorization",
      component: () => import("./views/AuthorizationView.vue"),
    },
  ],
});
