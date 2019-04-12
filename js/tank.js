let top1 = false, bottom1 = false, left1 = false, right1 = false;
let top2 = false, bottom2 = false, left2 = false, right2 = false;
//定义变量保存div方位
let flag = 1, flag2 = 1;//1:top  2:right  3:bottom  4:left
let state = 0,state2 = 0;//0:正常移动   1：可对角移动

//页面宽度和高度
let winWidth = parseInt($(".father").css("width"));
let winHeight = parseInt($(".father").css("height"));

//坦克移动方向控制（1号:w s a d    2号：↑ ↓ ← →）
$(document).keydown(function (event) {
    //keydown和keyup事件中event.which用于获取键值，event.keyCode已过时
    let keyNum = event.which;
    /**
     * 这里可能同时会按下两个方向键，所以不能只判断一个就立刻break，改用if判断，但是又不能删掉switch判断，
     * 因为多方向键判断仅仅在加强功能之后开启，当处于非加强状态时仍然采用switch判断
     * 解决方法：设置一个变量保存当前对象所处的状态，0：正常状态；1：加强状态。即当这个变量为0时，走switch，为1时，走if。
     */
    switch (keyNum) {
        case 65:
            left1 = true;
            break;
        case 87:
            top1 = true;
            break;
        case 68:
            right1 = true;
            break;
        case 83:
            bottom1 = true;
            break;
    }
});
$(document).keydown(function (event) {
    let keyNum = event.which;
    switch (keyNum) {
        case 38:
            top2 = true;
            break;
        case 39:
            right2 = true;
            break;
        case 40:
            bottom2 = true;
            break;
        case 37:
            left2 = true;
            break;
    }
});

$(document).keyup(function (event) {
    let keyNum2 = event.which;
    switch (keyNum2) {
        case 65:
            left1 = false;
            break;
        case 87:
            top1 = false;
            break;
        case 68:
            right1 = false;
            break;
        case 83:
            bottom1 = false;
            break;
    }
});
$(document).keyup(function (event) {
    let keyNum = event.which;
    switch (keyNum) {
        case 38:
            top2 = false;
            break;
        case 39:
            right2 = false;
            break;
        case 40:
            bottom2 = false;
            break;
        case 37:
            left2 = false;
            break;
    }
});

let wheelSpeed1 = 6, wheelSpeed2 = 6;
let ifShoot = 0,ifShoot2 = 0;//0：没有击中   1：被击中


