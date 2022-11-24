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
    <!-- <span class="header-nav__label">CREATIVE AGENCY</span> -->
  </nav>
  <router-view @slideChange="changeSlide" />
</template>

<script>
import useBreakpoints from "@/hooks/useBreakpoints";
import { onMounted, ref, watch, computed } from "vue";
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
    // onMounted(() => {
    //   useGlobalBlob(backgroundCanvasContainer.value, slide);
    // });

    function changeSlide(s) {
      slide.value = s;
    }

    const width = useBreakpoints();

    function removeActiveNavItem() {
      [firstTab.value, secondTab.value, thirdTab.value].forEach((item) =>
        item.classList.remove(activeClass)
      );
    }

    watch(slide, () => {
      removeActiveNavItem();
      switch (slide.value) {
        case 1:
          // firstTab.value.classList.add(activeClass);
          break;
        case 2:
          firstTab.value.classList.add(activeClass);
          break;
        case 3:
          firstTab.value.classList.add(activeClass);
          break;
        case 4:
          secondTab.value.classList.add(activeClass);
          break;
        case 5:
          secondTab.value.classList.add(activeClass);
          break;
        case 6:
          thirdTab.value.classList.add(activeClass);
          break;
      }
    });

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
    });

    return {
      // backgroundCanvasContainer,
      changeSlide,
      iconState,
      firstTab,
      secondTab,
      thirdTab,
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
