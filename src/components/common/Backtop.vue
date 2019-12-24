<template>
  <el-backtop target=".home"
              :visibility-height= '300'
              :right="40"
              :bottom="50">
    <div class="back-top">UP</div>
  </el-backtop>
</template>

<script>
  export default {
    name: 'Backtop'
  }
</script>

<style scoped>
  .back-top {
    height: 100%;
    width: 100%;
    font-weight: bold;
    background-color: #f2f5f6;
    border-radius: 15px;
    box-shadow: 0 0 6px rgba(0,0,0, .12);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
    z-index: 1000;
  }
</style>
