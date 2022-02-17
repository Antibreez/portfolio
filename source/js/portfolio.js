const $item = $(".portfolio__item");
const $close = $(".portfolio__info-close");

$item.on("click", function (e) {
  const $info = $(this).find(".portfolio__item-info");
  const $target = $(e.target);

  if ($info.hasClass("opened")) {
    return;
  }

  if ($target.parents(".portfolio__item-info").length > 0) {
    return;
  }

  $info.addClass("opened");
});

$close.on("click", function () {
  $(this).parents(".portfolio__item-info").removeClass("opened");
});
