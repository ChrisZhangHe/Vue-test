import Vue from "vue";
import Vuex from "vuex";
import common from "./common";
import test from "./test";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    test
  }
});
