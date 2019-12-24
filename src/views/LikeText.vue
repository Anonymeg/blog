<template>
  <div class="like-text">
    <el-card shadow="hover">
      <!--      面包屑-->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/likes' }">like</el-breadcrumb-item>
        <el-breadcrumb-item>{{currentLikeInfo.like_label_name}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="btn" v-show="isShow">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle @click="deleteArticle"></el-button>
      </div>
      <div class="back">
        <el-button type="primary" size="mini" @click="back">返回上一步</el-button>
      </div>
      <!--      全文内容-->
      <h3 class="title">{{currentLikeInfo.like_title}}</h3>
      <div v-html="currentLikeInfo.like_content" class="text">
        {{currentLikeInfo.like_content}}
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'LikeText',
    data() {
      return {
        // 权限判断
        // isDelete: false,
        // 当前like的所有信息
        currentLikeInfo: {},
        isShow: false
      }
    },
    created() {
      this.getIdTextInfo()
      this.judgeRole()
    },
    mounted() {
    },
    methods: {
      // 权限判断
      judgeRole() {
        if (this.$store.state.userId === 1) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      },
      // 根据id获取like信息
      getIdTextInfo() {
        this.$axios.get(`/like/${this.$store.state.likeTextId}`).then(res => {
          this.currentLikeInfo = res.data[0]
        })
      },
      // 删除like
      deleteArticle() {
        this.$axios.delete(`/like/${this.currentLikeInfo.like_id}`).then(() => {
          this.$msg.success('删除成功')
          // this.$emit('deleteSuccess')
          this.$router.push('/likes')
        })
      },
      // 返回上一步
      back() {
        history.go(-1)
      }
    }
  }
</script>

<style scoped>
  .like-text{
    width: 50%;
    min-height: 200px;
    padding-bottom: 40px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
  }
  .el-card{
    color: whitesmoke;
    margin-bottom: 40px;
    position: relative;
    word-wrap:break-word;
    word-break:break-all;
    overflow: hidden;
    background-color: rgba(0,0,0,.2);
  }
  .back{
    position: absolute;
    top: 25px;
    right: 20px;
  }
  .title{
    margin-top: 20px;
  }
  .text{
    margin-top: 20px;
  }
  .btn{
    position: absolute;
    top:20px;
    right: 20%;
  }
</style>
