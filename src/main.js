import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
Vue.config.productionTip = false;
document.body.ondrop = function(event) {
  event.preventDefault();
  event.stopPropagation();
};
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
