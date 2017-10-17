// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"

import VueRouter from "vue-router"
Vue.use(VueRouter)

import $ from "jquery"

import Default from "./pages/Default"
import Demo from "./pages/Demo"

let a = [
    {path: "", component: Default},
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