//坦克移动
let moveNum1 = setInterval(function () {
    //判断是否被击中，如果被击中，则此过程无法移动和旋转
    if (ifShoot === 0) {
        if (left1 && !top1 && !bottom1 && !right1) {
            //这里的旋转角度都是相对原始位置而言的
            $("#divId").css("transform", "rotate(270deg)");
            if (parseInt($(divObj).css("left")) < wheelSpeed1) {
                /**
                 * animate用于改变参数属性，与其他改变属性方法不同，animate是动态改变，其他的为瞬时改变；
                 * animate第二个参数为延时，当animate在定时器中使用的时候一定要加上第二个参数，且数值必须小于定时器延时
                 * 否则定时器无效或延时错误
                 */
                $(divObj).animate({left: "-=0px"}, 1);
            } else {
                $(divObj).animate({left: "-=" + wheelSpeed1 + "px"}, 20, "linear", cashBoth);
                $(bloodTip).animate({left: "-=" + wheelSpeed1 + "px"}, 20, "linear");
            }
            flag = 4;
        } else if (left1 && top1 && !bottom1 && !right1) {
            if (state === 1) {
                $("#divId").css("transform", "rotate(315deg)");
                if (parseInt($(divObj).css("left")) < wheelSpeed1 || parseInt($(divObj).css("top")) < wheelSpeed1) {
                    $(divObj).animate({left: "-=0px", top: "-=0px"}, 1);
                } else {
                    $(divObj).animate({
                        left: "-=" + (wheelSpeed1-3) + "px",
                        top: "-=" + (wheelSpeed1-3) + "px"
                    }, 20, "linear", cashBoth);
                    $(bloodTip).animate({
                        left: "-=" + (wheelSpeed1-3) + "px",
                        top: "-=" + (wheelSpeed1-3) + "px"
                    }, 20, "linear");
                }
                flag = 0;
            } else {
                //这里的旋转角度都是相对原始位置而言的
                $("#divId").css("transform", "rotate(270deg)");
                if (parseInt($(divObj).css("left")) < wheelSpeed1) {
                    $(divObj).animate({left: "-=0px"}, 1);
                } else {
                    $(divObj).animate({left: "-=" + wheelSpeed1 + "px"}, 20, "linear", cashBoth);
                    $(bloodTip).animate({left: "-=" + wheelSpeed1 + "px"}, 20, "linear");
                }
                flag = 4;
            }
        } else if (left1 && bottom1 && !top1 && !right1) {
            if (state === 1) {
                $("#divId").css("transform", "rotate(225deg)");
                if (parseInt($(divObj).css("left")) < wheelSpeed1 || parseInt(winHeight - $(divObj).offset().top - 110) < wheelSpeed1) {
                    $(divObj).animate({left: "-=0px", top: "+=0px"}, 1);
                } else {
                    $(divObj).animate({
                        left: "-=" + (wheelSpeed1-3) + "px",
                        top: "+=" + (wheelSpeed1-3) + "px"
                    }, 20, "linear", cashBoth);
                    $(bloodTip).animate({
                        left: "-=" + (wheelSpeed1-3) + "px",
                        top: "+=" + (wheelSpeed1-3) + "px"
                    }, 20, "linear");
                }
                flag = 0;
            } else {
                $("#divId").css("transform", "rotate(180deg)");
                if (parseInt(winHeight - $(divObj).offset().top - 110) < wheelSpeed1) {
                    $(divObj).animate({top: "+=0px"}, 1);
                } else {
                    $(divObj).animate({top: "+=" + wheelSpeed1 + "px"}, 20, "linear", cashBoth);
                    $(bloodTip).animate({top: "+=" + wheelSpeed1 + "px"}, 20, "linear");
                }
                flag = 3;
            }
        } else if (top1 && !left1 && !right1 && !bottom1) {
            $("#divId").css("transform", "rotate(0)");
            if (parseInt($(divObj).css("top")) < wheelSpeed1) {
                $(divObj).animate({top: "-=0px"}, 1);
            } else {
                $(divObj).animate({top: "-=" + wheelSpeed1 + "px"}, 20, "linear", cashBoth);
                $(bloodTip).animate({top: "-=" + wheelSpeed1 + "px"}, 20, "linear");
            }
            flag = 1;
        } else if (top1 && right1 && !left1 && !bottom1) {
            if (state === 1) {
                $("#divId").css("transform", "rotate(45deg)");
                if (parseInt($(divObj).css("top")) < wheelSpeed1 || parseInt(winWidth - $(divObj).offset().left - 110) < wheelSpeed1) {
                    $(divObj).animate({left: "+=0px", top: "-=0px"}, 1);
                } else {
                    $(divObj).animate({
                        left: "+=" + (wheelSpeed1-3) + "px",
                        top: "-=" + (wheelSpeed1-3) + "px"
                    }, 20, "linear", cashBoth);
                    $(bloodTip).animate({
                        left: "+=" + (wheelSpeed1-3) + "px",
                        top: "-=" + (wheelSpeed1-3) + "px"
                    }, 20, "linear");
                }
                flag = 0;
            } else {
                $("#divId").css("transform", "rotate(0)");
                if (parseInt($(divObj).css("top")) < wheelSpeed1) {
                    $(divObj).animate({top: "-=0px"}, 1);
                } else {
                    $(divObj).animate({top: "-=" + wheelSpeed1 + "px"}, 20, "linear", cashBoth);
                    $(bloodTip).animate({top: "-=" + wheelSpeed1 + "px"}, 20, "linear");
                }
                flag = 1;
            }
        } else if (right1 && !left1 && !bottom1 && !top1) {
            $("#divId").css("transform", "rotate(90deg)");
            if (parseInt(winWidth - $(divObj).offset().left - 110) < wheelSpeed1) {
                $(divObj).animate({left: "+=0px"}, 1);
            } else {
                $(divObj).animate({left: "+=" + wheelSpeed1 + "px"}, 20, "linear", cashBoth);
                $(bloodTip).animate({left: "+=" + wheelSpeed1 + "px"}, 20, "linear");
            }
            flag = 2;
        } else if (right1 && bottom1 && !top1 && !left1) {
            if (state === 1) {
                $("#divId").css("transform", "rotate(135deg)");
                if (parseInt(winWidth - $(divObj).offset().left - 110) < wheelSpeed1 || parseInt(winHeight - $(divObj).offset().top - 110) < wheelSpeed1) {
                    $(divObj).animate({left: "+=0px", top: "-=0px"}, 1);
                } else {
                    $(divObj).animate({
                        left: "+=" + (wheelSpeed1-3) + "px",
                        top: "+=" + (wheelSpeed1-3) + "px"
                    }, 20, "linear", cashBoth);
                    $(bloodTip).animate({
                        left: "+=" + (wheelSpeed1-3) + "px",
                        top: "+=" + (wheelSpeed1-3) + "px"
                    }, 20, "linear");
                }
                flag = 0;
            } else {
                $("#divId").css("transform", "rotate(90deg)");
                if (parseInt(winWidth - $(divObj).offset().left - 110) < wheelSpeed1) {
                    $(divObj).animate({left: "+=0px"}, 1);
                } else {
                    $(divObj).animate({left: "+=" + wheelSpeed1 + "px"}, 20, "linear", cashBoth);
                    $(bloodTip).animate({left: "+=" + wheelSpeed1 + "px"}, 20, "linear");
                }
                flag = 2;
            }
        } else if (bottom1 && !left1 && !right1 && !top1) {
            $("#divId").css("transform", "rotate(180deg)");
            if (parseInt(winHeight - $(divObj).offset().top - 110) < wheelSpeed1) {
                $(divObj).animate({top: "+=0px"}, 1);
            } else {
                $(divObj).animate({top: "+=" + wheelSpeed1 + "px"}, 20, "linear", cashBoth);
                $(bloodTip).animate({top: "+=" + wheelSpeed1 + "px"}, 20, "linear");
            }
            flag = 3;
        }
    }
}, 50);
let moveNum2 = setInterval(function () {
    if (ifShoot2 === 0) {
        if (left2 && !top2 && !bottom2 && !right2) {
            //这里的旋转角度都是相对原始位置而言的
            $("#divId2").css("transform", "rotate(270deg)");
            if (parseInt($(divObj2).css("left")) < wheelSpeed2) {
                $(divObj2).animate({left: "-=0px"}, 1);
            } else {
                $(divObj2).animate({left: "-=" + wheelSpeed2 + "px"}, 20, "linear", cashBoth);
                $(bloodTip2).animate({left: "-=" + wheelSpeed2 + "px"}, 20, "linear");
            }
            flag2 = 4;
        } else if (left2 && top2 && !bottom2 && !right2) {
            if (state2 === 1) {
                $("#divId2").css("transform", "rotate(315deg)");
                if (parseInt($(divObj2).css("left")) < wheelSpeed2 || parseInt($(divObj2).css("top")) < wheelSpeed2) {
                    $(divObj2).animate({left: "-=0px", top: "-=0px"}, 1);
                } else {
                    $(divObj2).animate({
                        left: "-=" + (wheelSpeed2-3) + "px",
                        top: "-=" + (wheelSpeed2-3) + "px"
                    }, 20, "linear", cashBoth);
                    $(bloodTip2).animate({
                        left: "-=" + (wheelSpeed2-3) + "px",
                        top: "-=" + (wheelSpeed2-3) + "px"
                    }, 20, "linear");
                }
                flag2 = 0;
            }else {
                //这里的旋转角度都是相对原始位置而言的
                $("#divId2").css("transform", "rotate(270deg)");
                if (parseInt($(divObj2).css("left")) < wheelSpeed2) {
                    $(divObj2).animate({left: "-=0px"}, 1);
                } else {
                    $(divObj2).animate({left: "-=" + wheelSpeed2 + "px"}, 20, "linear", cashBoth);
                    $(bloodTip2).animate({left: "-=" + wheelSpeed2 + "px"}, 20, "linear");
                }
                flag2 = 4;
            }
        } else if (left2 && bottom2 && !top2 && !right2) {
            if (state2 === 1) {
                $("#divId2").css("transform", "rotate(225deg)");
                if (parseInt($(divObj2).css("left")) < wheelSpeed2 || parseInt(winHeight - $(divObj2).offset().top - 110) < wheelSpeed2) {
                    $(divObj2).animate({left: "-=0px", top: "+=0px"}, 1);
                } else {
                    $(divObj2).animate({
                        left: "-=" + (wheelSpeed2-3) + "px",
                        top: "+=" + (wheelSpeed2-3) + "px"
                    }, 20, "linear", cashBoth);
                    $(bloodTip2).animate({
                        left: "-=" + (wheelSpeed2-3) + "px",
                        top: "+=" + (wheelSpeed2-3) + "px"
                    }, 20, "linear");
                }
                flag2 = 0;
            } else {
                $("#divId2").css("transform", "rotate(180deg)");
                if (parseInt(winHeight - $(divObj2).offset().top - 110) < wheelSpeed2) {
                    $(divObj2).animate({top: "+=0px"}, 1);
                } else {
                    $(divObj2).animate({top: "+=" + wheelSpeed2 + "px"}, 20, "linear", cashBoth);
                    $(bloodTip2).animate({top: "+=" + wheelSpeed2 + "px"}, 20, "linear");
                }
                flag2 = 3;
            }
        } else if (top2 && !left2 && !right2 && !bottom2) {
            $("#divId2").css("transform", "rotate(0)");
            if (parseInt($(divObj2).css("top")) < wheelSpeed2) {
                $(divObj2).animate({top: "-=0px"}, 1);
            } else {
                $(divObj2).animate({top: "-=" + wheelSpeed2 + "px"}, 20, "linear", cashBoth);
                $(bloodTip2).animate({top: "-=" + wheelSpeed2 + "px"}, 20, "linear");
            }
            flag2 = 1;
        } else if (top2 && right2 && !left2 && !bottom2) {
            if (state2 === 1) {
                $("#divId2").css("transform", "rotate(45deg)");
                if (parseInt($(divObj2).css("top")) < wheelSpeed2 || parseInt(winWidth - $(divObj2).offset().left - 110) < wheelSpeed2) {
                    $(divObj2).animate({left: "+=0px", top: "-=0px"}, 1);
                } else {
                    $(divObj2).animate({
                        left: "+=" + (wheelSpeed2-3) + "px",
                        top: "-=" + (wheelSpeed2-3) + "px"
                    }, 20, "linear", cashBoth);
                    $(bloodTip2).animate({
                        left: "+=" + (wheelSpeed2-3) + "px",
                        top: "-=" + (wheelSpeed2-3) + "px"
                    }, 20, "linear");
                }
                flag2 = 0;
            } else {
                $("#divId2").css("transform", "rotate(0)");
                if (parseInt($(divObj2).css("top")) < wheelSpeed2) {
                    $(divObj2).animate({top: "-=0px"}, 1);
                } else {
                    $(divObj2).animate({top: "-=" + wheelSpeed2 + "px"}, 20, "linear", cashBoth);
                    $(bloodTip2).animate({top: "-=" + wheelSpeed2 + "px"}, 20, "linear");
                }
                flag2 = 1;
            }
        } else if (right2 && !left2 && !bottom2 && !top2) {
            $("#divId2").css("transform", "rotate(90deg)");
            if (parseInt(winWidth - $(divObj2).offset().left - 110) < wheelSpeed2) {
                $(divObj2).animate({left: "+=0px"}, 1);
            } else {
                $(divObj2).animate({left: "+=" + wheelSpeed2 + "px"}, 20, "linear", cashBoth);
                $(bloodTip2).animate({left: "+=" + wheelSpeed2 + "px"}, 20, "linear");
            }
            flag2 = 2;
        } else if (right2 && bottom2 && !top2 && !left2) {
            if (state2 === 1) {
                $("#divId2").css("transform", "rotate(135deg)");
                if (parseInt(winWidth - $(divObj2).offset().left - 110) < wheelSpeed2 || parseInt(winHeight - $(divObj2).offset().top - 110) < wheelSpeed2) {
                    $(divObj2).animate({left: "+=0px", top: "-=0px"}, 1);
                } else {
                    $(divObj2).animate({
                        left: "+=" + (wheelSpeed2-3) + "px",
                        top: "+=" + (wheelSpeed2-3) + "px"
                    }, 20, "linear", cashBoth);
                    $(bloodTip2).animate({
                        left: "+=" + (wheelSpeed2-3) + "px",
                        top: "+=" + (wheelSpeed2-3) + "px"
                    }, 20, "linear");
                }
                flag2 = 0;
            } else {
                $("#divId2").css("transform", "rotate(90deg)");
                if (parseInt(winWidth - $(divObj2).offset().left - 110) < wheelSpeed2) {
                    $(divObj2).animate({left: "+=0px"}, 1);
                } else {
                    $(divObj2).animate({left: "+=" + wheelSpeed2 + "px"}, 20, "linear", cashBoth);
                    $(bloodTip2).animate({left: "+=" + wheelSpeed2 + "px"}, 20, "linear");
                }
                flag2 = 2;
            }
        } else if (bottom2 && !left2 && !right2 && !top2) {
            $("#divId2").css("transform", "rotate(180deg)");
            if (parseInt(winHeight - $(divObj2).offset().top - 110) < wheelSpeed2) {
                $(divObj2).animate({top: "+=0px"}, 1);
            } else {
                $(divObj2).animate({top: "+=" + wheelSpeed2 + "px"}, 20, "linear", cashBoth);
                $(bloodTip2).animate({top: "+=" + wheelSpeed2 + "px"}, 20, "linear");
            }
            flag2 = 3;
        }
    }
}, 50);

