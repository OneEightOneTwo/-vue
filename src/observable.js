import Vue from 'vue'
// 公有变量
const state = Vue.observable({
    // 控制弹窗的出现
    // isActionsheet: false,
  
    // 控制loadging的出现或者隐藏
    isToast: 0
})

export default state