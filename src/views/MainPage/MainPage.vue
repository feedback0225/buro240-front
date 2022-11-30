<template>
  <!-- <div class="container"> -->
  <HeaderSection class="header" />
  <HeroSection class="hero" />
  <SpiralDisks :can-pick-disk="canPickDisk" class="spiral-disks" />
  <!-- <ProjectsPage class="projects" v-show="false" />
    <ChessSection class="chess" v-show="false" />
    <SoundsSection class="sounds" />
    <DecorationSection class="decoration" @toForm="lockedSection" />
    <LockedSection class="locked" v-show="lockedState" />
    <LoginSection class="login" /> -->
  <!-- </div> -->
  <div ref="backgroundCanvasContainer" class="background-blob"></div>
</template>

<script>
// import useBreakpoints from "@/hooks/useBreakpoints";
import useGlobalBlob from "@/3d/blob";
import HeaderSection from "@/components/Header/HeaderSection.vue";
import HeroSection from "@/components/Hero/HeroSection.vue";
import SpiralDisks from "@/components/SpiralDisks/SpiralDisks.vue";
// import ProjectsPage from "@/components/Projects/ProjectsSection.vue";
// import ChessSection from "@/components/Chess/СhessSection.vue";
// import SoundsSection from "@/components/Sounds/SoundsSection.vue";
// import DecorationSection from "@/components/Decoration/DecorationSection.vue";
// import LockedSection from "@/components/Locked/LockedSection.vue";
// import LoginSection from "@/components/Login/LoginSection.vue";
import useMainPage from "@/hooks/useMainPage";
import { onMounted, ref, watch } from "vue";
export default {
  components: {
    HeaderSection,
    HeroSection,
    SpiralDisks,
    // ProjectsPage,
    // ChessSection,
    // SoundsSection,
    // DecorationSection,
    // LockedSection,
    // LoginSection,
  },
  setup(props, { emit }) {
    const slide = ref(null);
    const { doAnimate } = useMainPage();
    const canPickDisk = ref(false);
    const backgroundCanvasContainer = ref(null);
    const lockedState = ref(false);
    onMounted(() => {
      useGlobalBlob(backgroundCanvasContainer.value, slide);
    });

    watch(slide, () => {
      emit("slideChange", slide.value);
      if (slide.value === 3) doActiveSpiral();
      else removeActiveSpiral();
    });

    function lockedSection() {
      lockedState.value = true;
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
    });

    return {
      backgroundCanvasContainer,
      canPickDisk,
      lockedSection,
      lockedState,
    };
  },
};
</script>

<style lang="scss" src="./MainPage.scss" />
