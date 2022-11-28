import * as THREE from "three";
// import * as dat from 'dat.gui';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import { gsap } from "gsap";
// import { useRouter } from "vue-router";
import { CustomEase } from "gsap/CustomEase";
import crateDisk from "./createDisk";
import { COLORS, QUANTITY_DISKS, TEXTURES } from "@/constants";
import { watch } from "vue";

// eslint-disable-next-line no-unused-vars
export default function render(elContainer, canPickDisk, chooseDisk) {
  gsap.registerPlugin(CustomEase);

  const canvas = document.createElement("canvas");
  canvas.style.overflow = "scroll";
  elContainer.append(canvas);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas,
    antialias: true,
  });

  console.log(document.querySelector(".spiral-disks"));
  const sizes = {
    width: window.innerWidth,
    height: document.querySelector(".spiral-disks").clientHeight,
  };

  // console.log(sizes);

  let disksIsMove = true;
  // renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(sizes.width, sizes.height);
  // renderer.shadowMap.enabled = true;

  const scene = new THREE.Scene();
  // const gridHelper = new THREE.GridHelper(30);
  // scene.add(gridHelper);

  const fov = 45;
  const aspect = sizes.width / sizes.height;
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.set(0, 0, sizes.width > 820 ? 20 : 10);

  // light
  const ambientLight = new THREE.AmbientLight(0x333333);
  scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xffffff);
  scene.add(spotLight);
  spotLight.position.set(0, 0, 90);

  // spotLight.castShadow = true;
  spotLight.angle = 0.1;
  // ----

  const rayCaster = new THREE.Raycaster();
  const mousePositon = new THREE.Vector2();
  window.addEventListener("mousemove", function (e) {
    mousePositon.x = (e.clientX / sizes.width) * 2 - 1;
    mousePositon.y = -(e.clientY / sizes.height) * 2 + 1;
  });

  const collectionDisk = [];
  const collectionDiskPosition = [];
  const interval = sizes.width > 850 ? 1 : 0.4;
  const baseOffsetY = sizes.width > 850 ? 9.5 : 6;
  let positionInternal = 0;
  console.log(baseOffsetY);
  for (let i = 0; i < QUANTITY_DISKS; i++) {
    positionInternal += interval;
    const position = { x: 0, y: positionInternal + 4 - baseOffsetY, z: 0 };
    collectionDiskPosition.push(position);
    const currentDisk = crateDisk(position, COLORS[i], TEXTURES[i]);
    collectionDisk.push(currentDisk);
    scene.add(currentDisk);
  }

  // const topEdge = collectionDiskPosition[0].y - 0.5;
  // const bottomEdge =
  //   collectionDiskPosition[collectionDiskPosition.length - 1].y + 0.5;

  let delay = 0;

  const collectionTween = [];
  collectionDisk.forEach((disk) => {
    delay += 0.15;
    const currentTween = gsap.to(disk.rotation, {
      duration: 19,
      y: 9.5,
      ease: CustomEase.create(
        "custom",
        "M0,0,C0,0,0.03,0.351,0.07,0.496,0.1,0.607,0.107,0.723,0.148,0.83,0.179,0.913,0.197,0.822,0.23,0.74,0.25,0.69,0.282,0.611,0.304,0.64,0.323,0.666,0.298,1.146,0.364,1.098,0.416,1.066,0.417,0.984,0.438,0.944,0.452,0.916,0.498,0.708,0.53,0.848,0.552,0.851,0.542,1.186,0.6,1.186,0.642,1.186,0.664,1.019,0.68,0.97,0.708,0.883,0.782,1.074,0.87,1.05,0.903,1.041,1,1,1,1"
      ),
      yoyo: true,
      yoyoEase: "back",
      repeat: -1,
      delay,
    });
    collectionTween.push({ disk, tween: currentTween });
  });

  // let canScroll = true;
  // let canPickDisk = true;
  let selectedDiskUuid = null;
  let y = 0;
  let position = 0;

  // function doScroll(event) {
  //   if (canScroll) {
  //     y = event.deltaY * 0.0055;
  //     if (selectedDiskUuid) {
  //       backToCommonFlow(collectionTween);
  //       setTimeout(() => {
  //         doFlow();
  //         selectedDiskUuid = null;
  //         canPickDisk = true;
  //       }, 2000);
  //     }
  //   }
  // }

  // addEventListener("wheel", doScroll);

  let toVertialTween;
  // let toHorizontalTween;

  watch(canPickDisk, () => {
    console.log("canChangeDisk is changed");
  });

  function pickDisk() {
    if (!canPickDisk.value) return false;
    rayCaster.setFromCamera(mousePositon, camera);
    const intersects = rayCaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
      // console.log(selectedDiskUuid);
      if (selectedDiskUuid === intersects[0].object.uuid) return;
      if (selectedDiskUuid) {
        canPickDisk.value = false;
        backToCommonFlow(collectionTween);
        setTimeout(() => {
          doFlow();
          selectedDiskUuid = null;
          canPickDisk.value = true;
        }, 2000);
        return;
      }
      if (disksIsMove) stopFlow();
      selectedDiskUuid = intersects[0].object.uuid;

      let selectedDiskIsFouneded = false;
      collectionTween.forEach((instance, index) => {
        if (instance.disk.uuid !== selectedDiskUuid) {
          gsap.to(instance.disk.position, {
            duration: 1,
            y: selectedDiskIsFouneded
              ? instance.disk.position.y + 8.5
              : instance.disk.position.y - 8.5,
          });
          instance.disk.material.forEach((material) => {
            // console.log(material);
            gsap.to(material, {
              opacity: 0,
              duration: 4,
            });
            // console.log(material);
            if (material) {
              // material.transparent = true;
              // material.visible = false;
            }
            // gsap.to(material, {
            //   transparent: true,
            // });
          });
          // gsap.to(instance.disk.color, {
          //   a: 0,
          // });
        } else if (instance.disk.uuid === selectedDiskUuid) {
          selectedDiskIsFouneded = true;
          // canScroll = false;
          toVertialTween = gsap.to(instance.disk.rotation, {
            duration: 0.8,
            z: 3.14, // 1.55
            y: 3.14, // 1.58
            x: -1.6,
          });
          gsap
            .timeline()
            .to(instance.disk.position, {
              duration: 0.8,
              z: 0,
              y: 0,
              x: 0,
              delay: 0.5,
            })
            .to(camera.position, {
              duration: 3,
              z: sizes.width > 850 ? 11 : 6,
              y: instance.disk.position.y,
              onComplete: () => {
                chooseDisk.value = index;
              },
            });

          stopFlow();
        }
      });
    }
  }

  // eslint-disable-next-line no-unused-vars
  function opaictyDisks(exceptIndex) {
    // console.log(y);
    // console.log(camera.position);
    // console.log(collectionDisk);
    // collectionDisk.forEach((disk, index) => {
    //   if (index === exceptIndex) return;
    //   gsap.to(disk.color, {
    //     a: 0,
    //   });
    // });
  }

  window.addEventListener("click", pickDisk);

  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // eslint-disable-next-line no-unused-vars
  function smoothScroll(cls) {
    console.log(
      document.querySelector(cls).scrollIntoView({
        behavior: "smooth",
      })
    );
  }

  function tick() {
    position += y;
    y *= 0.9;
    // console.log(position, topEdge, bottomEdge);
    // if (position <= topEdge) {
    // camera.position.y = topEdge;
    // emit("unlockScrollMain", true);
    // smoothScroll(".hero");
    // position *= 0.0001;
    // setTimeout(() => {
    // position = topEdge + 1;
    // }, 200);
    // position = topEdge + 1;
    // emit("lockScrollSpiral", true);
    // } else if (position >= bottomEdge) {
    // camera.position.y = bottomEdge;
    // position = bottomEdge;
    // emit("unlockScrollMain", true);
    // smoothScroll(".projects");
    // position = topEdge - 1;
    // setTimeout(() => {
    // position *= 0.0001;
    // }, 200);
    // emit("lockScrollSpiral", true);
    // }
    camera.position.y = -position;

    renderer.render(scene, camera);
  }

  function stopFlow() {
    collectionTween.forEach((instance) => instance.tween.pause());
    disksIsMove = false;
  }

  function doFlow() {
    collectionTween.forEach((instance) => instance.tween.play());
    disksIsMove = true;
  }

  function backToCommonFlow(collection) {
    // let diskIsFound = false;
    // return new Promise((resolve) => {
    for (let i = 0; i < collection.length; i++) {
      const currentDisk = collection[i].disk;
      if (currentDisk.uuid === selectedDiskUuid) {
        toVertialTween.reverse();
        // toHorizontalTween.reverse();
        selectedDiskUuid = null;
        // diskIsFound = true;
      }
      gsap.to(currentDisk.position, {
        duration: 2,
        y: collectionDiskPosition[i].y,
        x: collectionDiskPosition[i].x,
        // onComplete: () => {
        //   console.log("comlete");
        //   return resolve();
        // },
      });
    }
    // resolve();
    // });
  }

  renderer.setAnimationLoop(tick);

  // return doScroll;
}
