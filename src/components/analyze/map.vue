<template>
    <div class="index-pay">
        <div class="index-pay-box">
            <span class="index-pay-box-name">订单分布</span>
            <div class="index-pay-box-select">
                <el-button-group>
                    <el-button type="primary" size="mini">近七天</el-button>
                    <el-button size="mini">本月</el-button>
                    <el-button size="mini">本年</el-button>
                </el-button-group>
            </div>
            <div id="index-pay-box-charts">
                <div id="myChartChina" :style="{width: '100%', height: '500px'}"></div>
            </div>    
        </div>           
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    mounted() {
        this.drawLine();
    },
    methods:{
        drawLine(){
        // 基于准备好的dom，初始化echarts实例
        var myChartContainer = document.getElementById('myChartChina');       
        var resizeMyChartContainer = function(){
          myChartContainer.style.width=(document.body.offsetWidth/2)+'px'//页面一半的大小
        } 
         resizeMyChartContainer();
        var myChartChina = this.$echarts.init(myChartContainer); 

        function randomData() {  
                return Math.round(Math.random()*500);  
            } 
        // 绘制图表
       var optionMap = {  
              tooltip: {},
                 legend: {
                            orient: 'vertical',
                            left: 'left',
                            data:['']
                        },      
                 visualMap: {
                            min: 0,
                            max: 1000,
                            left: '10%',
                            top: 'bottom',
                            text: ['高','低'],
                            calculable : true,
                            color:['#158BFE','#ffffff']
                        },   
                 selectedMode: 'single',
                 series : [                         
                            {
                              name: '', 
                              type: 'map',
                              mapType: 'china',
                              itemStyle: {
                                    normal:{
                                        borderColor: 'rgba(0, 0, 0, 0.2)'
                                    },
                                    emphasis:{
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                showLegendSymbol: true,
                                label: {
                                    normal: {
                                        show: true
                                    },
                                    emphasis: {
                                        show: true
                                    }
                                },
                                data:[               
                                     {name: '北京',value: randomData() },
                                      {name: '天津',value: randomData() },
                                      {name: '上海',value: randomData() },
                                      {name: '重庆',value: randomData() },
                                      {name: '河北',value: randomData() },
                                      {name: '河南',value: randomData() },
                                      {name: '云南',value: randomData() },
                                      {name: '辽宁',value: randomData() },
                                      {name: '黑龙江',value: randomData() },
                                      {name: '湖南',value: randomData() },
                                      {name: '安徽',value: randomData() },
                                      {name: '山东',value: randomData() },
                                      {name: '新疆',value: randomData() },
                                      {name: '江苏',value: randomData() },
                                      {name: '浙江',value: randomData() },
                                      {name: '江西',value: randomData() },
                                      {name: '湖北',value: randomData() },
                                      {name: '广西',value: randomData() },
                                      {name: '甘肃',value: randomData() },
                                      {name: '山西',value: randomData() },
                                      {name: '内蒙古',value: randomData() },
                                      {name: '陕西',value: randomData() },
                                      {name: '吉林',value: randomData() },
                                      {name: '福建',value: randomData() },
                                      {name: '贵州',value: randomData() },
                                      {name: '广东',value: randomData() },
                                      {name: '青海',value: randomData() },
                                      {name: '西藏',value: randomData() },
                                      {name: '四川',value: randomData() },
                                      {name: '宁夏',value: randomData() },
                                      {name: '海南',value: randomData() },
                                      {name: '台湾',value: randomData() },
                                      {name: '香港',value: randomData() },
                                      {name: '澳门',value: randomData() }
                                ]
                            }
                        ]
               }
     
        myChartChina.setOption(optionMap);
        window.onresize=function(){
            resizeMyChartContainer();
            myChartChina.resize();
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
#index-pay-box-charts{
    width: 100%;
    height: 500px;
    /* background: chocolate; */
}
</style>