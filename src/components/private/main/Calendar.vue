<template>
  <div class="calendar">
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
  export default {
    name: 'Calendar',
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>

<style scoped>
.calendar{
  width: 400px;
  height: 200px!important;
}
</style>
