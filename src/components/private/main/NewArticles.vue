<template>
  <div class="new-article">
    <el-card shadow="hover">
      <div slot="header">
        <span>新发表的文章</span>
      </div>
      <el-link
              href="javascript:;"
              target="_blank"
              type="danger"
              v-for="(item, i) in newArticles"
              :key="i">{{item.article_title}}
      </el-link>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'NewArticles',
    props: {
      newArticles: {
        type: Array
      }
    },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style scoped>
  .new-article{
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
