// 路由的全局守卫

// 权限控制逻辑
import router from './index'
import store from '../store/index'

//引入nprogress 进度条插件
import NProgress from 'nprogress'

import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 从cookie获取令牌

// 简单配置  进度条
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })


const whiteList = ['/login'] //排除的路径

router.beforeEach(async (to,from,next) => {
    NProgress.start()
    // 获取令牌判断用户是否登陆
    const hasToken = getToken()
    // 有令牌 表示已经登陆
    if(hasToken){
        
        if(to.path === '/login'){
            
            // 已登录重定向到首页
            next({path: '/'})
        }else{
            
            //若用户角色已附加则说明动态路由已经添加
            const hasRoles = store.getters.roles && store.getters.roles.length > 0

            if(hasRoles){
                //角色存在
                next() //继续即可
            } else {
                try {
                    //先请求获取用户角色
                    const { roles } = await store.dispatch('user/getInfo')
                
                    // 根据当前用户角色动态生成路由
                    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
                    
                    // 添加这些路由至路由器
                    router.addRoutes(accessRoutes)
                    
                    // 继续路由切换,确保addRoutes完成
                    next({...to,replace: true})
                } catch(error){
                    // 出错需要重置令牌并重新登陆(令牌过期,网络错误等原因)
                    await store.dispatch('user/resetToken')
                    Message.error(error || "网络错误")
                    next(`/login?redirect=${to.path}`)
                }
            }
           
        }
    }else{
        // 用户无令牌
        if(whiteList.indexOf(to.path) !== -1){
            //白名单路由放过
            next()
        } else {
            // 重定向至登录页
            next(`/login?redirect=${to.path}`)
        }
    }
})

router.afterEach(() => {
    NProgress.done()
  })