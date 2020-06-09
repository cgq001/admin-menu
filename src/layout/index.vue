<template>
    <div class="app-wrapper">
        <el-container class="app-box">
            <el-aside :width="asideShow ? '200px' : '0px'" class="main-aside" :style="themeColor[themeIndex].aside">
                    <sidebar class="sidebar-container"></sidebar>
            </el-aside>
            <el-container class="main">
                <el-header class="heads" height='50px' :style="themeColor[themeIndex].header">
                    <Headers :asideShow.sync="asideShow" @targetIcon='targetIcon' :themeColor='themeColor' :themeIndex='themeIndex' @targetThemeIndex='targetThemeIndex'></Headers>
                </el-header>
                <el-main class="main-container">
                    <TagsViews />
                    <div class="main-container-views" :style="themeColor[themeIndex].container">
                        <transition name="nodebook" mode="out-in">
                            <router-view />
                        </transition>
                        
                    </div>
                </el-main>
            </el-container>
        </el-container>
        <el-backtop target=".main-container-views" :bottom="100">
            <div class="scrollTop" >
            <i class="el-icon-upload2" ></i>
            </div>
        </el-backtop>
        
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar/index.vue'
import Headers from '../components/Headers/Headers.vue'
import TagsViews from '../components/TageView/TagsView.vue'

// 获取本地存储的主题
import { getTheme, setTheme } from '@/utils/theme'
let Theme = parseInt(getTheme()) || 0

let themeColor =[
    {
        aside: 'background-image: linear-gradient(#001529, #001529);',
        header: 'background-image: linear-gradient(to right,#ffffff, #ffffff);',
        container: 'background-image: linear-gradient(to bottom right,#ffffff,#ffffff);'
    },
    {
        aside: 'background-image: linear-gradient(#00BCFF, #00BCFF);',
        header: 'background-image: linear-gradient(to right,#D2F2F1, #D2F2F1);',
        container: 'background-image: linear-gradient(to bottom right,#D2F2F1,#D2F2F1);'
    },
    {
        aside: 'background-image: linear-gradient(#9E25B0, #9E25B0);',
        header: 'background-image: linear-gradient(to right,#EBD4F1, #EBD4F1);',
        container: 'background-image: linear-gradient(to bottom right,#EBD4F1,#EBD4F1);'
    },
    {
        aside: 'background-image: linear-gradient(#E13998, #E13998);',
        header: 'background-image: linear-gradient(to right,#F9D6E9, #F9D6E9);',
        container: 'background-image: linear-gradient(to bottom right,#F9D6E9,#F9D6E9);'
    },
    {
        aside: 'background-image: linear-gradient(#E54E43, #E54E43);',
        header: 'background-image: linear-gradient(to right,#FBD3D0, #FBD3D0);',
        container: 'background-image: linear-gradient(to bottom right,#FBD3D0,#FBD3D0);'
    },
    {
        aside: 'background-image: linear-gradient(#E13998, #F0F0F0);',
        header: 'background-image: linear-gradient(to right,#EDC6DC, #ffffff);',
        container: 'background-image: linear-gradient(to bottom right,#E13998,#F0F0F0);'
    },
    {
        aside: 'background-image: linear-gradient(#F2791C, #F0F0F0);',
        header: 'background-image: linear-gradient(to right,#F0D9C8, #ffffff);',
        container: 'background-image: linear-gradient(to bottom right,#F2791C,#F0F0F0);'
    },
    
    {
        aside: 'background-image: linear-gradient(#FABC07, #F0F0F0);',
        header: 'background-image: linear-gradient(to right,#F2E8CA, #ffffff);',
        container: 'background-image: linear-gradient(to bottom right,#FABC07,#F0F0F0);'
    },
    
    {
        aside: 'background-image: linear-gradient(#9F23B2, #F0F0F0);',
        header: 'background-image: linear-gradient(to right,#E1C9E4, #ffffff);',
        container: 'background-image: linear-gradient(to bottom right,#9F23B2,#F0F0F0);'
    },
    {
        aside: 'background-image: linear-gradient(#1BBCB4, #8CC63E);',
        header: 'background-image: linear-gradient(to right,#ffffff,#1BBCB4, #ffffff);',
        container: 'background-image: linear-gradient(to bottom right,#1BBCB4,#8CC63E);'
    },
    {
        aside: 'background-image: linear-gradient(#E44D42, #FBBD08);',
        header: 'background-image: linear-gradient(to right,#ffffff,#F37A1D, #ffffff);',
        container: 'background-image: linear-gradient(to bottom right,#F37A1D, #FBBD08);'
    },
    {
        aside: 'background-image: linear-gradient(#1AB8B8, #6F36B4);',
        header: 'background-image: linear-gradient(to right,#ffffff,#1AB8B8, #ffffff);',
        container: 'background-image: linear-gradient(to bottom right,#1AB8B8, #6F36B4);'
    },
    {
        aside: 'background-image: linear-gradient(#EE2521, #FC8B02);',
        header: 'background-image: linear-gradient(to right,#ffffff,#EE2521, #ffffff);',
        container: 'background-image: linear-gradient(to bottom right,#EE2521, #FC8B02);'
    },
    {
        aside: 'background-image: linear-gradient(#6D35B3, #E6058F);',
        header: 'background-image: linear-gradient(to right,#ffffff,#6D35B3, #ffffff);',
        container: 'background-image: linear-gradient(to bottom right,#6D35B3, #E6058F);'
    },
    {
        aside: 'background-image: linear-gradient(#F83FBD, #CE1DFC);',
        header: 'background-image: linear-gradient(to right,#ffffff,#F83FBE, #ffffff);',
        container: 'background-image: linear-gradient(to bottom right,#F83FBD, #CE1DFC);'
    }
]
export default {
    data(){
        return {
            asideShow: true,
            themeIndex: Theme,   //当前配色方案
            themeColor:themeColor  //配色方案
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
        },
        // 配色方案 子元素自定义事件
        targetThemeIndex(index){
            this.themeIndex = index
            setTheme(index)
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
    /* background-image: linear-gradient(#1AB8B8, #f7f7f7); */
}
.main{
    width: 100%;
    height: 100%;
    overflow: hidden!important;
}
.main-aside{
    height: 100%;
    /* background: #001529; */
    /* background-image: linear-gradient(#3DBCFD, #97DBFE,#30D791); */
    background-image: linear-gradient(#1AB8B8, #6F36B4);
     /* background-image: linear-gradient(#1AB8B8,#FF9500,#E5038F, #7234B2, #ED1E23); */
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
    background: #F5F7F9;
    background-image: linear-gradient(#1AB8B8, #3BB54A);
}
.main-container-views::-webkit-scrollbar {
    display: none;  /*  Chrome  */
    width: 0 !important ; /*  Chrome  */
  }

.scrollTop{
    height: 100%;
    width: 100%;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0,0,0, .5);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
    font-size: 30px;
    font-weight: bolder;
}

.nodebook-enter, .nodebook-leave-to{
    transform: scale(0.9);
    opacity: 0;
}

.nodebook-enter-to, .nodebook-leave{
    transform: scale(1);
    opacity: 1;
}
.nodebook-enter-active, .nodebook-leave-active {
    transition: all 0.3s;
}
</style>