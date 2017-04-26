import axios from 'axios'
import config from 'config'
import { Message } from 'element-ui'
import router from '../router'
import store from '../store'
import * as types from '../store/mutation-types'

axios.defaults.baseURL = config.api

axios.interceptors.request.use(function (config) {
  let token = store.getters.token
  config.params = config.params || {}
  config.params.token = token
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  let data = response.data
  switch (data.code) {
    case -1:
      Message.error(data.message)
      return Promise.reject(data.message)
      break
    case 403:
      Message.error(data.message)
      store.commit(types.COMMON_LOGOUT)
      router.replace({
        path: '/login'
      })
      return Promise.reject(data.message)
      break
    default:
      return data
  }
}, function (error) {
  return Promise.reject(error)
})

export default {
  Login(params) {
    return axios.post('/api/vue/login', params)
  },
  Logout(params) {
    return axios.get('/api/vue/logout', {
      params: params
    })
  },
  TplList(params) {
    return axios.get('/api/vue/sms/tpl-list', {
      params: params
    })
  },
  TplAdd(params) {
    return axios.post('/api/vue/sms/tpl-add', params)
  },
  SendLogs(params) {
    return axios.get('/api/vue/sms/send-logs', {
      params: params
    })
  },
  SmsSend(params) {
    return axios.post('/api/vue/sms/send', params)
  },
  ChangePassword(params) {
    return axios.post('/api/vue/user/change-password', params)
  },
  Upload(params) {
    let token = store.getters.token
    return config.api + '/api/vue/upload?token=' + token
  },
  CheckHandset(params) {
    return axios.get('/api/vue/upload/check-handset', {
      params: params
    })
  },
  UploadedFiles(params) {
    return axios.get('/api/vue/upload/uploaded-files', {
      params: params
    })
  },
  RemoveFile(params) {
    return axios.post('/api/vue/upload/remove-file', params)
  },
  Clear(params) {
    return axios.post('/api/vue/import/clear', params)
  },
  ImportConfirm(params) {
    return axios.post('/api/vue/import/confirm', params)
  },
  ImportCancel(params) {
    return axios.post('/api/vue/import/cancel', params)
  },
  ImportLog(params) {
    return axios.get('/api/vue/import/log', {
      params: params
    })
  }
}
