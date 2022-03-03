import locomotiveScroll from "locomotive-scroll";

const lScroll = new locomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: 0.1,
  tablet: {
    smooth: true,
  },
  smartphone: {
    smooth: false,
  },
});

export default lScroll;
