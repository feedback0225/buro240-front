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
