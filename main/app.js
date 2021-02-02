function animatePages() {
  console.log("Works.");

  controller = new ScrollMagic.Controller();

  //Select some things
  const sectioners = document.querySelectorAll(".page");
  const nav = document.querySelector(".nav");
  const pairers = document.querySelectorAll(".pair");
  sectioners.forEach((section, index, sections) => {
    const RevealTagline1 = section.querySelector(".notUnderline");
    const RevealTagline2 = section.querySelector(".underline");
    const Reveal = section.querySelector(".anima");
    const RevealHolder = section.querySelector(".holder");

    const RevealImg = section.querySelector(".welcomeIcon");
    const RevealCard = section.querySelector(".featureCard");
    const RevealMessage = section.querySelector(".message1");
    const pairHook = section.querySelector(".pair");

    //Timeline
    const slide = gsap.timeline({
      defaults: {
        duration: 0.7,
        ease: "power3.inOut",
      },
    });

    // slide.fromTo(
    //   RevealImg,
    //   0.6,
    //   {
    //     // y: "-100%",
    //     scale: 0,
    //     opacity: 0,
    //   },
    //   {
    //     y: "0%",
    //     scale: 1,
    //     autoAlpha: 1,
    //   },
    //   "power4.inOut",
    //   "-=0.6"
    // );
    slide.fromTo(
      ".logo",
      0.6,
      {
        y: "50%",
        // x: "100%",
        scale: 1,
        opacity: 0,
      },
      {
        y: "0%",
        // x: "0%",
        scale: 1,
        autoAlpha: 1,
        ease: "power3.inOut",
      }
      //   "power3.inOut"
    );
    slide.fromTo(
      RevealTagline1,
      0.3,
      {
        y: "50%",
        // scale: 0,
        opacity: 0,
      },
      {
        y: "0%",
        // scale: 1,
        autoAlpha: 1,
        ease: "power3.inOut",
      }
    );
    slide.fromTo(
      RevealTagline2,
      0.3,
      {
        y: "50%",
        // scale: 0,
        opacity: 0,
      },
      {
        y: "0%",
        // scale: 1,
        autoAlpha: 1,
        ease: "power3.inOut",
      }
    );
    slide.fromTo(
      ".requestButton",
      0.3,

      {
        y: "50%",
        opacity: 0,
        // scale: 0,
      },
      {
        y: "0%",
        autoAlpha: 1,
        ease: "power3.inOut",
        // scale: 1,
      }
      //   "-=0.2"
    );
    slide.fromTo(
      ".lookman",
      0.3,

      {
        y: "50%",
        opacity: 0,
        // scale: 0,
      },
      {
        y: "0%",
        autoAlpha: 1,
        ease: "power3.inOut",
        // scale: 1,
      }
      //   "-=0.2"
    );

    // slide.fromTo(
    //   Reveal,
    //   {
    //     y: "80%",
    //     opacity: 0,
    //   },
    //   {
    //     y: "0%",
    //     opacity: 1,
    //     visibility: "visible",
    //   },
    //   "-=2"
    // );

    // slide.fromTo(
    //   RevealHolder,
    //   {
    //     y: "0%",
    //     opacity: 0,
    //   },
    //   {
    //     y: "0%",
    //     opacity: 1,
    //     scale: 1,
    //     visibility: "visible",
    //   },
    //   "-=1.8"
    // );
    // slide.fromTo(
    //   RevealMessage,
    //   {
    //     y: "100%",
    //     opacity: 0,
    //   },
    //   {
    //     y: "0%",
    //     opacity: 1,
    //   }
    // );

    //Tween for timeline

    //Create Scene

    slideScene = new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: 0.2,
      reverse: false,
    })

      .setTween(slide)
      .addTo(controller);
    //Another One
  });

  //Parallax
  pairers.forEach((pairHook, index, pairs) => {
    const Ptl = new TimelineMax();
    let child = pairHook.querySelectorAll(".parallax");
    const illustrationReveal = pairHook.querySelector(".illustration");
    Ptl.fromTo(
      illustrationReveal,
      1,
      {
        // scale: 0,
        x: -200,
        opacity: 0,
      },
      {
        scale: 1,
        x: 0,
        opacity: 1,
      },
      "power3.inOut"
    );

    Ptl.to(child, 1.5, {
      y: -120,
      ease: "power1.inOut",
    });
    var scene = new ScrollMagic.Scene({
      triggerElement: pairHook,
      triggerHook: 0.8,
      duration: "100%",
    })
      .setTween(Ptl)

      .addTo(controller);
  });
}

animatePages();
