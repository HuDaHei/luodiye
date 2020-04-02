import Widget from "./index";

class Title extends Widget {
  // widget  => { style = {}, fields = {}, icon, name, id }
  constructor(widget) {
    super(widget);
  }
}
const titleConfig = {
  style: {
    widgetGlobal: {},
    headline: {
      height: {
        value: 13,
        config: {
          name: '高度',
          range: [10,50]
        }
      }
    },
    subheading: {},
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
