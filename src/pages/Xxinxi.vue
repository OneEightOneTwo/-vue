<template>
  <div id="d1">
    <div id="top">
      编辑个人资料
      <img @click="back" src="../assets/back.png" alt>
    </div>
    <!-- 头像 -->
    <div id="dd" style="width:100%;height:361px;border-bottom:1px solid #ccc;
    margin-top:50px;
    ">
      <el-upload
        style="float:left;"
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <!-- 照片墙 -->
      <el-upload
        style="float:left;"
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-upload
        style="float:left;"
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-upload
        style="float:left;"
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <!-- 信息 -->
    <div
      id="d2"
      style="width:100%; height: 120px;
  margin-bottom: 20px;border-bottom:1px solid #ccc;"
    >
      <p>王 KK</p>
      <span class="s1">
        <i class="i2" style="  width: 20px;
  height: 20px;  display: inline-block;"></i>23&nbsp;
      </span>
      <span class="s2" style="margin-left:8px;">处女座</span>
      <br>

      <span
        style="margin-left:0; display: inline-block; font-size:15px; width: 277px;
  height: 23px;"
      >点击编辑个人信息（如姓名,年龄）</span>
      <i class="i3" style="  width: 20px;
  height: 20px;  display: inline-block;"></i>
    </div>
    <!-- 个人签名 -->
    <div id="d3" style="padding-left:22px;border-bottom:1px solid #ccc;">
      <h6 style="font-size:14px;color:red;margin-bottom:10px;">个人签名</h6>
      <p style="font-size:16px;margin-left:38px;">
        <i class="i4" style="width: 20px;
  height: 20px; "></i>
        <i style="color:red;">+</i>添加你的个人签名
      </p>
    </div>
    <!-- 我的信息 -->
    <div id="d4">
      <h6 style="font-size:14px;color:red;margin:18px  0 0 22px;">我的信息</h6>
      <ul>
        <li>
          <p>
            <i class="i5"></i>
            <i>+</i>
            <el-button slot="reference" @click="getValue" v-text="currentData" ref="currentDataCon"></el-button>
            <el-popover placement="left" ref="popover" width="180" v-model="visible">
              <el-table :data="gridData">
                <el-table-column width="150" property="date" label="行业"></el-table-column>
              </el-table>
            </el-popover>
          </p>

          <!--工作领域-->
        </li>
        <li>
          <p>
            <i class="i5"></i>
            <i>+</i>
            <el-button slot="reference" @click="getVal" v-text="Datagongzuo" ref="Datagongzu"></el-button>
            <el-popover placement="left" ref="popover" width="180" v-model="visi">
              <el-table :data="gridgongzuo">
                <el-table-column width="150" property="date" label="领域"></el-table-column>
              </el-table>
            </el-popover>
          </p>
        </li>
        <li>
          <p>
            <i class="i5"></i>
            <i>+</i>添加公司信息
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: "",
      dialogImageUrl: "",
      dialogVisible: false,
      // 弹出框
      currentData: "添加行业信息",
      visible: false,
      
      Datagongzuo: "添加工作领域信息",
      visi: false,
      // 行业信息
      gridData: [
        {
          date: "学生"
        },
        {
          date: "IT/互联网"
        },
        {
          date: "金融"
        },
        {
          date: "媒体公关"
        },
        {
          date: "金融"
        }
      ],
      // 工作领域

      gridgongzuo: [
        {
          date: "高管"
        },
        {
          date: "市场"
        },
        {
          date: "产品"
        },
        {
          date: "客户"
        },
        {
          date: "公关"
        }
      ]
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    back() {
      //返回
      this.$router.go(-1);
    },
    // 行业信息
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
    // 工作领域
    getVal() {
      this.visi = !this.visi;
      if (this.visi) {
        let elBody = document.getElementsByClassName("el-table__body")[0];
        let tbody = elBody.children[1];
        tbody.onclick = e => {
          this.visi = !this.visi;
          // console.log(e.target)
          this.Datagongzuo = e.target.innerText;
          this.$refs.Datagongzu.innerText = e.target.innerText;
        };
      }
    }
  }
};
</script>

<style scoped>
.el-button {
  border: 0rem;
}
#top {
  width: 100%;
  height: 1.38888958111111rem;
  background: red;
  line-height: 1.38888958111111rem;
  font-size: 0.555556249911111rem;
  color: #fff;
  border-radius: 0.36111041608889rem;
  position: fixed;
  top: 0;
  left: 0;
}
#top img {
  float: left;
  margin: 0.36111041608889rem 1.38888958111111rem 0 0.27777708288889rem;
  width: 0.7499999988rem;
}
.avatar-uploader .el-upload {
  border:0.02777708328889rem dashed #d9d9d9;
  border-radius:0.1666666664rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  float: right;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size:0.77777708208889rem;
  color: #8c939d;
  width: 4.94444374208889rem;
  height: 4.94444374208889rem;
  line-height: 4.94444374208889rem;
  text-align: center;
}
.avatar {
  width: 4.94444374208889rem;
  height: 4.94444374208889rem;
  display: block;
}
.avatar {
  float: left;
}

p {
  margin-left: 0.61111041568889rem;
}
span {
  margin-left: 0.61111041568889rem;
  display: inline-block;
  text-align: center;
  line-height: 0.63888958231111rem;
}
i {
  width: 0.555556249911111rem;
  height: 0.555556249911111rem;
  display: inline-block;
  /* position:absolute; */
}
.s1 {
  width: 1.38888958111111rem;
  height: 0.63888958231111rem;
  background: rgb(142, 177, 230);
  border-radius: 0.2499999996rem;
  text-align: right;
  line-height: 0.63888958231111rem;
  font-size: 0.38888958271111rem;
  color: #fff;
  padding-right:0.0833333332rem;
}
.s2 {
  width: 1.38888958111111rem;
  height: 0.63888958231111rem;
  background: rgb(24, 182, 24);
  border-radius: 0.2499999996rem;
  font-size: 0.38888958271111rem;
  color: #fff;
}
.i2 {
  background: url(../assets/nv.png) no-repeat;
  left: 0.9166666652rem;
  top: 12.66rem;
  position: absolute;
}
.i3 {
  background: url(../assets/you.png) no-repeat;
  right: 0.9166666652rem;
  top:12.37rem;
  position: absolute;
}
.i4 {
  background: url(../assets/笔.png) no-repeat;
  left: 0.61111041568889rem;
  top: 15.76rem;
  position: absolute;
}
.i5 {
  background: url(../assets/信息.png) no-repeat;
  left: 0.61111041568889rem;
  top:0.63888958231111rem;
  position: absolute;
}
#d4 {
  width: 100%;
  height:10.0833333172rem;
}
#d4 ul li {
  width: 100%;
  height: 1.7499999972rem;
  /* border-bottom: 1px solid #ccc; */
  font-size:0.44444374928889rem;
  line-height: 1.7499999972rem;
  text-align: left;
  position: relative;
}
#d4 p {
  margin-left: 1.666666664rem;
}
#d4 ul li p i:nth-child(2) {
  color: #ff0000;
}
</style>
