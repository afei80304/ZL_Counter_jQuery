//each 執行每一個陣列的內容
//attr 取得屬性

$("*").each(function(){
    var number = $(this).attr("data-ct-number");
    var dur = $(this).attr("data-ct-duration");

    $(this).animate({
        countNum:number
    }, {
        duration: dur,
        easing: "linear",
        step: function(now){
            $(this).text(Math.floor(now))
        }
    });
})