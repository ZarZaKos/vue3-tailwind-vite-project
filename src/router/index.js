import { createWebHashHistory, createRouter } from "@/vue-router";

const Home      = () => import('Views/Home.vue');
const NotFound  = () => import('Views/NotFound.vue');
const Default   = () => import('Views/Default.vue');

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Home
  },
  {
    path: "/characters",
    name: "Personajes",
    component: Default
  },
  {
    path: "/bookmarks",
    name: "Guardados",
    component: Default
  },
  {
    path: "/user",
    name: "Usuario",
    component: Default
  },
  {
    path: "/tales",
    name: "Historias",
    component: Default
  },
  {
    path: "/logout",
    name: "Logout",
    component: Default
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;