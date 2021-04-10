<template>
    <div class="index-pay">
        <div class="index-pay-box">
            <span class="index-pay-box-name">支付方式</span>
            <div class="index-pay-box-select">
                <el-button-group>
                    <el-button type="primary" size="mini">近七天</el-button>
                    <el-button size="mini">本月</el-button>
                    <el-button size="mini">本年</el-button>
                </el-button-group>
            </div>
            <div class="index-pay-box-charts">
                <ve-pie :data="chartData"></ve-pie>
            </div>    
        </div>           
    </div>
</template>

<script>
export default {
    data(){
        return {
            chartData:{
                columns: ['支付方式', '占比'],
                rows: [
                    { '支付方式': '支付宝', '占比': 35 },
                    { '支付方式': '微信', '占比': 39 },
                    { '支付方式': '余额', '占比': 26 },
                ]
            }
        }
    }
}
</script>
<style scoped>
.index-pay{
    width: 100%;
    height: auto;
    background: #ffffff;
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
}
.index-pay-box{
    width: 100%;
    /* height: 200px; */
    border:  1px solid #E6E6E6;
    position: relative;
    padding: 20px 15px;
    box-sizing: border-box;
}
.index-pay-box-name{
    position: absolute;
    width: 100px;
    height: 30px;
    background: #ffffff;
    display: inline-block;
    text-align: center;
    line-height: 30px;
    font-size: 13px;
    color: #000000;
    left: 25px;
    top: -15px;
}
.index-pay-box-select{
    width: 100%;
    height: 40px;
    /* background: burlywood; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
}
.index-pay-box-charts{
    width: 100%;
    height: 350px;
    /* background: chocolate; */
}
</style>