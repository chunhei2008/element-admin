<template>
    <div>
        <h2>模板添加</h2>
        <el-form ref="form" class="form">
            <el-form-item>
                <el-input type="textarea" :rows="10" placeholder="请输入短信模板内容" v-model="template">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="add" :disabled="disabled">添加模板</el-button>
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
                template: "",
                disabled: false
            }
        },
        methods: {
            add() {
                let template = this.template;
                if (!template) {
                    Message.error('请输入模板内容')
                }
                this.disabled = true
                let params = {
                    content: template
                }
                api.TplAdd(params).then(res => {
                        Message.success('添加模板成功')
                        this.disabled = false
                    })
                    .catch(error => {
                        console.log(error)
                        this.disabled = false
                    })
            }
        }
    }
</script>