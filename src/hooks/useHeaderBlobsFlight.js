import gsap from "gsap";

export default function useBlobsFlight() {
  function animateBlobs(blob) {
    // const blob = document.querySelector(cls);
    gsap.to(blob, {
      x: `random(${-blob.offsetLeft}, ${window.innerWidth - blob.offsetLeft})`,
      y: `random(${-blob.offsetTop}, ${window.innerHeight - blob.offsetTop})`,
      duration: 0,
    });
    gsap.to(blob, {
      x: `random(${-blob.offsetLeft}, ${window.innerWidth - blob.offsetLeft})`,
      y: `random(${-blob.offsetTop}, ${window.innerHeight - blob.offsetTop})`,
      duration: Math.random() * 10 + 10,
      ease: "ease",
      repeat: -1,
      repeatRefresh: true,
    });
  }

  // function animateBlobsMinimalRadius(blob) {
  //   gsap.to(blob, {
  //     x: "random(-20, 20, 5)",
  //     y: "random(-20, 10, 3)",
  //     duration: 0,
  //   });
  //   gsap.to(blob, {
  //     x: "random(-20, 20, 5)",
  //     y: "random(-20, 10, 3)",
  //     rotateX: 5,
  //     duration: 20,
  //     yoyo: true,
  //     yoyoEase: "back",
  //     ease: "ease",
  //     repeat: -1,
  //     repeatRefresh: true,
  //   });
  // }

  // const width = window.innerWidth;
  // const height = window.innerHeight;

  // console.log(width, height);

  // let num;
  // function getRandomNum(edge) {
  //   num = Math.floor(Math.random() * edge - edge / 2);

  //   if (num > edge || num < 0) {
  //     return getRandomNum(edge);
  //   } else return num;
  // }

  // const validPositionX = getRandomNum(width);
  // const validPositionY = getRandomNum(height);
  // const tl = gsap.timeline();
  // gsap.to(blob, {
  //   x: `random(${-blob.offsetLeft}, ${window.innerWidth - blob.offsetLeft})`,
  //   y: `random(${-blob.offsetTop}, ${window.innerHeight - blob.offsetTop})`,
  //   duration: 10,
  //   ease: "ease",
  //   repeat: -1,
  //   repeatRefresh: true,
  // });

  // function tick() {
  // requestAnimationFrame(() => {
  //   console.log(blob.offsetLeft);
  // });
  // setInterval(() => {
  // console.log(blob.offsetLeft);
  // }, 500);
  // }
  // tick();

  return {
    animateBlobs,
  };
}
