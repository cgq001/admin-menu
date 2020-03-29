<template>
    <div>
        <input type="text" v-model="username" />
        <div @click="login">登陆</div>
    </div>
   
</template>

<script>
export default {
    data(){
        return {
            username:undefined
        }
    },
    methods:{
        login(){
            this.$store
                .dispatch('user/login',{username: this.username})
                .then(()=>{
                  
                    // 登陆成功后重定向
                    this.$router.push({
                        path: this.$route.query.redirect || '/index'
                    })
                     
                })
                .catch(err=>{
                    // console.log(err)
                })
        }
    }
}
</script>