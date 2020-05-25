/* eslint-disable no-param-reassign */
import MyConfirm from "./Confirm.vue";

export default {
  install(Vue) {
    const ConfirmVue = Vue.extend(MyConfirm);
    let confirmObj = null;
    Vue.prototype.$MyConfirm = function(data) {
      const dom = document.createElement("div");
      document.body.appendChild(dom);
      if (confirmObj) confirmObj.uninstall();
      confirmObj = new ConfirmVue({
        data() {
          return data;
        }
      }).$mount(dom);
    };
  }
};
