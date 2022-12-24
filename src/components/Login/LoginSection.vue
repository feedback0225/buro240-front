<template>
  <section>
    <div class="login__container">
      <div class="login__marquee-container">
        <div class="login__marquee">Свяжитесь с нами &nbsp;</div>
      </div>

      <form class="login__form">
        <label class="login__label">
          Ваше имя:
          <div class="login__input-container">
            <input ref="name" class="login__input" type="text" />
            <span class="login__input-field"></span>
            <button ref="nameBtn" class="login__button"></button>
          </div>
        </label>
        <label class="login__label">
          Номер телефона:
          <div class="login__input-container">
            <input ref="phone" class="login__input" type="text" />
            <span class="login__input-field"></span>
            <button ref="phoneBtn" class="login__button"></button>
          </div>
        </label>
        <label class="login__label">
          Почта:
          <div class="login__input-container">
            <input ref="email" class="login__input" type="text" />
            <span class="login__input-field"></span>
            <button ref="emailBtn" class="login__button"></button>
          </div>
        </label>
      </form>

      <span class="login__success"> Отправлено </span>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const name = ref(null);
    const phone = ref(null);
    const email = ref(null);

    const nameBtn = ref(null);
    const phoneBtn = ref(null);
    const emailBtn = ref(null);

    onMounted(() => {
      nameBtn.value.addEventListener("click", (ev) => {
        ev.preventDefault();
        gsap
          .timeline()
          .to(nameBtn.value, {
            opacity: 0,
            duration: 0.5,
          })
          .fromTo(
            ".login__form .login__label:nth-child(2)",
            {
              display: "block",
              x: -1000,
              opacity: 0,
            },
            {
              visibility: "visible",
              x: 0,
              opacity: 1,
              duration: 1,
            }
          );
      });

      phoneBtn.value.addEventListener("click", (ev) => {
        ev.preventDefault();
        gsap
          .timeline()
          .to(phoneBtn.value, {
            opacity: 0,
            duration: 0.5,
          })
          .fromTo(
            ".login__form .login__label:nth-child(3)",
            {
              display: "block",
              x: -1000,
              opacity: 0,
            },
            {
              visibility: "visible",
              x: 0,
              opacity: 1,
              duration: 1,
            }
          );
      });

      emailBtn.value.addEventListener("click", (ev) => {
        ev.preventDefault();
        gsap
          .timeline()
          .to(".login__form", {
            x: 2000,
            duration: 1,
          })
          .fromTo(
            ".login__success",
            {
              x: -1000,
              display: "block",
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 1,
            }
          );
      });

      const inputContainers = document.querySelectorAll(".login__label");

      inputContainers.forEach((container) => {
        const input = container.querySelector(".login__input");
        const inputField = container.querySelector(".login__input-field");
        let timeout;
        input.addEventListener("input", function () {
          inputField.textContent = this.value;
          console.log("type");
          if (!inputField.classList.contains("show-carriage")) {
            inputField.classList.add("show-carriage");
          }

          clearTimeout(timeout);
          timeout = setTimeout(() => {
            inputField.classList.remove("show-carriage");
          }, 1000);
        });
      });

      // [name.value, phone.value, email.value].forEach((inputEl) => {
      //   inputEl.value = "_";
      //   inputEl.addEventListener("input", (event) => {
      //     const pureString = inputEl.value.replaceAll("_", "").split("");
      //     if (event.inputType === "deleteContentBackward") {
      //       pureString.splice(-1);
      //       inputEl.value = pureString.join("") + "_";
      //     }
      //     inputEl.value = pureString.join("") + "_";
      //   });
      // });
    });

    return {
      name,
      phone,
      email,
      nameBtn,
      phoneBtn,
      emailBtn,
    };
  },
};
</script>

<style lang="scss" src="./Login.scss" />
