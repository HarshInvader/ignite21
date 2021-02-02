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

    slide.fromTo(
      ".mike",
      {
        x: "200%",
        scale: 0,
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        scale: 1,
        visibility: "visible",
      }
      //   "-=2"
    );

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
    const ideathon = pairHook.querySelector(".ideathon");
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
      }
      // "power3.inOut"
    );

    Ptl.fromTo(
      child,
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
      }
      // "power3.inOut"
    );
    // Ptl.fromTo(
    //   ideathon,
    //   1,
    //   {
    //     background: "#554cc2",
    //   },
    //   {
    //     background: "linear-gradient(139.41deg, #EBBE21 5.11%, #D67300 91.8%)",
    //   },
    //   "-=1.8"
    // );
    // Ptl.fromTo(
    // child,
    // 1.5,
    // {
    //   y: 60,
    //   ease: "power1.inOut",
    // },
    // {
    //   // scale: 0,
    //   y: -120,
    //   // opacity: 0,
    // }
    // );
    var scene = new ScrollMagic.Scene({
      triggerElement: pairHook,
      triggerHook: 0.8,
      duration: "100%",
    })
      .setTween(Ptl)

      .addTo(controller);
  });
}

const $bigBall = document.querySelector(".cursor__ball--big");
const $smallBall = document.querySelector(".cursor__ball--small");
const $hoverables = document.querySelectorAll(".hoverable");

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener("mouseenter", onMouseHover);
  $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, 0.4, {
    x: e.clientX + 14,
    y: e.clientY + 18,
  });
  TweenMax.to($smallBall, 0.1, {
    x: e.clientX - 5,
    y: e.clientY - 7,
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, 0.3, {
    scale: 4,
    // width: "200px",
    // height: "150px",
    // cx: "40px",
    // r: "40px",
    // width: 30,
    // force3D: false,
    // attr: { width: 100, height: 100 },
  });
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1,
  });
}

animatePages();
