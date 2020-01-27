import Widget from "./index";

class Title extends Widget {
  // widget  => { style = {}, fields = {}, icon, name, id }
  constructor(widget) {
    super(widget);
  }
}
const titleConfig = {
  style: {},
  fields: {
    headline: '主标题',
    subheading: '副标题'
  },
  icon: "icon-title",
  alias: "标题",
  name: "ye-title"
};
const title = new Title(titleConfig);
export default title;
