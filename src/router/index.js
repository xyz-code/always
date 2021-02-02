import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../view/home/Home')
const Category = () => import('../view/category/Category')
const Message = () => import('../view/message/Message')
const Photo = () => import('../view/photo/Photo')
const Profile = () => import('../view/profile/Profile')
const Time = () => import('../view/time/Time')
const Article = () => import('../view/article/Article')
const Login = () => import('../view/login/Login')
const WriteArticle = () => import('../view/article/WriteArticle')
//安装插件
Vue.use(VueRouter)

//创建router
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/time',
    component:Time
  },
  {
    path:'/photo',
    component:Photo
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/message',
    component:Message
  },
  {
    path:'/write',
    component:WriteArticle
  },
  {
    path:'/login',
    component:Login
  },
  {
    //指定具体文章
    path:'/article/:id',
    component:Article
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})


export default router