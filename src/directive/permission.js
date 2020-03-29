// 封装一个指令v-permission,从而实现按钮级别权限控制
import store from '@/store'
/**
 * 指令的使用
 * v-permission="['admin','editor']"
 * 
*/
const permission = {
    inserted(el, binding){ 
        /**
         * el 当前指令的元素  
         * binding {name,expression,vale}等
         * */ 
        // 获取指令的值: 按钮要求的角色数组
        const { value: pRoles } = binding;
        //  获取用户角色
        const roles = store.getters && store.getters.roles

        if(pRoles && pRoles instanceof Array && pRoles.length >0 ){
            // 判断用户角色中是否有按钮要求的角色
            const hasPermission = roles.some(role => {
                return pRoles.includes(role);
            })
            // console.log(hasPermission)
            // 如果没有权限则删除当前DOM
            if(!hasPermission){
                el.parentNode && el.parentNode.removeChild(el);
            }
        }else{
            throw new Error(`需要指定按钮要求角色数组,如v-permission="['admin','editor']"`)
        }
    }
}

export default permission;


/**
 * 全局注册指令
 * import vPermission from './directive/permission'
 * Vue.directive('permission',vPermission)
 * 
 * 使用 <button v-permission="['admin']">admin</button>
 * 
 * */ 