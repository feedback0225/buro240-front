import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function useDiskPage() {
  function doAnimate(slide) {
    gsap.timeline({
      scrollTrigger: {
        scroller: ".container",
        trigger: ".projects",
        // markers: true,
        start: "-30% 15%",
        end: "100% center",
        toggleActions: "restart pause pause reverse",
        onEnter: () => {
          // console.log("enter");
          slide.value = 4;
        },
        onEnterBack: () => {
          // console.log("onEnterLeave");
          slide.value = 4;
        },
        onLeave: () => {
          // console.log("leave projects");
        },
        onLeaveBack: () => {
          // console.log("onLeaveBack");
          // slide.value = 4;
        },
        onToggle: () => {
          // console.log("toggle");
        },
        // scrub: true,
      },
    });

    // slide4.fromTo(
    //   ".background-blob",
    //   {
    //     opacity: 1,
    //   },
    //   {
    //     opacity: 0,
    //   }
    // );

    // chess section
    gsap.timeline({
      scrollTrigger: {
        scroller: ".container",
        trigger: ".chess",
        start: "-30% 15%",
        end: "100% center",
        toggleActions: "restart reverse restart pause",
        onEnter: () => {
          // console.log("enter");
          slide.value = 5;
        },
        onEnterBack: () => {
          // console.log("onEnterLeave");
          slide.value = 5;
        },
        onLeave: () => {
          // console.log("leave projects");
        },
        onLeaveBack: () => {
          // console.log("onLeaveBack");
          // slide.value = 5;
        },
        onToggle: () => {
          // console.log("toggle");
        },
      },
    });

    // sound section
    gsap.timeline({
      scrollTrigger: {
        scroller: ".container",
        trigger: ".sounds",
        start: "-30% 15%",
        end: "100% center",
        toggleActions: "restart reverse restart pause",
        onEnter: () => {
          // console.log("enter");
          slide.value = 6;
        },
        onEnterBack: () => {
          // console.log("onEnterLeave");
          slide.value = 6;
        },
        onLeave: () => {
          // console.log("leave projects");
        },
        onLeaveBack: () => {
          // console.log("onLeaveBack");
          // slide.value = 6;
        },
        onToggle: () => {
          // console.log("toggle");
        },
      },
    });
    const headerNav = document.querySelector(".header-nav");
    // decoration section
    gsap.timeline({
      scrollTrigger: {
        scroller: ".container",
        trigger: ".decoration",
        start: "100% 15%",
        markers: true,
        end: "100% center",
        toggleActions: "restart reverse restart pause",
        onEnter: () => {
          slide.value = 7;
        },
        onEnterBack: () => {
          headerNav.classList.remove("header-nav--color-white");
          slide.value = 7;
        },
        onLeave: () => {
          headerNav.classList.add("header-nav--color-white");
        },
        onLeaveBack: () => {},
        onToggle: () => {},
      },
    });

    const login = gsap.timeline({
      scrollTrigger: {
        scroller: ".container",
        trigger: ".login",
        start: "-30% 15%",
        end: "100% center",
        toggleActions: "play pause pause pause",

        onEnter: () => {
          slide.value = 9;
        },
        onEnterBack: () => {
          slide.value = 9;
        },
        onLeave: () => {},
        onLeaveBack: () => {},
      },
    });

    login
      .fromTo(
        ".login__marquee",
        { opacity: 1 },
        {
          opacity: 0,
          delay: 4,
          duration: 3,
          onComplete: () => {
            console.log("here");
            document
              .querySelector(".login__marquee")
              .classList.add("visually-hidden");
          },
        }
      )
      .to(".login__form", {
        opacity: 1,
      });
  }

  return {
    doAnimate,
  };
}
