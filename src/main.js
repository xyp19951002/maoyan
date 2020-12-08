import Vue from "vue";
import App from "./App.vue";
// 引入文件夹router 自动查找里面的index.js
import router from "./router";

Vue.config.productionTip = false;

import "./assets/css/reset.scss";
import "./assets/fonts/iconfont.css";
import "amfe-flexible";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
