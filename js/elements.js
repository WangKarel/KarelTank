//页面宽度和高度
let winWidth2 = parseInt($(".father").css("width"));
let winHeight2 = parseInt($(".father").css("height"));

//随机加强效果
let move60,move100,shoot60,shoot100,moveOPP,addBlood,sing;
let strong = setInterval(function () {
    let times = 8;
    let chars = Math.floor(Math.random() * 6);//0-4整数
    //alert(chars);
    if (chars % 5 === 0) {//移速+60%
        $(moveFasterObj).css({
            display:"block",
            width:"60px",
            height:"60px"
        });
        $(moveFasterObj).find("h5").text("移速+60%");
        $(moveFasterObj).find(".moveFaster").text("(7s)");
        moveFasterObj.style.left = Math.random() * (winWidth2 - 100) + "px";
        moveFasterObj.style.top = Math.random() * (winHeight2 - 100) + "px";
        //alert(moveFasterObj.offsetTop+":"+ moveFasterObj.style.top)
        //设置定时器，每隔一段时间判断坦克和加强div是否有重叠
        move60 = setInterval(getMoveSpeed, 40);
        //设置每秒减1,7s后消失
        sing = setInterval(function () {
            times--;
            if (times >= 0) $(moveFasterObj).find(".moveFaster").text("("+times+"s)");
            else {
                $(moveFasterObj).css("display", "none");
                clearInterval(sing);
            }
        },1000)
    } else if (chars % 5 === 1) {//射速+60%
        $(shootFasterObj).css({
            display:"block",
            width:"60px",
            height:"60px"
        });
        $(shootFasterObj).find("h5").text("射速+60%");
        $(shootFasterObj).find(".shootFaster").text("(7s)");
        shootFasterObj.style.left = Math.random() * (winWidth2 - 100) + "px";
        shootFasterObj.style.top = Math.random() * (winHeight2 - 100) + "px";
        //alert(shootFasterObj.offsetTop+":"+ shootFasterObj.style.top)
        shoot60 = setInterval(getShootSpeed, 40);
        //设置每秒减1,7s后消失
        sing = setInterval(function () {
            times--;
            if (times >= 0) $(shootFasterObj).find(".shootFaster").text("("+times+"s)");
            else {
                $(shootFasterObj).css("display", "none");
                clearInterval(sing);
            }
        },1000)
    } else if (chars % 5 === 2) {//移速+100%
        $(moveFasterObj).css({
            display:"block",
            width:"60px",
            height:"60px"
        });
        $(moveFasterObj).find("h5").text("移速+100%");
        $(moveFasterObj).find(".moveFaster").text("(7s)");
        moveFasterObj.style.left = Math.random() * (winWidth2 - 100) + "px";
        moveFasterObj.style.top = Math.random() * (winHeight2 - 100) + "px";
        //alert(moveFasterObj.offsetTop+":"+ moveFasterObj.style.top)
        //设置定时器，每隔一段时间判断坦克和加强div是否有重叠
        move100 = setInterval(getMoveSpeed2, 40);
        //设置每秒减1,7s后消失
        sing = setInterval(function () {
            times--;
            if (times >= 0) $(moveFasterObj).find(".moveFaster").text("("+times+"s)");
            else {
                $(moveFasterObj).css("display", "none");
                clearInterval(sing);
            }
        },1000)
    } else if (chars % 5 === 3) {//射速+100%
        $(shootFasterObj).css({
            display:"block",
            width:"60px",
            height:"60px"
        });
        $(shootFasterObj).find("h5").text("射速+100%");
        $(shootFasterObj).find(".shootFaster").text("(7s)");
        shootFasterObj.style.left = Math.random() * (winWidth2 - 100) + "px";
        shootFasterObj.style.top = Math.random() * (winHeight2 - 100) + "px";
        //alert(shootFasterObj.offsetTop+":"+ shootFasterObj.style.top)
        shoot100 = setInterval(getShootSpeed2, 40);
        //设置每秒减1,7s后消失
        sing = setInterval(function () {
            times--;
            if (times >= 0) $(shootFasterObj).find(".shootFaster").text("("+times+"s)");
            else {
                $(shootFasterObj).css("display", "none");
                clearInterval(sing);
            }
        },1000)
    }else if (chars % 5 === 4) {//对角移动
        $(moveOppositeObj).css({
            display:"block",
            width:"60px",
            height:"60px"
        });
        $(moveOppositeObj).find("h5").text("对角移动");
        $(moveOppositeObj).find(".moveOpposite").text("(7s)");
        moveOppositeObj.style.left = Math.random() * (winWidth2 - 100) + "px";
        moveOppositeObj.style.top = Math.random() * (winHeight2 - 100) + "px";
        //alert(moveOppositeObj.offsetTop+":"+ moveOppositeObj.style.top)
        moveOPP = setInterval(getMoveAcross, 40);
        //设置每秒减1,7s后消失
        sing = setInterval(function () {
            times--;
            if (times >= 0) $(moveOppositeObj).find(".moveOpposite").text("("+times+"s)");
            else {
                $(moveOppositeObj).css("display", "none");
                clearInterval(sing);
            }
        },1000)
    }else if (chars % 5 === 5) {//回血
        $(getPillObj).css({
            display:"block",
            width:"60px",
            height:"60px"
        });
        $(getPillObj).find("h5").text("回复生命");
        $(getPillObj).find(".getPill").text("(7s)");
        getPillObj.style.left = Math.random() * (winWidth2 - 100) + "px";
        getPillObj.style.top = Math.random() * (winHeight2 - 100) + "px";
        addBlood = setInterval(getBlood, 40);
        //设置每秒减1,10s后消失
        sing = setInterval(function () {
            times--;
            if (times >= 0) $(getPillObj).find(".getPill").text("("+times+"s)");
            else {
                $(getPillObj).css("display", "none");
                clearInterval(sing);
            }
        },1000)
    }
}, 16000);

