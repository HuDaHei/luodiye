import uuid from "uuid";
export default class Widget {
  // style 组件样式控制
  // name 组件名称 必须
  // type 组件类型 大类 内容 排版 营销
  // fields 对应的是组件的字段内容
  constructor({
    style = {},
    fields = {},
    icon = "default",
    alias = "我是组件",
    name,
    type = "content",
    id
  }) {
    this.style = style;
    this.fields = fields;
    this.icon = icon;
    this.name = name;
    this.type = type;
    this.alias = alias;
    this.id = id || uuid();
    this.errors = {};
  }
}
