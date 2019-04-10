import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        user: {

            state: {

                user: {
                    "id": 2,
                    "username": "username",
                    "firstname": "Name",
                    "lastname": "",
                    "email": "email",
                    "bio": "Bio",
                    "location": "location",
                    "websiteUrl": "website",
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

                    let {data} = await Axios.get('http://127.0.0.1:8081/user/getAll');
                    context.commit('SET_USER', data)

                },
                SET_USER_KWEETS: async (context, payload) => {

                    let {data} = await Axios.get('http://127.0.0.1:8081/kweet/getLatest/2');
                    context.commit('SET_USER_KWEETS', data);

                }

            }

        },

        timeline: {

            state : {

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

                    let {data} = await Axios.get('http://127.0.0.1:8081/kweet/getTimeline/2');
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

                },
                CURRENT_ACTIVE_ITEM: state => {

                    switch(this.$route.path){

                        case '/':

                            return 'home';

                        case '/account':

                            return 'account';

                    }

                }

            },
            mutations: {

                SET_ACTIVE_ITEM: (state, payload) => {

                    state.activeItem = payload;

                }

            }


        }


    }

})
