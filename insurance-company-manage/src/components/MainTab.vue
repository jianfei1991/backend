<template>
<div class="main-tab">
    <h3>
        <i class="el-icon-menu"></i>&nbsp;&nbsp;<a href="">保险公司管理</a>
        <el-button class="tab-add" type="text" @click="dialogFormVisible = true" icon="plus">添加</el-button>
    </h3>

    <div class="main-select" style="display: flex;">
        <div>
            <label for="">保险公司名称：</label>
            <el-select class="form-select" v-model="valueName" placeholder="请选择">
                <el-option v-for="item in names" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
        <div>
            <label for="">报险公司电话：</label>
            <el-select class="form-select" v-model="value" placeholder="请选择">
                <el-option v-for="item in phones" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
        <div>
            <el-button type="info" icon="search" style="margin-left:40px">查询</el-button>
        </div>
        <div>
            <!-- <label for=""></label> -->
        </div>
    </div>

    <div class="main-table">
        <el-table ref="singleTable" stripe :data="tableData" highlight-current-row style="width: 100%">
            <el-table-column type="index" width=""></el-table-column>

            <el-table-column property="type"label="保险公司名称"></el-table-column>
            <el-table-column property="kind"label="报险公司电话"></el-table-column>

            <el-table-column label="操作" width="">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
                    <!-- <el-button type="text" size="small">修改</el-button> -->
                </template>
            </el-table-column>
        </el-table>
    </div>

    <div class="main-pagi">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
    </div>

    <el-dialog title="录入保险公司" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="保险公司名称：" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="保险公司电话：" :label-width="formLabelWidth">
                <el-input v-model="form.phone" auto-complete="off"></el-input>
                <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select> -->
            </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>

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
                        type: '太平洋',
                        kind: "141414",
                    },
                    {
                        type: '淹死了',
                        kind: "141414",
                    },
                    {
                        type: '不赔偿',
                        kind: "141414",
                    },
                    {
                        type: '啊哈哈',
                        kind: "868686",
                    },

                ],
                names: [
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
                phones: [
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
                valueName: "",
                valuePhone: "",

                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px',

                // 分页相关变量
                currentPage4: 2,

            }
            // return结束
        },
        // data结束
    }
    // export default结束
</script>

<style scoped>
    @import "../styles/main-tab.css"
</style>
