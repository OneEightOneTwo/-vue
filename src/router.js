//引入
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//首页
import Home from './page/Home.vue'
//激活特权
import TeQuan from './page/TeQuan.vue'
//特权页的嵌套路由
import VIP from './page/control/VIP.vue'
import Love from './page/control/Love.vue'
import Super from './page/control/Super.vue'
// 设置单页
import ToConfigure from './pages/ToConfigure.vue'
// 朋友圈
import Pyq from './pages/Pyq.vue'
//定义路由
const routes = [ {path:'/home', component:Home, name:'home'},  {path:'/teQuan', component:TeQuan, name:'teQuan', 
    children:[ {path:'vip', component:VIP, name:'vip'},  {path:'love', component:Love, name:'love'},  {path:'super', component:Super, name:'super'},
    //路由重定向 
    {path:'/teQuan', redirect:'/teQuan/vip',name:'teQuan'}
]
 }, 
  { path: '/toconfigure', component: ToConfigure,name: 'toconfigure' },
    { path: '/pyq', component: Pyq,name: 'pyq' },
    //路由重定向 
    {path:'/', redirect:'/home'}
]
//实例化路由
const router = new VueRouter( {
    routes
})
//暴露路由
export default router


