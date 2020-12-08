import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "./assets/css/reset.scss";
import "./assets/fonts/iconfont.css";
import "amfe-flexible";

new Vue({
  render: h => h(App)
}).$mount("#app");
