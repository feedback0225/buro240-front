<template>
  <section>
    <div class="header__container">
      <slot name="logo-group"></slot>
      <!-- <nav class="header__nav">
        <div class="header__svg-group">
          <SvgSprite symbol="logo" size="85" />
          <SvgSprite
            symbol="decStar"
            class="header__svg-decoration icon--color-grey"
            size="41"
          />
        </div>
        <ul class="header__nav-list">
          <li class="header__nav-item header__nav-item--font-astralaga">
            SHOOTING
          </li>
          <li class="header__nav-item header__nav-item--font-astralaga">
            DESIGN
          </li>
          <li class="header__nav-item header__nav-item--font-astralaga">
            SOUND
          </li>
        </ul>
      </nav> -->

      <slot name="header"></slot>

      <slot name="header-left-side"></slot>

      <slot name="header-right-side"></slot>
      <!-- <svg>
        <use xlink:href="sprite.svg#logo"></use>
      </svg> -->
    </div>
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

    <marquee
      class="header__marquee"
      direction="right"
      scrolldelay="25"
      truespeed="truespeed"
      >АГЕНСТВО · БЮРО</marquee
    >
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
