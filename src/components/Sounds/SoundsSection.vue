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
import { computed } from "vue";
import interact from "interactjs";
export default {
  inheritAttrs: true,
  components: {},
  setup() {
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

    interact(".label__instance").draggable({
      onmove: dragMoveListener,
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: "parent",
          endOnly: true,
        }),
      ],
    });

    function dragMoveListener(event) {
      var target = event.target,
        x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
        y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
      target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)" + "rotate(" + y / 2 + "deg)";
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    }

    return {
      iconState,
    };
  },
};
</script>

<style lang="scss" src="./Sounds.scss" />
