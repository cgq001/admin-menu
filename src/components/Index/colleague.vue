<template>
    <div class="colleague" >
        <div class="colleague-list" v-for="item in personList" :key="item.name">
            <div class="colleague-list-left">
                <img src="http://public.nodebook.top/fd123a3921e910809fba9da0101bf8f6.jpg" />
            </div>
            <div class="colleague-list-centent">
                <p>{{item.name}}</p>
                <p>{{item.position}}</p>
            </div>
            <div class="colleague-list-right">
                <span v-if="item.onLine" class="colleague-list-right-online">在线</span>
                <span v-else class="colleague-list-right-outline">;离线</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            personList:[
                {
                    name: '王小明',
                    position: '前端开发',
                    onLine: true
                },
                {
                    name: '李小明',
                    position: 'Java',
                    onLine: true
                },
                {
                    name: '张小明',
                    position: 'PHP',
                    onLine: false
                },
                {
                    name: '宋小明',
                    position: 'python',
                    onLine: true
                },
                {
                    name: '曹小明',
                    position: 'golang',
                    onLine: false
                },
                {
                    name: '靳小明',
                    position: 'IOS',
                    onLine: true
                },
                {
                    name: '卫小明',
                    position: '安卓',
                    onLine: true
                }
            ]
        }
    }
}
</script>

<style scoped>
.colleague{
    width: 100%;
    max-height: 355px;
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none; 
    overflow: '-moz-scrollbars-none';
    scrollbar-width: none;  /*  火狐   */
}
.colleague::-webkit-scrollbar {
    display: none;  /*  Chrome  */
    width: 0 !important ; /*  Chrome  */
}
.colleague .colleague-list:nth-last-child(1){
    border-color: transparent;
}
.colleague-list{
    width: 100%;
    height: 71px;
    border-bottom: 1px solid #dcdfe6;
    padding: 10px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}
.colleague-list:hover{
    background: #DBFEFB;
}
.colleague-list-left,.colleague-list-left img{
    width: 50px;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
}
.colleague-list-centent{
    flex: 1;
    padding-left: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    
}
.colleague-list-centent p:nth-child(1){
    font-size: 14px;
    font-weight: bold;
}
.colleague-list-centent p:nth-child(2){
    font-size: 12px;
    color: #999999;
}
.colleague-list-right{
    width: 100px;
    height: 50px;
    padding-top: 13px;
    display: flex;
    justify-content: flex-end;
}
.colleague-list-right span{
    display: inline-block;
    width: 52px;
    height: 24px;
    text-align: center;
    line-height: 26px;
    border-radius: 2px;
    border: 1px solid;
    font-size: 12px;
}
.colleague-list-right-online{
    border-color: #0D9AFF;
    color: #0D9AFF;
    background: #DEEFFB;
}
.colleague-list-right-outline{
    border-color: #FD41F0;
    color: #FD41F0;
    background: #FEEDFD;
}
</style>