//随机激光效果
let light;
let lightStrong = setInterval(function () {
    if (Math.random() < 0.5) {//纵向激光
        let chars = Math.floor(Math.random() * 7) + 1;//1-7整数
        $(burnLightXObj).css("display","block");
        burnLightXObj.style.left = Math.random() * (winWidth2 - 100) + "px";
        if (Math.random() > 0.5) {
            burnLightXObj.style.top = "0px";
        }
        switch (chars) {
            case 1:
                $(burnLightXObj).css("background-color","#B21016");
                burnLightXObj.style.animation = "light1 800ms linear infinite";
                //判断坦克和激光是否相撞
                light = setInterval(function () {
                    lightTankCash();
                },50);
                //开始发射激光
                setTimeout(function () {
                    lightStartX();
                },2000);
                break;
            case 2:
                $(burnLightXObj).css("background-color","#BF5B16");
                burnLightXObj.style.animation = "light2 800ms linear infinite";
                //判断坦克和激光是否相撞
                light = setInterval(function () {
                    lightTankCash();
                },50);
                //开始发射激光
                setTimeout(function () {
                    lightStartX();
                },2000);
                break;
            case 3:
                $(burnLightXObj).css("background-color","#138535");
                burnLightXObj.style.animation = "light3 800ms linear infinite";
                //判断坦克和激光是否相撞
                light = setInterval(function () {
                    lightTankCash();
                },50);
                //开始发射激光
                setTimeout(function () {
                    lightStartX();
                },2000);
                break;
            case 4:
                $(burnLightXObj).css("background-color","#007AAE");
                burnLightXObj.style.animation = "light4 800ms linear infinite";
                //判断坦克和激光是否相撞
                light = setInterval(function () {
                    lightTankCash();
                },50);
                //开始发射激光
                setTimeout(function () {
                    lightStartX();
                },2000);
                break;
            case 5:
                $(burnLightXObj).css("background-color","#232B99");
                burnLightXObj.style.animation = "light5 800ms linear infinite";
                //判断坦克和激光是否相撞
                light = setInterval(function () {
                    lightTankCash();
                },50);
                //开始发射激光
                setTimeout(function () {
                    lightStartX();
                },2000);
                break;
            case 6:
                $(burnLightXObj).css("background-color","#7A297B");
                burnLightXObj.style.animation = "light6 800ms linear infinite";
                //判断坦克和激光是否相撞
                light = setInterval(function () {
                    lightTankCash();
                },50);
                //开始发射激光
                setTimeout(function () {
                    lightStartX();
                },2000);
                break;
            case 7:
                $(burnLightXObj).css("background-color","#BFB500");
                burnLightXObj.style.animation = "light7 800ms linear infinite";
                //判断坦克和激光是否相撞
                light = setInterval(function () {
                    lightTankCash();
                },50);
                //开始发射激光
                setTimeout(function () {
                    lightStartX();
                },2000);
                break;
        }
    }else {//横向激光
        let chars = Math.floor(Math.random() * 7) + 1;//1-7整数
        $(burnLightYObj).css("display","block");
        burnLightYObj.style.top = Math.random() * (winHeight - 100) + "px";
        if (Math.random() > 0.5) {
            burnLightYObj.style.left = "0px";
        }
        switch (chars) {
            case 1:
                $(burnLightYObj).css("background-color","#B21016");
                burnLightYObj.style.animation = "light1 800ms linear infinite";
                //判断坦克和激光是否相撞
                light = setInterval(function () {
                    lightTankCash();
                },50);
                //开始发射激光
                setTimeout(function () {
                    lightStartY();
                },2000);
                break;
            case 2:
                $(burnLightYObj).css("background-color","#BF5B16");
                burnLightYObj.style.animation = "light2 800ms linear infinite";
                //判断坦克和激光是否相撞
                light = setInterval(function () {
                    lightTankCash();
                },50);
                //开始发射激光
                setTimeout(function () {
                    lightStartY();
                },2000);
                break;
            case 3:
                $(burnLightYObj).css("background-color","#138535");
                burnLightYObj.style.animation = "light3 800ms linear infinite";
                //判断坦克和激光是否相撞
                light = setInterval(function () {
                    lightTankCash();
                },50);
                //开始发射激光
                setTimeout(function () {
                    lightStartY();
                },2000);
                break;
            case 4:
                $(burnLightYObj).css("background-color","#007AAE");
                burnLightYObj.style.animation = "light4 800ms linear infinite";
                //判断坦克和激光是否相撞
                light = setInterval(function () {
                    lightTankCash();
                },50);
                //开始发射激光
                setTimeout(function () {
                    lightStartY();
                },2000);
                break;
            case 5:
                $(burnLightYObj).css("background-color","#232B99");
                burnLightYObj.style.animation = "light5 800ms linear infinite";
                //判断坦克和激光是否相撞
                light = setInterval(function () {
                    lightTankCash();
                },50);
                //开始发射激光
                setTimeout(function () {
                    lightStartY();
                },2000);
                break;
            case 6:
                $(burnLightYObj).css("background-color","#7A297B");
                burnLightYObj.style.animation = "light6 800ms linear infinite";
                //判断坦克和激光是否相撞
                light = setInterval(function () {
                    lightTankCash();
                },50);
                //开始发射激光
                setTimeout(function () {
                    lightStartY();
                },2000);
                break;
            case 7:
                $(burnLightYObj).css("background-color","#BFB500");
                burnLightYObj.style.animation = "light7 800ms linear infinite";
                //判断坦克和激光是否相撞
                light = setInterval(function () {
                    lightTankCash();
                },50);
                //开始发射激光
                setTimeout(function () {
                    lightStartY();
                },2000);
                break;
        }
    }
},10000);


