<template>
  <div class="likes">
    <el-input class="search" v-model="search" placeholder="请输入搜索内容" clearable @change="searchLike">
      <el-button slot="append" icon="el-icon-search" @click="searchLike"></el-button>
    </el-input>
    <el-tabs tab-position="right" @tab-click="getSelectLabel">
      <el-tab-pane label="全部">
        <div class="content">
          <el-card shadow="hover"
                   v-for="(item, i) in likesList.slice((pageInfo.page-1)*pageInfo.page_size, pageInfo.page*pageInfo.page_size)"
                   :key="i">
            <!--        头部-->
            <div slot="header" class="header" @click="goLikeText(item.like_id)">
              <el-tooltip class="item" effect="dark" content="去查看全文" placement="top">
                <span class="title">{{item.like_title}}</span>
              </el-tooltip>
              <div class="info">
                <span>所属标签：</span>
                <el-tag type="warning" size="mini">{{item.like_label_name}}</el-tag>
                <span class="el-icon-user">：{{item.user_id === 1 ? '顾鑫' : '未知'}}</span>
                <span class="el-icon-time">：{{item.like_date | dataFormat}}</span>
              </div>
            </div>
            <!--        内容-->
            <div v-html="item.like_content">
              {{item.like_content}}
            </div>
          </el-card>
              分页
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
      </el-tab-pane>
      <el-tab-pane
              :label="item.label_name"
              v-for="(item, i) in labelsList"
              :key="i">
        <div class="content">
          <el-card shadow="hover"
                   v-for="(item, i) in indexLike"
                   :key="i">
            <!--        头部-->
            <div slot="header" class="header" @click="goLikeText(item.like_id)">
              <el-tooltip class="item" effect="dark" content="去查看全文" placement="top">
                <span class="title">{{item.like_title}}</span>
              </el-tooltip>
              <div class="info">
                <span>所属标签：</span>
                <el-tag type="warning" size="mini">{{item.like_label_name}}</el-tag>
                <span class="el-icon-user">：{{item.user_id === 1 ? '顾鑫' : '未知'}}</span>
                <span class="el-icon-time">：{{item.like_date | dataFormat}}</span>
              </div>
            </div>
            <!--        内容-->
            <div v-html="item.like_content">
              {{item.like_content}}
            </div>
          </el-card>
              分页
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'Likes',
    data() {
      return {
        // 分页信息
        pageInfo: {
          page_size: 4,
          page: 1
        },
        currentSort: '2',
        labelsList: [],
        likesList: [],
        total: null,
        indexLike: [],
        search: ''
      }
    },
    created() {
      this.getLabelsList()
      this.getLikes()
    },
    methods: {
      // 获取所有标签
      getLabelsList() {
        this.$axios.get(`/labels/${this.currentSort}`).then(res => {
          this.labelsList = res.data
        })
      },
      // 获取全部like列表
      getLikes() {
        this.$axios.get('/like').then(res => {
          this.likesList = res.data.reverse()
          this.total = res.data.length
        })
      },
      // 搜索文章
      searchLike() {
        if (this.search === '') {
          this.getLikes()
        } else {
          this.$axios.get(`/like/search/${this.search}`).then(res => {
            this.likesList = res.data.reverse()
            this.total = res.data.length
          })
        }
      },
      // 筛选标签like  没办法没有点击事件
      getSelectLabel(e) {
        const id = Number(e.index) + 19
        // 防止全部
        if (id >= 20) {
          this.$axios.get(`/like/label/${id}`).then(res => {
            this.indexLike = res.data
            this.total = res.data.length
          })
        } else {
          return false
        }
      },
      // 点击文章时按照文章id去查询文章
      goLikeText(id) {
        this.$store.commit('getLikeId', id)
        this.$router.push(`/liketext/${id}`)
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
  .likes .search {
    width: 30%;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
.el-tabs{
  width: 50%;
  position: absolute;
  right: 20%;
  top: 20%;
  z-index: 999;
}
.content {
  width: 100%;
  padding-bottom: 40px;
  z-index: 999;
}
.el-card {
  /*width: 100%;*/
  position: relative;
  word-wrap:break-word;
  word-break:break-all;
  overflow: hidden;
  margin-bottom: 40px;
  min-height: 100px;
  max-height: 400px;
  padding-bottom: 20px;
}
.header .title {
  font-size: 18px;
  font-weight: bold;
}
.header .title:hover{
  color: lightcoral;
  cursor: pointer;
}
.content .info {
  margin-top: 10px;
  box-sizing: border-box;
  font-size: 12px;
  color: grey;
}
.content .info span {
  margin-right: 20px;
}
.el-pagination{
  padding: 5px 20px;
  border-radius: 10px;
  background-color: whitesmoke;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  z-index: 999;
}
</style>
