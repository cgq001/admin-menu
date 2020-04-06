<template>
    <div class="drop">
        <div class="drop-left">
            <img src="http://public.nodebook.top/20200319164136.jpg" />
        </div>
        <div class="drop-right">
            <p>{{text}}</p>
            <p>{{time}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        text:{
            type: String,
            default: 'Zhuye',
            required: true
        },
        time:{
            type: String,
            required: true
        },
        image:{
            type: String,
            default: 'http://public.nodebook.top/20200319164136.jpg',
            validator: function (value) {
                let colorImage = /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i
                // 必须匹配一个颜色的正则
                if(colorImage.test(value)){
                    return true
                }
                return false;
            }
        }
    }
}
</script>

<style scoped>
.drop{
    width: 300px;
    min-height: 65px !important;
    max-height: 87px !important;
    border-bottom: 1px solid #dcdfe6;
    padding: 12px 24px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;

}
.drop:hover{
    background: #E2EFFD;
}
.drop:hover img{
    transform: scale(1.5) rotate(360deg);
    opacity: 1;
}
.drop-left{
    width: 32px;
    height: 32px;
    background: burlywood;
    border-radius: 16px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.drop-left img{
    width: 32px;
    height: 32px;
    transition: all 0.5s;
}
.drop-left-icon{
    width: 20px;
    height: 20px;
    fill: currentColor; 
    opacity: 0.9;
    transition: all 0.5s;
}
.drop-right{
    flex: 1;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
}
.drop-right p{
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
}
.drop-right p:nth-child(1){
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #515a6e;
    margin-bottom: 5px;
    max-height: 44px;
    min-height: 22px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.drop-right p:nth-child(2){
    font-size: 12px;
    color: #808695;
}

</style>