import { ADDWIDGET,UPDATE_ACTIVE_WIDGET } from "./mutationsType";
const actions = {
  handlerAddWidget({ commit }, payload) {
    commit(ADDWIDGET, payload);
  },
  handlerUpdateActiveWidget({commit}, payload) {
    commit(UPDATE_ACTIVE_WIDGET, payload)
  }
};
export default actions;
