import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 状态
  state: {
    // 当前用户id
    userId: null,
    likeTextId: null,
    // 当前文章的id索引
    articleTextId: null
  },
  // 类似计算属性
  getters: {
  },
  // 方法
  mutations: {
    // 保存当前登录的用户
    saveUser(state, payload) {
      state.userId = payload
    },
    // 获取当前选中的id传值给state里面
    getArticleId(state, payload) {
      state.articleTextId = payload
    },
    getLikeId(state, payload) {
      state.likeTextId = payload
    }
  },
  // 异步操作要写这里
  actions: {
  },
  // 模块
  modules: {
  }
})
export default store
