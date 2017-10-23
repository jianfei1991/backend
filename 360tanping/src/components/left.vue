<template>
<div class="left">
    <div class="left-up">
        <div class="left-up-a">
            <el-input placeholder="请输入内容" v-model="input4">
                <template slot="append">外呼</template>
            </el-input>
        </div>
        <div class="left-up-a">
            <el-input placeholder="请输入内容" v-model="input4">
                <template slot="append">搜索</template>
            </el-input>
        </div>

        <div class="left-up-b">
            <el-row class="left-up-b-1">
              <el-col :span="18"><el-input placeholder="请输入内容" v-model="input4"></el-input></el-col>
              <el-col :span="6"><div><p>空闲</p><p>00:00:33</p></div></el-col>
            </el-row>


            <div class="left-up-b-2 block" style="display:flex;">
                <el-button type="success">外呼</el-button>
                <el-button type="danger">挂机</el-button>
                <el-button type="info">保持</el-button>
            </div>
            <div class="left-up-b-2 block"  style="display:flex;">
                <el-button type="success">转移</el-button>
                <el-button type="danger">咨询</el-button>
                <el-button type="info">三方通话</el-button>
            </div>

            <el-row class="left-up-b-3">
              <el-col :span="8"><div class="grid-content bg-blue">空闲</div></el-col>
              <el-col :span="8"><div class="grid-content">小休</div></el-col>
              <el-col :span="8"><div class="grid-content">忙碌</div></el-col>
            </el-row>
        </div>
    </div>
    <!-- left-up 结束 -->
    <div class="left-middle">
        <h3><i></i>来电</h3>
        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple">主叫号码：</div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple-light">12312341234</div></el-col>
        </el-row>

        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple">被叫号码：</div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple-light">10086</div></el-col>
        </el-row>

        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple">来电省市：</div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple-light">爪哇</div></el-col>
        </el-row>

        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple">座机号：</div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple-light">95588</div></el-col>
        </el-row>

        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple">开始时间：</div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple-light">2017-08-08 21:00:00</div></el-col>
        </el-row>

        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple">结束时间：</div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple-light">2017-08-08 21:03:00</div></el-col>
        </el-row>
    </div>
    <!-- left-middle 结束 -->
    <div class="left-down">
        <h3><i></i>来电记录</h3>
        <ul>
            <li>
                <div class="left-down-img">
                    <img src="" alt="">
                </div>
                <div class="left-down-info">
                    <p>123 1234 1234</p>
                    <p><span>呼入</span><span>8月12日</span><span>北京联通</span></p>
                </div>
                <span class="left-down-icon">></span>
            </li>
            <li>
                <div class="left-down-img">
                    <img src="" alt="">
                </div>
                <div class="left-down-info">
                    <p>123 1234 1234</p>
                    <p><span>呼入</span><span>8月12日</span><span>北京联通</span></p>
                </div>
                <span class="left-down-icon">></span>
            </li>
            <li>
                <div class="left-down-img">
                    <img src="" alt="">
                </div>
                <div class="left-down-info">
                    <p>123 1234 1234</p>
                    <p><span>呼入</span><span>8月12日</span><span>北京联通</span></p>
                </div>
                <span class="left-down-icon">></span>
            </li>
            <li>
                <div class="left-down-img">
                    <img src="" alt="">
                </div>
                <div class="left-down-info">
                    <p>123 1234 1234</p>
                    <p><span>呼入</span><span>8月12日</span><span>北京联通</span></p>
                </div>
                <span class="left-down-icon">></span>
            </li>
            <li>
                <div class="left-down-img">
                    <img src="" alt="">
                </div>
                <div class="left-down-info">
                    <p>123 1234 1234</p>
                    <p><span>呼入</span><span>8月12日</span><span>北京联通</span></p>
                </div>
                <span class="left-down-icon">></span>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    export default {
        data () {
            return {
                input4: ""
            }
        }
    }
</script>

<style scoped>
    @import "../styles/left.css"
</style>
