import * as THREE from 'three';
import * as dat from 'dat.gui';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import crateDisk from './createDisk';

export default function render() {
const COLORS = ['#CAD2DC', '#F5CBB4', '#A2C2CE', '#C0C5AC', '#C1C6C9', '#EEEEEE', '#E3BEBC', '#454C65', '#6C4644', '#503F65'].reverse();
gsap.registerPlugin(CustomEase);

const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer({alpha: true, canvas });
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

let disksIsMove = true;

renderer.setSize(sizes.width, sizes.height);
renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
// scene.background = 'transparent'

const fov = 45;
const aspect = sizes.width / sizes.height;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// const orbit = new OrbitControls(camera, renderer.domElement)

// const axesHelper = new THREE.AxesHelper(7);
// scene.add(axesHelper)

camera.position.set(0, 0, 16);
// orbit.update()

const mousePositon = new THREE.Vector2();
window.addEventListener('mousemove', function(e) {
  mousePositon.x = (e.clientX / sizes.width) * 2 - 1;
  mousePositon.y = - (e.clientY / sizes.height) * 2 + 1;
});

const rayCaster = new THREE.Raycaster();

// const boxGeometry = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00})
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(box);





// const textureLoader = new THREE.TextureLoader();
// const cubeTextureLoader = new THREE.CubeTextureLoader();
// const box2MultyMaterial = [
//   new THREE.MeshStandardMaterial({color: 0xFFFFFF}),
//   new THREE.MeshStandardMaterial({map: textureLoader.load(cover)}),
//   new THREE.MeshStandardMaterial({map: textureLoader.load(cover)}),
//   new THREE.MeshStandardMaterial({map: textureLoader.load(cover)}),
//   new THREE.MeshStandardMaterial({map: textureLoader.load(cover)}),
//   new THREE.MeshStandardMaterial({map: textureLoader.load(cover), color: 0x00FF00}),
// ]
// const box2Geomtry = new THREE.BoxGeometry(7, 0.6, 7);
// const box2Material = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
// const box2 = new THREE.Mesh(box2Geomtry, box2MultyMaterial);
// box2.castShadow = true;

// box2.position.set(0, 10, 0)
// scene.add(box2);
const collectionDisk = [];
const collectionDiskPosition = [];
for (let i = 0; i < 10; i++) {
  const position = {x: 0, y: (i + 4) - 8, z: 0}
  collectionDiskPosition.push(position)
  const currentDisk = crateDisk(position, COLORS[i]);
  collectionDisk.push(currentDisk);
  scene.add(currentDisk);
}

// const planeGeomtry = new THREE.PlaneGeometry(30, 30);
// const planeMaterial = new THREE.MeshStandardMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
// const plane = new THREE.Mesh(planeGeomtry, planeMaterial);
// plane.rotation.x = -0.5 * Math.PI;
// plane.receiveShadow = true;
// scene.add(plane)

// const gridHelper = new THREE.GridHelper(30);
// scene.add(gridHelper)

// const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
// const sphereMaterial = new THREE.MeshStandardMaterial({color: 0x0000FF, wireframe: false});
// const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// sphere.position.x = 10;
// sphere.castShadow = true;
// scene.add(sphere);

// const sphereId = sphere.id;

// sphere.on('click', function(ev) {console.log(ev)});
// sphere.addEventListener('click', () => console.log('click'));


const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);
// const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
// directionalLight.position.set(-30, 50, 0);
// directionalLight.castShadow = true; 
// directionalLight.shadow.camera.bottom = -12;
// scene.add(directionalLight)

// const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(dLightHelper);

// const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(dLightShadowHelper)

const spotLight = new THREE.SpotLight(0xFFFFFF);
scene.add(spotLight)
spotLight.position.set(35, 40, 10);
// spotLight.rotation.set(0, 0, 0);
spotLight.castShadow = true;
spotLight.angle = 0.1;
// const sLightHelper = new THREE.SpotLightHelper(spotLight);
// scene.add(sLightHelper);

// let step = 0;
// let speed = 0.01;
let delay = 0;
// let rotation = 0;

