import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import $ from 'jquery'
import './plugins/element.js'
// 引入自己的样式
import './assets/css/index.css'

axios.defaults.baseURL = 'http://127.0.0.1:5000/api'
// 请求拦截器
axios.interceptors.request.use(config => {
  // 给每次请求头中添加一个Authorization成员携带token令牌
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$axios = axios

Vue.config.productionTip = false

// 创建一个全局的时间过滤器
Vue.filter('dataFormat', function (value) {
  const date = new Date(value)
  const dateY = date.getFullYear()
  const dateM = (date.getMonth() + 1 + '').padStart(2, 0)
  const dateD = ((date.getDate() + '')).padStart(2, 0)
  const dateH = (date.getHours() + '').padStart(2, 0)
  const datem = (date.getMinutes() + '').padStart(2, 0)
  const dateS = (date.getSeconds() + '').padStart(2, 0)

  return `${dateY}-${dateM}-${dateD} ${dateH}:${datem}:${dateS}`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
