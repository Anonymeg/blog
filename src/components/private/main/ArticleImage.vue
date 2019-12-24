<template>
  <el-card class="main">
    <el-divider content-position="left">最近遇到的问题：</el-divider>
    <el-card shadow="hover" class="img-box" v-for="(item, i) in articlesList" :key="i">
      <p slot="header"  @click="goarticleText(item.article_id)">{{item.article_title}}</p>
      <div v-html="item.article_content" class="img"></div>
    </el-card>
  </el-card>
</template>

<script>
  export default {
    name: 'ArticleImage',
    data() {
      return {
        articlesList: [],
        imgList: []
      }
    },
    created() {
      this.getArticles()
    },
    methods: {
      // 获取全部article列表
      getArticles() {
        this.$axios.get('/article').then(res => {
          // 正则匹配只要第一个img标签
          const imgReg = /<img.*?(?:>|\/>)/gi
          for (let item of res.data.reverse().slice(0, 6)) {
            // 判断如果没有图片就终止循环
            if (item.article_content.match(imgReg) === null) {
              break
            } else {
              // 给内容重新赋值
              item.article_content = item.article_content.match(imgReg)[0]
              // 拼接数组
              this.articlesList = this.articlesList.concat(item)
            }
          }
        })
      },
      // 点击文章时按照article的id去查询
      goarticleText(id) {
        this.$store.commit('getArticleId', id)
        this.$router.push(`/articletext/${id}`)
      }
    }
  }
</script>

<style scoped>
  .main{
    width: 100%;
    margin-top: 40px;
  }
  .el-divider{
    font-size: 20px;
    font-weight: bold;
  }
  .img-box{
    width: 280px;
    display: inline-block;
    cursor: pointer;
  }
  .img{
    height: 150px;
    overflow: hidden;
  }
</style>
