<template>
<div class="main-tab">
    <h3>工单列表</h3>
    <div class="main-tab-content">
        <el-table ref="singleTable" stripe :data="tableData" highlight-current-row style="width: 100%">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column property="date"label="日f期"width="120"></el-table-column>
            <el-table-column property="name"label="姓名"width="120"></el-table-column>
            <el-table-column property="address"label="地址"></el-table-column>

            <el-table-column fixed="right" label="操作" width="100">
                <template scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查询</el-button>
                    <el-button type="text" size="small">修改</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

</div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            }
        },

        data() {
            return {
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }]
            }
        }
    }
</script>


<style scoped>
    @import "../styles/main-tab.css"
</style>
