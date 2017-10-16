<template>
    <div class="common-left">
        <div id="tree">
            <div class="tree-box">
                <!-- 一级菜单容器 -->
                <div class="tree-item" v-for="item1 in leftArr">
                    <!-- 一级菜单 -->
                    <h3 class="tree-item-h3" v-text="item1.name" @click="toggleTwo()"></h3>
                    <!-- 二级菜单容器 -->
                    <ul class="tree-two-box" v-if="item1.next != undefined" v-show="twoShow">
                        <!-- 二条目 -->
                        <li v-for="item2 in item1.next" v-show="item2.next != undefined">
                            <!-- 二级菜单 -->
                            <h4 class="tree-item-h4" v-text="item2.name" @click="toggleThree()"></h4>
                            <!-- 三级菜单容器 -->
                            <ul class="tree-three-box" v-if="item2.next != undefined" v-show="threeShow">
                                <!-- 三条目 -->
                                <li v-for="item3 in item2.next" v-show="item3.next != undefined">
                                    <!-- 三级菜单 -->
                                    <h5 class="tree-item-h5" v-text="item3.name" @click="toggleFour()"></h5>
                                    <!-- 四级菜单容器 -->
                                    <ul class="tree-four-box" v-if="item3.next != undefined" v-show="fourShow">
                                        <!-- 四条目 -->
                                        <li v-for="item4 in item3.next" v-show="item4.next != undefined">
                                            <!-- 四级菜单 -->
                                            <h6 class="tree-item-h6" v-text="item4.name" @click="toggleFive()"></h6>
                                            <!-- 五级菜单容器 -->
                                            <ul class="tree-five-box tree-last-box" v-if="item4.next != undefined" v-show="fiveShow">
                                                <!-- 五级菜单 -->
                                                <li class="tree-item-last" v-for="item5 in item4.next" v-text="item5.name">{{ item5.name }}</li>
                                            </ul>
                                        </li>
                                        <h6 class="tree-item-h6-single tree-single" v-for="item4 in item3.next" v-show="item4.next == undefined"> {{ item4.name }}</h6>
                                    </ul>
                                </li>
                                <h5 class="tree-item-h5-single tree-single" v-for="item3 in item2.next" v-show="item3.next == undefined"> {{ item3.name }}</h5>
                            </ul>
                        </li>
                        <h4 class="tree-item-h4-single tree-single" v-for="item2 in item1.next" v-show="item2.next == undefined">{{ item2.name }}</h4>
                    </ul>
                </div>
            </div>
            <!-- .tree-box结束 -->
        </div>
        <!-- #tree结束 -->
    </div>
</template>

