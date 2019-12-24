<template>
  <div class="links">
    <el-card shadow="hover">
      <div slot="header">
        <span class="title">友情链接：</span>
      </div>
      <div>
        <el-link type="danger" href="https://www.w3school.com.cn/h.asp" target="_blank">W3school</el-link>
        <el-link type="primary" href="https://www.iconfont.cn/">阿里图标库</el-link>
        <el-link type="success" href="https://www.runoob.com/nodejs/nodejs-tutorial.html">Node.js</el-link>
        <el-link type="warning" href="https://cn.vuejs.org/v2/guide/">Vue.js</el-link>
        <el-link type="danger"  href="https://element.eleme.cn/#/zh-CN/component/form">Element-ui</el-link>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'Links'
  }
</script>

<style scoped>
  .links{
    margin-bottom: 20px;
    z-index: 999;
  }
  .el-card {
    width: 200px;
    background-color: rgba(0,0,0,.4);
    border: black;
  }

  .title {
    color: #00b3ff;
  }

  .el-link {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 10px;
  }
</style>
