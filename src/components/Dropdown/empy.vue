<template>
    <div class="empy">
        <div class="empy-box">
             <News v-if="type == 'News'" class="empy-icon" />
             <Flag v-if="type == 'Flag'" class="empy-icon" />
             <Horn v-if="type == 'Horn'" class="empy-icon" />
        </div>
        <p>{{text}}</p>
    </div>
</template>

<script>
// 消息图标
import News from '@/assets/icon/news.svg'
// 代办图标
import Flag from '@/assets/icon/flag.svg'
// 通知 图标
import Horn from '@/assets/icon/horn.svg'
export default {
    props:{
        type:{
            type: String,
            default: 'News',
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['Flag', 'News','Horn'].indexOf(value) !== -1
            }
        },
        text:{
            type: String,
            default: '你没有新的消息'
        },
    },
    components: {
        News,
        Flag,
        Horn
    }
}
</script>

<style scoped>
.empy{
    width: 100%;
    height: 330px;
    padding-top: 70px;
    box-sizing: border-box;
}
.empy-box{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}
.empy-icon{
    fill: currentColor;
    color: #DAE0E5;
    width: 85px;
}
.empy p{
    color: #8C8C8C;
    font-size: 14px;
    width: 100%;
    text-align: center;
}
</style>