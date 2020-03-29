<template>
    <div class="headers">
        <div class="headers-left">
            <div class="el-icon-s-fold"></div>
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
    components:{
        Breadcrumb
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
.el-icon-s-fold{
    width: 20px;
    height: 100%;
    line-height: 50px;
    font-size: 20px;
    cursor: pointer;
    margin-right: 15px;
}
.el-breadcrumb{
    line-height: 50px;
}
</style>