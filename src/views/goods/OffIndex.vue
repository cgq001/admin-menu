<template>
    <div class="goodsindex">
        <!-- 搜索条件 -->
        <el-row :gutter="20" class="goodsindex-queryInfo">
            <!-- 商品名称搜索 -->
            <el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="4">
                <el-input class="goodsindex-queryInfo-li" v-model="queryInfo.name" clearable size="small" placeholder="请输入产品名称"></el-input>
            </el-col>
            <!-- 商品分类搜索 -->
            <el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="4">
                 <el-select  class="goodsindex-queryInfo-li" v-model="queryInfo.type" size="small" clearable placeholder="请选择产品分类">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="2">
                <el-button type="primary" class="goodsindex-queryInfo-li" size="small" >搜索</el-button>
            </el-col>
        </el-row>
        <!-- 检索结果 -->
        <el-row :gutter="20" class="goodsindex-list">
            <el-col :span="24">
                <el-table
                    :data="tableData"
                    border
                    size='small'
                    style="width: 100%">
                    <el-table-column
                    type="index"
                    label="序"
                    width="50">
                    </el-table-column>
                    <el-table-column
                    prop="date"
                    label="产品名称"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="产品图片"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="原件"
                    width="80">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="现价"
                    width="80">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="总量"
                    width="80">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="库存"
                    width="80">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="下架人"
                    width="140">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="下架时间"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="下架原因"
                    width="220">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="操作">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <!-- 分页 -->
        <el-row :gutter="20" class="goodsindex-list">
            <el-col :span="24" class="goodsindex-page-box">
                <el-pagination
                    :hide-on-single-page="true"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="queryInfo.page"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="queryInfo.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            queryInfo:{
                name: '',
                type: '',
                page: 1 ,
                pageSize: 10
            },
            options: [
                {
                    label: 1,
                    value: '安心蔬菜'
                },
                {
                    label: 2,
                    value: '新鲜牛奶'
                }
            ],
            tableData: []
        }
    },
    methods:{
        handleSizeChange(){

        },
        handleCurrentChange(){

        },
    }
}
</script>

<style scoped>
.goodsindex{
    width: 100%;
    min-height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
/* 搜索 */
.goodsindex-queryInfo{
    margin-bottom: 10px;
}
.goodsindex-queryInfo-li{
    width: 100%;
    height: auto;
}
/* 列表 */
.goodsindex-list{
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}
/* 分页 */
.goodsindex-page-box{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
}
</style>