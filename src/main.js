import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

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
