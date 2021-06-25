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
    path: "/about/:id",
    name: "About",
    // beforeEnter(to, from, next) {
    //   console.log(to);
    //   console.log(from);
    //   next();
    // },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [
      {
        path: "",
        name: "TestA",
        component: () => import("../views/TestA.vue"),
      },
      {
        path: "profile",
        name: "TestB",
        component: () => import("../views/TestB.vue"),
        beforeEnter(to, from, next) {
          console.log(to);
          console.log(from);
          next();
        },
      },
      {
        path: "posts",
        name: "TestC",
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
