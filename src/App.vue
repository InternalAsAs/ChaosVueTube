<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data: () => ({
    routes: [],
    apiUrl: 'https://api.steinhq.com/v1/storages/606d4683f62b6004b3eb6824/YouTuber'
  }),
  created () {
    this.axios.get(this.apiUrl + '?search={"open":"TRUE"}').then(response => {
      response.data.forEach(item => {
        this.routes.push({
          path: '/' + item.path,
          component: () => import('@/views/' + item.path + '.vue')
        })
        this.$router.addRoutes(this.routes)
        Vue.prototype.$results.push(item)
      })
      Vue.prototype.$show = false
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
}
</style>
