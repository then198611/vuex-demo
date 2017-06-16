import Vue from 'vue'
import Store from '../store'
import Router from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login'
import List from '@/views/List'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        requireAuth: true  // this router need login
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})

/*
*  login middleware
*  check the router with requireAuth true
* */

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    console.log(Store)
    if (Store.state.Login.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
