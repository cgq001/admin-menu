<template>
<!-- 面包屑 -->
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
                <span
                    v-if="item.redirect === 'noRedirect' || index === levelList.length-1"
                    class="no-redirect"
                    >
                    {{item.meta.title}}
                </span>
                <a v-else @click.prevent="handleLink(item)">{{item.meta.title}}</a>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'
export default {
    data(){
        return {
            levelList:null
        }
    },
    watch:{
        $route: {
            handler(route){
                this.getBreadcrumb()
            },
            immediate: true
        }
    },
    methods:{
        getBreadcrumb(){
             
            // 面包屑仅显示包含meta.title 且 item.meta.breadcrumb不为falsed 的路由
            let metched = this.$route.matched.filter(
                item => item.meta && item.meta.title && item.meta.breadcrumb !== false
            )

            // 跟路由
            const first = metched[0];
            

            // 根匹配只要不是home,就作为home下一级
            if(!this.isHome(first)){
                metched = [{ refirect: '/index', meta: { title: '首页' }}].concat(metched)
            }
             
            // 处理完指定到levelList
            this.levelList = metched
        },
        isHome(route){
            const name = route && route.name;
            if(!name){
                return false
            }
            return name.trim().toLocaleLowerCase() === "Home".toLocaleLowerCase()
        },
        pathCompile(path){
            const { params } = this.$route;
            var toPath = pathToRegexp.compile(path);
            return thPath(params);
        },
        handleLink(iten){
            const { redirect, path } = item;
            // 若存在重定向 按重定向走
            if(redirect){
                this.$router.push(redirect)
                return;
            }
            // 编译path, 避免存在路径参数
            this.$router.push(this.pathCompile(path))
        }
    }
}
</script>

<style scoped>
.breadcrumb-enter-active,
.breadcrumb-leave-active{
    transform: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active{
    opacity: 0;
    transform: translateX(20px);
}
.breadcrumb-move{
    transition: all 0.5s;
}
/* .breadcrumb-leave-active{
    position: absolute;;
} */
</style>