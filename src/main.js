import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.use(Vuelidate)

Vue.config.productionTip = false

Vue.directive('styleLogo', {
  bind: function (el, binding) {
    if (binding.arg === 'logo') {
      el.style.fontSize = '180%'
      el.style.fontFamily = 'Nunito Sans'
      el.style.fontStyle = 'normal'
      el.style.fontWeight = 'bold'
      el.style.lineHeight = '40px'
      el.style.color = '#6379F4'
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
