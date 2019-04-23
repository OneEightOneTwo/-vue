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
      this.state.num =!this.state.num;
      
    },
        todettt() {
      // 跳转详情页并传递ID值
      this.$router.push({ name: "xxinxi" });
    },
      back() {
      // 返回
      this.$router.go(-1);
    },
     showDialog() {
      // 触发action的setIsShowDialog
      this.$store.dispatch("setIsShowDialog", true);
    },
    Isleft(){
      this.state.isActionsheet=!this.state.isActionsheet
  
    }
  },
  computed: {
    state() {
      return state;
    }
  }
} 
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
/* css是局部样式 */
header {
  width: 100%;
  height: 1.38888958rem;
  line-height: 1.38888958rem;
  text-align: center;
  color: white;
  background-color: red;
  position:fixed;
  top:0;
  left:0;
  /* 弹性盒布局 */
  display: flex;
  }
  .leftIcon {
    background-image: url(../assets/back.png);
    background-repeat: no-repeat;
    background-size: 0.66666666rem;
    background-position: center;
    flex: 1;
  }

  .title {
    flex: 3;
  }
  .rightIcon {
    background-image: url(../assets/bi.png);
    background-repeat: no-repeat;
    background-size: 0.66666666rem;
    background-position: center;
    flex: 1;
  }
  /* 空图标 */
  .emptyIcon {
    flex: 1;
  }

</style>

