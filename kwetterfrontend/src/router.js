import Vue from 'vue'
import Router from 'vue-router'

import AccountPage from './views/AccountPage'
import Homescreen from './views/Homescreen'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'accountPage',
    //   component: AccountPage
    // },
    {
      path: '/',
      name: 'homescreen',
      component: Homescreen
    }
  ]
})
