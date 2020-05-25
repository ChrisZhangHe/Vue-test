import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./store";

Vue.use(Router);
const about = import("./views/About.vue");
const route = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      component: about
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
    },
    {
      path: "/css",
      name: "css",
      component: () => import("./views/css"),
      children: [
        {
          path: "",
          name: "transition",
          component: () => import("./views/css/components/transition")
        },
        {
          path: "animation",
          name: "animation",
          component: () => import("./views/css/components/animation")
        },
        {
          path: "transform",
          name: "transform",
          component: () => import("./views/css/components/transform")
        }
      ]
    },
    {
      path: "/directive",
      name: "directive",
      component: () => import("./views/test/directive")
    },
    {
      path: "/props",
      name: "props",
      component: () => import("./views/test/props")
    },
    {
      path: "/slot",
      name: "slot",
      component: () => import("./views/test/slot/index")
    },
    {
      path: "/function-tags",
      name: "function-tags",
      component: () => import("./views/test/function-tags")
    },
    {
      path: "/render",
      name: "render",
      component: () => import("./views/test/render/index.vue")
    },
    {
      path: "/mixins",
      name: "mixins",
      component: () => import("./views/test/mixins/index.vue")
    },
    {
      path: "/funComponent",
      name: "funComponent",
      component: () => import("./views/test/funComponent/index.vue")
    },
    {
      path: "/scss",
      name: "scss",
      component: () => import("./views/test/scss/index.vue")
    }
  ]
});
// 动态添加路由
const componentContext = require.context("./views/test", false, /.vue$/);
const addRoutes = [];
componentContext.keys().forEach(fileName => {
  const componentConfig = componentContext(fileName);
  fileName = fileName
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");
  addRoutes.push({
    path: `/${fileName}`,
    component: componentConfig.default
  });
  store.commit("addDynamicRoutes", fileName);
});
route.addRoutes([
  ...addRoutes,
  {
    path: "/route1",
    name: "route1",
    component: () => import(`./views/test/${"route/index"}`),
    props: {
      newsletterPopup: 1
    },
    meta: {
      isKeepAlive: true
    }
  },
  {
    path: "/route2",
    name: "route2",
    component: () => import(`./views/test/${"route/index"}`),
    props: {
      newsletterPopup: 2
    },
    meta: {
      isKeepAlive: false
    }
  },
  {
    path: "/vue-api",
    component: () => import("./views/test/vue-api/index")
  },
  // {
  //   path: "/check-model",
  //   component: () => import("./views/test/checkModel")
  // },
  // {
  //   path: "/upload",
  //   component: () => import("./views/test/upload")
  // },

  // {
  //   path: "/event",
  //   component: () => import("./views/test/event")
  // },
  {
    path: "/preview",
    component: () => import("./views/test/preview/index")
  },
  {
    path: "*",
    component: () => import("./views/404.vue")
  }
]);
export default route;
