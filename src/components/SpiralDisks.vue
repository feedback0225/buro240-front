<template>
  <section>
    <div ref="containerSpiralDisks" class="spiral-disks__container js-move">
      <div
        ref="backgroundCanvasContainer"
        class="spiral-disks__background"
      ></div>
      <SvgSprite
        symbol="snowflake"
        class="spiral-disks__svg spiral-disks__svg--1"
        size="85"
      />
      <SvgSprite
        symbol="snowflake"
        class="spiral-disks__svg spiral-disks__svg--2"
        size="45"
      />
    </div>
  </section>
</template>

<script>
import render from "@/3d/index";
import { onMounted, ref, watch } from "vue";
// import useGlobalBlob from "@/3d/blob";
export default {
  inheritAttrs: true,
  props: {
    canPickDisk: Boolean,
  },
  // eslint-disable-next-line no-unused-vars
  setup(props, { emit }) {
    const backgroundCanvasContainer = ref(null);
    const containerSpiralDisks = ref(null);
    const cPickDisk = ref(null);

    onMounted(() => {
      // console.log(containerSpiralDisks.value);
      // useGlobalBlob(
      //   "vec4(0.87, 0.87, 0.95, 1.0)",
      //   backgroundCanvasContainer.value
      // );
      console.log(cPickDisk.value);
      render(containerSpiralDisks.value, cPickDisk);
    });

    watch(
      () => props.canPickDisk,
      (value) => {
        console.log("changeCanPickDisk");
        console.log(value);
        cPickDisk.value = props.canPickDisk;
      },
      {
        immediate: true,
        deep: true,
      }
    );

    return { containerSpiralDisks, backgroundCanvasContainer, cPickDisk };
  },
};
</script>

<style lang="scss">
@import "@/style/spiral-disks.scss";

.spiral-disks {
  &__background {
    @include background-blob;
  }

  &__svg {
    position: absolute;
    opacity: 0;

    &--1 {
      top: 4em;
      right: 4em;
      fill: #c6ceda;
    }

    &--2 {
      bottom: 10em;
      left: 10em;
      fill: #c6ceda;
    }
  }
}
</style>
