<template>
    
    <div class="monitor-cart-list" :style="{borderColor: color}">
        <div class="monitor-cart-list-name">
            {{name}}
        </div>
        <div class="monitor-cart-list-number" :style="{background: color}">
            <div class="monitor-cart-list-number-left">
                <ViewsSvg v-if="icon == 'ViewsSvg' " class="monitor-cart-list-number-left-icon" />
                <SalesSvg v-if="icon == 'SalesSvg' " class="monitor-cart-list-number-left-icon" />
                <OrderSvg v-if="icon == 'OrderSvg' " class="monitor-cart-list-number-left-icon" />
                <RegistrationSvg v-if="icon == 'RegistrationSvg' " class="monitor-cart-list-number-left-icon" />
            </div>
            <div class="monitor-cart-list-number-right">
               <count-to :startVal='0' :endVal='number' :duration='3000'></count-to>
            </div>
        </div>
    </div>
</template>

<script>
import ViewsSvg from '../../assets/icon/views.svg'
import SalesSvg from '../../assets/icon/sales.svg'
import OrderSvg from '../../assets/icon/order.svg'
import RegistrationSvg from '../../assets/icon/registration.svg'

import countTo from 'vue-count-to';
export default {
    props:['name','number','color','icon'],
    components:{
        ViewsSvg,
        SalesSvg,
        OrderSvg,
        RegistrationSvg,
        countTo
    }
}
</script>

<style scoped>
.monitor-cart-list{
    width: 100%;
    height: auto;
    background: #ffffff;
    border-radius: 10px;
    border: 1px solid #F141AF;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 20px;
}
.monitor-cart-list-name{
    width: 100%;
    height: 42px;
    /* border-bottom: 1px solid #E8EAEC; */
    padding: 0 15px;
    box-sizing: border-box;
    line-height: 42px;
    color: #5C5C5C;

}
.monitor-cart-list-number{
    width: 100%;
    height: 68px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    color: #515a6e;
    font-size: 30px;
    line-height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F141AF;
}
.monitor-cart-list-number-left{
    width: 80px;
    height: 50px;
    /* background: burlywood; */
    border-radius: 5px;
    text-align: center;
    line-height: 50px;
}
.monitor-cart-list-number-left-icon{
    width: 30px;
    height: 30px;
    fill: currentColor;
    color: #ffffff;
    font-weight: bold;
}
.monitor-cart-list-number-right{
    width: 60%;
    height: 50px;
    line-height: 50px;
    font-size: 30px;
    text-align: right;
    color: #ffffff;
}
</style>