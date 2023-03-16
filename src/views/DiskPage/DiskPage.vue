<template>
  <section class="disk-page" ref="container">
    <div class="disk-page__container">
      <div class="disk-page__marquee-container">
        <div class="disk-page__marquee">{{ diskPhrase }}</div>
      </div>
      <div ref="imageContainer" class="disk-page__image-container">
        <img class="disk-page__image" :src="diskImage" alt="" />
      </div>
      <div class="disk-page__label">
        <div class="disk-page__label-instance">
          <svg
            class="card"
            width="150"
            height="250"
            viewBox="0 0 150 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 0C8.95431 0 0 8.9543 0 20V230C0 241.046 8.9543 250 20 250H130C141.046 250 150 241.046 150 230V20C150 8.9543 141.046 0 130 0H20ZM75 28C78.3137 28 81 25.3137 81 22C81 18.6863 78.3137 16 75 16C71.6863 16 69 18.6863 69 22C69 25.3137 71.6863 28 75 28Z"
              fill="#A2B79E"
            />
          </svg>
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
          <svg
            class="card"
            width="150"
            height="250"
            viewBox="0 0 150 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 0C8.95431 0 0 8.9543 0 20V230C0 241.046 8.9543 250 20 250H130C141.046 250 150 241.046 150 230V20C150 8.9543 141.046 0 130 0H20ZM75 28C78.3137 28 81 25.3137 81 22C81 18.6863 78.3137 16 75 16C71.6863 16 69 18.6863 69 22C69 25.3137 71.6863 28 75 28Z"
              fill="#A2B79E"
            />
          </svg>
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
    <div class="projects__marquee-container">
      <div class="projects__marquee">
        <span class="projects__marquee-left"> SHOOTING </span>
        <div class="projects__marquee-right">
          <span class="projects__marquee-text">
            ТУТ РАБОТЫ ХОРОШИЕ ТАКИЕ БУДУТ ЭТО НЕ МОЖЕТ НЕ РАДОВАТЬ
          </span>
          <span class="projects__marquee-text">
            ЕЩЕ ЧЕТ НАПИСАТЬ НАДО НУ КАК У ВАС ДЕЛА КАК ЖИЗНЬ В
          </span>
        </div>
        <span class="projects__marquee-left"> SHOOTING </span>
        <div class="projects__marquee-right">
          <span class="projects__marquee-text">
            ТУТ РАБОТЫ ХОРОШИЕ ТАКИЕ БУДУТ ЭТО НЕ МОЖЕТ НЕ РАДОВАТЬ
          </span>
          <span class="projects__marquee-text">
            ЕЩЕ ЧЕТ НАПИСАТЬ НАДО НУ КАК У ВАС ДЕЛА КАК ЖИЗНЬ В
          </span>
        </div>
        <span class="projects__marquee-left"> SHOOTING </span>
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
import { PHRASE, TEXTURES } from "@/constants";
import useBreakpoints from "@/hooks/useBreakpoints";
import { onMounted, ref, computed, reactive } from "vue";
import { useRoute } from "vue-router";
import gsap from "gsap";
import useBlobsFlight from "@/hooks/useHeaderBlobsFlight";

export default {
  setup() {
    const phrase = PHRASE;
    const $route = useRoute();
    const imageContainer = ref(null);
    const container = ref(null);
    const width = useBreakpoints();
    const openAll = ref(false);
    const { animateBlobs } = useBlobsFlight();
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
      const root = document.querySelector(".container");
      gsap.to(root, {
        opacity: 1,
        duration: 1,
        onComplete: () => (openAll.value = true),
      });

      gsap.to(imageContainer.value, {
        delay: 10,
        duration: 1.4,
        opacity: 1,
        zIndex: 1,
      });

      gsap.to(document.querySelectorAll(".disk-page__label-instance"), {
        delay: 8,
        duration: 2,
        opacity: 1,
      });

      document
        .querySelectorAll(".disk-page__label-instance")
        .forEach((label) => {
          animateBlobs(label);
        });
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
