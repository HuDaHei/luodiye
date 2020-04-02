import {
  ADDWIDGET, UPDATE_ACTIVE_WIDGET,
  HANDLER_UPDATE_WIDGET,
  UPDATE_WIDGET_STYLE
} from "./mutationsType.js";
const mutations = {
  [ADDWIDGET](state, payload) {
    state.widgets.push(payload);
  },
  [UPDATE_ACTIVE_WIDGET](state, payload) {
    state.activeWidgetID = payload;
  },
  [HANDLER_UPDATE_WIDGET](state, payload) {
    state.widgets = payload;
  },
  [UPDATE_WIDGET_STYLE](state, {id,value,outkey,innerkey}) {
    // 根据ID找到widget
    const widgets = JSON.parse(JSON.stringify(state.widgets));
    const newWidgets = widgets.map(widget => {
      const {id:findID,style={}} = widget;
      if(Object.is(findID,id)) {
        const temp = style[outkey][innerkey];
        temp.value = value;
        widget.style[outkey][innerkey] = temp;
      }
      return widget
    });
    state.widgets = newWidgets;
  }
};
export default mutations;
