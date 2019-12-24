<template>
  <div class="time">
      <p>网站已经运行了：</p>
      <p>{{this.time}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Time',
    data() {
      return {
        time: null
      }
    },
    created() {
      this.getNowTime()
    },
    methods: {
      getNowTime() {
        // 使用let不能像var那样变量提前声明  所以需要先声明在赋值
        let timer = null
        // 定时器需要先清后设
        window.clearInterval(timer)
        timer = setInterval(() => {
          let nowTime = new Date().getTime()
          let time = (nowTime - 1576852727002) / 1000
          time = time % (86400 * 365)
          time = time % (86400 * 30)
          let d = Math.floor(time / 86400)
          time = time % 86400
          let h = Math.floor(time / 3600)
          time = time % 3600
          let m = Math.floor(time / 60)
          let s = Math.floor(time % 60)
          this.time = d + '天' + h + '时' + m + '分' + s + '秒'
        }, 1000)
      }
    }
  }
</script>

<style scoped>
.time{
  width: 250px;
  height: 200px;
  position: absolute;
  top: 3%;
  left: 3%;
  z-index: 999;
}

.time p {
  margin-top: 50px;
}

.time p:first-child {
  font-size: 20px;
  padding-left: 20px;
  color: lightskyblue;
}

.time p:last-child {
  margin-top: 20px;
  font-size: 25px;
  color: lightcoral;
}
</style>
