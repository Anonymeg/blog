<template>
  <div class="blog-process">
    <el-timeline>
      <el-timeline-item
              timestamp="2019/12/1"
              placement="top"
              type="primary"
              size="large"
              icon="el-icon-loading">
        <el-card>
          <h4>Blog继续搭建</h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item
              timestamp="2019/12/1"
              placement="top"
              type="success"
              size="large"
              icon="el-icon-info">
        <el-card>
          <h4>完成文章标题搜索功能</h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item
              timestamp="2019/11/28"
              placement="top"
              type="success"
              size="large"
              icon="el-icon-loading">
        <el-card>
          <h4>界面布局重新搭建</h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item
              timestamp="2019/11/26"
              placement="top"
              type="success"
              size="large"
              icon="el-icon-reading">
        <el-card>
          <h4>实现点击文章小卡片可以去阅读全文</h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item
              timestamp="2019/11/25"
              placement="top"
              type="success"
              size="large"
              icon="el-icon-edit">
        <el-card>
          <h4>把富文本编辑放入网页</h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item
              timestamp="2019/11/24"
              placement="top"
              type="success"
              size="large"
              icon="el-icon-reading">
        <el-card>
          <h4>搭建完主页面</h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item
              timestamp="2019/11/23"
              placement="top"
              type="success" size="large"
              icon="el-icon-s-home">
        <el-card>
          <h4>创建了博客基本结构</h4>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
  export default {
    name: 'BlogProcess'
  }
</script>

<style scoped>
  .blog-process{
    width: 40%;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
  }
.el-timeline{
  width: 100%;
  height: 50%;
  padding-left: 10px;
  overflow: auto;
}
</style>
