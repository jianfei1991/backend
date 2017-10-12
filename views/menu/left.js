// console.log("tree.js --> OK");

$(function () {
    // 一级菜单
    var h3 = $(".tree-item-h3");
    var treeTwoBox = $(".tree-two-box");
    // 二级菜单
    var h4 = $(".tree-item-h4");
    var treeThreeBox = $(".tree-three-box");
    // 三级菜单
    var h5 = $(".tree-item-h5");
    var treeFourBox = $(".tree-Four-box");
    // 四级菜单
    var h6 = $(".tree-item-h6");
    var treeFiveBox = $(".tree-Five-box");

    // 修复阴影bug
    // $(".tree-last-box").addClass(".tree-last-box-2");

    // 控制二级菜单开合
    h3.each(function(i) {
        $(this).click(function() {

            // 改变小图标方向
            $(this).parent().siblings().find(".tree-item-h3").css("background-image", "url(./images/big-r.png)");
            if ($(this).css("background-image").indexOf("big-r.png") != -1) {
                $(this).css("background-image", "url(./images/big-l.png)");
            } else {
                h3.css("background-image", "url(./images/big-r.png)");
                $(this).css("background-image", "url(./images/big-r.png)");

            }

            // 开合转换
            $(this).parent().find(".tree-two-box").slideToggle();

            // bug-1
            // 削减.tree-three-box的高度
            $(".tree-two-box>li").each(function () {
                if ($(this).find(".tree-item-h4").length == 0) {
                    // console.log($(this));
                    var liHei = $(this).height();
                    // $(this).height(liHei - 17);
                    // console.log($(this).height());
                    // console.log($(this).height()-16);
                }
            })

            // 去掉一级菜单的颜色
            $(".tree-item-h3").each(function () {
                if($(this).parent().find(".tree-two-box").length == 0) {
                    $(this).removeClass("tree-three-active");
                    $(this).css("background-image", "none");
                }
            })


            // 如果只有一级菜单
            // if ($(this).parent().find(".tree-two-box").length == 0) {
            if ($(this).parent().find("ul").length == 0) {
                console.log("ahha");
                // console.log($(this).parent().find(".tree-three-box"));
                $(this).css("background-image", "none");

                // 字体变色
                $(this).parent().parent().find(".tree-item-h3").removeClass("tree-item-active");
                $(this).toggleClass("tree-item-active");

                // 去掉其他一级菜单的背景图
                $(".tree-item-h3").each(function () {
                    if($(this).parent().find(".tree-two-box").length == 0) {
                        $(this).css("background-image", "none");
                    }
                })
            }

            // 关闭其他同级菜单
            $(this).parent().siblings().find(".tree-two-box").slideUp();

        })
    })

    // 如果没有二级菜单，设置三级菜单容器的margin-top
    $(".tree-item").each(function () {
        if ($(this).find(".tree-item-h4").length == 0) {
            // $(this).find(".tree-three-box").css("marginTop", 0);
            // $(this).find(".tree-item-h4").css("marginBottom", 0);
        }
    })

    // 控制三级菜单开合
    h4.each(function(i) {
        $(this).click(function() {
            console.log($(this));

            // 改变小图标方向
            $(this).parent().siblings().find(".tree-item-h4").css("background-image", "url(./images/mid-r.png)");
            if ($(this).css("background-image").indexOf("mid-r") != -1) {
                $(this).css("background-image", "url(./images/mid-l.png");
            } else {
                h4.css("background-image", "url(./images/mid-r.png)");
                $(this).css("background-image", "url(./images/mid-r.png)");
            }

            // 开合转换
            $(this).parent().find(".tree-three-box").slideToggle();
            // 关闭其他同级菜单
            $(this).parent().siblings().find(".tree-three-box").slideUp();

        })

    })
    // 控制四级菜单开合
    h5.each(function(i) {
        $(this).click(function() {
            console.log($(this));

            // 改变小图标方向
            $(this).parent().siblings().find(".tree-item-h5").css("background-image", "url(./images/mid-r.png)");
            if ($(this).css("background-image").indexOf("mid-r") != -1) {
                $(this).css("background-image", "url(./images/mid-l.png");
            } else {
                h5.css("background-image", "url(./images/mid-r.png)");
                $(this).css("background-image", "url(./images/mid-r.png)");
            }

            // 开合转换
            $(this).parent().find(".tree-four-box").slideToggle();
            // 关闭其他同级菜单
            $(this).parent().siblings().find(".tree-four-box").slideUp();

        })

    })
    // 控制五级菜单开合
    h6.each(function(i) {
        $(this).click(function() {
            console.log($(this));

            // 改变小图标方向
            $(this).parent().siblings().find(".tree-item-h6").css("background-image", "url(./images/mid-r.png)");
            if ($(this).css("background-image").indexOf("mid-r") != -1) {
                $(this).css("background-image", "url(./images/mid-l.png");
            } else {
                h6.css("background-image", "url(./images/mid-r.png)");
                $(this).css("background-image", "url(./images/mid-r.png)");
            }

            // 开合转换
            $(this).parent().find(".tree-five-box").slideToggle();
            // 关闭其他同级菜单
            $(this).parent().siblings().find(".tree-five-box").slideUp();

        })

    })

    // 点击改变三级菜单字体颜色
    $(".tree-item-last").each(function () {
        $(this).click(function() {
            $(".tree-item-last").removeClass("tree-item-active");
            $(this).toggleClass("tree-item-active");
            // window.location.href = $(this).data("url");
            // window.open($(this).data("url"), "_blank");

            // 我的-切换内容
            // 一个iframe操作另一个iframe
            $("#right", parent.document.body).attr("src", $(this).data("url"));

        });
    })
    $(".tree-single").each(function () {
        $(this).click(function() {
            $(".tree-single").removeClass("tree-item-active");
            $(this).toggleClass("tree-item-active");
            // window.location.href = $(this).data("url");
            // window.open($(this).data("url"), "_blank");

            // 我的-切换内容
            // 一个iframe操作另一个iframe
            $("#right", parent.document.body).attr("src", $(this).data("url"));

        });
    })

    // 如果只有二级菜单
    console.log($(".tree-item-h4").next().eq(33));
    $(".tree-item-h4").each(function () {
        if($(this).next().length == 0) {
            console.log("haha");
            // $(this).css("background-image", "none");
        }
    })
    // 如果只有一级菜单
    $(".tree-item-h3").each(function () {
        if($(this).parent().find(".tree-two-box").length == 0) {
            $(this).css("background-image", "none");
        }
    })

    // 去掉二级菜单的背景图
    function delBg() {
        console.log("jinruhanshu");
        if($(this).next().length == 0) {
            console.log($(this));
            $(this).css("background-image", "none");
        }
    }

    // 调换位置
    $(".tree-two-box").each(function () {
        var _this = $(this).children;
        _this.siblings().each(function () {
            if ($(this).css("class")) {
                var self = $(this);
                self.find(".tree-item-last").each(function () {
                    var that = $(this);
                    that.appendTo(self);
                });
            }
        })
    })

    // bug-3
    $(".tree-three-box").each(function () {
        if ($(this).siblings().find(".tree-last-box").length == 0 ) {
            $(this).css({"padding-top": 6, "padding-bottom": 6});

            // console.log($(this).parent().next());
            // console.log($(this).parent().next().find(".tree-item-last").length);
        } else if ($(this).parent().next().find(".tree-item-last").length != 0) {
            $(this).css({"padding-top": 6});
            var len = $(this).siblings().find(".tree-last-box").length;
            $(this).siblings().find(".tree-last-box").eq(len).css("padding-bottom", 6);

        }
    })
})

