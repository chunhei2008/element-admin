import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import * as types from '../store/mutation-types'

Vue.use(Router)

// component
import Dash from '../components/Dash.vue'
// common
import Login from '../pages/common/Login.vue'
import ForgotPassword from '../pages/common/ForgotPassword.vue'
import ResetPassword from '../pages/common/ResetPassword.vue'
// user
import ChangePassword from '../pages/user/ChangePassword.vue'
// member
import Export from '../pages/member/Export.vue'
// sms
import TplAdd from '../pages/sms/TplAdd.vue'
import TplList from '../pages/sms/TplList.vue'
import SendLogs from '../pages/sms/SendLogs.vue'
// import
import SalonImport from '../pages/import/SalonImport.vue'
import SalonImportLog from '../pages/import/SalonImportLog.vue'

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Dash,
      children: [
        {
          path: 'user/change-password',
          component: ChangePassword
        },
        {
          path: 'member/export',
          component: Export
        },
        {
          path: 'sms/tpl-add',
          component: TplAdd
        },
        {
          path: 'sms/tpl-list',
          component: TplList
        },
        {
          path: 'sms/send-logs',
          component: SendLogs
        },
        {
          path: 'import',
          component: SalonImport
        },
        {
          path: 'import/log',
          component: SalonImportLog
        }
      ],
      beforeEnter: (to, from, next) => {
        if (store.getters.token === '' || store.getters.user === null) {
          next({
            path: '/login'
          })
        }else {
          next()
        }
      }
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        let token = sessionStorage.getItem('token')
        let user = sessionStorage.getItem('user')
        if (token && user) {
          user = JSON.parse(user)
          store.commit(types.COMMON_SET_TOKEN, token)
          store.commit(types.COMMON_SET_USER, user)
          next({
            path: '/'
          })
        }else {
          next()
        }
      }
    },
    {
      path: '/forgot-password',
      component: ForgotPassword
    },
    {
      path: '/reset-password/:token',
      component: ResetPassword
    }
  ]
})
