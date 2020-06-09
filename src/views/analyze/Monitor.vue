<template>
    <div class="monitor">
        <!-- 图标 -->
        <el-row :gutter="20" class="monitor-header">
            <el-col :xs="24" :sm="24" :md="14" :lg="18" :xl="18">
                <el-row class="monitor-cart-box" :gutter="20">
                    <el-col :span="24">
                        <div class="monitor-cart-name">
                            <div class="monitor-cart-name-left">
                                <div class="monitor-cart-name-left-icon">
                                    <Count class="monitor-cart-name-left-icon-s" />
                                </div>
                                统计数据
                            </div>
                            <div class="monitor-cart-name-right">
                                <div class="monitor-cart-name-right-list">今日</div>
                                <div class="monitor-cart-name-right-list">本月</div>
                                <div class="monitor-cart-name-right-list">全年</div>
                                <el-date-picker
                                    v-model="value1"
                                    size="mini"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6">
                        <Monitorcar name='访问量' :number='12' color='#F141AF' icon='ViewsSvg' />
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6">
                        <Monitorcar name='销售额' :number='180' color='#F85E1F' icon='SalesSvg' />
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6">
                        <Monitorcar name='订单数' :number='180' color='#9830FA' icon='OrderSvg' />
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6">
                        <Monitorcar name='新注册' :number='180' color='#0C99FD' icon='RegistrationSvg' />
                    </el-col>
                </el-row>
            </el-col>
            <el-col :xs="12" :sm="12" :md="10" :lg="6" :xl="6">
                <div class="monitor-cart-probability">
                        <dv-water-level-pond :config="config" class="monitor-cart-probability-box" />
                        <div class="monitor-cart-probability-name">转化率</div>
                </div>
            </el-col>
        </el-row>
        <!-- 图标二 -->
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="13" :lg="17" :xl="17">
                <el-row class="monitor-header-two" :gutter="20">
                    <el-col :span="24">
                        <div class="monitor-cart-name">
                            <div class="monitor-cart-name-left">
                                <div class="monitor-cart-name-left-icon">
                                    <Visitors class="monitor-cart-name-left-icon-s" />
                                </div>
                                数据汇总
                            </div>
                            <div class="monitor-cart-name-right">
                                <div class="monitor-cart-name-right-list">今日</div>
                                <div class="monitor-cart-name-right-list">本月</div>
                                <div class="monitor-cart-name-right-list">全年</div>
                                <el-date-picker
                                    v-model="value1"
                                    size="mini"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <div class="monitor-visitors">
                            <ve-histogram :data="chartData"></ve-histogram>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="monitor-header-two" :gutter="20">
                    <el-col :span="24">
                        <div class="monitor-cart-name">
                            <div class="monitor-cart-name-left">
                                <div class="monitor-cart-name-left-icon">
                                    <Visitors class="monitor-cart-name-left-icon-s" />
                                </div>
                                销售额类目占比
                            </div>
                            <div class="monitor-cart-name-right">
                                <div class="monitor-cart-name-right-list">今日</div>
                                <div class="monitor-cart-name-right-list">本月</div>
                                <div class="monitor-cart-name-right-list">全年</div>
                                <el-date-picker
                                    v-model="value1"
                                    size="mini"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <div class="monitor-visitors monitor-visitors-scale">
                            <div class="monitor-visitors-left">
                                <ve-ring :data="scaleData" :colors="colors"></ve-ring>
                            </div>
                            <div class="monitor-visitors-right">
                                <div class="monitor-visitors-right-list" v-for="(item,index) in colors" :key="index">
                                    <CircleSvg class="monitor-visitors-right-list-icon" :style="{color: item}"></CircleSvg>
                                    <div class="monitor-visitors-right-list-name">{{scaleData.rows[index]['类目']}}</div>
                                    <div class="monitor-visitors-right-list-number">¥ {{scaleData.rows[index]['销量']}}</div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :xs="23" :sm="23" :md="10" :lg="6" :xl="6" :offset="1">
                <el-row class="monitor-header-two" :gutter="20" style="margin-bottom: 20px;">
                    <el-col :span="24">
                        <div class="monitor-cart-name">
                            <div class="monitor-cart-name-left">
                                <div class="monitor-cart-name-left-icon">
                                    <Visitors class="monitor-cart-name-left-icon-s" />
                                </div>
                                总注册用户
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <div class="monitor-header-users">
                            <div class="monitor-header-users-icon">
                                <HerdSvg  class="monitor-header-users-icon-s" />
                            </div>
                            <div class="monitor-header-users-number">
                                <count-to :startVal='0' :endVal='120' :duration='3000'></count-to>
                            </div>
                            <div class="monitor-header-users-time">
                                2020-06-09 22:18:10
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="monitor-header-two" :gutter="20" style="margin-bottom: 20px;">
                    <el-col :span="24">
                        <div class="monitor-cart-name">
                            <div class="monitor-cart-name-left">
                                <div class="monitor-cart-name-left-icon">
                                    <Visitors class="monitor-cart-name-left-icon-s" />
                                </div>
                                当前活跃度
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <ve-funnel :data="funnelData" :settings="funnelSettings"></ve-funnel>
                    </el-col>
                </el-row>
                <el-row class="monitor-header-two" :gutter="20" style="margin-bottom: 20px;">
                    <el-col :span="24">
                        <div class="monitor-cart-name">
                            <div class="monitor-cart-name-left">
                                <div class="monitor-cart-name-left-icon">
                                    <Visitors class="monitor-cart-name-left-icon-s" />
                                </div>
                                客户满意度
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="24">
                       <div class="monitor-header-comment">
                           <div class="monitor-header-comment-list">
                                <div class="monitor-header-comment-list-li monitor-header-comment-list-li-number">
                                    <count-to :startVal='0' :endVal='20120' :duration='3000'></count-to>
                                </div>
                                <div class="monitor-header-comment-list-li monitor-header-comment-list-li-tag">
                                    <LaughSvg class="monitor-header-comment-list-li-icon" />
                                    <div class="monitor-header-comment-list-li-tag-text">三星及以上评论</div>
                                </div>
                                <div class="monitor-header-comment-list-li monitor-header-comment-list-li-percentage">
                                    95%
                                </div>
                           </div>
                           <div class="monitor-header-comment-list">
                                <div class="monitor-header-comment-list-li monitor-header-comment-list-li-number">
                                    <count-to :startVal='0' :endVal='120' :duration='3000'></count-to>
                                </div>
                                <div class="monitor-header-comment-list-li monitor-header-comment-list-li-tag">
                                    <CryingSvg class="monitor-header-comment-list-li-icon" />
                                    <div class="monitor-header-comment-list-li-tag-text">二星及以下评论</div>
                                </div>
                                <div class="monitor-header-comment-list-li monitor-header-comment-list-li-percentage">
                                    5%
                                </div>
                           </div>
                       </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Monitorcar from '../../components/analyze/monitorcar'
