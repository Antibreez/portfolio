import lScroll from "./locomotivescroll";

$('a[href*="#"').on("click", function (e) {
  e.preventDefault();

  const target = e.currentTarget;
  const name = $(target).attr("href");

  lScroll.scrollTo(document.querySelector(name));
});
