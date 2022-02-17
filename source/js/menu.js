const $btn = $(".header__nav-btn");
const $overlay = $(".header__nav-overlay");
const $nav = $(".header__nav");
const $body = $("body");
const $link = $(".header__nav-link");

$btn.on("click", function () {
  $nav.toggleClass("opened");
  $nav.hasClass("opened")
    ? $body.addClass("js-no-scroll")
    : $body.removeClass("js-no-scroll");
});

$overlay.on("click", function () {
  $nav.hasClass("opened") && $nav.removeClass("opened");
  $nav.hasClass("opened")
    ? $body.addClass("js-no-scroll")
    : $body.removeClass("js-no-scroll");
});

$(window).on("resize", function () {
  if ($(window).width() > 767 && $body.hasClass("js-no-scroll")) {
    $body.removeClass("js-no-scroll");
  }

  if (
    $(window).width() < 768 &&
    $nav.hasClass("opened") &&
    !$body.hasClass("js-no-scroll")
  ) {
    $body.addClass("js-no-scroll");
  }
});

$link.on("click", function () {
  $nav.removeClass("opened");
  $body.removeClass("js-no-scroll");
});
