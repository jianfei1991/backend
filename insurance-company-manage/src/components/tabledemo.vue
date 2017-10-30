<template>
    <div class="table">
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
    </div>
</template>

<script>
export default {
    data () {
        return {
            options: [],
            value: "",
            valueWork: "",
            workOrder: "",
            valueTime: "",
            timeOut: "",

        }
    }
}
</script>

<style scoped>
    .table-up td {
        border: none;
        margin: 15px 0;
        height: 50px;
    }
    .table-up td:nth-of-type(odd) {
        width: 10%;
        text-align: right;
        /*text-indent: 3em;*/
        padding-right: 10px;
    }
</style>
