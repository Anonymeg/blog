<template>
  <div class="porfile">
    <el-card shadow="hover" class="test">
      <div slot="header" class="header">
        <span>我的信息</span>
      </div>
      <div class="info">
        <p>我的网名：{{this.myInfo.user_nickname}}</p>
        <p>我的爱好：{{this.myInfo.user_hobby}}</p>
        <p>我的年龄：{{this.myInfo.user_age}}</p>
        <p>我的IP：{{this.myInfo.user_ip}}</p>
        <p>我的邮箱：{{this.myInfo.user_email}}</p>
      </div>
      <div class="icon">
        <a href=""><img src="@/assets/images/contact_icon/qq.jpg" alt=""></a>
        <a href=""><img src="@/assets/images/contact_icon/weixin.jpg" alt=""></a>
        <a href=""><img src="@/assets/images/contact_icon/bili.jpeg" alt=""></a>
        <a href=""><img src="@/assets/images/contact_icon/email.png" alt=""></a>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    data() {
      return {
        myInfo: {}
      }
    },
    created() {
      this.getMyInfo()
    },
    methods: {
      getMyInfo() {
        this.$axios.get('/user').then(res => {
          this.myInfo = res.data[0]
        })
      }
    }
  }
</script>

<style scoped>
.porfile{
  margin-bottom: 20px;
  letter-spacing: 1px;
  z-index: 999;
}
.el-card{
  width: 300px;
  color: black;
  border: black;
  background-color: rgba(255,255,255,.4);
}
.porfile .info p{
  margin-bottom: 10px;
  font-size: 12px;
}
.icon{
  border-top: 2px solid whitesmoke;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon a{
  width: 50px;
  height: 50px;
}
.icon a img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
