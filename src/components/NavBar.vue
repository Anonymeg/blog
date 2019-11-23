<template>
  <div class="nav-bar">
    <el-row>
      <el-col :span="12"><img src="../assets/images/logo.png" alt=""></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 49px;
  background-color: lightskyblue;
}
</style>
