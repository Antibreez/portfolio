import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

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

  gsap.fromTo(
    ".about__text-block",
    {
      x: -500,
      opacity: 0,
    },
    {
      scrollTrigger: ".about__text-block",
      x: 0,
      opacity: 1,
      duration: 1,
    }
  );

  gsap.fromTo(
    ".about__img-block",
    {
      y: 0,
      x: 500,
      opacity: 0,
    },
    {
      y: "-50%",
      x: 0,
      scrollTrigger: ".about__img-block",
      opacity: 1,
      duration: 1,
    }
  );

  const portfolioItems = gsap.utils.toArray(".portfolio__list-item");

  portfolioItems.forEach(function (item) {
    gsap.fromTo(
      item,
      {
        y: 300,
        opacity: 0,
      },
      {
        scrollTrigger: item,
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );
  });

  const skillItem = gsap.utils.toArray(".skills__item");

  skillItem.forEach(function (item) {
    gsap.fromTo(
      item,
      {
        x: -500,
        opacity: 0,
      },
      {
        scrollTrigger: item,
        x: 0,
        opacity: 1,
        duration: 1,
      }
    );
  });

  gsap.fromTo(
    ".skills__bg-img-block",
    {
      x: 500,
      opacity: 0,
    },
    {
      scrollTrigger: ".skills__bg-img-block",
      x: 0,
      opacity: 1,
      duration: 1,
    }
  );
});
