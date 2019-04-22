<template>
  <div id="dome">
    <!-- 左图标 -->
    <div v-if="isShowBack" class="left" @click="showActionsheet"></div>
    <div v-else class="emptyIcon"></div>
    <!-- 标题 -->
    <div class="center">
      <slot></slot>
    </div>
    <!-- 右图标 -->
    <div v-if="isShowHam"  class="right"></div>
    <div v-else class="emptyIcon1"></div>
  </div>
</template>

<style scoped>
#dome {
  width: 100%;
  height: 1.333333rem;
  background: #d94c38;
  display: flex;
  justify-content: center;  
  font-size: 0.466667rem;
  opacity: 0.9;
}
.center {
  color: #fff;
  line-height: 1.333333rem;
  text-align: center;
  flex: 2;
}
.left {
  background: url(../assets/菜单.png) no-repeat center;
  background-size: 0.573333rem;
  flex: 1;
}
.right {
  background: url(../assets/信息.png) no-repeat center;
  background-size: 0.573333rem;
  flex: 1;
  
}
.emptyIcon{
  background: url(../assets/houtui.png) no-repeat center;
  background-size: 0.573333rem;
  flex: 1;
}
.emptyIcon1{
  background: url(../assets/xiangji.png) no-repeat center;
  background-size: 0.573333rem;
  flex: 1;
}
</style>
<script>
import state from '../observable.js'
export default {
  props: ["isShowBack", "isShowHam"],
  methods:{
    showActionsheet(){
      this.state.isActionsheet = !this.state.isActionsheet
    }
  },
  computed:{
    state(){
      return state
    }
  }
}
</script>

