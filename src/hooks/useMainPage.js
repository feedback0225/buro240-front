/* eslint-disable prettier/prettier */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function removeClass(elCls, cls) {
    const el = document.querySelector(elCls);
    el.classList.remove(cls);
}

// ScrollTrigger.defaults({
// toggleActions: "play pause restart pause",
// scroller: ".container",
// });

export default function useMainPage() {
    // const shape02 =
    //   "M55,-57.5C69.3,-53.5,77.6,-34.3,74.1,-18.4C70.5,-2.5,55.1,10.2,46.1,27.3C37.1,44.4,34.4,65.9,25,70C15.5,74.1,-0.9,60.7,-16.9,52.4C-33,44,-48.7,40.6,-50.2,31.9C-51.7,23.2,-39.1,9.3,-38.6,-9.1C-38.2,-27.6,-49.9,-50.4,-45.4,-56.2C-41,-62,-20.5,-50.6,-0.1,-50.5C20.3,-50.4,40.6,-61.5,55,-57.5Z";
    // const shape03 =
    // "M32.1,-65.6C32.9,-49.5,18.8,-25.8,24.2,-11.7C29.7,2.4,54.7,6.9,57.3,10.2C60,13.5,40.2,15.6,29,20.8C17.7,25.9,15.1,34.1,11.5,31.8C7.9,29.5,3.4,16.7,-11.1,20.4C-25.5,24,-49.8,44.1,-56.4,44.4C-63.1,44.8,-52.1,25.3,-45.4,12.1C-38.6,-1.1,-36,-8.2,-35.9,-19.7C-35.8,-31.1,-38.1,-47,-32.5,-60.9C-26.9,-74.9,-13.5,-87,1.1,-88.7C15.7,-90.4,31.3,-81.8,32.1,-65.6Z";
    // const title = ref(null);
    // const titleUnderline = ref(null);
    // const subtitleLeft = ref(null);
    // const subtitleRight = ref(null);
    // const logo = ref(null);

    function doAnimate(slide) {
        // timeline first slide

        const locked = gsap.timeline({
            scrollTrigger: {
                scroller: ".container",
                trigger: ".locked",
                start: "0% 15%",
                // markers: true,
                end: "100% center",
                toggleActions: "restart reverse restart pause",
                // onEnter: () => {
                //   slide.value = 7;
                // },
                // onEnterBack: () => {
                //   headerNav.classList.remove("header-nav--color-white");
                //   slide.value = 7;
                // },
                // onLeave: () => {
                //   headerNav.classList.add("header-nav--color-white");
                // },
                // onLeaveBack: () => {
                // },
                // onToggle: () => {
                // }
            },
        });

        // {
        //   x: -2000,
        //     opacity: 1,
        // },
        // {
        //   x: 0,
        //     duration: 1,
        //   ease: "power",
        // },
        // "-=0.5"

        locked
            .fromTo(
                ".locked__title", {
                    x: 2000,
                }, {
                    x: 0,
                    duration: 1,
                    ease: "power",
                }
            )
            .fromTo(
                ".locked__paragraph", {
                    x: -2000,
                }, {
                    x: 0,
                    duration: 1,
                    ease: "power",
                },
                "-=0.5"
            );


        const slide1 = gsap.timeline({
            scrollTrigger: {
                scroller: ".container",
                trigger: ".header",
                // markers: true,
                start: "-15% 15%",
                end: "120% center",
                toggleActions: "restart reverse restart pause",
            },
        });

        slide1
            .fromTo(
                ".header__title", {
                    x: 1900,
                    opacity: 1,
                    duration: 1,
                }, {
                    x: 0,
                    duration: 1,
                    ease: "power",
                    onStart: () => {
                        slide.value = 1;
                    },
                    // onComplete: () => {
                    //   removeClass(".header__header", "js-move");
                    // },
                },
                "-=1"
            )
            .fromTo(
                ".header__subtitle.header__subtitle--direction-left", {
                    x: -1300,
                    duration: 1.5,
                    opacity: 1,
                }, {
                    x: 0,
                    duration: 1.5,
                    ease: "power",
                    onStart: () => {
                        // removeActiveNavItem();
                        // navItems[1].classList.add("header-nav__item--active");
                    },
                    // onComplete: () =>
                    //   removeClass(
                    //     ".header__subtitle.header__subtitle--direction-left",
                    //     "js-move"
                    //   ),
                },
                "-=0.5"
            )
            .fromTo(
                ".header__subtitle.header__subtitle--direction-right", { x: 1900, duration: 1.5, opacity: 1 }, {
                    x: 0,
                    duration: 1,
                    ease: "power",
                    onStart: () => {
                        // removeActiveNavItem();
                        // navItems[0].classList.add("header-nav__item--active");
                    },
                    // onComplete: () => {
                    //   removeClass(
                    //     ".header__subtitle.header__subtitle--direction-right",
                    //     "js-move"
                    //   );
                    // },
                },
                "-=0.9"
            );

        // timeline second slide
        const slide2 = gsap.timeline({
            scrollTrigger: {
                scroller: ".container",
                trigger: ".hero",
                // markers: true,
                start: "-30% 15%",
                end: "120% center",
                toggleActions: "restart reverse restart reverse",
                // scrub: true,
            },
        });

        slide2
            .fromTo(
                ".hero__subtitle.hero__subtitle--direction-left", {
                    x: 2000,
                    opacity: 1,
                    duration: 1,
                    onComplete: function() {
                        removeClass(".hero__container", "js-move");
                    },
                }, {
                    x: 0,
                    duration: 1,
                    ease: "power",
                    onStart: () => {
                        slide.value = 2;
                    },
                    // onStart: function () {
                    //   // removeActiveNavItem();
                    //   // navItems[0].classList.add("header-nav__item--active");
                    // },
                    onComplete: function() {
                        // navItems[0].classList.add("header-nav__item--active");
                    },
                }
            )
            .fromTo(
                ".hero__subtitle.hero__subtitle--direction-right", {
                    x: -2000,
                    opacity: 1,
                }, {
                    x: 0,
                    duration: 1,
                    ease: "power",
                },
                "-=0.5"
            )
            .fromTo(
                ".hero__label", {
                    x: -800,
                }, {
                    x: 0,
                    duration: 1,
                    ease: "power",
                },
                "-=0.5"
            );

        // eslint-disable-next-line no-unused-vars
        const slide3 = gsap.timeline({
            scrollTrigger: {
                scroller: ".container",
                trigger: ".spiral-disks",
                // markers: true,
                start: "10% 15%",
                end: "60% center",
                toggleActions: "restart reverse restart reverse",
                onEnter: () => {
                    // console.log("enter spiral-disks");
                    slide.value = 3;
                },
                onEnterBack: () => {
                    // console.log("onEnterLeave spiral-disks");
                    slide.value = 3;
                },
                onLeave: () => {
                    // console.log("leave spiral-disks");
                },
                onLeaveBack: () => {
                    // console.log("onLeaveBack spiral-disks");
                    slide.value = 3;
                },
                onToggle: () => {
                    // console.log("toggle");
                },
                onRefresh: () => {
                    // console.log("refresh spiral-disks");
                },
                // scrub: true,
            },
        });

        slide3
            .fromTo(
                ".spiral-disks__svg.spiral-disks__svg--1", {
                    opacity: 1,
                    x: 200,
                }, {
                    x: 0,
                    duration: 1,
                }
            )
            .fromTo(
                ".spiral-disks__svg.spiral-disks__svg--2", {
                    opacity: 1,
                    x: -300,
                }, {
                    x: 0,
                    duration: 1,
                },
                "-=0.4"
            );

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
                    slide.value = 5;
                },
                onEnterBack: () => {
                    slide.value = 5;
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
                    slide.value = 6;
                },
                onEnterBack: () => {
                    slide.value = 6;
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
                // markers: true,
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
                // markers: true,
                scroller: ".container",
                trigger: ".login",
                start: "-30% 15%",
                end: "200% center",
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
                ".login__marquee", { opacity: 1 }, {
                    opacity: 0,
                    delay: 4,
                    duration: 3,
                    onComplete: () => {
                        document
                            .querySelector(".login__marquee")
                            .classList.add("visually-hidden");
                    },
                }
            )
            .to(".login__form .login__label:nth-child(1)", {
                opacity: 1,
            });
    }

    // const fadeLogoOnForm = gsap.timeline({
    //
    // })

    return {
        doAnimate,
    };
}