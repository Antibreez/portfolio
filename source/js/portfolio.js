import { dcScroll, coScroll } from "./locomotivescroll";

const $item = $('.portfolio__item');
const $itemInfo = $('.portfolio__item-info');
const $close = $('.portfolio__info-close');

$item.on('click', function (e) {
  if ($(e.currentTarget).is('[data-window-link]')) {
    const name = $(e.currentTarget).attr('data-window-link');

    const $window = $(document).find(`[data-window='${name}']`)
    $window.addClass('is--opened');
    $(window).outerWidth() < 1024 && $('body').addClass('js-no-scroll')
    $('.c-scrollbar').addClass('is--scrollbar-visible')
    $window.addClass('animate__animated animate__slideInUp');
    $('.modal-underlayer').addClass('is--visible');
    return;
  }

  const $info = $(this).find('.portfolio__item-info');
  const $target = $(e.target);

  $itemInfo.removeClass('opened');

  if ($info.hasClass('opened')) {
    return;
  }

  if ($target.parents('.portfolio__item-info').length > 0) {
    return;
  }

  $info.addClass('opened');
});

$close.on('click', function () {
  $(this).parents('.portfolio__item-info').removeClass('opened');
});

$(document).on('click', function (e) {
  const $target = $(e.target);

  if (
    $target.parents('.portfolio__item').length > 0 ||
    $target.hasClass('portfolio__item-info')
  ) {
    return;
  }

  $itemInfo.removeClass('opened');
});

$('.dc-web__close').on('click', function() {
  $('.c-scrollbar').removeClass('is--scrollbar-visible');
  $(this).parents('.dc-web__wrapper').first().addClass('animate__animated animate__slideOutDown');
  $('.modal-underlayer').removeClass('is--visible');
})

$('.dc-web__wrapper').on('animationend', (e) => {
  if ($(e.target).hasClass('animate__slideOutDown')) {
    dcScroll.scrollTo('top')
    coScroll.scrollTo('top')
    $(e.target).removeClass('is--opened')
    $('body').removeClass('js-no-scroll')
  }
  $(e.target).removeClass('animate__animated animate__slideInUp animate__slideOutDown')
})
