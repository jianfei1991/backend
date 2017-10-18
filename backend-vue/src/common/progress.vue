<template>
    <div class="progress">
        <div id="progress">
            <!-- 左侧文字 -->
            <div class="title-box">
                <span class="col-title" v-for="item in progressArr" v-text="item.name"></span>
            </div>
            <!-- 中间图形 -->
            <div class="city-box">
                <div class="col-city" v-for="item in progressArr">
                    <span class="col-span col-before"></span>
                    <span class="col-span col-text"></span>
                    <span class="col-span col-after"></span>
                </div>
            </div>
            <!-- 右边描述 -->
            <div class="msg-box">
                <div class="msg-item" v-for="item in progressArr">
                    <p class="col-time" v-text="item.time"></p>
                    <div class="col-msg-box">
                        <p class="col-msg" v-text="item.status"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                progressArr: [
                    {name: "", active: true, time: "2017-09-20 14:30", status: "状态：处理完毕"},
                    {name: "开始", active: true, time: "2017-09-20 14:30", status: "状态：处理完毕，啊哈哈"},
                    {name: "领取/指派", active: false, time: "2017-09-20 14:30", status: "状态：处理完毕"},
                    {name: "执行", active: false, time: "2017-09-20 14:30", status: "状态：处理完毕，文字眼哦长短不齐"},
                    {name: "完成", active: false, time: "2017-09-20 14:30", status: "状态：处理完毕，啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊，换行居中，换行居中，换行居中，换行居中换行居中，换行居中换行居中，换行居中换行居中，换行居中"}
                ],
            }
        }
    }
</script>

<style scoped>
    .progress {
        width: 100%;
        height: 100%;
        background-color: #eee;
        color: #999;
    }
    @import "../styles/progress.css"
</style>
