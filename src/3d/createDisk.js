import * as THREE from 'three';
// import cover from '../img/layout.jpg';

export default function crateDisk(position, color) {
  // const textureLoader = new THREE.TextureLoader();
// const cubeTextureLoader = new THREE.CubeTextureLoader();
  const parsedColor = parseInt ( color.replace("#","0x"), 16 );
  const diskMultyMaterial = [
    new THREE.MeshStandardMaterial({color: parsedColor}),
    new THREE.MeshStandardMaterial({color: parsedColor}),
    new THREE.MeshStandardMaterial({color: parsedColor}), // верхняя грань
    new THREE.MeshStandardMaterial({color: parsedColor}), // нижняя грань
    new THREE.MeshStandardMaterial({color: parsedColor}),
    new THREE.MeshStandardMaterial({color: parsedColor}),
  ]
  const diskGeomtry = new THREE.BoxGeometry(9, 0.5, 9);
  // const box2Material = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
  const disk = new THREE.Mesh(diskGeomtry, diskMultyMaterial);
  // box2.castShadow = true;

  disk.position.set(position.x, position.y, position.z);

  return disk;
}