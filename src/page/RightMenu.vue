<template>
  <div :style="this.state.num?'right:-15%':'right:-100%'" class="RightMenu">
    <div class="head">
      <a href>2个配对</a>
    </div>
    <div class="centre">
      <div class="left">
        <i>
          <img src="../assets/朋友圈.jpg" alt>
        </i>
        <p>朋友圈</p>
      </div>
      <div class="right">
        <div>
          <img src="../assets/头像.jpg" alt>
        </div>
        <i>></i>
      </div>
    </div>
    <div class="bottom">
      <p v-for="(item,index) in Tob" :key="index" @click="tab(index)">
        <a href="##" v-text="item.text" :class="{'active':num==index}"></a>
      </p>
    </div>
    <Pair v-show="num==0"/>
    <Chat v-show="num==1"/>
  </div>
</template>

<script>
//公共变量
import state from "../observable.js";
//选项卡
import Pair from "./control2/Pair.vue";
import Chat from "./control2/Chat.vue";

export default {
  components:{
    Pair,
    Chat
  },
  data() {
    return {
      Tob: [{ text: "所有配对",name:'pair' }, { text: "聊天",name:'chat' }],
      num: 0
    };
  },
  methods: {
    show() {
      this.state.num = false;
    },
    tab(i) {
      this.num = i;
    }
  },
  computed: {
    state() {
      return state;
    }
  }
};
</script>

<style scoped>
.RightMenu {
  overflow: hidden;
  width: 100%;
  height: 17.786667rem;
  background: #2F3028;
  position: absolute;
  right: -90%;
  top: 0;
  transition: all 3s;
}
.head {
  width: 100%;
  height: 1.733333rem;
  border-bottom: 0.013333rem solid #5b5b5b;
  text-align: center;
  line-height: 1.733333rem;
}
.head a {
  display: inline-block;
  color: #fff;
  padding-right: 1.6rem;
  font-size: 0.44rem;
}
.centre {
  height: 1.333333rem;
  width: 8rem;
  background: #7d7d7d;
  border-radius: 0.133333rem;
  margin: 0.266667rem;
}
.centre .left {
  float: left;
  height: 100%;
}
.centre .left i {
  display: inline-block;
  margin: 0.293333rem;
}
.centre .left img {
  display: inline-block;
  width: 0.773333rem;
  height: 0.773333rem;
}
.centre .left p {
  display: inline-block;
  position: relative;
  top: -10px;
  color: #fff;
  font-size: 0.4rem;
}
.centre .right {
  float: right;
}
.centre .right div {
  display: inline-block;
}
.centre .right img {
  width: 0.906667rem;
  height: 0.906667rem;
  border: 0.013333rem solid #fff;
  border-radius: 50%;
  display: inline-block;
  margin: 0.213333rem;
  margin-right: 0.266667rem;
}
.centre .right i {
  position: relative;
  top: -0.6rem;
  right: 0.213333rem;
  color: #dfdbd0;
}
.bottom {
  height: 0.813333rem;
  width: 8rem;
  border: 0.013333rem solid #766d68;
  margin: 0.266667rem;
  display: flex;
}
.bottom p {
  flex: 1;
  text-align: center;
  line-height: 0.813333rem;
}
.bottom p a {
  display: inline-block;
  color: #c8bcbc;
  text-decoration: none;
  width: 100%;
}
.active {
  background: #7d7d7d;
  color: #fff !important ;
}
</style>
