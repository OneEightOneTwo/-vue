<template>
  <div class="aa" :style="this.state.isActionsheet?'margin:0 -92% 0 90%;':'margin: 0;'">
    <Xheader  :isMenu="true" :isShowHam="true">个人资料</Xheader>
    <!-- 头像 -->
    <img @click="todettt" src="../assets/757.jpg" alt>
    <!-- 信息 -->
    <div id="d2">
      <i class="i2"></i>
      <p>王 KK</p>
      <span class="s1">23&nbsp;</span>
      <span class="s2" style="margin-left:8px;">处女座</span>
      <br>

      <span style="font-size:15px; width: 50px;
  height: 23px;">0 m，</span>
      <span style="margin-left:0; font-size:15px; width: 80px;
  height: 23px;">刚刚活跃</span>
    </div>
    <div id="d3" @click="open5">
      <i class="i1"></i> 未完成真实头像认证，认证后可加速推荐&nbsp;>
    </div>
    <div id="d4">
      <img src alt>
      <p style="margin-bottom:7px;">
        <span>
          <b>5</b>
        </span>人喜欢了你
      </p>
      <p style="margin-left:42px;color:#ccc;">每天右滑越多，获得喜欢数越多哦&nbsp;!</p>
      <span class="s3">谁喜欢我?</span>
      <i class="i3"></i>
    </div>
    <Grxx/>
  </div>
</template>

<script>
import Xheader from "../components/Xheader.vue";
import state from '../observable.js'
import Grxx from '../components/Grxx.vue'
export default {
  name: "app",
  components: {
    Xheader,
    Grxx
  },
  methods: {
    open5() {
      this.$notify.info({
        title: "不好意思！",
        message: "还未开通此项功能！"
      });
    },
    //人信息页跳编辑页
    todettt() {
      // 跳转详情页并传递ID值
      this.$router.push({ name: "xxinxi" });
    }
  },
  computed:{
    state(){
      return state
    }
  }
};
</script>

<style scoped>
.aa{
  transition: margin .5s;
}
* {
  padding: 0;
  margin: 0;
}
img {
  width: 100%;
  height: 11.835rem;
}
#d2 {
  width: 100%;
  height: 2.94rem;
  margin-bottom: 0.55555624911111rem;
}
#d3 {
  width: 100%;
  height:1.11111041488889rem;
  font-size: 0.42rem;
  color: #fff;
  background: rgb(84, 154, 235);
  text-align: center;
  line-height:1.11111041488889rem;
}
#d4{
  width: 100%;
  height: 2.77777707888889rem;
  font-size:0.38888958271111rem;
  margin-bottom: 2.22222291311111rem;
}
p {
  margin-left:0.61111041568889rem;
}
span {
  margin-left:0.61111041568889rem;
  display: inline-block;
  text-align: center;
  line-height:0.63888958231111rem;
}
.s1 {
  width:1.38888958111111rem;
  height:0.63888958231111rem;
  background: rgb(142, 177, 230);
  border-radius: 0.2499999996rem;
  text-align: right;
  font-size: 0.38888958271111rem;
  color: #fff;
  padding-right:0.0833333332rem;
}
.s2 {
  width:1.38888958111111rem;
  height:0.63888958231111rem;
  background: rgb(24, 182, 24);
  border-radius:0.2499999996rem;
  font-size:0.38888958271111rem;
  color: #fff;
}
.s3 {
  position: absolute;
  bottom: -0.05555624991111rem;
  right: 0.55555624911111rem;
  color: red;
}
i {
  width: 0.55555624911111rem;
  height: 0.55555624911111rem;
  display: inline-block;
  position: absolute;
}
.i2 {
  background: url(../assets/nv.png) no-repeat;
  left:0.9166666652rem;
  top:13.57rem;
}
.i1 {
  background: url(../assets/zheng.png) no-repeat;
  left:0.2499999996rem;
  top:15.88rem;
  background-size:0.5833333324rem;
}
.i3 {
  background: url(../assets/心.png) no-repeat;
  left: 0.3333333328rem;
  top:17.34rem;
  background-size: 0.5833333324rem;
}
</style>
