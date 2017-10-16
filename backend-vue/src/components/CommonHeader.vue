<template>
    <div class="common-header">
        <!-- 页眉 -->
        <header class="home-header">
            <!-- logo 部分 -->
            <div class="home-logo">
                <h1><a href=""><img src="../assets/images/head/logo-crm.png" alt=""></a></h1>
            </div>
            <!-- 消息提示 -->
            <div class="home-header-news"><span>6</span></div>
            <!-- 用户信息 -->
            <div class="home-header-usr">
                <span>用户名</span>
                <ul id="home-header-usr-ul" style="">
                    <li>用户信息</li>
                    <li>用户信息</li>
                    <li>用户信息</li>
                    <li>用户信息</li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "CommonHeader",
        data () {
            return {

            }
        },
    }
</script>

<style scoped>
    h1 { color: #f00; }

    @import "../styles/common-header.css";
</style>
