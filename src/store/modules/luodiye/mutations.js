import { ADDWIDGET } from "./mutationsType.js";
const mutations = {
  [ADDWIDGET](state, payload) {
    state.widgets.push(payload);
  }
};
export default mutations;
