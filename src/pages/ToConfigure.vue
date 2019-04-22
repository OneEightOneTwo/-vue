<template>
    <div id="shezhi" :style="this.state.isActionsheet?'margin:0 -90% 0 90%;':'margin:0;'">
        <Xheader :isShowBack="true" :isShowHam="true">设置</Xheader>
        <Grxx />
        <div class="main">
                <p class="main_xbtm">向我显示</p>
            <ul class="main_xbt">
                <li class="weizhi">
                    <span style="line-height: 1.94444375rem;">
                        位置
                        <el-popover
                        placement="right"
                        ref="popover"
                        width="200"
                        trigger="click">
                            <el-table :data="gridData">
                                <el-table-column width="200" property="date" label="地区"></el-table-column>
                                <!-- <el-table-column width="100" property="name" label="姓名"></el-table-column>
                                <el-table-column width="300" property="address" label="地址"></el-table-column> -->
                            </el-table>
                            <el-button slot="reference" @click="getValue" class="button_dw">
                                <span style="font-size: 0.5rem;color: #000;">我当前的定位</span>
                                <br>
                                <span v-text="currentData" ref="currentDataCon"></span>
                            </el-button>
                        </el-popover>
                    </span>
                </li>
                <li class="fanwei">
                    <p><span>范围</span><span>km+</span><span v-text="value8">100</span></p>
                    <i class="dplb zixingche"></i>
                    <div style="width: 95%;margin-left:2%;" class="dplb">
                        <div class="block">
                            <el-slider
                            v-model="value8">
                            </el-slider>
                        </div>
                    </div>
                    <i class="dplb feiji"></i>
                </li>
                <li class="kafw">
                    <span>自动扩大范围</span>
                    <br>
                    <span class="xiaozijieshao">如果用户较少，自动适量扩大范围</span>
                    <div class="fanweianniu">
                        <el-switch
                        v-model="value2"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                        </el-switch>
                    </div>
                </li>
                <li style="height: 1.66666666rem;">
                    <span style="line-height: 1.66666666rem;">显示性别</span>
                        <el-select v-model="value" placeholder="请选择" class="xzxb">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                </li>
                <li class="nianling">
                    <p><span style="margin-right: 65%;">年龄</span><span v-text="value9[0]"></span><span>-</span><span v-text="value9[1]"></span><span>+</span></p>
                    <div class="block">
                        <el-slider
                        v-model="value9"
                        range
                        show-stops
                        :step="2"
                        :min="18"
                        :max="50">
                        </el-slider>
                    </div>
                    <i class="nl_maozi"></i><i class="nl_shafa"></i>
                </li>
            </ul>
                <p class="main_xbtm">应用设置</p>
            <ul class="main_xbt main_xbt2">
                <li>
                    <i class="yy_tb"></i>
                    <span class="yy_xx">个人信息</span>
                    <br>
                    <span class="xiaozijieshao">编辑姓名等</span>
                </li>
                <li>
                    <i class="yy_tb"></i>
                    <span class="yy_xx">隐私和通知</span>
                    <br>
                    <span class="xiaozijieshao">联系人,我的相册,朋友圈和通知设置</span>
                </li>
                <li>
                    <i class="yy_tb"></i>
                    <span class="yy_xx">数据和缓存</span>
                    <br>
                    <span class="xiaozijieshao">数据和缓存设置</span>
                </li>
                <li>
                    <i class="yy_tb"></i>
                    <span class="yy_xx">帐号与安全</span>
                    <br>
                    <span class="xiaozijieshao">修改手机号和密码</span>
                </li>
            </ul>
            <ul class="main_xbt main_xbt3">
                <li>
                    <i class="yy_tb"></i>
                    <span class="yy_xx">帮助与反馈</span>
                    <br>
                    <span class="xiaozijieshao">感谢你提出对探探的宝贵意见</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Xheader from '../components/Xheader.vue'
