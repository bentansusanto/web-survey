import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/variable.scss";

Vue.config.productionTip = false;

Vue.use(BootstrapVue).use(IconsPlugin);

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
