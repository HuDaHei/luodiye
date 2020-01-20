import Vue from "vue";
import Vuex from "vuex";
import luodiye from "./modules/luodiye";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {
    widget(state) {
      return state.luodiye.widgets;
    }
  },
  modules: {
    luodiye
  }
});
