
<style lang="scss" scoped>
</style>
<template>
  <div>
    <template v-for="([key,value], index) in alias">
      <div :key="index">
        <p>{{value}}</p>
        <div>
          <template v-for="([attr,config], loIndex) in localStyle[key]">
            <component
              :is="'ye-input-range'"
              :property="key+'-'+attr"
              :config="config"
              :value="config.value"
              :key="loIndex"
              @input="handlerClick"
            ></component>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "wiedget_style",
  props: {
    widget: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    //   localStyle: null,
      type: "x"
    };
  },
  components: {
    "ye-input-range": () => import("./../components/ye-input-range")
  },
  computed: {
    alias() {
      return Object.entries(this.widget.style.alias);
    },
    localStyle() {
      const alias = Object.entries(this.widget.style.alias);
      const widgetStyle = this.widget.style;
      const localStyle = {};
      for (const [key] of alias) {
        const tempArr = Object.entries(widgetStyle[key]);
        if (tempArr.length) {
          localStyle[key] = tempArr;
        }
      }
      return localStyle;
    }
  },
  methods: {
    ...mapActions("luodiye", ["handlerUpdateStyle"]),
    handlerClick(e) {
      const property = e.target.getAttribute("property");
      const [outkey, innerkey] = property.split("-");
      const payload = {
        id: this.widget.id,
        value: e.target.value,
        outkey,
        innerkey
      };
      this.handlerUpdateStyle(payload);
    }
  }
};
</script>