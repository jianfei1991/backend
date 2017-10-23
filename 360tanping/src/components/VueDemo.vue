<template>
    <div class="vue-demo">
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
            <!-- <el-col :span="10"><div class="grid-content bg-purple"></div></el-col> -->
            <!-- <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col> -->
        </el-row>

        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <el-button type="primary" icon="loading">搜索按钮</el-button>

        <el-button-group>
            <el-button type="primary" icon="arrow-left"></el-button>
            <el-button type="primary"><i class="el-icon-arrow-right"></i></el-button>
        </el-button-group>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
