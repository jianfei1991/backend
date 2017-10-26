<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <!-- <HelloWorld/> -->
        <!-- <el-button>按钮</el-button> -->
        <app-wrapper></app-wrapper>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld'
    import AppWrapper from './components/AppWrapper'

    export default {
        name: 'app',
        components: {
            HelloWorld,
            AppWrapper
        },
        data () {
            return {}
        }
    }
</script>

<style>
    html, body {
        width: 100%;
        height: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    @import "./styles/reset.css"
</style>
