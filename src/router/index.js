import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "cms" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "cms" */ '../views/Home.vue'),
    children: [{
      path: '/rights',
      name: 'Rights',
      component: () => import(/* webpackChunkName: "cms" */ '../views/Rights.vue'),
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
