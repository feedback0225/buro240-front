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
        <li class="header-nav__item header-nav__item--font-astralaga">
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
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import HeroPage from "@/components/HeroPage.vue";
import SpiralDisks from "@/components/SpiralDisks.vue";
import useApp from "@/hooks/useApp";
import { onMounted, ref } from "vue";

// import gsap from "gsap";
// import useBlobsFlight from "@/hooks/useHeaderBlobsFlight";
// import useGlobalBlob from "@/3d/blob";
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
    const slide = ref(null);

    // const colorBlobs = computed(() => {
    //   if (!slide.value) return "vec4(0.87, 0.87, 0.87, 1.0)";
    //   switch (slide.value) {
    //     case 1:
    //       return "vec4(0.87, 0.87, 0.87, 1.0)";
    //     case 2:
    //       return "vec4(0.85, 0.90, 0.91, 1.0)";
    //     case 3:
    //       return "vec4(0.78, 0.81, 0.85, 1.0)";
    //     default:
    //       return "vec4(0.87, 0.87, 0.87, 1.0)";
    //   }
    // });
    // const { animateBlobsMinimalRadius } = useBlobsFlight();

    //  M33.1,-62.3C39.6,-53.7,39.1,-38,40.7,-26.4C42.4,-14.9,46.2,-7.4,49.7,2C53.1,11.4,56.2,22.8,53.9,33.2C51.5,43.6,43.7,52.9,33.8,60.5C23.9,68.1,12,74,-1.8,77.2C-15.6,80.4,-31.3,80.8,-36.3,70.4C-41.3,59.9,-35.6,38.6,-40.6,25.1C-45.5,11.6,-60.9,5.8,-64.4,-2C-67.8,-9.7,-59.2,-19.5,-51.9,-28.8C-44.5,-38.1,-38.3,-46.9,-29.9,-54.4C-21.5,-61.9,-10.7,-68.1,1.3,-70.3C13.3,-72.6,26.7,-71,33.1,-62.3Z;
    //             M27.9,-60.2C31.8,-46.1,27.5,-29.7,35.7,-19.4C43.9,-9,64.5,-4.5,74.3,5.6C84,15.7,82.8,31.4,70.9,35.3C58.9,39.2,36.2,31.2,22.6,31.7C9,32.1,4.5,40.9,-4.3,48.4C-13,55.8,-26.1,61.8,-32.1,57C-38.2,52.2,-37.2,36.5,-46.3,25.2C-55.5,13.9,-74.9,7,-81.4,-3.8C-87.8,-14.5,-81.5,-28.9,-72.6,-40.7C-63.7,-52.5,-52.3,-61.7,-39.8,-70.9C-27.3,-80,-13.6,-89.2,-0.8,-87.8C12,-86.4,24,-74.4,27.9,-60.2Z;
    //             M30.1,-50.8C42.4,-45,58,-43.8,63.3,-36.1C68.5,-28.4,63.4,-14.2,64,0.4C64.7,15,71.2,29.9,67,39.5C62.8,49,48,53.2,35,56.6C22.1,60,11.1,62.6,3.1,57.2C-4.9,51.9,-9.8,38.7,-14.6,30.6C-19.4,22.5,-24.2,19.6,-27.5,15.4C-30.9,11.1,-32.8,5.6,-34.4,-0.9C-35.9,-7.4,-37.1,-14.8,-36.6,-23.9C-36.1,-33,-33.8,-43.8,-27.4,-53C-21,-62.2,-10.5,-69.8,-0.8,-68.4C8.9,-67,17.8,-56.6,30.1,-50.8Z;
    //             M19.7,-41.8C25.5,-30.7,30.2,-25.4,33.5,-19.4C36.9,-13.4,38.9,-6.7,46.5,4.4C54.2,15.6,67.5,31.1,65.1,38.8C62.8,46.5,44.7,46.3,31.2,45.4C17.8,44.6,8.9,43,-2.8,47.9C-14.5,52.7,-29,64,-35.9,61.1C-42.8,58.2,-42.2,41.1,-51,28.5C-59.9,16,-78.2,8,-77.1,0.6C-76,-6.8,-55.6,-13.5,-46.8,-26.2C-38,-38.8,-40.9,-57.3,-35.1,-68.4C-29.2,-79.4,-14.6,-82.9,-3.8,-76.2C6.9,-69.6,13.9,-52.8,19.7,-41.8Z;
    //           M33.1,-62.3C39.6,-53.7,39.1,-38,40.7,-26.4C42.4,-14.9,46.2,-7.4,49.7,2C53.1,11.4,56.2,22.8,53.9,33.2C51.5,43.6,43.7,52.9,33.8,60.5C23.9,68.1,12,74,-1.8,77.2C-15.6,80.4,-31.3,80.8,-36.3,70.4C-41.3,59.9,-35.6,38.6,-40.6,25.1C-45.5,11.6,-60.9,5.8,-64.4,-2C-67.8,-9.7,-59.2,-19.5,-51.9,-28.8C-44.5,-38.1,-38.3,-46.9,-29.9,-54.4C-21.5,-61.9,-10.7,-68.1,1.3,-70.3C13.3,-72.6,26.7,-71,33.1,-62.3Z;
    // const shape1 =
    //   "M33.1,-62.3C39.6,-53.7,39.1,-38,40.7,-26.4C42.4,-14.9,46.2,-7.4,49.7,2C53.1,11.4,56.2,22.8,53.9,33.2C51.5,43.6,43.7,52.9,33.8,60.5C23.9,68.1,12,74,-1.8,77.2C-15.6,80.4,-31.3,80.8,-36.3,70.4C-41.3,59.9,-35.6,38.6,-40.6,25.1C-45.5,11.6,-60.9,5.8,-64.4,-2C-67.8,-9.7,-59.2,-19.5,-51.9,-28.8C-44.5,-38.1,-38.3,-46.9,-29.9,-54.4C-21.5,-61.9,-10.7,-68.1,1.3,-70.3C13.3,-72.6,26.7,-71,33.1,-62.3Z;";
    // const shape2 =
    //   "M27.9,-60.2C31.8,-46.1,27.5,-29.7,35.7,-19.4C43.9,-9,64.5,-4.5,74.3,5.6C84,15.7,82.8,31.4,70.9,35.3C58.9,39.2,36.2,31.2,22.6,31.7C9,32.1,4.5,40.9,-4.3,48.4C-13,55.8,-26.1,61.8,-32.1,57C-38.2,52.2,-37.2,36.5,-46.3,25.2C-55.5,13.9,-74.9,7,-81.4,-3.8C-87.8,-14.5,-81.5,-28.9,-72.6,-40.7C-63.7,-52.5,-52.3,-61.7,-39.8,-70.9C-27.3,-80,-13.6,-89.2,-0.8,-87.8C12,-86.4,24,-74.4,27.9,-60.2Z;";
    // const shape3 =
    // " M30.1,-50.8C42.4,-45,58,-43.8,63.3,-36.1C68.5,-28.4,63.4,-14.2,64,0.4C64.7,15,71.2,29.9,67,39.5C62.8,49,48,53.2,35,56.6C22.1,60,11.1,62.6,3.1,57.2C-4.9,51.9,-9.8,38.7,-14.6,30.6C-19.4,22.5,-24.2,19.6,-27.5,15.4C-30.9,11.1,-32.8,5.6,-34.4,-0.9C-35.9,-7.4,-37.1,-14.8,-36.6,-23.9C-36.1,-33,-33.8,-43.8,-27.4,-53C-21,-62.2,-10.5,-69.8,-0.8,-68.4C8.9,-67,17.8,-56.6,30.1,-50.8Z;";
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
      // useGlobalBlob(colorBlobs.value);

      // document
      //   .querySelectorAll(".global-blob")
      //   .forEach((blob) => animateBlobsMinimalRadius(blob));
      // animateBlobsMinimalRadius(document.querySelector(".container__blob"));
      document.fonts.ready.then(() => {
        doAnimate();
      });

      // gsap.to(".global-blob--1", {
      //   attr: {
      //     d: shape1,
      //   },
      // });
    });

    return {
      slide,
    };
  },
};
</script>

