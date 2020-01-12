import MyConfirm from "./Confirm.vue";
export default {
  install: function(Vue) {
    const confirmVue = Vue.extend(MyConfirm);
    let confirmObj = null;
    Vue.prototype.$MyConfirm = function(data) {
      const dom = document.createElement("div");
      document.body.appendChild(dom);
      confirmObj && confirmObj.uninstall();
      confirmObj = new confirmVue({
        data() {
          return data;
        }
      }).$mount(dom);
    };
  }
};
