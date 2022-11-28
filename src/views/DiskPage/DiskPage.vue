<template>
  <div class="disk-page" ref="container" :style="background">
    <div class="disk-page__container">
      <div class="disk-page__marquee-container">
        <div class="disk-page__marquee">{{ diskPhrase }}</div>
      </div>
      <div ref="imageContainer" class="disk-page__image-container">
        <img class="disk-page__image" :src="diskImage" alt="" />
      </div>
      <div class="disk-page__label">
        <div class="disk-page__label-instance">
          <span class="disk-page__label-hole"></span>
          <span class="disk-page__label-text">
            Lorem ipsum dolor sit amet,
          </span>
          <SvgSprite
            symbol="logo"
            class="disk-page__label-logo"
            :size="iconState.logo"
          />
        </div>
        <div class="disk-page__label-instance">
          <span class="disk-page__label-hole"></span>
          <span class="disk-page__label-text">
            Lorem ipsum dolor sit amet,
          </span>
          <SvgSprite
            symbol="logo"
            class="disk-page__label-logo"
            :size="iconState.logo"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- <SoundsSection class="sounds" />
  <DecorationSection class="decoration" @toForm="lockedSection" />
  <LockedSection class="locked" v-show="lockedState" />
  <LoginSection class="login" /> -->
</template>

<script>
import { PHRASE, TEXTURES } from "@/constants";
import useBreakpoints from "@/hooks/useBreakpoints";
// import SoundsSection from "@/components/Sounds/SoundsSection.vue";
// import DecorationSection from "@/components/Decoration/DecorationSection.vue";
// import LockedSection from "@/components/Locked/LockedSection.vue";
// import LoginSection from "@/components/Login/LoginSection.vue";
import interact from "interactjs";
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import gsap from "gsap";

export default {
  components: {
    // HeaderSection,
    // HeroSection,
    // SpiralDisks,
    // ProjectsPage,
    // ChessSection,
    // SoundsSection,
    // DecorationSection,
    // LockedSection,
    // LoginSection,
  },
  setup() {
    const phrase = PHRASE;
    const $route = useRoute();
    const imageContainer = ref(null);
    const container = ref(null);
    const width = useBreakpoints();

    const iconState = computed(() => {
      if (width.value < 821)
        return {
          logo: 30,
        };
      else
        return {
          logo: 20,
        };
    });

    const diskPhrase = computed(() => {
      return PHRASE[$route.params.id];
    });
    const diskImage = computed(() => {
      return TEXTURES[$route.params.id].photo;
    });
    onMounted(() => {
      gsap.to(imageContainer.value, {
        delay: 7,
        duration: 1.4,
        opacity: 1,
        zIndex: 1,
      });

      gsap.to(document.querySelectorAll(".disk-page__label-instance"), {
        delay: 8,
        duration: 2,
        opacity: 1,
      });

      interact(".disk-page__label-instance").draggable({
        onmove: dragMoveListener,
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: true,
          }),
        ],
      });

      function dragMoveListener(event) {
        var target = event.target,
          x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
          y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
        target.style.webkitTransform = target.style.transform =
          "translate(" + x + "px, " + y + "px)" + "rotate(" + y / 2 + "deg)";
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      }
    });

    return {
      phrase,
      container,
      $route,
      diskPhrase,
      diskImage,
      imageContainer,
      iconState,
    };
  },
};
</script>

<style lang="scss" src="./DiskPage.scss" />
