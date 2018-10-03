/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Msite = () => import('../pages/Msite/Msite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Login = () => import('../pages/Login/Login.vue')
// 声明使用插件
Vue.use(VueRouter)
export default new VueRouter(
  {
    routes: [
      {
        path: '/',
        redirect: '/msite'
      },
      {
        path: '/msite',
        component: Msite,
        meta: {
          showFooter: true
        }
      },
      {
        path: '/order',
        component: Order,
        meta: {
          showFooter: true
        }
      },
      {
        path: '/profile',
        component: Profile,
        meta: {
          showFooter: true
        }
      },
      {
        path: '/search',
        component: Search,
        meta: {
          showFooter: true
        }
      },
      {
        path: '/login',
        component: Login
      }
    ]

  }

)
