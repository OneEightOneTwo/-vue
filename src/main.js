import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)

// 引入路由对象
import router from './router.js'
// import axios from 'axios'
// import $ from 'jquery'
// // Vue继承jquery的方法
// Vue.prototype.$ = $
// // Vue继承axios方法
// Vue.prototype.$axios = axios
// weui样式
import 'weui'
Vue.config.productionTip = false

new Vue({
  el:"#app",
  // 挂载路由实例
  router,

  render: h => h(App),
})
// .$mount('#app')
