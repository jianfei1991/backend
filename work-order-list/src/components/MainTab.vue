<template>
<div class="main-tab">
    <h3><i class="el-icon-menu"></i>&nbsp;&nbsp;工单列表</h3>
    <!-- 下拉菜单群组 -->
    <table class="table-up">
        <tr>
            <td>工单类型：</td>
            <td>
                <el-select class="form-select" v-model="valueWork" placeholder="请选择">
                    <el-option v-for="item in workOrder" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </td>
            <td>问题类型：</td>
            <td>
                <el-select class="form-select" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </td>
            <td>问题种类：</td>
            <td>
                <el-select class="form-select" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </td>
            <td>工单号：</td>
            <td>
                <el-input  class="form-input" type="text" placeholder="请输入订单号"></el-input>
            </td>
        </tr>
        <tr>
            <td>订单号：</td>
            <td>
                <el-input  class="form-input" type="text" placeholder="请输入订单号"></el-input>
            </td>
            <td>城市：</td>
            <td>
                <el-select class="form-select" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </td>
            <td>姓名：</td>
            <td>
                <el-input  class="form-input" type="text" placeholder="请输入姓名"></el-input>
            </td>
            <td>手机号：</td>
            <td>
                <el-input  class="form-input" type="text" placeholder="请输入手机号"></el-input>
            </td>
        </tr>
        <tr>
            <td>车牌号：</td>
            <td>
                <el-input  class="form-input" type="text" placeholder="请输入车牌号"></el-input>
            </td>
            <td>工作状态：</td>
            <td>
                <el-select class="form-select" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </td>
            <td>最后处理人：</td>
            <td>
                <el-select class="form-select" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </td>
            <td>超时工单：</td>
            <td>
                <el-select class="form-select" v-model="valueTime" placeholder="请选择">
                    <el-option v-for="item in timeOut" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </td>
        </tr>
    </table>

    <!-- 时间范围选择 -->
    <div class="main-time">
        <div>
            <label class="ellipsis" for="">创建时间：</label>
            <el-date-picker class="form-time" v-model="value4" type="datetimerange" :picker-options="pickerOptions2" placeholder="选择时间范围" align="right"></el-date-picker>
        </div>
        <div>
            <label class="ellipsis" for="">最后处理时间：</label>
            <el-date-picker class="form-time" v-model="value4" type="datetimerange" :picker-options="pickerOptions2" placeholder="选择时间范围" align="right"></el-date-picker>
        </div>
    </div>
    <table class="table-up">
        <tr>
            <td>订单状态：</td>
            <td style="width:15%;">
                <el-select class="form-select" v-model="valueState" placeholder="请选择">
                    <el-option v-for="item in orderState" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </td>
            <td>
                <el-button type="info" style="margin-left:40px">查询</el-button>
            </td>
            <td>

                <el-button type="success" style="margin-left:40px">导出</el-button>
            </td>
        </tr>
    </table>

    <div class="main-table">
        <el-table ref="singleTable" stripe :data="tableData" highlight-current-row style="width: 100%">
            <el-table-column type="index" width=""></el-table-column>

            <el-table-column property="symbol"label="超时标记"></el-table-column>
            <el-table-column property="type"label="工单类型"></el-table-column>
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
            <el-table-column property="kind"label="问题位置"></el-table-column>

            <el-table-column label="操作" width="">
                <template slot-scope="scope">
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
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        data() {
            return {
                options: [],

                tableData: [
                    {
                        symbol: '○',
                        type: '事故救援单',
                        sheet: '1710101524080302184',
                        order: '1710161120113009RA4HU1',
                        status: '已完成',
                        city: "北京",
                        name: "袁滕飞",
                        phone: "13478954361",
                        plate: "京Q6MW81",
                        state: "新建",
                        duration: "218时21分17秒",
                        creator: "admin",
                        birth: "2017-10-16 11:25:13",
                        last: "无名氏",
                        final: "2017-10-16 11:25:13",
                        kind: "轮胎损坏",
                        catagory: "左前"
                    },
                    {
                        symbol: '○',
                        type: '事故救援单',
                        sheet: '1710101524080302184',
                        order: '1710161120113009RA4HU1',
                        status: '已完成',
                        city: "北京",
                        name: "袁滕飞",
                        phone: "13478954361",
                        plate: "京Q6MW81",
                        state: "新建",
                        duration: "218时21分17秒",
                        creator: "admin",
                        birth: "2017-10-16 11:25:13",
                        last: "无名氏",
                        final: "2017-10-16 11:25:13",
                        kind: "轮胎损坏",
                        catagory: "左前"
                    },
                    {
                        symbol: '○',
                        type: '事故救援单',
                        sheet: '1710101524080302184',
                        order: '1710161120113009RA4HU1',
                        status: '已完成',
                        city: "北京",
                        name: "袁滕飞",
                        phone: "13478954361",
                        plate: "京Q6MW81",
                        state: "新建",
                        duration: "218时21分17秒",
                        creator: "admin",
                        birth: "2017-10-16 11:25:13",
                        last: "无名氏",
                        final: "2017-10-16 11:25:13",
                        kind: "轮胎损坏",
                        catagory: "左前"
                    },
                    {
                        symbol: '○',
                        type: '事故救援单',
                        sheet: '1710101524080302184',
                        order: '1710161120113009RA4HU1',
                        status: '已完成',
                        city: "北京",
                        name: "袁滕飞",
                        phone: "13478954361",
                        plate: "京Q6MW81",
                        state: "新建",
                        duration: "218时21分17秒",
                        creator: "admin",
                        birth: "2017-10-16 11:25:13",
                        last: "无名氏",
                        final: "2017-10-16 11:25:13",
                        kind: "轮胎损坏",
                        catagory: "左前"
                    },

                ],
                workOrder: [
                    {
                        value: '选项1',
                        label: '业务投诉单'
                    },
                    {
                        value: '客户出险单',
                        label: '客户出险单'
                    },
                    {
                        value: '选项3',
                        label: '事故救援单'
                    },
                    {
                        value: '选项4',
                        label: '用车追溯单'
                    }
                ],
                timeOut: [
                    {
                        value: '选项1',
                        label: '3小时'
                    },
                    {
                        value: '客户出险单',
                        label: '6小时'
                    },
                    {
                        value: '选项3',
                        label: '12小时'
                    },
                    {
                        value: '选项4',
                        label: '24小时'
                    }
                ],
                orderState: [
                    {
                        value: '选项1',
                        label: '已预订'
                    },
                    {
                        value: '客户出险单',
                        label: '进行中'
                    },
                    {
                        value: '选项3',
                        label: '车费支付申请中'
                    },
                    {
                        value: '选项4',
                        label: '车费支付中'
                    },
                    {
                        value: '选项5',
                        label: '支付失败'
                    },
                    {
                        value: '选项6',
                        label: '违章查询中'
                    },
                    {
                        value: '选项7',
                        label: '已完成'
                    },
                    {
                        value: '选项8',
                        label: '已取消'
                    },
                    {
                        value: '选项9',
                        label: '违章等待处理'
                    },
                    {
                        value: '选项10',
                        label: '未支付'
                    },
                    {
                        value: '选项11',
                        label: '支付中'
                    }
                ],
                valueWork: '',
                valueState: "",
                valueTime: "",
                value: "",

                // 日历数据
                pickerOptions2: {
                    shortcuts: [
                    {
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    },
                    {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    },
                    {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                value4: '',

                // 分页相关变量
                currentPage4: 4,

            }
        }
    }
</script>

<style scoped>
    @import "../styles/main-tab.css"
</style>
