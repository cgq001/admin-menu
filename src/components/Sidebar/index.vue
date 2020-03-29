<template>
    <div>
            <el-menu
                :default-active="activeMenu"
                :background-color="variables.menuBg"
                :text-color="variables.menuText"
                :unique-opened="false"
                :active-text-color="variables.menuActiveText"
                :collapse-transition="false"
                mode="vertical"
                >
                    <SidebarItem
                        v-for="route in permission_routes"
                        :key="route.path"
                        :item='route'
                        :base-path='route.path'
                        >
                    
                    </SidebarItem>
            </el-menu>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem'

export default {

    components:{ SidebarItem },
    computed:{
        ...mapGetters(['permission_routes']),
        activeMenu(){
            const route = this.$route;
            const { meta, path } = route
            // 默认激活项
            if(meta.activeMenu){
                return meta.activeMenu
            }
            return path;
        },
        variables(){
            return {
                menuText: "#bfcbd9",
                menuActiveText: "#ffffff",
                menuBg: "#001529"
            }
        }
    },
    mounted(){
 
        // console.log(this.permission_routes,12)
    }
}
</script>