<template>
    <div class="ticket">
    <div id="ticket">
    <div id="ticket-content">
        <div class="discount" v-for="item in ticketArr">
            <div class="ticket-left">
                <p class="type" v-text="item.type"></p>
                <p class="type-text"><span v-text="item.text"></span></p>
                <p class="type-desc type-desc-discount" v-text="item.desc"></p>
            </div>

            <div class="ticket-right">
                <p class="type-content" v-text="item.content"></p>
                <p class="type-date" v-text="item.date"></p>
                <div class="scope-box">
                    <p class="type-scope1">全国通用</p>
                    <p class="type-scope2" v-text="item.scope2"></p>
                </div>
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
                ticketArr: [
                    {
                        type: "折扣券",
                        text: "9.0",  // 注意了，若有小数点，用String类型，和第52行对比页面结果
                        desc: "满50元可用",

                        content: "Gofun出行9折券",
                        date: "有效期至2017年10月31日",
                        scope2: "只可抵扣时间费用、里程费用，两行内容，换行居中，超出省略号显示，两行内容，换行居中，超出省略号显示"
                    },
                    {
                        type: "代金券",
                        text: 30,
                        // desc: "满50元可用",

                        content: "Gofun出行30元抵扣券",
                        date: "有效期至2017年10月31日",
                        scope2: "一行的时候，要靠底部"
                    },
                    {
                        type: "套餐券",
                        name: "套餐券",
                        text: "日租券",
                        desc: "168元",

                        content: "168元日租券",
                        date: "有效期至2017年10月31日",
                    },
                    {
                        type: "折扣券",
                        text: 9.0,
                        desc: "满50元可用",

                        content: "Gofun出行9折券",
                        date: "有效期至2017年10月31日",
                    }
                ],
            }
        }
    }
</script>

<style scoped>
    @import "../styles/ticket.css"
</style>