//激光和坦克相撞
function lightTankCash() {
    let divObjTop = divObj.offsetTop;
    let divObjLeft = divObj.offsetLeft;
    let divObj2Top = divObj2.offsetTop;
    let divObj2Left = divObj2.offsetLeft;
    //激光高度和宽度
    let lightH = parseInt($(burnLightXObj).css("height"));
    let lightW = parseInt($(burnLightXObj).css("width"));
    let lightXTop = burnLightXObj.offsetTop;
    let lightXLeft = burnLightXObj.offsetLeft;
    let lightYTop = burnLightYObj.offsetTop;
    let lightYLeft = burnLightYObj.offsetLeft;
    if (lightXLeft+lightW+110>divObjLeft+110 && divObjLeft+110>lightXLeft && lightXTop+lightH+110>divObjTop+110 && divObjTop+110>lightXTop) {
        //判定1号掉血
        clearInterval(light);
        tankDestroy1();
    }else if (lightXLeft+lightW+110>divObj2Left+110 && divObj2Left+110>lightXLeft && lightXTop+lightH+110>divObj2Top+110 && divObj2Top+110>lightXTop) {
        //判定2号掉血
        clearInterval(light);
        tankDestroy2();
    }

    if (lightYLeft+lightW+110>divObjLeft+110 && divObjLeft+110>lightYLeft && lightYTop+lightH+110>divObjTop+110 && divObjTop+110>lightYTop) {
        //判定1号掉血
        clearInterval(light);
        tankDestroy1();
    }else if (lightYLeft+lightW+110>divObj2Left+110 && divObj2Left+110>lightYLeft && lightYTop+lightH+110>divObj2Top+110 && divObj2Top+110>lightYTop) {
        //判定2号掉血
        clearInterval(light);
        tankDestroy2();
    }
}

