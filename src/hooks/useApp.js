import gsap from "gsap";
import * as THREE from "three";
import { noise } from "@/3d/perlin";

function removeClass(elCls, cls) {
  const el = document.querySelector(elCls);
  console.log(el);
  el.classList.remove(cls);
}

export default function useApp() {
  // const shape02 =
  //   "M55,-57.5C69.3,-53.5,77.6,-34.3,74.1,-18.4C70.5,-2.5,55.1,10.2,46.1,27.3C37.1,44.4,34.4,65.9,25,70C15.5,74.1,-0.9,60.7,-16.9,52.4C-33,44,-48.7,40.6,-50.2,31.9C-51.7,23.2,-39.1,9.3,-38.6,-9.1C-38.2,-27.6,-49.9,-50.4,-45.4,-56.2C-41,-62,-20.5,-50.6,-0.1,-50.5C20.3,-50.4,40.6,-61.5,55,-57.5Z";
  // const shape03 =
  // "M32.1,-65.6C32.9,-49.5,18.8,-25.8,24.2,-11.7C29.7,2.4,54.7,6.9,57.3,10.2C60,13.5,40.2,15.6,29,20.8C17.7,25.9,15.1,34.1,11.5,31.8C7.9,29.5,3.4,16.7,-11.1,20.4C-25.5,24,-49.8,44.1,-56.4,44.4C-63.1,44.8,-52.1,25.3,-45.4,12.1C-38.6,-1.1,-36,-8.2,-35.9,-19.7C-35.8,-31.1,-38.1,-47,-32.5,-60.9C-26.9,-74.9,-13.5,-87,1.1,-88.7C15.7,-90.4,31.3,-81.8,32.1,-65.6Z";
  // const title = ref(null);
  // const titleUnderline = ref(null);
  // const subtitleLeft = ref(null);
  // const subtitleRight = ref(null);
  // const logo = ref(null);

  function doAnimate() {
    const tl = gsap.timeline();
    tl.fromTo(
      ".header-nav",
      { x: -100, opacity: 1, ease: "power" },
      {
        x: 0,
        duration: 0.5,
        ease: "power",
      }
    )
      .fromTo(
        ".header__title",
        { x: 1500, opacity: 1 },
        {
          x: 0,
          duration: 1.5,
          ease: "power",
          onComplete: () => removeClass(".header__header", "js-move"),
        },
        "-=1"
      )
      .fromTo(
        ".header__subtitle.header__subtitle--direction-left",
        { x: -1300, opacity: 1 },
        {
          x: 0,
          duration: 1.5,
          ease: "power",
          onComplete: () => removeClass(".header__subtitle", "js-move"),
        },
        "-=0.5"
      )
      .fromTo(
        ".header__subtitle.header__subtitle--direction-right",
        { x: 1900, opacity: 1 },
        {
          x: 0,
          duration: 1.5,
          ease: "power",
          onComplete: () => {
            removeClass(".header__subtitle", "js-move");
            removeClass(".morth", "invisible");
          },
        },
        "-=0.9"
      )
      .fromTo(
        ".svg path",
        { opacity: 1 },
        {
          transformOrigin: "50% 50%",
          ease: "back",
          duration: 3,
          attr: {
            d: "M random(0,600) random(0,600) Q random(0,500) random(0,500) random(00,600) random(0,600) Q random(0,600) random(0,400) random(0,600) random(0,400) Q random(0,600) random(0,600) random(0,400) random(0,400) z ",
            fill: "rgba(random(50,155), random(50,155), 150, random(0.58,0.9))",
          },
          repeat: -1,
          repeatRefresh: true,
          stagger: {
            each: 1,
            ease: "none",
            from: "center",
          },
        }
      );

    var renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("canvas"),
      antialias: true,
    });
    // default bg canvas color //
    renderer.setClearColor(0x7b7b7b);
    //  use device aspect ratio //
    renderer.setPixelRatio(window.devicePixelRatio);
    // set size of canvas within window //
    renderer.setSize(window.innerWidth, window.innerHeight);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    var sphere_geometry = new THREE.SphereGeometry(1, 128, 128);
    var material = new THREE.MeshNormalMaterial();

    var sphere = new THREE.Mesh(sphere_geometry, material);
    scene.add(sphere);

    var update = function () {
      // change '0.003' for more aggressive animation
      var time = performance.now() * 0.003;
      //console.log(time)

      //go through vertices here and reposition them

      // change 'k' value for more spikes
      var k = 3;
      for (var i = 0; i < sphere.geometry.vertices.length; i++) {
        var p = sphere.geometry.vertices[i];
        p.normalize().multiplyScalar(
          1 + 0.3 * noise.perlin3(p.x * k + time, p.y * k, p.z * k)
        );
      }
      sphere.geometry.computeVertexNormals();
      sphere.geometry.normalsNeedUpdate = true;
      sphere.geometry.verticesNeedUpdate = true;
    };

    function animate() {
      //sphere.rotation.x += 0.01;
      //sphere.rotation.y += 0.01;

      update();
      /* render scene and camera */
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
    // .seek(150);
    // gsap
    //   .to("#m", {
    //     attr: { d: shape02 },
    //     duration: 3,
    //     repeat: -1,
    //     yoyo: true,
    //     yoyoEase: "power",
    //   })
    //   .to("#m", {
    //     attr: { d: shape03 },
    //     duration: 3,
    //     repeat: -1,
    //     yoyo: true,
    //     yoyoEase: "power",
    //   });
  }

  return {
    doAnimate,
  };
}