//子弹发射按钮（1号：k   2号：enter）
let ziDanMove1,ziDanMove2,ziDanMove3,ziDanMove4,ziDanMove5,ziDanMove6,ziDanMove7,ziDanMove8;
$(document).keypress(function (event) {
    let keyNum = event.which;
    //alert(keyNum)
    if (keyNum === 107) {
        //获取divId的位置
        let divObjTop = $(divObj).offset().top;
        let divObjLeft = $(divObj).offset().left;
        switch (flag) {
            case 1:
                if ($("#zidanDiv1").get(0) === undefined) {
                    //设置子弹的位置
                    $(".father").append('<div id="zidanDiv1" style="margin: 0;width: 10px;height: 20px;border-radius: 50%;background-color:red;' +
                        'visibility: visible;position: relative;' +
                        'top: ' + (divObjTop - 20) + 'px;' +
                        'left: ' + (divObjLeft + 50) + 'px"></div>');
                }
                //发射子弹
                ziDanMove1 = setInterval(zidanfeiTop, 30);
                break;
            case 2:
                if ($("#zidanDiv2").get(0) === undefined) {
                    //设置子弹的位置
                    $(".father").append('<div id="zidanDiv2" style="margin: 0;width: 20px;height: 10px;border-radius: 50%;background-color:red;' +
                        'visibility: visible;position: relative;' +
                        'top: ' + (divObjTop + 50) + 'px;' +
                        'left: ' + (divObjLeft + 110) + 'px"></div>');
                }
                //发射子弹
                ziDanMove2 = setInterval(zidanfeiRight, 30);
                break;
            case 3:
                if ($("#zidanDiv3").get(0) === undefined) {
                    //设置子弹的位置
                    $(".father").append('<div id="zidanDiv3" style="margin: 0;width: 10px;height: 20px;border-radius: 50%;background-color:red;' +
                        'visibility: visible;position: relative;' +
                        'top: ' + (divObjTop + 110) + 'px;' +
                        'left: ' + (divObjLeft + 50) + 'px"></div>');
                }
                //发射子弹
                ziDanMove3 = setInterval(zidanfeiBottom, 30);
                break;
            case 4:
                if ($("#zidanDiv4").get(0) === undefined) {
                    //设置子弹的位置
                    $(".father").append('<div id="zidanDiv4" style="margin: 0;width: 20px;height: 10px;border-radius: 50%;background-color:red;' +
                        'visibility: visible;position: relative;' +
                        'top: ' + (divObjTop + 50) + 'px;' +
                        'left: ' + (divObjLeft - 20) + 'px"></div>');
                }
                //发射子弹
                ziDanMove4 = setInterval(zidanfeiLeft, 30);
                break;
        }
    }
});
$(document).keypress(function (event) {
    let keyNum = event.which;
    if (keyNum === 13) {
        //获取divId的位置
        let divObjTop = $(divObj2).offset().top;
        let divObjLeft = $(divObj2).offset().left;
        switch (flag2) {
            case 1:
                //设置子弹的位置
                if ($("#zidanDiv5").get(0) === undefined) {//当第一颗子弹消失之后才能发射第二颗子弹
                    $(".father").append('<div id="zidanDiv5" style="margin: 0;width: 10px;height: 20px;border-radius: 50%;background-color:black;' +
                        'visibility: visible;position: relative;' +
                        'top: ' + (divObjTop - 20) + 'px;' +
                        'left: ' + (divObjLeft + 50) + 'px"></div>');
                }
                //发射子弹
                ziDanMove5 = setInterval(zidanfeiTop2, 30);
                break;
            case 2:
                if ($("#zidanDiv6").get(0) === undefined) {
                    //设置子弹的位置
                    $(".father").append('<div id="zidanDiv6" style="margin: 0;width: 20px;height: 10px;border-radius: 50%;background-color:black;' +
                        'visibility: visible;position: relative;' +
                        'top: ' + (divObjTop + 50) + 'px;' +
                        'left: ' + (divObjLeft + 110) + 'px"></div>');
                }
                //发射子弹
                ziDanMove6 = setInterval(zidanfeiRight2, 30);
                break;
            case 3:
                if ($("#zidanDiv7").get(0) === undefined) {
                    //设置子弹的位置
                    $(".father").append('<div id="zidanDiv7" style="margin: 0;width: 10px;height: 20px;border-radius: 50%;background-color:black;' +
                        'visibility: visible;position: relative;' +
                        'top: ' + (divObjTop + 110) + 'px;' +
                        'left: ' + (divObjLeft + 50) + 'px"></div>');
                }
                //发射子弹
                ziDanMove7 = setInterval(zidanfeiBottom2, 30);
                break;
            case 4:
                if ($("#zidanDiv8").get(0) === undefined) {
                    //设置子弹的位置
                    $(".father").append('<div id="zidanDiv8" style="margin: 0;width: 20px;height: 10px;border-radius: 50%;background-color:black;' +
                        'visibility: visible;position: relative;' +
                        'top: ' + (divObjTop + 50) + 'px;' +
                        'left: ' + (divObjLeft - 20) + 'px"></div>');
                }
                //发射子弹
                ziDanMove8 = setInterval(zidanfeiLeft2, 30);
                break;
        }
    }
});

