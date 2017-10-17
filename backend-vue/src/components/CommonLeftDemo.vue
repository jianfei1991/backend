<template>
    <div class="common-left">
        <div id="tree">
            <div class="tree-box">
                <!-- 只有三级 -->
                <div class="tree-item">
                    <h3 class="tree-item-h3">一级菜单</h3>
                    <ul class="tree-two-box">
                        <li>
                            <h4 class="tree-item-h4">二级菜单</h4>
                            <ul class="tree-three-box tree-last-box">
                                <li class="tree-item-last">三级菜单</li>
                                <li class="tree-item-last">三级菜单</li>
                                <li class="tree-item-last">三级菜单</li>
                            </ul>
                        </li>
                        <li>
                            <h4 class="tree-item-h4">二级菜单</h4>
                            <ul class="tree-three-box tree-last-box">
                                <li class="tree-item-last">三级菜单</li>
                                <li class="tree-item-last">三级菜单</li>
                                <li class="tree-item-last">三级菜单</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="tree-item">
                    <h3 class="tree-item-h3">一级菜单</h3>
                    <ul class="tree-two-box">
                        <li>
                            <h4 class="tree-item-h4">二级菜单</h4>
                            <ul class="tree-three-box">
                                <li>
                                    <h5 class="tree-item-h5">三级菜单</h5>
                                    <ul class="tree-four-box">
                                        <li>
                                            <h6 class="tree-item-h6">四级菜单</h6>
                                            <ul class="tree-five-box tree-last-box">
                                                <li class="tree-item-last">五级菜单</li>
                                                <li class="tree-item-last">五级菜单</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6 class="tree-item-h6">四级菜单</h6>
                                            <ul class="tree-five-box tree-last-box">
                                                <li class="tree-item-last">五级菜单</li>
                                                <li class="tree-item-last">五级菜单</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h5 class="tree-item-h5">三级菜单</h5>
                                    <ul class="tree-four-box tree-last-box">
                                        <li class="tree-item-last">四级菜单only</li>
                                        <li class="tree-item-last">四级菜单only</li>
                                        <li class="tree-item-last">四级菜单only</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h4 class="tree-item-h4">二级菜单</h4>
                            <ul class="tree-three-box tree-last-box">
                                <li class="tree-item-last">三级菜单only</li>
                                <li class="tree-item-last">三级菜单only</li>
                                <li class="tree-item-last">三级菜单only</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- 只有二级 -->
                <div class="tree-item">
                    <h3 class="tree-item-h3">一级菜单</h3>
                    <ul class="tree-two-box tree-last-box">
                        <li class="tree-item-last">二级菜单only</li>
                        <li class="tree-item-last">二级菜单only</li>
                        <li class="tree-item-last">二级菜单only</li>
                    </ul>
                </div>
                <!-- 最后一个.tree-item结束 -->
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
    setTimeout(function () {
    }, 3000)

    export default {

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
