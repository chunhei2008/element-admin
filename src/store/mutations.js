import * as types from './mutation-types'

export default {
  [types.COMMON_SET_TOKEN](state, token) {
    state.token = token
    sessionStorage.setItem('token', token)
  },
  [types.COMMON_SET_USER](state, user) {
    state.user = user
    sessionStorage.setItem('user', JSON.stringify(user))
  },
  [types.COMMON_LOGOUT](state) {
    state.token = ''
    state.user = null
    sessionStorage.clear()
  },
  [types.COMMON_LOGIN_STORAGE](state, data) {
    state.token = data.token
    sessionStorage.setItem('token', data.token)
    state.user = data.user
    sessionStorage.setItem('user', JSON.stringify(data.user))
  }
}
