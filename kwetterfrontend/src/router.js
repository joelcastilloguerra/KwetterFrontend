import Vue from 'vue'
import Router from 'vue-router'

import AccountPage from './views/AccountPage'
import Homescreen from './views/Homescreen'
import AdminPanel from './views/AdminPanel'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'accountPage',
    //   component: AccountPage
    // },
    // {
    //   path: '/',
    //   name: 'homescreen',
    //   component: Homescreen
    // }
    {
      path: '/',
      name: 'adminPanel',
      component: AdminPanel
    }
  ]
})
