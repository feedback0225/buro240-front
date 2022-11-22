<template>
  <div class="running-line">
    <div class="running-line__marquee">
      <div class="running-line__right-half">
        <div class="running-line__marquee-container">
          <slot name="left-side"></slot>
          <!-- <span class="running-line__marquee-left"> DESIGN </span>
          <p class="running-line__marquee-right">
            ТУТ РАБОТЫ ХОРОШИЕ ТАКИЕ БУДУТ ЭТО НЕ МОЖЕТ НЕ РАДОВАТЬ ВОТ ПРИМЕР
            ТУТ ЕЩЕ ЧЕТ НАПИСАТЬ НАДО НУ КАК У ВАС ДЕЛА КАК ЖИЗНЬ В ЦЕЛОМ И
            ОБЩЕМ
          </p> -->
        </div>
        <div class="running-line__marquee-container">
          <slot name="right-side"></slot>
          <!-- <span class="running-line__marquee-left"> DESIGN </span>
          <p class="running-line__marquee-right">
            ТУТ РАБОТЫ ХОРОШИЕ ТАКИЕ БУДУТ ЭТО НЕ МОЖЕТ НЕ РАДОВАТЬ ВОТ ПРИМЕР
            ТУТ ЕЩЕ ЧЕТ НАПИСАТЬ НАДО НУ КАК У ВАС ДЕЛА КАК ЖИЗНЬ В ЦЕЛОМ И
            ОБЩЕМ
          </p> -->
        </div>
      </div>
      <div class="running-line__left-half">
        <div class="running-line__marquee-container">
          <slot name="left-side"></slot>
          <!-- <span class="running-line__marquee-left"> DESIGN </span>
          <p class="running-line__marquee-right">
            ТУТ РАБОТЫ ХОРОШИЕ ТАКИЕ БУДУТ ЭТО НЕ МОЖЕТ НЕ РАДОВАТЬ ВОТ ПРИМЕР
            ТУТ ЕЩЕ ЧЕТ НАПИСАТЬ НАДО НУ КАК У ВАС ДЕЛА КАК ЖИЗНЬ В ЦЕЛОМ И
            ОБЩЕМ
          </p> -->
        </div>
        <div class="running-line__marquee-container">
          <slot name="right-side"></slot>
          <!-- <span class="running-line__left"> DESIGN </span>
          <p class="running-line__right">
            ТУТ РАБОТЫ ХОРОШИЕ ТАКИЕ БУДУТ ЭТО НЕ МОЖЕТ НЕ РАДОВАТЬ ВОТ ПРИМЕР
            ТУТ ЕЩЕ ЧЕТ НАПИСАТЬ НАДО НУ КАК У ВАС ДЕЛА КАК ЖИЗНЬ В ЦЕЛОМ И
            ОБЩЕМ
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { computed } from "vue";
export default {
  props: {
    direction: {
      required: true,
      type: String,
    },
    position: {
      required: true,
      type: String,
    },
  },
  inheritAttrs: true,
  setup() {
    // const calculatedClass = computed(() => {
    //   if (props.position === "top") return "running-line--top";
    //   else if (props.position === "bottom") return "running-line--bottom";
    //   else if (props.position === "right") return "running-line--right";
    //   else if (props.position === "left") return "running-line--left";
    //   else return "";
    // });

    return {
      // calculatedClass,
    };
  },
};
</script>

<style lang="scss">
@import "@/style/running-line.scss";
</style>
