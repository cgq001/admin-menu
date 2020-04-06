<template>
    <div class="headers">
        <div class="headers-left">
            <div class="headers-left-box" :class="asideShow === false ? 'headers-left-active' : ''" @click="targetIcon">
                <i class="el-icon-s-fold "></i>
            </div>
            <Breadcrumb />
        </div>
        <div class="headers-right">
            <div class="headers-right-left">
                 
                <el-tooltip class="item" effect="dark" :content="isFullscreen ? '取消全屏' : '全屏'" placement="bottom">
                    <i :class="isFullscreen ? 'el-icon-full-screen head-screen-news' : 'el-icon-rank head-screen'" @click="buttoncli"></i>
                </el-tooltip>
                <el-tooltip class="item" style="margin: 0 20px 0 10px; color: #171700" effect="dark" content="主题" placement="bottom">
                    <i class="el-icon-picture-outline-round" @click="theme = true"></i>
                </el-tooltip>
                <!-- <el-tooltip class="item" effect="dark" :disabled='dropShow' content="有5条未读消息" placement="bottom" @mouseover="dropShow = !dropShow"> -->
                    <el-badge is-dot class="item">
                        <i class="el-icon-bell head-news-icon" @mouseover.self="dropShowBtn" @mouseout.self="dropHideBtn"></i>
                    </el-badge>
                <!-- </el-tooltip> -->
                <!-- 通知栏 -->
                <div class="header-right-dropdown" @mouseover="dropdownBtn" @mouseout="dropShow = false">
                    <el-collapse-transition>
                        <Dropdowns v-show="dropShow" />
                    </el-collapse-transition>
                </div>
            </div>
            <div class="headers-right-right">
                <div class="block"><el-avatar shape="square" size="large" :src="squareUrl"></el-avatar></div>
                <el-dropdown size="medium" @command="handleCommand">
                    <span class="el-dropdown-link">
                        admin<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="github">项目仓库</el-dropdown-item>
                        <el-dropdown-item divided command="quit">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <el-drawer
            :with-header="false"
            :visible.sync="theme"
            direction="rtl"
            size='400px'
            class="theme"
            >
            <div class="theme-title">配色方案</div>
            <div class="theme-title-box">
                <div class="theme-title-box-list" v-for="(item,index) in themeColor" :key="index" @click="targetThemeIndex(index)" :class="themeIndex === index ? 'theme-active' : ''">
                    <div class="theme-title-box-list-left" :style="item.aside"></div>
                    <div class="theme-title-box-list-right">
                        <div class="theme-title-box-list-right-top" :style="item.header"></div>
                        <div class="theme-title-box-list-right-bottom" :style="item.container"></div>
                    </div>
                </div>
            </div>
        </el-drawer>
    </div>
</template>


<script>
// 全屏组件
import screenfull from 'screenfull'

// 面包屑
import Breadcrumb from '../Breadcrumb/Breadcrumb2'

// 通知栏组件
import Dropdowns from '../Dropdown/index'
export default {
    props:{
        asideShow: {
            type: Boolean,
            default: true
        },
        themeColor: {
            type: Array,
            default: true
        },
        themeIndex: {
            type: Number,
            default: true
        }
    },
    data(){
        return {
            squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            isFullscreen: false,
            dropShow: false , // 是否现实通知栏
            setTime: null , //定时器
            theme: false // 主题 开关
        }
    },
    components:{
        Breadcrumb,
        Dropdowns
    },
    methods:{
        // 自定义 切换 侧边栏 事件
        targetIcon(){
            this.$emit('targetIcon',!this.asideShow)
        },
        // 全屏
        buttoncli(){
				// if (!screenfull.enabled) { // 如果不允许进入全屏，发出不允许提示
                //     this.$message({
                //         message: '不支持全屏',
                //         type: 'warning'
                //     })
                //     return false
                // }
                screenfull.toggle()
                this.checkFull()
        },
        // 监控屏幕变化
        checkFull() {
            var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
            // to fix : false || undefined == undefined
            // 是否全屏判断
            this.isFullscreen = !this.isFullscreen;
            if(this.isFullscreen){
                this.$message({
                    message: '全屏啦',
                    type: 'success'
                })
            }else{
                this.$message({
                        message: '取消全屏',
                        type: 'warning'
                    })
            }
           
            if (isFull === undefined) {
                isFull = false;
            }
            return isFull;
        },
        // 用户名 下拉菜单
        handleCommand(command){
          
            switch(command){
                case 'github':
                   
                    window.open('https://github.com/cgq001/admin-menu')
                break;
                case 'quit':
                    let src = this.$store.dispatch('user/resetToken')
                    this.$router.replace('/login')
                break;

            }
        },
        // 退出登陆
        quits(){
          
            this.$store.dispatch('user/resetToken')
        },
        // 展开通知
        dropShowBtn(){
            clearTimeout(this.setTime)
            this.dropShow = true
        },
        // 收起通知
        dropHideBtn(){
            let This = this
            
            this.setTime = setTimeout(function(){
                This.dropShow = false;
            },1000)
        },
        // 鼠标移入 通知栏
        dropdownBtn(){
            clearTimeout(this.setTime)
            this.dropShow = true
        },
        // 选取配色方案
        targetThemeIndex(index){
            this.$emit('targetThemeIndex',index)
        }
    },
    mounted() {
        // 浏览器窗口改变事件
        this.isFullscreen = document.body.scrollHeight === window.screen.height
    }
}
</script>

<style scoped>
.headers{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
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
.headers-right{
    /* width: 200px; */
    height: 100%;
    /* background: orchid; */
    display: flex;
    justify-content: space-around;
}
.headers-right-left{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 30px;
    font-size: 22px;
    cursor: pointer;
    position: relative;
}
.header-right-dropdown{
    width: 300px;
    height: auto;
    position: absolute;
    right: 0;
    top: 60px;
    z-index: 2;
    background: #ffffff;
    /* padding: 5px 0; */
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    overflow: hidden;
}
/* .head-news-icon{
    
} */
.head-screen{
    margin-right: 15px;
    transform: rotate(45deg);
}
.head-screen-news{
    margin-right: 15px;
}
.headers-right-right{
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #666666;
}
.block{
    margin-right: 15px;
}
.el-dropdown-link{
    cursor: pointer;
}
.focusing{
    border: none !important;
}
/* 主题 */
.theme{
    height: 100vh;
    overflow: hidden;
}
.el-drawer__body{
    height: 100vh !important;
    overflow: hidden;
}
.theme-title{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
    padding: 0 15px;
    border-bottom: 1px solid #dcdfe6;
}
.theme-title-box{
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: calc(100vh - 51px);
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none; 
    overflow: '-moz-scrollbars-none';
    scrollbar-width: none;  /*  火狐   */
    background: #F5F7F9;
}
.theme-title-box::-webkit-scrollbar {
    display: none;  /*  Chrome  */
    width: 0 !important ; /*  Chrome  */
}
.theme-title-box-list{
    width: 180px;
    height: 150px;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    background: #999999;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
    border: 5px solid transparent;
}
.theme-title-box-list-left{
    width: 30px;
    height: 120px;
}
.theme-title-box-list-right{
    flex: 1;
    height: 160px;
}
.theme-title-box-list-right-top{
    width: 100%;
    height: 20px;
    background: #ffffff;
}
.theme-title-box-list-right-bottom{
    width: 100%;
    height: 100px;
}
.theme-active{
    border: 5px solid #05DA89;
}
</style>