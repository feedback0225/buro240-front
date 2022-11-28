<template>
  <section>
    <div class="projects__container">
      <svg class="SVG" width="600" height="400">
        <mask id="svgmask1">
          <path
            id="path"
            d="M368.5,285.5Q360,321,345,373.5Q330,426,281,400.5Q232,375,165.5,399.5Q99,424,69.5,368Q40,312,60.5,256Q81,200,86.5,134Q92,68,155.5,49.5Q219,31,267,69.5Q315,108,382,115Q449,122,413,186Q377,250,368.5,285.5Z"
            fill="#d1d8e0"
          ></path>
        </mask>
        <image
          class="projects__absolute-img"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="@/assets/projectsExample.png"
          mask="url(#svgmask1)"
        ></image>
      </svg>
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
import gsap from "gsap";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    function blob() {
      const clickPlace = document.querySelector(".SVG");
      clickPlace.addEventListener("click", () => {
        gsap.to("#path", {
          scale: 4,
          duration: 2,
        });
      });

      gsap
        .timeline({ repeat: -1, yoyo: true })
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
    }

    onMounted(() => {
      blob();
    });
  },
};
</script>

<style lang="scss" src="./Projects.scss" />
