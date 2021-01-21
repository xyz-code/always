import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../view/home/Home')
const Category = () => import('../view/category/Category')
const Message = () => import('../view/message/Message')
const Photo = () => import('../view/photo/Photo')
const Profile = () => import('../view/profile/Profile')
const Time = () => import('../view/time/Time')

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
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router