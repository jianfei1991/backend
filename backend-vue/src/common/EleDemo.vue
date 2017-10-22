<template>
    <div class="ele-demo">
        <el-button @click="visible = true">按钮</el-button>
        <el-dialog v-model="visible" title="Hello world">
            <p>欢迎使用 Element-UI</p>
        </el-dialog>
        <br>
        <el-select v-model="value8" filterable placeholder="请搜索">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>

        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

        <el-table
            :data="tableData"
            style="width: 100%">

            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: false,

                options: [{
                  value: '选项1',
                  label: '黄金糕'
                }, {
                  value: '选项2',
                  label: '双皮奶'
                }, {
                  value: '选项3',
                  label: '蚵仔煎'
                }, {
                  value: '选项4',
                  label: '龙须面'
                }, {
                  value: '选项5',
                  label: '北京烤鸭'
                }],
                value8: '',

                data: [
                    {
                        label: '一级 1',
                        children: [
                            {
                                label: '二级 1-1',
                                children: [
                                    {
                                        label: '三级 1-1-1'
                                    },
                                    {
                                        label: '三级 1-1-2'
                                    }
                                ]
                            },
                            {
                                label: '二级 1-2',
                                children: [
                                    {
                                        label: '三级 1-2-1'
                                    },
                                    {
                                        label: '三级 1-2-2'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: '一级 2',
                        children: [
                            {
                                label: '二级 2-1',
                                children: [
                                    {
                                        label: '三级 2-1-1'
                                    }
                                ]
                            },
                            {
                                label: '二级 2-2',
                                children: [
                                    {
                                        label: '三级 2-2-1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: '一级 3',
                        children: [
                            {
                                label: '二级 3-1',
                                children: [
                                    {
                                        label: '三级 3-1-1'
                                    }
                                ]
                            },
                            {
                                label: '二级 3-2',
                                children: [
                                    {
                                        label: '三级 3-2-1'
                                    }
                                ]
                            }
                        ]
                    }

                ],

                defaultProps: {
                    children: 'children',
                    label: 'label'
                },

                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            }
        }
    };
</script>

<style scoped>

</style>
