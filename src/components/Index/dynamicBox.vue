<template>
    <div class="dynamic">
        <vue-seamless-scroll :data='dynamicList' class="dynamic-warp">
            <div class="dynamic-list" v-for="item in dynamicList" :key="item.name">
                <div class="dynamic-list-left">
                    <img src="http://public.nodebook.top/fd123a3921e910809fba9da0101bf8f6.jpg" />
                </div>
                <div class="dynamic-list-right">
                    <p class="dynamic-list-right-top">
                        <span>{{item.name}}</span>
                        <span>{{item.type}}</span>
                        <span>{{item.msg}}</span>
                    </p>
                    <p class="dynamic-list-right-bottom">
                        {{item.time}}
                    </p>
                </div>
            </div>
        </vue-seamless-scroll>
    </div>
</template>

<script>
// 滚动样式详见: https://chenxuan1993.gitee.io/component-document/index_prod#/component/seamless-default
export default {
    data(){
        return {
            dynamicList:[
                {
                    name: '小张',
                    type: '订购了',
                    msg: '紫砂壶',
                    time: '12-10 10:12'
                },
                {
                    name: '小李',
                    type: '订购了',
                    msg: '绿茶',
                    time: '12-10 10:12'
                },
                {
                    name: '小王',
                    type: '订购了',
                    msg: '清茶',
                    time: '12-10 10:12'
                },
                {
                    name: '小林',
                    type: '订购了',
                    msg: '茉莉花茶',
                    time: '12-10 10:12'
                },
                {
                    name: '小时',
                    type: '订购了',
                    msg: '豆腐',
                    time: '12-10 10:12'
                },
                {
                    name: '小七',
                    type: '订购了',
                    msg: '萝卜',
                    time: '12-10 10:12'
                },
                {
                    name: '小齐',
                    type: '订购了',
                    msg: '青菜',
                    time: '12-10 10:12'
                },
                {
                    name: '小新',
                    type: '订购了',
                    msg: '新茶',
                    time: '12-10 10:12'
                },
                {
                    name: '小金',
                    type: '订购了',
                    msg: '毛尖',
                    time: '12-10 10:12'
                },
                {
                    name: '小毛',
                    type: '订购了',
                    msg: '红茶',
                    time: '12-10 10:12'
                }
            ]
        }
    }
}
</script>

<style scoped>
.dynamic{
    width: 100%;
    height: auto;
}
.dynamic-warp{
    height: 651px;
    overflow: hidden;
}
.dynamic-list{
    width: 100%;
    height: 93px;
    padding: 25px 0;
    border-bottom: 1px solid #dcdfe6;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}
.dynamic-list:hover{
    background: #DBFEFB;
}
.dynamic-list-left,.dynamic-list-left img{
    width: 42px;
    height: 42px;
    border-radius: 21px;
    overflow: hidden;
    margin-right: 25px;
}
.dynamic-list-right{
    flex: 1;
    height: 42px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
}
.dynamic-list-right .dynamic-list-right-top{
    font-size: 14px;
}
.dynamic-list-right-top span:nth-child(1){
    color: #3B3C3C;
    margin-right: 15px;
}
.dynamic-list-right-top span:nth-child(2){
    color: #7C7E81;
    margin-right: 5px;
}
.dynamic-list-right-top span:nth-child(3){
    color: #2E93FD;
}
.dynamic-list-right-bottom{
    color: #999999;
    font-size: 12px;
}
</style>