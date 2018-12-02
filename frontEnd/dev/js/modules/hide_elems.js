export const hide_elems = () => {
  var firstDiv = document.querySelectorAll('.o-hide_section');

  for (var i = 0; i < firstDiv.length; i++) {
      firstDiv[i].addEventListener('click', (e) => {
          var elems = document.querySelectorAll('[data-hide-item=' + e.target.dataset.hide+']')
          if(!e.target.classList.contains("is_hidden")){
              e.target.classList.add("is_hidden")
              for (var i = 0; i < elems.length; i++) {
                      elems[i].style.display = "none";
              }
          } else {
              e.target.classList.remove("is_hidden")
              for (var i = 0; i < elems.length; i++) {
                    elems[i].style.display = "block";
              }
          }
      });
  }
};
