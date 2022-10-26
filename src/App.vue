<template>
  <div class="container">
    <nav class="header-nav">
      <div class="header-nav__svg-group">
        <SvgSprite symbol="logo" size="85" />
        <SvgSprite
          symbol="decStar"
          class="header-nav__svg-decoration icon--color-grey"
          size="41"
        />
      </div>
      <ul class="header-nav__list">
        <li
          class="header-nav__item header-nav__item--active header-nav__item--font-astralaga"
        >
          SHOOTING
        </li>
        <li class="header-nav__item header-nav__item--font-astralaga">
          DESIGN
        </li>
        <li class="header-nav__item header-nav__item--font-astralaga">SOUND</li>
      </ul>
    </nav>
    <HeaderPage class="header" />
    <HeroPage class="hero" />
    <SpiralDisks class="spiral-disks" />

    <svg class="svg morth invisible" viewbox="0 0 500 500">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
        </filter>
      </defs>
      <g class="goo">
        <path
          d="M 100 350 Q 150 50 200 300 Q 250 550 300 350 Q 350 50 400 350 "
          fill="none"
          stroke=""
          stroke-width="3"
        ></path>
        <path
          d="M 100 350 Q 150 50 200 300 Q 250 550 300 350 Q 350 50 400 350 "
          fill="none"
          stroke=""
          stroke-width="3"
        ></path>
        <path
          d="M 100 350 Q 150 50 200 300 Q 250 550 300 350 Q 350 50 400 350 "
          fill="none"
          stroke="black"
          stroke-width="1"
        ></path>
        <path
          d="M 100 350 Q 150 50 200 300 Q 250 550 300 350 Q 350 50 400 350 "
          fill="none"
          stroke=""
          stroke-width="3"
        ></path>
        <path
          d="M 100 350 Q 150 50 200 300 Q 250 550 300 350 Q 350 50 400 350 "
          fill="none"
          stroke="white"
          stroke-width="3"
        ></path>
        <path
          d="M 100 350 Q 150 50 200 300 Q 250 550 300 350 Q 350 50 400 350 "
          fill="none"
          stroke="white"
          stroke-width="3"
        ></path>
      </g>
    </svg>

    <!-- <section class="section">
      <h1>page three</h1>
      <div class="blob blob--3">
        <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
          <g transform="translate(330, -159)">
            <path class="blob" fill="#C6CEDA">
              <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
                values="
                  M419.5,296.5Q443,343,398.5,361.5Q354,380,326.5,421.5Q299,463,250.5,462Q202,461,163,434Q124,407,109.5,365.5Q95,324,92.5,287Q90,250,83.5,208.5Q77,167,120,153.5Q163,140,184.5,98.5Q206,57,249.5,59.5Q293,62,346.5,61.5Q400,61,400,119.5Q400,178,398,214Q396,250,419.5,296.5Z;
                  M441,284.5Q393,319,365.5,339.5Q338,360,312,383Q286,406,252,397.5Q218,389,169,401Q120,413,113.5,366Q107,319,114,284.5Q121,250,100.5,209Q80,168,107,136Q134,104,166,63.5Q198,23,238,75.5Q278,128,335,100Q392,72,398,124Q404,176,446.5,213Q489,250,441,284.5Z;
                  M398.5,284.5Q394,319,396.5,378Q399,437,346.5,439Q294,441,256.5,413.5Q219,386,194,368.5Q169,351,113.5,346.5Q58,342,35.5,296Q13,250,48.5,210Q84,170,105.5,133Q127,96,170.5,95Q214,94,256.5,65.5Q299,37,333,70.5Q367,104,404,131Q441,158,422,204Q403,250,398.5,284.5Z;
                  M425,287.5Q405,325,400.5,379Q396,433,350,459.5Q304,486,259,446.5Q214,407,193,377.5Q172,348,114,346Q56,344,29,297Q2,250,29.5,203.5Q57,157,86.5,119.5Q116,82,161.5,72Q207,62,250.5,60.5Q294,59,319.5,95Q345,131,358.5,161Q372,191,408.5,220.5Q445,250,425,287.5Z;
                  M441,284.5Q393,319,365.5,339.5Q338,360,312,383Q286,406,252,397.5Q218,389,169,401Q120,413,113.5,366Q107,319,114,284.5Q121,250,100.5,209Q80,168,107,136Q134,104,166,63.5Q198,23,238,75.5Q278,128,335,100Q392,72,398,124Q404,176,446.5,213Q489,250,441,284.5Z;
                  M398.5,284.5Q394,319,396.5,378Q399,437,346.5,439Q294,441,256.5,413.5Q219,386,194,368.5Q169,351,113.5,346.5Q58,342,35.5,296Q13,250,48.5,210Q84,170,105.5,133Q127,96,170.5,95Q214,94,256.5,65.5Q299,37,333,70.5Q367,104,404,131Q441,158,422,204Q403,250,398.5,284.5Z;
                  M419.5,296.5Q443,343,398.5,361.5Q354,380,326.5,421.5Q299,463,250.5,462Q202,461,163,434Q124,407,109.5,365.5Q95,324,92.5,287Q90,250,83.5,208.5Q77,167,120,153.5Q163,140,184.5,98.5Q206,57,249.5,59.5Q293,62,346.5,61.5Q400,61,400,119.5Q400,178,398,214Q396,250,419.5,296.5Z
                  "
              ></animate>
            </path>
          </g>
          <g transform="translate(234, 221)">
            <path class="blob" fill="#C6CEDA">
              <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
                values="
                  M441,284.5Q393,319,365.5,339.5Q338,360,312,383Q286,406,252,397.5Q218,389,169,401Q120,413,113.5,366Q107,319,114,284.5Q121,250,100.5,209Q80,168,107,136Q134,104,166,63.5Q198,23,238,75.5Q278,128,335,100Q392,72,398,124Q404,176,446.5,213Q489,250,441,284.5Z;
                  M398.5,284.5Q394,319,396.5,378Q399,437,346.5,439Q294,441,256.5,413.5Q219,386,194,368.5Q169,351,113.5,346.5Q58,342,35.5,296Q13,250,48.5,210Q84,170,105.5,133Q127,96,170.5,95Q214,94,256.5,65.5Q299,37,333,70.5Q367,104,404,131Q441,158,422,204Q403,250,398.5,284.5Z;
                  M419.5,296.5Q443,343,398.5,361.5Q354,380,326.5,421.5Q299,463,250.5,462Q202,461,163,434Q124,407,109.5,365.5Q95,324,92.5,287Q90,250,83.5,208.5Q77,167,120,153.5Q163,140,184.5,98.5Q206,57,249.5,59.5Q293,62,346.5,61.5Q400,61,400,119.5Q400,178,398,214Q396,250,419.5,296.5Z;
                  M441,284.5Q393,319,365.5,339.5Q338,360,312,383Q286,406,252,397.5Q218,389,169,401Q120,413,113.5,366Q107,319,114,284.5Q121,250,100.5,209Q80,168,107,136Q134,104,166,63.5Q198,23,238,75.5Q278,128,335,100Q392,72,398,124Q404,176,446.5,213Q489,250,441,284.5Z
                  "
              ></animate>
            </path>
          </g>
          <g transform="translate(88, -38)">
            <path fill="#C6CEDA">
              <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
                values="
                  M441,284.5Q393,319,365.5,339.5Q338,360,312,383Q286,406,252,397.5Q218,389,169,401Q120,413,113.5,366Q107,319,114,284.5Q121,250,100.5,209Q80,168,107,136Q134,104,166,63.5Q198,23,238,75.5Q278,128,335,100Q392,72,398,124Q404,176,446.5,213Q489,250,441,284.5Z;
                  M419.5,296.5Q443,343,398.5,361.5Q354,380,326.5,421.5Q299,463,250.5,462Q202,461,163,434Q124,407,109.5,365.5Q95,324,92.5,287Q90,250,83.5,208.5Q77,167,120,153.5Q163,140,184.5,98.5Q206,57,249.5,59.5Q293,62,346.5,61.5Q400,61,400,119.5Q400,178,398,214Q396,250,419.5,296.5Z;
                  M425,287.5Q405,325,400.5,379Q396,433,350,459.5Q304,486,259,446.5Q214,407,193,377.5Q172,348,114,346Q56,344,29,297Q2,250,29.5,203.5Q57,157,86.5,119.5Q116,82,161.5,72Q207,62,250.5,60.5Q294,59,319.5,95Q345,131,358.5,161Q372,191,408.5,220.5Q445,250,425,287.5Z;
                  M425,287.5Q405,325,400.5,379Q396,433,350,459.5Q304,486,259,446.5Q214,407,193,377.5Q172,348,114,346Q56,344,29,297Q2,250,29.5,203.5Q57,157,86.5,119.5Q116,82,161.5,72Q207,62,250.5,60.5Q294,59,319.5,95Q345,131,358.5,161Q372,191,408.5,220.5Q445,250,425,287.5Z;
                  M441,284.5Q393,319,365.5,339.5Q338,360,312,383Q286,406,252,397.5Q218,389,169,401Q120,413,113.5,366Q107,319,114,284.5Q121,250,100.5,209Q80,168,107,136Q134,104,166,63.5Q198,23,238,75.5Q278,128,335,100Q392,72,398,124Q404,176,446.5,213Q489,250,441,284.5Z
                  "
              ></animate>
            </path>
          </g>
        </svg>
      </div>
    </section>
    <section class="section" id='parent' style="" >
      <h1>four slide</h1>
    </section> -->
    <!-- <SvgSprite symbol="blob1" size="500"/> -->
    <!-- <div class="blob blob--1">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100%"
        id="blobSvg"
      >
        <g transform="translate(133.16806030273438, 1.0592498779296875)">
          <path fill="#B53471">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M473.5,317Q459,384,397.5,411.5Q336,439,282.5,416Q229,393,178,392Q127,391,81,352Q35,313,64,258.5Q93,204,128.5,177Q164,150,194.5,111.5Q225,73,278.5,71.5Q332,70,396,92.5Q460,115,474,182.5Q488,250,473.5,317Z;
                      M409.5,306.5Q425,363,367,371.5Q309,380,267.5,400Q226,420,179.5,402.5Q133,385,130.5,335.5Q128,286,111.5,245Q95,204,105,149.5Q115,95,171,93.5Q227,92,267,108.5Q307,125,382.5,121Q458,117,426,183.5Q394,250,409.5,306.5Z;
                      M418.5,310Q437,370,386,403Q335,436,279.5,434.5Q224,433,176.5,411Q129,389,79,352Q29,315,48,255.5Q67,196,117.5,175.5Q168,155,194,98.5Q220,42,273,62.5Q326,83,388.5,102Q451,121,425.5,185.5Q400,250,418.5,310Z;
                      M440.5,315Q452,380,393,407Q334,434,275,458.5Q216,483,173,435.5Q130,388,90.5,348.5Q51,309,78,258Q105,207,122,164.5Q139,122,183.5,110.5Q228,99,286.5,71Q345,43,379,94.5Q413,146,421,198Q429,250,440.5,315Z;
                      M473.5,317Q459,384,397.5,411.5Q336,439,282.5,416Q229,393,178,392Q127,391,81,352Q35,313,64,258.5Q93,204,128.5,177Q164,150,194.5,111.5Q225,73,278.5,71.5Q332,70,396,92.5Q460,115,474,182.5Q488,250,473.5,317Z"
            ></animate>
          </path>
        </g>
      </svg>
    </div>
    <div class="blob blob--2">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100%"
        id="blobSvg"
      >
        <g transform="translate(135.680419921875, -5.611244201660156)">
          <path fill="#a29bfe">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M462,301Q445,352,411,393Q377,434,325.5,441Q274,448,222.5,453.5Q171,459,136,420.5Q101,382,83.5,338.5Q66,295,70.5,251Q75,207,72.5,148.5Q70,90,125.5,78.5Q181,67,227.5,58Q274,49,321,64.5Q368,80,393,121Q418,162,448.5,206Q479,250,462,301Z;
                      M449.5,291Q407,332,381.5,368Q356,404,317.5,448Q279,492,231,460Q183,428,139,408Q95,388,76.5,342.5Q58,297,43.5,246.5Q29,196,61.5,154Q94,112,140,96.5Q186,81,231.5,53.5Q277,26,323.5,51Q370,76,411.5,109.5Q453,143,472.5,196.5Q492,250,449.5,291Z;
                      M469,300Q441,350,412,396.5Q383,443,327.5,438Q272,433,219.5,451.5Q167,470,118,440.5Q69,411,73,352Q77,293,73,249Q69,205,79,156Q89,107,138,96Q187,85,231.5,62Q276,39,316,68Q356,97,391.5,127Q427,157,462,203.5Q497,250,469,300Z;
                      M480.5,306.5Q465,363,422,400Q379,437,329.5,465.5Q280,494,231,462Q182,430,125.5,420Q69,410,48,357.5Q27,305,43.5,254Q60,203,87.5,167Q115,131,145.5,93.5Q176,56,224,62Q272,68,324,67.5Q376,67,406.5,109.5Q437,152,466.5,201Q496,250,480.5,306.5Z;
                      M462,301Q445,352,411,393Q377,434,325.5,441Q274,448,222.5,453.5Q171,459,136,420.5Q101,382,83.5,338.5Q66,295,70.5,251Q75,207,72.5,148.5Q70,90,125.5,78.5Q181,67,227.5,58Q274,49,321,64.5Q368,80,393,121Q418,162,448.5,206Q479,250,462,301Z"
            ></animate>
          </path>
        </g>
      </svg>
    </div> -->
  </div>

  <div>
    <canvas id="canvas"></canvas>
  </div>
  <!-- <div class="parent row">
    <section class="one"></section>
    <section class="two"></section>
    <section class="three"></section>
    <section class="four"></section> -->
  <!-- </div> -->
  <!-- <SvgSprite></SvgSprite> -->
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import HeroPage from "@/components/HeroPage.vue";
import SpiralDisks from "@/components/SpiralDisks.vue";
import useApp from "@/hooks/useApp";
import { onMounted } from "vue";
// import { SvgSprite } from 'vue-svg-sprite'

