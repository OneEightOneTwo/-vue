<template>
  <div id="app2"  :style="this.state.num?'right:85%':'right:0'">
    <div class="main">
      <dl class="dl1">
        <dt></dt>
        <dd class="dd1">来日可期</dd>
        <dd class="dd2">
          <span class="span1">
            <i></i>
            21
          </span>
          <span class="span2">双子座</span>
          <p>900m</p>
        </dd>
      </dl>
      <dl class="dl2">
        <dt></dt>
        <dd class="dd1">来日可期</dd>
        <dd class="dd2">
          <span class="span1">
            <i></i>
            21
          </span>
          <span class="span2">双子座</span>
          <p>900m</p>
        </dd>
      </dl>
      <dl class="dl3" :class="{'turn':bool}">
        <dt></dt>
        <dd class="dd1">来日可期</dd>
        <dd class="dd2">
          <span class="span1">
            <i></i>
            21
          </span>
          <span class="span2">双子座</span>
          <p>900m</p>
        </dd>
      </dl>
    </div>
    <div class="btns">
      <img class="img1" src="../assets/返回.png">
      <img @click="wrong" class="img2" src="../assets/错.png">
      <img class="img1" src="../assets/闪电.png">
      <img @click="wrong" class="img2" src="../assets/心.png">
      <img class="img1" src="../assets/星.png">
    </div>
  </div>
</template>
<script>
import state from "../observable.js";
export default {
  data() {
    return {
      bool: false
    };
  },
  methods: {
    wrong() {
      this.bool = !this.bool;
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
html,
body {
  height: 100%;
}
.love{
  transform-origin: right bottom;
  animation: love 1s ease-in;
  animation-fill-mode:forwards;
}
@keyframes love {
   0% {
    opacity:1;
    transform-origin: 10px bottom;
    transform: rotateZ(0deg);
  }
  100% {
    opacity:0;
    transform-origin: 80px bottom;
    transform: rotateZ(10deg);
  }
}
.turn {
  /* transform:rotate(-5deg);
  transition: all 0.3s; */
  transform-origin: 1px bottom;
  animation: close .3s ease-in;
  animation-fill-mode:forwards;
}
@keyframes close {
  0% {
    opacity:0.8;
    transform-origin: 10px bottom;
    transform: rotateZ(0deg);
  }
  100% {
    opacity:0;
    transform-origin: 80px bottom;
    transform: rotateZ(-10deg);
  }
}
.clear:after {
  clear: both;
  content: " ";
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
#app2 {
  background: #f6f5f3;
  overflow: hidden;
  position: relative;
  right:0;
  transition: all 1s;
}
.main {
  margin: 0.266667rem;
  height: 13.606667rem;
  display: flex;
  justify-content: center;
  position: relative;
}
dl {
  width: 9rem;
  border: 0.0625rem solid #ccc;
  background: #fff;
  position: absolute;
  top: 0;
}
.dl1 dt {
  background: yellow;
  width: 9rem;
  height: 10.36rem;
}
.dl2 dt {
  background: #58bc58;
  width: 9rem;
  height: 10.36rem;
}
.dl3 dt {
  background: cadetblue;
  width: 9rem;
  height: 10.36rem;
}
.dd1 {
  font-size: 0.44rem;
  font-weight: 700;
  margin: 0.306667rem;
}
.dd2 {
  margin: 0.306667rem;
}
.dd2 span {
  display: inline-block;
  font-size: 0.28rem;
  color: #fff;
  border-radius: 0.133333rem;
  height: 0.44rem;
  line-height: 0.44rem;
}
.span1 {
  width: 0.893333rem;
  background-color: #efcdee;
  margin-right: 0.3125rem;
}
.span1 i {
  display: inline-block;
  background: url(../assets/女.png) no-repeat;
  background-size: 0.28rem;
  width: 0.28rem;
  height: 0.28rem;
  position: relative;
  top: 0.066667rem;
  margin-left: 0.066667rem;
}
.dd2 p {
  color: #9d9d9d;
  font-size: 0.253333rem;
}
.span2 {
  width: 1.106667rem;
  background: #fa7b06;
  text-align: center;
}

.btns {
  background: #f6f5f3;
  display: flex;
  justify-content: center;
}
.btns img {
  margin: 0.026667rem;
  margin-bottom: 0.453333rem;
}
.img1 {
  border: 0.053333rem solid #eeedeb;
  border-radius: 50%;
  background: #fff;
  padding: 0.333333rem;
}
.img2 {
  border: 0.066667rem solid #eeedeb;
  border-radius: 50%;
  background: #fff;
  padding: 0.4rem;
}
</style>


