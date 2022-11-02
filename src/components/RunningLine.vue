<template>
  <marquee
    class="running-line"
    :direction="direction"
    scrolldelay="50"
    truespeed="truespeed"
  >
    <slot></slot>
  </marquee>
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

<style lang="scss"></style>
