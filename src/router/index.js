import { createRouter, createWebHistory } from "vue-router";
import VUpload from "@src/views/VUpload.vue";

const VAbout = () => import("@src/views/VAbout.vue");

const routes = [
  {
    path: "/",
    name: "upload",
    component: VUpload
  },
  {
    path: "/about",
    name: "about",
    component: VAbout
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;