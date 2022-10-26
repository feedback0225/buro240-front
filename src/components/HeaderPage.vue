<template>
  <section>
    <div class="header__container">
      <div class="header__header js-move">
        <h1 class="header__title">
          <span class="header__title-text">БЮРО 240</span>
          <!-- <span class="header__title-underline"></span> -->
        </h1>

        <span class="js-move header__subtitle header__subtitle--direction-left"
          >КРЕАТИВНОЕ</span
        >

        <span class="js-move header__subtitle header__subtitle--direction-right"
          >ПРОИЗВОДСТВО</span
        >
      </div>

      <div class="header__label">
        MADE
        <br />
        BY
        <br />
        BUREAU240
      </div>

      <marquee
        class="header__marquee"
        direction="right"
        scrolldelay="50"
        truespeed="truespeed"
        >АГЕНСТВО · БЮРО</marquee
      >
    </div>
    <!-- <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        id="m"
        fill="#FF0066"
        d="M32,-33.5C46.5,-26,66.8,-20.7,68.4,-12C70,-3.3,53,8.7,42.5,22.4C32.1,36.2,28.2,51.6,20.5,52.9C12.8,54.3,1.2,41.4,-16.3,38C-33.8,34.5,-57.2,40.5,-68.4,33.5C-79.6,26.4,-78.7,6.4,-66.8,-3.2C-54.8,-12.7,-31.8,-11.6,-18.9,-19.4C-5.9,-27.3,-2.9,-44.1,2.9,-47.5C8.7,-51,17.5,-41.1,32,-33.5Z"
        transform="translate(100 100)"
      />
    </svg> -->

    <!-- <div class="blob blob--4">
      <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
        <g transform="translate(215, 10)">
          <path fill="#fdcb6e">
            <animate attributeName='d' dur="8000ms" repeatCount="indefinite"
              values="
              M345,268Q325,286,364,363.5Q403,441,348,439Q293,437,246.5,452Q200,467,150.5,451.5Q101,436,129.5,365Q158,294,178,272Q198,250,200,238.5Q202,227,152.5,146.5Q103,66,156.5,70Q210,74,237.5,128Q265,182,297.5,166Q330,150,319,186Q308,222,336.5,236Q365,250,345,268Z;
                M380,298.5Q452,347,395.5,354Q339,361,301,334Q263,307,235.5,370.5Q208,434,211.5,364Q215,294,193,291Q171,288,128,269Q85,250,90.5,213Q96,176,101.5,123Q107,70,171,127Q235,184,265,118.5Q295,53,330,79.5Q365,106,413.5,127Q462,148,385,199Q308,250,380,298.5Z;
                M381,282Q382,314,337,308Q292,302,279.5,314Q267,326,231.5,406.5Q196,487,164,442.5Q132,398,123,356.5Q114,315,98.5,282.5Q83,250,115,225.5Q147,201,158,175Q169,149,183.5,86Q198,23,234.5,90Q271,157,306.5,146Q342,135,386.5,149Q431,163,405.5,206.5Q380,250,381,282Z;
                M338,279.5Q373,309,344.5,321Q316,333,294,339Q272,345,254.5,326.5Q237,308,219.5,309Q202,310,153,315.5Q104,321,100,285.5Q96,250,146,237Q196,224,170,170.5Q144,117,176.5,93Q209,69,245.5,89Q282,109,343,83Q404,57,413,112Q422,167,362.5,208.5Q303,250,338,279.5Z;
              M345,268Q325,286,364,363.5Q403,441,348,439Q293,437,246.5,452Q200,467,150.5,451.5Q101,436,129.5,365Q158,294,178,272Q198,250,200,238.5Q202,227,152.5,146.5Q103,66,156.5,70Q210,74,237.5,128Q265,182,297.5,166Q330,150,319,186Q308,222,336.5,236Q365,250,345,268Z;
              "
            ></animate>
          </path>
        </g>
      </svg>
    </div> -->
  </section>
</template>

<script>
export default {
  inheritAttrs: true,
  setup() {},
};
</script>

<style lang="scss">
@import "@/style/header.scss";

.green {
  fill: green;
}
</style>
