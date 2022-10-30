<template>
  <section>
    <div class="hero__container js-move">
      <h2 class="visually-hidden">Производство кино и рекламы</h2>

      <span class="hero__subtitle hero__subtitle--direction-left"
        >ПРОИЗВОДСТВО</span
      >
      <span class="hero__subtitle hero__subtitle--direction-right"
        >КИНО И РЕКЛАМЫ</span
      >

      <div ref="backgroundCanvasContainer" class="hero__background"></div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import useGlobalBlob from "@/3d/blob";
export default {
  inheritAttrs: true,
  setup() {
    const backgroundCanvasContainer = ref(null);

    onMounted(() => {
      useGlobalBlob(
        "vec4(0.85, 0.90, 0.91, 1.0)",
        backgroundCanvasContainer.value
      );
    });

    return {
      backgroundCanvasContainer,
    };
  },
};
</script>

<style lang="scss">
@import "@/style/hero.scss";

.hero__background {
  @include background-blob;
}
</style>