export default {
  name: "App",
  components: {
    HeaderPage,
    HeroPage,
    SpiralDisks,
    // SvgSprite
  },
  setup() {
    const { doAnimate } = useApp();
    // const shape02 =
    //   "M55,-57.5C69.3,-53.5,77.6,-34.3,74.1,-18.4C70.5,-2.5,55.1,10.2,46.1,27.3C37.1,44.4,34.4,65.9,25,70C15.5,74.1,-0.9,60.7,-16.9,52.4C-33,44,-48.7,40.6,-50.2,31.9C-51.7,23.2,-39.1,9.3,-38.6,-9.1C-38.2,-27.6,-49.9,-50.4,-45.4,-56.2C-41,-62,-20.5,-50.6,-0.1,-50.5C20.3,-50.4,40.6,-61.5,55,-57.5Z";
    // const title = ref(null);
    // const subtitleLeft = ref(null);
    // const subtitleRight = ref(null);
    // onMounted(() => {
    //   const canvas = document.querySelector('#canvas');
    //   const parent = document.querySelector('#parent');
    //   console.log(canvas)
    //   render()
    //   parent.append(canvas);
    // })

    onMounted(() => {
      document.fonts.ready.then(() => {
        doAnimate();
      });
    });

    return {};
  },
};
</script>

