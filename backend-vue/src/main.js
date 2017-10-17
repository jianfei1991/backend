// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"

import VueRouter from "vue-router"
Vue.use(VueRouter)

import $ from "jquery"

// import Login from "./pages/Login"
import Default from "./pages/Default"
import Demo from "./pages/Demo"

// 设置eventbus来传值
var eventBus = new Vue()

let a = [
    // {path: "", component: Login},
    // {path: "", component: Default},
    {path: "/Demo", component: Demo}
]

let router = new VueRouter({
    routes: a
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: "#app",
    template: "<App/>",
    components: { App },

    router: router
})
