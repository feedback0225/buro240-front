<template>
  <!-- <div class="container" ref="mainContainer"> -->
  <router-view />
  <!-- </div> -->
</template>

<script>
export default {
  name: "App",
  components: {},
  setup() {},
};
</script>

<style lang="scss">
@import "@/style/page.scss";

.page__body {
  background-color: rgba(255, 255, 255, 0.4);
}
</style>
