import { createStore } from 'vuex'

const store = createStore({
  state: {
    screenSize: 0
  },
  getters: {},
  mutations: {
    UPDATE_SCREEN_SIZE: (state, payload) => {
      state.screenSize = payload
    }
  },
  actions: {
    UpdateScreenSize({ commit }, payload) {
      commit('UPDATE_SCREEN_SIZE', payload)
    }
  },
  modules: {}
})

export default store
