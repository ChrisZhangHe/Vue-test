/* eslint-disable no-shadow */
const state = { dynamicRoutes: [] };

const mutations = {
  addDynamicRoutes(state, pathName) {
    state.dynamicRoutes.push(pathName);
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
