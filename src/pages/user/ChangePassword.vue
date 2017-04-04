<template>
    <div>
        <h2>修改密码</h2>
        <el-form ref="form" class="form">
            <el-form-item>
                <el-input type="password" placeholder="请输入旧密码" v-model="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" placeholder="请输入新密码" v-model="newPassword"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" placeholder="请输入重复新密码" v-model="newPasswordConfirmation"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="changePassword" :disabled="disabled">确认</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import api from "../../api"
    import {
        Message
    } from "element-ui"
    
    export default {
        data() {
            return {
                password: '',
                newPassword: '',
                newPasswordConfirmation: '',
                disabled: false
            }
        },
        methods: {
            changePassword() {
                let password = this.password;
                let newPassword = this.newPassword;
                let newPasswordConfirmation = this.newPasswordConfirmation;
                if (!password) {
                    Message.error('请输入旧密码')
                    return
                }
    
                if (!newPassword) {
                    Message.error('请输入新密码')
                    return
                }
    
                if (password === newPassword) {
                    Message.error('新旧密码一致')
                    return
                }
    
                if (newPassword !== newPasswordConfirmation) {
                    Message.error('两次输入的密码不一致')
                    return
                }
                this.disabled = true
                let params = {
                    password: password,
                    new_password: newPassword,
                    new_password_confirmation: newPasswordConfirmation
                }
                api.ChangePassword(params)
                    .then(res => {
                        Message.success('密码修改成功')
                        this.disabled = flase
                    })
                    .catch(error => {
                        this.disabled = false
                    })
            }
        }
    }
</script>