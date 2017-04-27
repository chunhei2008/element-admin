<template>
    <div>
        <el-tabs v-model="form.active" @tab-click="tabClick">
            <el-tab-pane label="职称导入" name="title">
                <el-form ref="form" :model="form" label-width="100px" class="form">
                    <el-form-item label="店长手机号">
                        <el-input v-model="form.handset" @blur="checkHandset"></el-input>
                    </el-form-item>
                    <el-form-item label="店铺名" v-show="isClerkHandset">
                        <el-tag type="success">{{salonName}}</el-tag>
                    </el-form-item>
                    <el-form-item label="文件上传">
                        <el-upload class="upload-demo" :action="uploadApi" name="upload_file" :data="form" :on-success="uploadSuccess" :before-upload="beforeUpload" :on-preview="fileSelect" :file-list="fileList" :on-remove="removeFile">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传CSV文件，且不超过2MB</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="导入文件" v-show="isSelectFile">
                        <el-tag type="primary">{{selectFileName}}</el-tag>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="importConfirm">确认导入</el-button>
                        <el-button type="danger" @click="clear">清空资料</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="员工资料导入" name="staff">
                <el-form ref="form" :model="form" label-width="100px" class="form">
                    <el-form-item label="店长手机号">
                        <el-input v-model="form.handset" @blur="checkHandset"></el-input>
                    </el-form-item>
                    <el-form-item label="店铺名" v-show="isClerkHandset">
                        <el-tag type="success">{{salonName}}</el-tag>
                    </el-form-item>
                    <el-form-item label="文件上传">
                        <el-upload class="upload-demo" :action="uploadApi" name="upload_file" :data="form" :on-success="uploadSuccess" :before-upload="beforeUpload" :on-preview="fileSelect" :file-list="fileList" :on-remove="removeFile">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传CSV文件，且不超过2MB</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="导入文件" v-show="isSelectFile">
                        <el-tag type="primary">{{selectFileName}}</el-tag>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="importConfirm">确认导入</el-button>
                        <el-button type="danger" @click="clear">清空资料</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="美发项目导入" name="hairdressing">
                <el-form ref="form" :model="form" label-width="100px" class="form">
                    <el-form-item label="店长手机号">
                        <el-input v-model="form.handset" @blur="checkHandset"></el-input>
                    </el-form-item>
                    <el-form-item label="店铺名" v-show="isClerkHandset">
                        <el-tag type="success">{{salonName}}</el-tag>
                    </el-form-item>
                    <el-form-item label="文件上传">
                        <el-upload class="upload-demo" :action="uploadApi" name="upload_file" :data="form" :on-success="uploadSuccess" :before-upload="beforeUpload" :on-preview="fileSelect" :file-list="fileList" :on-remove="removeFile">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传CSV文件，且不超过2MB</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="导入文件" v-show="isSelectFile">
                        <el-tag type="primary">{{selectFileName}}</el-tag>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="importConfirm">确认导入</el-button>
                        <el-button type="danger" @click="clear">清空资料</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="美容项目导入" name="beautify">
                <el-form ref="form" :model="form" label-width="100px" class="form">
                    <el-form-item label="店长手机号">
                        <el-input v-model="form.handset" @blur="checkHandset"></el-input>
                    </el-form-item>
                    <el-form-item label="店铺名" v-show="isClerkHandset">
                        <el-tag type="success">{{salonName}}</el-tag>
                    </el-form-item>
                    <el-form-item label="文件上传">
                        <el-upload class="upload-demo" :action="uploadApi" name="upload_file" :data="form" :on-success="uploadSuccess" :before-upload="beforeUpload" :on-preview="fileSelect" :file-list="fileList" :on-remove="removeFile">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传CSV文件，且不超过2MB</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="导入文件" v-show="isSelectFile">
                        <el-tag type="primary">{{selectFileName}}</el-tag>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="importConfirm">确认导入</el-button>
                        <el-button type="danger" @click="clear">清空资料</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="外卖商品导入" name="goods">
                <el-form ref="form" :model="form" label-width="100px" class="form">
                    <el-form-item label="店长手机号">
                        <el-input v-model="form.handset" @blur="checkHandset"></el-input>
                    </el-form-item>
                    <el-form-item label="店铺名" v-show="isClerkHandset">
                        <el-tag type="success">{{salonName}}</el-tag>
                    </el-form-item>
                    <el-form-item label="文件上传">
                        <el-upload class="upload-demo" :action="uploadApi" name="upload_file" :data="form" :on-success="uploadSuccess" :before-upload="beforeUpload" :on-preview="fileSelect" :file-list="fileList" :on-remove="removeFile">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传CSV文件，且不超过2MB</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="导入文件" v-show="isSelectFile">
                        <el-tag type="primary">{{selectFileName}}</el-tag>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="importConfirm">确认导入</el-button>
                        <el-button type="danger" @click="clear">清空资料</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="疗程卡导入" name="course">
                <el-form ref="form" :model="form" label-width="100px" class="form">
                    <el-form-item label="店长手机号">
                        <el-input v-model="form.handset" @blur="checkHandset"></el-input>
                    </el-form-item>
                    <el-form-item label="店铺名" v-show="isClerkHandset">
                        <el-tag type="success">{{salonName}}</el-tag>
                    </el-form-item>
                    <el-form-item label="文件上传">
                        <el-upload class="upload-demo" :action="uploadApi" name="upload_file" :data="form" :on-success="uploadSuccess" :before-upload="beforeUpload" :on-preview="fileSelect" :file-list="fileList" :on-remove="removeFile">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传CSV文件，且不超过2MB</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="导入文件" v-show="isSelectFile">
                        <el-tag type="primary">{{selectFileName}}</el-tag>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="importConfirm">确认导入</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="模板下载" name="template">
                <el-table :data="templates" border style="width: 100%">
                    <el-table-column label="模板类型" width="180">
                        <template scope="scope">
                     {{active[scope.row.active]}}
