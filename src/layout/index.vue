<template>
    <div class="app-wrapper">
        <sidebar class="sidebar-container">
       
        </sidebar>
        <!-- 内容区域 -->
        <div class="main-container">
            <router-view />
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar/index.vue'
export default {
    components: {
        Sidebar
    }
}
</script>