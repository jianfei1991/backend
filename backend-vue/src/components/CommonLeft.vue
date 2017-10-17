<template>
    <div class="common-left">
        <div id="tree">
            <div class="tree-box">
                <!-- 一级菜单容器 -->
                <div class="tree-item" v-for="item1 in leftArr">
                    <!-- 一级菜单 -->
                    <h3 class="tree-item-h3" v-text="item1.name" @click="toggleTwo()"></h3>
                    <!-- 二级菜单容器 -->
                    <ul class="tree-two-box" v-if="item1.next != undefined" v-showf="twoShow">
                        <!-- 二条目 -->
                        <li v-for="item2 in item1.next" v-show="item2.next != undefined">
                            <!-- 二级菜单 -->
                            <h4 class="tree-item-h4" v-text="item2.name" @click="toggleThree()"></h4>
                            <!-- 三级菜单容器 -->
                            <ul class="tree-three-box" v-if="item2.next != undefined" v-showf="threeShow">
                                <!-- 三条目 -->
                                <li v-for="item3 in item2.next" v-show="item3.next != undefined">
                                    <!-- 三级菜单 -->
                                    <h5 class="tree-item-h5" v-text="item3.name" @click="toggleFour()"></h5>
                                    <!-- 四级菜单容器 -->
                                    <ul class="tree-four-box" v-if="item3.next != undefined" v-showf="fourShow">
                                        <!-- 四条目 -->
                                        <li v-for="item4 in item3.next" v-show="item4.next != undefined">
                                            <!-- 四级菜单 -->
                                            <h6 class="tree-item-h6" v-text="item4.name" @click="toggleFive()"></h6>
                                            <!-- 五级菜单容器 -->
                                            <ul class="tree-five-box tree-last-box" v-if="item4.next != undefined" v-showf="fiveShow">
                                                <!-- 五级菜单 -->
                                                <li class="tree-item-last" v-for="item5 in item4.next" v-text="item5.name">{{ item5.name }}</li>
                                            </ul>
                                        </li>
                                        <h6 class="tree-item-h6-single tree-single" v-for="item4 in item3.next" v-show="item4.next == undefined"> {{ item4.name }}</h6>
                                    </ul>
                                </li>
                                <h5 class="tree-item-h5-single tree-single" v-for="item3 in item2.next" v-show="item3.next == undefined"> {{ item3.name }}</h5>
                            </ul>
                        </li>
                        <h4 class="tree-item-h4-single tree-single" v-for="item2 in item1.next" v-show="item2.next == undefined"><router-link to="/Demo" :data-url="item2.url" @click="sendUrl()">{{ item2.name }}</router-link></h4>
                    </ul>
                </div>
            </div>
            <!-- .tree-box结束 -->
        </div>
        <!-- #tree结束 -->
    </div>
</template>

