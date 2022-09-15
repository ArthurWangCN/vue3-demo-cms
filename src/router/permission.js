import router from './index.js'
import store from '@/store'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  if (store.state.token) {
    next()
  } else {
    whiteList.includes(to.path) ? next() : next('/login')
  }
})
