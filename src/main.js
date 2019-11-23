import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 引入自己的样式
import './assets/css/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
