<template>
    <div id="pengyouquan" :style="this.state.isActionsheet?'margin:0 -90% 0 90%;':'margin:0;'">
        <Xheader :isMenu="true" :isShowHam="false">朋友圈</Xheader>
        <Grxx />
        <div class="main">
            <div class="yonghuxinxi">
                <img src="../assets/豆腐来明哥.gif" alt="">
                <span>豆腐来明哥</span>
                <button>消息列表</button>
                <div class="xian"></div>
            </div>
            <div class="xinxiliebiao">
                <ul>
                    <li>
                        <div class="pyq_shangbanbu">
                            <p><span class="pyq_yhm">老姚</span><span class="pyq_sj">02:07</span></p>
                            <span class="pyq_xx">人生三大爱好：抽烟、喝酒、烫头。</span>
                            <img class="peitu" src="../assets/6faae8fe9925bc317b6c29f553df8db1cb13700c.jpg" alt="">
                            <br>
                            <button class="simipinglun">私密评论</button>
                            <button class="xihuan">喜欢</button>
                            <img class="touxiang" src="../assets/6faae8fe9925bc317b6c29f553df8db1cb13700c.jpg" alt="">
                            <button class="gengduo">...</button>
                        </div>
                        <div class="pinglunqu">
                            <ul>
                                <p>
                                    <i class="dianzan1"></i>
                                    <i class="dianzan2"></i>
                                    <i class="dianzan3"></i>
                                    <i class="dianzan4"></i>
                                    <i class="dianzan5"></i>
                                    <i class="dianzan6"></i>
                                    <i class="dianzan7"></i>
                                    <i class="dianzan8"></i>
                                    <span class="shuliang">3万+</span>
                                </p>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">秀儿 : </span>
                                    <span class="pyq_plxx">你是要用我四十米的大刀削你的十五米长的铅笔么？</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">谁的小可爱 : </span>
                                    <span class="pyq_plxx">走吧。院长打电话来让我地啊你回去了</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">孙天真 : </span>
                                    <span class="pyq_plxx">我想那些平静的人 心中必定有自己的山水</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">迟暮 : </span>
                                    <span class="pyq_plxx">试过很多次 失望很多次 却还想再试一次</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">顾及 : </span>
                                    <span class="pyq_plxx">三里清风三里路 步步风里步步你</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">北遇 ：</span>
                                    <span class="pyq_plxx">是蛇一身冷，是狼一身腥</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">野川先生 ：</span>
                                    <span class="pyq_plxx">让你我在胸川撒野只有你能慰藉我的寂寞。</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">时间毁人心智 ：</span>
                                    <span class="pyq_plxx">不要总是依赖别人 你不累 别人也会烦 </span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">ONS VS LOST ：</span>
                                    <span class="pyq_plxx">不愿人潮拥挤只因有你有我足矣</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">牧童纪年 ：</span>
                                    <span class="pyq_plxx">别把秘密告诉风，它会传遍整个森林。</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">时间毁人心智 ：</span>
                                    <span class="pyq_plxx">你会喜欢我吗? 不会我教你啊 !</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">北遇 ：</span>
                                    <span class="pyq_plxx"> 就算在一起了，还是害怕最后失去很多</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">呓语 ：</span>
                                    <span class="pyq_plxx">我在等待，等一个人来陪我。</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="pyq_shangbanbu">
                            <p><span class="pyq_yhm">老姚梦中情人</span><span class="pyq_sj">02:07</span></p>
                            <span class="pyq_xx">总有些死变态想吃天鹅肉！恶心！</span>
                            <img class="peitu" src="../assets/npy4.jpg" alt="">
                            <br>
                            <button class="simipinglun">私密评论</button>
                            <button class="xihuan">喜欢</button>
                            <img class="touxiang" src="../assets/npy4.jpg" alt="">
                            <button class="gengduo">...</button>
                        </div>
                        <div class="pinglunqu">
                            <ul>
                                <p>
                                    <i class="dianzan1"></i>
                                    <i class="dianzan2"></i>
                                    <i class="dianzan3"></i>
                                    <i class="dianzan4"></i>
                                    <i class="dianzan5"></i>
                                    <i class="dianzan6"></i>
                                    <i class="dianzan7"></i>
                                    <i class="dianzan8"></i>
                                    <span class="shuliang">3万+</span>
                                </p>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">秀儿:</span>
                                    <span class="pyq_plxx">你是要用我四十米的大刀削你的十五米长的铅笔么？</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm" >谁的小可爱:</span>
                                    <span class="pyq_plxx" >走吧。院长打电话来让我地啊你回去了</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="pyq_shangbanbu">
                            <p><span class="pyq_yhm">宅男克星</span><span class="pyq_sj">02:07</span></p>
                            <span class="pyq_xx">家庭常备。手冲搞起来~~</span>
                            <img class="peitu" src="../assets/094928yiyyplyg1sll1e4d.jpg" alt="">
                            <br>
                            <button class="simipinglun">私密评论</button>
                            <button class="xihuan">喜欢</button>
                            <img class="touxiang" src="../assets/094928yiyyplyg1sll1e4d.jpg" alt="">
                            <button class="gengduo">...</button>
                        </div>
                        <div class="pinglunqu">
                            <ul>
                                <p>
                                    <i class="dianzan1"></i>
                                    <i class="dianzan2"></i>
                                    <i class="dianzan3"></i>
                                    <i class="dianzan4"></i>
                                    <i class="dianzan5"></i>
                                    <i class="dianzan6"></i>
                                    <i class="dianzan7"></i>
                                    <i class="dianzan8"></i>
                                    <span class="shuliang">3万+</span>
                                </p>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">秀儿:</span>
                                    <span class="pyq_plxx">你是要用我四十米的大刀削你的十五米长的铅笔么？</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">谁的小可爱:</span>
                                    <span class="pyq_plxx">走吧。院长打电话来让我地啊你回去了</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="pyq_shangbanbu">
                            <p><span class="pyq_yhm">死肥宅</span><span class="pyq_sj">02:07</span></p>
                            <span class="pyq_xx">唯有快乐水跟萝莉不可辜负！</span>
                            <img class="peitu" src="" alt="">
                            <br>
                            <button class="simipinglun">私密评论</button>
                            <button class="xihuan">喜欢</button>
                            <img class="touxiang" src="../assets/191718otmmmakmk49mszlf.jpg" alt="">
                            <button class="gengduo">...</button>
                        </div>
                        <div class="pinglunqu">
                            <ul>
                                <p>
                                    <i class="dianzan1"></i>
                                    <i class="dianzan2"></i>
                                    <i class="dianzan3"></i>
                                    <i class="dianzan4"></i>
                                    <i class="dianzan5"></i>
                                    <i class="dianzan6"></i>
                                    <i class="dianzan7"></i>
                                    <i class="dianzan8"></i>
                                    <span class="shuliang">3万+</span>
                                </p>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">秀儿:</span>
                                    <span class="pyq_plxx">你是要用我四十米的大刀削你的十五米长的铅笔么？</span>
                                </li>
                                <li>
                                    <i></i>
                                    <span class="pyq_plyhm">谁的小可爱:</span>
                                    <span class="pyq_plxx">走吧。院长打电话来让我地啊你回去了</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
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
    computed:{
        state(){
            return state
        }
    }
}
</script>
<style scoped>
body,html{
    height: 100%;
    width: 100%;
}
#pengyouquan{
    display: flex;
    flex-direction: column;
    transition: margin .5s;
    z-index: -1;
}
.main{
    width: 100%;
    height: 100%;
    background: rgb(235, 234, 234);;
    z-index: -1;
}
.yonghuxinxi{
    width: 100%;
    height: 8.33333332rem;
    background: url(../assets/豆腐来明哥.gif)no-repeat center center;
    background-size: 100%;
    margin-top: -2.22222291rem;
    z-index: -1;
    position: relative;
}
.yonghuxinxi img{
    z-index: 3;
    width: 1.38888958rem;
    height: 1.38888958rem;
    position: absolute;
    left: 5%;
    bottom: 25%;
    border-radius: 50%;
    border: 0.02777771rem solid rgb(241, 239, 239);
}
.yonghuxinxi span{
    z-index: 3;
    position: absolute;
    left: 22%;
    bottom: 35%;
    color: #fff;
    font-size: 0.47222292rem;
    opacity: 0.9;
}
.yonghuxinxi button{
    position: absolute;
    left: 22%;
    bottom: 9%;
    z-index: 3;
    background: url(../assets/xinxi.png) no-repeat 12% 55%;
    background-size: 15%;
    border: 0.02777771rem solid #fff;
    padding: 2% 4% 2% 10%;
    color: #fff;
    border-radius: 0.13888958rem;
    font-size: 0.38888958rem;
    opacity: 0.5;
}
.yonghuxinxi .xian{
    height: 2.22222291rem;
    width: 0.02777771rem;
    z-index: 2;
    background: rgb(230, 230, 230);
    opacity: 0.9;
    position: absolute;
    bottom: 0;
    left: 12%;
}
/* 模糊处理 */
.yonghuxinxi:after{
    content: "";
    width: 100%;
    height: 8.33333332rem;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: blur(0.13888958rem);
    /* margin-top: -0.27777708rem; */
    z-index: 0;
}
.xinxiliebiao{
    z-index: 2;
    position: relative;
}
.xinxiliebiao ul{
    z-index: 2;
    background: rgb(235, 234, 234);
    position: relative;
}
.xinxiliebiao ul li{
    z-index: 2;
    background: #fff;
    margin-top: -1%;
    position: relative;
    /* padding: 5% 10% 5% 15%; */
    font-size: 0.44444375rem;
    margin-bottom: 5%;
}
.xinxiliebiao ul li .pyq_shangbanbu{
    height: 100%;
    padding: 5% 10% 5% 15%;
    position: relative;
}
.xinxiliebiao ul li .pyq_xx{
    color: rgb(114, 114, 114);
    padding-bottom: 5%;
    display: block;
    font-size: 0.38888958rem;
}
.xinxiliebiao ul li .pyq_sj{
    color: rgb(151, 151, 151);
    float: right;
    font-size: 0.27777708rem;
    margin-right: -8%;
}
.xinxiliebiao ul li .pyq_shangbanbu button{
    background-size: 15%;
    border: 0.02777771rem solid rgb(122, 122, 122);
    padding: 2% 4% 2% 10%;
    color: rgb(122, 122, 122);
    border-radius: 0.13888958rem;
    font-size: 0.33333333rem;
    opacity: 0.5;
    background: none;
}
.xinxiliebiao ul li .pyq_shangbanbu .simipinglun{
    background: url(../assets/xinxi_1.png)no-repeat 8% 60%;
    background-size: 20%;
}
.xinxiliebiao ul li .pyq_shangbanbu .xihuan{
    background: url(../assets/xihuanxuanzhong.png)no-repeat 10% 50%;
    background-size: 30%;
    margin-left: 5%;
}
.xinxiliebiao ul li .touxiang{
    width: 1.11111041rem;
    position: absolute;
    left: 3%;
    top: 0.69444375rem;
    border-radius: 50%;
}
.xinxiliebiao ul li .pyq_shangbanbu .gengduo{
    border: none;
    background: url(../assets/gengduo.png)no-repeat center center;
    width: 1.66666666rem;
    background-size: 30%;
    float: right;
    margin-right: -14%;
}
.xinxiliebiao ul li .pyq_shangbanbu .peitu{
    width: 6.94444374rem;
    display: block;
}
.xinxiliebiao ul li .pinglunqu{
    width: 100%;
    position: relative;
}
.xinxiliebiao ul li .pinglunqu ul{
    background: rgb(219, 217, 217);
    position: relative;
}
.xinxiliebiao ul li .pinglunqu ul p{
    height: 1.11111041rem;
    padding: 0.27777708rem 0 0 0.41666667rem;
    background: rgb(219, 217, 217);
    border-bottom: 0.02777771rem solid rgb(207, 206, 206);
}
.xinxiliebiao ul li .pinglunqu ul p i{
    display: inline-block;
    height: 0.83333333rem;
    width: 0.83333333rem;
    border-radius: 50%;
    margin-right: 2%;
}
.xinxiliebiao ul li .pinglunqu ul p .dianzan1{
    background: #fff url(../assets/xin.png)no-repeat center center;
    background-size: 115%;
    margin-right: 5%;
}
.xinxiliebiao ul li .pinglunqu ul p .dianzan2{
    background: url(../assets/140701pepz4a70eaoaj9x4.jpg)no-repeat center center;
    background-size: 100%;
}
.xinxiliebiao ul li .pinglunqu ul p .dianzan3{
    background: url(../assets/143458od82xxnh8d8xh33e.jpg)no-repeat center center;
    background-size: 100%;
}
.xinxiliebiao ul li .pinglunqu ul p .dianzan4{
    background: url(../assets/162256apdcknn30df09cqz.jpg)no-repeat center center;
    background-size: 100%;
}
.xinxiliebiao ul li .pinglunqu ul p .dianzan5{
    background: url(../assets/194149yw8rcqwrr6rj17rr.jpg)no-repeat center center;
    background-size: 100%;
}
.xinxiliebiao ul li .pinglunqu ul p .dianzan6{
    background: url(../assets/161903udq89ddf09ddgdfu.jpeg)no-repeat center center;
    background-size: 100%;
}
.xinxiliebiao ul li .pinglunqu ul p .dianzan7{
    background: url(../assets/214146yjg4aeenxjntlge9.jpg)no-repeat center center;
    background-size: 100%;
}
.xinxiliebiao ul li .pinglunqu ul p .dianzan8{
    background: url(../assets/162422o8knnqn6gae1epdp.jpg)no-repeat center center;
    background-size: 100%;
}
.xinxiliebiao ul li .pinglunqu ul p .shuliang{
    color: rgb(204, 2, 2);
    font-weight:900;
    position: absolute;
    top: 0.41666667rem;
    right: 1%;
}
.xinxiliebiao ul li .pinglunqu ul li{
    background: none;
    border-bottom: 0.02777771rem solid rgb(207, 206, 206);
    padding: 3% 10% 3% 15%;
    margin: 0;
    position: relative;
}
.xinxiliebiao ul li .pinglunqu ul li i{
    width: 0.83333333rem;
    border-radius: 50%;
    position: absolute;
    left: 2%;
    top: 0.27777708rem;
}
.xinxiliebiao ul li .pinglunqu ul li i{
    width: 0.83333333rem;
    height: 0.83333333rem;
    border-radius: 50%;
    position: absolute;
    left: 3%;
    top: 0.27777708rem;
}
.xinxiliebiao ul li .pinglunqu ul li:nth-child(2) i{
    display: block;
    background: url(../assets/194149yw8rcqwrr6rj17rr.jpg)no-repeat center center;
    background-size: 100% 100%;
}
.xinxiliebiao ul li .pinglunqu ul li:nth-child(3) i{
    display: block;
    background: url(../assets/140705cbk888hrtbgqgtg9.jpg)no-repeat center center;
    background-size: 100% 100%;
}
.xinxiliebiao ul li .pinglunqu ul li:nth-child(4) i{
    display: block;
    background: url(../assets/58ee3d6d55fbb2fb8d2736b8424a20a44623dc08.jpg)no-repeat center center;
    background-size: 100% 100%;
}
.xinxiliebiao ul li .pinglunqu ul li:nth-child(5) i{
    display: block;
    background: url(../assets/124122a93rcrf66kvj6or3.jpg)no-repeat center center;
    background-size: 100% 100%;
}
.xinxiliebiao ul li .pinglunqu ul li:nth-child(6) i{
    display: block;
    background: url(../assets/124443bp6er0lyzr0zrx06.jpg)no-repeat center center;
    background-size: 100% 100%;
}
.xinxiliebiao ul li .pinglunqu ul li:nth-child(7) i{
    display: block;
    background: url(../assets/161909swgwuqjq1h01rkgj.jpeg)no-repeat center center;
    background-size: 100% 100%;
}
.xinxiliebiao ul li .pinglunqu ul li:nth-child(8) i{
    display: block;
    background: url(../assets/211910htf4f8z5dxpjwjmj.jpg)no-repeat center center;
    background-size: 100% 100%;
}
.xinxiliebiao ul li .pinglunqu ul li:nth-child(9) i{
    display: block;
    background: url(../assets/214146yjg4aeenxjntlge9.jpg)no-repeat center center;
    background-size: 100% 100%;
}
.xinxiliebiao ul li .pinglunqu ul li:nth-child(10) i{
    display: block;
    background: url(../assets/QQ图片20190117190525.jpg)no-repeat center center;
    background-size: 100% 100%;
}
.xinxiliebiao ul li .pinglunqu ul li:nth-child(11) i{
    display: block;
    background: url(../assets/QQ图片20190315125913.jpg)no-repeat center center;
    background-size: 100% 100%;
}
.xinxiliebiao ul li .pinglunqu ul li:nth-child(12) i{
    display: block;
    background: url(../assets/xjj1.jpg)no-repeat center center;
    background-size: 100% 100%;
}
.xinxiliebiao ul li .pinglunqu ul li:nth-child(13) i{
    display: block;
    background: url(../assets/7bcb0a46f21fbe097acad13565600c338744ad7e.jpg)no-repeat center center;
    background-size: 100% 100%;
}
.xinxiliebiao ul li .pinglunqu ul li:nth-child(14) i{
    display: block;
    background: url(../assets/103130o3gy4or44vgzr7ug.jpg)no-repeat center center;
    background-size: 100% 100%;
}
.xinxiliebiao ul li .pinglunqu ul li .pyq_plyhm{
    font-weight:900;
}
</style>


