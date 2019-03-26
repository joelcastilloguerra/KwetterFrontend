import Vue from 'vue'
import './plugins/axios'
import App from './views/AccountPage'
// import App from './views/AdminPanel'
// import App from './views/AdminPanel'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
