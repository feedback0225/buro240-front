<template>
  <section>
    <div class="login__container">
      <div class="login__marquee-container">
        <div class="login__marquee">Свяжитесь с нами &nbsp;</div>
      </div>

      <label class="login__label">
        Ваше имя:
        <input ref="input" class="login__input" type="text" />
      </label>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const input = ref(null);

    onMounted(() => {
      input.value.value = "_";
      input.value.addEventListener("input", (event) => {
        const pureString = input.value.value.replaceAll("_", "").split("");
        if (event.inputType === "deleteContentBackward") {
          pureString.splice(-1);
          input.value.value = pureString.join("") + "_";
        }
        input.value.value = pureString.join("") + "_";
      });
    });

    return {
      input,
    };
  },
};
</script>

<style lang="scss" src="./Login.scss" />
