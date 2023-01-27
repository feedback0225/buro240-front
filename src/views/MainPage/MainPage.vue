<template>
  <HeaderSection class="header" />
  <HeroSection class="hero" />
  <SpiralDisks :can-pick-disk="canPickDisk" class="spiral-disks" />
  <ProjectsPage class="projects" v-show="false" />
  <ChessSection class="chess" v-show="false" />
  <SoundsSection class="sounds" />
  <DecorationSection class="decoration" @unlock="unlockSection" />
  <LockedSection ref="lockedSection" class="locked" v-show="lockedState" />
  <LoginSection class="login" />
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
// import Scrollbar from "smooth-scrollbar";

export default {
  components: {
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

  setup(props, { emit }) {
    const slide = ref(null);
    const { doAnimate } = useMainPage();
    const canPickDisk = ref(false);
    const backgroundCanvasContainer = ref(null);
    const lockedState = ref(false);
    const lockedSection = ref(false);
    // let smoothScrollbar;
    let lockedElement;
    let lockedElementPosition;
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
      document.fonts.ready.then(() => {
        doAnimate(slide);
      });
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
      lockedState,
      lockedSection,
    };
  },
};
</script>

<style lang="scss" src="./MainPage.scss" />