// 切换函数 - 切换右侧内容
function jump(url) {
    console.log(url);
    // document.getElementById("main").contentDocument.getElementById("right").src = url;
    $("#right", parent.document.body).attr("src", url);
}

// 主函数 - 生成菜单
function Tree(el, arr) {
    // 生成内层容器 - .tree-box、插入页面
    var treeBox = $('<div class="tree-box"></div>');
    treeBox.appendTo($(el));


    // 一层循环
    for (var i = 0; i < arr.length; i++) {
        // 生成一级条目 - .tree-item、插入
        var treeItem = $('<div class="tree-item"></div>');
        treeItem.appendTo(treeBox);

        // 一级的title - .tree-item-h3
        var first = arr[i].name;
        var h3 = $('<h3 class="tree-item-h3">' + first + '</h3>');
        h3.appendTo(treeItem);

        // 如果有二级菜单
        if (arr[i].next != undefined) {
            // 生成二级容器 - .tree-two-box
            var treeTwo = $('<ul class="tree-two-box"></ul>');
            treeTwo.appendTo(treeItem);


            // 二层循环 - 生成二级条目
            for (var j = 0; j < arr[i].next.length; j++) {
                // 如果有三级菜单，生成二级条目
                if (arr[i].next[j].next != undefined) {
                    // 空的li - 三级标题外层容器
                    var li = $('<li></li>');
                    li.appendTo(treeTwo);

                    // 二级的title - .tree-item-h4
                    var title = arr[i].next[j].name;
                    var h4 = $('<h4 class="tree-item-h4">' + title + '</h4>');
                    h4.appendTo(li);

                    // 如果有三级菜单
                    if (arr[i].next[j].next != undefined) {
                        // 生成三级容器
                        var treeThree = $('<ul class="tree-three-box"></ul>');
                        treeThree.appendTo(li);


                        // 三层循环 - 生成三级条目
                        for (var k = 0; k < arr[i].next[j].next.length; k++) {

                            // 如果有四级菜单，生成三级条目
                            if (arr[i].next[j].next[k].next != undefined) {
                                // 空的li - 三级标题外层容器
                                var lii = $('<li></li>');
                                lii.appendTo(treeThree);

                                // 三级的title - .tree-item-h5
                                var title = arr[i].next[j].next[k].name;
                                var h5 = $('<h5 class="tree-item-h5">' + title + '</h5>');
                                h5.appendTo(lii);

                                // 四级菜单容器
                                var treeFour = $('<ul class="tree-four-box"></ul>');
                                treeFour.appendTo(lii);


                                // 四层循环 - 生成四级条目
                                for (var m = 0; m < arr[i].next[j].next[k].next.length; m++) {
                                    // 如果有五级菜单，生成四级条目
                                    if (arr[i].next[j].next[k].next[m].next != undefined) {
                                        // 空的li - 四级标题外层容器
                                        var liii = $('<li></li>');
                                        liii.appendTo(treeFour);

                                        // 四级的title - .tree-item-h6
                                        var title = arr[i].next[j].next[k].next[m].name;
                                        var h6 = $('<h6 class="tree-item-h6">' + title + '</h6>');
                                        h6.appendTo(liii);


                                        // 五级菜单容器
                                        var treeFive = $('<ul class="tree-five-box tree-last-box"></ul>');
                                        treeFive.appendTo(liii);

                                        // 生成五级菜单
                                        for (var n = 0; n < arr[i].next[j].next[k].next[m].next.length; n++) {

                                            var fiveVal = arr[i].next[j].next[k].next[m].next[n].name;
                                            var fiveUrl = arr[i].next[j].next[k].next[m].next[n].url;
                                            var liiii = $('<li class="tree-item-last tree-single" data-url="' + fiveUrl + '" onclick="jump(' + 'http://localhost:8888/' + fiveUrl + ')">' + fiveVal + '</li>');
                                            liiii.appendTo(treeFive);
                                        }

                                    } else {
                                        // 如果没有五级菜单或四级菜单，只展示四级菜单
                                        var liVal = arr[i].next[j].next[k].next[m].name;
                                        var liUrl = arr[i].next[j].next[k].next[m].url;
                                        // var liEl4 = $('<li class="tree-item-last" data-url="' + liUrl + '" onclick="jump(' + 'http://localhost:8888/' + liUrl + ')">' + liVal + '</li>');
                                        var liEl4 = $('<h6 class="tree-item-h6-single tree-single" data-url="' + liUrl + '" onclick="jump(' + 'http://localhost:8888/' + liUrl + ')">' + liVal + '</h6>');
                                        // liEl4.css("background-color", "#dfe3e8");
                                        liEl4.appendTo(treeFour);

                                        if (liEl4.siblings().find("ul").length == 0) {
                                            treeFour.addClass("tree-last-box");
                                        }

                                    }

                                }
                            } else {
                                // 如果没有四级菜单，只展示三级菜单

                                var liVal = arr[i].next[j].next[k].name;
                                var liUrl = arr[i].next[j].next[k].url;
                                // var liEl3 = $('<li class="tree-item-last" data-url="' + liUrl + '" onclick="jump(' + 'http://localhost:8888/' + liUrl + ')">' + liVal + '</li>');
                                var liEl3 = $('<h5 class="tree-item-h5-single tree-single" data-url="' + liUrl + '" onclick="jump(' + 'http://localhost:8888/' + liUrl + ')">' + liVal + '</h5>');
                                liEl3.appendTo(treeThree);

                                if (liEl3.siblings().find("ul").length == 0) {
                                    // liEl3.css("background-color", "#dfe3e8");
                                    treeThree.addClass("tree-last-box");
                                }

                                }
                            }

                        }

                } else {

                    // 如果没有三级菜单，只展示二级菜单

                    var liVal = arr[i].next[j].name;
                    var liUrl = arr[i].next[j].url;

                    if (!!liUrl) {
                        // var liEl2 = $('<li class="tree-item-last" data-url="' + liUrl + '" onclick="jump(' + 'http://localhost:8888/' + liUrl + ')">' + liVal + '</li>');
                        var liEl2 = $('<h4 class="tree-item-h4-single tree-single" data-url="' + liUrl + '" onclick="jump(' + 'http://localhost:8888/' + liUrl + ')">' + liVal + '</h4>');
                    } else {
                        var liEl2 = $('<li class="tree-item-last">' + liVal + '</li>');

                    }
                    // liEl2.css("background-color", "#dfe3e8");
                    liEl2.appendTo(treeTwo);

                    if (liEl2.siblings().find("ul").length == 0) {
                        treeTwo.addClass("tree-last-box");
                    } else {
                        treeTwo.removeClass("tree-last-box");
                    }

                }  // 这个大括号看注释
            }  // 二层循环结束
        }  // 二级菜单判断结束，判断为真，进行二层循环，否则只有一级的
    }  // 一层循环结束
};  // 函数结束
