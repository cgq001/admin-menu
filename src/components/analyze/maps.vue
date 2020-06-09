<template>
    <div class="map">
        <div id="myChartChina" :style="{width: '100%', height: '500px'}"></div>
    </div>
</template>

<script>
export default {
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
                            max: 1500,
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
.map{
    width: 100%;
    height: 500px;
    background: #ffffff;
}
</style>