import Vue from 'vue'
import VueRouter from 'vue-router'
// use加载路由功能
Vue.use(VueRouter)
// 设置单页
import ToConfigure from './pages/ToConfigure.vue'
// 主页
import Home from './pages/Home.vue'
// 朋友圈
import Pyq from './pages/Pyq.vue'
// 定义路由
const routes = [
    { path: '/home', component: Home,name: 'home'},
    { path: '/toconfigure', component: ToConfigure,name: 'toconfigure' },
    { path: '/pyq', component: Pyq,name: 'pyq' },
    // 设置默认重定向
    { path: '/', redirect: '/home' }
  ]
// 实例化路由
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 暴露路有对象，为后续挂载做准备
export default router