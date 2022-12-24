<template>
  <section>
    <div ref="containerSoundsSection" class="sounds__container js-move">
      <div class="sounds__marquee-container">
        <div class="sounds__marquee">
          SOUNDSSOUNDSOUNDSSOUNDSOUNDSSOUNDSOUNDSSOUND
        </div>
      </div>
      <div class="sounds__label">
        <div class="sounds__label-instance">
          <span class="sounds__label-hole"></span>
          <span class="sounds__label-text"> Lorem ipsum dolor sit amet, </span>
          <SvgSprite
            symbol="logo"
            class="sounds__label-logo"
            :size="iconState.logo"
          />
        </div>
        <div class="sounds__label-instance">
          <span class="sounds__label-hole"></span>
          <span class="sounds__label-text"> Lorem ipsum dolor sit amet, </span>
          <SvgSprite
            symbol="logo"
            class="sounds__label-logo"
            :size="iconState.logo"
          />
        </div>
        <div class="sounds__label-instance">
          <span class="sounds__label-hole"></span>
          <span class="sounds__label-text"> Lorem ipsum dolor sit amet, </span>
          <SvgSprite
            symbol="logo"
            class="sounds__label-logo"
            :size="iconState.logo"
          />
        </div>
        <div class="sounds__label-instance">
          <span class="sounds__label-hole"></span>
          <span class="sounds__label-text"> Lorem ipsum dolor sit amet, </span>
          <SvgSprite
            symbol="logo"
            class="sounds__label-logo"
            :size="iconState.logo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import useBreakpoints from "@/hooks/useBreakpoints";
import { computed, onMounted } from "vue";
import useBlobsFlight from "@/hooks/useHeaderBlobsFlight";

export default {
  inheritAttrs: true,
  components: {},
  setup() {
    const { animateBlobs } = useBlobsFlight();
    const width = useBreakpoints();
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
      document.querySelectorAll(".sounds__label-instance").forEach((label) => {
        animateBlobs(label);
      });
    });

    return {
      iconState,
    };
  },
};
</script>

<style lang="scss" src="./Sounds.scss" />
