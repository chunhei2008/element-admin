import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Dash from "../components/Dash.vue"
import Layout from "../pages/Layout.vue"
import Demo from "../pages/Demo.vue"
//common
import Login from "../pages/common/Login.vue"
import Logout from "../pages/common/Logout.vue"
import ForgotPassword from "../pages/common/ForgotPassword.vue"
import ResetPassword from "../pages/common/ResetPassword.vue"
//user
import ChangePassword from "../pages/user/ChangePassword.vue"

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/', 
      component: Dash,
      children: [
        { 
          path: 'component/layout', 
          component: Layout 
        },
        { 
          path: 'component/demo', 
          component: Demo 
        },
        {
          path: "user/change-password",
          component: ChangePassword
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/logout',
      component: Logout
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
