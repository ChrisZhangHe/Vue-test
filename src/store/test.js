/* eslint-disable no-shadow */
const state = {
  count: 0
};
const getters = {
  getCountLength: state => tag => {
    return `${String(state.count).length}-${tag}`;
  }
};
const mutations = {
  increment(state, value) {
    state.count = value;
  }
};
const actions = {
  ayncIncrement(context, value) {
    setTimeout(() => {
      context.commit("increment", value);
    }, 1000);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
