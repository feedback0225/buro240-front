<template>
  <section v-if="lockedState">
    <div class="locked__container">
      <h2 class="locked__title">LOCKED CLUB</h2>
      <p class="locked__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        consequatur inventore illo, cupiditate fugit magnam, dolores ratione
        quam ab sint optio facere numquam perspiciatis cum, recusandae eum rerum
        placeat praesentium.
      </p>
      <img src="@/assets/lockedCenter.png" alt="альбом" class="locked__img" />
    </div>
  </section>
</template>

<script>
// import gsap from "gsap";
import { onMounted } from "@vue/runtime-core";
export default {
  props: {
    lockedState: {
      default: false,
      type: Boolean,
    },
  },
  setup() {
    onMounted(() => {
      // const headerNav = document.querySelector(".header-nav");
      // gsap.timeline({
      //   scrollTrigger: {
      //     scroller: ".container",
      //     markers: true,
      //     trigger: ".locked",
      //     start: "-10% 15%",
      //     end: "100% center",
      //     toggleActions: "restart reverse restart pause",
      //     onEnter: () => {
      //       headerNav.classList.add("header-nav--color-white");
      //     },
      //     onEnterBack: () => {
      //       headerNav.classList.add("header-nav--color-white");
      //     },
      //     onLeave: () => {
      //       // headerNav.classList.add("header-nav--color-white");
      //     },
      //     onLeaveBack: () => {
      //       // headerNav.classList.remove("header-nav--color-white");
      //     },
      //   },
      // });
    });

    // watch(
    //   () => props.lockedState,
    //   () => {
    //     if (props.lockedState) {
    //       // const headerNav = document.querySelector(".header-nav");

    //       // nextTick().then(() => {
    //       gsap.timeline({
    //         scrollTrigger: {
    //           scroller: ".container",
    //           markers: true,
    //           trigger: ".locked",
    //           start: "0% 15%",
    //           end: "100% center",
    //           toggleActions: "restart reverse restart pause",

    //           onEnter: () => {
    //             // headerNav.classList.add("header-nav--color-white");
    //           },
    //           onEnterBack: () => {
    //             // headerNav.classList.add("header-nav--color-white");
    //           },
    //           onLeave: () => {
    //             // headerNav.classList.add("header-nav--color-white");
    //           },
    //           onLeaveBack: () => {
    //             // headerNav.classList.remove("header-nav--color-white");
    //           },
    //         },
    //       });
    //       // });
    //     }
    //   }
    // );
  },
};
</script>

<style lang="scss" src="./Locked.scss" />
