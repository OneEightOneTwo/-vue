<template>
  <div class="picture">
    <div class="center"></div>
    <div class="left"></div>
    <div class="right">
      <p class="p1">不懂</p>
      <p class="p2">暂未激活会员</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.picture {
  position: relative;
}
.picture .center {
  width: 100%;
  height: 3.466667rem;
  background: url(../assets/头像.jpg) no-repeat;
  background-size: 100%;
  opacity: 0.7;
  filter: blur(6px);
}
.picture .left {
  width: 1.84rem;
  height: 1.84rem;
  border-radius: 50%;
  background: url(../assets/头像.jpg) no-repeat;
  background-size: 100%;
  position: absolute;
  left: 16%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.right {
  position: absolute;
  left: 39%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.right .p1 {
  font-size: 0.466667rem;
  color: #fff;
  margin-bottom:.133333rem;
}
.right .p2 {
  font-size: 0.333333rem;
  color: #636268;
}
</style>
