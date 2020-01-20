<style lang="scss" scoped>
.luodiye-preview {
  .container {
    height: 100vh;
  }
}
.item {
  // background-color: red;
}
.blue-background-class {
  border: 1px dotted yellow;
  color: transparent;
}
</style>
<template>
  <div class="luodiye-preview">
    <!-- 固定的组件 -->
    <draggable
      v-model="widgets"
      class="container"
      :options="{
        ghostClass: 'blue-background-class'
      }"
    >
      <transition-group>
        <template v-for="(item, index) of widgets">
          <component :is="item.name" :key="index"></component>
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
    "ye-title": () => import("@/components/ye-title"),
    draggable
  },
  data() {
    return {
      widgets: []
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
    receiver() {
      window.addEventListener("message", e => {
        const { data } = e;
        const { type, widgets } = data;
        if (type === "preview") {
          this.widgets = widgets;
        }
      });
    }
  }
};
</script>
