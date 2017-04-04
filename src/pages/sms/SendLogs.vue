<template>
    <div>
        <h2>发送记录</h2>
        <el-table :data="tplList" height="600" border style="width: 100%" v-loading.body="loading">
            <el-table-column type="expand">
                <template scope="props">
                                    <el-form label-position="left" inline class="demo-table-expand">
                                      <el-form-item label="发送手机列表">
                                        <span style="word-break: break-all">{{ props.row.mobiles }}</span>
                                      </el-form-item>
                                      <el-form-item label="发送结果">
                                        <span style="word-break: break-all">{{ props.row.result }}</span>
                                      </el-form-item>
                                    </el-form>
</template>
            </el-table-column>
      <el-table-column prop="id" label="#">
      </el-table-column>
      <el-table-column prop="handset" label="商家手机号">
      </el-table-column>
      <el-table-column prop="content" label="短信内容">
      </el-table-column>
      <el-table-column prop="created_at" label="发送时间">
      </el-table-column>
      </el-table-column>
    </el-table>
    <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="total" class="pagination">
    </el-pagination>
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
                currentPage: 1,
                pageSize: 10,
                total: 0,
                tplList: [],
                loading: false
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
                api.SendLogs(params)
                    .then(res => {
                        this.setData(res.response.list)
                        this.loading = false
                    })
                    .catch(error => {
                        Message.error(error)
                        this.loading = false
                    })
            }
        }
    }
</script>