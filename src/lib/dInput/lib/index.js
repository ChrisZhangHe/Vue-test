import dInput from "./dInput";

const plugin = {
  install(Vue, options) {
    Vue.component("dInput", dInput);
  }
};
export default plugin;
