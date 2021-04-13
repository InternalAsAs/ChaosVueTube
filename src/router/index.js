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
    component: () => import('../views/EvisJap.vue')
  },
  {
    path: '/comdot',
    component: () => import('../views/ComDot.vue')
  },
  {
    path: '/tokaionair',
    component: () => import('../views/TokaiOnAir.vue')
  },
  {
    path: '/hikakintv',
    component: () => import('../views/HikakinTV.vue')
  },
  {
    path: '/susurutv',
    component: () => import('../views/SUSURU TV.vue')
  },
  {
    path: '/egachannel',
    component: () => import('../views/EgaChannel.vue')
  },
  {
    path: '/kimagurecook',
    component: () => import('../views/KimagureCook.vue')
  },
  {
    path: '/ouchimentv',
    component: () => import('../views/OuchiMenTV.vue')
  },
  {
    path: '/raphael',
    component: () => import('../views/Raphael.vue')
  },
  {
    path: '/kenki',
    component: () => import('../views/Kenki.vue')
  },
  {
    path: '/rirohitori',
    component: () => import('../views/RiroHitori.vue')
  },
  {
    path: '/pewdiepie',
    component: () => import('../views/PewDiePie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
