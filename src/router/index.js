import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home')
const Login = () => import('../views/Login')
const Enroll = () => import('../views/Enroll')
const Main = () => import('../views/Main')
const Articles = () => import('../views/Articles')
const Likes = () => import('../views/Likes')
const Write = () => import('../views/Write')
const ArticleText = () => import('../views/ArticleText')
const LikeText = () => import('../views/LikeText')
const BlogProcess = () => import('../views/BlogProcess')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: Login },
  { path: '/enroll', component: Enroll },
  { path: '/home',
    component: Home,
    children: [
      { path: '/home', component: Main },
      { path: '/articles', component: Articles },
      { path: '/likes', component: Likes },
      { path: '/write', component: Write },
      { path: '/blog-process', component: BlogProcess },
      { path: '/articletext/:id', component: ArticleText },
      { path: '/liketext/:id', component: LikeText } ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
