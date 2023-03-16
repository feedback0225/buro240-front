<template>
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
  </nav>
  <div class="container">
    <router-view @slideChange="changeSlide" @changeActive="changeActiveItem" />
  </div>
  <div ref="backgroundCanvasContainer" class="background-blob"></div>
</template>

<script>
import useBreakpoints from "@/hooks/useBreakpoints";
// import Scrollbar from "smooth-scrollbar";
import { onMounted, ref, computed } from "vue";
import gsap from "gsap";
// import useGlobalBlob from "@/3d/blob";

export default {
  name: "App",
  components: {},
  setup() {
    const firstTab = ref(null);
    const secondTab = ref(null);
    const thirdTab = ref(null);
    const activeClass = "header-nav__item--active";
    const slide = ref(null);

    // const backgroundCanvasContainer = ref(null);

    // const scroller = ref(null);

    function changeSlide(s) {
      slide.value = s;
    }

    const width = useBreakpoints();

    function removeActiveNavItem() {
      [firstTab.value, secondTab.value, thirdTab.value].forEach((item) =>
        item.classList.remove(activeClass)
      );
    }
    function changeActiveItem() {
      removeActiveNavItem();
      let bodyClass = document.querySelector("body").classList;
      if (bodyClass.contains("fp-viewing-1")) {
        firstTab.value.classList.add(activeClass);
      } else if (bodyClass.contains("fp-viewing-2")) {
        secondTab.value.classList.add(activeClass);
      } else if (bodyClass.contains("fp-viewing-5")) {
        thirdTab.value.classList.add(activeClass);
      } else if (bodyClass.contains("fp-viewing-6")) {
        thirdTab.value.classList.add(activeClass);
      }
    }
    const iconState = computed(() => {
      if (width.value < 821)
        return {
          logo: 75,
          decorationLogo: 21,
        };
      else
        return {
          logo: 85,
          decorationLogo: 41,
        };
    });

    onMounted(() => {
      gsap.fromTo(
        ".header-nav",
        { x: -100, opacity: 1, ease: "power" },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power",
        }
      );

      // useGlobalBlob(backgroundCanvasContainer.value, slide);
      // Scrollbar.init(document.querySelector(".scroller"), {
      //   damping: 0.1,
      //   thumbMinSize: 20,
      //   renderByPixels: true,
      //   alwaysShowTracks: true,
      // });
    });

    return {
      changeActiveItem,
      changeSlide,
      iconState,
      firstTab,
      secondTab,
      thirdTab,
      // backgroundCanvasContainer,
      // scroller,
    };
  },
};
</script>

<style lang="scss">
@import "@/style/page.scss";

.background-blob {
  @include background-blob;
}

.page__body {
  background-color: rgba(255, 255, 255, 0.4);
}

.header-nav {
  position: fixed;
  top: 40px;
  left: 30px;
  display: inline-flex;
  flex-direction: column;
  height: fit-content;
  overflow: visible;
  opacity: 1;
  z-index: 10;

  &--color-white {
    fill: #fff;
    color: #fff;
  }

  &--color-white .header-nav__item--active {
    color: #000;
  }

  @media (max-width: 820px) {
    top: 20px;
    left: 20px;
  }

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
</style>
