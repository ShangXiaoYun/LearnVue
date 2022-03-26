import Vue from 'vue'
//配置路由相关信息
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

//路由懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')

//1、通过Vue.use()，安装插件
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    //路由重定向
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'news',
        component:HomeNews,
        // meta:{
        //   title:'新闻'
        // }

      },
      {
        path:'message',
        component:HomeMessage,
        // meta:{
        //   title:'消息'
        // }
      }
    ]
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'关于'
    },
  },
  {
    path:'/user/:userId',
    component:User,
    meta:{
      title:'用户'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  //配置路由和组件之间的应用关系
  routes
})

//前置钩子（guard）
router.beforeEach((to,from,next)=>{
  //从from跳转到to
  document.title = to.matched[0].meta.title
  console.log('xxxxx');
  next()
})

//跳转玩之后  后置钩子
router.afterEach((to,from)=>{
  console.log("--------");
})

export default router
