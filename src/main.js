import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.prototype.$apiResources = {
  categories: null
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
