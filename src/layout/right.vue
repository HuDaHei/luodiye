<template>
  <div class="luodiye-edit-content">
    <!-- tab  -->
    <div class="tab">
      <ul @click="handlerCheck($event)">
        <li data-type="content">内容</li>
        <li data-type="style">样式</li>
      </ul>
    </div>
      <component :is="componentName" :widget="activeWidget"></component>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'luodiyeEditContent',
  components: {
    'ye-title-content': () => import('./right/title/content'),
    'ye-title-style': () => import('./right/title/style'),
  },
  data() {
    return {
      componentName: ''
    }
  },
  watch: {
    activeWidget: {
      handler(nv){
        if(nv) {
        //  this.componentName = `${nv.componentName}-content`;
        }
      },
      deep:true,
      immediate:true,
    }
  },
  computed: {
    ...mapGetters(['activeWidget'])
  },
  methods: {
    handlerCheck(e) {
      const type = (e.target).getAttribute('data-type');
      this.componentName = `${this.activeWidget.componentName}-${type}`;
    }
  }
}
</script>
<style lang="scss" scoped>
  .luodiye-edit-content{
    .tab {
        text-align: center;
        line-height: 24px;
        background-color: aquamarine;
        cursor: pointer;
      ul{
        display: flex;
        justify-content: space-around;
        li {
          flex: 1;
        }
      }
    }
  }
</style>
