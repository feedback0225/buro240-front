<template>
  <!-- <vue-scroll-snap :fullscreen="true"> -->
  <full-page :options="options" id="fullpage" ref="fullpage">
    <div class="section">
      <HeaderSection class="header" />
    </div>
    <!-- <div class="section"> -->
    <div class="section">
      <HeroSection class="hero" />
    </div>
    <!-- </div> -->
    <div class="section">
      <SpiralDisks :can-pick-disk="canPickDisk" class="spiral-disks" />
    </div>
    <ProjectsPage class="projects" v-show="false" />
    <ChessSection class="chess" v-show="false" />
    <div class="section">
      <SoundsSection class="sounds" />
    </div>
    <!-- <div class="section"> -->
    <div class="section">
      <DecorationSection class="decoration" @unlock="unlockSection" />
    </div>
    <!-- </div> -->
    <!-- <div class="section"> -->
    <div v-if="lockedState" class="section">
      <LockedSection ref="lockedSection" class="locked" v-show="lockedState" />
    </div>
    <div class="section">
      <LoginSection class="login" />
    </div>
  </full-page>
</template>

<script>
import useGlobalBlob from "@/3d/blob";
import HeaderSection from "@/components/Header/HeaderSection.vue";
import HeroSection from "@/components/Hero/HeroSection.vue";
import SpiralDisks from "@/components/SpiralDisks/SpiralDisks.vue";
import ProjectsPage from "@/components/Projects/ProjectsSection.vue";
import ChessSection from "@/components/Chess/СhessSection.vue";
import SoundsSection from "@/components/Sounds/SoundsSection.vue";
import DecorationSection from "@/components/Decoration/DecorationSection.vue";
import LockedSection from "@/components/Locked/LockedSection.vue";
import LoginSection from "@/components/Login/LoginSection.vue";
import useMainPage from "@/hooks/useMainPage";
import { onMounted, ref, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import Slider from "vue-plain-slider";
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Swiper,
    // eslint-disable-next-line vue/no-unused-components
    SwiperSlide,
    // eslint-disable-next-line vue/no-unused-components
    Slider,
    HeaderSection,
    HeroSection,
    SpiralDisks,
    ProjectsPage,
    ChessSection,
    SoundsSection,
    DecorationSection,
    LockedSection,
    LoginSection,
  },

  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
      },
      inMove: false,
      inMoveDelay: 400,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      startY: 0,
    };
  },
  setup(_props, { emit }) {
    const slide = ref(null);
    const { doAnimate } = useMainPage();
    const canPickDisk = ref(false);
    const backgroundCanvasContainer = ref(null);
    const lockedState = ref(false);
    const lockedSection = ref(false);
    // let smoothScrollbar;
    let lockedElement;
    let lockedElementPosition;

    const afterLoad = (e) => {
      emit("changeActive", e);
      document.fonts.ready.then(() => {
        doAnimate(e);
      });
    };
    onMounted(() => {
      useGlobalBlob(document.querySelector(".background-blob"), slide);
    });

    watch(slide, () => {
      emit("slideChange", slide.value);
      if (slide.value === 3) doActiveSpiral();
      else removeActiveSpiral();
    });

    function unlockSection() {
      lockedState.value = true;
      document.querySelector(".container").scroll({
        top: lockedElementPosition.y,
        behavior: "smooth",
      });
    }

    function doActiveSpiral() {
      canPickDisk.value = true;
    }

    function removeActiveSpiral() {
      canPickDisk.value = false;
    }

    onMounted(() => {
      console.log(slide);
      lockedElement = document.querySelector(".locked");
      if (lockedElement) {
        lockedElement.style.display = "block";
        lockedElementPosition = lockedElement.getBoundingClientRect();
        lockedElement.style.display = "none";
      }
      // smoothScrollbar = Scrollbar.init(document.querySelector(".scroller"), {
      //   damping: 0.1,
      //   thumbMinSize: 20,
      //   renderByPixels: true,
      //   alwaysShowTracks: true,
      // });
    });

    return {
      backgroundCanvasContainer,
      canPickDisk,
      unlockSection,
      afterLoad,
      lockedState,
      lockedSection,
    };
  },
};
</script>

<style lang="scss" src="./MainPage.scss" />
