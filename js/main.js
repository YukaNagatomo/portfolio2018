$(function () {
  //    $(window).resize(function () {
  //        location.reload();
  //    })
  //    modaal.js
  $('.modal').modaal({
    background: '#000',
    overlay_opacity: '0.3'
  });
  //    スムーススクロール
  $('a[href^="#link-"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
  $('.work').on('inview', function (event, isInView) {
    if (isInView) {
      //表示領域に入った時
      $(this).addClass('fadeInUp');
    } 
  });
});
