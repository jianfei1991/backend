<template>
    <div id="app">
        <!-- <el-button>按钮</el-button> -->
        <!-- <img src="./assets/logo.png"> -->
        <!-- <HelloWorld/> -->
        <div class="app-left">
            <left></left>
        </div>

        <div class="app-right">
            <div class="app-right-content">
                <div class="app-right-up">
                    <rightup></rightup>
                </div>
                <div class="app-right-down">
                    <rightdown></rightdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import left from "./components/left"
import rightup from "./components/rightup"
import rightdown from "./components/rightdown"

export default {
    name: 'app',
    components: {
        HelloWorld,
        left,
        rightup,
        rightdown
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    background-color: #f3f3f3;
    width: 100%;
    height: 100%;
    padding: 15px 15px 0px 15px;
}
.app-left {
    float: left;
    width: 240px;
    height: 100%;
    overflow: hidden;
    background-color: #eee;
}
.app-right {
    margin-left: 255px;
    height: 100%;
    overflow: hidden;
    background-color: #eee;
}
.app-right-content {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
.app-right-up {
    /*height: 200px;*/
    background-color: #dddd;
    margin-bottom: 20px;
}
.app-right-down {
    /*height: 200px;*/
    background-color: #dddd;
}
</style>
