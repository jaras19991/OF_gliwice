export const c_gradient = () => {
    
  var viewportHeight = document.body.clientHeight
  function Scroller() {
    this.latestKnownScrollY = 0;
    this.ticking = false;
  }
  Scroller.prototype = {
  init: function() {
      window.addEventListener('scroll', this.onScroll.bind(this), false);
      this.onScroll.bind(this)
  },
  onScroll: function() {
      this.latestKnownScrollY = window.pageYOffset;
      this.requestTick();
  },
  requestTick: function() {
      if (!this.ticking) {
          window.requestAnimFrame(this.update.bind(this));
      }
      this.ticking = true;
  },
  update: function() {
      var currentScrollY = this.latestKnownScrollY;
      this.ticking = false;
      var bgOverlay = currentScrollY * 1.7;
      var bgOpacity = currentScrollY * 2;
      var bgOverlayTransform = 'translateY(-' + bgOverlay + 'px)';
      var bgOpacityTransform = 1 - bgOpacity / viewportHeight;
      var $heroBG =  document.querySelector('.homepage .c-slider-item')
      var $heroOverlay =  document.querySelector('.homepage .c-slider-overlay')
      $heroBG.style.opacity = bgOpacityTransform
      
      $heroOverlay.style.transform = bgOverlayTransform
      
  }
  };
                  window.requestAnimFrame = (function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
      window.setTimeout(callback, 1000 / 60);
  };
  })();
  var scroller = new Scroller();
  if(!!document.querySelector('.homepage .c-slider-overlay')){
    scroller.init();
  }
};
