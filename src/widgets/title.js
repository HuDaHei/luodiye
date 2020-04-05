import Widget from "./index";

class Title extends Widget {
  // widget  => { style = {}, fields = {}, icon, name, id }
  constructor(widget) {
    super(widget);
  }
}
const titleConfig = {
  style: {
    widgetGlobal: {
      'font-size': {
        value: 14,
        config: {
          control: 'ye-input-range', // 控制组件
          name: '字体大小',
          range: [10,50],
          unit: 'px' // 单位
        }
      }
    },
    headline: {
      'text-align': {
        value: 'left',
        config: {
          control: 'ye-multiple-checkbox', // 控制组件
          checkboxList: [{value:'left',name:'左边'},{value:'center',name:'中间'},{value:'right',name: '右边'}]
        }
      }
    },
    subheading: {
      'text-align': {
        value: 'left',
        config: {
          control: 'ye-multiple-checkbox', // 控制组件
          checkboxList: [{value:'left',name:'左边'},{value:'center',name:'中间'},{value:'right',name: '右边'}]
        }
      }
    },
    alias: {
      widgetGlobal: '全局',
      headline: '标题',
      subheading: '副标题'
    },
  },
  fields: {
    headline: '',
    subheading: ''
  },
  icon: "icon-title",
  alias: "标题", // 用在left.vue中作为组件名称展示
  componentName: 'ye-title', //组件名称 包含展示 和编辑的组件名称
  name: "title",
};
const title = new Title(titleConfig);
export default title;
