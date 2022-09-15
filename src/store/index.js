import { createStore } from 'vuex'
import router from '@/router'
import { login } from '@/api/login.js'
import { setTokenTime } from '@/utils/auth.js'

export default createStore({
  state: {
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token)
    }
  },
  actions: {
    login({ commit }, userinfo) {
      return new Promise((resolve, reject) => {
        login(userinfo).then(res => {
          setTokenTime()
          commit('setToken', res.token)
          router.replace('/')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    logout({commit}) {
      commit('setToken', '')
      router.replace('/login')
      localStorage.clear();
    }
  },
  modules: {
  }
})