</template>
                    </el-table-column>
                    <el-table-column label="下载">
<template scope="scope">
    <el-button type="text" @click="download(scope.row.url)">
        下载</el-button>
</template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import util from '../../util'
    import api from '../../api'
    import {
        templates,
        active
    } from '../../config/base.js'
    import {
        Message,
        MessageBox
    } from "element-ui"
    
    export default {
        data() {
            return {
                salonName: '',
                form: {
                    handset: '',
                    active: 'title'
                },
                isClerkHandset: false,
                uploadApi: api.Upload(),
                fileList: [],
                isSelectFile: false,
                selectFileName: '',
                selectFile: null,
                templates,
                active
            }
        },
        methods: {
            tabClick() {
                this.isSelectFile = false
                this.selectFileName = ''
                this.fileList = []
                if (!this.isClerkHandset) {
                    return
                }
                let params = this.form
                api.UploadedFiles(params)
                    .then(res => {
                        this.fileList = res.response
                    })
                    .catch(error => {
                        Message.error(error)
                    })
            },
            fileSelect(file) {
                this.isSelectFile = true
                this.selectFileName = file.client_file_name
                this.selectFile = file
            },
            importConfirm() {
                if (!this.isClerkHandset) {
                    Message.error('请先确认商家手机号')
                    return;
                }
                if (!this.isSelectFile) {
                    Message.error('请选择导入的文件')
                    return;
                }
                MessageBox.confirm('将导入选择文件数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let params = this.form
                    params.id = this.selectFile.id
                    api.ImportConfirm(params)
                        .then(res => {
                            Message.success('导入任务已提交')
                            this.fileList = util.removeFile(this.selectFile, this.fileList)
                        })
                        .catch(error => {
                            Message.error(error)
                        })
                }).catch(() => {
                    Message.info('已取消')
                });
            },
            clear() {
                if (!this.isClerkHandset) {
                    Message.error('请先确认商家手机号')
                    return;
                }
                MessageBox.confirm('操作将清空资料, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let params = this.form
                    api.Clear(params)
                        .then(res => {
                            Message.success('资料清空成功')
                        })
                        .catch(error => {
                            Message.error(error)
                        })
                }).catch(() => {
                    Message.info('已取消')
                });
            },
            removeFile(file, fileList) {
                let params = this.form
                params.id = file.id
                api.RemoveFile(params)
                    .then(res => {
                        Message.success('文件删除成功')
                        this.fileList = util.removeFile(file, fileList)
                    })
                    .catch(error => {
                        Message.error(error)
                    })
            },
            uploadSuccess(response, file, fileList) {
                switch (response.code) {
                    case -1:
                        Message.error(response.message)
                        break;
                    case 0:
                        Message.success('文件上传成功')
                        this.fileList.push(response.response)
                        break;
                }
            },
            beforeUpload(file) {
                if (!this.isClerkHandset) {
                    Message.error('请先确认商家手机号')
                }
    
                const isCSV = file.type === 'text/csv' || file.type === 'application/vnd.ms-excel' || file.type === 'application/csv';
                const isFileLimit = file.size / 1024 / 1024 < 2;
    
                if (!isCSV) {
                    Message.error('上传文件只能是 CSV 格式!');
                }
                if (!isFileLimit) {
                    Message.error('上传头像文件大小不能超过 2MB!');
                }
    
                return this.ClerkHandset && isCSV && isFileLimit;
            },
            checkHandset() {
                let handset = this.form.handset
                if (handset.length < 6) {
                    return;
                }
                this.isClerkHandset = false
                this.salonName = ''
                let params = {
                    handset: handset
                }
                api.CheckHandset(params)
                    .then(res => {
                        this.salonName = res.response.salon_name
                        this.isClerkHandset = true
                        this.tabClick()
                    })
                    .catch(error => {
                        Message.error(error)
                        this.isClerkHandset = false
                    })
            },
            download(url) {
                window.open(url)
            }
        }
    }
</script>