<template>
    <div class="iframe">
        <h1>以下是iframe</h1>
        <h2>ViewIframe: {{ iframeSrc }}</h2>
        <!-- <iframe src="./static/index-demo.html" frameborder="0"></iframe> -->
        <!-- <iframe src="http://t.tt" frameborder="0"></iframe> -->
        <iframe :src="iframeSrc" frameborder="0"></iframe>
    </div>
</template>

<script>
    export default {
        props: ["receiveUrl"],
        data () {
            return {
                // iframeSrc: "http://t.tt",
                iframeSrc: this.receiveUrl,
            }
        }
    }
</script>

<style scoped>
    .iframe, iframe {
        width: 100%;
        height: 100%;
        background-color: #ccc;
    }
</style>
