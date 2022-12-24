<template>
  <section>
    <div class="locked__container">
      <div class="locked__header">
        <h2 class="locked__title">LOCKED CLUB</h2>
        <p class="locked__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          consequatur inventore illo, cupiditate fugit magnam, dolores ratione
          quam ab sint optio facere numquam perspiciatis cum, recusandae eum
          rerum placeat praesentium.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
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
          ".locked__title",
          {
            x: 2000,
          },
          {
            x: 0,
            duration: 1,
            ease: "power",
          }
        )
        .fromTo(
          ".locked__paragraph",
          {
            x: -2000,
          },
          {
            x: 0,
            duration: 1,
            ease: "power",
          },
          "-=0.5"
        );
    });
  },
};
</script>
<style lang="scss" src="./Locked.scss" />
