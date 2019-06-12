import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from 'vue-router'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        user: {

            state: {
                currentUser: {},
                userKweets: {},
                currentViewingProfile: Number
            },
            getters: {

                USER: state => {

                    return state.user;

                },
                USER_KWEETS: state => {

                    return state.userKweets;

                },
                CURRENT_VIEWING_PROFILE: state => {

                    return state.currentViewingProfile;

                },
                CURRENT_USER: state => {

                    return state.currentUser;

                }
            },
            mutations: {

                SET_USER: (state, payload) => {

                    state.user = payload;

                },
                SET_USER_KWEETS: (state, payload) => {

                    state.userKweets = payload;

                },
                SET_CURRENT_VIEWING_PROFILE: (state, payload) => {

                    state.currentViewingProfile = payload;

                },
                SET_CURRENT_USER: (state, payload) => {

                    state.currentUser = payload;

                }

            },
            actions: {

                SET_CURRENT_VIEWING_PROFILE: async (context) => {

                    let profileId;

                    if(context.getters.CURRENT_VIEWING_PROFILE.id){

                        profileId = context.getters.CURRENT_VIEWING_PROFILE.id;
                    } else {

                        profileId = context.getters.CURRENT_VIEWING_PROFILE

                    }

                    let {data} = await Axios.get('http://127.0.0.1:8081/user/get/' + profileId, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}});
                    context.commit('SET_CURRENT_VIEWING_PROFILE', data)

                },
                SET_USER_KWEETS: async (context) => {

                    let {data} = await Axios.get('http://127.0.0.1:8081/kweet/getLatest/' + context.getters.CURRENT_VIEWING_PROFILE, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}});
                    context.commit('SET_USER_KWEETS', data);

                },
                SET_CURRENT_USER: async (context) => {

                    let {data} = await Axios.get('http://127.0.0.1:8081/user/setCurrentUser', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}});
                    context.commit('SET_CURRENT_USER', data);

                },

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