const collectionTween = [];
collectionDisk.forEach((disk) => {
  delay+= 0.15;
  const currentTween = gsap.to(disk.rotation, { duration: 19, y: 9.5, ease: CustomEase.create("custom", "M0,0,C0,0,0.03,0.351,0.07,0.496,0.1,0.607,0.107,0.723,0.148,0.83,0.179,0.913,0.197,0.822,0.23,0.74,0.25,0.69,0.282,0.611,0.304,0.64,0.323,0.666,0.298,1.146,0.364,1.098,0.416,1.066,0.417,0.984,0.438,0.944,0.452,0.916,0.498,0.708,0.53,0.848,0.552,0.851,0.542,1.186,0.6,1.186,0.642,1.186,0.664,1.019,0.68,0.97,0.708,0.883,0.782,1.074,0.87,1.05,0.903,1.041,1,1,1,1"), yoyo: true, yoyoEase: 'back', repeat: -1, delay});
  collectionTween.push({disk, tween: currentTween});
});

const gui = new dat.GUI();
const options = {
  angle: 0.2,
  penumbra: 0,
  intensity: 1,
  cameraPositionY: 0, 


  lightX: 12,
  lightY: 0,
  lightZ: 80,

  diskOpenRotationX: 0,
  diskOpenRotationY: 0,
  diskOpenRotationZ: 1.5,
}

// gui.addColor(options, 'sphereColor').onChange(function(e) {
//   sphere.material.color.set(e)
// });

// gui.add(options, 'wireframe').onChange(function(e) {
//   sphere.material.wireframe = e;
// });

// gui.add(options, 'speed', 0, 0.1);
gui.add(options, 'angle', 0, 1)
gui.add(options, 'penumbra', 0, 1)
gui.add(options, 'intensity', 0, 1)
// gui.add(options, 'delay', 100, 1000)
gui.add(options, 'lightX', 0, 50);
gui.add(options, 'lightY', 0, 50);
gui.add(options, 'lightZ', 0, 100);
gui.add(options, 'cameraPositionY', -10, 20);
gui.add(options, 'diskOpenRotationX', 0, 10);
gui.add(options, 'diskOpenRotationY', 0, 10);
gui.add(options, 'diskOpenRotationZ', 0, 10);



let selectedDiskUuid = null;
let y = 0;
let position = 0;

addEventListener('wheel', (event) => {
  y = event.deltaY * 0.0055;
  if (selectedDiskUuid) {
    backToCommonFlow(collectionTween);
    doFlow();
    selectedDiskUuid = null;
  }

});

let toVertialTween;

function pickDisk() {
  console.log('pickDisk')
  rayCaster.setFromCamera(mousePositon, camera);
  const intersects = rayCaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    if (disksIsMove) stopFlow()
    // console.log(selectedDisk, intersects[0].object)
    if (selectedDiskUuid === intersects[0].object.uuid) return;
    selectedDiskUuid = intersects[0].object.uuid;

    let selectedDiskIsFouneded = false
    collectionTween.forEach((instance) => {
      if (instance.disk.uuid !== selectedDiskUuid) {
        console.log('to share disks')
        gsap.to(instance.disk.position, { 
          duration: 1,
          y: selectedDiskIsFouneded ? instance.disk.position.y + 4.5 : instance.disk.position.y - 4.5
        })
        // t1.pause()
      } else if (instance.disk.uuid === selectedDiskUuid) {
        console.log('to vertical disk')
        toVertialTween = gsap.to(instance.disk.rotation, { duration: 0.8, z: 1.5 })
        selectedDiskIsFouneded = true;
      } 
    })
    // if (selectedDisk && selectedDisk?.uuid === intersects[0].object.uuid) {
      // console.log(selectedDisk)
      // console.log(selectedDisk.uuid, intersects[0].object.uid)
      // doFlow();
    // } 
    // else {
      // selectedDisk = intersects[0].object;
      // console.log(selectedDisk)
      // console.log(selectedDisk.uuid)
      // stopFlow()
    // }

    
    // gsap.to(selectedDisk.position, { duration: 5, x: 9.5 })

  }
}

window.addEventListener('click', pickDisk)

