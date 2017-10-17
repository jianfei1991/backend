<template>
    <div class="login">
        <div class="login-wrapper" v-show="loginShow">
            <div class="login-main">
                <!-- logo部分 -->
                <div class="login-logo">
                    <div class="login-logo-image"></div>
                </div>
                <!-- 输入框 -->
                <input type="text" id="login-name" name="name" value="" placeholder="用户名" autofocus>
                <input type="password" id="login-pass" name="pass" placeholder="密码">
                <button id="login-btn" @click="login()">登录</button>

                <!-- <div th:if="${message != null}" class="alert alert-danger text-center">
                    <strong id="message" th:text="${message}">${message }</strong>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                loginShow: true
            }
        },
        methods: {
            login () {
                return this.loginShow = !this.loginShow;
            }
        }
    }
</script>

<style scoped>
    .login {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;

        height:100%;
        width: 100%;
        background-color: #fff;
    }
    @import "../styles/login.css";
</style>
