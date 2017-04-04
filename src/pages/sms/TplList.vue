<template>
  <div>
    <h2>模板列表</h2>
    <el-table :data="tplList" height="600" border style="width: 100%" v-loading.body="loading">
      <el-table-column label="#">
        <template scope="scope">
                              <el-radio class="radio"
                                        v-model="form.id"
                                        :label="scope.row.id">{{scope.row.id}}</el-radio>
</template>
      </el-table-column>
      <el-table-column prop="tpl_id"
                       label="模板ID">
      </el-table-column>
      <el-table-column prop="tpl_content"
                       label="模板内容">
      </el-table-column>
      <el-table-column prop="check_status"
                       label="审核状态">
      </el-table-column>
      <el-table-column prop="reason"
                       label="拒绝原因">
      </el-table-column>
      <el-table-column prop="created_at"
                       label="创建时间">
      </el-table-column>
    </el-table>
    <el-pagination @current-change="handleCurrentChange"
                   :current-page="currentPage"
                   :page-size="pageSize"
                   layout="total, prev, pager, next"
                   :total="total"
                   class="pagination">
    </el-pagination>
    <el-form ref="form"
             :model="form"
             label-width="100px"
             class="form">
      <el-form-item label="店长手机号">
        <el-input v-model="form.handset"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="send" :disabled="disabled">短信发送</el-button>
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
        currentPage: 1,
        pageSize: 10,
        total: 0,
        tplList: [],
        loading: false,
        form: {
          handset: '',
          id: null
        },
        disabled: false
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
        api.TplList(params)
          .then(res => {
            this.setData(res.response.list)
            this.loading = false
          })
          .catch(error => {
            console.log(error)
            this.loading = false
          })
      },
      send() {
        let params = this.form
        if (!params.id) {
          Message.error('请选择模板')
          return
        }
  
        if (!params.handset) {
          Message.error('请输入商家手机号码')
          return
        }
        this.disabled = true
        api.SmsSend(params)
          .then(res => {
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