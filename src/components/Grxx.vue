<template>
<div id="bjtx" :style="this.state.isActionsheet?'margin-left:0;':'margin-left:-92%;'" @click="showActionsheet">
    <div id="dk" >
        <el-header id="tou" style="height: 5.4rem;">
            <div class="txiang">
                <img class="yhtx" src="../assets/豆腐来明哥.gif">
                <br>
                <span class="yhm">豆腐来明哥</span>
                <br>
                <a href ="javascript:return false;" class="bianji">点击查看/编辑</a>
            </div>
        </el-header>
        <el-main id="nr" style="padding:.546667rem 0 0 1.2rem;">
            <p class="gneng_a" @click="tiaozhuan2"><img class="gneng" src="../assets/iconset0146.png" alt=""><span>探探</span></p>
            <br>
            <p  @click="jiHuo" class="gneng_a"><img class="gneng" src="../assets/huangguan.png" alt=""><span>激活特权</span></p>
            <br>
            <p class="gneng_a"><img class="gneng" src="../assets/Id.png" alt=""><span>认证中心</span></p>
            <br>
            <p class="gneng_a"><img class="gneng" src="../assets/xinfeng.png" alt=""><span>匿名暗恋表白</span></p>
            <br>
            <p class="gneng_a" @click="tiaozhuan1"><img class="gneng" src="../assets/setupb.png" alt=""><span>设置</span></p>
            <br>
            <p class="gneng_a"><img class="gneng" src="../assets/xinshoubangzhu.png" alt=""><span>新手引导</span></p>
            <br>
            <p class="gneng_a"><img class="gneng" src="../assets/fenxiang.png" alt=""><span>推荐给好友</span></p>
        </el-main>
    </div>
</div>
</template>
<script>
import state from '../observable.js'
export default {
  methods:{
    showActionsheet(){
    //   this.state.isActionsheet = !this.state.isActionsheet
    },
    // 跳转设置toconfigure
    tiaozhuan1(){
        this.state.isActionsheet = !this.state.isActionsheet
        this.$router.push({ name: 'toconfigure', params: { id: 123 }})
    },
    // 跳转主页home
    tiaozhuan2(){
        this.state.isActionsheet = !this.state.isActionsheet
        this.$router.push({ name: 'home', params: { id: 123 }})
    },
    // 跳转朋友圈pyq
    tiaozhuan3(){
        // this.state.isActionsheet = !this.state.isActionsheet
        this.$router.push({ name: 'pyq', params: { id: 123 }})
    },
    jiHuo(){
        this.$router.push({ name: 'teQuan', params: { id: 123 }})
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
/* 遮罩以头像当背景 */
#bjtx{
    width: 337.5px;
    height: 100%;
    background-image: url(../assets/豆腐来明哥.gif);
    background-size: 150% 100%;
    position: fixed;
    top: 0;
    left: -3%;
    z-index: 12;
    transition: margin .5s;
    
}
/* 模糊处理 */
#bjtx:after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: blur(.066667rem);
    z-index: 13;
}
#dk{
    display: flex;
    background-color: rgba(0, 0, 0, 0.801);
    flex:1;
    flex-direction:column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: aliceblue;
    font-size: .2rem;
    z-index: 15;
}
a{
    text-decoration: none;
}
.txiang{
    margin: 5% 25%;
    text-align:center;
}
.yhm{
    font-size: .626667rem;
    color: rgb(172, 171, 171);
}
.yhtx{
    width: 2.5555rem;
    border-radius: 50%;
}
.bianji{
    color:rgb(160, 153, 144);
    font-size: .383333rem;
}
.gneng{
    height: .666666rem;
    position: absolute;
    top: -0.04rem;
}
.gneng_a{
    color:rgb(196, 188, 176);
    display: block;
    margin-bottom: .666667rem;
    /* margin-top: 15px; */
    position: relative;
    font-size: .46666rem;
}
.gneng_a span{
    /* margin-top: -30px; */
    display: inline-block;
    height: .386667rem;
    /* margin-top: -5px; */
    padding-left: 1.6rem;
}
</style>


