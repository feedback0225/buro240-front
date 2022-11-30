<template>
  <section class="disk-page" ref="container" :style="background">
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
  </section>
  <SoundsSection class="sounds" />
  <DecorationSection class="decoration" @toForm="lockedSection" />
  <LockedSection class="locked" :locked-state="stateSection.lockedState" />
  <LoginSection class="login" />
</template>

<script>
import { PHRASE, TEXTURES } from "@/constants";
import useBreakpoints from "@/hooks/useBreakpoints";
import SoundsSection from "@/components/Sounds/SoundsSection.vue";
import DecorationSection from "@/components/Decoration/DecorationSection.vue";
import LockedSection from "@/components/Locked/LockedSection.vue";
import LoginSection from "@/components/Login/LoginSection.vue";
import useDiskPage from "@/hooks/useDiskPage";
import interact from "interactjs";
// import scrollTo from "@/handlers/scrollTo";
import { onMounted, ref, computed, watch, reactive } from "vue";
import { useRoute } from "vue-router";
import gsap from "gsap";

export default {
  components: {
    SoundsSection,
    DecorationSection,
    LockedSection,
    LoginSection,
  },
  setup(props, { emit }) {
    const { doAnimate } = useDiskPage();
    const phrase = PHRASE;
    const $route = useRoute();
    const imageContainer = ref(null);
    const container = ref(null);
    const width = useBreakpoints();
    const slide = ref(null);
    const openAll = ref(false);
    // const lockedState = ref(false);
    const stateSection = reactive({
      locked: false,
      login: true,
    });

    function lockedSection() {
      stateSection.lockedState = true;
    }

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

    watch(slide, () => {
      emit("slideChange", slide.value);
    });

    const diskPhrase = computed(() => {
      return PHRASE[$route.params.id];
    });
    const diskImage = computed(() => {
      return TEXTURES[$route.params.id].photo;
    });
    window.scrollTo({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
    onMounted(() => {
      // document.fonts.ready.then(() => {
      // window.scrollTo(0, 0);
      // scrollTo(container.value, 10);
      doAnimate(slide);

      const root = document.querySelector(".container");
      gsap.to(root, {
        opacity: 1,
        duration: 1,
        onComplete: () => (openAll.value = true),
      });
      // });

      // gsap.to(container.value, {
      //   opacity: 1,
      //   duration: 1.4,
      // });

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
      openAll,
      lockedSection,
      stateSection,
    };
  },
};
</script>

<style lang="scss" src="./DiskPage.scss" />
