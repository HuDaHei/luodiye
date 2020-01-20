<style lang="scss" scoped>
.luodiye-middle {
  border: 1px solid #ccc;
}
</style>
<template>
  <div class="luodiye-middle">
    <iframe
      src="http://localhost:8081/#/preview"
      frameborder="0"
      ref="iframe"
      width="100%"
      height="100%"
    ></iframe>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "luodiyeMiddle",
  computed: {
    ...mapGetters(["widget"])
  },
  watch: {
    widget: {
      handler(nv) {
        // 发送数据
        this.postmessage(nv);
      },
      deep: true
    }
  },
  methods: {
    postmessage(widgets) {
      const iframeWindow = this.$refs.iframe.contentWindow;
      iframeWindow.postMessage(
        { type: "preview", widgets },
        "http://localhost:8081"
      );
    }
  }
};
</script>
