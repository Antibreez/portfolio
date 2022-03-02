let vh = window.innerHeight * 0.01;

function onResize() {
  const dist = $(window).scrollTop();
  if (dist < 100) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
}

function debounce(func) {
  var timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
}

document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", debounce(onResize));
