import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

import lScroll from "./locomotivescroll";

gsap.registerPlugin(scrollTrigger);

$(window).on("load", function () {
  const tl = gsap.timeline();

  tl.from(".header", 1, {
    opacity: 0,
    delay: 0.5,
  })
    .fromTo(
      ".header__overlay-item",
      1,
      {
        height: 0,
        minHeight: 0,
      },
      {
        height: "calc(var(--vh, 1vh) * 100)",
        minHeight: "100%",
        delay: 0.5,
        ease: "power4.out",
        stagger: {
          amount: 0.8,
        },
      }
    )
    .from(
      "#my-name",
      0.5,
      {
        y: 100,
        ease: "power4.out",
        skewY: 7,
      },
      "-=0.5"
    )
    .from("#my-role", 0.5, {
      y: 100,
      ease: "power4.out",
      skewY: 7,
    })
    .from("#my-photo", 1, {
      opacity: 0,
      ease: "power4.out",
    })
    .add("label", "-=1")
    .from(
      ".header__nav-item",
      1,
      {
        y: -200,
        ease: "power4.out",
        stagger: {
          amount: 0.4,
        },
      },
      "label"
    )
    .from(
      ".header__contact-link",
      1,
      {
        y: 500,
        opacity: 0,
        ease: "power4.out",
        stagger: {
          amount: 0.4,
        },
      },
      "label"
    )
    .from(
      ".header__socials-link",
      1,
      {
        x: 500,
        opacity: 0,
        ease: "power4.out",
        stagger: {
          amount: 0.4,
        },
      },
      "label"
    )
    .from(
      ".header__continue-link",
      1,
      {
        opacity: 0,
      },
      "label2"
    )
    .from(
      ".header__nav-btn",
      0.5,
      {
        opacity: 0,
      },
      "label2"
    );

  const setBarStyles = (args, name, mobileX, desktopX) => {
    let item = args.currentElements[name];

    if (typeof item === "object") {
      let progress = item.progress;

      let x = $(window).width() < 768 ? mobileX : desktopX;
      $(item.el).css("width", `${progress * x}%`);
    }
  };

  lScroll.on("scroll", (args) => {
    setBarStyles(args, "about-title-bar", 100, 55);
    setBarStyles(args, "about-title-bar-long", 180, 110);
    setBarStyles(args, "skills-title-bar", 100, 55);
    setBarStyles(args, "skills-title-bar-long", 180, 110);
    setBarStyles(args, "portfolio-title-bar", 100, 55);
    setBarStyles(args, "portfolio-title-bar-long", 180, 110);

    let skillsImg = args.currentElements["skills-img"];

    if (typeof skillsImg === "object") {
      let progress = skillsImg.progress;

      let x = $(window).width() < 768 ? 0 : 25;

      $(skillsImg.el).css(
        "transform",
        `translateX(${-1 * progress * x}vw) rotate(${
          progress * 130
        }deg) scale(${progress + 0.5})`
      );
    }
  });
});
