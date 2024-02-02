// let sw = 0
// $('a.bar').click(function () {
//     sw = !sw
//     if (sw) {
//         $(this).addClass('on')
//         $('nav').animate({ 'left': "0" })
//     }
// else{
// $(this).removeClass('on')
// $('nav').animate({'left':'-200px'})
// }
// })
let sw = 0
$('a.bar').click(function (e) {
    e.preventDefault()
    sw = !sw
    if (sw) {
        $(this).addClass('on')
        $('.menu-box').addClass('on')
    }
    else {
        $(this).removeClass('on')
        $('.menu-box').removeClass('on')
    }
})
$('.sentaku-1 ul li a').click(function (e) {
    e.preventDefault()
    $('.sentaku-1 ul li a').removeClass('on')
    $(this).addClass('on')
    let href = $(this).attr('href')
    $('.wrap-slide').removeClass('on')
    $(href).addClass('on')
})
$('.sentaku-2 ul li a').click(function (e) {
    e.preventDefault()
    $('.sentaku-2 ul li a').removeClass('on')
    $(this).addClass('on')
    let href = $(this).attr('href')
    $('.ninki-trip').removeClass('on')
    $(href).addClass('on')
})
setInterval(function () {
    $("#kuni-1").animate({ "margin-top": "-166px" }, function () {
        $('#kuni-1 .slide-1').first().appendTo('#kuni-1')
        $('#kuni-1').css({ "margin-top": "0px" })
    });
}, 3000);
setInterval(function () {
    $("#kuni-2").animate({ "margin-top": "-166px" }, function () {
        $('#kuni-2 .slide-1').first().appendTo('#kuni-2')
        $('#kuni-2').css({ "margin-top": "0px" })
    });
}, 3000);
$('.button li a').click(function (e) {
    e.preventDefault()
    $('.button li a').removeClass('on')
    $(this).addClass('on')
    let href = $(this).attr('href')
    $('.wrap-osusume ul').removeClass('on')
    $(href).addClass('on')
})