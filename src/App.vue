<template>
  <!-- <div class="container" ref="mainContainer"> -->
  <router-view @slideChange="changeBlobsColor" />
  <div ref="backgroundCanvasContainer" class="background-blob"></div>
  <!-- </div> -->
</template>

<script>
import { onMounted, ref } from "vue";
import useGlobalBlob from "@/3d/blob";
export default {
  name: "App",
  components: {},
  setup() {
    const slide = ref(null);
    const backgroundCanvasContainer = ref(null);
    onMounted(() => {
      useGlobalBlob(backgroundCanvasContainer.value, slide);
    });

    function changeBlobsColor(s) {
      slide.value = s;
    }

    return {
      backgroundCanvasContainer,
      changeBlobsColor,
    };
  },
};
</script>

<style lang="scss">
@import "@/style/page.scss";

.background-blob {
  @include background-blob;
}

.page__body {
  background-color: rgba(255, 255, 255, 0.4);
}
</style>
