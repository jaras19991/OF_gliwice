export const c_slider = () => {
    var slide = 0,
    slides = document.querySelectorAll('.c-slider-item'),
    numSlides = slides.length,
    counter_length = document.querySelector('.c-slider-counter_length');
         counter_length.innerHTML = numSlides;

    var currentSlide = function() {
      var itemToShow = Math.abs(slide % numSlides);
      [].forEach.call(slides, function(el) {
        el.classList.remove('slideActive')
      });
      slides[itemToShow].classList.add('slideActive');
      countProgress(itemToShow);
      resetInterval();
    },
    next = function() {
      slide++;
      currentSlide();
    },
    prev = function() {
      slide--;
      currentSlide();
    },
    countProgress = function(actual) {
      var elm = document.querySelector('.c-slider-counter_inc');
         elm.innerHTML = actual + 1;
    },
    resetslide = function() {
      var elm = document.querySelector('.c-slider-item'),
          newone = elm.cloneNode(true),
          x = elm.parentNode.replaceChild(newone, elm);
    },
    resetInterval = function() {
      clearInterval(autonext);
      autonext = setInterval(function() {
        slide++;
        currentSlide();
      }, 10000);
    },
    autonext = setInterval(function() {
      next();
    }, 10000);


        currentSlide();

    document.querySelector('.c-slider-arrow_right').addEventListener('click', function() {
        next();
    }, false);
    document.querySelector('.c-slider-arrow_left').addEventListener('click', function() {
        prev();
    }, false);
};
