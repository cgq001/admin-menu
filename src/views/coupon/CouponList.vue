<template>
    <div class="CouponList">
        <!-- 添加 -->
        <el-row :gutter="20" class="CouponList-Info">
            <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="2" :offset="1">
                <el-button type="primary" class="CouponList-Info-li" size="small" @click="CouponListShow = true">添加优惠券</el-button>
            </el-col>
        </el-row>
        <!-- 查询列表 -->
        <el-row class="CouponList-list">
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
                    label="优惠券名称"
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="date"
                    label="优惠金额"
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="最低满减条件"
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="开始时间"
                    width="220">
                    </el-table-column>
                     <el-table-column
                    prop="name"
                    label="结束时间"
                    width="220">
                    </el-table-column>
                     <el-table-column
                    prop="coupontype"
                    label="有效期描述"
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
        <el-dialog title="添加优惠券" :visible.sync="CouponListShow">
            <el-form :model="CouponListForm" :rules="CouponListRules" ref="CouponListForm">
                <el-form-item label="优惠券名称" :label-width="CouponListWidth" prop="name">
                    <el-input v-model="CouponListForm.name" autocomplete="off" placeholder="请输入优惠券名称"></el-input>
                </el-form-item>
                
                <el-form-item label="优惠券金额" :label-width="CouponListWidth" prop="amount">
                    <el-input-number v-model="CouponListForm.amount" :precision="2" :step="0.1" :min="0.10" :max="1000"></el-input-number>
                </el-form-item>
                <el-form-item label="最低满减金额" :label-width="CouponListWidth" prop="sum">
                    <el-input-number v-model="CouponListForm.sum" :precision="2" :step="0.1" :min="0.00" :max="1000"></el-input-number>
                </el-form-item>
                <el-form-item label="开始时间" :label-width="CouponListWidth" prop="start">
                    <el-date-picker v-model="CouponListForm.start" type="date"  placeholder="选择开始时间"></el-date-picker>
                </el-form-item>
                <el-form-item label="结束时间" :label-width="CouponListWidth" prop="end">
                    <el-date-picker v-model="CouponListForm.end" type="date"  placeholder="选择结束时间"></el-date-picker>
                </el-form-item>
                <el-form-item label="有效期描述" :label-width="CouponListWidth" prop="message">
                    <el-input v-model="CouponListForm.message" autocomplete="off" placeholder="请输入使用须知"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="CouponListSubmit('CouponListForm')" type="primary">添 加</el-button>
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
            CouponListShow: false,
            CouponListForm:{
                name: '',
                start: '',
                end: '',
                amount: 0.10,
                sum: 0.00,
                message: ''
            },
            CouponListRules:{
                name:[
                    { required: true, message: '请输入优惠券类型', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                message: [
                    { required: true, message: '请输入使用有限期描述', trigger: 'blur' },
                    { min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur' }
                ],
                amount: [
                    { required: true, message: '请输入优惠券金额', trigger: 'blur' },
                ],
                sum: [
                    { required: true, message: '请输入优惠券最低满减金额', trigger: 'blur' },
                ],
                start: [
                    { required: true, message: '请选择开始时间', trigger: 'blur' },
                ],
                end: [
                    { required: true, message: '请选择结束时间', trigger: 'blur' },
                ]
            },
            CouponListWidth: '120px'
        }
    },
    methods:{
        CouponListSubmit(formName){
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
.CouponList{
    width: 100%;
    min-height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
.CouponList-Info{
    width: 100%;
    margin-bottom: 15px;
}
.CouponList-Info-li{
    width: 100%;
}
.CouponList-list{
    width: 100%;
    margin-bottom: 20px;
}
.CouponList-page-box{
    display: flex;
    justify-content: flex-end;
}
</style>