//获得移速加强
function getMoveSpeed() {
    //判断1号坦克是否有重叠
    let topObj1 = divObj.offsetTop;
    let leftObj1 = divObj.offsetLeft;
    let topObj2 = divObj2.offsetTop;
    let leftObj2 = divObj2.offsetLeft;
    let topMoveObj = moveFasterObj.offsetTop;
    let leftMoveObj = moveFasterObj.offsetLeft;
    if (topMoveObj+170 > topObj1+110 && topObj1+110 > topMoveObj && leftMoveObj+170 > leftObj1+110 && leftObj1+110 > leftMoveObj && moveFasterObj.style.display==="block") {
        //alert("准备加移速60%");
        clearInterval(move60);
        //1号坦克和加强div有重叠
        $(moveFasterObj).css("transform", "scale(1.5)");
        $(moveFasterObj).css("transform", "scale(0.1)");
        setTimeout(function () {
            moveFasterObj.style.display = "none";
        },300);
        //增加坦克外观效果
        floatTime1 = 30;
        wheelSpeed1 = 10;
        /**
         * animation：动画效果属性: 参数1：动画绑定名称，默认为none,可在css中通过设置@keyframes来定义动画类型
         *                        参数2：动画周期，默认为0，即无效果,可设置秒和毫秒值
         *                        参数3：动画速度曲线，默认为ease(开始和结束变慢，中间快)，linear(从头到尾速度相同)
         *                        参数4：动画播放次数n，默认为0，即不播放，infinite：无限次播放
         * @type {string}
         */
        wheelObj1.style.animation = "wheelMove 20ms linear infinite";
        wheelObj2.style.animation = "wheelMove 20ms linear infinite";
        setTimeout(function () {//加强效果持续10s
            //去掉外观效果
            floatTime1 = 60;
            wheelSpeed1 = 6;
            wheelObj1.style.animation = "none";
            wheelObj2.style.animation = "none";
        }, 10000)
    } else if (topMoveObj+170 > topObj2+110 && topObj2+110 > topMoveObj && leftMoveObj+170 > leftObj2+110 && leftObj2+110 > leftMoveObj && moveFasterObj.style.display==="block") {
        //alert("准备加移速60%");
        clearInterval(move60);
        //2号坦克和加强div有重叠
        $(moveFasterObj).css("transform", "scale(1.5)");
        $(moveFasterObj).css("transform", "scale(0.1)");
        setTimeout(function () {
            moveFasterObj.style.display = "none";
        },300);
        //增加坦克外观效果
        floatTime2 = 30;
        wheelSpeed2 = 10;
        wheelObj3.style.animation = "wheelMove2 20ms linear infinite";
        wheelObj4.style.animation = "wheelMove2 20ms linear infinite";
        setTimeout(function () {//加强效果持续10s
            //去掉外观效果
            floatTime2 = 60;
            wheelSpeed2 = 6;
            wheelObj3.style.animation = "none";
            wheelObj4.style.animation = "none";
        }, 10000)
    }
}
function getMoveSpeed2() {
    //判断1号坦克是否有重叠
    let topObj1 = divObj.offsetTop;
    let leftObj1 = divObj.offsetLeft;
    let topObj2 = divObj2.offsetTop;
    let leftObj2 = divObj2.offsetLeft;
    let topMoveObj = moveFasterObj.offsetTop;
    let leftMoveObj = moveFasterObj.offsetLeft;
    if (topMoveObj+170 > topObj1+110 && topObj1+110 > topMoveObj && leftMoveObj+170 > leftObj1+110 && leftObj1+110 > leftMoveObj && moveFasterObj.style.display==="block") {
        //alert("准备加移速100%");
        clearInterval(move100);
        //1号坦克和加强div有重叠
        $(moveFasterObj).css("transform", "scale(1.5)");
        $(moveFasterObj).css("transform", "scale(0.1)");
        setTimeout(function () {
            moveFasterObj.style.display = "none";
        },300);
        //增加坦克外观效果
        floatTime1 = 30;
        wheelSpeed1 = 12;
        wheelObj1.style.animation = "wheelMove 20ms linear infinite";
        wheelObj2.style.animation = "wheelMove 20ms linear infinite";
        setTimeout(function () {//加强效果持续10s
            //去掉外观效果
            floatTime1 = 60;
            wheelSpeed1 = 6;
            wheelObj1.style.animation = "none";
            wheelObj2.style.animation = "none";
        }, 10000)
    } else if (topMoveObj+170 > topObj2+110 && topObj2+110 > topMoveObj && leftMoveObj+170 > leftObj2+110 && leftObj2+110 > leftMoveObj && moveFasterObj.style.display==="block") {
        //alert("准备加移速100%");
        clearInterval(move100);
        //2号坦克和加强div有重叠
        $(moveFasterObj).css("transform", "scale(1.5)");
        $(moveFasterObj).css("transform", "scale(0.1)");
        setTimeout(function () {
            moveFasterObj.style.display = "none";
        },300);
        //增加坦克外观效果
        floatTime2 = 30;
        wheelSpeed2 = 12;
        wheelObj3.style.animation = "wheelMove2 20ms linear infinite";
        wheelObj4.style.animation = "wheelMove2 20ms linear infinite";
        setTimeout(function () {//加强效果持续10s
            //去掉外观效果
            floatTime2 = 60;
            wheelSpeed2 = 6;
            wheelObj3.style.animation = "none";
            wheelObj4.style.animation = "none";
        }, 10000)
    }
}

