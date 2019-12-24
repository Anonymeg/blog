<template>
  <el-card class="main">
      <el-divider content-position="left">最近的喜好事物：</el-divider>
    <el-card shadow="hover" class="img-box" v-for="(item, i) in likesList" :key="i">
      <p slot="header"  @click="goLikeText(item.like_id)">{{item.like_title}}</p>
      <div v-html="item.like_content" class="img"></div>
    </el-card>
  </el-card>
</template>

<script>
  export default {
    name: 'LikeImage',
    data() {
      return {
        likesList: [],
        imgList: []
      }
    },
    created() {
      this.getLikes()
    },
    methods: {
      // 获取全部like列表
      getLikes() {
        this.$axios.get('/like').then(res => {
          // 正则匹配只要第一个img标签
          const imgReg = /<img.*?(?:>|\/>)/gi
          for (let item of res.data.reverse().slice(0, 6)) {
            // 判断如果没有图片就终止循环
            if (item.like_content.match(imgReg) === null) {
              break
            } else {
              // 给内容重新赋值
              item.like_content = item.like_content.match(imgReg)[0]
              // 拼接数组
              this.likesList = this.likesList.concat(item)
            }
          }
        })
      },
      // 点击文章时按照like的id去查询
      goLikeText(id) {
        this.$store.commit('getLikeId', id)
        this.$router.push(`/liketext/${id}`)
      }
    }
  }
</script>

<style scoped>
.main{
  width: 100%;
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
