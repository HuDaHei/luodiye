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
    },
    activeWidget(state) {
      const id = state.luodiye.activeWidgetID;
      return state.luodiye.widgets.find( item => item.id == id)
    },
    activeWidgetID(state) {
      return state.luodiye.activeWidgetID
    }
  },
  modules: {
    luodiye
  }
});
