<template>
  <div class="VIP">
    <ul>
      <li v-for="(item,index) in VIP" :key="index">
        <div class="left">
          <img :src="item.tu" alt>
        </div>
        <div class="right">
          <p class="p1" v-text="item.text1"></p>
          <p class="p2" v-text="item.text2"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      VIP: [
        {
          tu: require("../../assets/皇冠.jpg"),
          text1: "每天五个'超级喜欢'",
          text2: "昵称升级红色,专属身份标识！"
        },
        {
           tu: require("../../assets/星星.jpg"),
          text1: "会员身份识别",
          text2: "喜欢更有分量，配对飙升5倍！"
        },
        {
          tu: require("../../assets/返回1.jpg"),
          text1: "划错无线反悔",
          text2: "强力反悔，瞬间找回错过缘分！"
        },
        {
          tu: require("../../assets/定位.jpg"),
          text1: "任意更改定位",
          text2: "定位漫游，与全球朋友Say嗨！"
        },
        {
          tu: require("../../assets/爱心.jpg"),
          text1: "无限喜欢次数",
          text2: "突破限制，放肆喜欢不在顾虑！"
        },
      ]
    };
  }
};
</script>
    
<style scoped>
.VIP{
  height:9.933333rem;
  overflow: scroll;
}
li {
  width: 100%;
  height: 2.2rem;
  float:left;
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
