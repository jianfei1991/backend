<template>
    <div class="common-right">
        <div class="common-right-wrapper">
            <router-view></router-view>
            <!-- <h1>CommonRigth: {{ rightUrl}}</h1> -->
            <!-- <view-iframe :receiveurl="rightUrl"></view-iframe> -->

            <!-- <div class="haha">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam recusandae magnam veniam! Rerum quo sed reiciendis vero, suscipit aliquam? Consectetur vero deserunt molestiae, autem incidunt eligendi ad ab ipsa excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione repudiandae, perferendis iure, aspernatur eligendi in minima pariatur natus labore modi, nesciunt molestias nisi minus assumenda nulla a, sint distinctio commodi.</div> -->
        </div>
    </div>
</template>

<script>
    import ViewIframe from "../pages/ViewIframe"

    export default {
        data () {
            return {
                rightUrl: "http://t.tt",
                a: 12
            }
        },
        components: {
            ViewIframe,
        },
        created () {
            var target = this.$data;
            eventBus.$on("eBus", function (a) {
                console.log("a:"+a);
                target.rightUrl = a;
            })
            // console.log(this.$data);
            // console.log(this.$data.a);
            // console.log(this.$data.rightUrl);
        },
        watch: {
            rightUrl: function (val) {
                // console.log(val);
            }
        }
    }
</script>

<style scoped>
    .common-right {
        height: 100%;
        overflow: hidden;
        background-color: #aaa;

        padding-top: 70px;
        margin-top: -70px;
    }
    .common-right-wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: auto;

        background-color: #123;
    }
    .haha {
        width: 100px;
        height: 1000px;

        font-size: 50px;

        background-color: green;
    }
</style>
