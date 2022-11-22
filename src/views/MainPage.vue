<template>
  <div class="container" ref="mainContainer">
    <nav class="header-nav">
      <div class="header-nav__svg-group">
        <SvgSprite symbol="logo" :size="iconState.logo" />
        <SvgSprite
          symbol="decStar"
          class="header-nav__svg-decoration icon--color-grey"
          :size="iconState.decorationLogo"
        />
      </div>
      <ul class="header-nav__list">
        <li
          ref="firstTab"
          class="header-nav__item header-nav__item--font-astralaga header-nav__item--color-grey"
        >
          SHOOTING
        </li>
        <li
          ref="secondTab"
          class="header-nav__item header-nav__item--font-astralaga header-nav__item--color-blue"
        >
          DESIGN
        </li>
        <li
          ref="thirdTab"
          class="header-nav__item header-nav__item--font-astralaga header-nav__item--color-turquoise"
        >
          SOUND
        </li>
      </ul>
      <!-- <span class="header-nav__label">CREATIVE AGENCY</span> -->
    </nav>
    <HeaderSection class="header" />
    <HeroSection class="hero" />
    <SpiralDisks :can-pick-disk="canPickDisk" class="spiral-disks" />
    <ProjectsPage class="projects" />
    <ChessSection class="chess" />
    <SoundsSection class="sounds" />
  </div>
</template>

<script>
import useBreakpoints from "@/hooks/useBreakpoints";
import HeaderSection from "@/components/HeaderSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import SpiralDisks from "@/components/SpiralDisks.vue";
import ProjectsPage from "@/components/ProjectsPage.vue";
import ChessSection from "@/components/СhessSection.vue";
import SoundsSection from "@/components/SoundsSection.vue";
import useApp from "@/hooks/useApp";
// eslint-disable-next-line no-unused-vars
import { computed, onMounted, onUpdated, reactive, ref, watch } from "vue";
export default {
  components: {
    HeaderSection,
    HeroSection,
    SpiralDisks,
    ProjectsPage,
    ChessSection,
    SoundsSection,
  },
  setup(props, { emit }) {
    const slide = ref(null);
    const firstTab = ref(null);
    const secondTab = ref(null);
    const thirdTab = ref(null);
    const mainContainer = ref(null);
    const { doAnimate } = useApp();
    const canPickDisk = ref(false);
    const activeClass = "header-nav__item--active";
    // eslint-disable-next-line no-unused-vars
    const currentWidthWP = ref(null);

    const width = useBreakpoints();

    function removeActiveNavItem() {
      [firstTab.value, secondTab.value, thirdTab.value].forEach((item) =>
        item.classList.remove(activeClass)
      );
    }

    watch(slide, () => {
      removeActiveNavItem();
      emit("slideChange", slide.value);
      switch (slide.value) {
        case 1:
          removeActiveSpiral();
          break;
        case 2:
          firstTab.value.classList.add(activeClass);
          removeActiveSpiral();
          break;
        case 3:
          firstTab.value.classList.add(activeClass);
          doActiveSpiral();
          break;
        case 4:
          secondTab.value.classList.add(activeClass);
          removeActiveSpiral();
          break;
        case 5:
          secondTab.value.classList.add(activeClass);
          removeActiveSpiral();
          break;
        case 6:
          thirdTab.value.classList.add(activeClass);
          removeActiveSpiral();
          break;
      }
    });

    // function bindScroll(event) {
    //   // console.log(event.fn);
    //   wheelScroll.value = function (ev) {
    //     event.fn(ev);
    //   };
    // }

    // eslint-disable-next-line no-unused-vars
    function doActiveSpiral() {
      console.log("doActiveSpiral");
      // mainContainer.value.classList.add("container--fixed");
      canPickDisk.value = true;
      console.log("canPickDisk in spiral component is", canPickDisk.value);
      // document.addEventListener("wheel", wheelScroll.value);
    }

    function removeActiveSpiral() {
      console.log("removeActiveSpiral");
      // mainContainer.value.classList.remove("container--fixed");
      canPickDisk.value = false;
      // document.removeEventListener("wheel", wheelScroll.value);
    }
    const iconState = computed(() => {
      if (width.value < 821)
        return {
          logo: 50,
          decorationLogo: 21,
        };
      else
        return {
          logo: 85,
          decorationLogo: 41,
        };
    });

    // const iconState = computed(() => {});
    // function addListener() {
    //   document.addEventListener("resize", () => {
    //     console.log("resize");
    //   });
    // }

    onMounted(() => {
      // addListener();
      // useGlobalBlob(colorBlobs.value);

      // document
      //   .querySelectorAll(".global-blob")
      //   .forEach((blob) => animateBlobsMinimalRadius(blob));
      // animateBlobsMinimalRadius(document.querySelector(".container__blob"));
      document.fonts.ready.then(() => {
        doAnimate(slide);
      });
    });

    return {
      slide,
      canPickDisk,
      mainContainer,
      removeActiveSpiral,
      firstTab,
      secondTab,
      thirdTab,
      iconState,
    };
  },
};
</script>

<style lang="scss">
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

    &--color-grey {
      &::before {
        background-color: #c6ceda;
      }
    }

    &--color-blue {
      &::before {
        background-color: #9dc0ff;
      }
    }

    &--color-turquoise {
      &::before {
        background-color: #dae5e8;
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

      &.icon {
        &:first-child {
          margin-right: 8px;
        }
      }

      @media (max-width: 820px) {
        width: 80px;
      }
    }

    &-decoration {
      transform: translateY(-10px);
    }
  }

  &__label {
    display: none;
    @include font-family-astralaga;

    @media (max-width: 820px) {
      &__label {
        display: block;
      }
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
