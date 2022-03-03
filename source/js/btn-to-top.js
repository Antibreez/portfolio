const $btn = $(".btn-to-top");

console.log("scroll");

$(window).on("scroll", function () {
  const dist = $(window).scrollTop();

  console.log("scroll");

  if (dist > $(window).height() && !$btn.hasClass("shown")) {
    $btn.addClass("shown");
  }

  if (dist < $(window).height() && $btn.hasClass("shown")) {
    $btn.removeClass("shown");
  }
});
