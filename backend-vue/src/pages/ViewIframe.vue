<template>
    <div class="iframe">
        <h1>以下是iframe</h1>
        <h2>ViewIframe: {{ iframeSrc }}</h2>
        <h2>ViewIframe: {{ receiveurl }}</h2>
        <!-- <iframe src="./static/index-demo.html" frameborder="0"></iframe> -->
        <!-- <iframe src="http://t.tt" frameborder="0"></iframe> -->
        <iframe :src="receiveurl" frameborder="0"></iframe>
    </div>
</template>

<script>
    export default {
        props: ["receiveurl"],
        data () {
            return {
                // iframeSrc: "http://t.tt",
                iframeSrc: this.receiveurl,
            }
        }
    }
    console.log(this.iframeSrc);
</script>

<style scoped>
    .iframe, iframe {
        width: 100%;
        height: 100%;
        background-color: #ccc;
    }
</style>
