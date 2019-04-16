//判定掉血
function tankLoseBlood1() {
    //子弹击中坦克1
    if ($(blood).css("width") === "27px") {
        $(bloodTip).css("display","none");
        divObj.style.animation = "rotate 500ms linear 1";
        setTimeout(function () {
            divObj.style.display = "none";
            $(".cover").css("display","block");
            $(".message").css("display","block");
            stopAll();
        },480)
    }else if ($(blood).css("width") === "54px") {
        $(blood).css("width","27px");
        ifShoot = 1;
        divObj.style.animation = "isShooted 400ms linear infinite";
        setTimeout(function () {
            ifShoot = 0;
        },1200);
        setTimeout(function () {
            divObj.style.animation = "none";
        },3000)
    }else if ($(blood).css("width") === "81px") {
        $(blood).css("width","54px");
        ifShoot = 1;
        divObj.style.animation = "isShooted 400ms linear infinite";
        setTimeout(function () {
            ifShoot = 0;
        },1200);
        setTimeout(function () {
            divObj.style.animation = "none";
        },3000)
    }
}
function tankLoseBlood2() {
    //子弹击中坦克2
    if ($(blood2).css("width") === "27px") {
        $(bloodTip2).css("display","none");
        divObj2.style.animation = "rotate 500ms linear 1";
        setTimeout(function () {
            divObj2.style.display = "none";
            $(".cover").css("display","block");
            $(".message").css("display","block");
            stopAll();
        },480)
    }else if ($(blood2).css("width") === "54px") {
        $(blood2).css("width","27px");
        ifShoot2 = 1;
        divObj2.style.animation = "isShooted 400ms linear infinite";
        setTimeout(function () {
            ifShoot2 = 0;
        },1200);
        setTimeout(function () {
            divObj2.style.animation = "none";
        },3000)
    }else if ($(blood2).css("width") === "81px") {
        $(blood2).css("width","54px");
        ifShoot2 = 1;
        divObj2.style.animation = "isShooted 400ms linear infinite";
        setTimeout(function () {
            ifShoot2 = 0;
        },1200);
        setTimeout(function () {
            divObj2.style.animation = "none";
        },3000)
    }
}

//坦克摧毁
function tankDestroy1() {
    //子弹击中坦克1
    $(bloodTip).css("display","none");
    divObj.style.animation = "rotate 500ms linear 1";
    setTimeout(function () {
        divObj.style.display = "none";
        $(".cover").css("display","block");
        $(".message").css("display","block");
        stopAll();
    },480);

}
function tankDestroy2() {
    //子弹击中坦克2
    $(bloodTip2).css("display","none");
    divObj2.style.animation = "rotate 500ms linear 1";
    setTimeout(function () {
        divObj2.style.display = "none";
        $(".cover").css("display","block");
        $(".message").css("display","block");
        stopAll();
    },480);
}

//停止所有动作
function stopAll() {
    clearInterval(moveNum1);
    clearInterval(moveNum2);
    clearInterval(strong);
    clearInterval(lightStrong);
    clearInterval(superLights);
    clearInterval(sing);
    clearInterval(a);
    clearInterval(b);
    clearInterval(c);
    clearInterval(d);
    clearInterval(e);
    clearInterval(f);
    clearInterval(ziDanMove1);
    clearInterval(ziDanMove2);
    clearInterval(ziDanMove3);
    clearInterval(ziDanMove4);
    clearInterval(ziDanMove5);
    clearInterval(ziDanMove6);
    clearInterval(ziDanMove8);
    burnLightXObj.style.animation = "none";
    $(burnLightXObj).animate({height:"+=0px"});
    burnLightYObj.style.animation = "none";
    $(burnLightYObj).animate({width:"+=0px"});
}