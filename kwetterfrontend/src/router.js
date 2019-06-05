import Vue from 'vue'
import Router from 'vue-router'

import AccountPage from './views/AccountPage'
import Homescreen from './views/Homescreen'
import AdminPanel from './views/AdminPanel'
import LoginPage from './views/LoginPage'
import SocketChat from './views/SocketChat'
import Axios from 'axios'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
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
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/chat',
            name: 'chat',
            component: SocketChat
        },
        {
            path: '*',
            redirect: '/login'
        }

    ]
});

router.beforeEach((to, from, next) => {

    if (to.fullPath !== '/login') {

        if (localStorage.getItem('token') === null) {

            next('/login');

        }

    }

    if (to.fullPath === '/login') {

        if (localStorage.getItem('token') !== null) {

            next('/home');

        }

    }

    if (to.fullPath === '/admin') {


        Axios.get('http://127.0.0.1:8081/user/get', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
            .then(value => {

                if(value.data.userRole !== 'MODERATOR'){

                    next('/home');

                }

            });






    }

    next();

});

export default router;