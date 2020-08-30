import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// Google Adsense 用
// Vue.component('adsense', VueAdsense)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