window.addEventListener('resize', () =>{
  
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

function animate() {
  // box.rotation.x = time / 1000;
  // box.rotation.y = time / 1000;

  // step += options.speed;
  // sphere.position.y = 10 * Math.abs(Math.sin(step));

  spotLight.angle = options.angle;
  spotLight.penumbra = options.penumbra;
  spotLight.intensity = options.intensity;
  spotLight.position.set(options.lightX, options.lightY, options.lightZ);
  // sLightHelper.update()

  // rayCaster.setFromCamera(mousePositon, camera);
  // const intersects = rayCaster.intersectObjects(scene.children);
  // console.log(intersects)
  // camera.position.set(0, options.cameraPositionY, 13);

  position+=y;
  y *= .9;
  camera.position.y = position;



  // for (let i = 0; i < intersects.length; i++) {
  //   if (intersects[i].object.id === sphereId)
  //     intersects[i].object.material.color.set(0xFF0000)
  // }

  renderer.render(scene, camera);
}

function stopFlow() {
  collectionTween.forEach((instance) => instance.tween.pause())
  disksIsMove = false;
}

function doFlow() {
  collectionTween.forEach((instance) => instance.tween.play())
  disksIsMove = true;
}

function backToCommonFlow(collection) {
  console.log('backToCommonFlow');
  // let diskIsFound = false;

  for (let i = 0; i < collection.length; i++) {
    const currentDisk = collection[i].disk;
    // console.log( currentDisk.uuid, selectedDiskUuid)
    if (currentDisk.uuid === selectedDiskUuid) {
      console.log('change disk')

      // console.log(toVertialTween)
      // console.log(toVertialTween)

      // gsap.to(currentDisk.position, {
      //   duration: 1,
      //   y: 0
      // });

      // gsap.to(currentDisk.rotation, {
      //   duration: 1,
      //   z: 0,
      //   x: 0,
      //   y: 0,
      // });
      toVertialTween.reverse()
      // diskIsFound = true;
      
    } else {
      console.log('change other disk')
      // gsap.to(currentDisk.position, {
      //   duration: 1,
      //   y: diskIsFound ? currentDisk.position.y - 4 : currentDisk.position.y + 4
      // })
    }

    gsap.to(currentDisk.position, {duration: 3, y: collectionDiskPosition[i].y, x: collectionDiskPosition[i].x})
    
  }
  // const selectedInstance = collection.find((instance) => instance.disk.uuid === selectedDiskUuid);
  // gsap.to(selectedInstance.disk.rotation, {duration: 1, z : 0});
}


renderer.setAnimationLoop(animate) 


// const axesHelper = new THREE.AxesHelper(7);


// const boxWidth = 8;
// const boxHeight = 1;
// const boxDepth = 8;
// const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
// // const material = new THREE.MeshBasicMaterial({color: 0xbbbbbb});
// const material = new THREE.MeshPhongMaterial({color: 0xbbbbbb})
// const cube = new THREE.Mesh(geometry, material);

// scene.add(cube);

// const color = 0xFFFFFF;
// const intensity = 1;
// const light = new THREE.DirectionalLight(color, intensity);
// light.position.set(-1, 2, 4);
// scene.add(light);


// function animate(time) {
//   // time *= 0.001;  // convert time to seconds
//   if (resizeRendererToDisplaySize(renderer)) {
//     const canvas = renderer.domElement;
//     camera.aspect = window.clientWidth / window.clientHeight;
//     camera.updateProjectionMatrix();
//   }

//   const canvas = renderer.domElement;
//   camera.aspect = canvas.clientWidth / canvas.clientHeight;
//   camera.updateProjectionMatrix();
//   // cube.rotation.x = time;
//   cube.rotation.y = cube.rotation.y + 0.005;

//   renderer.render(scene, camera);

//   requestAnimationFrame(animate);
// }

// requestAnimationFrame(animate);

// function resizeRendererToDisplaySize(renderer) {
//   const canvas = renderer.domElement;
//   const width = canvas.clientWidth;
//   const height = canvas.clientHeight;
//   const needResize = canvas.width !== width || canvas.height !== height;
//   if (needResize) {
//     renderer.setSize(width, height, false);
//   }
//   return needResize;
// }
// }

// main()
}