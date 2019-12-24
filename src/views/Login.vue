<template>
  <div class="login">
    <div class="login-box">
      <div>
        <img src="../assets/images/logo2.png">
      </div>
      <el-form  class="login-info" ref="loginform" label-width="40px" :rules="rules" :model="form">
        <el-form-item class="label" label="账号" prop="user_name">
          <el-input prefix-icon="el-icon-user-solid" v-model="form.user_name"></el-input>
        </el-form-item>
        <el-form-item class="label" label="密码" prop="user_password">
          <el-input type="password" prefix-icon="el-icon-connection" v-model="form.user_password"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </div>
        <router-link class="go" to="/enroll">没有账号？去注册>></router-link>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          user_name: 'zuoyanerguta',
          user_password: 'gp604612'
        },
        rules: {
          user_name: [
            { required: true, message: '账号不能为空', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          user_password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      reset() {
        // 重置输入的信息
        this.$refs.loginform.resetFields()
      },
      login() {
        // 表单验证的方法
        this.$refs.loginform.validate(value => {
          // 如果值为空直接终止下面代码
          if (!value) return
          // 否则发送post请求 携带form信息
          this.$axios.post('/user', this.form)
            .then(result => {
              // 判断状态码
              if (result.data.length === 0) {
                this.$msg.error('登录失败，账号或者密码不正确！！！')
              } else {
                // 正确进入这里
                this.$msg.success('登录成功')
                this.$store.commit('saveUser', result.data[0].user_id)
                // 把token信息放到session里保存这个登陆状态  占用
                window.sessionStorage.setItem('token', result.data[0].token)
                this.$router.push('/home')
              }
            })
        })
      }
    }
  }
</script>

<style scoped>
  .login{
    height: 100vh;
    width: 100%;
    background: url("../assets/images/bg/login-bg.jpg") center center  no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .login .login-box{
    width: 450px;
    height: 300px;
    border-radius: 10px;
    background-color: rgba(255,255,255,.5);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 999;
  }
  .login .login-box img{
    width: 120px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }
  .login-info{
    width: 50%;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%);
  }
  .login-info .el-input{
    width: 100%;
  }
  .login-info .login-btn{
    margin-left:20%;
  }
  .login-info .label>:before {
    display: none;
  }
  .go{
    color: lightcoral;
    display: inline-block;
    margin:20px 0 0 50px ;
  }
</style>
