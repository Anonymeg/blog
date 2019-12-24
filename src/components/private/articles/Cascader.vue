<template>
  <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"></el-cascader>
</template>

<script>
  export default {
    name: 'Cascader'
  }
</script>

<style scoped>

</style>
