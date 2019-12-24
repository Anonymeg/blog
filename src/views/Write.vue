<template>
  <div class="write">
    <div class="editor" v-cloak>
      <el-alert
              title="记得登录账号并选择分类标签！否则不能发表哦！"
              type="warning"
              center
              show-icon>
      </el-alert>
      <el-input
              placeholder="请输入标题"
              v-model="title"
              clearable>
      </el-input>
      <!--    {{article_content}}-->
      <tinymce-editor class="tinymce"
                      ref="editor"
                      v-model="content"
                      :disabled="disabled">
        <!--                    @onClick="onClick"-->
      </tinymce-editor>
      <div class="btn">
        <el-button type="danger" icon="el-icon-delete" @click="clear">清空内容</el-button>
        <el-button type="success" @click="addArticle"  :disabled="isSelect"><i class="el-icon-thumb"></i> 发表</el-button>
      </div>
    </div>
    <div class="left">
      <SortsAndLabels @overSelectLabel="overSelectLabel"></SortsAndLabels>
    </div>
  </div>
</template>

<script>
  import TinymceEditor from '../../public/tinymce-editor'
  import SortsAndLabels from '@/components/private/write/SortsAndLabels'
  export default {
    components: { TinymceEditor, SortsAndLabels },
    data () {
      return {
        // 公共的文章标题和内容
        title: '',
        content: '',
        // 添加文章
        articleInfo: {
          article_title: '',
          article_content: '',
          article_date: null,
          article_sort_id: null,
          article_label_id: null,
          article_label_name: null
        },
        // 添加like
        likeInfo: {
          like_title: '',
          like_content: '',
          like_date: null,
          like_sort_id: null,
          like_label_id: null,
          like_label_name: null
        },
        disabled: false,
        isSelect: true,
        // 选中的标签
        selectLabel: null
      }
    },
    mounted() {
      this.judgeSelect()
    },
    methods: {
      // 判断有没有选中标签否者不能发表
      judgeSelect() {
        if (this.$store.state.userId === 1 && this.selectLabel !== null) {
          this.isSelect = false
        } else {
          this.isSelect = true
        }
      },
      overSelectLabel(payload) {
        this.selectLabel = payload
        this.judgeSelect()
      },
      addArticle() {
        // 标题和内容拼接方便显示
        // const title = '<h3>' + this.articleInfo.article_title + '</h3>'
        // this.articleInfo.article_content = title + this.articleInfo.article_content
        // 创建发表时间戳
        // 正则匹配替换图片格式
        const regex = new RegExp('<img', 'gi')
        this.content = this.content.replace(regex, `<img style="max-width: 100%; height: auto"`)
        // 判断要发表的是什么分类决定发送什么请求
        if (this.selectLabel.sorts_id === 1) {
          this.articleInfo.article_title = this.title
          this.articleInfo.article_content = this.content
          this.articleInfo.article_sort_id = this.selectLabel.sorts_id
          this.articleInfo.article_label_id = this.selectLabel.label_id
          this.articleInfo.article_label_name = this.selectLabel.label_name
          this.articleInfo.article_date = new Date().getTime()
          console.log(this.articleInfo)
          this.$axios.post('/article', this.articleInfo).then(() => {
            this.$msg.success('发表成功')
            this.clear()
            // this.$emit('reload')
            this.$router.push('/articles')
          })
        } else if (this.selectLabel.sorts_id === 2) {
          this.likeInfo.like_title = this.title
          this.likeInfo.like_content = this.content
          this.likeInfo.like_sort_id = this.selectLabel.sorts_id
          this.likeInfo.like_label_id = this.selectLabel.label_id
          this.likeInfo.like_label_name = this.selectLabel.label_name
          this.likeInfo.like_date = new Date().getTime()
          console.log(this.likeInfo)
          this.$axios.post('/like', this.likeInfo).then(() => {
            this.$msg.success('发表成功')
            this.clear()
            // this.$emit('reload')
            this.$router.push('/likes')
          })
        }
      },
      // 修改文章或者like
      // edit() {
      //   if ()
      // }
      // 清空内容
      clear () {
        this.$refs.editor.clear()
      }
    }
  }
</script>
<style scoped>
  .write{
    width: 100%;
    height: 100vh;
  }
   /*  解决闪烁问题  */
  [v-cloak] {
    display: none;
  }
  .editor{
    color: whitesmoke;
    width: 50%;
    position: absolute;
    top: 15%;
    left: 40%;
    transform: translateX(-50%);
    z-index: 999;
  }
  .btn{
    margin-top: 5px;
    float: right;
  }
  .left{
    position: absolute;
    right: 10%;
    top: 20%;
    z-index: 999;
  }
</style>
