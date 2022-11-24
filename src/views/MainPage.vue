<template>
  <div class="container">
    <HeaderSection class="header" />
    <HeroSection class="hero" />
    <SpiralDisks :can-pick-disk="canPickDisk" class="spiral-disks" />
    <ProjectsPage class="projects" />
    <ChessSection class="chess" />
    <SoundsSection class="sounds" />
  </div>
  <div ref="backgroundCanvasContainer" class="background-blob"></div>
</template>

<script>
// import useBreakpoints from "@/hooks/useBreakpoints";
import useGlobalBlob from "@/3d/blob";
import HeaderSection from "@/components/HeaderSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import SpiralDisks from "@/components/SpiralDisks.vue";
import ProjectsPage from "@/components/ProjectsPage.vue";
import ChessSection from "@/components/СhessSection.vue";
import SoundsSection from "@/components/SoundsSection.vue";
import useApp from "@/hooks/useApp";
// eslint-disable-next-line no-unused-vars
import { computed, onMounted, onUpdated, reactive, ref, watch } from "vue";
export default {
  components: {
    HeaderSection,
    HeroSection,
    SpiralDisks,
    ProjectsPage,
    ChessSection,
    SoundsSection,
  },
  setup(props, { emit }) {
    const slide = ref(null);
    const { doAnimate } = useApp();
    const canPickDisk = ref(false);
    const backgroundCanvasContainer = ref(null);
    onMounted(() => {
      useGlobalBlob(backgroundCanvasContainer.value, slide);
    });

    watch(slide, () => {
      emit("slideChange", slide.value);
      if (slide.value === 3) doActiveSpiral();
      else removeActiveSpiral();
    });

    // eslint-disable-next-line no-unused-vars
    function doActiveSpiral() {
      console.log("doActiveSpiral");
      // mainContainer.value.classList.add("container--fixed");
      canPickDisk.value = true;
      console.log("canPickDisk in spiral component is", canPickDisk.value);
      // document.addEventListener("wheel", wheelScroll.value);
    }

    function removeActiveSpiral() {
      console.log("removeActiveSpiral");
      // mainContainer.value.classList.remove("container--fixed");
      canPickDisk.value = false;
      // document.removeEventListener("wheel", wheelScroll.value);
    }

    onMounted(() => {
      document.fonts.ready.then(() => {
        doAnimate(slide);
      });
    });

    return {
      backgroundCanvasContainer,
      canPickDisk,
    };
  },
};
</script>

<style lang="scss">
.global-blob {
  filter: blur(0.5em);
  z-index: -1;
  position: absolute;

  &--1 {
    top: 67%;
    left: 34%;
  }

  &--2 {
    top: 60%;
    left: 55%;
  }
}

.container__blob {
  @include blob;
  z-index: -1;

  &--1 {
    top: 67%;
    left: 4%;
    width: 4000px;
    height: 4000px;
  }
}

.loading_cont {
  top: 25%;
  right: 25%;
  position: absolute;
  width: 100%;
  height: 100%;
  background: red;
  background: -webkit-linear-gradient(left top, #152a8e, #b1376c);
  background: -o-linear-gradient(bottom right, #152a8e, #b1376c);
  background: -moz-linear-gradient(bottom right, #152a8e, #b1376c);
  background: linear-gradient(to bottom right, #152a8e, #b1376c);
}

.loading_cont:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0px;
  background: url(https://next.atcom.gr/StaticData/Landing2017/Content/Media/dots-transparent.png)
    repeat scroll center center;
  opacity: 0.05;
  z-index: 0;
}

#loader {
  display: inline-block;
  position: relative;
  width: 800px;
  height: 800px;
  top: 50%;
  left: 50%;
  margin-left: -400px;
  margin-top: -400px;
}

rect {
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}

.blobs {
  -webkit-filter: url("#goo");
  filter: url("#goo");
}

.blob {
  fill: white;
}
</style>
