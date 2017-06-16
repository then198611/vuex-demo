import axios from 'axios'
import Types from '../types'
const MODULE_NAME = Types.LIST
const state = {
  lists: []
}

const getters = {
  [MODULE_NAME.LIST_G_LENGTH]: state => {
    return state.lists.length
  }
}

const mutations = {
  [MODULE_NAME.LIST_M_ADD_DATA] (state, item) {
    item instanceof Array ? state.lists = state.lists.concat(item) : state.lists.push(item)
  },
  [MODULE_NAME.LIST_M_REDUCE_DATA] (state, item) {
    let index = state.lists.findIndex((value) => value === item)
    if (index >= 0) {
      state.lists.splice(index, 1)
    }
  }
}

const actions = {
  [MODULE_NAME.LIST_A_ADD] ({commit}, item) {
    commit(MODULE_NAME.LIST_M_ADD_DATA, item)
  },
  [MODULE_NAME.LIST_A_REDUCE] ({commit}, item) {
    commit(MODULE_NAME.LIST_M_REDUCE_DATA, item)
  },
  [MODULE_NAME.LIST_A_GET] ({commit}) {
    axios.get('/api/list').then((res) => {
      if (res.data.success) {
        commit(MODULE_NAME.LIST_M_ADD_DATA, res.data.data)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
