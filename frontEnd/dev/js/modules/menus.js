import $ from 'jquery';
export const menusAction = () => {
    
  var currentPath = '/';

  $('a[href="' + currentPath + '"]').closest('li').addClass('menu-item--active');

  var parentUl = $('li.menu-item--active').closest('ul');
  parentUl.closest('li').addClass('menu-item--active a');

  var parentPath = parentUl.data('parent-path');

  var parentLink = $('li > a[href="' + parentPath + '"]');

  var parentLi = parentLink.parent();
  parentLi.addClass('menu-item--active b');
  parentLi.closest('ul').closest('li').addClass('menu-item--active c');
};
