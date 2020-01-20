<style lang="scss" scoped>
$iconColor: #36af89;
.luodiye-left {
  ul {
    display: flex;
  }
  li {
    display: flex;
    flex-direction: column;
  }
  i {
    font-size: 32px;
    color: $iconColor;
  }
}
</style>
<template>
  <div class="luodiye-left">
    <ul>
      <template v-for="(item, index) of content">
        <li :key="index" @click="handlerClickIcon(item)">
          <i class="iconfont" :class="item.icon"></i>
          <span>{{ item.alias }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
import { mapActions } from "vuex";
const context = require.context("@/widgets", true, /\.js$/);
const list = [];
context.keys().forEach(fileName => {
  // 获取组件配置
  const config = context(fileName);
  const { icon } = config.default;
  if (icon) {
    list.push(config.default);
  }
});
export default {
  name: "luodiyeLeft",
  data() {
    return {
      list: Object.freeze(list)
    };
  },
  computed: {
    content() {
      return this.list.filter(item => item.type == "content");
    },
    typesetting() {
      return this.list.filter(item => item.type == "typesetting");
    },
    Marketing() {
      return this.list.filter(item => item.type == "Marketing");
    }
  },
  methods: {
    ...mapActions("luodiye", ["handlerAddWidget"]),
    handlerClickIcon(item) {
      this.handlerAddWidget(item);
    }
  }
};
</script>