<script>
    import left from "../methods/left.js"
    console.log("haha");

    import leftReady from "../methods/left-ready.js"

    export default {
        methods: {
            toggleTwo () {
                this.twoShow = !this.twoShow;
            },
            toggleThree () {
                this.threeShow = !this.threeShow;
            },
            toggleFour () {
                this.fourShow = !this.fourShow;
            },
            toggleFive () {
                this.fiveShow = !this.fiveShow;
            },
        },
        data () {
            return {
                bgNone: {backgroundImages: "none"},
                twoShow: false,
                threeShow: false,
                fourShow: false,
                fiveShow: false,

                leftArr: [
                    {
                        name: "一级菜单-1",
                        url: "",

                        next: [
                            { name: "二级菜单", url: "http://www.smartisan.com" },
                            {
                                name: "二级菜单",
                                next: [
                                    { name: "三级菜单", url: "", target: "_blank" },
                                    // 如果需要在新窗口中打开被链接，设置"_blank"  ；否则不设置或者设置为空
                                    { name: "三级菜单", url: "http://www.sina.com" },
                                    { name: "三级菜单", url: "http://www.smartisan.com" }
                                ]
                            },
                            {
                                name: "二级菜单",
                                next: [
                                    { name: "三级菜单", url: "/left.html", target: "_blank" },
                                    // 如果需要在新窗口中打开被链接，设置"_blank"  ；否则不设置或者设置为空
                                    { name: "三级菜单", url: "http://www.sina.com" },
                                    { name: "三级菜单", url: "http://www.smartisan.com" }
                                ]
                            },
                            { name: "二级菜单", url: "http://www.smartisan.com" },
                            { name: "二级菜单", url: "http://www.smartisan.com" }

                        ]
                    },
                    // i
                    {  // div.tree-item
                        name: "一级菜单-2",  // .h3
                        next: [  // ul.tree-two-box
                            // j
                            {
                                name: "二级菜单",  // .h4
                                next: [  // ul.tree-three-box
                                    // k
                                    {
                                        name: "三级菜单",  // .h5
                                        next: [  // ul.tree-four-box
                                            // m
                                            // { name: "四级菜单", url: "/left.html"},
                                            {
                                                name: "四级菜单",  // .h6
                                                next: [  // ul.tree-five-box
                                                    // n
                                                    { name: "五级菜单", url: "/views/left/left.html"},
                                                    { name: "五级菜单", url: "/views/left/left.html"},
                                                    { name: "五级菜单", url: "/views/left/left.html"}
                                                ]
                                            },
                                            {
                                                name: "四级菜单",  // .h6
                                                next: [  // ul.tree-five-box
                                                    // n
                                                    { name: "五级菜单", url: "/views/left/left.html"},
                                                    { name: "五级菜单", url: "/views/left/left.html"},
                                                    { name: "五级菜单", url: "/views/left/left.html"}
                                                ]
                                            },
                                            { name: "四级菜单", url: "/views/left/left.html"},
                                        ]
                                    },
                                    {
                                        name: "三级菜单",
                                        next: [
                                            { name: "四级菜单", url: "/views/left/left.html"},
                                            { name: "四级菜单", url: "/views/left/left.html"},
                                            { name: "四级菜单", url: "/views/left/left.html"}
                                        ]
                                    },
                                    {
                                        name: "三级菜单",
                                        next: [
                                            { name: "四级菜单", url: "/views/left/left.html"},
                                            { name: "四级菜单", url: "/views/left/left.html"},
                                            { name: "四级菜单", url: "/views/left/left.html"}
                                        ]
                                    }
                                ]
                            },
                            {
                                name: "二级菜单",
                                next: [
                                    { name: "三级菜单", url: "/views/left/left.html", target: "_blank" },
                                    // 如果需要在新窗口中打开被链接，设置"_blank"  ；否则不设置或者设置为空
                                    { name: "三级菜单", url: "http://www.sina.com" },
                                    { name: "三级菜单", url: "http://www.smartisan.com" }
                                ]
                            },
                            {
                                name: "二级菜单",
                                next: [
                                    { name: "三级菜单", url: "/views/left/left.html", target: "_blank" },
                                    // 如果需要在新窗口中打开被链接，设置"_blank"  ；否则不设置或者设置为空
                                    { name: "三级菜单", url: "http://www.sina.com" },
                                    { name: "三级菜单", url: "http://www.smartisan.com" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "一级菜单-3",
                        next: [
                            { name: "二级菜单", url: "/views/left/left.html", target: "_blank" },
                            // 如果需要在新窗口中打开被链接，设置"_blank"  ；否则不设置或者设置为空
                            { name: "二级菜单", url: "http://www.sina.com" },
                            { name: "二级菜单", url: "" }
                        ]
                    },
                    { name: "进度条", url: "/views/progress/progress.html" },
                    { name: "日历待修", url: "/views/date-time-picker.html" },
                    { name: "下拉选项", url: "/views/select.html" },
                    { name: "进度条", url: "/views/progress/progress.html" },
                    { name: "日历待修", url: "/views/date-time-picker.html" },
                    { name: "下拉选项", url: "/views/select.html" },
                    { name: "进度条", url: "/views/progress/progress.html" },
                    { name: "日历待修", url: "/views/date-time-picker.html" },
                    { name: "下拉选项", url: "/views/select.html" },
                    { name: "进度条", url: "/views/progress/progress.html" },
                    { name: "日历待修", url: "/views/date-time-picker.html" },
                    { name: "下拉选项", url: "/views/select.html" }
                ]

            }
        }
    }
</script>

<style scoped>
    .common-left {
        float: left;

        width: 200px;
        height: 100%;
        padding-top: 70px;
        margin-top: -70px;
    }
    @import "../styles/common-left.css";
</style>
