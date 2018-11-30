import $ from 'jquery';
export const initToggles = () => {
  var blocks = $('.block_text_2columns.resizable, .block_text.resizable')

  blocks.children('div').hide();

  var resizeButton = $('<small class="d">').html('rozwiń');

  blocks.children('h2').append(resizeButton);

  resizeButton.parent().click(function () {
      blocks.children('div').toggle();
  });
  }