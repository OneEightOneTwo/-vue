<template>
<div id="d1">
  <el-carousel :interval="4000" type="card"  >
    <el-carousel-item v-for="item in 3" :key="item" height="660px">
      <img src="../assets/757.jpg" alt>
    </el-carousel-item>
  </el-carousel>
<div class="aa">
  <p plain
    @click="open5" center="boolean" style="background:#58bc58; position: relative;margin-bottom:12px;">
    微信登录
    <img style="position: absolute;top:20px;left:56px;width:30px;height:30px;" src="../assets/wei.png" alt="">
    </p>
    <!-- 编程式导航，实现跳转 -->
  <p @click="todetali" >手机号登录</p>
</div>

</div>
</template>

<script>
// import state from "../observable.js";
export default {
  // data() {
  //   return {
  //     //新闻
  //     news: [],
  //   };
  // },
  // 创建前 虚拟DOM没有，但数据有
  // async created() {
  //     this.loadMore();

  // },
  methods: {
  //   async loadMore() {
  //     let {
  //       data: { data }
  //     } = await this.$axios
  //       //api接口
  //       .get("https://cnodejs.org/api/v1/topics", {
  //         params: {
  //           page: 1,
  //           //每页的条数
  //           limit:8
  //           //主题
  //           // tab:this.tab
  //         }
  //       });
  //     // console.log(data);
  //     //请求结束让加载隐藏
  //   }
     // 跳转手机登录页
    todetali() {
      // 跳转详情页并传递ID值
      this.$router.push({ name: "shouji", params: {id:123} });
    },
      open5() {
        this.$notify.info({
          title: '不好意思！',
          message: '还未开通此项功能！'
        });
      },
  },

};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: .186667rem;
  opacity: 0.75;
  line-height: 4.8rem;
  margin: 0;
}
img {
  width: 100%;
  height: 100%;
}
#d1{
  width:100%;
  height: 100%;

}
.aa{
  width: 3.6rem;
  height: 2.666667rem;
    /* background: #475669; */
  position: absolute;
 
  bottom: 2.346667rem;
  left:14%;
}
p{
   width: 6.6rem;
  height: 1.8rem;
  border:1px solid #ccc;
  border-radius: .133333rem;
  text-align: center;
  line-height: 1.8rem;
  font-size: 0.555556249rem;
}
</style>
