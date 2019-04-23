<template>
  <div id="dd">
    <div id="top">
      手机号登录
      <img @click="back" src="../assets/back.png" alt>
    </div>
    <div id="d1">
      <el-popover ref="popover" width="300" trigger="click" v-model="visible">
        <el-table :data="gridData">
          <el-table-column width="150" property="date" label="地区"></el-table-column>
          <el-table-column width="100" property="name" label="区号"></el-table-column>
        </el-table>
      </el-popover>

      <el-button slot="reference" @click="getValue" v-text="currentData" ref="currentDataCon"></el-button>
    </div>
    <input
     autofocus="autofocus"
      maxlength='11'
      v-model="mod"
      v-on:input="zhengze"
      style="outline:none;cursor: pointer;"
      type="number"
      placeholder="输入手机号"
    >
    <span v-show="chu">错误！</span>
    <div id="but" @click="todettt">继续</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //默认数据
      currentData: "+86",
      visible: false,
      mod: "",
      chu: false,
      aaa:false,

      gridData: [
        {
          date: "中国",
          name: "+86"
          //   address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: "中国香港",
          name: "+852"
          //   address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: "中国台湾",
          name: "+886"
          //   address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: "中国古巴",
          name: "+53"
        },
        {
          date: "中国埃塞俄比亚",
          name: "+251"
        },
        {
          date: "中国丹麦",
          name: "+45"
        },
        {
          date: "中国俄罗斯",
          name: "+887"
        },
        {
          date: "中国美国",
          name: "+1"
        },
        {
          date: "中国日本",
          name: "+81"
        },
        {
          date: "中国索马里",
          name: "+252"
        },
        {
          date: "中国乌克兰",
          name: "+380"
        }
      ]
    };
  },
  methods: {
    getValue() {
      // console.log(this.visible)
      this.visible = !this.visible;
      if (this.visible) {
        let elBody = document.getElementsByClassName("el-table__body")[0];
        let tbody = elBody.children[1];
        tbody.onclick = e => {
          this.visible = !this.visible;
          // console.log(e.target)
          this.currentData = e.target.innerText;
          this.$refs.currentDataCon.innerText = e.target.innerText;
        };
      }
    },
    back() {
      //返回
      this.$router.go(-1);
    },
    //input正则
    zhengze() {
      if (this.mod.length == 11) {
        //  console.log(666)
        var reg = /^1[3456789]\d{9}$/;
        if (!reg.test(this.mod)) {
          this.chu = true
        }
      }
    },
    // 跳转个人信息页
    todettt() {
      // 跳转详情页并传递ID值
      this.$router.push({ name: "ziliao" });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#top {
  width: 100%;
  height: 1.38888958rem;
  background: red;
  line-height: 1.38888958rem;
  font-size:0.55555624911111rem;
  color: #fff;
  border-radius:0.36111041608889rem;
}
#top img {
  float: left;
  margin: 0.36111041608889rem 1.38888958rem 0 0.27777708288889rem;
  width: 0.7499999988rem;
}
.el-button {
  width: 100%;
  height: 100%;
}
#top {
  margin-bottom: 0.833333332rem;
}
#d1 {
  width: 2.2499999964rem;
  height: 1.36111041448889rem;
  float: left;
  margin: 0 0.833333332rem 0 0.69444374888889rem;
}
input {
  width: 4.999999992rem;
  height:1.249999998rem;
  border: none;
  border-bottom: 0.05555624991111rem solid red;
}
#el-popover-4285 {
  width: 9.3333333184rem;
  top: 0.19444374968889rem;
}
#but {
  width: 100%;
  background: red;
  text-align: center;
  line-height: 1.38888958rem;
  position: absolute;
  bottom: 2.77777707888rem;
  left: 0;
  color: #fff;
  border-radius: 0.361110416088rem;
  height: 1.38888958rem;
}
span{
  font-size: 0.36111041608rem;
  color:red;
}
</style>
