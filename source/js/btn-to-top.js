const $header = $("#header");
const $btn = $(".btn-to-top");
let headerHeight = $header.outerHeight();

$(window).on("scroll", function () {
  const dist = $(window).scrollTop();

  if (dist > $(window).height() && !$btn.hasClass("shown")) {
    $btn.addClass("shown");
  }

  if (dist < $(window).height() && $btn.hasClass("shown")) {
    $btn.removeClass("shown");
  }
});
