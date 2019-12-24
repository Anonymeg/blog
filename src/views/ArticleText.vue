<template>
  <div class="full-text">
    <el-card shadow="hover">
      <!--      面包屑-->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/articles' }">踩坑文章</el-breadcrumb-item>
        <el-breadcrumb-item>文章</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="btn" v-show="isShow">
        <el-button type="primary" icon="el-icon-edit" circle @click="editArticle"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle @click="deleteArticle"></el-button>
      </div>
      <div class="back">
        <el-button type="primary" size="mini" @click="back">返回上一步</el-button>
      </div>
      <!--      全文内容-->
      <h3 class="title">{{idArticleInfo.article_title}}</h3>
      <div v-html="idArticleInfo.article_content" class="text">
        {{idArticleInfo.article_content}}
      </div>
    </el-card>
<!--    发表评论-->
    <el-card class="add">
      <el-input
              type="textarea"
              ref="commentText"
              :rows="4"
              placeholder="既然来了，就说几句吧"
              v-model="addcommentInfo.comment_content">
      </el-input>
      <el-button
              class="add-comment"
              size="small"
              type="primary"
              @click="addcomment"
              round>发表评论</el-button>
    </el-card>
    <!--    评论部分-->
    <el-card class="box-card">
      <div slot="header" class="comments">
        <span>最新评论</span>
      </div>
      <div v-for="(item, i) in commentData" :key="i" class="comment-item">
        <span class="user">发表用户：{{item.user_id}}</span>
        <span class="time">发表时间:{{item.comment_date | dataFormat}}</span>
        <p class="content">{{item.comment_content}}</p>
        <el-tooltip class="item" effect="dark" content="你想要删除当前评论吗？" placement="right">
          <el-button
                  :v-show="judgeRole()"
                  type="danger"
                  icon="el-icon-delete"
                  size="mini"
                  circle
                  @click="deleteComment(item.comment_id)">
          </el-button>
        </el-tooltip>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'FullText',
    data() {
      return {
        // 权限判断
        // isDelete: false,
        // 当前文章的所有信息
        idArticleInfo: {},
        // 当前文章的所有评论
        commentData: [],
        // 添加评论的信息
        addcommentInfo: {
          user_id: null,
          article_id: null,
          comment_date: null,
          comment_content: ''
        },
        isShow: false
      }
    },
    created() {
      this.getidArticleInfo()
      this.getComemnt()
    },
    mounted() {
      this.judgeRole()
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
      // 根据id获取文章信息
      getidArticleInfo() {
        this.$axios.get(`/article/${this.$store.state.articleTextId}`).then(res => {
          this.idArticleInfo = res.data[0]
        })
      },
      // 修改文章
      editArticle() {
        this.$store.commit('editArticleId', this.idArticleInfo.article_id)
      },
      // 删除文章
      deleteArticle() {
        this.$axios.delete(`/article/${this.idArticleInfo.article_id}`).then(() => {
          this.$msg.success('删除成功')
          // this.$emit('deleteSuccess')
          this.$router.push('/articles')
        })
      },
      // 获取当前文章的所有评论
      getComemnt() {
        this.$axios.get(`/comment/${this.$store.state.articleTextId}`).then(res => {
          this.commentData = res.data
        })
      },
      // 添加评论
      addcomment() {
        this.addcommentInfo.user_id = this.$store.state.userId
        this.addcommentInfo.article_id = this.idArticleInfo.article_id
        this.addcommentInfo.comment_date = new Date().getTime()
        this.$axios.post('/comment', this.addcommentInfo).then(() => {
          this.$msg.success('发表成功')
          this.$refs.commentText.clear()
          this.getComemnt()
        })
      },
      // 删除评论
      deleteComment(id) {
        this.$axios.delete(`/comment/${id}`).then(() => {
          this.$msg.success('删除成功')
          this.getComemnt()
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
  .full-text{
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
  .add{
    padding-top: 10px;
    padding-bottom: 30px;
  }
  .add-comment{
    position: absolute;
    bottom: 10px;
    right: 10px;
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
  .comment-item{
    position: relative;
    margin-top: 20px;
    border-bottom: 2px solid lightcoral;
  }
  .comment-item .content{
    font-size: 18px;
    margin: 10px 0;
    /*width:100%;*/
    /*padding-left: 40px;*/
  }
  .comment-item span{
    font-size: 12px;
    margin-right: 10px;
  }
  .comment-item .el-button{
    position: absolute;
    right: 10px;
    top: 0;
  }
</style>
