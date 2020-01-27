import { ADDWIDGET,UPDATE_ACTIVE_WIDGET } from "./mutationsType.js";
const mutations = {
  [ADDWIDGET](state, payload) {
    state.widgets.push(payload);
  },
  [UPDATE_ACTIVE_WIDGET](state,payload){
    state.activeWidgetID = payload;
  }
};
export default mutations;
