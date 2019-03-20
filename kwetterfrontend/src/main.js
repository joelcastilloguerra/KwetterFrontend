import Vue from 'vue'
// import App from './views/AccountPage'
import App from './views/Homescreen'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
