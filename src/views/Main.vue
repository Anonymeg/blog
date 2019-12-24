<template>
  <div class="main">
    <div class="content">
      <Time></Time>
      <main-carousel></main-carousel>
      <like-image></like-image>
      <article-image></article-image>
    </div>
    <div class="main-right">
      <profile></profile>
      <right-carousel></right-carousel>
      <new-articles class="new-articles" :newArticles="newArticles"></new-articles>
      <now-like :nowLike="nowLike"></now-like>
      <links></links>
    </div>
<!--    <div class="footer">-->
<!--      <p>Copyright © 2019 顾鑫个人博客 All rights reserved</p>-->
<!--      <p>所有文章未经授权禁止转载、摘编、复制或建立镜像，如有违反，追究法律责任。</p>-->
<!--      <p>举报邮箱：123456789@guxin.com</p>-->
<!--    </div>-->
  </div>
</template>

<script>
  import MainCarousel from '@/components/private/main/MainCarousel'
  import Time from '@/components/private/main/Time'
  import LikeImage from '@/components/private/main/LikeImage'
  import ArticleImage from '@/components/private/main/ArticleImage'
  import Profile from '@/components/private/main/Profile'
  import NewArticles from '@/components/private/main/NewArticles'
  import NowLike from '@/components/private/main/NowLike'
  import Links from '@/components/private/main/Links'
  import RightCarousel from '@/components/private/main/RightCarousel'

  export default {
    name: 'Main',
    components: { MainCarousel, Time, LikeImage, Profile, NewArticles, NowLike, Links, RightCarousel, ArticleImage },
    data() {
      return {
        // 新发表文章组件传值
        newArticles: [],
        nowLike: []
      }
    },
    created() {
      this.getArticle()
      this.getLike()
    },
    methods: {
      getArticle() {
        this.$axios.get('/article').then(res => {
          this.newArticles = res.data.reverse().slice(0, 5)
        })
      },
      getLike() {
        this.$axios.get('/like').then(res => {
          this.nowLike = res.data.reverse().slice(0, 5)
        })
      }
    }
  }
</script>

<style scoped>
.content{
  width: 60%;
  position: absolute;
  top: 10%;
  right: 30%;
  z-index: 999;
}
  .main-right {
    width: 20%;
    position: absolute;
    top: 10%;
    right: 5%;
    z-index: 999;
  }
</style>
