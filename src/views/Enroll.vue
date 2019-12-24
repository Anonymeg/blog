<template>
  <div class="enroll">
    <div class="enroll-box">
      <div>
        <img src="../assets/images/logo2.png">
      </div>
      <el-form  class="enroll-info" ref="enrollform" label-width="40px" :rules="rules" :model="form">
        <el-form-item class="label" label="账号" prop="user_name">
          <el-input prefix-icon="el-icon-user-solid" v-model="form.user_name"></el-input>
        </el-form-item>
        <el-form-item class="label" label="邮箱" prop="user_email">
          <el-input type="email" prefix-icon="el-icon-s-claim" v-model="form.user_email"></el-input>
        </el-form-item>
        <el-form-item class="label" label="密码" prop="user_password">
          <el-input type="password" prefix-icon="el-icon-connection" v-model="form.user_password"></el-input>
        </el-form-item>
        <div class="enroll-btn">
          <el-button type="primary" @click="enroll">注册</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </div>
        <router-link class="go" to="/login">已有账号？去登录></router-link>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          user_name: '',
          user_email: '',
          user_password: ''
        },
        rules: {
          user_name: [
            { required: true, message: '账号不能为空', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          user_email: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' }
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
        this.$refs.enrollform.resetFields()
      },
      enroll() {
        // 表单验证的方法
        this.$refs.enrollform.validate(value => {
          // 如果值为空直接终止下面代码
          if (!value) return
          // 否则发送post请求 携带form信息
          this.$axios.post('/user/add', this.form)
            .then(result => {
              // 判断是否成功
              if (result.data.length === 0) {
                this.$msg.error('注册失败，稍后再试！！！')
              } else {
                // 正确进入这里
                this.$msg.success('注册成功，请先登录！！')
                this.$router.push('/login')
              }
            })
        })
      }
    }
  }
</script>

<style scoped>
  .enroll{
    height: 100vh;
    width: 100%;
    background: url("../assets/images/bg/enroll-bg.jpg") center center  no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .enroll .enroll-box{
    width: 450px;
    height: 400px;
    border-radius: 10px;
    background-color: rgba(255,255,255,.6);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 999;
  }
  .enroll .enroll-box img{
    width: 120px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }
  .enroll-info{
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%);
  }
  .enroll-info .el-input{
    width: 100%;
  }
  .enroll-info .enroll-btn{
    margin-left:20%;
  }
  .enroll-info .label>:before {
    display: none;
  }
  .go{
    color: lightcoral;
    display: inline-block;
    margin:20px 0 0 50px ;
  }
</style>
