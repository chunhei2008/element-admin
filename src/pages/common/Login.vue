<template>
  <div class="login">
    <el-form ref="form" :model="form">
      <el-form-item>
        <h1>美美发工具</h1>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.email" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" type="password" placeholder="Password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" style="width:100%">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import api from "../../api"
  import * as types from "../../store/mutation-types"
  import {
    Message
  } from "element-ui"
  
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        let form = this.form
        if (!form.email || !form.password) {
          Message.error('请输入账号密码！')
          return
        }
        api.Login(form)
          .then(res => {
            Message.success('登录成功');
            this.$store.commit(types.COMMON_LOGIN_STORAGE, res.response)
            this.$router.replace('/')
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>

<style>
  .login {
    width: 400px;
    margin: auto;
  }
  
  .login h1 {
    text-align: center;
    color: #324057;
  }
</style>