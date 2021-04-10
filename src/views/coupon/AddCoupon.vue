<template>
    <div class="AddCoupon">
        <!-- 添加 -->
        <el-row :gutter="20" class="AddCoupon-Info">
            <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="2" :offset="1">
                <el-button type="primary" class="AddCoupon-Info-li" size="small" @click="AddCouponShow = true">添加优惠券类型</el-button>
            </el-col>
        </el-row>
        <!-- 查询列表 -->
        <el-row class="AddCoupon-list">
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
                    label="优惠券类型"
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="date"
                    label="使用描述"
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="详细信息"
                    width="220">
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
        <el-dialog title="添加类型" :visible.sync="AddCouponShow">
            <el-form :model="AddCouponForm" :rules="AddCouponRules" ref="AddCouponForm">
                <el-form-item label="类型" :label-width="AddCouponWidth" prop="name">
                    <el-input v-model="AddCouponForm.name" autocomplete="off" placeholder="请输入优惠券类型"></el-input>
                </el-form-item>
                <el-form-item label="使用描述" :label-width="AddCouponWidth" prop="condition">
                    <el-input v-model="AddCouponForm.condition" autocomplete="off" placeholder="请输入使用须知"></el-input>
                </el-form-item>
                <el-form-item label="详细信息" :label-width="AddCouponWidth" prop="notice">
                    <el-input v-model="AddCouponForm.notice" autocomplete="off" placeholder="请输入使用范围"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="AddCouponSubmit('AddCouponForm')" type="primary">添 加</el-button>
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
            AddCouponShow: false,
            AddCouponForm:{
                name: '',
                start: '',
                end: ''
            },
            AddCouponRules:{
                name:[
                    { required: true, message: '请输入优惠券类型', trigger: 'blur' },
                    { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                ],
                condition: [
                    { required: true, message: '请输入使用描述', trigger: 'blur' },
                    { min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur' }
                ],
                notice: [
                    { required: true, message: '请输入详细信息', trigger: 'blur' },
                    { min: 5, max: 25, message: '长度在 5 到 25 个字符', trigger: 'blur' }
                ]
            },
            AddCouponWidth: '120px'
        }
    },
    methods:{
        AddCouponSubmit(formName){
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
.AddCoupon{
    width: 100%;
    min-height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
.AddCoupon-Info{
    width: 100%;
    margin-bottom: 15px;
}
.AddCoupon-Info-li{
    width: 100%;
}
.AddCoupon-list{
    width: 100%;
    margin-bottom: 20px;
}
.AddCoupon-page-box{
    display: flex;
    justify-content: flex-end;
}
</style>