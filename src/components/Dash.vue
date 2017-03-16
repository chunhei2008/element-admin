<template>
  <div id="app">
    <div class="header fixed-top">
  <el-dropdown class="profile float-right" @command="dropdownMenuCommand">
  <span class="el-dropdown-link">
    {{profile.name}}<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="change-password">修改密码</el-dropdown-item>
    <el-dropdown-item command="logout">退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</div>
<el-row class="container">
<el-col :span="4" class="side-bar">
    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" :router="router">
        <el-menu-item index="/component/layout"><i class="el-icon-message"></i>Layout</el-menu-item>
        <el-menu-item index="/component/demo"><i class="el-icon-message"></i>Demo</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>
        <el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="20" :offset="4" class="main">
     <router-view></router-view>
  </el-col>
</el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      router:true,
      profile:{
          name:'王毅'
      }
    }
  },
  methods: {
     dropdownMenuCommand(command){
       switch(command){
         case 'logout':
           this.$router.push({ path: '/logout' })
         break;
         case 'change-password':
           this.$router.push({ path: '/user/change-password' })
         break;
       }
     }
  }
}
</script>

<style>
.header{
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

.fixed-top{
  position:fixed;
  top:0;
}

.profile{
  margin-right: 30px;
  color: #F9FAFC;
}

.container{
  margin-top: 60px;
}

.side-bar{
  position: fixed;
  top: 60px;
  left: 0;
  margin-bottom: -1000px;
  padding-bottom: 1000px;
  background: #EFF2F7;
}

.main {
  padding: 10px;
}

</style>