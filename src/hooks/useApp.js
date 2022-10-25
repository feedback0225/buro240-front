import gsap from "gsap";

export default function useApp() {
  // const title = ref(null);
  // const titleUnderline = ref(null);
  // const subtitleLeft = ref(null);
  // const subtitleRight = ref(null);
  // const logo = ref(null);

  function doAnimate() {
    const tl = gsap.timeline();

    tl.fromTo(
      ".header__nav",
      { x: -100, opacity: 1, ease: "power" },
      { x: 20, duration: 0.5, ease: "power" }
    )
      .fromTo(
        ".header__title",
        { x: 1500, y: 100, opacity: 1 },
        { x: 100, duration: 1.5, ease: "power" },
        "-=1"
      )
      .fromTo(
        ".header__title-underline",
        { x: -100, opacity: 1, ease: "power" },
        { x: 20, duration: 0.5, ease: "power" },
        "-=0.5"
      )
      .fromTo(
        ".header__subtitle.header__subtitle--direction-left",
        { x: -1300, y: 200, opacity: 1 },
        { x: 72, y: 200, duration: 1.5, ease: "power" },
        "-=0.5"
      )
      .fromTo(
        ".header__subtitle.header__subtitle--direction-right",
        { x: 1900, y: 350, opacity: 1 },
        { x: 550, y: 350, duration: 1.5, ease: "power" },
        "-=0.9"
      );
  }

  return {
    doAnimate,
  };
}
