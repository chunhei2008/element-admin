<template>
  <div>
    <h2>会员导出</h2>
    <el-form ref="form" :model="form" label-width="100px" class="form">
      <el-form-item label="店长手机号">
        <el-input v-model="form.handset"></el-input>
      </el-form-item>
      <el-form-item label="导出类型">
        <el-radio-group v-model="form.type">
          <el-radio :label="1">基础</el-radio>
          <el-radio :label="2">普通卡</el-radio>
          <el-radio :label="3">疗程卡</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="download">会员导出</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import config from "../../config"
  
  export default {
    data() {
      return {
        form: {
          handset: '',
          type: 1
        }
      }
    },
    methods: {
      download() {
        let form = this.form;
        let token = this.$store.getters.token;
        let url = config.api + '/api/vue/member/export?token=' + token + '&handset=' + form.handset + '&type=' + form.type
        console.log(url)
        window.open(url)
      }
    }
  }
</script>

<style>
  .form {
    width: 400px;
  }
</style>