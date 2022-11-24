<template>
  <section>
    <div class="hero__container js-move">
      <h2 class="visually-hidden">Производство кино и рекламы</h2>

      <div class="hero__subtitle-group">
        <span class="hero__subtitle hero__subtitle--direction-left"
          >ПРОИЗВОДСТВО</span
        >
        <span class="hero__subtitle hero__subtitle--direction-right"
          >КИНО И РЕКЛАМЫ</span
        >

        <div class="hero__label">
          <span class="hero__label-text">МАРКЕТИНГ</span>
          <span class="hero__label-text">ДИСТРИБУЦИЯ</span>
          <SvgSprite symbol="snowflake" class="hero__label-svg" size="85" />
        </div>
      </div>
      <!-- <div ref="backgroundCanvasContainer" class="hero__background"></div> -->

      <div class="hero__blob hero__blob--1">
        <svg
          class="hero__blob-svg"
          viewBox="0 0 800 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="#d1d8e0">
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="
                M402.42893,349.96541Q314.97233,449.93082,182.34088,422.56918Q49.70943,395.20755,67.54843,262.74214Q85.38742,130.27673,193.54151,111.10881Q301.6956,91.94088,395.79057,170.97044Q489.88554,250,402.42893,349.96541Z;
                M378,368Q327,486,205.5,428Q84,370,103,263.5Q122,157,215,114Q308,71,368.5,160.5Q429,250,378,368Z;
                M370.5,335.5Q306,421,185,403Q64,385,70.5,255Q77,125,197.5,83Q318,41,376.5,145.5Q435,250,370.5,335.5Z;
                M371.00828,352.78151Q317.18216,455.56303,194.14904,417.74012Q71.11592,379.9172,63.89236,244.8344Q56.66881,109.7516,190.38408,66.22677Q324.09936,22.70193,374.46688,136.35096Q424.8344,250,371.00828,352.78151Z;
                M402.42893,349.96541Q314.97233,449.93082,182.34088,422.56918Q49.70943,395.20755,67.54843,262.74214Q85.38742,130.27673,193.54151,111.10881Q301.6956,91.94088,395.79057,170.97044Q489.88554,250,402.42893,349.96541Z;
                "
              ></animate>
            </path>
          </g>
        </svg>
      </div>

      <div class="hero__blob hero__blob--2">
        <svg
          class="hero__blob-svg"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="#ddddf2">
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="
              M53.8,-52.1C68.3,-39.3,77.6,-19.6,78.6,1C79.6,21.6,72.2,43.2,57.7,56.1C43.2,69,21.6,73.2,1.6,71.6C-18.4,70,-36.7,62.5,-52,49.6C-67.3,36.7,-79.5,18.4,-79.7,-0.2C-80,-18.8,-68.2,-37.6,-52.9,-50.4C-37.6,-63.2,-18.8,-70.1,0.4,-70.5C19.6,-70.9,39.3,-64.9,53.8,-52.1Z;
                M55.5,-55.9C71,-40,82.1,-20,83.7,1.6C85.2,23.1,77.2,46.2,61.7,59.7C46.2,73.2,23.1,77.1,2.1,75C-19,73,-37.9,64.9,-52.3,51.4C-66.7,37.9,-76.5,19,-78.5,-1.9C-80.4,-22.9,-74.5,-45.7,-60.1,-61.6C-45.7,-77.6,-22.9,-86.6,-1.4,-85.2C20,-83.8,40,-71.9,55.5,-55.9Z;
                M62.9,-59.5C78.9,-46.9,87.4,-23.4,87,-0.5C86.5,22.5,77,45,61,60.2C45,75.3,22.5,83.1,1.5,81.6C-19.6,80.2,-39.2,69.5,-52.7,54.4C-66.1,39.2,-73.4,19.6,-73.6,-0.2C-73.7,-19.9,-66.7,-39.8,-53.3,-52.5C-39.8,-65.1,-19.9,-70.5,1.8,-72.2C23.4,-74,46.9,-72.1,62.9,-59.5Z;
                M50.5,-50.9C64.4,-36.6,73.9,-18.3,76.3,2.4C78.6,23,73.9,46.1,60,62.7C46.1,79.3,23,89.5,0.9,88.6C-21.1,87.6,-42.3,75.5,-55.1,58.9C-68,42.3,-72.5,21.1,-72,0.5C-71.4,-20.1,-65.9,-40.2,-53,-54.5C-40.2,-68.9,-20.1,-77.5,-0.9,-76.6C18.3,-75.7,36.6,-65.3,50.5,-50.9Z;
              M53.8,-52.1C68.3,-39.3,77.6,-19.6,78.6,1C79.6,21.6,72.2,43.2,57.7,56.1C43.2,69,21.6,73.2,1.6,71.6C-18.4,70,-36.7,62.5,-52,49.6C-67.3,36.7,-79.5,18.4,-79.7,-0.2C-80,-18.8,-68.2,-37.6,-52.9,-50.4C-37.6,-63.2,-18.8,-70.1,0.4,-70.5C19.6,-70.9,39.3,-64.9,53.8,-52.1Z;
              "
              ></animate>
            </path>
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import useBlobsFlight from "@/hooks/useHeaderBlobsFlight";
import { ref, onMounted } from "vue";
// import useGlobalBlob from "@/3d/blob";
export default {
  inheritAttrs: true,
  setup() {
    const backgroundCanvasContainer = ref(null);
    const { animateBlobs } = useBlobsFlight();

    onMounted(() => {
      // useGlobalBlob(
      //   "vec4(0.85, 0.90, 0.91, 1.0)",
      //   backgroundCanvasContainer.value
      // );

      document.querySelectorAll(".hero__blob").forEach((blob) => {
        animateBlobs(blob);
      });
    });

    return {
      backgroundCanvasContainer,
    };
  },
};
</script>

<style lang="scss">
@import "@/style/hero.scss";

.hero__background {
  @include background-blob;
}
</style>
