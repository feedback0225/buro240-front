<template>
  <section>
    <div class="login__container">
      <div class="login__marquee-container">
        <div class="login__marquee">Свяжитесь с нами &nbsp;</div>
      </div>

      <form class="login__form">
        <label class="login__label">
          Ваше имя:
          <input class="login__input" type="text" />
        </label>
        <label class="login__label">
          Номер телефона:
          <input class="login__input" type="text" />
        </label>
        <label class="login__label">
          Почта:
          <input class="login__input" type="text" />
        </label>
      </form>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      document.querySelectorAll(".login__input").forEach((inputEl) => {
        inputEl.value = "_";
        inputEl.addEventListener("input", (event) => {
          const pureString = inputEl.value.replaceAll("_", "").split("");
          if (event.inputType === "deleteContentBackward") {
            pureString.splice(-1);
            inputEl.value = pureString.join("") + "_";
          }
          inputEl.value = pureString.join("") + "_";
        });
      });
    });
  },
};
</script>

<style lang="scss" src="./Login.scss" />
