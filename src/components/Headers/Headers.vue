<template>
    <div class="headers">
        <div class="headers-left">
            <div class="headers-left-box" :class="asideShow === false ? 'headers-left-active' : ''" @click="targetIcon">
                <i class="el-icon-s-fold "></i>
            </div>
            <!-- <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb> -->
            <Breadcrumb />
        </div>
    </div>
</template>

<script>
import Breadcrumb from '../Breadcrumb/Breadcrumb2'
export default {
    props:{
        asideShow: {
            type: Boolean,
            default: true
        }
    },
    components:{
        Breadcrumb
    },
    methods:{
        targetIcon(){
            this.$emit('targetIcon',!this.asideShow)
        }
    }
}
</script>

<style scoped>
.headers{
    width: 100%;
    height: 100%;
}
.headers-left{
    display: flex;
    justify-content: flex-start;
}
.headers-left-box{
    transition: all 0.5s;
    transform-origin: center center;
    width: 20px;
    height: 100%;
    margin-right: 15px;
}
.headers-left-active{
    transform: rotate(180deg);
}
.el-icon-s-fold{
    width: 20px;
    height: 100%;
    line-height: 50px;
    font-size: 20px;
    cursor: pointer;
    
}
.el-breadcrumb{
    line-height: 50px;
}
</style>