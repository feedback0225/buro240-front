<template>
  <section>
    <div class="decoration__container"></div>

    <div class="decoration__label">
      <a
        ref="labels"
        class="decoration__label-instance"
        v-for="i in 6"
        :key="i"
      >
        <span class="decoration__label-hole"></span>
        <span class="decoration__label-text">
          Lorem ipsum dolor sit amet,
        </span>
        <SvgSprite
          symbol="logo"
          class="decoration__label-logo"
          :size="iconState.logo"
        />
      </a>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import useBreakpoints from "@/hooks/useBreakpoints";
import useBlobsFlight from "@/hooks/useHeaderBlobsFlight";

export default {
  setup(props, { emit }) {
    const { animateBlobs } = useBlobsFlight();
    const width = useBreakpoints();
    const labels = ref(null);
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

    onMounted(() => {
      document
        .querySelectorAll(".decoration__label-instance")
        .forEach((label) => {
          animateBlobs(label);
          label.addEventListener("click", () => {
            emit("unlock", true);
          });
        });
    });

    return {
      iconState,
      labels,
    };
  },
};
</script>

<style lang="scss" src="./Decoration.scss" />
