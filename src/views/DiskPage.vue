<template>
  <div class="container" :style="background">
    <h1>Page Disk</h1>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { COLORS } from "@/constants";
import {
  // useRouter,
  useRoute,
  // eslint-disable-next-line no-unused-vars
  // onBeforeRouteEnter,
  // beforeRouteEnter,
} from "vue-router";
export default {
  setup() {
    // const $router = useRouter();
    const $route = useRoute();
    // const indexDisk = ref(null);
    const backgroundColor = ref(null);
    const background = computed(() => {
      return backgroundColor.value
        ? `background-color:${backgroundColor.value};`
        : "background-color: #fff;";
    });

    onMounted(() => {
      // await nextTick();
      // indexDisk.value = $route.params;
      backgroundColor.value = COLORS[$route.params.id];
      console.log(COLORS[$route.params.id]);
    });

    // beforeRouteEnter((to, from, next) => {
    //   console.log($router);
    //   next();
    // });
    // onBeforeRouteEnter((to, from, next) => {
    //   console.log($router);
    //   next();
    // });

    return {
      background,
    };
  },
};
</script>

<style lang="scss"></style>
