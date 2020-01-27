<template>
  <div class="yiye-title"> 
      <h1>{{ headline }}</h1>
      <h2>{{ subheading }}</h2>
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
      return this.widget.fields.headline
    },
    //副标题
    subheading(){
      return this.widget.fields.subheading
    }
  }
}
</script>
