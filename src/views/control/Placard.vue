<template>
    <div class="Placard">
        <!-- 添加 -->
        <el-row :gutter="20" class="Placard-Info">
            <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="2" :offset="1">
                <el-button type="primary" class="Placard-Info-li" size="small" @click="PlacardShow = true">添加</el-button>
            </el-col>
        </el-row>
        <!-- 查询列表 -->
        <el-row class="Placard-list">
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
                    label="公告内容"
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="链接地址"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="操作者"
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
        <el-dialog title="添加公告" :visible.sync="PlacardShow">
            <el-form :model="PlacardForm" :rules="PlacardRules" ref="PlacardForm">
                <el-form-item label="关键词" :label-width="PlacardWidth" prop="name">
                    <el-input v-model="PlacardForm.name" autocomplete="off" placeholder="请输入关键词"></el-input>
                </el-form-item>
                <el-form-item label="公告内容" :label-width="PlacardWidth" prop="remarks">
                    <el-input v-model="PlacardForm.remarks" autocomplete="off" placeholder="请输入备注"></el-input>
                </el-form-item>
                <el-form-item label="链接地址" :label-width="PlacardWidth" prop="linl">
                    <el-input v-model="PlacardForm.linl" autocomplete="off" placeholder="请输入备注"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="PlacardSubmit('PlacardForm')" type="primary">添 加</el-button>
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
            // 弹出层
            PlacardShow: false,
            PlacardForm:{
                name: '',
                remarks: '',
                linl: ''
            },
            PlacardRules:{
                name:[
                    { required: true, message: '请输入关键词', trigger: 'blur' },
                    { min: 2, max: 2, message: '长度为 2 个字符', trigger: 'blur' }
                ],
                remarks:[
                    { required: true, message: '请输入关键词', trigger: 'blur' },
                    { min: 2, max: 20, message: '长度为 2~20 个字符', trigger: 'blur' }
                ],
                linl:[
                    { required: true, validator: validatelinl, trigger: 'blur' }
                ]
            },
            PlacardWidth: '120px'
        }
    },
    methods:{
        PlacardSubmit(formName){
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
.Placard{
    width: 100%;
    min-height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
.Placard-Info{
    width: 100%;
    margin-bottom: 15px;
}
.Placard-Info-li{
    width: 100%;
}
.Placard-list{
    width: 100%;
    margin-bottom: 20px;
}
.Placard-page-box{
    display: flex;
    justify-content: flex-end;
}
</style>