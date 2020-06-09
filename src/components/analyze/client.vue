<template>
    <div class="index-client">
        <div class="index-client-box">
            <span class="index-client-box-name">购买来源</span>
            <div class="index-client-box-select">
                <el-button-group>
                    <el-button type="primary" size="mini">近七天</el-button>
                    <el-button size="mini">本月</el-button>
                    <el-button size="mini">本年</el-button>
                </el-button-group>
            </div>
            <div class="index-client-box-charts">
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
                    { '支付方式': '小程序', '占比': 25 },
                    { '支付方式': 'IOS客户端', '占比': 39 },
                    { '支付方式': '安卓客户端', '占比': 50 },
                    { '支付方式': 'H5移动端', '占比': 10 },
                    { '支付方式': 'PC端', '占比': 5 },
                ]
            }
        }
    }
}
</script>
<style scoped>
.index-client{
    width: 100%;
    height: auto;
    background: #ffffff;
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
}
.index-client-box{
    width: 100%;
    /* height: 200px; */
    border:  1px solid #E6E6E6;
    position: relative;
    padding: 20px 15px;
    box-sizing: border-box;
}
.index-client-box-name{
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
.index-client-box-select{
    width: 100%;
    height: 40px;
    /* background: burlywood; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
}
.index-client-box-charts{
    width: 100%;
    height: 350px;
    /* background: chocolate; */
}
</style>