<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import CanvasNest from 'canvas-nest.js'
  export default {
    name: 'app',
    created() {
      this.$nextTick(() => {
        const config = { // 配置
          color: '255, 255, 0', // 线条颜色
          pointColor: '255, 155, 0', // 节点颜色
          opacity: 1, // 线条透明度
          count: 300, // 线条数量
          zIndex: 1 // 画面层级
        }
        const element = document.getElementsByTagName('body')[0]
        new CanvasNest(element, config)
        // cn.destroy()
      })
    }
  }
</script>