//获得射速加强
function getShootSpeed() {
    //判断1号坦克是否有重叠
    let topObj1 = divObj.offsetTop;
    let leftObj1 = divObj.offsetLeft;
    let topObj2 = divObj2.offsetTop;
    let leftObj2 = divObj2.offsetLeft;
    let topShootObj = shootFasterObj.offsetTop;
    let leftShootObj = shootFasterObj.offsetLeft;
    if (topShootObj+170 > topObj1+110 && topObj1+110 > topShootObj && leftShootObj+170 > leftObj1+110 && leftObj1+110 > leftShootObj && shootFasterObj.style.display==="block") {
        //alert("准备加射速60%");
        clearInterval(shoot60);
        //1号坦克和加强div有重叠
        $(shootFasterObj).css("transform", "scale(1.5)");
        $(shootFasterObj).css("transform", "scale(0.1)");
        setTimeout(function () {
            shootFasterObj.style.display = "none";
        },300);
        shootFasterObj.style.display = "none";
        //增加坦克外观效果
        zidanSpeed1 = 19;
        shootObj.style.animation = "mymove 20ms linear infinite";
        setTimeout(function () {//加强效果持续10s
            //去掉外观效果
            zidanSpeed1 = 12;
            shootObj.style.animation = "none";
        }, 10000)
    } else if (topShootObj+170 > topObj2+110 && topObj2+110 > topShootObj && leftShootObj+170 > leftObj2+110 && leftObj2+110 > leftShootObj && shootFasterObj.style.display==="block") {
        //alert("准备加射速60%");
        clearInterval(shoot60);
        //2号坦克和加强div有重叠
        $(shootFasterObj).css("transform", "scale(1.5)");
        $(shootFasterObj).css("transform", "scale(0.1)");
        setTimeout(function () {
            shootFasterObj.style.display = "none";
        },300);
        //增加坦克外观效果
        zidanSpeed2 = 19;
        shootObj2.style.animation = "mymove2 20ms linear infinite";
        setTimeout(function () {//加强效果持续10s
            //去掉外观效果
            zidanSpeed2 = 12;
            shootObj2.style.animation = "none";
        }, 10000)
    }
}
function getShootSpeed2() {
    //判断1号坦克是否有重叠
    let topObj1 = divObj.offsetTop;
    let leftObj1 = divObj.offsetLeft;
    let topObj2 = divObj2.offsetTop;
    let leftObj2 = divObj2.offsetLeft;
    let topShootObj = shootFasterObj.offsetTop;
    let leftShootObj = shootFasterObj.offsetLeft;
    if (topShootObj+170 > topObj1+110 && topObj1+110 > topShootObj && leftShootObj+170 > leftObj1+110 && leftObj1+110 > leftShootObj && shootFasterObj.style.display==="block") {
        //alert("准备加射速100%");
        clearInterval(shoot100);
        //1号坦克和加强div有重叠
        $(shootFasterObj).css("transform", "scale(1.5)");
        $(shootFasterObj).css("transform", "scale(0.1)");
        setTimeout(function () {
            shootFasterObj.style.display = "none";
        },300);
        //增加坦克外观效果
        zidanSpeed1 = 24;
        shootObj.style.animation = "mymove 20ms linear infinite";
        setTimeout(function () {//加强效果持续10s
            //去掉外观效果
            zidanSpeed1 = 12;
            shootObj.style.animation = "none";
        }, 10000)
    } else if (topShootObj+170 > topObj2+110 && topObj2+110 > topShootObj && leftShootObj+170 > leftObj2+110 && leftObj2+110 > leftShootObj && shootFasterObj.style.display==="block") {
        //alert("准备加射速100%");
        clearInterval(shoot100);
        //2号坦克和加强div有重叠
        $(shootFasterObj).css("transform", "scale(1.5)");
        $(shootFasterObj).css("transform", "scale(0.1)");
        setTimeout(function () {
            shootFasterObj.style.display = "none";
        },300);
        //增加坦克外观效果
        zidanSpeed2 = 24;
        shootObj2.style.animation = "mymove2 20ms linear infinite";
        setTimeout(function () {//加强效果持续10s
            //去掉外观效果
            zidanSpeed2 = 12;
            shootObj2.style.animation = "none";
        }, 10000)
    }

}

