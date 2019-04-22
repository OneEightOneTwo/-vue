<template>
  <div class="JiMain">
    <div class="top">
      <ul>
        <li v-for="(item,index) in top" :key="index" @click="Tab(index)">
          <a :class="{'active':num==index}" href="#" v-text="item.text"></a>
        </li>
      </ul>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: [{ text: "VIP特权",name:"vip" }, { text: "查看谁喜欢我",name:"love" }, { text: "超级曝光",name:"super" }],
      //高亮下标
      num:0,
    };
  },
  methods: {
    //选项卡高亮
    Tab(i) {
      this.num=i;
      //获取top中name的值
      let name=this.top[i].name;
      //跳转路由
      this.$router.push({name});
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.top {
  height: 1.386667rem;
}
ul {
  display: flex;
}
li {
  float: left;
  flex: 1;
  font-size: 0.4rem;
  text-align: center;
  height: 1.386667rem;
  line-height: 1.386667rem;
  font-weight: 600;
}
li a {
  color: #bdbdbd;
  display: inline-block;
  height: 100%;
}
.active {
  color: #c57457;
  border-bottom: 2px solid #c57457;
}
</style>
