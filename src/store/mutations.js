import { SET_ADDRESS, SET_LOCATION, ORDER_INFO, USER_INFO, REMARK_INFO } from './mutation-type.js'

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
  },
  [USER_INFO] (state, {userInfo}) {
    if (userInfo) {
      state.userInfo = userInfo
    } else {
      state.userInfo = null
    }
  },
  [REMARK_INFO] (state, {remarkInfo}) {
    if (remarkInfo) {
      this.remarkInfo = remarkInfo
    } else {
      state.remarkInfo = null
    }
  }
}
