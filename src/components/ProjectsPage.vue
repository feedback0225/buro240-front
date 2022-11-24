<template>
  <section>
    <div class="projects__container">
      <div class="projects__group-blob">
        <svg
          class="projects__project-svg projects__project-svg--1"
          viewBox="0 0 800 200"
        >
          <defs>
            <clipPath id="clip">
              <path
                id="form01"
                stroke="none"
                d="M23.5,-28.6C35.1,-34,52.5,-37.2,63.7,-32C75,-26.9,80,-13.5,68.9,-6.4C57.8,0.6,30.6,1.3,18.9,5.6C7.2,9.9,11.1,18,10.6,28C10,38,5,50.1,-5.2,59.1C-15.5,68.2,-30.9,74.3,-35.1,66.3C-39.3,58.4,-32.3,36.5,-29.4,23.1C-26.5,9.7,-27.8,4.8,-32,-2.5C-36.3,-9.8,-43.5,-19.5,-40.7,-23.1C-37.9,-26.7,-25.1,-24,-16.7,-20.5C-8.2,-17,-4.1,-12.6,0.9,-14.2C5.9,-15.8,11.8,-23.3,23.5,-28.6Z"
              />
              <path
                id="form02"
                stroke="none"
                class="hidden"
                d="M13.2,-22.3C15.6,-21.4,14.9,-14.8,25.1,-10.2C35.3,-5.5,56.3,-2.7,64.2,4.6C72.1,11.9,66.9,23.8,57,28.9C47.1,34,32.5,32.5,22.2,39.4C11.9,46.3,5.9,61.7,1.7,58.8C-2.6,55.9,-5.3,34.8,-7.3,23.1C-9.4,11.5,-10.9,9.3,-13.7,7C-16.5,4.7,-20.6,2.4,-29,-4.8C-37.3,-12,-49.9,-24,-51.2,-33.5C-52.6,-43,-42.7,-50,-32.3,-46.2C-21.9,-42.5,-11,-28,-2.8,-23.2C5.4,-18.4,10.8,-23.2,13.2,-22.3Z"
              />
            </clipPath>
          </defs>

          <g id="clipPath" clip-path="url(#clip)">
            <image
              class="projects__project-png projects__project-png--1"
              xlink:href="@/assets/Rectangle119.png"
            />
          </g>
        </svg>
      </div>
    </div>
    <div class="projects__marquee-container">
      <div class="projects__marquee">
        <span class="projects__marquee-left"> DESIGN </span>
        <div class="projects__marquee-right">
          <span class="projects__marquee-text">
            ТУТ РАБОТЫ ХОРОШИЕ ТАКИЕ БУДУТ ЭТО НЕ МОЖЕТ НЕ РАДОВАТЬ
          </span>
          <span class="projects__marquee-text">
            ЕЩЕ ЧЕТ НАПИСАТЬ НАДО НУ КАК У ВАС ДЕЛА КАК ЖИЗНЬ В
          </span>
        </div>
        <span class="projects__marquee-left"> DESIGN </span>
        <div class="projects__marquee-right">
          <span class="projects__marquee-text">
            ТУТ РАБОТЫ ХОРОШИЕ ТАКИЕ БУДУТ ЭТО НЕ МОЖЕТ НЕ РАДОВАТЬ
          </span>
          <span class="projects__marquee-text">
            ЕЩЕ ЧЕТ НАПИСАТЬ НАДО НУ КАК У ВАС ДЕЛА КАК ЖИЗНЬ В
          </span>
        </div>
        <span class="projects__marquee-left"> DESIGN </span>
        <div class="projects__marquee-right">
          <span class="projects__marquee-text">
            ТУТ РАБОТЫ ХОРОШИЕ ТАКИЕ БУДУТ ЭТО НЕ МОЖЕТ НЕ РАДОВАТЬ
          </span>
          <span class="projects__marquee-text">
            ЕЩЕ ЧЕТ НАПИСАТЬ НАДО НУ КАК У ВАС ДЕЛА КАК ЖИЗНЬ В
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import RunningLine from "@/components/RunningLine.vue";
import gsap from "gsap";
import { onMounted } from "@vue/runtime-core";
export default {
  // components: { RunningLine },
  setup() {
    function blob() {
      var area = document.querySelector(".projects__group-blob");
      var mask = document.querySelector("#clip");

      gsap.set(area, { xPercent: -50, yPercent: -50, autoAlpha: 1 });
      // gsap.set(".projects__project-png.projects__project-png--1", {
      //   right: 0,
      //   top: 100,
      // });
      gsap.set("#form01", { x: 100, y: 50 });
      // gsap.set('.projects__project-png.projects__project-png--1', {})

      gsap
        .timeline({ repeat: -1, yoyo: true })
        // .to("#form01", {
        //   morphSVG: "#form02",
        //   duration: 5,
        //   ease: "power1.inOut",
        // })
        // .fromTo(
        //   "#form01",
        //   {
        //     rotation: -10,
        //   },
        //   {
        //     rotation: +10,
        //     transformOrigin: "center top",
        //     duration: 5,
        //     ease: "none",
        //     repeat: 1,
        //     yoyo: true,
        //   },
        //   0
        // )
        .to(
          ".projects__project-png.projects__project-png--1",
          {
            attr: { x: 25 },
            duration: 5,
            ease: "none",
            repeat: 1,
            yoyo: true,
          },
          0
        )
        .to(
          ".projects__project-png.projects__project-png--1",
          {
            attr: { y: -15 },
            duration: 5,
            ease: "power1.inOut",
            repeat: 1,
            yoyo: true,
          },
          0
        );

      // var ww = window.innerWidth;
      // var wh = window.innerHeight;

      // // eslint-disable-next-line no-unused-vars
      // function moveCoffee(e) {
      //   ww = window.innerWidth;
      //   wh = window.innerHeight;
      //   gsap.to(mask, {
      //     x: (e.clientX - ww / 2) * 0.5, // 0.5 = reduced dist
      //     y: (e.clientY - wh / 2) * 0.5,
      //     duration: 0.5,
      //     delay: 0.2,
      //   });
      // }

      // area.addEventListener("mousemove", moveCoffee);
      // window.addEventListener("resize", moveCoffee);

      area.addEventListener("mouseleave", () => {
        gsap.to(mask, { x: 0, y: 0, duration: 1, delay: 0.2, overwrite: true });
      });
    }

    onMounted(() => {
      blob();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/projects.scss";

.projects__project-svg {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.hidden {
  visibility: hidden;
}

@keyframes ticker {
  0% {
    transform: translate(100%, 0);
  }

  50% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-100%, 0);
  }
}
</style>
