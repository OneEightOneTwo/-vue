import Vue from 'vue'
import VueRouter from 'vue-router'

// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter)

//手机登录页
import Home from './pages/Home.vue'

//手机登录
import Shouji from './pages/Shouji.vue'

//个人信息
import Xxinxi from './pages/Xxinxi.vue'

//个人资料
import Ziliao from './pages/Ziliao.vue'
//定义路由
const routes = [
    { path: '/home', component: Home , name: 'home' },
    { path: '/shouji/:id', component: Shouji , name: 'shouji' },
    { path: '/xxinxi/', component: Xxinxi , name: 'xxinxi' },
    { path: '/ziliao/', component: Ziliao , name: 'ziliao' }
  ]




  // 实例化路由
const router = new VueRouter({
    routes
})

// 暴露路由对象，为后续挂载容器做准备
export default router