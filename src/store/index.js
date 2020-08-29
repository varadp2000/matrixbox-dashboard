import Vue from "vue";
import Vuex from "vuex";
import state from "./store";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
//import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  //plugins: [
  //createPersistedState({
  //  storage: window.sessionStorage,
  //}),
  //],
  state,
  mutations,
  actions,
  getters,
});
