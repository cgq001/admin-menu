<template>
    <div class="login">
        <!-- 登录面板 -->
        <div class="login-box">
            <div class="login-box-title">
                后台管理系统
            </div>
            <div class="login-box-from">
                 <input type="text" v-model="username" />
                <div @click="login">登陆</div>
            </div>
        </div>
       
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

<style scoped>
.login{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/image/login.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.login-box{
    width: 350px;
    height: 287px;
    background: hsla(0,0%,100%,.3);
    border-radius: 5px;
    box-shadow: 0 0 2px #f7f7f7;
    border: 1px solid #f7f7f7;
}
.login-box-title{
    line-height: 50px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    border-bottom: 1px solid #ffffff;
}
.login-box-from{
    width: 100%;
    height: auto;
    padding: 30px;
    box-sizing: border-box;
}
</style>