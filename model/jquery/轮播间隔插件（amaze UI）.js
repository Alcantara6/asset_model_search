// 轮播间隔播放
;(function ($) {
    $.fn.extend({
      'multiSlide': function (options) {
          options = $.extend({
            selector: '.am-slider',
            interval: 3000,   // 间隔时间
            directionNav: false
          }, options); 
          var _self = this;
          this.flexslider({
              directionNav: options.directionNav,
              slideshow: false,
              playAfterPaused: 5000,
              before: function (slider) {
                  if(slider._pausedTimer) {
                    window.clearTimeout(slider._pausedTimer);
                  }
              },
              after: function (slider) {
              	var idx = _self.index(slider);  // 当前序号
                var $nextSlider = _self.eq(idx + 1);
                if(!slider.manualPause && !slider.manualPlay && !slider.stopped) {
                   if($nextSlider.length > 0) {
                       slider._pausedTimer = setTimeout(function () {
                         $nextSlider.flexslider('next');
                       }, options.interval)
                   }
                   else {
                     slider._pausedTimer = setTimeout(function () {
                       _self.eq(0).flexslider('next')
                     }, options.interval);
                   }
                }
              }
          }).on('touchmove', function () {
             event.preventDefault();
          }).eq(0)._pausedTimer = setTimeout(function () {
              $('.am-slider').eq(0).flexslider('next');
          }, options.interval);
      }
    })
})(jQuery);
