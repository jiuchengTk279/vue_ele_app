import { SET_ADDRESS, SET_LOCATION, ORDER_INFO, USER_INFO, REMARK_INFO } from './mutation-type.js'

export default {
  setLocation ({commit, state}, location) {
    commit(SET_LOCATION, location)
  },
  setAddress ({commit, state}, address) {
    commit(SET_ADDRESS, address)
  },
  setOrderInfo ({commit, state}, orderInfo) {
    commit(ORDER_INFO, orderInfo)
  },
  setUserInfo ({commit, state}, userInfo) {
    commit(USER_INFO, userInfo)
  },
  setRemarkInfo ({commit, state}, remarkInfo) {
    commit(REMARK_INFO, remarkInfo)
  }
}
