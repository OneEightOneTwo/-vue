// 引入vue
import Vue from 'vue'
import App from './App.vue'
// 路由对象
import router from './router.js'
// 饿了么ui
import ElementUI from 'element-ui';
// html
import 'element-ui/lib/theme-chalk/index.css';
// jq
import $ from 'jquery';

Vue.prototype.$ = $;

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el:"#app",
  // 挂载路由实例
  router,
  render: h => h(App),
})
