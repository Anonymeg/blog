<template>
  <div class="now-like">
    <el-card shadow="hover">
      <div slot="header">
        <span>我最近的喜好:</span>
      </div>
      <el-link
              href="javascript:;"
              target="_blank"
              type="success"
              v-for="(item, i) in nowLike"
              :key="i">{{item.like_title}}
      </el-link>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'NowLike',
    props: {
      nowLike: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  .now-like{
    margin-bottom: 20px;
    z-index: 999;
  }
  .el-card{
    min-width: 100px;
    max-width: 300px;
    background-color: rgba(0,0,0,.4);
    color: whitesmoke;
    border: black;
  }
  .el-link{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 10px;
  }
</style>
