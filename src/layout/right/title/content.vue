<style lang="scss" scoped>
.title-content{
  display: flex;
  flex-direction: column;
  label{
    &::before{
      content: "*";
      color: red;
    }
  }
}
</style>

<template>
    <div class="title-content">
        <label for="title_headline">标题</label>
        <input type="text" id="title_headline" :value="headline" @input="handlerUpdate('headline',$event)">
        <label for="title_subheading">副标题</label>
        <input type="text" :value="subheading" @input="handlerUpdate('subheading',$event)">
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'ye-title-content',
    props: {
      widget: {
        type: Object,
        required: true
      }
    },
    computed: {
      headline() {
        return this.widget.fields.headline;
      },
      subheading() {
        return this.widget.fields.subheading;
      }
    },
    methods: {
      ...mapActions('luodiye', ['handlerUpdateWidgets']),
      handlerUpdate(field,e) {
        const { id } = this.widget;
        const payload = {};
        Reflect.set(payload, field,e.target.value)
        Reflect.set(payload, 'id',id)
        this.handlerUpdateWidgets(payload)
      }
    }
}
</script>