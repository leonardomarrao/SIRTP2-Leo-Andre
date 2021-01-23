import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  info: {
    user: {
      username: '',
      password: ''
    }
  },
  mutations: {
    setUser(info, user) {
      info.user = user
    }
  },
  actions: {},
  getters: {
    getInfo() {
      return info.user
    }
  }
})
