import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideNav: true
  },
  mutations: {
    setSideNav(state, payload) {
      state.sideNav = payload;
    }
  },
  actions: {
    openSideNav({ commit }) {
      commit("setSideNav", true);
    },
    closeSideNav({ commit }) {
      commit("setSideNav", false);
    }
  },
  getters: {
    sideNavState(state) {
      return state.sideNav;
    }
  },
  setters: {},
  modules: {}
});
