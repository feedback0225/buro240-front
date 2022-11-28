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
import { useRouter } from "vue-router";
import { gsap } from "gsap";
export default {
  inheritAttrs: true,
  props: {
    canPickDisk: Boolean,
  },
  setup(props) {
    const $router = useRouter();
    const backgroundCanvasContainer = ref(null);
    const containerSpiralDisks = ref(null);
    const cPickDisk = ref(null);
    const chooseDisk = ref(null);

    onMounted(() => {
      render(containerSpiralDisks.value, cPickDisk, chooseDisk);
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

    watch(chooseDisk, (value) => {
      if (value) {
        const root = document.querySelector(".container");
        const backgroundBlob = document.querySelector(".background-blob");
        gsap.to([root, backgroundBlob], {
          opacity: 0,
          duration: 1.5,
          onComplete: () =>
            $router.push({ name: "disk", params: { id: value } }),
        });
      }
    });

    return { containerSpiralDisks, backgroundCanvasContainer, cPickDisk };
  },
};
</script>

<style lang="scss" src="./SpiralDisks.scss" />