<script>
    import left from "../methods/left.js"
    console.log("haha");

    import leftReady from "../methods/left-ready.js"

    export default {
        methods: {
            sendUrl () {
                console.log("haha");
                enevtBus.$emit("eBus", "e.target.getAttribute()");
                // enevtBus.$emit("eventBus", e.target.getAttribute());
            },
            toggleTwo () {
                this.twoShow = !this.twoShow;
            },
            toggleThree () {
                this.threeShow = !this.threeShow;
            },
            toggleFour () {
                this.fourShow = !this.fourShow;
            },
            toggleFive () {
                this.fiveShow = !this.fiveShow;
            },
        },
        data () {
            return {
                bgNone: {backgroundImages: "none"},
                twoShow: false,
                threeShow: false,
                fourShow: false,
                fiveShow: false,

                leftArr: [
                    {
                        "next": [
                            {
                                "resourceId": "dc0700cf37c54a20ab8361a16e02c8ab",
                                "name": "渠道管理",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            },
                            {
                                "next": [
                                    {
                                        "resourceId": "fd494942b78644e98aacafc7ba7a01b3",
                                        "name": "主动推送管理",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//push/pushCondition"
                                    },
                                    {
                                        "resourceId": "0b7775e773214fdeb326a66634420d5d",
                                        "name": "被动推送管理",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//push/pushPassivity"
                                    }
                                ],
                                "resourceId": "6fbd44a247fc4880a53a18b0894bd1cd",
                                "name": "PUSH管理",
                                "isLeaf": true
                            },
                            {
                                "next": [
                                    {
                                        "resourceId": "38daaf42b1d147959a5b992e435ee991",
                                        "name": "优惠券历史查询",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//coupon/getUserCouponList"
                                    },
                                    {
                                        "resourceId": "b411141e77df438f9e46eef01921d5f0",
                                        "name": "优惠券发放",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//coupon/giveCoupon"
                                    },
                                    {
                                        "resourceId": "05e264f460e74044a4609bdd8c224729",
                                        "name": "优惠券维护",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//coupon/getCouponList"
                                    },
                                    {
                                        "resourceId": "6189bcfc358b428786c13551ae83a771",
                                        "name": "优惠券批量发送列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//giveCoupon/getGiveCouponList"
                                    },
                                    {
                                        "resourceId": "191e682ef3e04818b2eb43c96f040693",
                                        "name": "红包立减",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//redPacket/getRedPacketList"
                                    }
                                ],
                                "resourceId": "3d1342d88b224487a021dbb6e74e1380",
                                "name": "优惠券管理",
                                "isLeaf": true
                            },
                            {
                                "next": [
                                    {
                                        "resourceId": "9b03eab9d55b47b6a29150935c44f21e",
                                        "name": "邀请管理列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//invityPage/getInvityPageList"
                                    },
                                    {
                                        "resourceId": "7e7022a189be406cb0cb47bb17c98d39",
                                        "name": "兑换券卡列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//exchangeBatch/getList"
                                    },
                                    {
                                        "resourceId": "8c17fe60e0d84752894fdaf7d748dbe6",
                                        "name": "青岛活动报名审核",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//activityImgCheck/getActivityImgCheckList?type=2"
                                    },
                                    {
                                        "resourceId": "53d667b3093f4b209232d5b44b186a32",
                                        "name": "邀请人列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//inviterAwardLog/getInviterAwardLogList"
                                    },
                                    {
                                        "resourceId": "949847308852428ba5d1a4d07f9bc6f0",
                                        "name": "轮播图列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//loadPic/getLoadPicList"
                                    },
                                    {
                                        "resourceId": "f4676892af9242ce9c8f1f486947e3f1",
                                        "name": "活动列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//activity/getActivityList"
                                    },
                                    {
                                        "resourceId": "3bf72f7a183d4bf5a96beda4e88cf7c2",
                                        "name": "桂林活动报名审核",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//activityImgCheck/getActivityImgCheckList"
                                    },
                                    {
                                        "resourceId": "27e3d5899cfb4ef5b218b9d57990846f",
                                        "name": "渠道登录管理列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//loginPage/getLoginPageList"
                                    },
                                    {
                                        "resourceId": "1f75a372b0824bd8b6119f826c2df861",
                                        "name": "充值金额列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//chargeAmount/getChargeAmountList"
                                    },
                                    {
                                        "resourceId": "e4584f0e821d42cca1834335218d1d21",
                                        "name": "标签列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8031//usertab/getUsertabList"
                                    }
                                ],
                                "resourceId": "1fdbf9cf1c854e10b3f94467d3d13366",
                                "name": "活动管理",
                                "isLeaf": true
                            },
                            {
                                "resourceId": "90ec8050eda346b0b4dee7f0a60cdfd7",
                                "name": "供应商管理",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            },
                            {
                                "next": [
                                    {
                                        "resourceId": "13270904a87e4b30820ce5109f4191c7",
                                        "name": "夜租城市列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:9090/"
                                    }
                                ],
                                "resourceId": "62cdd528cddb40d89c501a8d7ab6fc79",
                                "name": "夜租管理",
                                "isLeaf": true
                            }
                        ],
                        "resourceId": "dcc398414e654065bea2432ccf0f36e9",
                        "name": "促销活动",
                        "isLeaf": true
                    },
                    {
                        "next": [
                            {
                                "resourceId": "5776a1e68e304879a31a95a2daef5436",
                                "name": "充电桩管理",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            },
                            {
                                "resourceId": "8ee6d973180c465dbefa311a3adfbc92",
                                "name": "维修厂管理",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            },
                            {
                                "resourceId": "d0cac4d2c6a440cbb14e8cde7e165780",
                                "name": "网点管理",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            }
                        ],
                        "resourceId": "e3745081937343858243610bf5fea782",
                        "name": "网点管理",
                        "isLeaf": true
                    },
                    {
                        "next": [
                            {
                                "resourceId": "b63c7b85b88a467595a0185f87b25f29",
                                "name": "商区管理",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            },
                            {
                                "resourceId": "d288f41bc45b45c9a72379eb4926d053",
                                "name": "城市管理",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090//city/getList"
                            }
                        ],
                        "resourceId": "ad1d1b66a4084ce6b4a41062c8914f34",
                        "name": "城市管理",
                        "isLeaf": true
                    },
                    {
                        "next": [
                            {
                                "resourceId": "8d2100dff0374564a68602fa02967a7e",
                                "name": "默认密码设置",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090//sysSetting/getList"
                            },
                            {
                                "resourceId": "18f2ac3f177747e9a9a8e72b15c8589b",
                                "name": "用户列表",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090//adminUser/getList"
                            },
                            {
                                "resourceId": "c1772a9c0a9f437589447b2500ccbb58",
                                "name": "减免授权设置",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090//sysSetting/getList"
                            },
                            {
                                "resourceId": "448da1d616174f1f89ba8fe88365dcc7",
                                "name": "资源列表",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090//resource/getList"
                            },
                            {
                                "resourceId": "7239421a00d84f72a2d9ddd559194f9b",
                                "name": "操作日志列表",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            },
                            {
                                "resourceId": "c85dfeeebe66400fb19449543ea2edd5",
                                "name": "部门列表",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090//dept/getList"
                            },
                            {
                                "resourceId": "2a225f90f6234247b062ea84cb42d1a9",
                                "name": "角色列表",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090//role/getList"
                            },
                            {
                                "resourceId": "9cf58ccc7de545488ca638153241b2ce",
                                "name": "系统公告",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090//notice/getList"
                            },
                            {
                                "resourceId": "d3819de75b814d75890a41478ee215bd",
                                "name": "单号规则管理",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090//busiCode/getList"
                            },
                            {
                                "resourceId": "90d20dd927f84851b1904ea5695d40d9",
                                "name": "字典管理",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090//lookup/getList"
                            }
                        ],
                        "resourceId": "8cc8bb4250a842a79959bbe9d91939c0",
                        "name": "系统管理",
                        "isLeaf": true
                    },
                    {
                        "next": [
                            {
                                "next": [
                                    {
                                        "resourceId": "3023bbc4f34f48d6b2dcc0d298546260",
                                        "name": "电子发票管理",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8102//invoiceDz/getList"
                                    },
                                    {
                                        "resourceId": "fa7f06c0c74b42a9970e6aee99c5569f",
                                        "name": "发票列表（原功能）",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8102//invoiceHistory/getList"
                                    },
                                    {
                                        "resourceId": "9241b1cec7c346c88b8b15aad1b32eec",
                                        "name": "纸质发票管理",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8102//invoiceZz/getList"
                                    }
                                ],
                                "resourceId": "ade11f191e7c4914a0dea224d08cc61c",
                                "name": "发票管理",
                                "isLeaf": true
                            },
                            {
                                "next": [
                                    {
                                        "resourceId": "f2335714ce6447f5aabea9967d759e69",
                                        "name": "Face++对账",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8102//faceRecognitionImg/getList"
                                    },
                                    {
                                        "resourceId": "210a7c28efb340e19d4d0f4108d7295e",
                                        "name": "充电日志",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8102//chargelog/getChargeLogList"
                                    },
                                    {
                                        "resourceId": "40a105f4e88c405fa1ef62b18ebcb297",
                                        "name": "电卡充值日志",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8102//chargelog/getChargeCardLogList"
                                    }
                                ],
                                "resourceId": "32dc00eda0ea417193080d8a58bf9dfe",
                                "name": "对账管理",
                                "isLeaf": true
                            },
                            {
                                "next": [
                                    {
                                        "resourceId": "5e1862f3240d46d6a6450225e388dec6",
                                        "name": "财务退款申请列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8102//payRefund/getPayRefundList"
                                    },
                                    {
                                        "resourceId": "3a56ea75542c47ba8ff01f1972d4e854",
                                        "name": "退款失败列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8102//payRefund/getPayRefundFailList"
                                    },
                                    {
                                        "resourceId": "48576d5d646a4fe9ae078c125d88e3b3",
                                        "name": "客服退款申请列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8102//payRefCheck/getList"
                                    },
                                    {
                                        "resourceId": "ecfd9f40fdf149fbb720fae1ec135edd",
                                        "name": "重复支付列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8102//rePay/getList"
                                    }
                                ],
                                "resourceId": "b4c7341c727a48b099f4a50ddbc7ab28",
                                "name": "退款管理",
                                "isLeaf": true
                            }
                        ],
                        "resourceId": "c87235f3cca8477f8c71c4195bed4837",
                        "name": "财务管理",
                        "isLeaf": true
                    },
                    {
                        "next": [
                            {
                                "resourceId": "6dae3377062a4f6db96d41e7f266eb12",
                                "name": "城市夜租列表",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:8173//nightCity/getNightCityList"
                            }
                        ],
                        "resourceId": "424db84e5a54416eaa0caf42b0af3173",
                        "name": "夜租管理",
                        "isLeaf": true
                    },
                    {
                        "next": [
                            {
                                "resourceId": "690c59d1e8be4c59ad9a30e9315d0244",
                                "name": "呼叫弹屏",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            },
                            {
                                "resourceId": "500183bcca214ac081b2470982331c67",
                                "name": "工单管理",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            }
                        ],
                        "resourceId": "df7792a05d2f42efa0fec9bddfe3c608",
                        "name": "客服",
                        "isLeaf": true
                    },
                    {
                        "next": [
                            {
                                "resourceId": "c95a808d32de4700b53ce09f1d5f60b4",
                                "name": "会员查询",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:8031//user/getUserList"
                            },
                            {
                                "resourceId": "c73bc59555d142ff8b1ee7dc45a989a0",
                                "name": "会员审核列表",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:8031//user/userCheckList"
                            },
                            {
                                "resourceId": "ef7c49a8700c409084ce2fc0d724063d",
                                "name": "账户详情列表",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:8031//user/balanceDetailList"
                            },
                            {
                                "resourceId": "ec059be84a0e464bbd0053f9f9a8190b",
                                "name": "员工审核统计列表",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:8031//user/checkCountList"
                            },
                            {
                                "resourceId": "fbdd2a4f1aad4bab82b925483d4137cd",
                                "name": "会员审核统计列表",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:8031//user/adminCheckList"
                            }
                        ],
                        "resourceId": "e2fd7e734ef64b048ce22acd5ca92b57",
                        "name": "会员管理",
                        "isLeaf": true
                    },
                    {
                        "next": [
                            {
                                "resourceId": "d2bf6f6d36774296b3842991f8719fe1",
                                "name": "订单列表",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:8173//order/toOrderListPage"
                            },
                            {
                                "resourceId": "6a2cd9e72022478fa08dcfeecb92e39e",
                                "name": "提醒管理",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            }
                        ],
                        "resourceId": "874ab6259b81438b9973544e24a388b1",
                        "name": "订单管理",
                        "isLeaf": true
                    },
                    {
                        "next": [
                            {
                                "resourceId": "90f230a8c9154da4ba00034b8fb0128e",
                                "name": "渠道数据统计",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            },
                            {
                                "resourceId": "4a948467745f408f8e0194b2aeec7186",
                                "name": "作战室",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            },
                            {
                                "resourceId": "65ebbdbd8732403aa3a72b8bcec935ac",
                                "name": "工单统计",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            }
                        ],
                        "resourceId": "9db0c27442e547418a37fd56c31eb85a",
                        "name": "数据统计管理",
                        "isLeaf": true
                    },
                    {
                        "next": [
                            {
                                "next": [
                                    {
                                        "resourceId": "59d57ca0345a4454add43200c276ea11",
                                        "name": "调度日志列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:9090/"
                                    },
                                    {
                                        "resourceId": "b119a0e0ac0a401da837d2cdfa95c9a0",
                                        "name": "车辆调度列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//dispatch/getDispatchList"
                                    },
                                    {
                                        "resourceId": "57b1aae2a7224bf79be55e68b4458630",
                                        "name": "待领取调度工单",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//dispatch/getUnClaimedDispatchList"
                                    },
                                    {
                                        "resourceId": "e7ae63fe36424b6bbe1f84558621db90",
                                        "name": "待执行调度工单",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//dispatch/getWaitExecuteList"
                                    },
                                    {
                                        "resourceId": "3079a495f3374ca595296fd965433371",
                                        "name": "执行中调度工单",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//dispatch/getExecutingList"
                                    },
                                    {
                                        "resourceId": "77ba86829fa14a9a93f986b70c9f3a75",
                                        "name": "已完成调度工单",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//dispatch/getCompleteDispatchList"
                                    },
                                    {
                                        "resourceId": "6f8d50108bfc4ea3aceb8f36d9febdb6",
                                        "name": "已取消调度工单",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//dispatch/getCancelDispatchList"
                                    },
                                    {
                                        "resourceId": "1a2e84fc6ddb442495ab09342f5df589",
                                        "name": "车辆调度工单生产规则 ",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//rule/getDispatchRule"
                                    },
                                    {
                                        "resourceId": "c2411ad652404865a55cd5c90ae37c01",
                                        "name": "车辆充电工单生产规则 ",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//rule/getChargeRule"
                                    }
                                ],
                                "resourceId": "9bca059401f449bda32056e9db410d9e",
                                "name": "调度管理",
                                "isLeaf": true
                            },
                            {
                                "resourceId": "e2f905f4a6b84bca8ae7acd368a19a06",
                                "name": "车辆年检",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            },
                            {
                                "next": [
                                    {
                                        "resourceId": "7cf1533d286c4030b066aa019b3c2f4a",
                                        "name": "车机列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8583//termiInfo/getList"
                                    }
                                ],
                                "resourceId": "4d4e61864a1840a3919e9014b42f0a41",
                                "name": "车机管理",
                                "isLeaf": true
                            },
                            {
                                "next": [
                                    {
                                        "resourceId": "407a7eb91e834761a603a5500c0f893a",
                                        "name": "建点列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8173//userPoint/doSearch"
                                    },
                                    {
                                        "resourceId": "c7baa5fe8a444a7285ae8b09f1b214fe",
                                        "name": "实体网点",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8173//parking/getParkingList"
                                    },
                                    {
                                        "resourceId": "4f10edcb2ff4434fadc1b978d0643ace",
                                        "name": "虚拟网点",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8173//parking/getVirtualParkingList"
                                    },
                                    {
                                        "resourceId": "3a1109b1722d443181e91c0d9f307826",
                                        "name": "商区管理",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8173//businessArea/getBusinessAreaList"
                                    },
                                    {
                                        "resourceId": "018a1212f1244814a3d00a56d48a2321",
                                        "name": "商圈运营人员配置",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8173//businessArea/getBusinessAreaOpList"
                                    },
                                    {
                                        "resourceId": "bce9e94a4958436db09a710bb4ce09db",
                                        "name": "异地车辆列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8173//car/getReturnCarList"
                                    },
                                    {
                                        "resourceId": "20720ccce7604fc0b4ac29eaa4c6fd38",
                                        "name": "车辆列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8173//car/getCarList"
                                    },
                                    {
                                        "resourceId": "d8365d2872114f8380bc1dca899f9e7a",
                                        "name": "车桩数据列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8173//dataCarStub/getList"
                                    },
                                    {
                                        "resourceId": "601583e2f03e4f749ebb972f5e5450c8",
                                        "name": "网点价格列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8173//dataParkingPrice/getList"
                                    },
                                    {
                                        "resourceId": "1b47c7f75d124cff83cf283770093741",
                                        "name": "车型管理",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8173//carType/getCarTypeList"
                                    }
                                ],
                                "resourceId": "c8e5c33898854788952602807797345e",
                                "name": "车辆管理",
                                "isLeaf": true
                            },
                            {
                                "resourceId": "1960b7d439fb4942bf4580da2daa82c6",
                                "name": "车辆保险",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            },
                            {
                                "next": [
                                    {
                                        "resourceId": "3ca75daca1a24af49d878c706a905cae",
                                        "name": "保险公司管理",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8173//accident/getInsuranceCompany"
                                    },
                                    {
                                        "resourceId": "4067953117d04ee59439418f8d2e4a5f",
                                        "name": "事故出险单",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8173//accident/getAccidentList"
                                    }
                                ],
                                "resourceId": "5a670d5765fe4719a7093e1164ad91b7",
                                "name": "事故管理",
                                "isLeaf": true
                            },
                            {
                                "next": [
                                    {
                                        "resourceId": "54f9c666694f473fa9cc96e550fc1e55",
                                        "name": "违章列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//peccancy/getPeccancyList"
                                    },
                                    {
                                        "resourceId": "1c2a81d885704a29b74667ddf07547eb",
                                        "name": "违章日志列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//peccancyLog/getPeccancyLogList"
                                    }
                                ],
                                "resourceId": "19a6131a69f144f6a6ed03e2707d9929",
                                "name": "违章管理",
                                "isLeaf": true
                            },
                            {
                                "resourceId": "a312261125664c459ba59a038662d801",
                                "name": "车辆监控",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:9090/"
                            },
                            {
                                "next": [
                                    {
                                        "next": [
                                            {
                                                "resourceId": "7563743ce91f498f9131c03c2e0acc1b",
                                                "name": "执行中充电工单",
                                                "isLeaf": false,
                                                "url": "http://192.168.10.34:8382//charge/getExecutingChargeList"
                                            },
                                            {
                                                "resourceId": "e4b774a3dde24a45879f23cf7cb90cd0",
                                                "name": "充电工单",
                                                "isLeaf": false,
                                                "url": "http://192.168.10.34:8382//charge/getChargeList"
                                            },
                                            {
                                                "resourceId": "8437a2ee294444738418095bfae13a01",
                                                "name": "已取消充电工单",
                                                "isLeaf": false,
                                                "url": "http://192.168.10.34:8382//charge/getCancelChargeList"
                                            },
                                            {
                                                "resourceId": "3ded04a3ac04495ea55d49ad3bc001a5",
                                                "name": "待执行充电工单",
                                                "isLeaf": false,
                                                "url": "http://192.168.10.34:8382//charge/getExecuteChargeList"
                                            },
                                            {
                                                "resourceId": "1d96f724a6eb4ae3b059b9c4197e4fef",
                                                "name": "车辆充电列表",
                                                "isLeaf": false,
                                                "url": "http://192.168.10.34:8382//charge/getCarChargeList"
                                            },
                                            {
                                                "resourceId": "afdcb61b2cab4a269ef5e86834379fcc",
                                                "name": "已完成充电工单",
                                                "isLeaf": false,
                                                "url": "http://192.168.10.34:8382//charge/getCompleteChargeList"
                                            },
                                            {
                                                "resourceId": "bc746d5866274e57bb56541a19d15dee",
                                                "name": "待领取充电工单",
                                                "isLeaf": false,
                                                "url": "http://192.168.10.34:8382//charge/getUnclaimedChargeList"
                                            }
                                        ],
                                        "resourceId": "3f5cf791ad5c4f79b752a17a0d3cca00",
                                        "name": "车辆充电",
                                        "isLeaf": true
                                    },
                                    {
                                        "next": [
                                            {
                                                "resourceId": "ae047cc71df5468c91131830e1d8b2cf",
                                                "name": "充电日志列表",
                                                "isLeaf": false,
                                                "url": "http://192.168.10.34:8382//chargeLog/getChargeLogList"
                                            },
                                            {
                                                "resourceId": "a4c26aac914743568957e77807e7b467",
                                                "name": "电卡充值日志列表",
                                                "isLeaf": false,
                                                "url": "http://192.168.10.34:8382//chargeLog/getChargeCardLogList"
                                            },
                                            {
                                                "resourceId": "6a0cf231cf9444b38b87e4c93db10199",
                                                "name": "电卡列表",
                                                "isLeaf": false,
                                                "url": "http://192.168.10.34:8173//electricCard/getElectricCardList"
                                            }
                                        ],
                                        "resourceId": "37e982cafd0f481da045aeeef2356cc5",
                                        "name": "电卡管理",
                                        "isLeaf": true
                                    }
                                ],
                                "resourceId": "d5b0a0af966546e984dd087c5589537c",
                                "name": "车辆充电管理",
                                "isLeaf": true
                            },
                            {
                                "next": [
                                    {
                                        "resourceId": "40e255d745574cc38cf5659af71c4a1b",
                                        "name": "充电桩群列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8173//stub/getStubGroupList"
                                    },
                                    {
                                        "resourceId": "0378f92098f44c418e9ae03e52b17d23",
                                        "name": "充电桩品牌维护",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8173//stub/getStubBrandList"
                                    }
                                ],
                                "resourceId": "530e47f349da431e8fd77a3d1ef9fd6a",
                                "name": "电桩管理",
                                "isLeaf": true
                            },
                            {
                                "next": [
                                    {
                                        "resourceId": "92fee5cdc8e74dd5814e37824f8b1818",
                                        "name": "版本控制列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//version/addVersion"
                                    }
                                ],
                                "resourceId": "efb5b349ce2d42c98d3c1145e050478b",
                                "name": "版本控制",
                                "isLeaf": true
                            },
                            {
                                "next": [
                                    {
                                        "resourceId": "b37788e0b7974b0da6ca0b1aea1e0a3c",
                                        "name": "车辆清洁列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//clean/getCleanList"
                                    },
                                    {
                                        "resourceId": "1aa1ea5ed0254da58d5a7e272af8a6f9",
                                        "name": "待领取清洁工单",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//clean/getUnClaimedCleanList"
                                    },
                                    {
                                        "resourceId": "3e630fa3d8aa4b54a51fb42a7dd68dec",
                                        "name": "待执行清洁工单",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//clean/getWaitExecuteList"
                                    },
                                    {
                                        "resourceId": "3297f5914d644d5e90314ae824e5bfa9",
                                        "name": "执行中清洁工单",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//clean/getExecutingList"
                                    },
                                    {
                                        "resourceId": "84cd80b07cbe4a04bd48d7e3becd3a3e",
                                        "name": "已完成清洁工单",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//clean/getCompleteCleanList"
                                    },
                                    {
                                        "resourceId": "291c5abfbfd542449a2e472abd8deb70",
                                        "name": "已取消清洁工单",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:8382//clean/getCancelCleanList"
                                    }
                                ],
                                "resourceId": "6e91c80f41f84f2ea3c59bdbc2a0f5bd",
                                "name": "清洁管理",
                                "isLeaf": true
                            }
                        ],
                        "resourceId": "eede0b4b230d477d8b31fab6833687dc",
                        "name": "车辆服务管理",
                        "isLeaf": true
                    },
                    {
                        "next": [
                            {
                                "next": [
                                    {
                                        "resourceId": "8f7b6d1159694efbaafc63e2e352ed1f",
                                        "name": "计费规则列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:9090/"
                                    },
                                    {
                                        "resourceId": "117f7a285fea46ddaffb1a33f5418225",
                                        "name": "计费时间设置",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:9090/"
                                    },
                                    {
                                        "resourceId": "7d0b8c535f5d4d0f92c2847cd352aae8",
                                        "name": "动态计费列表",
                                        "isLeaf": false,
                                        "url": "http://192.168.10.34:9090/"
                                    }
                                ],
                                "resourceId": "fd15816f59044e2f9bd0304f8d3b7d60",
                                "name": "计费管理",
                                "isLeaf": true
                            }
                        ],
                        "resourceId": "c96d5a42a15b4e87a47cdc7fcf117a8d",
                        "name": "计费管理",
                        "isLeaf": true
                    },
                    {
                        "next": [
                            {
                                "resourceId": "d86d36094270420194f825900461b534",
                                "name": "超时订单列表",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:8173//remind/getOverTimeOrderList"
                            },
                            {
                                "resourceId": "fe27fd2cf0ac4c62ad0a77f667576cc5",
                                "name": "超额订单列表",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:8173//remind/getOverPayOrderList"
                            },
                            {
                                "resourceId": "2a378bd761934ef58a19ca0f0c2f3ab7",
                                "name": "无订单列表提醒",
                                "isLeaf": false,
                                "url": "http://192.168.10.34:8173//remind/getNoOrderCarList"
                            }
                        ],
                        "resourceId": "0e7b85d365aa4278afa7d77ab2717e49",
                        "name": "提醒管理",
                        "isLeaf": true
                    },
                    {
                        "next": [
                            {
                                "next": [
                                    {
                                        "resourceId": "494ab3eea06e458f89e66b302eb4ddbc",
                                        "name": "城市分析",
                                        "isLeaf": false,
                                        "url": "http://10.19.8.73:8080//SQBIServer-web/LoginBI.do?bui=15AA71734A1D0960F650D22B6099140ADD60CBB0B7D48098"
                                    }
                                ],
                                "resourceId": "fe8d85177a384da8b20687be9dcf5e8d",
                                "name": "订单分析",
                                "isLeaf": true
                            }
                        ],
                        "resourceId": "df3c79c54dc3457da3b173992b3b6109",
                        "name": "统计分析",
                        "isLeaf": true
                    }
                ]

            }
        }
    }
</script>

<style scoped>
    .common-left {
        float: left;

        width: 200px;
        height: 100%;
        padding-top: 70px;
        margin-top: -70px;
    }
    @import "../styles/common-left.css";
</style>
