<template>
  <div v-show="this.state.bool">
    <div @click="show" class="zheZhao"></div>
    <div class="warn">
      <div class="top">
        <a class="a1" href>常见问题</a>
        <a class="a2" href>恢复购买</a>
      </div>
      <div class="bottom">
        <a @click="show" href="##">取消</a>
      </div>
    </div>
  </div>
</template>

<script>
import state from "../observable.js"
export default {
    methods:{
        show(){
            this.state.bool=false;
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
.warn {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  z-index: 2;
}
.zheZhao {
  width: 100%;
  height: 17.773333rem;
  background: #000000;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
}
.top {
  width: 9.493333rem;
  height: 2.933333rem;
  background: #fff;
  border-radius: 0.133333rem;
}
a {
  display: block;
  font-size: 0.48rem;
  height: 1.466667rem;
  text-align: center;
  line-height: 1.466667rem;
  text-decoration: underline;
  color: #4a4a4a;
}
.a1 {
  border-bottom: 0.026667rem solid #909090;
}
.bottom {
  width: 9.493333rem;
  height: 1.626667rem;
  background: #d84d38;
  margin-top: 0.133333rem;
  margin-bottom: 0.266667rem;
  border-radius: 0.133333rem;
}
.bottom a {
  color: #fff;
}
</style>
