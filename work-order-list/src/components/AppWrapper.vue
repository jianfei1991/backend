<template>
    <div class="app-wrapper">
        <!-- <tabledemo></tabledemo> -->
        <main-tab></main-tab>
        <el-button class="app-totop" icon="arrow-up">返回顶部</el-button>
    </div>
</template>

<script>
    import MainTab from "./MainTab.vue"
    import tabledemo from "./tabledemo.vue"

    export default {
        components: {
            MainTab,
            tabledemo,
        },

        data () {
            return {}
        }
    }
</script>

<style scoped>
    .app-wrapper {
        padding: 15px;
        padding-bottom: 80px;

        position: relative;
    }
    .app-totop {
        position: absolute;
        right: 15px;
        bottom: 15px;
    }
</style>
