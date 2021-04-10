<template>
    <div class="Ad">
        <!-- 添加 -->
        <el-row :gutter="20" class="Ad-Info">
            <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="2" :offset="1">
                <el-button type="primary" class="Ad-Info-li" size="small" @click="AdShow = true">添加</el-button>
            </el-col>
        </el-row>
        <!-- 查询列表 -->
        <el-row class="Ad-list">
            <el-col :span="24">
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                    type="index"
                    label="序"
                    width="50">
                    </el-table-column>
                    <el-table-column
                    prop="date"
                    label="名称"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="图片"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="活动类型"
                    width="100">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="跳转类型"
                    width="100">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="外部链接"
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="内部链接"
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="上线"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="创建者"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="操作">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <!-- 添加或编辑关键词 -->
        <el-dialog title="添加广告图" :visible.sync="AdShow">
            <el-form :model="AdForm" :rules="AdRules" ref="AdForm">
                <el-form-item label="名称" :label-width="AdWidth" prop="name">
                    <el-input v-model="AdForm.name" autocomplete="off" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="图片" :label-width="AdWidth" prop="url">
                    <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
                <el-form-item label="活动图位置" :label-width="AdWidth" prop="activity">
                     <el-select v-model="AdForm.activity" placeholder="请选择跳转类型">
                        <el-option label="首页-固定" :value="0"></el-option>
                        <el-option label="首页-弹窗" :value="1"></el-option>
                        <el-option label="我的-轮播图" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="跳转类型" :label-width="AdWidth" prop="type">
                     <el-select v-model="AdForm.type" placeholder="请选择跳转类型">
                        <el-option label="外部连接" :value="0"></el-option>
                        <el-option label="内部连接" :value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="外部链接地址" :label-width="AdWidth" prop="linl">
                    <el-input v-model="AdForm.link" autocomplete="off" placeholder="请输入外部链接地址"></el-input>
                </el-form-item>
                <el-form-item label="内部链接地址" :label-width="AdWidth" prop="linl">
                    <el-input v-model="AdForm.router" autocomplete="off" placeholder="请输入内部链接地址"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="AdSubmit('AdForm')" type="primary">添 加</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        var validatelinl= (rule, value, callback) => {
            let linlRG = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/
                if (value === '') {
                    callback(new Error('请输入链接地址'));
                } else if (!linlRG.test(value)) {
                    callback(new Error('请输入正确的网址'));
                } else {
                    callback();
                }
            };
        return {
            tableData:[],
            // 上传
             dialogImageUrl: '',
            dialogVisible: false,
            // 弹出层
            AdShow: false,
            AdForm:{
                name: '',
                type: '',
                linl: '',
                url: ''
            },
            AdRules:{
                name:[
                    { required: true, message: '请输入轮播图名称', trigger: 'blur' },
                    { min: 1, max: 10, message: '长度为 1~10 个字符', trigger: 'blur' }
                ],
                type: [
                     { required: true, message: '请选择跳转类型', trigger: 'change' }
                ],
                activity: [
                     { required: true, message: '请选择活动类型', trigger: 'change' }
                ],
                url : [
                    { required: true, message: '请选择图片', trigger: 'change' }
                ],
                linl:[
                    { required: true, validator: validatelinl, trigger: 'blur' }
                ]
            },
            AdWidth: '120px'
        }
    },
    methods:{
        AdSubmit(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
    }
}
</script>

<style scoped>
.Ad{
    width: 100%;
    min-height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
.Ad-Info{
    width: 100%;
    margin-bottom: 15px;
}
.Ad-Info-li{
    width: 100%;
}
.Ad-list{
    width: 100%;
    margin-bottom: 20px;
}
.Ad-page-box{
    display: flex;
    justify-content: flex-end;
}
</style>