let zidanSpeed1 = 12, zidanSpeed2 = 12;
//1号坦克子弹移动
function zidanfeiTop() {
    let zidanTop = $("#zidanDiv1");
    //alert(zidanTop.get(0).offsetTop+":"+zidanTop.css("top"))
    if (zidanTop.get(0) !== undefined) {
        if (zidanTop.get(0).offsetTop <= -20) {
            zidanTop.remove();
        } else {
            zidanTop.animate({top: "-="+zidanSpeed1+"px", left: "-=0px"}, 20, "linear", function () {
                let divObj2Top = divObj2.offsetTop;
                let divObj2Left = divObj2.offsetLeft;
                let zidanObjTop = zidanTop.offset().top;
                let zidanObjLeft = zidanTop.offset().left;
                if (divObj2Left+120 > zidanObjLeft+10 && zidanObjLeft+10 > divObj2Left && divObj2Top+130 > zidanObjTop+20 && zidanObjTop+20 > divObj2Top) {
                    zidanTop.remove();
                    //判定掉血
                    tankLoseBlood2();
                }
            });
        }
    }
}
function zidanfeiRight() {
    let zidanRight = $("#zidanDiv2");
    if (zidanRight.get(0) !== undefined) {
        if (winWidth - zidanRight.get(0).offsetLeft <= -20) {
            zidanRight.remove();
        } else {
            zidanRight.animate({left: "+="+zidanSpeed1+"px", top: "-=0px"}, 20, "linear", function () {
                let divObj2Top = divObj2.offsetTop;
                let divObj2Left = divObj2.offsetLeft;
                let zidanObjTop = zidanRight.offset().top;
                let zidanObjLeft = zidanRight.offset().left;
                if (divObj2Left+130 > zidanObjLeft+20 && zidanObjLeft+20 > divObj2Left && divObj2Top+120 > zidanObjTop+10 && zidanObjTop+10 > divObj2Top) {
                    zidanRight.remove();
                    //判定掉血
                    tankLoseBlood2();
                }
            });
        }
    }
}
function zidanfeiBottom() {
    let zidanBottom = $("#zidanDiv3");
    if (zidanBottom.get(0) !== undefined) {
        if (winHeight - zidanBottom.get(0).offsetTop <= -20) {
            zidanBottom.remove();
        } else {
            zidanBottom.animate({top: "+="+zidanSpeed1+"px", left: "-=0px"}, 20, "linear", function () {
                let divObj2Top = divObj2.offsetTop;
                let divObj2Left = divObj2.offsetLeft;
                let zidanObjTop = zidanBottom.offset().top;
                let zidanObjLeft = zidanBottom.offset().left;
                if (divObj2Left+120 > zidanObjLeft+10 && zidanObjLeft+10 > divObj2Left && divObj2Top+130 > zidanObjTop+20 && zidanObjTop+20 > divObj2Top) {
                    zidanBottom.remove();
                    //判定掉血
                    tankLoseBlood2();
                }
            });
        }
    }
}
function zidanfeiLeft() {
    let zidanLeft = $("#zidanDiv4");
    if (zidanLeft.get(0) !== undefined) {
        if (zidanLeft.get(0).offsetLeft <= -20) {
            zidanLeft.remove();
        } else {
            zidanLeft.animate({left: "-="+zidanSpeed1+"px", top: "-=0px"}, 20, "linear", function () {
                let divObj2Top = divObj2.offsetTop;
                let divObj2Left = divObj2.offsetLeft;
                let zidanObjTop = zidanLeft.offset().top;
                let zidanObjLeft = zidanLeft.offset().left;
                if (divObj2Left+130 > zidanObjLeft+20 && zidanObjLeft+20 > divObj2Left && divObj2Top+120 > zidanObjTop+10 && zidanObjTop+10 > divObj2Top) {
                    zidanLeft.remove();
                    //判定掉血
                    tankLoseBlood2();
                }
            });
        }
    }
}

