// 主函数 - 生成菜单
function Tree(el, arr) {
    // 生成内层容器 - .tree-box、插入页面
    var treeBox = $('<div class="tree-box"></div>');
    treeBox.appendTo($(el));

    // 根路径
    var rootPath = getRootPath();

    // 一层循环
    for (var i = 0; i < arr.length; i++) {
        // 生成一级条目 - .tree-item、插入
        var treeItem = $('<div class="tree-item"></div>');
        treeItem.appendTo(treeBox);

        // 一级的title - .tree-item-h3
        var first = arr[i].name;
        var firstUrl = arr[i].url;
        console.log(i + firstUrl);
        if (!!firstUrl) {
            var h3 = $('<h3 class="tree-item-h3 tree-jump" data-url="' + rootPath + firstUrl + '" onclick="jump(\'' + rootPath + firstUrl + '\')">' + first + '</h3>');
        } else {
            var h3 = $('<h3 class="tree-item-h3 tree-jump">' + first + '</h3>');
        }
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
                    var h4 = $('<h4 class="tree-item-h4 tree-jump">' + title + '</h4>');
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
                                var h5 = $('<h5 class="tree-item-h5 tree-jump">' + title + '</h5>');
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
                                        var h6 = $('<h6 class="tree-item-h6 tree-jump">' + title + '</h6>');
                                        h6.appendTo(liii);


                                        // 五级菜单容器
                                        var treeFive = $('<ul class="tree-five-box tree-last-box"></ul>');
                                        treeFive.appendTo(liii);

                                        // 生成五级菜单
                                        for (var n = 0; n < arr[i].next[j].next[k].next[m].next.length; n++) {

                                            var fiveVal = arr[i].next[j].next[k].next[m].next[n].name;
                                            var fiveUrl = arr[i].next[j].next[k].next[m].next[n].url;
                                            var liiii = $('<li class="tree-item-last tree-single tree-jump" data-url="' + fiveUrl + '" onclick="jump(\'' + rootPath + fiveUrl + '\')">' + fiveVal + '</li>');
                                            liiii.appendTo(treeFive);
                                        }

                                    } else {
                                        // 如果没有五级菜单或四级菜单，只展示四级菜单
                                        var liVal = arr[i].next[j].next[k].next[m].name;
                                        var liUrl = arr[i].next[j].next[k].next[m].url;
                                        // var liEl4 = $('<li class="tree-item-last" data-url="' + liUrl + '" onclick="jump(' + 'http://localhost:8080' + liUrl + ')">' + liVal + '</li>');
                                        if (!!liUrl) {
                                            var liEl4 = $('<h6 class="tree-item-h6-single tree-single tree-jump" data-url="' + liUrl + '" onclick="jump(\'' + rootPath + liUrl + '\')">' + liVal + '</h6>');
                                        } else {
                                            var liEl4 = $('<h6 class="tree-item-h6-single tree-single">' + liVal + '</h6>');
                                        }
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
                                // var liEl3 = $('<li class="tree-item-last" data-url="' + liUrl + '" onclick="jump(' + 'http://localhost:8080' + liUrl + ')">' + liVal + '</li>');
                                if (!!liUrl) {
                                    var liEl3 = $('<h5 class="tree-item-h5-single tree-single tree-jump" data-url="' + liUrl + '" onclick="jump(\'' + rootPath + liUrl + '\')">' + liVal + '</h5>');
                                } else {
                                    var liEl3 = $('<h5 class="tree-item-h5-single tree-single">' + liVal + '</h5>');
                                }
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
                        // var liEl2 = $('<li class="tree-item-last" data-url="' + liUrl + '" onclick="jump(' + 'http://localhost:8080' + liUrl + ')">' + liVal + '</li>');
                        var liEl2 = $('<h4 class="tree-item-h4-single tree-single tree-jump" data-url="' + liUrl + '" onclick="jump(\'' + rootPath + liUrl + '\')">' + liVal + '</h4>');
                    } else {
                        var liEl2 = $('<h4 class="tree-item-h4-single tree-single">' + liVal + '</h4>');

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

// 获取项目根路径
function getRootPath() {
    // 获取当前网址，
    var fullPath = window.location.href;
    // 获取主机地址之后的目录
    var pathName = window.location.pathname;
    var idx = fullPath.indexOf(pathName);
    // 获取主机地址
    var hostPath = fullPath.substring(0, idx);

    return hostPath;
}
