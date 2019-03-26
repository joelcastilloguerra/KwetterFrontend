import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    user : {}

  },
  getters : {

    USER : state => {

      return state.user;

    }

  },
  mutations: {

    SET_USER : (state, payload) => {

      state.user = payload;

    }

  },
  actions: {

    SET_USER : async (context, payload) => {

      let { data } = await Axios.get('http://127.0.0.1:8081/user/getAll')
      context.commit('SET_USER', data)

    }

  }
})
