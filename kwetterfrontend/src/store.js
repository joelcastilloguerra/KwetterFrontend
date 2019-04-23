import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from 'vue-router'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        user: {

            state: {

                user: {
                    "id": 2,
                    "username": "username",
                    "firstname": "Name",
                    "lastname": "Lastname",
                    "email": "email@email.com",
                    "bio": "Bio herer",
                    "location": "location",
                    "websiteUrl": "Website",
                    "userRole": "NORMAL_USER",
                    "followers": [],
                    "following": []
                },
                userKweets: {}
            },
            getters: {

                USER: state => {

                    return state.user;

                },
                USER_KWEETS: state => {

                    return state.userKweets;

                }
            },
            mutations: {

                SET_USER: (state, payload) => {

                    state.user = payload;

                },
                SET_USER_KWEETS: (state, payload) => {

                    state.userKweets = payload;

                }

            },
            actions: {

                SET_USER: async (context, payload) => {

                    let {data} = await Axios.get('http://127.0.0.1:8081/user/get', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}});
                    context.commit('SET_USER', data)

                },
                SET_USER_KWEETS: async (context, payload) => {

                    let {data} = await Axios.get('http://127.0.0.1:8081/kweet/getLatest', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}});
                    context.commit('SET_USER_KWEETS', data);

                }

            }

        },

        timeline: {

            state: {

                timeline: []

            },
            getters: {

                TIMELINE: state => {

                    return state.timeline;

                }

            },
            mutations: {

                SET_TIMELINE: (state, payload) => {

                    state.timeline = payload;

                }

            },
            actions: {

                SET_TIMELINE: async (context, payload) => {

                    let {data} = await Axios.get('http://127.0.0.1:8081/kweet/getTimeline', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}});
                    context.commit('SET_TIMELINE', data);

                }

            }

        },

        menu: {

            state: {

                activeItem: 'home'

            },
            getters: {

                ACTIVE_ITEM: state => {

                    return state.activeItem;

                }

            },
            mutations: {

                SET_ACTIVE_ITEM: (state, payload) => {

                    state.activeItem = payload;

                }

            }


        },

        admin: {

            state: {

                searchKweets : [],
                searchUsers: []

            },
            getters : {

                SEARCH_KWEETS: state => {

                    return state.searchKweets;

                },
                SEARCH_USERS: state => {

                    return state.searchUsers;

                }

            },
            mutations : {

                SET_SEARCH_KWEETS:(state, payload) => {

                    state.searchKweets = payload

                },
                SET_SEARCH_USERS:(state, payload) => {

                    state.searchUsers = payload

                }

            }

        }


    }

})
