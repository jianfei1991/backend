<template>
<div class="main-tab">
    <h3><i class="el-icon-menu"></i>&nbsp;&nbsp;员工工单统计表</h3>

    <!-- 时间范围选择 -->
    <div class="main-time">
        <div>
            <label class="ellipsis" for="">接报时间：</label>
            <el-date-picker class="form-time" v-model="value4" type="datetimerange" :picker-options="pickerOptions2" placeholder="选择时间范围" align="right"></el-date-picker>
        </div>
        <div>
            <label class="ellipsis" for="">员工姓名：</label>
            <el-input  class="form-input" type="text" styles="width:40%;" placeholder="请输入员工姓名"></el-input>
        </div>
        <div>
            <el-button type="info" icon="search" style="margin-left:40px">查询</el-button>
            <el-button type="success" icon="document" style="margin-left:40px">导出</el-button>
        </div>
        <div></div>
        <!-- <div></div> -->
    </div>

    <div class="main-table">
        <el-table ref="singleTable" stripe :data="tableData" highlight-current-row style="width: 100%">
            <el-table-column type="index" width=""></el-table-column>

            <el-table-column property="time"label="时间"></el-table-column>
            <el-table-column property="name"label="员工姓名"></el-table-column>
            <el-table-column property="new"label="新建工单"></el-table-column>
            <el-table-column property="last"label="跟进中工单"></el-table-column>
            <el-table-column property="finish"label="已完成工单"></el-table-column>

        </el-table>
    </div>

    <!-- <div class="main-pagi">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
    </div> -->

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
                        time: "2017-10-16 11:25:13",
                        name: "无名氏",
                        new: "1",
                        last: "2",
                        finish: "12"
                    },
                    {
                        time: "2017-10-16 11:25:13",
                        name: "无名氏",
                        new: "1",
                        last: "2",
                        finish: "12"
                    },
                    {
                        time: "2017-10-16 11:25:13",
                        name: "无名氏",
                        new: "1",
                        last: "2",
                        finish: "12"
                    },
                    {
                        time: "2017-10-16 11:25:13",
                        name: "无名氏",
                        new: "1",
                        last: "2",
                        finish: "12"
                    },
                    {
                        time: "2017-10-16 11:25:13",
                        name: "无名氏",
                        new: "1",
                        last: "2",
                        finish: "12"
                    },
                    {
                        time: "2017-10-16 11:25:13",
                        name: "无名氏",
                        new: "1",
                        last: "2",
                        finish: "12"
                    },
                    {
                        time: "2017-10-16 11:25:13",
                        name: "无名氏",
                        new: "1",
                        last: "2",
                        finish: "12"
                    },
                    {
                        time: "2017-10-16 11:25:13",
                        name: "无名氏",
                        new: "1",
                        last: "2",
                        finish: "12"
                    },
                    {
                        time: "2017-10-16 11:25:13",
                        name: "无名氏",
                        new: "1",
                        last: "2",
                        finish: "12"
                    },
                    {
                        time: "2017-10-16 11:25:13",
                        name: "无名氏",
                        new: "1",
                        last: "2",
                        finish: "12"
                    },
                    {
                        time: "2017-10-16 11:25:13",
                        name: "无名氏",
                        new: "1",
                        last: "2",
                        finish: "12"
                    },
                    {
                        time: "2017-10-16 11:25:13",
                        name: "无名氏",
                        new: "1",
                        last: "2",
                        finish: "12"
                    },
                    {
                        time: "2017-10-16 11:25:13",
                        name: "无名氏",
                        new: "1",
                        last: "2",
                        finish: "12"
                    },
                    {
                        time: "2017-10-16 11:25:13",
                        name: "无名氏",
                        new: "1",
                        last: "2",
                        finish: "12"
                    }

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
