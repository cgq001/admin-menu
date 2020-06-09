<template>
    <div class="keycode">
        <!-- 添加 -->
        <el-row :gutter="20" class="keycode-Info">
            <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="2" :offset="1">
                <el-button type="primary" class="keycode-Info-li" size="small" @click="keyCodeShow = true">添加</el-button>
            </el-col>
        </el-row>
        <!-- 查询列表 -->
        <el-row class="keycode-list">
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
                    label="关键词"
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="备注"
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="创建者"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="创建时间"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="修改时间"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="上线"
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
        <el-dialog title="添加关键词" :visible.sync="keyCodeShow">
            <el-form :model="keyCodeForm" :rules="keyCodeRules" ref="keyCodeForm">
                <el-form-item label="关键词" :label-width="keyCodeWidth" prop="name">
                    <el-input v-model="keyCodeForm.name" autocomplete="off" placeholder="请输入关键词"></el-input>
                </el-form-item>
                <el-form-item label="备注" :label-width="keyCodeWidth">
                    <el-input v-model="keyCodeForm.remarks" autocomplete="off" placeholder="请输入备注"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="keyCodeSubmit('keyCodeForm')" type="primary">添 加</el-button>
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
            keyCodeShow: false,
            keyCodeForm:{
                name: '',
                remarks: ''
            },
            keyCodeRules:{
                name:[
                    { required: true, message: '请输入关键词', trigger: 'blur' },
                    { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
                ]
            },
            keyCodeWidth: '120px'
        }
    },
    methods:{
        keyCodeSubmit(formName){
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
.keycode{
    width: 100%;
    min-height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
.keycode-Info{
    width: 100%;
    margin-bottom: 15px;
}
.keycode-Info-li{
    width: 100%;
}
.keycode-list{
    width: 100%;
    margin-bottom: 20px;
}
.keycode-page-box{
    display: flex;
    justify-content: flex-end;
}
</style>