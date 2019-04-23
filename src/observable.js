import Vue from 'vue'; 

const state = Vue.observable( {
    //控制弹窗的出现
    bool:false,
    //右边菜单
    num:false,
    isActionsheet:false,
}); 

export default state
