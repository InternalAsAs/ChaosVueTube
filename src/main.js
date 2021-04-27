import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(require('vue-script2'))

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$results = []
Vue.prototype.$show = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
