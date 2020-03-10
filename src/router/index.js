import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout' //布局页

import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 通用页面, 这里的配置不需要权限
export const constRouter = [
  {
      path: '/login',
      component: () => import('@/views/login/Login'),
      hidden: true //导航菜单忽略选项
  },
  {
      path: '/',
      component: Layout, //应用布局页
      redirect: '/home',
      meta:{
        title: '布局',
        icon: 'el-icon-share'
      },
      children: [
          {
              path: 'home',
              component: () => {
                  import('@/views/Home.vue')
              },
              name: "Home",
              meta:{
                  title: "Home", //导航菜单项标题
                  icon: 'el-icon-edit' //导航菜单图标
              }
          }
      ]
  }
]

// 动态路由
export const asyncRoutes = [
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    meta:{
      title: "关于",
      icon: 'el-icon-edit'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/about/About.vue'),
        name: 'about',
        meta: {
          title: "About",
          icon: 'el-icon-edit',
          roles: ['admin','editor']
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRouter
})

export default router

