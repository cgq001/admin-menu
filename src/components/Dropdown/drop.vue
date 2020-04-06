<template>
    <div class="drop">
        <div class="drop-left" :style="{background: iconBgColor}">
            <Email v-if="type === 'Email'" class="drop-left-icon" :style="{color: iconColor}" />
            <Zhuye v-if="type === 'Zhuye'" class="drop-left-icon" :style="{color: iconColor}" />
            <Friend v-if="type === 'Friend'" class="drop-left-icon" :style="{color: iconColor}" />
            <Approval v-if="type === 'Approval'" class="drop-left-icon" :style="{color: iconColor}" />
            <Refuse v-if="type === 'Refuse'" class="drop-left-icon" :style="{color: iconColor}" />
            <Favorite v-if="type === 'Favorite'" class="drop-left-icon" :style="{color: iconColor}" />
        </div>
        <div class="drop-right">
            <p>{{text}}</p>
            <p>{{time}}</p>
        </div>
    </div>
</template>

<script>
import Email from '@/assets/icon/email.svg' // 邮件
import Zhuye from '@/assets/icon/zhuye.svg'  // 主页
import Friend from '@/assets/icon/friend.svg' // 朋友
import Approval from '@/assets/icon/approval.svg' //批准
import Refuse from '@/assets/icon/refuse.svg' //拒绝
import Favorite from '@/assets/icon/favorite.svg' // 收藏
export default {
    props:{
        type:{
            type: String,
            default: 'Zhuye',
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['Zhuye', 'Email','Friend','Approval','Refuse','Favorite'].indexOf(value) !== -1
            }
        },
        text:{
            type: String,
            default: 'Zhuye',
            required: true
        },
        time:{
            type: String,
            required: true
        },
        iconColor:{
            type: String,
            default: '#ffffff',
            validator: function (value) {
                let colorHtml = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/
                let colorRgba = /^[rR][gG][Bb][Aa]?[\(]((2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?(0\.\d{1,2}|1|0)?[\)]{1}$/
                // 必须匹配一个颜色的正则
                if(colorHtml.test(value)){
                    return true
                }
                 if(colorRgba.test(value)){
                    return true
                }
                return false;
            }
        },
        iconBgColor: {
            type: String,
            default: '#94E273',
            validator: function (value) {
                let colorHtml = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/
                let colorRgba = /^[rR][gG][Bb][Aa]?[\(]((2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?(0\.\d{1,2}|1|0)?[\)]{1}$/
                // 必须匹配一个颜色的正则
                if(colorHtml.test(value)){
                    return true
                }
                 if(colorRgba.test(value)){
                    return true
                }
                return false;
            }
        }
    },
    components:{
        Email,
        Zhuye,
        Friend,
        Approval,
        Refuse,
        Favorite
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
.drop:hover .drop-left-icon{
    transform: rotate(360deg);
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