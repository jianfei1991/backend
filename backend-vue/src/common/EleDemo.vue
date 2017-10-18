<template>
    <div class="ele-demo">
        <el-button @click="visible = true">按钮</el-button>
        <el-dialog v-model="visible" title="Hello world">
            <p>欢迎使用 Element-UI</p>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                visible: false,
            }
        }
    }
</script>

<style scoped>

</style>