import Count from '../../assets/icon/count.svg'
import Visitors from '../../assets/icon/visitors.svg'
import CircleSvg from '../../assets/icon/circle.svg'
import HerdSvg from '../../assets/icon/herd.svg'
import CryingSvg from '../../assets/icon/crying.svg'
import LaughSvg from '../../assets/icon/laugh.svg'

import countTo from 'vue-count-to';
export default {
    data(){
        return {
            value1:'',
            config:{
                data: [66],
                shape: 'roundRect'
            },
            chartData:{
                columns: ['日期', '访问用户', '下单用户', '下单率'],
                rows: [
                    { '日期': '1月', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                    { '日期': '2月', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                    { '日期': '3月', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                    { '日期': '4月', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                    { '日期': '5月', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                    { '日期': '6月', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
                    { '日期': '7月', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
                    { '日期': '8月', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
                    { '日期': '9月', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
                    { '日期': '10月', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
                    { '日期': '11月', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
                    { '日期': '12月', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                ]
            },
            colors : ['#F141AF','#F85E1F', '#9830FA', '#0C99FD', '#25D9B4','#1AA2FC'],
            scaleData: {
                columns: ['类目', '销量'],
                rows: [
                    { '类目': '安心蔬菜', '销量': 1393 },
                    { '类目': '时令水果', '销量': 3530 },
                    { '类目': '乳品早点', '销量': 2923 },
                    { '类目': '酒水饮料', '销量': 1723 },
                    { '类目': '速冻食品', '销量': 3792 },
                    { '类目': '其他', '销量': 4593 }
                ]
            },
            funnelSettings: {
                sequence: ['跳出率', '留存率', '活跃率', '转化率'] 
            },
            funnelData: {
                columns: ['状态', '数值'],
                rows: [
                    { '状态': '跳出率', '数值': 900 },
                    { '状态': '留存率', '数值': 600 },
                    { '状态': '活跃率', '数值': 300 },
                    { '状态': '转化率', '数值': 200 }
                ]
            }
        }
    },
    components:{
        Monitorcar,
        Count,
        Visitors,
        CircleSvg,
        countTo,
        HerdSvg,
        CryingSvg,
        LaughSvg
    }
}
</script>

<style scoped>
.monitor{
    background: #F5F7F9;
    padding: 25px;
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
}
.monitor-header{
    border: 1px solid #E6E6E6;
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 20px;
}
.monitor-header-two{
    border: 1px solid #E6E6E6;
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 20px;
}
.monitor-cart-name{
    width: 100%;
    height: 50px;
    /* background: yellow; */
    margin-bottom: 20px;
    border-bottom: 1px solid #E6E6E6;
    display: flex;
    justify-content: space-between;
}
.monitor-cart-name-left{
    width: 160px;
    height: 100%;
    /* background: blueviolet; */
    line-height: 42px;
    color: #5C5C5C;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
}
.monitor-cart-name-left-icon{
    width: 30px;
    height: 30px;
    background: #F7EEFF;
    border-radius: 2px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}
.monitor-cart-name-left-icon-s{
    width: 20px;
    height: 20px;
    color: blueviolet;
    fill: currentColor;
}
.monitor-cart-name-right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.monitor-cart-name-right-list{
    width: 60px;
    height: 50px;
    /* background: chartreuse; */
    text-align: center;
    line-height: 50px;
    color: #515A6E;
    font-size: 14px;
    cursor: pointer;
}
.monitor-cart-name-right-list:hover{
    color: #2D8CF0;
}
.monitor-cart-box{
    /* background: chocolate; */
    width: 100%;
    height: 100px;
    padding: 10px 15px 0;
    box-sizing: border-box;
    /* border: 1px solid #E6E6E6; */
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 20px;
}
.monitor-cart-probability{
    /* background: cornflowerblue; */
    width: 100%;
    height: 210px;
    padding: 20px 15px 0px;
    box-sizing: border-box;
}
.monitor-cart-probability-box{
    width: 100%;
    height: 80%;
    /* border: 1px solid #515A6E; */
    border-radius: 5px;
}
.monitor-cart-probability-name{
    width: 100%;
    height: 20%;
    text-align: center;
    line-height: 34px;
    /* background: chartreuse; */
    color: #515A6E;
    font-size: 14px;
    cursor: pointer;
}
.monitor-visitors{
    width: 100%;
    height: 400px;
}
.monitor-visitors-scale{
    display: flex;
    justify-content: space-between;
}
.monitor-visitors-left{
    width: 60%;
    height: 100%;
}
.monitor-visitors-right{
    width: 40%;
    height: 100%;
    /* background: chocolate; */
    padding: 20px;
    box-sizing: border-box;
}
.monitor-visitors-right-list{
    width: 100%;
    height: 40px;
    /* background: cyan; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.monitor-visitors-right-list-icon{
    width: 15px;
    height: 15px;
    color: #666666;
    fill: currentColor;
}
.monitor-visitors-right-list-name{
    width: 120px;
    /* background: darkgoldenrod; */
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #595959;
    padding-left: 10px;
    box-sizing: border-box;
}
.monitor-visitors-right-list-number{
    flex: 1;
    /* background: yellowgreen; */
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #8C8C8C;
    padding-left: 10px;
    box-sizing: border-box;
    text-align: right;
    padding-right: 15px;
}
.monitor-header-users{
    width: 100%;
    height: auto;
    padding: 0px 10px;
    box-sizing: border-box;
}
.monitor-header-users-time{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #515A6E;
    text-align: center;
    margin-bottom: 10px;
}
.monitor-header-users-number{
    width: 100%;
    height: 58px;
    text-align: center;
    font-size: 40px;
    line-height: 58px;
    color: #515A6E;
    font-weight: bold;
}
.monitor-header-users-message{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #515A6E;
    text-align: center;
}
/* 用户数 */
.monitor-header-users-icon{
    width: 100%;
    height: 50px;
    text-align: center;
    /* background: chocolate; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.monitor-header-users-icon-s{
    width: 36px;
    height: 36px;
    fill: currentColor;
    color: #2399FA;
}
/* 评论 */
.monitor-header-comment{
    width: 100%;
    height: auto;
}
.monitor-header-comment .monitor-header-comment-list:nth-last-child(1){
    border-bottom-color: transparent;
}
.monitor-header-comment-list{
    width: 100%;
    height: 120px;
    display: flex;
    box-sizing: border-box;
    border-bottom: 1px solid #E8EAEC;
}
.monitor-header-comment-list-li{
    width: 33%;
    height: 120px;
}
.monitor-header-comment-list-li-number{
    font-weight: bold;
    font-size: 30px;
    color: #515A6E;
    line-height: 120px;
    text-align: center;
}
.monitor-header-comment-list-li-icon{
    width: 50px;
    height: 50px;
    color: #FBD971;
    fill: currentColor;
}
.monitor-header-comment-list-li-tag{
    display: flex;
    /* background: cyan; */
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.monitor-header-comment-list-li-tag-text{
    width: 100%;
    height: 35px;
    text-align: center;
    line-height: 35px;
    color: #808695;
    font-size: 14px;
}
.monitor-header-comment-list-li-percentage{
    height: 100%;
    line-height: 120px;
    color: #36C17B;
    font-size: 18px;
    text-align: center;
}
</style>