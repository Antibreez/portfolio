import lScroll from "./locomotivescroll";

const $btn = $(".btn-to-top");

$(window).on("scroll", function () {
  if ($(window).width() < 768) {
    const dist = $(window).scrollTop();

    if (dist > $(window).height() && !$btn.hasClass("shown")) {
      $btn.addClass("shown");
    }

    if (dist < $(window).height() && $btn.hasClass("shown")) {
      $btn.removeClass("shown");
    }
  }
});

lScroll.on("scroll", (args) => {
  if ($(window).width() > 767) {
    const dist = args.scroll.y;

    if (dist > $(window).height() && !$btn.hasClass("shown")) {
      $btn.addClass("shown");
    }

    if (dist < $(window).height() && $btn.hasClass("shown")) {
      $btn.removeClass("shown");
    }
  }
});
