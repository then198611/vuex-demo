import Vue from 'vue'
import Vuex from 'vuex'

import Login from './modules/login'
import List from './modules/list'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Login,
    List
  }
})
