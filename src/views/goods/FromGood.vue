<template>
    <div class="FromGood">
        <el-form :model="goodFrom" :rules="ruleGood" ref="goodFrom" label-width="120px" class="demo-ruleForm">
            <el-form-item label="产品名称" prop="name">
                <el-input v-model="goodFrom.name" placeholder="请输入产品名称"></el-input>
            </el-form-item>
            <el-form-item label="产品描述" prop="name">
                <el-input v-model="goodFrom.name" placeholder="请输入产品描述"></el-input>
            </el-form-item>
            <el-form-item label="产品原件" prop="name">
                <el-input-number v-model="goodFrom.pick" :precision="2" :step="0.1" :max="10000" :min="0.1"></el-input-number>
            </el-form-item>
            <el-form-item label="产品现价" prop="name">
                <el-input-number v-model="goodFrom.pick" :precision="2" :step="0.1" :max="10000" :min="0.1"></el-input-number>
            </el-form-item>
            <el-form-item label="总量" prop="name">
                <el-input-number v-model="goodFrom.pick" :step="1" :precision='0' :max="10000" :min="0"></el-input-number>
            </el-form-item>
            <el-form-item label="产地" prop="name">
                <el-input v-model="goodFrom.name" placeholder="请输入产品产地"></el-input>
            </el-form-item>
            <el-form-item label="规格" prop="name">
                <el-input v-model="goodFrom.name" placeholder="请输入产品规格"></el-input>
            </el-form-item>
            <el-form-item label="重量" prop="name">
                <el-input v-model="goodFrom.name"  placeholder="请输入产品重量"></el-input>
            </el-form-item>
            <el-form-item label="包装" prop="name">
                <el-input v-model="goodFrom.name" placeholder="请输入产品包装规格"></el-input>
            </el-form-item>
            <el-form-item label="保质期" prop="name">
                <el-input v-model="goodFrom.name" placeholder="请输入产品保质期时长"></el-input>
            </el-form-item>
            <el-form-item label="产品分类" prop="region">
                <el-select v-model="goodFrom.region" placeholder="请选择产品分类">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="轮播图" prop="region">
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
            <el-form-item label="宣传图" prop="region">
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
            <el-form-item>
                <el-button type="primary" @click="submitForm('goodFrom')">立即添加</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            goodFrom:{
                pick: 8
            },
            ruleGood:{

            },
            dialogImageUrl: '',
            dialogVisible: false

        }
    },
    methods: {
        submitForm(){

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
.FromGood{
    width: 100%;
    min-height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
</style>