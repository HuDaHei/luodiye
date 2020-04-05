<style lang="scss" scoped>
.yiye_title{
  h1{
    font-size: 2em;
  }
  h2{
    font-size: 1em;
  }
}
</style>
<template>
  <div class="yiye_title" :style="widgetStyle"> 
      <h1 :style="headlineStyle">{{ headline }}</h1>
      <h2 :style="subheadingStyle">{{ subheading }}</h2>
  </div>
</template>
<script>
export default {
  name: 'ye-title',
  props: {
    widget: {
      type: Object
    }
  },
  computed: {
    //标题
    headline() {
      return this.widget.fields.headline || '标题';
    },
    //副标题
    subheading(){
      return this.widget.fields.subheading || '副标题';
    },
    //整体样式
    widgetStyle() {
      const globalStyle = this.widget.style.widgetGlobal;
      const tempStyle = {};
      for(let [key,item] of Object.entries(globalStyle)) {
          Reflect.set(tempStyle, key, `${item.value}${item.config.unit}`)
      };
      return tempStyle;
    },
    //标题样式
    headlineStyle() {
      const headlineStyle = this.widget.style.headline;
      const tempStyle = {};
      for(let [key,item] of Object.entries(headlineStyle)) {
        if(Reflect.has(item.config, 'unit')) {
          Reflect.set(tempStyle, key, `${item.value}${item.config.unit}`)
        }else {
          Reflect.set(tempStyle, key, `${item.value}`)
        }
      };
      return tempStyle;
    },
    //副标题样式
    subheadingStyle() {
      const headlineStyle = this.widget.style.subheading;
      const tempStyle = {};
      for(let [key,item] of Object.entries(headlineStyle)) {
        if(Reflect.has(item.config, 'unit')) {
          Reflect.set(tempStyle, key, `${item.value}${item.config.unit}`)
        }else {
          Reflect.set(tempStyle, key, `${item.value}`)
        }
      };
      return tempStyle;
    }
  }
}
</script>
