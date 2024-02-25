import Swiper from "swiper";
import { Navigation, Pagination } from "swiper";

$('.dc-web__item-slider').each((idx, item) => {
  new Swiper(item, {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: $(item).parent().find('.dc-web__item-slider-button--right')[0],
      prevEl: $(item).parent().find('.dc-web__item-slider-button--left')[0]
    },
    pagination: {
      el: $(item).parent().find('.dc-web__slider-pagination')[0]
    }
  })
})
