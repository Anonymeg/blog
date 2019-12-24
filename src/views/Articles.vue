<template>
  <div class="articles">
    <el-input class="search" v-model="search" placeholder="请输入搜索内容" clearable @change="searchArticle">
      <el-button slot="append" icon="el-icon-search" @click="searchArticle"></el-button>
    </el-input>
    <div class="content">
      <el-tabs tab-position="left" @tab-click="getSelectLabel">
        <el-tab-pane label="全部">
          <el-card shadow="hover"
                   v-for="(item, i) in articles.slice((pageInfo.page-1)*pageInfo.page_size, pageInfo.page*pageInfo.page_size)"
                   :key="i">
            <!--        头部-->
            <div slot="header" class="header" @click="goArticleText(item.article_id)">
              <el-tooltip class="item" effect="dark" content="去查看全文" placement="top">
                <span class="title">{{item.article_title}}</span>
              </el-tooltip>
              <div class="info">
                <span>所属标签：</span>
                <el-tag type="warning" size="mini">{{item.article_label_name}}</el-tag>
                <span class="el-icon-user">：{{item.user_id === 1 ? '顾鑫' : '未知'}}</span>
                <span class="el-icon-time">：{{item.article_date | dataFormat}}</span>
              </div>
            </div>
            <!--        内容-->
            <div v-html="item.article_content" class="text">
              {{item.article_content}}
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane
                :label="item.label_name"
                v-for="(item, i) in labelsList"
                :key="i">
          <el-card shadow="hover"
                   v-for="(item, i) in indexArticles.slice((pageInfo.page-1)*pageInfo.page_size, pageInfo.page*pageInfo.page_size)"
                   :key="i">
            <!--        头部-->
            <div slot="header" class="header" @click="goArticleText(item.article_id)">
              <el-tooltip class="item" effect="dark" content="去查看全文" placement="top">
                <span class="title">{{item.article_title}}</span>
              </el-tooltip>
              <div class="info">
                <span>所属标签：</span>
                <el-tag type="warning" size="mini">{{item.article_label_name}}</el-tag>
                <span class="el-icon-user">：{{item.user_id === 1 ? '顾鑫' : '未知'}}</span>
                <span class="el-icon-time">：{{item.article_date | dataFormat}}</span>
              </div>
            </div>
            <!--        内容      -->
            <div v-html="item.article_content" class="text">
              {{item.article_content}}
            </div>
          </el-card>
        </el-tab-pane>
      </el-tabs>
      <!--    分页-->
      <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageInfo.page"
              :page-sizes="[4, 8, 12, 16]"
              :page-size="pageInfo.page_size"
              layout="total, sizes, prev, pager, next"
              :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Articles',
    data() {
      return {
        // 分页信息
        pageInfo: {
          page_size: 4,
          page: 1
        },
        search: '',
        // 文章组件传值
        articles: [],
        total: null,
        // 新发表文章组件传值
        newArticles: [],
        currentSort: '1',
        labelsList: [],
        indexArticles: []
      }
    },
    created() {
      this.getArticle()
      this.getLabelsList()
    },
    methods: {
      // 获取所有标签
      getLabelsList() {
        this.$axios.get(`/labels/${this.currentSort}`).then(res => {
          this.labelsList = res.data
        })
      },
      // 筛选标签like  没办法没有点击事件
      getSelectLabel(e) {
        const id = Number(e.index)
        // 防止全部
        if (id >= 1) {
          this.$axios.get(`/article/label/${id}`).then(res => {
            this.indexArticles = res.data
            this.total = res.data.length
          })
        } else {
          return false
        }
      },
      // 获取全部文章
      getArticle() {
        this.$axios.get('/article').then(res => {
          this.articles = res.data.reverse()
          this.newArticles = this.articles.slice(0, 5)
          this.total = res.data.length
        })
      },
      // 搜索文章
      searchArticle() {
        if (this.search === '') {
          this.getArticle()
        } else {
          this.$axios.get(`/article/search/${this.search}`).then(res => {
            this.articles = res.data.reverse()
            this.total = res.data.length
          })
        }
      },
      // 点击文章时按照文章id去查询文章
      goArticleText(id) {
        this.$store.commit('getArticleId', id)
        this.$router.push(`/articletext/${id}`)
      },
      // 监听每页显示数的变化
      handleSizeChange(newSize) {
        this.pageInfo.page_size = newSize
      },
      // 监听页面变化
      handleCurrentChange(newPage) {
        this.pageInfo.page = newPage
      }
    }
  }
</script>

<style scoped>
  .articles {
    width: 100%;
  }
  .articles .search {
    width: 30%;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
  .content {
    width: 50%;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 90px;
    padding-bottom: 40px;
    z-index: 999;
  }
  .content{
    color: whitesmoke;
  }
  .el-card {
    /*width: 100%;*/
    position: relative;
    word-wrap:break-word;
    word-break:break-all;
    overflow: hidden;
    margin-bottom: 40px;
    min-height: 100px;
    max-height: 350px;
    padding-bottom: 40px;
  }
  .header .title {
    font-size: 20px;
    font-weight: bold;
  }
  .header .title:hover{
    color: lightcoral;
    cursor: pointer;
  }
  .articles .info {
    margin-top: 10px;
    box-sizing: border-box;
    font-size: 12px;
    color: grey;
  }
  .articles .info span {
    margin-right: 20px;
  }
  .el-pagination{
    padding: 5px 20px;
    border-radius: 10px;
    background-color: whitesmoke;
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-30%);
    z-index: 999;
  }
  .content .text img{
    width: 100%!important;
  }
</style>
