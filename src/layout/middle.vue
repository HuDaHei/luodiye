<style lang="scss" scoped>
.luodiye-middle {
  // border: 1px solid #ccc;
}
</style>
<template>
  <div class="luodiye-middle">
    <iframe
      src="http://localhost:8080/#/preview"
      frameborder="0"
      ref="iframe"
      width="100%"
      height="100%"
    ></iframe>
  </div>
</template>
<script>
import { mapGetters, mapActions} from "vuex";

export default {
  name: "luodiyeMiddle",
  computed: {
    ...mapGetters(["widget", "activeWidget"])
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
  mounted() {
    this.receiver();
  },
  methods: {
    ...mapActions('luodiye',['handlerUpdateActiveWidget']),
    postmessage(widgets) {
      const iframeWindow = this.$refs.iframe.contentWindow;
      iframeWindow.postMessage(
        { type: "preview", widgets },
        "http://localhost:8080"
      );
    },
    //接受数据
    receiver() {
      window.addEventListener('message', e => {
        const { type, id } = e.data;
        if(type == 'iframe' ) {
          console.log(id,'ddd')
          this.handlerUpdateActiveWidget(id)
        }
      })
    }
  }
};
</script>
