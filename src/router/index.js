import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/evisjap',
    name: 'EvisJap',
    component: () => import('../views/EvisJap.vue')
  },
  {
    path: '/comdot',
    name: 'ComDot',
    component: () => import('../views/ComDot.vue')
  },
  {
    path: '/tokaionair',
    name: 'TokaiOnAir',
    component: () => import('../views/TokaiOnAir.vue')
  },
  {
    path: '/hikakintv',
    name: 'HikakinTV',
    component: () => import('../views/HikakinTV.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