import Grxx from '../components/Grxx.vue'
import state from '../observable.js'
export default {
  components: {
    Grxx,
    Xheader
  },
    data() {
      return {
          value1: true,
        value2: true,
        value8: 0,
        value9: [4, 8],
        currentData: '中国，广州',
        visible: false,
        gridData: [{
          date: '中国,广州'
        }, {
          date: '中国,台湾'
        }, {
          date: '中国,北京'
        }, {
          date: '中国,上海'
        }, {
          date: '中国,钓鱼岛'
        }, {
          date: '中国,西藏'
        }],
        options: [{
          value: '选项1',
          label: '公'
        }, {
          value: '选项2',
          label: '母'
        }, {
          value: '选项3',
          label: '母鸡'
        }],
        value: ''
      };
    },
    methods: {
        getValue() {
            this.visible = !this.visible
            if(this.visible) {
                let elBody = document.getElementsByClassName('el-table__body')[0]
                let tbody = elBody.children[1]
                tbody.onclick = (e) => {
                    this.currentData = e.target.innerText
                    this.$refs.currentDataCon.innerText = e.target.innerText
                }
            }
        }
    },
    computed:{
    state(){
      return state
    }
  }

}
</script>
<style scoped>
#shezhi{
    display: flex;
    flex-direction: column;
    transition: margin .5s;
}
.dplb{
    display: inline-block;
}
.main{
    width: 100%;
    background: rgb(241, 241, 241);
    font-size: .5rem;
}
.main_xbt{
    /* padding-top: 0.5rem; */
    background: rgb(255, 255, 255);
    position: relative;
}
.main_xbt li{
    background: #fff;
    position: relative;
    margin-left: 5%;
    height: 1.943333rem;
    border-bottom: 0.02777083rem solid rgb(241, 241, 241);
}
.main_xbtm{
    padding-left: 5%;
    font-size: .444443rem;
    color: rgb(116, 116, 116);
    line-height: 1.25rem;
    padding-top: .5rem;
}
.weizhi{
    height: 1.38888958rem;
}
.el-button{
    border: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.button_dw{
    padding-right: 1.38888958rem;
    height: 1.94444375rem;
    background: url(../assets/jiantou.png)no-repeat right center;
}
.zixingche{
    position: absolute;
    left: 0;
    top: 50%;
    width: 0.83333333rem;
    height: 0.83333333rem;
    background: url(../assets/zixingche.png) no-repeat center;
    background-size: 80% 80%;
}
.feiji{
    position: absolute;
    right: 4%;
    top: 50%;
    width: 0.83333333rem;
    height: 0.83333333rem;
    background: #000;
    background: url(../assets/weibiaoti-.png) no-repeat center;
    background-size: 80% 80%;
}
.fanwei{
    padding-top: 0.27777708rem;
}
.fanwei p{
    height: 0.72222292rem;
    padding-right: 4%;
}
.fanwei p span:nth-child(1){
    float: left;
}
.fanwei p span:nth-child(2),.fanwei p span:nth-child(3){
    float: right;
    font-size: 0.27777708rem;
    font-weight:900;
}
.kafw{
    padding-top: 0.55555625rem;
}
.xiaozijieshao{
    font-size: 0.38888958rem;
    color: rgb(116, 116, 116);
}
.fanweianniu{
    position: absolute;
    right: 5%;
    top: 30%;
}
.xzxb{
    float: right;
    margin-top: 0.27777708rem;
    margin-right: 5%;
}
.nianling p span:nth-child(2),.nianling p span:nth-child(3),.nianling p span:nth-child(4),.nianling p span:nth-child(5){
    font-size: 0.38888958rem;
    font-weight:900;
    margin-left: 1%;
    color: rgb(116, 116, 116);
}
.block{
    width: 70%;
    margin-left: 12%;
}
.nl_maozi{
    width: 0.55555625rem;
    height: 0.55555625rem;
    background: url(../assets/xuexiao.png)no-repeat left center;
    background-size: 90% 90%;
    position: absolute;
    left: 0;
    top: 50%;
}
.nl_shafa{
    width: 0.55555625rem;
    height: 0.55555625rem;
    background: url(../assets/shafa.png)no-repeat left center;
    background-size: 90% 90%;
    position: absolute;
    right: 5%;
    top: 50%;
}
.yy_tb{
    position: absolute;
    left: 0;
    top: 22%;
    width: 0.69444375rem;
    height: 0.69444375rem;
    background: #000;
}
.yy_xx{
    margin-left: 10%;
}
.main_xbt2 li:nth-child(1) .yy_tb{
    background: url(../assets/gerenxinxi.png)no-repeat left center;
    background-size: 100% 100%;
}
.main_xbt2 li:nth-child(2) .yy_tb{
    background: url(../assets/ziyuan.png)no-repeat left center;
    background-size: 100% 100%;
}
.main_xbt2 li:nth-child(3) .yy_tb{
    background: url(../assets/shezhi.png)no-repeat left center;
    background-size: 100% 100%;
}
.main_xbt2 li:nth-child(4) .yy_tb{
    background: url(../assets/anquan.png)no-repeat left center;
    background-size: 100% 100%;
}
.main_xbt3 li .yy_tb{
    background: url(../assets/fankui.png)no-repeat left center;
    background-size: 100% 100%;
}
.main_xbt2 li,.main_xbt3 li{
    padding-top: 5%;
    background: url(../assets/jiantou.png)no-repeat right center;
}
.main_xbt3 li{
    margin-top: 0.83333333rem;
}
</style>


