<template>
  <div>
    <Xheader :isMenu="true" :isMessage="false">激活特权</Xheader>
    <Picture/>
    <JiMain/>
    <!-- <VIP/>
    <Love/>
    <Super/> -->
    <router-view></router-view>
    <Xfooter/>
    <Warn/>
  </div>
</template>

<script>
//头部
import Xheader from "../components/Xheader.vue";
//头像
import Picture from "./Picture.vue";
//选项卡
import JiMain from "./JiMain.vue";
//选项卡VIP内容
// import VIP from "./control/VIP.vue";
//选项卡喜欢内容
// import Love from "./control/Love.vue";
//选项卡超级喜欢内容
// import Super from "./control/Super.vue";
//尾部
import Xfooter from "./Xfooter.vue";
//弹窗
import Warn from "./Warn.vue";
export default {
  components: {
    Xheader,
    Picture,
    JiMain,
    // VIP,
    // Love,
    // Super,
    Xfooter,
    Warn
  }
};
</script>

<style>
</style>
