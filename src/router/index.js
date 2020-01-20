import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    components: {
      left: () => import("@/layout/left.vue"),
      default: () => import("@/layout/middle.vue"),
      right: () => import("@/layout/right.vue")
    }
  },
  {
    path: "/preview",
    component: () => import("@/preview")
  }
];
export default new VueRouter({ routes });
