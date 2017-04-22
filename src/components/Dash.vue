<template>
  <div>
    <div class="header fixed-top">
      <el-dropdown class="profile float-right" @command="dropdownMenuCommand">
        <span class="el-dropdown-link">
                                {{user.name}}<i class="el-icon-caret-bottom el-icon--right"></i>
                              </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="change-password">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-row class="container">
      <el-col :span="4" class="side-bar">
        <el-menu mode="vertical" class="el-menu-vertical-demo" :router="router">
          <el-menu-item index="/sms/tpl-add"><i class="el-icon-message"></i>模板添加</el-menu-item>
          <el-menu-item index="/sms/tpl-list"><i class="el-icon-message"></i>模板列表</el-menu-item>
          <el-menu-item index="/sms/send-logs"><i class="el-icon-message"></i>发送记录</el-menu-item>
          <el-menu-item index="/member/export"><i class="el-icon-message"></i>会员导出</el-menu-item>
          <el-menu-item index="/import"><i class="el-icon-message"></i>资料导入</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" class="main">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import api from "../api"
  import * as types from "../store/mutation-types"
  
  export default {
    data() {
      return {
        router: true,
      }
    },
    methods: {
      dropdownMenuCommand(command) {
        switch (command) {
          case 'logout':
            api.Logout({})
              .then(res => {
                this.$store.commit(types.COMMON_LOGOUT)
                this.$router.replace({
                  path: '/login'
                })
              })
              .catch(error => {
                console.log(error)
              })
            break;
          case 'change-password':
            this.$router.push({
              path: '/user/change-password'
            })
            break;
        }
      }
    },
    computed: {
      user() {
        return this.$store.getters.user
      }
    }
  }
</script>

<style>
  h2 {
    border-bottom: 1px solid #E5E9F2;
    color: #324057;
  }
  
  .header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #1F2D3D;
    overflow: hidden;
    z-index: 1;
  }
  
  .float-right {
    float: right;
  }
  
  .fixed-top {
    position: fixed;
    top: 0;
  }
  
  .profile {
    margin-right: 30px;
    color: #F9FAFC;
  }
  
  .container {
    margin-top: 60px;
    display: flex;
    min-width: 100vw;
  }
  
  .side-bar,
  .main {
    height: calc(100vh - 60px);
    overflow: auto;
  }
  
  .side-bar {
    background: #EFF2F7;
  }
  
  .main {
    padding: 20px;
  }
  
  .pagination {
    margin-top: 20px;
    text-align: center;
  }
</style>