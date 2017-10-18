<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <!-- <hello-world/> -->
        <!-- <login></login> -->
        <common-header></common-header>
        <common-left></common-left>
        <!-- <common-left-demo></common-left-demo> -->
        <common-right></common-right>
    </div>
</template>

<script>
    import HelloWorld from "./components/HelloWorld"
    import Login from "./pages/Login.vue"
    import CommonHeader from "./components/CommonHeader"
    import CommonLeft from "./components/CommonLeft"
    import CommonRight from "./components/CommonRight"
    import CommonLeftDemo from "./components/CommonLeftDemo"

    export default {
        name: "app",
        components: {
            HelloWorld,
            Login,
            CommonHeader,
            CommonLeft,
            CommonRight,
            CommonLeftDemo,
        }
    }
</script>

<style>
    @import "../static/reset.css";

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        /*color: #2c3e50;*/
        /*margin-top: 60px;*/

        height: 100%;
    }
</style>
