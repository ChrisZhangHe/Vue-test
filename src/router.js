import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/my-confirm",
      name: "myConfirm",
      component: () => import("./views/test/confirm/index.vue")
    },
    {
      path: "/keep-alive",
      name: "/keep-alive",
      component: () => import("./views/test/keep-alive/index"),
      children: [
        {
          path: "input-a",
          name: "input-a",
          component: () => import("./views/test/keep-alive/input")
        },
        {
          path: "input-b",
          name: "input-b",
          component: () => import("./views/Home")
        }
      ]
    },
    {
      path: "/v-model",
      name: "v-model",
      component: () => import("./views/test/v-model/index")
    }
  ]
});
