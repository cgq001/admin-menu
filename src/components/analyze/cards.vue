<template>
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" style="margin-bottom: 20px;">
        <div class="index-sales-list" :style="{ borderColor : colors}">
            <div class="index-sales-list-name">
                {{name}}
            </div>
             <div class="index-sales-list-main"  :style="{ background : colors}">
                <div class="index-sales-list-main-icon">
                    <DealSvg v-if="ionc == 'DealSvg'" class="index-sales-list-main-icon-svg" />
                    <MoneySvg v-else class="index-sales-list-main-icon-svg" />
                </div>
                <div class="index-sales-list-main-number">
                    <count-to :startVal='0' :endVal='number' :duration='3000'></count-to>
                </div>
            </div>
        </div>
    </el-col>
</template>

<script>
import DealSvg from '../../assets/icon/deal.svg'
import MoneySvg from '../../assets/icon/money.svg'
import countTo from 'vue-count-to';
export default {
    props:['colors','name','number','ionc'],
    components:{
        DealSvg,
        MoneySvg,
        countTo
    }
}
</script>

<style scoped>
.index-sales-list{
    width: 100%;
    height: auto;
    /* border: 1px soild #FFA333; */
    border: 1px solid #FFA333;
    border-radius: 5px;
    box-sizing: border-box;
}
.index-sales-list-name{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #5C5C5C;
}
.index-sales-list-main{
    width: 100%;
    height: 60px;
    background: #FFA333;
    display: flex;
    justify-content: space-between;
}
.index-sales-list-main-icon{
    width: 70px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.index-sales-list-main-icon-svg{
    width: 35px;
    height: 35px;
    color: #ffffff;
    fill: currentColor; 
}
.index-sales-list-main-number{
    width: 60%;
    /* background: chartreuse; */
    text-align: right;
    font-size: 30px;
    padding-right: 25px;
    box-sizing: border-box;
    line-height: 60px;
    color: #ffffff;
}
</style>