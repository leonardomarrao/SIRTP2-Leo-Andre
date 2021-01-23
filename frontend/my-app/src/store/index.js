import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: {
      user: {
        username: '',
        password: ''
      }
    },
    plataforma: ""
  },
  mutations: {
    setUser(state, user) {
      state.info.user = user
    },
    setPlataforma(state, plataforma) {
      state.plataforma = plataforma
    }
  },
  actions: {},
  getters: {
    getInfo(state) {
      return state.info
    },
    getPlataforma(state) {
      return state.plataforma
    }
  }
})
