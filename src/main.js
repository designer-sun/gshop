/*
入口JS文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import SvgIcon from "vue-svgicon"
import "./icons"
Vue.config.devtools = true;
Vue.use(SvgIcon,{tagName:"svgicon"})
new Vue({
  el:"#app",
  render: h => h(App),
  router
})
