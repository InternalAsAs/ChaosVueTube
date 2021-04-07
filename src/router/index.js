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
    path: '/evisjap/',
    name: 'EvisJap',
    component: () => import(/* webpackChunkName: "about" */ '../views/EvisJap.vue')
  },
  {
    path: '/comdot/',
    name: 'ComDot',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComDot.vue')
  },
  {
    path: '/tokaionair/',
    name: 'TokaiOnAir',
    component: () => import(/* webpackChunkName: "about" */ '../views/TokaiOnAir.vue')
  },
  {
    path: '/hikakintv/',
    name: 'HikakinTV',
    component: () => import(/* webpackChunkName: "about" */ '../views/HikakinTV.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
