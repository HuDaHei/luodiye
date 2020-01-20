import { ADDWIDGET } from "./mutationsType";
const actions = {
  handlerAddWidget({ commit }, payload) {
    commit(ADDWIDGET, payload);
  }
};
export default actions;