<style lang="scss">
#app {
  background-color: rgba(255, 255, 255, 0.4);
}

.morth {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 35%;
  left: 30%;
  z-index: -1;
}

.invisible {
  opacity: 0;
}

.goo {
  filter: url("#goo");
}

.header-nav {
  position: sticky;
  top: 50px;
  left: 30px;
  display: inline-flex;
  flex-direction: column;
  height: fit-content;
  overflow: visible;
  opacity: 0;
  z-index: 10;

  &__list {
    @include list-reset;
    display: flex;
    flex-direction: column;
  }

  &__item {
    position: relative;
    display: inline-block;
    font-size: 18px;
    transition: font-size 0.3s ease-in-out;

    &::before {
      content: "";
      position: absolute;
      left: -30px;
      top: -4px;
      width: 120%;
      z-index: -1;
      height: 33px;
      background-color: tomato;
      transform: translateX(-121%);
      transition: translate 0.3s ease-in-out;
    }

    &--active {
      font-size: 25px;

      &::before {
        transform: none;
      }
    }

    &--font-astralaga {
      @include font-family-astralaga;
    }
  }

  &__svg {
    &-group {
      display: flex;
      justify-content: space-between;
      width: 150px;
      margin-bottom: 20px;

      *.icon {
        &:first-child {
          margin-right: 8px;
        }
      }
    }

    &-decoration {
      transform: translateY(-10px);
    }
  }
}
</style>