<style lang="scss">
@import "@/style/page.scss";

body {
  background-color: rgba(255, 255, 255, 0.4);
}

.global-blob {
  filter: blur(0.5em);
  z-index: -1;
  position: absolute;

  &--1 {
    top: 67%;
    left: 34%;
  }

  &--2 {
    top: 60%;
    left: 55%;
  }
}

.container__blob {
  @include blob;
  z-index: -1;

  &--1 {
    top: 67%;
    left: 4%;
    width: 4000px;
    height: 4000px;
  }
}

.header-nav {
  position: fixed;
  top: 40px;
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
      transition: transform 0.3s ease-in-out;
      transform-origin: left;
    }

    &--active {
      font-size: 25px;

      &::before {
        transform: translateX(0);
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

.loading_cont {
  top: 25%;
  right: 25%;
  position: absolute;
  width: 100%;
  height: 100%;
  background: red;
  background: -webkit-linear-gradient(left top, #152a8e, #b1376c);
  background: -o-linear-gradient(bottom right, #152a8e, #b1376c);
  background: -moz-linear-gradient(bottom right, #152a8e, #b1376c);
  background: linear-gradient(to bottom right, #152a8e, #b1376c);
}

.loading_cont:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0px;
  background: url(https://next.atcom.gr/StaticData/Landing2017/Content/Media/dots-transparent.png)
    repeat scroll center center;
  opacity: 0.05;
  z-index: 0;
}

#loader {
  display: inline-block;
  position: relative;
  width: 800px;
  height: 800px;
  top: 50%;
  left: 50%;
  margin-left: -400px;
  margin-top: -400px;
}

rect {
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}

.blobs {
  -webkit-filter: url("#goo");
  filter: url("#goo");
}

.blob {
  fill: white;
}
</style>
