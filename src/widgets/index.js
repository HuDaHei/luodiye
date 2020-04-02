export default class Widget {
  // style 组件样式控制
  // name 组件名称 必须
  // type 组件类型 大类 内容 排版 营销
  // fields 对应的是组件的字段内容
  constructor({
    style = {}, //控制样式 分全局 和单个字段控制 全局是指单个的widget 单个指的是单个字段 例如标题控制 alias 控制样式分类 在
    // 在组件style里面使用
    fields = {}, // 字段内容
    icon = "default", // 组件icon
    alias = "我是组件", // 组件别名
    name, // 组件名称
    type = "content", // 组件类型
    componentName, // 组件名称
    id // 组件ID
  }) {
    this.style = Object.assign({widgetGlobal: {},alias: {}},style);
    this.fields = fields;
    this.icon = icon;
    this.name = name;
    this.type = type;
    this.alias = alias;
    this.id = id;
    this.componentName = componentName;
    this.errors = {};
  }
}
