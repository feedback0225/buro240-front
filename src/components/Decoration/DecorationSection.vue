<template>
  <section>
    <div class="decoration__container"></div>

    <div class="decoration__label">
      <div
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
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import useBreakpoints from "@/hooks/useBreakpoints";
export default {
  setup(props, { emit }) {
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
      labels.value.forEach((label) => {
        label.addEventListener("click", () => emit("toForm"));
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
