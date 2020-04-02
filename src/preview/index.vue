<style lang="scss" scoped>
.luodiye-preview {
  .container {
    height: 100vh;
  }
  .container-component {
    position: relative;
    min-height: 42px;
    background-color: aquamarine;
    .mark {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    // .component {
    //   // position: relative;
    //   // z-index: -1;
    // }
  }
  .box-border {
    border: 1px solid red;
  }
}
.blue-background-class {
  border: 1px dotted yellow;
  color: transparent;
}
</style>
<template>
  <div class="luodiye-preview" @click="handlerClickCom($event)">
      <!-- 固定的组件 -->
      <draggable
        v-model="widgets"
        class="container"
        ghostClass='blue-background-class'
        @end="dragEnd">
        <transition-group>
          <template v-for="(item, index) of widgets">
            <div class="container-component" :class="[item.id === activeWidgetID ? 'box-border':'']" :key="index">
              <!-- 遮罩层 -->
              <div class="mark" :data-id="item.id"></div> 
              <component :is="item.componentName" :widget="item"></component>
            </div>
          </template>
        </transition-group>
      </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "preview",
  components: {
    "ye-title": () => import("@/components/ye-title"), //组件名称必须和widget里中的componentName保持一致
    draggable,
  },
  data() {
    return {
      widgets: [],
      activeWidgetID: ""
    };
  },
  mounted() {
    document.ondrop = function(event) {
      event.preventDefault();
      event.stopPropagation();
    };
    this.receiver();
  },
  methods: {
    //接受外部传递进来的数据
    receiver() {
      window.addEventListener("message", e => {
        const { data } = e;
        const { type, widgets } = data;
        if (type === "preview") {
          this.widgets = widgets;
        }
      });
    },
    //向外发送数据
    send(type,data) {
      window.parent.postMessage({type,data})
    },
    //组件被点击
    handlerClickCom(e) {
      const activeWidgetID = e.target.getAttribute('data-id');
      this.activeWidgetID = activeWidgetID;
      this.send('activeWidgetID',activeWidgetID);
    },
    //拖动结束
    dragEnd(){
      this.send('dragEnd',this.widgets);
    }
  }
};
</script>
