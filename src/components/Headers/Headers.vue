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
                <el-tooltip class="item" effect="dark" content="有5条未读消息" placement="bottom">
                    <el-badge is-dot class="item">
                        <i class="el-icon-bell head-news-icon"></i>
                    </el-badge>
                </el-tooltip>
            </div>
            <div class="headers-right-right">
                <div class="block"><el-avatar shape="square" size="large" :src="squareUrl"></el-avatar></div>
                <el-dropdown size="medium" @command="handleCommand">
                    <span class="el-dropdown-link">
                        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="github">项目仓库</el-dropdown-item>
                        <el-dropdown-item divided command="quit">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            
        </div>
    </div>
</template>

<script>
// 全屏组件
import screenfull from 'screenfull'

// 面包屑
import Breadcrumb from '../Breadcrumb/Breadcrumb2'

export default {
    props:{
        asideShow: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            isFullscreen: false
        }
    },
    components:{
        Breadcrumb
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
        handleCommand(command){
          
            switch(command){
                case 'github':
                    console.log('前往github')
                break;
                case 'quit':
                    let src = this.$store.dispatch('user/resetToken')
                    this.$router.replace('/login')
                break;

            }
        },
        // 退出登陆
        quits(){
            console.log('123')
            this.$store.dispatch('user/resetToken')
        }
    },
    mounted() {
        // 浏览器窗口改变事件
    //   window.onresize = () => {
    //         // 全屏下监控是否按键了ESC
    //         if (!this.checkFull()) {
    //           // 全屏下按键esc后要执行的动作
    //         //   this.isFullscreen = false;
    //         }
    //     }
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
}
.head-news-icon{
    
}
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
</style>