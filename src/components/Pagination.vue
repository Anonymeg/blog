<template>
  <div>
    <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageInfo.page"
            :page-sizes="[4, 8, 12, 16]"
            :page-size="pageInfo.page_size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    data() {
      return {
        pageInfo: {
          page_size: 4,
          page: 1
        }
      }
    },
    methods: {
      handleSizeChange(newSize) {
        this.pageInfo.page_size = newSize
        this.$emit('sizeChange')
      },
      handleCurrentChange(newPage) {
        this.pageInfo.page = newPage
      }
    }
  }
</script>

<style scoped>
.el-pagination{
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
}
</style>
