import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import dtinput from "dtinput";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import confirmInstall from "./views/test/confirm/install";

// eslint-disable-next-line no-unused-expressions
import("./js/index");

Vue.config.productionTip = false;
Vue.use(confirmInstall);
Vue.use(ElementUI);

Vue.use(dtinput);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
