<template>
  <div class="nav-bar">
    <div class="logo"><img src="../../assets/images/logo.png" alt=""></div>
    <ul class="nav-select">
      <router-link tag="li" to="/home">首页</router-link>
      <router-link tag="li" to="/articles">文章</router-link>
      <router-link tag="li" to="/likes">Like</router-link>
      <router-link tag="li" to="/write">write</router-link>
      <router-link tag="li" to="/blog-process">Blog过程</router-link>
    </ul>
    <div class="expand">
<!--      个人信息弹出框-->
      <el-popover
              trigger="hover"
              placement="bottom"
              width="150"
              v-model="infoVisible"
              visible-arrow>
        <span class="el-icon-user-solid" slot="reference" v-show="isLogin">Info</span>
        <p>当前权限： {{this.$store.state.userId === 1 ? '站长' : '访客'}}</p>
        <el-button class="out-login" type="danger" size="mini" style="width: 100%" @click="outLogin">退出登录</el-button>
      </el-popover>
      <router-link class="login" tag="span" to="/login" v-show="!isLogin">登录</router-link>
      <router-link class="enroll" tag="span" to="/enroll" v-show="!isLogin">注册</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        infoVisible: false,
        // 判断是否登录
        isLogin: false
      }
    },
    created() {
      this.judegLogin()
    },
    methods: {
      // 判断是否登录
      judegLogin() {
        if (window.sessionStorage.getItem('token')) {
          this.isLogin = true
        } else {
          this.isLogin = false
        }
      },
      outLogin() {
        //  就是清空session里面的储存数据
        window.sessionStorage.clear()
        // 然后push到你想要去的页面
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
.nav-bar{
  width: 100%;
  height: 50px;
  position: fixed;
  display: flex;
  justify-items: center;
  background:hsla(190, 90%, 90%, .5);
  overflow: hidden;
  z-index: 1000;
 }
.nav-bar::before{
  content: '';
  background: url("../../assets/images/bg/bg.jpg") 0 0 / cover no-repeat fixed;
  filter: blur(5px);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  margin: -30px;
}
.nav-bar:hover{
  box-shadow: 1px 2px 8px 4px lightgrey;
  transition: all .5s;
}
.nav-bar .logo{
  flex: 25%;
  position: relative;
}
.nav-bar .logo img{
  height: 45px;
  position: absolute;
  top: 5px;
  right: 60px;
}
.nav-bar .nav-select{
  flex: 50%;
  height: 100%;
  color: lightcoral;
  text-align: center;
  line-height: 50px;
  display: flex;
  justify-content: center;
}
.nav-bar .nav-select li{
  width: 150px;
  border-radius: 15px;
  cursor: pointer;
}
.nav-bar .nav-select li:hover{
  box-shadow: 1px 2px 4px 4px lightcoral;
  transition: all 1s;
}
.nav-bar .nav-select .router-link-active{
  border-bottom:3px solid lightcoral;
  box-sizing: border-box;
}
.expand{
  flex: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.expand span{
  color: lightgrey;
  display: inline-block;
  text-align: center;
  line-height: 28px;
  width: 80px;
  height: 28px;
  cursor: pointer;
  box-sizing: border-box;
}
.expand span:hover{
  color: whitesmoke;
}
.expand .login{
  border-right: 2px solid whitesmoke;
}
</style>
