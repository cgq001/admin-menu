import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入进度条样式
import 'nprogress/nprogress.css'

//引入自定义滚动条
import HappyScroll from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'

//自动滚动插件
import scroll from 'vue-seamless-scroll'

// 炫酷的粒子动效
import  VueParticles  from   'vue-particles'

Vue.config.productionTip = false

Vue.use(HappyScroll)

Vue.use(scroll)

Vue.use(VueParticles)

Vue.use(ElementUI);

// 全局路由守卫
import './router/permission'

// 全局注册指令
import vPermission from './directive/permission'
Vue.directive('permission',vPermission)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
