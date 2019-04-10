import Vue from 'vue'
import Router from 'vue-router'

import AccountPage from './views/AccountPage'
import Homescreen from './views/Homescreen'
import AdminPanel from './views/AdminPanel'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'homescreen',
            component: Homescreen
        },
        {
            path: '/account',
            name: 'accountPage',
            component: AccountPage
        },
        {
            path: '/admin',
            name: 'adminPanel',
            component: AdminPanel
        }
    ]
})
