import Vue from 'vue'; 

const state = Vue.observable( {
    //控制弹窗的出现
    bool:false,
    //右边菜单
    num:false,
    isActionsheet:false,
     // 控制loadging的出现或者隐藏
    isToast: 0
}); 

export default state

