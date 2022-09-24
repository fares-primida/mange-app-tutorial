import { createStore } from "vuex";
import router from "../router/index";

const state = {};
const getters = {};
const mutations = {
  redirectTwo(state, payload) {
    router.push({ name: payload });
  },
};
const actions = {
  redirectTwo({ commit }, payload) {
    commit("redirectTwo", payload.val);
  },
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
