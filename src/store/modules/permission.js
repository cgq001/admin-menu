// 权限管理模块
import { asyncRoutes, constRouter } from '@/router'

/**
 * 根据路由meta.role 确定是否当前用户拥有访问权限
 * @roles 用户拥有角色
 * @route 待判定路由
 * 
 * 
 * 
*/
function hasPermission (roles,route){
   
    // 如果当前路由有roles 字段则需要判断用户访问权限
    if(route.meta && route.meta.roles){
        // 若用户拥有的角色中有被包含在待定路由角色表中的则拥有访问权限
        return roles.some(role => route.meta.roles.includes(role))
    } else{
        // 没有设置roles 则无需判定即可访问
        return true;
    }
}

/**
 * 递归过滤AsyncRoutes路由表
 * @routes 待过滤路由表,首次传入的就是AsyncRoutes
 * @roles 用户拥有角色
 * 
*/
export function filterAsyncRoutes(routes,roles){
    const res = []
   
    routes.forEach(route => {
        // 复制一份
        const tmp = { ...route}
       
        // 如果用户有访问权限则加入结果路由表
        if(hasPermission(roles,tmp)){
            // 如果存在子路由则递归过滤之
            if(tmp.children){
                tmp.children = filterAsyncRoutes(tmp.children,roles)
            }
            res.push(tmp)
        }
    })
    
    return res;
}

const state = {
    routes: [], //完整路由表
    addRoutes: []  //用户可访问路由表
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        // routes 用户可以访问的权限
        state.addRoutes = routes
        // 完整的路由表
        
        state.routes = constRouter.concat(routes)
       
    }
}

const actions = {
    generateRoutes({ commit }, roles) {
        return new Promise(resolve => {
            
            let accessedRoutes;
            // 用户是管理员则拥有完整访问权限
            if(roles.includes('admin')){
                accessedRoutes = asyncRoutes || []
            }else{
                // console.log(roles)
                //  否则需要根据用户角色做过滤处理 jerry
                accessedRoutes = filterAsyncRoutes(asyncRoutes,roles)
            }
          
            commit('SET_ROUTES',accessedRoutes)
       
            resolve(accessedRoutes)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}