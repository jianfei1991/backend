// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"

import VueRouter from "vue-router"
Vue.use(VueRouter)

// 引入的第三方库
import $ from "jquery"
import ElementUI from "element-ui"
import "element-ui/lib/theme-default/index.css"

Vue.use(ElementUI)

// 引入的组件
import Login from "./pages/Login"
import Default from "./pages/Default"
import Demo from "./pages/Demo"
import qudaoguanli from "./pages/qudaoguanli"
import EleDemo from "./common/EleDemo"
import progress from "./common/progress"
import ticket from "./common/ticket"

// 设置eventbus来传值
window.eventBus = new Vue()

// 声明一个数组 -- 路由
let a = [
    // {path: "", component: ticket},
    // {path: "", component: progress},
    {path: "", component: EleDemo},
    // {path: "", component: Default},
    // {path: "", component: Login},
    {path: "/qudaoguanli", component: qudaoguanli},
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
