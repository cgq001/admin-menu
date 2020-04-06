import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout' //布局页



Vue.use(VueRouter)

// 通用页面, 这里的配置不需要权限
export const constRouter = [
  {
      path: '/login',
      component: () => import('@/views/login/Login'),
      hidden: true //导航菜单忽略选项
  },
  {
      path: '',
      component: Layout, //应用布局页
      redirect: '/index',
      hidden: true,
  },
  {
      path: '/index',
      component: Layout, //应用布局页
      name: 'index',
      meta:{
          title: "首页", //导航菜单项标题
          icon: 'el-icon-s-home' //导航菜单图标
      },
      children: [
        {
          path: '',
          component: () => import('@/views/index/index.vue'),
          name: 'indexs',
          meta: {
            title: "工作台",
            icon: 'el-icon-s-home',
            roles: ['admin','jerry']
          }
        }
      ]
  }
]

// 动态路由 communication
export const asyncRoutes = [
  {
    path: '/communication',
    component: Layout,
    redirect: '/communication/index',
    meta:{
      title: "通讯",
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/communication/Index.vue'),
        name: 'communicationindex',
        meta: {
          title: "邮件",
          icon: 'el-icon-message',
          roles: ['admin','jerry']
        }
      },
      {
        path: 'wechat',
        component: () => import('@/views/communication/WeChat.vue'),
        name: 'communicationwechat',
        meta: {
          title: "客服",
          icon: 'el-icon-service',
          roles: ['admin','jerry']
        }
      },
    ]
  },
  {
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    meta:{
      title: "个人中心",
      icon: 'el-icon-user-solid'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/home/Index.vue'),
        name: 'homeindex',
        meta: {
          title: "个人设置",
          icon: 'el-icon-user-solid',
          roles: ['admin','jerry']
        }
      },
      {
        path: 'Informationall',
        component: () => import('@/views/home/Informationall.vue'),
        name: 'homeinformationall',
        meta: {
          title: "个人消息",
          icon: 'el-icon-message-solid',
          roles: ['admin','jerry']
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRouter
})

export default router

