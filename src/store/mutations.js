import { SET_ADDRESS, SET_LOCATION, ORDER_INFO } from './mutation-type.js'

export default {
  [SET_LOCATION] (state, {location}) {
    if (location) {
      state.location = location
    } else {
      state.location = null
    }
  },
  [SET_ADDRESS] (state, {address}) {
    if (address) {
      state.address = address
    } else {
      state.address = ''
    }
  },
  [ORDER_INFO] (state, {orderInfo}) {
    if (orderInfo) {
      state.orderInfo = orderInfo
    } else {
      state.orderInfo = null
    }
  }
}
