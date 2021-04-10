<template>
    <div class="Spike">
        <!-- 添加 -->
        <el-row :gutter="20" class="Spike-Info">
            <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="2" :offset="1">
                <el-button type="primary" class="Spike-Info-li" size="small" @click="SpikeShow = true">添加</el-button>
            </el-col>
        </el-row>
        <!-- 查询列表 -->
        <el-row class="Spike-list">
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
                    label="开始时间"
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="date"
                    label="结束时间"
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="备注"
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
        <el-dialog title="添加关键词" :visible.sync="SpikeShow">
            <el-form :model="SpikeForm" :rules="SpikeRules" ref="SpikeForm">
                <el-form-item label="关键词" :label-width="SpikeWidth" prop="name">
                    <el-input v-model="SpikeForm.name" autocomplete="off" placeholder="请输入备注"></el-input>
                </el-form-item>
                <el-form-item label="开始时间" :label-width="SpikeWidth" prop="start">
                    <el-time-select
                        v-model="SpikeForm.start"
                        :picker-options="{
                            start: '00:00',
                            step: '00:30',
                            end: '24:00'
                        }"
                        placeholder="选择开始时间">
                    </el-time-select>
                </el-form-item>
                <el-form-item label="结束时间" :label-width="SpikeWidth" prop="end">
                    <el-time-select
                        v-model="SpikeForm.end"
                        :picker-options="{
                            start: '00:00',
                            step: '00:30',
                            end: '24:00'
                        }"
                        placeholder="选择结束时间">
                    </el-time-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="SpikeSubmit('SpikeForm')" type="primary">添 加</el-button>
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
            SpikeShow: false,
            SpikeForm:{
                name: '',
                start: '',
                end: ''
            },
            SpikeRules:{
                name:[
                    { required: true, message: '请输入关键词', trigger: 'blur' },
                    { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
                ],
                start: [
                    { required: true, message: '请选择开始时间', trigger: 'blur' },
                ],
                end: [
                    { required: true, message: '请输入结束时间', trigger: 'blur' },
                ]
            },
            SpikeWidth: '120px'
        }
    },
    methods:{
        SpikeSubmit(formName){
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
.Spike{
    width: 100%;
    min-height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
.Spike-Info{
    width: 100%;
    margin-bottom: 15px;
}
.Spike-Info-li{
    width: 100%;
}
.Spike-list{
    width: 100%;
    margin-bottom: 20px;
}
.Spike-page-box{
    display: flex;
    justify-content: flex-end;
}
</style>