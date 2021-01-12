import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'index',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('../views/Me.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/Order.vue')
      },
      {
        path: '/address',
        name: 'address',
        component: () => import('../views/Address.vue')
      },
      {
        path: '/city',
        name: 'city',
        component: () => import('../views/City.vue')
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('../views/Search.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由导航守卫
// router.beforeEach((to, from, next) => {
//   const isLoin = localStorage.ele_login ? true : false
//   // 判断去向路径是否是登录页面
//   if (to.path === '/login') {
//     next()
//   } else {
//     // 是否在登录状态下
//     isLoin ? next() : next('/login')
//   }
// })

export default router
