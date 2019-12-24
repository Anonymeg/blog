<template>
  <el-carousel height="200px" direction="vertical" :autoplay="true">
    <el-carousel-item v-for="(item, i) in urls" :key="i">
      <img :src="item">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  export default {
    name: 'RightCarousel',
    data() {
      return {
        urls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574765917617&di=c88d9e1b429774a260a992f1352c5ee4&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Faa18f65ed4e319faecea92b7b33166914f845cf637a31-cKGMni_fw658', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574765949990&di=4ccc6015acc559248b62e0d7427bec1b&imgtype=0&src=http%3A%2F%2Fpic107.nipic.com%2Ffile%2F20160823%2F18022501_122256797000_2.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574765969905&di=a3021b20202bd9f63136c17035ea5886&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201507%2F04%2F20150704111541_XwfTZ.thumb.700_0.jpeg']
      }
    }
  }
</script>

<style scoped>
  .el-carousel{
    width: 300px;
    margin-bottom: 20px;
    border-radius: 10px;
    z-index: 999;
  }
  .el-carousel img{
    width: 100%;
  }
</style>
