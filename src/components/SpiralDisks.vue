<template>
  <section>
    <div ref="containerSpiralDisks" class="spiral-disks__container js-move">
      <div ref="backgroundCanvasContainer" class="hero__background"></div>
    </div>
  </section>
</template>

<script>
import render from "@/3d/index";
import { onMounted, ref } from "vue";
export default {
  inheritAttrs: true,

  setup() {
    const containerSpiralDisks = ref(null);

    onMounted(() => {
      render(containerSpiralDisks.value);
    });

    return { containerSpiralDisks };
  },
};
</script>

<style lang="scss">
@import "@/style/spiral-disks.scss";
</style>
