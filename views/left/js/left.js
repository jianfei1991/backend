// console.log("tree.js --> OK");

$(function () {
    // 一级菜单
    var h3 = $(".tree-item-h3");
    var treeTwoBox = $(".tree-two-box");
    // 二级菜单
    var h4 = $(".tree-item-h4");
    var treeThreeBox = $(".tree-three-box");

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

            // 如果没有二级菜单
            if ($(this).parent().find(".tree-item-h4").length == 0) {
                console.log($(this).parent().find(".tree-three-box"));
                $(this).parent().find(".tree-three-box").slideDown(1000);
                $(this).parent().find(".tree-three-box").css("marginTop", 0);
            }

            // 关闭其他同级菜单
            $(this).parent().siblings().find(".tree-two-box").slideUp();

        })
    })

    // 如果没有二级菜单，设置三级菜单容器的margin-top
    $(".tree-item").each(function () {
        if ($(this).find(".tree-item-h4").length == 0) {
            $(this).find(".tree-three-box").css("marginTop", 0);
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

    // 点击改变三级菜单字体颜色
    $(".tree-item-li").each(function () {
        $(this).click(function() {
            $(".tree-item-li").removeClass("tree-three-active");
            $(this).toggleClass("tree-three-active");
            // window.location.href = $(this).data("url");
            // window.open($(this).data("url"), "_blank");

            // 一个iframe操作另一个iframe
            // console.log($(window.frames["right"].document.body));
            var abc = window.parent.document.querySelector("#right");
            console.log(abc);
            $("#right", parent.document.body).attr("src", $(this).data("url"));

        });
    })

    // 如果只有二级菜单
    console.log($(".tree-item-h4").next().eq(33));
    $(".tree-item-h4").each(function () {
        if($(this).next().length == 0) {
            console.log("haha");
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

// 切换函数
function jump(url){
    document.getElementById('mainFrame').contentDocument.getElementById('rightFrame').src=url;
}

// 主函数
function Tree(el, arr) {
    // 生成内层容器、插入页面
    var treeBox = $('<div class="tree-box"></div>');
    treeBox.appendTo($(el));


    // 一层循环
    for (var i = 0; i < arr.length; i++) {
        // 生成一级条目、插入
        var treeItem = $('<div class="tree-item"></div>');
        treeItem.appendTo(treeBox);

        // 一级的
        var first = arr[i].first.name;
        var h3 = $('<h3 class="tree-item-h3">' + first + '</h3>');
        h3.appendTo(treeItem);

        if (arr[i].second != undefined) {
            // 生成二级容器
            var treeTwo = $('<ul class="tree-two-box"></ul>');
            treeTwo.appendTo(treeItem);


            // 二层循环 - 生成二级条目
            for (var j = 0; j < arr[i].second.length; j++) {
                // 空的li - 三级标题外层容器
                var li = $('<li></li>');
                li.appendTo(treeTwo);

                // 二级真实存在的情况
                if (arr[i].second[j].title != undefined) {
                    // 二级的title
                    var title = arr[i].second[j].title.name;
                    var h4 = $('<h4 class="tree-item-h4">' + title + '</h4>');
                    h4.appendTo(li);

                    if (arr[i].second[j].three != undefined) {
                        // // 三级标题容器
                        // var treeThree = $('<ul class="tree-three-box"></ul>');
                        // treeThree.appendTo(li);
                        // // 三层循环 - 生成三级条目
                        // for (var k = 0; k < arr[i].second[j].three.length; k++) {
                        //     var threeVal = arr[i].second[j].three[k];
                        //     var lii = $('<li class="tree-item-li">' + threeVal + '</li>');
                        //     lii.appendTo(treeThree);
                        // }
                    }
                }
                // 无论有无二级菜单
                // 三级标题容器
                var treeThree = $('<ul class="tree-three-box"></ul>');
                treeThree.appendTo(li);
                // 三层循环 - 生成三级条目
                for (var k = 0; k < arr[i].second[j].three.length; k++) {
                    var threeVal = arr[i].second[j].three[k].name;
                    var treeUrl = arr[i].second[j].three[k].url;
                    var lii = $('<li class="tree-item-li" data-url="' + treeUrl + '" onclick="jump(' + treeUrl + ')">' + threeVal + '</li>');
                    lii.appendTo(treeThree);
                }

            }
        }

    }
};
