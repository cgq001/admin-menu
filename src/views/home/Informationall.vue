<template>
    <div class="Informationall">
       <!-- <div class="Informationall-box"> -->
            <el-tabs v-model="activeName" @tab-click="handleClick" class="Informationall-box">
                <el-tab-pane label="通知" name="first">
                    <div class="Informationall-list">
                        <InformationList />
                    </div>
                </el-tab-pane>
                <el-tab-pane label="消息" name="second">
                    <div class="Informationall-list">
                         <InformationList />
                    </div>
                </el-tab-pane>
                <el-tab-pane label="代办" name="third">
                    <div class="Informationall-list">
                         <InformationList />
                    </div>
                </el-tab-pane>
            </el-tabs>
       <!-- </div> -->
    </div>
</template>

<script>
import InformationList from '../../components/Home/InformationList'
export default {
    data(){
        return {
            activeName: 'first'
        }
    },
    methods:{
        handleClick(){

        }
    },
    components:{
        InformationList
    }
}
</script>

<style>
.Informationall{
    width: 100%;
    min-height: 100%;
    padding: 25px;
    box-sizing: border-box;
}
.Informationall-box{
    width: 100%;
    min-height: 100%;
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
    background: #ffffff;
}
.Informationall-box .el-tabs__nav-scroll{
    justify-content: flex-start !important;
    padding-left: 15px;
    box-sizing: border-box;
}
.Informationall-list{
    width: 100%;
    height: auto;
    padding: 15px;
    box-sizing: border-box;
}
</style>