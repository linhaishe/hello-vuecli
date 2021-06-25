import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [
      {
        path: "/about/foo",
        component: () => import("../views/TestA.vue"),
      },
      {
        path: "/about/foo/profile",
        component: () => import("../views/TestB.vue"),
      },
      {
        path: "/about/foo/posts",
        component: () => import("../views/TestC.vue"),
      },
    ],
  },
  {
    path: "/list/:data1/:data2",
    name: "List",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/List.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;