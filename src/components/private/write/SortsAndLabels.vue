<template>
  <div class="sorts-labels">
    <el-card class="box-card">
      <div slot="header" class="header">
        <p>添加文章分类和标签：</p>
        <el-radio-group v-model="currentId" @change="changeSelect">
          <el-radio
                  :label="item.sort_id"
                  v-for="(item, i) in sortsList"
                  :key="i">{{item.sort_name}}
          </el-radio>
        </el-radio-group>
      </div>
      <div class="content">
        <el-tag
                type="danger"
                v-for="(item, i) in labelsList"
                :key="i"
                @click="option(item)">{{item.label_name}}
        </el-tag>
      </div>
      <div class="footer">
        <span>你选择添加的标签：</span>
        <el-tag  type="success">{{selectLabel.label_name}}</el-tag>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'SortsAndLabels',
    data() {
      return {
        // 当前分类id
        currentId: 1,
        // 所有分类列表
        sortsList: [],
        // 选择分类后的标签
        labelsList: [],
        selectLabel: {
          label_name: '请选择'
        }
      }
    },
    created() {
      this.getSortsList()
      this.getLablesList()
    },
    methods: {
      // 获取所有分类
      getSortsList() {
        this.$axios.get('/sorts').then(res => {
          this.sortsList = res.data
        })
      },
      getLablesList() {
        this.$axios.get(`/labels/${this.currentId}`).then(res => {
          this.labelsList = res.data
        })
      },
      // 改变当前分类
      changeSelect(newId) {
        this.currentId = newId
        this.getLablesList()
      },
      option(item) {
        this.selectLabel = item
        this.$emit('overSelectLabel', item)
      }
    }
  }
</script>

<style scoped>
  .sorts-labels {
    width: 320px;
  }

  .header p {
    padding-bottom: 20px;
  }

  .el-radio-group {
    display: flex;
    justify-content: space-around;
  }
  .el-tag {
    cursor: pointer;
    margin: 5px;
  }

  .footer {
    border-top: 1px solid lightgrey;
    margin-top: 20px;
  }
</style>
