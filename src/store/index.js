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
  userInfo: state => state.userInfo,
  totalPrice: state => {
    let price = 0
    if (state.orderInfo) {
      const selectFoods = state.orderInfo.selectFoods
      selectFoods.forEach(food => {
        price += food.activity.fixed_price * food.count
      })
      price += state.orderInfo.shopInfo.float_delivery_fee
    }
    return price
  },
  remarkInfo: state => state.remarkInfo
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
