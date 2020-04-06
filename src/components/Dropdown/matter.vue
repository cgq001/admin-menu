<template>
    <div class="drop">
        <div class="drop-right">
            <p>{{text}}</p>
            <p>{{time}}</p>
        </div>
        <div class="drop-left">
            <el-link v-if="type == 'primary'"  class="drop-left-btns drop-left-btns-primary" type="primary" :underline="false">进行中</el-link>
            <el-link v-if="type == 'success'"  class="drop-left-btns drop-left-btns-success" type="success" :underline="false">完成</el-link>
            <el-link v-if="type == 'warning'"  class="drop-left-btns drop-left-btns-warning" type="warning" :underline="false">即将到期</el-link>
            <el-link v-if="type == 'danger'"  class="drop-left-btns drop-left-btns-danger" type="danger" :underline="false">未完成</el-link>
            <el-link v-if="type == 'info'" class="drop-left-btns drop-left-btns-info" type="info" :underline="false">未开始</el-link>
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
        type:{
            type: String,
            default: 'info',
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['info', 'danger','warning','success','primary'].indexOf(value) !== -1
            }
        },
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
    width: 80px;
    height: 32px;
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
.drop-left-btns{
    height: 20px;
    padding: 0 10px;
    font-size: 12px;
    border-radius: 2px;
}
.drop-left-btns-primary{
    background: #E8F6FD;
    border: 1px solid #91D5FF;
}
.drop-left-btns-success{
    background: #F8FDF6;
    border: 1px solid #A2FC76;
}
.drop-left-btns-warning{
    background: #FDF9F4;
    border: 1px solid #FDC673;
}
.drop-left-btns-danger{
    background: #FEF5F5;
    border: 1px solid #FCBEBE;
}
.drop-left-btns-info{
    background: #FCFCFD;
    border: 1px solid #CDCDCD;
}
.drop-right{
    flex: 1;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
}
.drop-right p{
    width: 100%;
    
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
    text-overflow: ellipsis;
    overflow: hidden;
}

</style>