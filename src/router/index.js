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
    path: '/analyze',
    component: Layout,
    redirect: '/goods/index',
    meta: {
      title: "数据分析",
      icon: 'el-icon-s-marketing',
      hidden: false
    },
    children: [
      {
        path: 'analyzeindex',
        component: () => import('@/views/analyze/Index.vue'),
        name: 'analyzeindex',
        meta: {
          title: "主控数据",
          icon: 'el-icon-tickets',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'analyzemonitor',
        component: () => import('@/views/analyze/Monitor.vue'),
        name: 'analyzemonitor',
        meta: {
          title: "监控数据",
          icon: 'el-icon-tickets',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
    ]
  },
  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/index',
    meta:{
      title: "产品管理",
      icon: 'el-icon-s-goods',
      hidden: false,
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/goods/Index.vue'),
        name: 'goodsindex',
        meta: {
          title: "在售产品",
          icon: 'el-icon-tickets',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'fromgood',
        component: () => import('@/views/goods/FromGood.vue'),
        name: 'fromgood',
        meta: {
          title: "添加(编辑产品)",
          icon: 'el-icon-tickets',
          hidden: true,
          roles: ['admin','jerry'],
          
        }
      },
      {
        path: 'onindex',
        component: () => import('@/views/goods/OnIndex.vue'),
        name: 'onindex',
        meta: {
          title: "待上架产品",
          icon: 'el-icon-tickets',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'offindex',
        component: () => import('@/views/goods/OffIndex.vue'),
        name: 'offindex',
        meta: {
          title: "已下架产品",
          icon: 'el-icon-tickets',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'sort',
        component: () => import('@/views/goods/Sort.vue'),
        name: 'sort',
        meta: {
          title: "产品分类",
          icon: 'el-icon-tickets',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
    ]
  },
  {
    path: '/control',
    component: Layout,
    redirect: '/control/keycode',
    meta:{
      title: "布局控制",
      icon: 'el-icon-s-platform',
      hidden: false,
    },
    children: [
      {
        path: 'keycode',
        component: () => import('@/views/control/KeyCode.vue'),
        name: 'keycode',
        meta: {
          title: "关键词",
          icon: 'el-icon-message',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'placard',
        component: () => import('@/views/control/Placard.vue'),
        name: 'placard',
        meta: {
          title: "公告",
          icon: 'el-icon-message',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'carousel',
        component: () => import('@/views/control/Carousel.vue'),
        name: 'carousel',
        meta: {
          title: "首页轮播图",
          icon: 'el-icon-message',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'ad',
        component: () => import('@/views/control/Ad.vue'),
        name: 'ad',
        meta: {
          title: "广告图",
          icon: 'el-icon-message',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'nav',
        component: () => import('@/views/control/Nav.vue'),
        name: 'nav',
        meta: {
          title: "首页导航",
          icon: 'el-icon-message',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
    ]
  },
  {
    path: '/marketing',
    component: Layout,
    redirect: '/marketing/spike',
    meta:{
      title: "营销控制",
      icon: 'el-icon-s-help',
      hidden: false,
    },
    children: [
      {
        path: 'spike',
        component: () => import('@/views/marketing/Spike.vue'),
        name: 'spike',
        meta: {
          title: "秒杀时间段",
          icon: 'el-icon-message',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'produce',
        component: () => import('@/views/marketing/Produce.vue'),
        name: 'produce',
        meta: {
          title: "秒杀产品",
          icon: 'el-icon-message',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'area',
        component: () => import('@/views/marketing/Area.vue'),
        name: 'area',
        meta: {
          title: "特色专区",
          icon: 'el-icon-message',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'choice',
        component: () => import('@/views/marketing/Choice.vue'),
        name: 'choice',
        meta: {
          title: "精选分类",
          icon: 'el-icon-message',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
    ]
  },
  {
    path: '/coupon',
    component: Layout,
    redirect: '/coupon/addCoupon',
    meta:{
      title: "卡券管理",
      icon: 'el-icon-s-help',
      hidden: false,
    },
    children: [
      {
        path: 'addCoupon',
        component: () => import('@/views/coupon/AddCoupon.vue'),
        name: 'addCoupon',
        meta: {
          title: "优惠券类型",
          icon: 'el-icon-message',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'couponlist',
        component: () => import('@/views/coupon/CouponList.vue'),
        name: 'couponlist',
        meta: {
          title: "优惠券列表",
          icon: 'el-icon-message',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
    ]
  },
  {
    path: '/communication',
    component: Layout,
    redirect: '/communication/index',
    meta:{
      title: "通讯",
      icon: 'el-icon-s-help',
      hidden: false,
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/communication/Index.vue'),
        name: 'communicationindex',
        meta: {
          title: "邮件",
          icon: 'el-icon-message',
          hidden: false,
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
          hidden: false,
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
      icon: 'el-icon-user-solid',
      hidden: false,
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/home/Index.vue'),
        name: 'homeindex',
        meta: {
          title: "个人设置",
          icon: 'el-icon-user-solid',
          hidden: false,
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
          hidden: false,
          roles: ['admin','jerry']
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: constRouter
})

export default router

