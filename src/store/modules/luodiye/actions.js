import { ADDWIDGET,UPDATE_ACTIVE_WIDGET,HANDLER_UPDATE_WIDGET,UPDATE_WIDGET_STYLE} from "./mutationsType";
import {cloneDeep} from 'lodash'
const actions = {
  handlerAddWidget({ commit }, payload) {
    commit(ADDWIDGET, payload);
  },
  handlerUpdateActiveWidget({commit}, payload) {
    commit(UPDATE_ACTIVE_WIDGET, payload)
  },
  //手动更新widgets中的fields字段
  handlerUpdateWidgets({commit,state},payload){
    const { widgets } = state;
    const {id:updateId,...updateField} = payload;
    const newWidgets = cloneDeep(widgets).map(widget => {
      let tempWidget = cloneDeep(widget)
      const {id,fields} = tempWidget;
      if(updateId == id) {
        tempWidget.fields = Object.assign(fields,updateField);
      }
      return tempWidget;
    });
    commit(HANDLER_UPDATE_WIDGET,newWidgets)
  },
  //手动更新widgets的顺序
  handlerUpdateWidgetsOrder({commit}, payload) {
    commit(HANDLER_UPDATE_WIDGET,payload)
  },
  //手动更新style
  handlerUpdateStyle({commit},payload){
    commit(UPDATE_WIDGET_STYLE,payload)
  }
};
export default actions;
