<template>
    <div class="app-wrapper">
        <el-container class="app-box">
            <el-aside width="220px" class="main-aside">
                    <sidebar class="sidebar-container"></sidebar>
            </el-aside>
            <el-container class="main">
                <el-header class="heads" height='50px'>
                    <Headers></Headers>
                </el-header>
                <el-main class="main-container">
                    <TagsViews />
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar/index.vue'
import Headers from '../components/Headers/Headers.vue'
import TagsViews from '../components/TageView/TagsView.vue'
export default {
    components: {
        Sidebar,
        Headers,
        TagsViews
    }
}
</script>

<style>
.app-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.app-box{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.heads{
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #dcdfe6;
}
.main{
    width: 100%;
    height: 100%;
}
.main-aside{
    height: 100%;
    background: #001529;
}
.main-container{
    width: 100%;
    height: 100%;
    padding: 0 !important;
}
.el-menu{
    border: none !important;
}
</style>