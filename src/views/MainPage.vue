<template>
  <div class="container" ref="mainContainer">
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
    <HeaderSection class="header" />
    <HeroSection class="hero" />
    <SpiralDisks
      @wheelScroll="bindScroll"
      @unlockScrollMain="removeActiveSpiral"
      class="spiral-disks"
    />
    <ProjectsPage class="projects" />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import SpiralDisks from "@/components/SpiralDisks.vue";
import ProjectsPage from "@/components/ProjectsPage.vue";
import useApp from "@/hooks/useApp";
import { onMounted, ref, watch } from "vue";
export default {
  components: {
    HeaderSection,
    HeroSection,
    SpiralDisks,
    ProjectsPage,
    // SvgSprite
  },
  setup() {
    const slide = ref(null);
    const firstTab = ref(null);
    const secondTab = ref(null);
    const thirdTab = ref(null);
    const mainContainer = ref(null);
    const { doAnimate } = useApp();
    const wheelScroll = ref(null);

    function removeActiveNavItem() {
      [firstTab.value, secondTab.value, thirdTab.value].forEach((item) =>
        item.classList.remove("header-nav__item--active")
      );
    }

    watch(slide, () => {
      removeActiveNavItem();
      switch (slide.value) {
        case 1:
          // removeActiveSpiral();
          break;
        case 2:
          firstTab.value.classList.add("header-nav__item--active");
          // removeActiveSpiral();
          break;
        case 3:
          firstTab.value.classList.add("header-nav__item--active");
          // doActiveSpiral();
          break;
        case 4:
          secondTab.value.classList.add("header-nav__item--active");
          // removeActiveSpiral();
          break;
      }
    });

    function bindScroll(event) {
      // console.log(event.fn);
      wheelScroll.value = function (ev) {
        event.fn(ev);
      };
    }

    // eslint-disable-next-line no-unused-vars
    function doActiveSpiral() {
      console.log("doActiveSpiral");
      mainContainer.value.classList.add("container--fixed");
      // document.addEventListener("wheel", wheelScroll.value);
    }

    function removeActiveSpiral() {
      console.log("removeActiveSpiral");
      mainContainer.value.classList.remove("container--fixed");
      document.removeEventListener("wheel", wheelScroll.value);
    }

    onMounted(() => {
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
      wheelScroll,
      mainContainer,
      removeActiveSpiral,
      bindScroll,
      firstTab,
      secondTab,
      thirdTab,
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
