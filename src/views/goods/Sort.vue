<template>
    <div class="sort">
    <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
            <!-- 一级分类 -->
            <div class="sort-one">
                <!-- 添加按钮 -->
                <el-row class="sort-one-head">
                    <el-col :span="6">
                        <div class="sort-one-name">一级分类</div>
                    </el-col>
                    <el-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4"  class="sort-one-add">
                        <el-button type="primary" class="sort-one-add-submit" size="small" @click="addOneSort"> 添加</el-button>
                    </el-col>
                </el-row>
                <!-- 一级分类列表 -->
                <el-row class="sort-one-list">
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
                            label="一级分类名称">
                            </el-table-column>
                            <el-table-column
                            prop="address"
                            label="操作">
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
                <!-- 分页 -->
                <el-row class="sort-one-page">
                    <el-col :span="24" class="sort-one-page-line">
                        <el-pagination
                            :hide-on-single-page="true"
                            background
                            layout="prev, pager, next"
                            :total="1000">
                        </el-pagination>
                    </el-col>
                </el-row>
            </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
            <!-- 二级分类 -->
            <div class="sort-one">
                <!-- 添加按钮 -->
                <el-row class="sort-one-head">
                    <el-col :span="6">
                        <div class="sort-one-name">二级分类</div>
                    </el-col>
                    <el-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4"  class="sort-one-add">
                        <el-button type="primary" class="sort-one-add-submit" size="small" @click="addTwoSort"> 添加</el-button>
                    </el-col>
                </el-row>
                <!-- 二级分类列表 -->
                <el-row class="sort-one-list">
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
                            label="所属一级分类">
                            </el-table-column>
                            <el-table-column
                            prop="date"
                            label="二级分类名称">
                            </el-table-column>
                            <el-table-column
                            prop="address"
                            label="操作">
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
                <!-- 分页 -->
                <el-row class="sort-one-page">
                    <el-col :span="24" class="sort-one-page-line">
                        <el-pagination
                            :hide-on-single-page="true"
                            background
                            layout="prev, pager, next"
                            :total="1000">
                        </el-pagination>
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </el-row>
    <!-- 一级分类弹出层 -->
    <el-dialog title="添加一级分类" :visible.sync="oneSortShwo">
        <el-form :model="oneSortForm" :rules="oneSortRules" ref="oneSortForm" >
            <el-form-item label="一级分类名称" :label-width="formLabelWidth" prop="name">
                <el-input v-model="oneSortForm.name" autocomplete="off" placeholder="请输入2~4个字符"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="oneSortSUbmit('oneSortForm')">确 定</el-button>
        </div>
    </el-dialog>
    <!-- 二级分类弹出层 -->
    <el-dialog title="添加二级分类" :visible.sync="twoSortShwo">
        <el-form :model="twoSortForm" :rules="twoSortRules" ref="twoSortForm">
            <el-form-item label="二级分类名称" :label-width="formLabelWidth" prop="name">
                <el-input v-model="twoSortForm.name" autocomplete="off" placeholder="请输入2~4个字符"></el-input>
            </el-form-item>
            <el-form-item label="所属一级分类" :label-width="formLabelWidth" prop="sortone">
                <el-select v-model="twoSortForm.sortone" placeholder="请选择所属一级分类">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="twoSortSUbmit('twoSortForm')">确 定</el-button>
        </div>
    </el-dialog>
    </div>
</template>

<script>
export default {
    data(){　
        return {
            tableData:[],
            // 一级分类
            oneSortShwo: false,
            oneSortForm: {
                name: ''
            },
            oneSortRules:{
                name: [
                    { required: true, message: '请输入一级分类名称', trigger: 'blur' },
                    { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
                ]
            },
            formLabelWidth: '120px',
            // 二级分类
            twoSortShwo: false,
            twoSortForm: {
                name: '',
                sortone: null
            },
            twoSortRules: {
                name: [
                    { required: true, message: '请输入二级分类名称', trigger: 'blur' },
                    { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
                ],
                sortone: [
                    { required: true, message: '请选择一级分类名称', trigger: 'change' }
                ]
            }
        }
    },
    methods:{
        addOneSort(){
            this.oneSortShwo = true
        },
        addTwoSort(){
            this.twoSortShwo = true
        },
        oneSortSUbmit(formName){
             this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        twoSortSUbmit(formName){
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
.sort{
    width: 100%;
    min-height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
/* 一级分类 */
.sort-one{
    width: 100%;
    height: auto;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #eeeeee;
}
.sort-one-name{
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing:2px
}
.sort-one-add{
    display: flex;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.sort-one-add-submit{
    width: 100%;
}
.sort-one-head{
    width: 100%;
    margin-bottom: 15px;
}
.sort-one-list{
    width: 100%;
    margin-bottom: 20px;
}
.sort-one-page-line{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
</style>