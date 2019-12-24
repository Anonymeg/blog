<template>
  <div id="home" class="home">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <bottom-bar></bottom-bar>
    <backtop></backtop>
  </div>
</template>

<script>
  import NavBar from '@/components/common//NavBar'
  import Backtop from '@/components/common/Backtop'
  import BottomBar from '@/components/common/BottomBar'

  export default {
    name: 'home',
    components: { NavBar, Backtop, BottomBar }
  }
</script>
<style scoped>
  .home{
    width: 100%;
    height: 100vh;
    position: relative;
    overflow-x: hidden;
    background: url("../assets/images/bg/bg.jpg") 0 0 no-repeat fixed;
    background-size: cover;
  }
</style>
