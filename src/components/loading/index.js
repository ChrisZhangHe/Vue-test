import Vue from "vue";
import loadingComponent from "./loading.vue";

const LoadingContructor = Vue.extend(loadingComponent);
let loading;
LoadingContructor.prototype.close = () => {};

const Loading = options => {
  if (loading) {
    return loading;
  }
  const instance = new LoadingContructor({
    data: options
  });
  document.body.append(instance.$mount().$el);
  loading = instance;
  return instance;
};

export default Loading;
