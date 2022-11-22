<template>
  <div class="disk-page" ref="container" :style="background">
    <div ref="containerSoundsSection" class="disk-page__container">
      <div class="disk-page__marquee-container">
        <div class="disk-page__marquee">{{ diskPhrase }}</div>
      </div>
      <div ref="imageContainer" class="disk-page__image-container">
        <img class="disk-page__image" :src="diskImage" alt="" />
      </div>

      <!-- <div class="label"></div> -->
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { PHRASE, TEXTURES } from "@/constants";
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
    // const $route = useRoute();
    // const indexDisk = ref(null);
    // const backgroundColor = ref(null);
    // const background = computed(() => {
    //   return backgroundColor.value
    //     ? `background-color:${backgroundColor.value};`
    //     : "background-color: #fff;";
    // });

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

      interact(".label").draggable();
      // console.log($route.params);
      // await nextTick();
      // indexDisk.value = $route.params;
      // backgroundColor.value = COLORS[$route.params.id];
      // console.log(COLORS[$route.params.id]);
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
    };
  },
};
</script>

<style lang="scss" src="./DiskPage.scss"></style>
