<template>
  <div id="dome" :style="this.state.num?'right:85%':'right:0'">
    <!-- 左图标 -->
    <div v-if="isMenu" class="left" @click="Isleft"></div>
    <div v-else class="empty"></div>
    <!-- 标题 -->
    <div class="center">
      <slot></slot>
    </div>
    <!-- 右图标 -->
    <div @click="menu" v-if="isMessage" class="right" id="aa"></div>
    <div @click="show" v-else class="empty">更多</div>
  </div>
</template>
<script>
import state from "../observable.js";
export default {
  props: ["isMenu", "isMessage"],
  methods: {
    show() {
      this.state.bool = true;
    },
    menu() {
      this.state.isok =false;
      this.state.num =!this.state.num;
      
    },
    Isleft(){
      this.state.isok =true;
      this.state.isActionsheet=!this.state.isActionsheet
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
#dome {
  width: 100%;
  height: 1.333333rem;
  background: #d94c38;
  display: flex;
  justify-content: center;
  font-size: 0.466667rem;
  opacity: 0.8;
  position: relative;
  right:0;
  transition: all 1s;
}
.center {
  color: #fff;
  line-height: 1.333333rem;
  text-align: center;
  flex: 2;
}
.left {
  background: url(../assets/菜单.png) no-repeat center;
  background-size: 0.8rem;
  flex: 1;
}
.right {
  background: url(../assets/信息.png) no-repeat center;
  background-size: 0.8rem;
  flex: 1;
}
.empty {
  flex: 1;
  text-align: center;
  line-height: 1.333333rem;
  color: #fff;
  text-decoration: underline;
}
</style>