//2号坦克子弹移动
function zidanfeiTop2() {
    let zidanTop = $("#zidanDiv5");
    if (zidanTop.get(0) !== undefined) {
        if (zidanTop.get(0).offsetTop < -20) {
            zidanTop.remove();
        } else {
            zidanTop.animate({top: "-="+zidanSpeed2+"px", left: "-=0px"}, 20, "linear", function () {
                let divObjTop = divObj.offsetTop;
                let divObjLeft = divObj.offsetLeft;
                let zidanObjTop = zidanTop.offset().top;
                let zidanObjLeft = zidanTop.offset().left;
                if (divObjLeft+120 > zidanObjLeft+10 && zidanObjLeft+10 > divObjTop && divObjTop+130 > zidanObjTop+20 && zidanObjTop+20 > divObjTop) {
                    zidanTop.remove();
                    //判定掉血
                    tankLoseBlood1();
                }
            });
        }
    }
}
function zidanfeiRight2() {
    let zidanRight = $("#zidanDiv6");
    if (zidanRight.get(0) !== undefined) {
        if (winWidth - zidanRight.get(0).offsetLeft <= -20) {
            zidanRight.remove();
        } else {
            zidanRight.animate({left: "+="+zidanSpeed2+"px", top: "-=0px"}, 20, "linear", function () {
                let divObjTop = divObj.offsetTop;
                let divObjLeft = divObj.offsetLeft;
                let zidanObjTop = zidanRight.offset().top;
                let zidanObjLeft = zidanRight.offset().left;
                if (divObjLeft+130 > zidanObjLeft+20 && zidanObjLeft+20 > divObjLeft && divObjTop+120 > zidanObjTop+10 && zidanObjTop+10 > divObjTop) {
                    zidanRight.remove();
                    tankLoseBlood1();
                }
            });
        }
    }
}
function zidanfeiBottom2() {
    let zidanBottom = $("#zidanDiv7");
    if (zidanBottom.get(0) !== undefined) {
        if (winHeight - zidanBottom.get(0).offsetTop <= -20) {
            zidanBottom.remove();
        } else {
            zidanBottom.animate({top: "+="+zidanSpeed2+"px", left: "-=0px"}, 20, "linear", function () {
                let divObjTop = divObj.offsetTop;
                let divObjLeft = divObj.offsetLeft;
                let zidanObjTop = zidanBottom.offset().top;
                let zidanObjLeft = zidanBottom.offset().left;
                if (divObjLeft+120 > zidanObjLeft+10 && zidanObjLeft+10 > divObjLeft && divObjTop+130 > zidanObjTop+20 && zidanObjTop+20 > divObjTop) {
                    zidanBottom.remove();
                    tankLoseBlood1();
                }
            });
        }
    }
}
function zidanfeiLeft2() {
    let zidanLeft = $("#zidanDiv8");
    if (zidanLeft.get(0) !== undefined) {
        if (zidanLeft.get(0).offsetLeft <= -20) {
            zidanLeft.remove();
        } else {
            zidanLeft.animate({left: "-=12px", top: "-=0px"}, zidanSpeed2, "linear", function () {
                let divObjTop = divObj.offsetTop;
                let divObjLeft = divObj.offsetLeft;
                let zidanObjTop = zidanLeft.offset().top;
                let zidanObjLeft = zidanLeft.offset().left;
                if (divObjLeft+130 > zidanObjLeft+20 && zidanObjLeft+20 > divObjLeft && divObjTop+120 > zidanObjTop+10 && zidanObjTop+10 > divObjTop) {
                    zidanLeft.remove();
                    tankLoseBlood1();
                }
            });
        }
    }
}

//1号2号相撞
function cashBoth() {
    let divObjTop = divObj.offsetTop;
    let divObjLeft = divObj.offsetLeft;
    let divObj2Top = divObj2.offsetTop;
    let divObj2Left = divObj2.offsetLeft;
    if (divObj2Left+220 >= divObjLeft+110 && divObjLeft+110 >= divObj2Left && divObj2Top+220 >= divObjTop+110 && divObjTop+110 >= divObj2Top) {
        //坦克相撞
        clearInterval(moveNum1);
        clearInterval(moveNum2);
        tankDestroy1();
        tankDestroy2();
    }
}