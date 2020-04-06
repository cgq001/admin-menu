<template>
    <div class="index">
        <div class="index-foot">
            wangEditor: 基于javascript和css开发的 Web富文本编辑器， 轻量、简洁、易用、开源免费,具体富文本详细配置请参见: <a href="https://www.kancloud.cn/wangfupeng/wangeditor3/332599">wangEditor</a>
        </div> 
        <div class="index-box">
            <el-form :model="emailFrom" :rules="emailRules" ref="emailFrom" label-width="100px" class="index-emailFrom">
                <el-form-item label="收件人" prop="address">
                    <el-input v-model="emailFrom.address" size="small"></el-input>
                </el-form-item>
                <el-form-item label="主题" prop="theme">
                    <el-input v-model="emailFrom.theme" size="small"></el-input>
                </el-form-item>
                <el-form-item label="正文" prop="text">
                   <div id="editorTitle" class="toolbar"></div>
                    <div style="padding: 2px 0; color: #ccc; font-size: 12px;">本邮件发送需要配置邮箱的IMAP/SMTP服务</div>
                    <div id="editorText" class="text"> <!--可使用 min-height 实现编辑区域自动增加高度-->
                        <p>请输入邮件内容</p>
                    </div>
                </el-form-item>
                <el-form-item class="index-emailFrom-can">
                    <el-button type="info" @click="saveEmail('ruleForm')" size="small">保存草稿</el-button>
                    <el-button type="primary" @click="submitEmail('ruleForm')" size="small">立即发送</el-button>
                </el-form-item>
            </el-form>
        </div>
               
    </div>
</template>

<script>
import wangEditor from 'wangeditor'
export default {
    data(){
        return {
            emailFrom:{
                address: '',
                theme: ''
            },
            emailRules:{
                address:[
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ],
                theme: [
                    { required: true, message: '请输入邮件主题', trigger: 'blur' },
                    { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
                ],
                text: [
                    { required: true, message: '请输入邮件正文', trigger: 'blur' }
                ]
            }
        }
    },
    created(){
       
       
    },
    mounted(){
        this.$nextTick(()=>{
             // 初始化编辑器
            this.editorInfo()
        })
    },
    methods:{
        // 初始化 编辑器
        editorInfo(){
            var E = wangEditor
            var editor = new wangEditor('#editorTitle','#editorText')
                editor.customConfig.zIndex = 1
                editor.customConfig.fontNames = [
                                    '宋体',
                                    '楷体',
                                    'Arial',
                                    'Tahoma',
                                    'Verdana'
                                ]
                editor.create()
        },
        // 发送邮件
        submitEmail(){

        },
        // 保存草稿
        saveEmail(){

        }
    }
}
</script>

<style scoped>
.index{
    width: 100%;
    min-height: 100%;
    padding: 25px;
    box-sizing: border-box;
}
.index-box{
    width: 100%;
    min-height: 100%;
    background: #ffffff;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 5px;
}
 .toolbar{
    /* border: 1px solid #ccc; */
   
}
.text {
    border: 1px solid #ccc;
    height: 400px;
    z-index: 1 !important;
}
.index-emailFrom-can{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
/* 说明文档 */
.index-foot{
    width: 100%;
    height: 70px;
    background: #EEF1F6;
    margin-bottom: 15px;
    border-radius: 5px;
    font-size: 16px;
    color: #666666;
    line-height: 70px;
    padding: 0 15px;
}
</style>