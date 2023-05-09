$(function() {
  var $scrollContainer = $('.scroll-container');
  var $scrollContent = $('.scroll-content');
  var $scrollBar = $('.scroll-bar');
  var $scrollThumb = $('.scroll-thumb');

  $scrollThumb.on('mousedown', function(event) {
    event.preventDefault(); // 防止點擊事件造成頁面跳轉
    var startX = event.clientX;
    var startLeft = parseInt($scrollThumb.css('left'));

    function onMouseMove(event) {
      var deltaX = event.clientX - startX;
      var newLeft = (startLeft + deltaX);
      if (newLeft < 0) {
        newLeft = 0;
      } else if (newLeft > $scrollBar.width() - $scrollThumb.width()) {
        newLeft = $scrollBar.width() - $scrollThumb.width();
      }

      var ratio = newLeft / ($scrollBar.width() - $scrollThumb.width());
      var scrollWidth = $scrollContent.get(0).scrollWidth - $scrollContainer.width() + 350;
      var scrollLeft = ratio * scrollWidth;

      $scrollContent.css('left', -scrollLeft + 'px');
      $scrollThumb.css('left', newLeft + 'px');
    }

    function onMouseUp(event) {
      $(document).off('mousemove', onMouseMove);
      $(document).off('mouseup', onMouseUp);
    }

    $(document).on('mousemove', onMouseMove);
    $(document).on('mouseup', onMouseUp);
  });

  $scrollThumb.on('touchstart', function(event) {
    event.preventDefault(); // 防止點擊事件造成頁面跳轉
    var startX = event.touches[0].clientX;
    var startLeft = parseInt($scrollThumb.css('left'));

    function onTouchMove(event) {
      var deltaX = event.touches[0].clientX - startX;
      var newLeft = (startLeft + deltaX);
      if (newLeft < 0) {
        newLeft = 0;
      } else if (newLeft > $scrollBar.width() - $scrollThumb.width()) {
        newLeft = $scrollBar.width() - $scrollThumb.width();
      }

      var ratio = newLeft / ($scrollBar.width() - $scrollThumb.width());
      var scrollWidth = $scrollContent.get(0).scrollWidth - $scrollContainer.width();
      var scrollLeft = ratio * scrollWidth;

      $scrollContent.css('left', -scrollLeft + 'px');
      $scrollThumb.css('left', newLeft + 'px');
    }

    function onTouchEnd(event) {
      $(document).off('touchmove', onTouchMove);
      $(document).off('touchend', onTouchEnd);
    }

    $(document).on('touchmove', onTouchMove);
    $(document).on('touchend', onTouchEnd);
  });
});
// 觸發左邊scroll 
$(document).ready(function () {
    $('.scrollTop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        console.log(target, targetPos)
        $('html, body').animate({ scrollTop: targetPos }, 1000);
    });
    $(window).scroll(function () {
        var scrollpos = $(window).scrollTop();

        $(".scrollTop").each(function () {
            var target = $(this).attr("href");
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (targetPos <= (scrollpos + $(window).height() / 2)) {
                $(".scrollTop").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    });
});
