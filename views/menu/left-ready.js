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

            // 去掉一级菜单的颜色
            $(".tree-item-h3").each(function () {
                if($(this).parent().find(".tree-two-box").length == 0) {
                    $(this).removeClass("tree-three-active");
                    // $(this).css("background-image", "none");
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

            // 如果只有一级菜单
            $(".tree-item-h3").each(function () {
                if($(this).parent().find(".tree-two-box").length == 0) {
                    $(this).css("background-image", "none");
                }
            })

        })
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

    // 点击改变“可跳转菜单”字体颜色
    $(".tree-item-last").each(function () {
        $(this).click(function() {
            $(".tree-item-last").removeClass("tree-item-active");
            $(this).toggleClass("tree-item-active");
            // window.location.href = $(this).data("url");
            // window.open($(this).data("url"), "_blank");

            // 一个iframe操作另一个iframe
            // $("#right", parent.document.body).attr("src", $(this).data("url"));

        });
    })
    $(".tree-single").each(function () {
        $(this).click(function() {
            $(".tree-single").removeClass("tree-item-active");
            $(this).toggleClass("tree-item-active");

            // 一个iframe操作另一个iframe
            // $("#right", parent.document.body).attr("src", $(this).data("url"));

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

})

// 切换函数 - 切换右侧内容
function jump(url) {
    // document.getElementById("main").contentDocument.getElementById("right").src = url;
    $("#right", parent.document.body).attr("src", url);
}

