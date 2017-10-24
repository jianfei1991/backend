<template>
    <div class="app-wrapper">
        <main-tab></main-tab>
    </div>
</template>

<script>
    import MainTab from "./MainTab.vue"

    export default {
        components: {
            MainTab,
        },

        data () {
            return {}
        }
    }
</script>

<style scoped>
    .app-wrapper {
        padding: 15px;
    }
</style>
