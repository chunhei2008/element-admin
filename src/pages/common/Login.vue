<template>
    <div class="login">
    <el-form ref="form" :model="form">
  <el-form-item>
    <el-input v-model="form.email" placeholder="Email"></el-input>
  </el-form-item>
  <el-form-item>
      <el-input v-model="form.password" type="password" placeholder="Password"></el-input>
  </el-form-item>
  <el-form-item>
      <el-button type="primary" @click="onSubmit" style="width:100%">登录</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
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
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>
    .login{
        width: 400px;
        height: 152px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -200px;
        margin-top: -76px;
    }
</style>