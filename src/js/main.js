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
var position = { x: 0, y: 1 };
var scale = { x: 0.01, y: 0.01, z: 0.01 };

/*element.addEventListener("click", () => {
  gsap.to(duck.position, {
    x: 0.1,
    y: 0.1,
    duration: 1.5,
    ease: "power2.inOut",
  });
});*/
document.querySelector(".element").addEventListener("click", () => {
  gsap.to("h1", { opacity: 0, duration: 0.2, delay: 2 });

  var tl = gsap.timeline();
  tl.to(position, { x: 0.7, y: 0, duration: 1, ease: "power1.out" }, 0);
  tl.to(position, { x: 1.7, y: -0.5, duration: 1, ease: "power1.out" }, 1);
  tl.to(
    scale,
    { x: 0.01, y: 0.01, z: 0.01, duration: 1, ease: "power1.out" },
    0
  );
  tl.to(
    scale,
    { x: 0.005, y: 0.005, z: 0.005, duration: 1, ease: "power1.out" },
    1
  );
});
function animate() {
  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;
  if (duck) {
    //duck.rotation.y += 0.01;
    duck.position.y = position.y;
    duck.position.x = position.x;
    duck.scale.y = scale.y;
    duck.scale.x = scale.x;
    duck.scale.z = scale.z;
  }

  renderer.render(scene, camera);
}

//element.addEventListener("click", animate);

renderer.setAnimationLoop(animate);

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const loader = new GLTFLoader();
loader.load("../img/duck.glb", function (gltf) {
  scene.add(gltf.scene);
  duck = gltf.scene.children[0];
});
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);