//获得对角移动
function getMoveAcross() {
    //判断1号坦克是否有重叠
    let topObj1 = divObj.offsetTop;
    let leftObj1 = divObj.offsetLeft;
    let topObj2 = divObj2.offsetTop;
    let leftObj2 = divObj2.offsetLeft;
    let topMoveObj = moveOppositeObj.offsetTop;
    let leftMoveObj = moveOppositeObj.offsetLeft;
    if (topMoveObj+170 > topObj1+110 && topObj1+110 > topMoveObj && leftMoveObj+170 > leftObj1+110 && leftObj1+110 > leftMoveObj && moveOppositeObj.style.display==="block") {
        //alert("可以斜着跑了");
        clearInterval(moveOPP);
        //1号坦克和加强div有重叠
        $(moveOppositeObj).css("transform", "scale(1.5)");
        $(moveOppositeObj).css("transform", "scale(0.1)");
        setTimeout(function () {
            moveOppositeObj.style.display = "none";
        },300);
        //增加坦克外观效果
        state = 1;
        bodyObj.style.animation = "mymove 20ms linear infinite";
        setTimeout(function () {//加强效果持续10s
            //去掉外观效果
            state = 0;
            bodyObj.style.animation = "none";
        }, 10000)
    } else if (topMoveObj+170 > topObj2+110 && topObj2+110 > topMoveObj && leftMoveObj+170 > leftObj2+110 && leftObj2+110 > leftMoveObj && moveOppositeObj.style.display==="block") {
        //alert("可以斜着跑了");
        clearInterval(moveOPP);
        //2号坦克和加强div有重叠
        $(moveOppositeObj).css("transform", "scale(1.5)");
        $(moveOppositeObj).css("transform", "scale(0.1)");
        setTimeout(function () {
            moveOppositeObj.style.display = "none";
        },300);
        //增加坦克外观效果
        state2 = 1;
        bodyObj2.style.animation = "mymove2 20ms linear infinite";
        setTimeout(function () {//加强效果持续10s
            //去掉外观效果
            state2 = 0;
            bodyObj2.style.animation = "none";
        }, 10000)
    }
}

