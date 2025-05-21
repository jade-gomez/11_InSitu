import * as THREE from "three";
import gsap from "gsap";
var element = document.querySelector(".element");
var width = element.clientWidth;
var height = element.clientHeight;
var scene = new THREE.Scene();
scene.background = null;

var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(width, height);
element.appendChild(renderer.domElement);
renderer.render(scene, camera);

//var geometry = new THREE.BoxGeometry(1, 1, 1);
//var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//var cube = new THREE.Mesh(geometry, material);
//cube.rotation.x = 0.5;
//cube.rotation.y = 0.5;
//scene.add(cube)<;>
var duck;
//renderer.render(scene, camera);
var position = { x: 0, y: -1 };
var scale = { x: 0.012, y: 0.012, z: 0.012 };
var rotation = { x: 0, y: -1.85, z: 0 };

gsap.to(position, {
  y: "+=0.1",
  duration: 1.5,

  repeat: -1,

  yoyo: true,

  ease: "sine.inOut",
});

document.querySelector(".element").addEventListener("click", () => {
  gsap.to(".fond-blanc", { opacity: 0, duration: 0.4, delay: 1.8 });

  var tl = gsap.timeline();
  tl.to(position, { x: 0.5, y: -1, duration: 1, ease: "power1.out" }, 0);
  tl.to(position, { x: 1.2, y: -1, duration: 1, ease: "power1.out" }, 1);
  tl.to(
    scale,
    { x: 0.012, y: 0.012, z: 0.012, duration: 1, ease: "power1.out" },
    0
  );
  tl.to(
    scale,
    { x: 0.0055, y: 0.0055, z: 0.0055, duration: 1, ease: "power1.out" },
    1
  );
  tl.to(
    rotation,
    {
      y: 10.5,

      duration: 1,

      ease: "power1.inOut",
    },
    0
  );
  tl.to(position, {
    y: "+=0.1",

    duration: 1.5,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut",
  });
});

function animate() {
  if (duck) {
    duck.position.y = position.y;
    duck.position.x = position.x;
    duck.scale.y = scale.y;
    duck.scale.x = scale.x;
    duck.scale.z = scale.z;
    duck.rotation.y = rotation.y;
  }

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const loader = new GLTFLoader();
loader.load("img/duck.glb", function (gltf) {
  scene.add(gltf.scene);
  duck = gltf.scene.children[0];
});
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);
