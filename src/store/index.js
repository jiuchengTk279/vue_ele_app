import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
// import getters from './getters'

const getters = {
  location: state => state.location,
  address: state => state.address,
  orderInfo: state => state.orderInfo,
  userInfo: state => state.userInfo
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
