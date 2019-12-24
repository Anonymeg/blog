<template>
  <el-carousel class="loop" indicator-position="outside">
    <el-carousel-item v-for="(item, i) in imgUrl" :key="i">
      <img :src="item">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: 'MainCarousel',
    data() {
      return {
        imgUrl: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574925667732&di=9edd1f5200b97a42d19eaaaa24a9cd1d&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-11-06%2F5be155d25c184.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574925698644&di=c93d9a951c00c0b8c539f52614cf66ed&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-11-08%2F5be3f1b9958b5.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574925770870&di=6a354378e2c56a908d64cd31d4642421&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F24%2F20170724102610_PkLUQ.jpeg'
        ]
      }
    }
  }
</script>

<style scoped>
  .loop{
    margin-left: 30%;
    width: 600px;
    border-radius: 10px;
  }
.loop img{
  width: 600px;
}
</style>
