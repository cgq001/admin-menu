<template>
    <div v-if="!item.hidden" class="menu-wrapper">
        <!-- 仅有一个可显示的子路由,并且没有孙子路由 && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && item.alwaysShow-->
        <template v-if="hasOneShowingChild(item.children,item)">
            <router-link v-if="onlyOneChild.meta && !onlyOneChild.meta.hidden" :to="resolvePath(onlyOneChild.path)">
                <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown' : isNest }">
                    <item :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)" :title="onlyOneChild.meta.title" />
                </el-menu-item>
            </router-link>
        </template>
        <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
            <template v-slot:title>
                <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
            </template>
            <sidebar-item
                v-for="child in item.children"
                :key="child.path"
                :is-nest='true'
                :item='child'
                :base-path="resolvePath(child.path)"
                class="nest-menu"
                />
        </el-submenu>
    </div>
</template>

<script>
import path from 'path'
import Item from './Item'

export default {
    name: "SidebarItem",
    components: { Item },
    props: {
        item: {
            type: Object,
            required: true
        },
        isNest: {
            type: Boolean,
            required: false
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    data(){
        this.onlyOneChild = null
        return {
            
        }
    },
    mounted(){
        // console.log(this.item)
    },
    methods:{
        hasOneShowingChild(children = [],parent){
           
            const showingChildren = children.filter(item =>{
                if(item.hidden){
                    return false
                } else {
                    // 如果只有一个子菜单时设置
                    this.onlyOneChild = item
                    return true
                }
            })
           
            // 当只有一个子路由,子路由默认展示
            if(showingChildren.length === 1){
                return true
            }
            // 没有子路由则显示父路由
            if(showingChildren.length === 0){
                this.onlyOneChild = {...parent, path: '', noShowingChildren: true }
                return true
            }
            //  console.log(this.onlyOneChild)
            return false
        },
        resolvePath(routePath){
            return path.resolve(this.basePath, routePath)
        }
    }    
}
</script>

<style>
.el-menu-item.is-active {
    background: #1A86EE !important;
}
/* .el-submenu .el-menu-item{
    height: 40px !important;
    line-height: 40px !important;
    margin: 2px 0 3px !important;
}
.el-menu-item{
    height: 40px !important;
    line-height: 40px !important;
    margin: 2px 0 3px !important;
}
.el-submenu{
    height: 40px !important;
    line-height: 40px !important;
    margin: 2px 0 3px !important;
}
.el-submenu__title{
    height: 40px !important;
    line-height: 40px !important;
    margin: 2px 0 3px !important;
} */
</style>