//获得加血包
function getBlood() {
    //判断1号坦克是否有重叠
    let topObj1 = divObj.offsetTop;
    let leftObj1 = divObj.offsetLeft;
    let topObj2 = divObj2.offsetTop;
    let leftObj2 = divObj2.offsetLeft;
    let topPillObj = getPillObj.offsetTop;
    let leftPillObj = getPillObj.offsetLeft;
    if (topPillObj+170 > topObj1+110 && topObj1+110 > topPillObj && leftPillObj+170 > leftObj1+110 && leftObj1+110 > leftPillObj && getPillObj.style.display==="block") {
        clearInterval(addBlood);
        //1号坦克和加强div有重叠
        $(getPillObj).css("transform", "scale(1.5)");
        $(getPillObj).css("transform", "scale(0.1)");
        setTimeout(function () {
            getPillObj.style.display = "none";
        },300);
        //增加坦克外观效果
        blood.style.animation = "isShooted 400ms linear 2";
        if ($(blood).css("width") === "27px") {
            $(blood).animate({width:"54px"}, 1000, "linear");
        }else if ($(blood).css("width") === "54px") {
            $(blood).animate({width:"81px"}, 1000, "linear");
        }
    } else if (topPillObj+170 > topObj2+110 && topObj2+110 > topPillObj && leftPillObj+170 > leftObj2+110 && leftObj2+110 > leftPillObj && getPillObj.style.display==="block") {
        clearInterval(addBlood);
        //2号坦克和加强div有重叠
        $(getPillObj).css("transform", "scale(1.5)");
        $(getPillObj).css("transform", "scale(0.1)");
        setTimeout(function () {
            getPillObj.style.display = "none";
        },300);
        //增加坦克外观效果
        blood2.style.animation = "isShooted 400ms linear 2";
        if ($(blood2).css("width") === "27px") {
            $(blood2).animate({width:"54px"}, 1000, "linear");
        }else if ($(blood2).css("width") === "54px") {
            $(blood2).animate({width:"81px"}, 1000, "linear");
        }
    }
}

//激光开始X
function lightStartX() {
    $(burnLightXObj).animate({height:winHeight2 + "px"},800,"linear",changeBackX);
}
function changeBackX() {
    setTimeout(function () {
        $(burnLightXObj).animate({height: "20px"}, 800, "linear",destroyLightX);
    }, 2000)
}
function destroyLightX() {
    $(burnLightXObj).css("display","none");
}

//激光开始Y
function lightStartY() {
    $(burnLightYObj).animate({width:winWidth2 + "px"},1000,"linear",changeBackY);
}
function changeBackY() {
    setTimeout(function () {
        $(burnLightYObj).animate({width: "20px"}, 1000, "linear",destroyLightY);
    }, 2000)
}
function destroyLightY() {
    $(burnLightYObj).css("display","none");
}

//更换背景颜色
let color = 0;
$(document).keydown(function (event) {
    color++;
    let keyNum = event.which;
    if (event.ctrlKey && keyNum === 88) {//ctrl+x
        if (color % 4 === 0) {
            $(".father").css("background-color","#DEDDDD");
            $("#divId").css("background-color","#DEDDDD");
            $("#divId2").css("background-color","#DEDDDD");
        }else if (color % 4 === 1) {
            $(".father").css("background-color","#FFCCA9");
            $("#divId").css("background-color","#FFCCA9");
            $("#divId2").css("background-color","#FFCCA9");
        }else if (color % 4 === 2) {
            $(".father").css("background-color","#AAAEEB");
            $("#divId").css("background-color","#AAAEEB");
            $("#divId2").css("background-color","#AAAEEB");
        }else if (color % 4 === 3) {
            $(".father").css("background-color","#98E0AD");
            $("#divId").css("background-color","#98E0AD");
            $("#divId2").css("background-color","#98E0AD");
        }else if (color % 4 === 3) {
            $(".father").css("background-color","#60C5F1");
            $("#divId").css("background-color","#60C5F1");
            $("#divId2").css("background-color","#60C5F1");
        }
    }
});