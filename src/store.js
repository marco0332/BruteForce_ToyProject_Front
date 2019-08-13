import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curView: ''
  },
  mutations: {
    setView (state, payload) {
      state.curView = payload.curView
    }
  }
})
