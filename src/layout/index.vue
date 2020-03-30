<template>
    <div class="app-wrapper">
        <el-container class="app-box">
            <el-aside :width="asideShow ? '200px' : '0px'" class="main-aside">
                    <sidebar class="sidebar-container"></sidebar>
            </el-aside>
            <el-container class="main">
                <el-header class="heads" height='50px'>
                    <Headers :asideShow.sync="asideShow" @targetIcon='targetIcon'></Headers>
                </el-header>
                <el-main class="main-container">
                    <TagsViews />
                    <div class="main-container-views">
                        <router-view />
                    </div>
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
    data(){
        return {
            asideShow: true
        }
    },
    components: {
        Sidebar,
        Headers,
        TagsViews
    },
    methods:{
        targetIcon(boole){
            this.asideShow = boole
        }
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
    transition: all 2s;
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
    transition:  all 0.5s;
}
.main-container{
    width: 100%;
    height: 100%;
    padding: 0 !important;
}
.el-menu{
    border: none !important;
}
.main-container-views{
    width: 100%;
    height: calc(100% - 35px);
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none; 
    overflow: '-moz-scrollbars-none';
    scrollbar-width: none;  /*  火狐   */
}
.main-container-views::-webkit-scrollbar {
    display: none;  /*  Chrome  */
    width: 0 !important ; /*  Chrome  */
  }
</style>