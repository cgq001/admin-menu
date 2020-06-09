<template>
    <div class="Choice">
        <!-- 添加 -->
        <el-row :gutter="20" class="Choice-Info">
            <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="2" :offset="1">
                <el-button type="primary" class="Choice-Info-li" size="small" @click="ChoiceShow = true">添加</el-button>
            </el-col>
        </el-row>
        <!-- 查询列表 -->
        <el-row class="Choice-list">
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
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="副标题"
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="操作">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <!-- 添加或编辑关键词 -->
        <el-dialog title="添加关键词" :visible.sync="ChoiceShow">
            <el-form :model="ChoiceForm" :rules="ChoiceRules" ref="ChoiceForm">
                <el-form-item label="名称" :label-width="ChoiceWidth" prop="name">
                    <el-input v-model="ChoiceForm.name" autocomplete="off" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="副标题" :label-width="ChoiceWidth" prop="title">
                    <el-input v-model="ChoiceForm.title" autocomplete="off" placeholder="请输入副标题"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="ChoiceSubmit('ChoiceForm')" type="primary">添 加</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tableData:[],
            // 弹出层
            ChoiceShow: false,
            ChoiceForm:{
                name: '',
                title: ''
            },
            ChoiceRules:{
                name:[
                    { required: true, message: '请输入关键词', trigger: 'blur' },
                    { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
                ],
                title: [
                    { required: true, message: '请输入关键词', trigger: 'blur' },
                    { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                ]
            },
            ChoiceWidth: '120px'
        }
    },
    methods:{
        ChoiceSubmit(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style scoped>
.Choice{
    width: 100%;
    min-height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
.Choice-Info{
    width: 100%;
    margin-bottom: 15px;
}
.Choice-Info-li{
    width: 100%;
}
.Choice-list{
    width: 100%;
    margin-bottom: 20px;
}
.Choice-page-box{
    display: flex;
    justify-content: flex-end;
}
</style>