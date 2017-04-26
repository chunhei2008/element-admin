<template>
    <div>
        <h2>导入日志</h2>
        <el-table :data="tplList" height="600" border style="width: 100%" v-loading.body="loading">
            <el-table-column prop="id" label="ID">
            </el-table-column>
            <el-table-column prop="handset" label="商家手机号">
            </el-table-column>
            <el-table-column label="导入类型">
                <template scope="scope">
                        {{active[scope.row.active]}}
</template>
            </el-table-column>
            <el-table-column prop="client_file_name" label="文件名">
            </el-table-column>
            <el-table-column prop="created_at" label="上传时间">
            </el-table-column>
            <el-table-column prop="imported_at" label="导入时间">
            </el-table-column>
            <el-table-column prop="reason" label="原因">
            </el-table-column>
            <el-table-column label="状态">
<template scope="scope">
     {{status[scope.row.status]}}
</template>
            </el-table-column>
            <el-table-column label="操作">
<template scope="scope">
    <el-button v-if="scope.row.status == 1" type="danger" size="small" @click="cancel(scope.row)">
        取消</el-button>
</template>
            </el-table-column>
            <el-table-column label="日志文件">
<template scope="scope">
    <el-button v-if="scope.row.log_file_name" type="text" @click="download(scope.row.id)">
        下载</el-button>
</template>
            </el-table-column>
        </el-table>
        <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="total" class="pagination">
        </el-pagination>
    </div>
</template>

<script>
    import {
        active,
        status
    } from '../../config/base.js'
    import api from "../../api"
    import config from "config"
    import {
        Message,
        MessageBox
    } from "element-ui"
    
    export default {
        data() {
            return {
                currentPage: 1,
                pageSize: 10,
                total: 0,
                tplList: [],
                loading: false,
                active,
                status
            }
        },
        created: function() {
            this.handleCurrentChange(1)
        },
        methods: {
            setData(data) {
                this.pageSize = data.per_page
                this.total = data.total
                this.tplList = data.data
            },
            handleCurrentChange(currentPage) {
                this.loading = true
                let params = {
                    page: currentPage
                }
                api.ImportLog(params)
                    .then(res => {
                        this.setData(res.response.list)
                        this.loading = false
                    })
                    .catch(error => {
                        Message.error(error)
                        this.loading = false
                    })
            },
            download(id) {
                let token = this.$store.getters.token;
                let url = config.api + '/api/vue/import/download?token=' + token + '&id=' + id
                console.log(url)
                window.open(url)
            },
            cancel(row) {
                MessageBox.confirm('将取消导入任务, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let params = {
                        id: row.id
                    }
                    api.ImportCancel(params)
                        .then(res => {
                            row.status = 0
                            Message.success('导入任务已取消')
                        })
                        .catch(error => {
                            Message.error(error)
                        })
                }).catch(() => {
                    Message.info('已取消操作')
                });
            }
        }
    }
</script>