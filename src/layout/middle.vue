<style lang="scss" scoped>
// .luodiye-middle {
//   // border: 1px solid #ccc;
// }
</style>
<template>
  <div class="luodiye-middle">
    <iframe
      src="http://localhost:8081/#/preview"
      frameborder="0"
      ref="iframe"
      width="320px"
      height="568px"
      style="border:1px solid red;overflow:hidden"
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
    ...mapActions('luodiye',['handlerUpdateActiveWidget','handlerUpdateWidgetsOrder']),
    postmessage(widgets) {
      const iframeWindow = this.$refs.iframe.contentWindow;
      iframeWindow.postMessage(
        { type: "preview", widgets },
        "http://localhost:8081"
      );
    },
    //接受数据
    receiver() {
      window.addEventListener('message', e => {
        const { type, data} = e.data;
        const typeMap = {
          'activeWidgetID': () => {
            this.handlerUpdateActiveWidget(data)
          },
          'dragEnd': () => {
            this.handlerUpdateWidgetsOrder(data)
          }
        };
        if(Reflect.has(typeMap,type)) {
          (typeMap[type])();
        }
      })
    }
  }
};
</script>
