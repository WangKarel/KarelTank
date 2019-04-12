let floatTime1 = 60, floatTime2 = 60;
//流动虚线框（1号）
let a = setInterval(function () {
    let $left = parseInt($(".dashed-top").css("left"));
    let $top = parseInt($(".dashed-bottom").css("left"));
    if ($left < 0) {
        $left += 2;
    } else {
        $left = -1400;
    }

    if ($top > -1000) {
        $top -= 2;
    } else {
        $top = 0;
    }
    $(".dashed-top").css("left", $left + "px");
    $(".dashed-right").css("top", $left + "px");
    $(".dashed-bottom").css("left", $top + "px");
    $(".dashed-left").css("top", $top + "px");
}, floatTime1);
//流动虚线框（2号）
let b = setInterval(function () {
    let $left = parseInt($(".dashed-top2").css("left"));
    let $top = parseInt($(".dashed-bottom2").css("left"));
    if ($left < 0) {
        $left += 2;
    } else {
        $left = -1400;
    }

    if ($top > -1000) {
        $top -= 2;
    } else {
        $top = 0;
    }
    $(".dashed-top2").css("left", $left + "px");
    $(".dashed-right2").css("top", $left + "px");
    $(".dashed-bottom2").css("left", $top + "px");
    $(".dashed-left2").css("top", $top + "px");
}, floatTime2);
//流动虚线框（加强效果moveFaster）
let c = setInterval(function () {
    let $left = parseInt($(".dashed-top3").css("left"));
    let $top = parseInt($(".dashed-bottom3").css("left"));
    if ($left < 0) {
        $left += 2;
    } else {
        $left = -1400;
    }

    if ($top > -1000) {
        $top -= 2;
    } else {
        $top = 0;
    }
    $(".dashed-top3").css("left", $left + "px");
    $(".dashed-right3").css("top", $left + "px");
    $(".dashed-bottom3").css("left", $top + "px");
    $(".dashed-left3").css("top", $top + "px");
}, 80);
//流动虚线框（加强效果shootFaster）
let d = setInterval(function () {
    let $left = parseInt($(".dashed-top4").css("left"));
    let $top = parseInt($(".dashed-bottom4").css("left"));
    if ($left < 0) {
        $left += 2;
    } else {
        $left = -1400;
    }

    if ($top > -1000) {
        $top -= 2;
    } else {
        $top = 0;
    }
    $(".dashed-top4").css("left", $left + "px");
    $(".dashed-right4").css("top", $left + "px");
    $(".dashed-bottom4").css("left", $top + "px");
    $(".dashed-left4").css("top", $top + "px");
}, 80);
//流动虚线框（加强效果moveOpposite）
let e = setInterval(function () {
    let $left = parseInt($(".dashed-top5").css("left"));
    let $top = parseInt($(".dashed-bottom5").css("left"));
    if ($left < 0) {
        $left += 2;
    } else {
        $left = -1400;
    }

    if ($top > -1000) {
        $top -= 2;
    } else {
        $top = 0;
    }
    $(".dashed-top5").css("left", $left + "px");
    $(".dashed-right5").css("top", $left + "px");
    $(".dashed-bottom5").css("left", $top + "px");
    $(".dashed-left5").css("top", $top + "px");
}, 80);
//流动虚线框（加强效果getPill）
let f = setInterval(function () {
    let $left = parseInt($(".dashed-top6").css("left"));
    let $top = parseInt($(".dashed-bottom6").css("left"));
    if ($left < 0) {
        $left += 2;
    } else {
        $left = -1400;
    }

    if ($top > -1000) {
        $top -= 2;
    } else {
        $top = 0;
    }
    $(".dashed-top6").css("left", $left + "px");
    $(".dashed-right6").css("top", $left + "px");
    $(".dashed-bottom6").css("left", $top + "px");
    $(".dashed-left6").css("top", $top + "px");
}, 80);