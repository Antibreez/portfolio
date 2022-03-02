const $item = $(".portfolio__item");
const $itemInfo = $(".portfolio__item-info");
const $close = $(".portfolio__info-close");

$item.on("click", function (e) {
  const $info = $(this).find(".portfolio__item-info");
  const $target = $(e.target);

  $itemInfo.removeClass("opened");

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

$(document).on("click", function (e) {
  const $target = $(e.target);

  if (
    $target.parents(".portfolio__item").length > 0 ||
    $target.hasClass("portfolio__item-info")
  ) {
    return;
  }

  $itemInfo.removeClass("opened");
});
