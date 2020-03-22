$(window).scroll(function () {
    console.log("捲動中");

    //each 執行每一個陣列的內容
    //attr 取得屬性
    $("*").each(function () {

        var windowtop = $(window).scrollTop();//視窗高度
        var offset = $(this).offset();//元素高度
        var top = offset.top;
        console.log("目前元素的高度: " + top)

        if (windowtop > top - 300) {
            var number = $(this).attr("data-ct-number");
            var dur = $(this).attr("data-ct-duration");
            $(this).animate({
                countNum: number
            }, {
                    // 時間:將字串轉成整數
                    duration: parseInt(dur),
                    easing: "linear",
                    step: function (now) {
                        $(this).text(Math.floor(now))
                    }
                });
        }
    });
});