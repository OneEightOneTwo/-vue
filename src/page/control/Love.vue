<template>
  <div>
    <ul>
      <li>
        <div class="left">
          <img src="../../assets/加.jpg" alt>
        </div>
        <div class="right">
          <p class="p1">查看谁喜欢我</p>
          <p class="p2">Ta喜欢了我？右划立即配对!</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div{
  height: 100px;
  overflow: hidden;
}
li {
  width: 100%;
  height: 2.2rem;
  float: left;
}
.left {
  width: 1.333333rem;
  height: 1.333333rem;
  float: left;
  margin: 0.466667rem;
}
.left img {
  width: 1.333333rem;
  height: 1.333333rem;
  border-radius: 50%;
}
.right {
  float: left;
  margin-top: 0.466667rem;
}
.p1 {
  font-size: 0.453333rem;
  font-weight: 500;
}
.p2 {
  margin-top: 0.133333rem;
  font-size: 0.293333rem;
  color: #a3a3a3;
}
</style>
