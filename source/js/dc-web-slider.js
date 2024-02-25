import Swiper from "swiper";
import { Navigation } from "swiper";

$('.dc-web__item-slider').each((idx, item) => {
  new Swiper(item, {
    modules: [Navigation],
    navigation: {
      nextEl: $(item).parent().find('.dc-web__item-slider-button--right')[0],
      prevEl: $(item).parent().find('.dc-web__item-slider-button--left')[0]
    }
  })
})
