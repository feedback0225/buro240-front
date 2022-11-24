import * as THREE from "three";
import { DISK_DEPTH, DISK_WIDTH, DISK_HEIGHT } from "@/constants";
// import cover from '../img/layout.jpg';

// eslint-disable-next-line no-unused-vars
export default function crateDisk(position, color, texture) {
  // import top from texture.top;
  // eslint-disable-next-line no-unused-vars
  const textureLoader = new THREE.TextureLoader();
  // const cubeTextureLoader = new THREE.CubeTextureLoader();
  const parsedColor = parseInt(color.replace("#", "0x"), 16);
  // const top = {
  //   color: color ? color : parsedColor("#c3c3c3"),
  //   map: texture.top ? texture.top : null,
  // };
  const diskMultyMaterial = [
    new THREE.MeshStandardMaterial({
      color: parsedColor,
      alphaTest: 0,
      transparent: true,
      // map: texture?.top ? textureLoader.load(texture?.top) ,
    }),
    new THREE.MeshStandardMaterial({
      color: parsedColor,
      alphaTest: 0,
      transparent: true,
      // map: textureLoader.load(texture?.top) || null,
    }),
    new THREE.MeshStandardMaterial({
      color: parsedColor,
      map: textureLoader.load(texture?.top),
      alphaTest: 0,
      // transparent: true,
    }), // верхняя грань
    new THREE.MeshStandardMaterial({
      color: parsedColor,
      alphaTest: 0,
      // transparent: true,
      // map: textureLoader.load(texture?.top) || null,
    }), // нижняя грань
    new THREE.MeshStandardMaterial({
      color: parsedColor,
      alphaTest: 0,
      // transparent: true,
      // map: textureLoader.load(texture?.top) || null,
    }),
    new THREE.MeshStandardMaterial({
      color: parsedColor,
      alphaTest: 0,
      transparent: true,
      // map: textureLoader.load(texture?.top) || null,
    }),
    // console.log("createDisk"),
  ];
  const diskGeomtry = new THREE.BoxGeometry(
    DISK_WIDTH,
    DISK_HEIGHT,
    DISK_DEPTH
  );
  // const box2Material = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
  const disk = new THREE.Mesh(diskGeomtry, diskMultyMaterial);
  // box2.castShadow = true;

  disk.position.set(position.x, position.y, position.z);

  return disk;
}
