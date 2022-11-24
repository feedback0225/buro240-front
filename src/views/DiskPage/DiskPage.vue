<template>
  <div class="disk-page" ref="container" :style="background">
    <div ref="containerSoundsSection" class="disk-page__container">
      <div class="disk-page__marquee-container">
        <div class="disk-page__marquee">{{ diskPhrase }}</div>
      </div>
      <div ref="imageContainer" class="disk-page__image-container">
        <img class="disk-page__image" :src="diskImage" alt="" />
      </div>
      <div class="label">
        <div class="label__instance">
          <span class="label__instance-hole"></span>
          <span class="label__instance-text">
            Lorem ipsum dolor sit amet,
          </span>
          <SvgSprite
            symbol="logo"
            class="label__instance-logo"
            :size="iconState.logo"
          />
        </div>
        <div class="label__instance">
          <span class="label__instance-hole"></span>
          <span class="label__instance-text">
            Lorem ipsum dolor sit amet,
          </span>
          <SvgSprite
            symbol="logo"
            class="label__instance-logo"
            :size="iconState.logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { PHRASE, TEXTURES } from "@/constants";
import useBreakpoints from "@/hooks/useBreakpoints";
import interact from "interactjs";
// eslint-disable-next-line no-unused-vars
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import gsap from "gsap";
// import { COLORS } from "@/constants";
// import // useRouter,
// useRoute,
// eslint-disable-next-line no-unused-vars
// onBeforeRouteEnter,
// beforeRouteEnter,
// "vue-router";
export default {
  setup() {
    const phrase = PHRASE;
    // eslint-disable-next-line no-unused-vars
    const $route = useRoute();
    // const $router = useRouter();
    const imageContainer = ref(null);
    const container = ref(null);
    const width = useBreakpoints();
    // const $route = useRoute();
    // const indexDisk = ref(null);
    // const backgroundColor = ref(null);
    // const background = computed(() => {
    //   return backgroundColor.value
    //     ? `background-color:${backgroundColor.value};`
    //     : "background-color: #fff;";
    // });

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

    const diskPhrase = computed(() => {
      return PHRASE[$route.params.id];
    });
    const diskImage = computed(() => {
      return TEXTURES[$route.params.id].photo;
    });
    onMounted(() => {
      // setTimeout(() => {}, 9000);
      gsap.to(imageContainer.value, {
        delay: 7,
        duration: 1.4,
        opacity: 1,
        zIndex: 1,
      });

      gsap.to(document.querySelectorAll(".label__instance"), {
        delay: 8,
        duration: 2,
        opacity: 1,
      });

      // interact(".label").draggable({
      //   // enable inertial throwing
      //   inertia: true,

      //   modifiers: [
      //     interact.modifiers.restrictRect({
      //       restriction: "parent",
      //       endOnly: true,
      //     }),
      //   ],
      // });

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
    });

    // beforeRouteEnter((to, from, next) => {
    //   console.log($router);
    //   next();
    // });
    // onBeforeRouteEnter((to, from, next) => {
    //   console.log($router);
    //   next();
    // });

    return {
      phrase,
      container,
      $route,
      diskPhrase,
      diskImage,
      imageContainer,
      iconState,
    };
  },
};
</script>

<style lang="scss" src="./DiskPage.scss"></style>
