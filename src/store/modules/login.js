import axios from 'axios'
import Types from '../types'
const MODULE_NAME = Types.LOGIN
const state = {
  name: '',
  token: ''
}

const getters = {
  currentUser: state => {
    return {
      name: state.name,
      token: state.token
    }
  }
}

const mutations = {
  [MODULE_NAME.LOGIN_M_UPDATE_NAME] (state, name) {
    state.name = name
  },
  [MODULE_NAME.LOGIN_M_UPDATE_TOKEN] (state, token) {
    state.token = token
  }
}

const actions = {
  [MODULE_NAME.LOGIN_A_LOGIN] ({state, commit}, data) {
    console.log('login login')
    commit(MODULE_NAME.LOGIN_M_UPDATE_NAME, data.name)
    commit(MODULE_NAME.LOGIN_M_UPDATE_TOKEN, data.token)
    // return new Promise((resolve, reject) => {
    //   setTimeout(function () {
    //     resolve()
    //   }, 3000)
    // })
    return axios.post('/api/login')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
