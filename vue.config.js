module.exports = {
    // port: '8080'
    proxy: {
        [process.env.VUE_APP_BASE_API]:{
            target: 'http://127.0.0.1:3000/',
            changeOrigin: true, //是否要改变roigin头
            pathRewrite: { //地址是否重写
                ["^"+process.env.VUE_APP_BASE_API]: ""
            }
        }
    }
}