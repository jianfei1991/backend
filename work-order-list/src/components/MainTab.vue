<template>
<div class="main-tab">
    <h3><i class="el-icon-menu"></i>&nbsp;&nbsp;工单列表</h3>
    <!-- 下拉菜单群组 -->
    <div class="main-select" style="display: flex;">
        <div>
            <label for="">工单类型：</label>
            <el-select class="form-select" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>

        <div>
            <label for="">问题类型：</label>
            <el-select class="form-select" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>

        <div>
            <label for="">问题种类：</label>
            <el-select class="form-select" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>

        <div>
            <label for="">工单号：</label>
            <el-select class="form-select" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
    </div>
    <div class="main-select" style="display: flex;">
        <div>
            <label for="">订单号：</label>
            <el-select class="form-select" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>

        <div>
            <label for="">城市：</label>
            <el-select class="form-select" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>

        <div>
            <label for="">姓名：</label>
            <el-select class="form-select" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>

        <div>
            <label for="">手机号：</label>
            <el-select class="form-select" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
    </div>
    <div class="main-select" style="display: flex;">
        <div>
            <label for="">车牌号：</label>
            <el-select class="form-select" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>

        <div>
            <label for="">工单状态：</label>
            <el-select class="form-select" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>

        <div>
            <label for="">最后处理人：</label>
            <el-select class="form-select" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>

        <div>
            <label for="">超时工单：</label>
            <el-select class="form-select" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
    </div>

    <!-- 时间范围选择 -->
    <div class="main-time">
        <div>
            <label for="">创建时间：</label>
            <el-date-picker class="form-time" v-model="value4" type="datetimerange" :picker-options="pickerOptions2" placeholder="选择时间范围" align="right"></el-date-picker>
        </div>
        <div>
            <label for="">最后处理时间：</label>
            <el-date-picker class="form-time" v-model="value4" type="datetimerange" :picker-options="pickerOptions2" placeholder="选择时间范围" align="right"></el-date-picker>
        </div>
    </div>

    <div class="main-select" style="display: flex;">
        <div>
            <label for="">订单状态：</label>
            <el-select class="form-select" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
        <div style="justify-content:start;">
            <el-button type="info" style="margin-left:40px">查询</el-button>
            <el-button type="success" style="margin-left:40px">导出</el-button>
        </div>
        <div></div>
        <div></div>
    </div>

    <div class="main-table">
        <el-table ref="singleTable" stripe :data="tableData" highlight-current-row style="width: 100%">
            <el-table-column type="index" width=""></el-table-column>

            <el-table-column property="symbol"label="超时标记"width=""></el-table-column>
            <el-table-column property="type"label="工单类型"width=""></el-table-column>
            <el-table-column property="sheet"label="工单号"></el-table-column>
            <el-table-column property="order"label="订单号"></el-table-column>
            <el-table-column property="status"label="订单状态"></el-table-column>
            <el-table-column property="city"label="城市"></el-table-column>
            <el-table-column property="name"label="客户姓名"></el-table-column>
            <el-table-column property="phone"label="客户手机号"></el-table-column>
            <el-table-column property="plate"label="车牌号"></el-table-column>
            <el-table-column property="state"label="工单状态"></el-table-column>
            <el-table-column property="duration"label="未处理时长"></el-table-column>
            <el-table-column property="creator"label="创建人"></el-table-column>
            <el-table-column property="birth"label="创建时间"></el-table-column>
            <el-table-column property="last"label="最后处理人"></el-table-column>
            <el-table-column property="final"label="最后处理时间"></el-table-column>
            <el-table-column property="type"label="问题类型"></el-table-column>
            <el-table-column property="kind"label="问题种类"></el-table-column>

            <el-table-column fixed="" label="操作" width="">
                <template scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查询</el-button>
                    <!-- <el-button type="text" size="small">修改</el-button> -->
                </template>
            </el-table-column>
        </el-table>
    </div>

    <div class="main-pagi">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
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
                tableData: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '沙江路',
                        zip: 200333
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '沙江路',
                        zip: 200333
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '沙江路',
                        zip: 200333
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '沙江路',
                        zip: 200333
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '沙江路',
                        zip: 200333
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '沙江路',
                        zip: 200333
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '沙江路',
                        zip: 200333
                    },
                    {
                        date: '2016-05-04',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '沙江路',
                        zip: 200333
                    },
                    {
                        date: '2016-05-01',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '沙江路',
                        zip: 200333
                    }
                ],

                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    },
                    {
                        value: '选项2',
                        label: '双皮奶'
                    },
                    {
                        value: '选项3',
                        label: '蚵仔煎'
                    },
                    {
                        value: '选项4',
                        label: '龙须面'
                    },
                    {
                        value: '选项5',
                        label: '北京烤鸭'
                    }
                ],
                value: ''
            }
        }
    }
</script>


<style scoped>
    @import "../styles/main-tab.css"
</style>
